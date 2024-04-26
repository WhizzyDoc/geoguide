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
        console.log(data)
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
                                <td>Population</td>
                                <td>${digify(c.population)}</td>
                            </tr>
                            <tr>
                                <td>CIOC</td>
                                <td>${c.cioc}</td>
                            </tr>
                            <tr>
                                <td>Coat of Arms</td>
                                <td><img src="${c.coatOfArms.svg}" alt="coat of arms" width="100px" height="auto" /></td>
                            </tr>
                            <tr>
                                <td>Flag</td>
                                <td><img src="${c.flags.svg}" alt="${c.flags.alt}" width="100px" height="auto" /></td>
                            </tr>
                            <tr>
                                <td>Capital</td>
                                <td>${stringy(c.capital)}</td>
                            </tr>
                            <tr>
                                <td>Continents</td>
                                <td>${stringy(c.continents)}</td>
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
                            <tr>
                                <td>Driving Side</td>
                                <td>${c.car.side}</td>
                            </tr>
                            <tr>
                                <td>Country Code</td>
                                <td>${c.idd.root}${c.idd.suffixes[0]}</td>
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

  /* language Translation */
  const fromText = document.querySelector(".from-text"),
toText = document.querySelector(".to-text"),
exchageIcon = document.querySelector(".exchange"),
selectTag = document.querySelectorAll(".controls select"),
icons = document.querySelectorAll(".row i");
translateBtn = document.querySelector("button"),

selectTag.forEach((tag, id) => {
    for (let country_code in lang_countries) {
        let selected = id == 0 ? country_code == "en-GB" ? "selected" : "" : country_code == "hi-IN" ? "selected" : "";
        let option = `<option ${selected} value="${country_code}">${lang_countries[country_code]}</option>`;
        tag.insertAdjacentHTML("beforeend", option);
    }
});

exchageIcon.addEventListener("click", () => {
    let tempText = fromText.value,
    tempLang = selectTag[0].value;
    fromText.value = toText.value;
    toText.value = tempText;
    selectTag[0].value = selectTag[1].value;
    selectTag[1].value = tempLang;
});

fromText.addEventListener("keyup", () => {
    if(!fromText.value) {
        toText.value = "";
    }
});

translateBtn.addEventListener("click", () => {
    let text = fromText.value.trim(),
    translateFrom = selectTag[0].value,
    translateTo = selectTag[1].value;
    if(!text) return;
    toText.setAttribute("placeholder", "Translating...");
    let apiUrl = `https://api.mymemory.translated.net/get?q=${text}&langpair=${translateFrom}|${translateTo}`;
    fetch(apiUrl)
    .then(res => res.json())
    .then(data => {
        toText.value = data.responseData.translatedText;
        data.matches.forEach(data => {
            if(data.id === 0) {
                toText.value = data.translation;
            }
        });
        toText.setAttribute("placeholder", "Translation");
    })
    .catch(err => {
        swal("Error", "Please check your internet connection!", "error");
        toText.setAttribute("placeholder", "Translation");
    })
});

icons.forEach(icon => {
    icon.addEventListener("click", ({target}) => {
        if(!fromText.value || !toText.value) return;
        if(target.classList.contains("fa-copy")) {
            if(target.id == "from") {
                navigator.clipboard.writeText(fromText.value);
            } else {
                navigator.clipboard.writeText(toText.value);
            }
        } else {
            let utterance;
            if(target.id == "from") {
                utterance = new SpeechSynthesisUtterance(fromText.value);
                utterance.lang = selectTag[0].value;
            } else {
                utterance = new SpeechSynthesisUtterance(toText.value);
                utterance.lang = selectTag[1].value;
            }
            speechSynthesis.speak(utterance);
        }
    });
});

/* Currency Converter */
const dropList = document.querySelectorAll("form select"),
fromCurrency = document.querySelector(".from select"),
toCurrency = document.querySelector(".to select"),
getButton = document.querySelector("form button");


for (let i = 0; i < dropList.length; i++) {
    for(let currency_code in country_list){
        // selecting USD by default as FROM currency and NPR as TO currency
        let selected = i == 0 ? currency_code == "USD" ? "selected" : "" : currency_code == "NPR" ? "selected" : "";
        // creating option tag with passing currency code as a text and value
        let optionTag = `<option value="${currency_code}" ${selected}>${currency_code}</option>`;
        // inserting options tag inside select tag
        dropList[i].insertAdjacentHTML("beforeend", optionTag);
    }
    dropList[i].addEventListener("change", e =>{
        loadFlag(e.target); // calling loadFlag with passing target element as an argument
    });
}

function loadFlag(element){
    for(let code in country_list){
        if(code == element.value){ // if currency code of country list is equal to option value
            let imgTag = element.parentElement.querySelector("img"); // selecting img tag of particular drop list
            // passing country code of a selected currency code in a img url
            imgTag.src = `https://flagcdn.com/48x36/${country_list[code].toLowerCase()}.png`;
        }
    }
}

window.addEventListener("load", ()=>{
    getExchangeRate();
});

getButton.addEventListener("click", e =>{
    e.preventDefault(); //preventing form from submitting
    getExchangeRate();
});

const exchangeIcon = document.querySelector("form .icon");
exchangeIcon.addEventListener("click", ()=>{
    let tempCode = fromCurrency.value; // temporary currency code of FROM drop list
    fromCurrency.value = toCurrency.value; // passing TO currency code to FROM currency code
    toCurrency.value = tempCode; // passing temporary currency code to TO currency code
    loadFlag(fromCurrency); // calling loadFlag with passing select element (fromCurrency) of FROM
    loadFlag(toCurrency); // calling loadFlag with passing select element (toCurrency) of TO
    getExchangeRate(); // calling getExchangeRate
})

function getExchangeRate(){
    const amount = document.querySelector("form input");
    const exchangeRateTxt = document.querySelector("form .exchange-rate");
    let amountVal = amount.value;
    // if user don't enter any value or enter 0 then we'll put 1 value by default in the input field
    if(amountVal == "" || amountVal == "0"){
        amount.value = "1";
        amountVal = 1;
    }
    exchangeRateTxt.innerText = "Getting exchange rate...";
    let url = `https://v6.exchangerate-api.com/v6/71042e7ca36bd4a13d50193c/latest/${fromCurrency.value}`;
    // fetching api response and returning it with parsing into js obj and in another then method receiving that obj
    fetch(url).then(response => response.json()).then(result =>{
        let exchangeRate = result.conversion_rates[toCurrency.value]; // getting user selected TO currency rate
        let totalExRate = (amountVal * exchangeRate).toFixed(2); // multiplying user entered value with selected TO currency rate
        exchangeRateTxt.innerText = `${amountVal} ${fromCurrency.value} = ${totalExRate} ${toCurrency.value}`;
    }).catch(() =>{ // if user is offline or any other error occured while fetching data then catch function will run
        exchangeRateTxt.innerText = "Something went wrong";
    });
}
