$(document).ready(function() {
    listCountries();
    $('#search').on('input', function() {
        listCountries()
    })
})

function getCountry(name) {
    fetch(`https://restcountries.com/v3.1/name/${name}`)
    .then(res => {return res.json()})
    .then(data => {
        //console.log(data)
        c  = data[data.length - 1]
        var temp = `
        <h5 class="w-bold-x">${c.name.common} ${c.flag}</h5>
                <h6 class="">${c.name.official}</h6>
                <div class="table-responsive">
                    <table class="table table-bordered">
                        <tbody class="d-table">
                            <tr>
                                <td>Area</td>
                                <td>${digify(c.area)} sq. km</td>
                            </tr>
                            <tr>
                                <td>Capital</td>
                                <td>${stringy(c.capital)}</td>
                            </tr>
                            <tr>
                                <td>Capital Info</td>
                                <td>
                                    Latitude: ${c.latlng[0]}°; Longitude: ${c.latlng[1]}°
                                </td>
                            </tr>
                            <tr>
                                <td>Borders</td>
                                <td>${stringy(c.borders)}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>`
        $('.content').html(temp)
        $('.loader').removeClass('active')
    })
    .catch(err => {
        console.log(err)
        swal('Eror', "Kindy check your internet connection and try again", "error")
        $('.loader').removeClass('active')
        $('.result').removeClass('active')
    })
}

function listCountries() {
    var c = $('#search').val();
    $('.c-table').empty()
    for(var i in countries) {
        n = (countries[i].name).toLowerCase()
        if(n.includes(c.toLowerCase())) {
            var temp = `
            <tr class="c-row" data-name="${countries[i].official}">
                <td>${countries[i].flag}  ${countries[i].name} - ${countries[i].official}</td>
                <td><i class="fa fa-chevron-right"></i>
            </tr>`
            $('.c-table').append(temp)
        }
    }
    $('.c-row').click(function() {
        var  s = $(this).data('name')
        $('.result').addClass('active')
        $('.loader').addClass('active')
        $('.content').empty()
        getCountry(s)
    })
}

function stringy(item) {
    if(item === undefined) {
        item = ["None"]
    }
    var result = item.join(', ')
    return result
}
function digify(n) {
    a = Number(n)
    return a.toLocaleString()
  }
