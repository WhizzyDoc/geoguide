const countries= [
    {
        "name": "Afghanistan",
        "official": "Islamic Republic of Afghanistan",
        "flag": "\ud83c\udde6\ud83c\uddeb"
    },
    {
        "name": "Albania",
        "official": "Republic of Albania",
        "flag": "\ud83c\udde6\ud83c\uddf1"
    },
    {
        "name": "Algeria",
        "official": "People's Democratic Republic of Algeria",
        "flag": "\ud83c\udde9\ud83c\uddff"
    },
    {
        "name": "American Samoa",
        "official": "American Samoa",
        "flag": "\ud83c\udde6\ud83c\uddf8"
    },
    {
        "name": "Andorra",
        "official": "Principality of Andorra",
        "flag": "\ud83c\udde6\ud83c\udde9"
    },
    {
        "name": "Angola",
        "official": "Republic of Angola",
        "flag": "\ud83c\udde6\ud83c\uddf4"
    },
    {
        "name": "Anguilla",
        "official": "Anguilla",
        "flag": "\ud83c\udde6\ud83c\uddee"
    },
    {
        "name": "Antarctica",
        "official": "Antarctica",
        "flag": "\ud83c\udde6\ud83c\uddf6"
    },
    {
        "name": "Antigua and Barbuda",
        "official": "Antigua and Barbuda",
        "flag": "\ud83c\udde6\ud83c\uddec"
    },
    {
        "name": "Argentina",
        "official": "Argentine Republic",
        "flag": "\ud83c\udde6\ud83c\uddf7"
    },
    {
        "name": "Armenia",
        "official": "Republic of Armenia",
        "flag": "\ud83c\udde6\ud83c\uddf2"
    },
    {
        "name": "Aruba",
        "official": "Aruba",
        "flag": "\ud83c\udde6\ud83c\uddfc"
    },
    {
        "name": "Australia",
        "official": "Commonwealth of Australia",
        "flag": "\ud83c\udde6\ud83c\uddfa"
    },
    {
        "name": "Austria",
        "official": "Republic of Austria",
        "flag": "\ud83c\udde6\ud83c\uddf9"
    },
    {
        "name": "Azerbaijan",
        "official": "Republic of Azerbaijan",
        "flag": "\ud83c\udde6\ud83c\uddff"
    },
    {
        "name": "Bahamas",
        "official": "Commonwealth of the Bahamas",
        "flag": "\ud83c\udde7\ud83c\uddf8"
    },
    {
        "name": "Bahrain",
        "official": "Kingdom of Bahrain",
        "flag": "\ud83c\udde7\ud83c\udded"
    },
    {
        "name": "Bangladesh",
        "official": "People's Republic of Bangladesh",
        "flag": "\ud83c\udde7\ud83c\udde9"
    },
    {
        "name": "Barbados",
        "official": "Barbados",
        "flag": "\ud83c\udde7\ud83c\udde7"
    },
    {
        "name": "Belarus",
        "official": "Republic of Belarus",
        "flag": "\ud83c\udde7\ud83c\uddfe"
    },
    {
        "name": "Belgium",
        "official": "Kingdom of Belgium",
        "flag": "\ud83c\udde7\ud83c\uddea"
    },
    {
        "name": "Belize",
        "official": "Belize",
        "flag": "\ud83c\udde7\ud83c\uddff"
    },
    {
        "name": "Benin",
        "official": "Republic of Benin",
        "flag": "\ud83c\udde7\ud83c\uddef"
    },
    {
        "name": "Bermuda",
        "official": "Bermuda",
        "flag": "\ud83c\udde7\ud83c\uddf2"
    },
    {
        "name": "Bhutan",
        "official": "Kingdom of Bhutan",
        "flag": "\ud83c\udde7\ud83c\uddf9"
    },
    {
        "name": "Bolivia",
        "official": "Plurinational State of Bolivia",
        "flag": "\ud83c\udde7\ud83c\uddf4"
    },
    {
        "name": "Bosnia and Herzegovina",
        "official": "Bosnia and Herzegovina",
        "flag": "\ud83c\udde7\ud83c\udde6"
    },
    {
        "name": "Botswana",
        "official": "Republic of Botswana",
        "flag": "\ud83c\udde7\ud83c\uddfc"
    },
    {
        "name": "Bouvet Island",
        "official": "Bouvet Island",
        "flag": "\ud83c\udde7\ud83c\uddfb"
    },
    {
        "name": "Brazil",
        "official": "Federative Republic of Brazil",
        "flag": "\ud83c\udde7\ud83c\uddf7"
    },
    {
        "name": "British Indian Ocean Territory",
        "official": "British Indian Ocean Territory",
        "flag": "\ud83c\uddee\ud83c\uddf4"
    },
    {
        "name": "British Virgin Islands",
        "official": "Virgin Islands",
        "flag": "\ud83c\uddfb\ud83c\uddec"
    },
    {
        "name": "Brunei",
        "official": "Nation of Brunei, Abode of Peace",
        "flag": "\ud83c\udde7\ud83c\uddf3"
    },
    {
        "name": "Bulgaria",
        "official": "Republic of Bulgaria",
        "flag": "\ud83c\udde7\ud83c\uddec"
    },
    {
        "name": "Burkina Faso",
        "official": "Burkina Faso",
        "flag": "\ud83c\udde7\ud83c\uddeb"
    },
    {
        "name": "Burundi",
        "official": "Republic of Burundi",
        "flag": "\ud83c\udde7\ud83c\uddee"
    },
    {
        "name": "Cambodia",
        "official": "Kingdom of Cambodia",
        "flag": "\ud83c\uddf0\ud83c\udded"
    },
    {
        "name": "Cameroon",
        "official": "Republic of Cameroon",
        "flag": "\ud83c\udde8\ud83c\uddf2"
    },
    {
        "name": "Canada",
        "official": "Canada",
        "flag": "\ud83c\udde8\ud83c\udde6"
    },
    {
        "name": "Cape Verde",
        "official": "Republic of Cabo Verde",
        "flag": "\ud83c\udde8\ud83c\uddfb"
    },
    {
        "name": "Caribbean Netherlands",
        "official": "Bonaire, Sint Eustatius and Saba",
        "flag": "\ud83c\udde7\ud83c\uddf6"
    },
    {
        "name": "Cayman Islands",
        "official": "Cayman Islands",
        "flag": "\ud83c\uddf0\ud83c\uddfe"
    },
    {
        "name": "Central African Republic",
        "official": "Central African Republic",
        "flag": "\ud83c\udde8\ud83c\uddeb"
    },
    {
        "name": "Chad",
        "official": "Republic of Chad",
        "flag": "\ud83c\uddf9\ud83c\udde9"
    },
    {
        "name": "Chile",
        "official": "Republic of Chile",
        "flag": "\ud83c\udde8\ud83c\uddf1"
    },
    {
        "name": "China",
        "official": "People's Republic of China",
        "flag": "\ud83c\udde8\ud83c\uddf3"
    },
    {
        "name": "Christmas Island",
        "official": "Territory of Christmas Island",
        "flag": "\ud83c\udde8\ud83c\uddfd"
    },
    {
        "name": "Cocos (Keeling) Islands",
        "official": "Territory of the Cocos (Keeling) Islands",
        "flag": "\ud83c\udde8\ud83c\udde8"
    },
    {
        "name": "Colombia",
        "official": "Republic of Colombia",
        "flag": "\ud83c\udde8\ud83c\uddf4"
    },
    {
        "name": "Comoros",
        "official": "Union of the Comoros",
        "flag": "\ud83c\uddf0\ud83c\uddf2"
    },
    {
        "name": "Cook Islands",
        "official": "Cook Islands",
        "flag": "\ud83c\udde8\ud83c\uddf0"
    },
    {
        "name": "Costa Rica",
        "official": "Republic of Costa Rica",
        "flag": "\ud83c\udde8\ud83c\uddf7"
    },
    {
        "name": "Croatia",
        "official": "Republic of Croatia",
        "flag": "\ud83c\udded\ud83c\uddf7"
    },
    {
        "name": "Cuba",
        "official": "Republic of Cuba",
        "flag": "\ud83c\udde8\ud83c\uddfa"
    },
    {
        "name": "Cura\u00e7ao",
        "official": "Country of Cura\u00e7ao",
        "flag": "\ud83c\udde8\ud83c\uddfc"
    },
    {
        "name": "Cyprus",
        "official": "Republic of Cyprus",
        "flag": "\ud83c\udde8\ud83c\uddfe"
    },
    {
        "name": "Czechia",
        "official": "Czech Republic",
        "flag": "\ud83c\udde8\ud83c\uddff"
    },
    {
        "name": "DR Congo",
        "official": "Democratic Republic of the Congo",
        "flag": "\ud83c\udde8\ud83c\udde9"
    },
    {
        "name": "Denmark",
        "official": "Kingdom of Denmark",
        "flag": "\ud83c\udde9\ud83c\uddf0"
    },
    {
        "name": "Djibouti",
        "official": "Republic of Djibouti",
        "flag": "\ud83c\udde9\ud83c\uddef"
    },
    {
        "name": "Dominica",
        "official": "Commonwealth of Dominica",
        "flag": "\ud83c\udde9\ud83c\uddf2"
    },
    {
        "name": "Dominican Republic",
        "official": "Dominican Republic",
        "flag": "\ud83c\udde9\ud83c\uddf4"
    },
    {
        "name": "Ecuador",
        "official": "Republic of Ecuador",
        "flag": "\ud83c\uddea\ud83c\udde8"
    },
    {
        "name": "Egypt",
        "official": "Arab Republic of Egypt",
        "flag": "\ud83c\uddea\ud83c\uddec"
    },
    {
        "name": "El Salvador",
        "official": "Republic of El Salvador",
        "flag": "\ud83c\uddf8\ud83c\uddfb"
    },
    {
        "name": "Equatorial Guinea",
        "official": "Republic of Equatorial Guinea",
        "flag": "\ud83c\uddec\ud83c\uddf6"
    },
    {
        "name": "Eritrea",
        "official": "State of Eritrea",
        "flag": "\ud83c\uddea\ud83c\uddf7"
    },
    {
        "name": "Estonia",
        "official": "Republic of Estonia",
        "flag": "\ud83c\uddea\ud83c\uddea"
    },
    {
        "name": "Eswatini",
        "official": "Kingdom of Eswatini",
        "flag": "\ud83c\uddf8\ud83c\uddff"
    },
    {
        "name": "Ethiopia",
        "official": "Federal Democratic Republic of Ethiopia",
        "flag": "\ud83c\uddea\ud83c\uddf9"
    },
    {
        "name": "Falkland Islands",
        "official": "Falkland Islands",
        "flag": "\ud83c\uddeb\ud83c\uddf0"
    },
    {
        "name": "Faroe Islands",
        "official": "Faroe Islands",
        "flag": "\ud83c\uddeb\ud83c\uddf4"
    },
    {
        "name": "Fiji",
        "official": "Republic of Fiji",
        "flag": "\ud83c\uddeb\ud83c\uddef"
    },
    {
        "name": "Finland",
        "official": "Republic of Finland",
        "flag": "\ud83c\uddeb\ud83c\uddee"
    },
    {
        "name": "France",
        "official": "French Republic",
        "flag": "\ud83c\uddeb\ud83c\uddf7"
    },
    {
        "name": "French Guiana",
        "official": "Guiana",
        "flag": "\ud83c\uddec\ud83c\uddeb"
    },
    {
        "name": "French Polynesia",
        "official": "French Polynesia",
        "flag": "\ud83c\uddf5\ud83c\uddeb"
    },
    {
        "name": "French Southern and Antarctic Lands",
        "official": "Territory of the French Southern and Antarctic Lands",
        "flag": "\ud83c\uddf9\ud83c\uddeb"
    },
    {
        "name": "Gabon",
        "official": "Gabonese Republic",
        "flag": "\ud83c\uddec\ud83c\udde6"
    },
    {
        "name": "Gambia",
        "official": "Republic of the Gambia",
        "flag": "\ud83c\uddec\ud83c\uddf2"
    },
    {
        "name": "Georgia",
        "official": "Georgia",
        "flag": "\ud83c\uddec\ud83c\uddea"
    },
    {
        "name": "Germany",
        "official": "Federal Republic of Germany",
        "flag": "\ud83c\udde9\ud83c\uddea"
    },
    {
        "name": "Ghana",
        "official": "Republic of Ghana",
        "flag": "\ud83c\uddec\ud83c\udded"
    },
    {
        "name": "Gibraltar",
        "official": "Gibraltar",
        "flag": "\ud83c\uddec\ud83c\uddee"
    },
    {
        "name": "Greece",
        "official": "Hellenic Republic",
        "flag": "\ud83c\uddec\ud83c\uddf7"
    },
    {
        "name": "Greenland",
        "official": "Greenland",
        "flag": "\ud83c\uddec\ud83c\uddf1"
    },
    {
        "name": "Grenada",
        "official": "Grenada",
        "flag": "\ud83c\uddec\ud83c\udde9"
    },
    {
        "name": "Guadeloupe",
        "official": "Guadeloupe",
        "flag": "\ud83c\uddec\ud83c\uddf5"
    },
    {
        "name": "Guam",
        "official": "Guam",
        "flag": "\ud83c\uddec\ud83c\uddfa"
    },
    {
        "name": "Guatemala",
        "official": "Republic of Guatemala",
        "flag": "\ud83c\uddec\ud83c\uddf9"
    },
    {
        "name": "Guernsey",
        "official": "Bailiwick of Guernsey",
        "flag": "\ud83c\uddec\ud83c\uddec"
    },
    {
        "name": "Guinea",
        "official": "Republic of Guinea",
        "flag": "\ud83c\uddec\ud83c\uddf3"
    },
    {
        "name": "Guinea-Bissau",
        "official": "Republic of Guinea-Bissau",
        "flag": "\ud83c\uddec\ud83c\uddfc"
    },
    {
        "name": "Guyana",
        "official": "Co-operative Republic of Guyana",
        "flag": "\ud83c\uddec\ud83c\uddfe"
    },
    {
        "name": "Haiti",
        "official": "Republic of Haiti",
        "flag": "\ud83c\udded\ud83c\uddf9"
    },
    {
        "name": "Heard Island and McDonald Islands",
        "official": "Heard Island and McDonald Islands",
        "flag": "\ud83c\udded\ud83c\uddf2"
    },
    {
        "name": "Honduras",
        "official": "Republic of Honduras",
        "flag": "\ud83c\udded\ud83c\uddf3"
    },
    {
        "name": "Hong Kong",
        "official": "Hong Kong Special Administrative Region of the People's Republic of China",
        "flag": "\ud83c\udded\ud83c\uddf0"
    },
    {
        "name": "Hungary",
        "official": "Hungary",
        "flag": "\ud83c\udded\ud83c\uddfa"
    },
    {
        "name": "Iceland",
        "official": "Iceland",
        "flag": "\ud83c\uddee\ud83c\uddf8"
    },
    {
        "name": "India",
        "official": "Republic of India",
        "flag": "\ud83c\uddee\ud83c\uddf3"
    },
    {
        "name": "Indonesia",
        "official": "Republic of Indonesia",
        "flag": "\ud83c\uddee\ud83c\udde9"
    },
    {
        "name": "Iran",
        "official": "Islamic Republic of Iran",
        "flag": "\ud83c\uddee\ud83c\uddf7"
    },
    {
        "name": "Iraq",
        "official": "Republic of Iraq",
        "flag": "\ud83c\uddee\ud83c\uddf6"
    },
    {
        "name": "Ireland",
        "official": "Republic of Ireland",
        "flag": "\ud83c\uddee\ud83c\uddea"
    },
    {
        "name": "Isle of Man",
        "official": "Isle of Man",
        "flag": "\ud83c\uddee\ud83c\uddf2"
    },
    {
        "name": "Israel",
        "official": "State of Israel",
        "flag": "\ud83c\uddee\ud83c\uddf1"
    },
    {
        "name": "Italy",
        "official": "Italian Republic",
        "flag": "\ud83c\uddee\ud83c\uddf9"
    },
    {
        "name": "Ivory Coast",
        "official": "Republic of C\u00f4te d'Ivoire",
        "flag": "\ud83c\udde8\ud83c\uddee"
    },
    {
        "name": "Jamaica",
        "official": "Jamaica",
        "flag": "\ud83c\uddef\ud83c\uddf2"
    },
    {
        "name": "Japan",
        "official": "Japan",
        "flag": "\ud83c\uddef\ud83c\uddf5"
    },
    {
        "name": "Jersey",
        "official": "Bailiwick of Jersey",
        "flag": "\ud83c\uddef\ud83c\uddea"
    },
    {
        "name": "Jordan",
        "official": "Hashemite Kingdom of Jordan",
        "flag": "\ud83c\uddef\ud83c\uddf4"
    },
    {
        "name": "Kazakhstan",
        "official": "Republic of Kazakhstan",
        "flag": "\ud83c\uddf0\ud83c\uddff"
    },
    {
        "name": "Kenya",
        "official": "Republic of Kenya",
        "flag": "\ud83c\uddf0\ud83c\uddea"
    },
    {
        "name": "Kiribati",
        "official": "Independent and Sovereign Republic of Kiribati",
        "flag": "\ud83c\uddf0\ud83c\uddee"
    },
    {
        "name": "Kosovo",
        "official": "Republic of Kosovo",
        "flag": "\ud83c\uddfd\ud83c\uddf0"
    },
    {
        "name": "Kuwait",
        "official": "State of Kuwait",
        "flag": "\ud83c\uddf0\ud83c\uddfc"
    },
    {
        "name": "Kyrgyzstan",
        "official": "Kyrgyz Republic",
        "flag": "\ud83c\uddf0\ud83c\uddec"
    },
    {
        "name": "Laos",
        "official": "Lao People's Democratic Republic",
        "flag": "\ud83c\uddf1\ud83c\udde6"
    },
    {
        "name": "Latvia",
        "official": "Republic of Latvia",
        "flag": "\ud83c\uddf1\ud83c\uddfb"
    },
    {
        "name": "Lebanon",
        "official": "Lebanese Republic",
        "flag": "\ud83c\uddf1\ud83c\udde7"
    },
    {
        "name": "Lesotho",
        "official": "Kingdom of Lesotho",
        "flag": "\ud83c\uddf1\ud83c\uddf8"
    },
    {
        "name": "Liberia",
        "official": "Republic of Liberia",
        "flag": "\ud83c\uddf1\ud83c\uddf7"
    },
    {
        "name": "Libya",
        "official": "State of Libya",
        "flag": "\ud83c\uddf1\ud83c\uddfe"
    },
    {
        "name": "Liechtenstein",
        "official": "Principality of Liechtenstein",
        "flag": "\ud83c\uddf1\ud83c\uddee"
    },
    {
        "name": "Lithuania",
        "official": "Republic of Lithuania",
        "flag": "\ud83c\uddf1\ud83c\uddf9"
    },
    {
        "name": "Luxembourg",
        "official": "Grand Duchy of Luxembourg",
        "flag": "\ud83c\uddf1\ud83c\uddfa"
    },
    {
        "name": "Macau",
        "official": "Macao Special Administrative Region of the People's Republic of China",
        "flag": "\ud83c\uddf2\ud83c\uddf4"
    },
    {
        "name": "Madagascar",
        "official": "Republic of Madagascar",
        "flag": "\ud83c\uddf2\ud83c\uddec"
    },
    {
        "name": "Malawi",
        "official": "Republic of Malawi",
        "flag": "\ud83c\uddf2\ud83c\uddfc"
    },
    {
        "name": "Malaysia",
        "official": "Malaysia",
        "flag": "\ud83c\uddf2\ud83c\uddfe"
    },
    {
        "name": "Maldives",
        "official": "Republic of the Maldives",
        "flag": "\ud83c\uddf2\ud83c\uddfb"
    },
    {
        "name": "Mali",
        "official": "Republic of Mali",
        "flag": "\ud83c\uddf2\ud83c\uddf1"
    },
    {
        "name": "Malta",
        "official": "Republic of Malta",
        "flag": "\ud83c\uddf2\ud83c\uddf9"
    },
    {
        "name": "Marshall Islands",
        "official": "Republic of the Marshall Islands",
        "flag": "\ud83c\uddf2\ud83c\udded"
    },
    {
        "name": "Martinique",
        "official": "Martinique",
        "flag": "\ud83c\uddf2\ud83c\uddf6"
    },
    {
        "name": "Mauritania",
        "official": "Islamic Republic of Mauritania",
        "flag": "\ud83c\uddf2\ud83c\uddf7"
    },
    {
        "name": "Mauritius",
        "official": "Republic of Mauritius",
        "flag": "\ud83c\uddf2\ud83c\uddfa"
    },
    {
        "name": "Mayotte",
        "official": "Department of Mayotte",
        "flag": "\ud83c\uddfe\ud83c\uddf9"
    },
    {
        "name": "Mexico",
        "official": "United Mexican States",
        "flag": "\ud83c\uddf2\ud83c\uddfd"
    },
    {
        "name": "Micronesia",
        "official": "Federated States of Micronesia",
        "flag": "\ud83c\uddeb\ud83c\uddf2"
    },
    {
        "name": "Moldova",
        "official": "Republic of Moldova",
        "flag": "\ud83c\uddf2\ud83c\udde9"
    },
    {
        "name": "Monaco",
        "official": "Principality of Monaco",
        "flag": "\ud83c\uddf2\ud83c\udde8"
    },
    {
        "name": "Mongolia",
        "official": "Mongolia",
        "flag": "\ud83c\uddf2\ud83c\uddf3"
    },
    {
        "name": "Montenegro",
        "official": "Montenegro",
        "flag": "\ud83c\uddf2\ud83c\uddea"
    },
    {
        "name": "Montserrat",
        "official": "Montserrat",
        "flag": "\ud83c\uddf2\ud83c\uddf8"
    },
    {
        "name": "Morocco",
        "official": "Kingdom of Morocco",
        "flag": "\ud83c\uddf2\ud83c\udde6"
    },
    {
        "name": "Mozambique",
        "official": "Republic of Mozambique",
        "flag": "\ud83c\uddf2\ud83c\uddff"
    },
    {
        "name": "Myanmar",
        "official": "Republic of the Union of Myanmar",
        "flag": "\ud83c\uddf2\ud83c\uddf2"
    },
    {
        "name": "Namibia",
        "official": "Republic of Namibia",
        "flag": "\ud83c\uddf3\ud83c\udde6"
    },
    {
        "name": "Nauru",
        "official": "Republic of Nauru",
        "flag": "\ud83c\uddf3\ud83c\uddf7"
    },
    {
        "name": "Nepal",
        "official": "Federal Democratic Republic of Nepal",
        "flag": "\ud83c\uddf3\ud83c\uddf5"
    },
    {
        "name": "Netherlands",
        "official": "Kingdom of the Netherlands",
        "flag": "\ud83c\uddf3\ud83c\uddf1"
    },
    {
        "name": "New Caledonia",
        "official": "New Caledonia",
        "flag": "\ud83c\uddf3\ud83c\udde8"
    },
    {
        "name": "New Zealand",
        "official": "New Zealand",
        "flag": "\ud83c\uddf3\ud83c\uddff"
    },
    {
        "name": "Nicaragua",
        "official": "Republic of Nicaragua",
        "flag": "\ud83c\uddf3\ud83c\uddee"
    },
    {
        "name": "Niger",
        "official": "Republic of Niger",
        "flag": "\ud83c\uddf3\ud83c\uddea"
    },
    {
        "name": "Nigeria",
        "official": "Federal Republic of Nigeria",
        "flag": "\ud83c\uddf3\ud83c\uddec"
    },
    {
        "name": "Niue",
        "official": "Niue",
        "flag": "\ud83c\uddf3\ud83c\uddfa"
    },
    {
        "name": "Norfolk Island",
        "official": "Territory of Norfolk Island",
        "flag": "\ud83c\uddf3\ud83c\uddeb"
    },
    {
        "name": "North Korea",
        "official": "Democratic People's Republic of Korea",
        "flag": "\ud83c\uddf0\ud83c\uddf5"
    },
    {
        "name": "North Macedonia",
        "official": "Republic of North Macedonia",
        "flag": "\ud83c\uddf2\ud83c\uddf0"
    },
    {
        "name": "Northern Mariana Islands",
        "official": "Commonwealth of the Northern Mariana Islands",
        "flag": "\ud83c\uddf2\ud83c\uddf5"
    },
    {
        "name": "Norway",
        "official": "Kingdom of Norway",
        "flag": "\ud83c\uddf3\ud83c\uddf4"
    },
    {
        "name": "Oman",
        "official": "Sultanate of Oman",
        "flag": "\ud83c\uddf4\ud83c\uddf2"
    },
    {
        "name": "Pakistan",
        "official": "Islamic Republic of Pakistan",
        "flag": "\ud83c\uddf5\ud83c\uddf0"
    },
    {
        "name": "Palau",
        "official": "Republic of Palau",
        "flag": "\ud83c\uddf5\ud83c\uddfc"
    },
    {
        "name": "Palestine",
        "official": "State of Palestine",
        "flag": "\ud83c\uddf5\ud83c\uddf8"
    },
    {
        "name": "Panama",
        "official": "Republic of Panama",
        "flag": "\ud83c\uddf5\ud83c\udde6"
    },
    {
        "name": "Papua New Guinea",
        "official": "Independent State of Papua New Guinea",
        "flag": "\ud83c\uddf5\ud83c\uddec"
    },
    {
        "name": "Paraguay",
        "official": "Republic of Paraguay",
        "flag": "\ud83c\uddf5\ud83c\uddfe"
    },
    {
        "name": "Peru",
        "official": "Republic of Peru",
        "flag": "\ud83c\uddf5\ud83c\uddea"
    },
    {
        "name": "Philippines",
        "official": "Republic of the Philippines",
        "flag": "\ud83c\uddf5\ud83c\udded"
    },
    {
        "name": "Pitcairn Islands",
        "official": "Pitcairn Group of Islands",
        "flag": "\ud83c\uddf5\ud83c\uddf3"
    },
    {
        "name": "Poland",
        "official": "Republic of Poland",
        "flag": "\ud83c\uddf5\ud83c\uddf1"
    },
    {
        "name": "Portugal",
        "official": "Portuguese Republic",
        "flag": "\ud83c\uddf5\ud83c\uddf9"
    },
    {
        "name": "Puerto Rico",
        "official": "Commonwealth of Puerto Rico",
        "flag": "\ud83c\uddf5\ud83c\uddf7"
    },
    {
        "name": "Qatar",
        "official": "State of Qatar",
        "flag": "\ud83c\uddf6\ud83c\udde6"
    },
    {
        "name": "Republic of the Congo",
        "official": "Republic of the Congo",
        "flag": "\ud83c\udde8\ud83c\uddec"
    },
    {
        "name": "Romania",
        "official": "Romania",
        "flag": "\ud83c\uddf7\ud83c\uddf4"
    },
    {
        "name": "Russia",
        "official": "Russian Federation",
        "flag": "\ud83c\uddf7\ud83c\uddfa"
    },
    {
        "name": "Rwanda",
        "official": "Republic of Rwanda",
        "flag": "\ud83c\uddf7\ud83c\uddfc"
    },
    {
        "name": "R\u00e9union",
        "official": "R\u00e9union Island",
        "flag": "\ud83c\uddf7\ud83c\uddea"
    },
    {
        "name": "Saint Barth\u00e9lemy",
        "official": "Collectivity of Saint Barth\u00e9lemy",
        "flag": "\ud83c\udde7\ud83c\uddf1"
    },
    {
        "name": "Saint Helena, Ascension and Tristan da Cunha",
        "official": "Saint Helena, Ascension and Tristan da Cunha",
        "flag": "\ud83c\uddf8\ud83c\udded"
    },
    {
        "name": "Saint Kitts and Nevis",
        "official": "Federation of Saint Christopher and Nevis",
        "flag": "\ud83c\uddf0\ud83c\uddf3"
    },
    {
        "name": "Saint Lucia",
        "official": "Saint Lucia",
        "flag": "\ud83c\uddf1\ud83c\udde8"
    },
    {
        "name": "Saint Martin",
        "official": "Saint Martin",
        "flag": "\ud83c\uddf2\ud83c\uddeb"
    },
    {
        "name": "Saint Pierre and Miquelon",
        "official": "Saint Pierre and Miquelon",
        "flag": "\ud83c\uddf5\ud83c\uddf2"
    },
    {
        "name": "Saint Vincent and the Grenadines",
        "official": "Saint Vincent and the Grenadines",
        "flag": "\ud83c\uddfb\ud83c\udde8"
    },
    {
        "name": "Samoa",
        "official": "Independent State of Samoa",
        "flag": "\ud83c\uddfc\ud83c\uddf8"
    },
    {
        "name": "San Marino",
        "official": "Republic of San Marino",
        "flag": "\ud83c\uddf8\ud83c\uddf2"
    },
    {
        "name": "Saudi Arabia",
        "official": "Kingdom of Saudi Arabia",
        "flag": "\ud83c\uddf8\ud83c\udde6"
    },
    {
        "name": "Senegal",
        "official": "Republic of Senegal",
        "flag": "\ud83c\uddf8\ud83c\uddf3"
    },
    {
        "name": "Serbia",
        "official": "Republic of Serbia",
        "flag": "\ud83c\uddf7\ud83c\uddf8"
    },
    {
        "name": "Seychelles",
        "official": "Republic of Seychelles",
        "flag": "\ud83c\uddf8\ud83c\udde8"
    },
    {
        "name": "Sierra Leone",
        "official": "Republic of Sierra Leone",
        "flag": "\ud83c\uddf8\ud83c\uddf1"
    },
    {
        "name": "Singapore",
        "official": "Republic of Singapore",
        "flag": "\ud83c\uddf8\ud83c\uddec"
    },
    {
        "name": "Sint Maarten",
        "official": "Sint Maarten",
        "flag": "\ud83c\uddf8\ud83c\uddfd"
    },
    {
        "name": "Slovakia",
        "official": "Slovak Republic",
        "flag": "\ud83c\uddf8\ud83c\uddf0"
    },
    {
        "name": "Slovenia",
        "official": "Republic of Slovenia",
        "flag": "\ud83c\uddf8\ud83c\uddee"
    },
    {
        "name": "Solomon Islands",
        "official": "Solomon Islands",
        "flag": "\ud83c\uddf8\ud83c\udde7"
    },
    {
        "name": "Somalia",
        "official": "Federal Republic of Somalia",
        "flag": "\ud83c\uddf8\ud83c\uddf4"
    },
    {
        "name": "South Africa",
        "official": "Republic of South Africa",
        "flag": "\ud83c\uddff\ud83c\udde6"
    },
    {
        "name": "South Georgia",
        "official": "South Georgia and the South Sandwich Islands",
        "flag": "\ud83c\uddec\ud83c\uddf8"
    },
    {
        "name": "South Korea",
        "official": "Republic of Korea",
        "flag": "\ud83c\uddf0\ud83c\uddf7"
    },
    {
        "name": "South Sudan",
        "official": "Republic of South Sudan",
        "flag": "\ud83c\uddf8\ud83c\uddf8"
    },
    {
        "name": "Spain",
        "official": "Kingdom of Spain",
        "flag": "\ud83c\uddea\ud83c\uddf8"
    },
    {
        "name": "Sri Lanka",
        "official": "Democratic Socialist Republic of Sri Lanka",
        "flag": "\ud83c\uddf1\ud83c\uddf0"
    },
    {
        "name": "Sudan",
        "official": "Republic of the Sudan",
        "flag": "\ud83c\uddf8\ud83c\udde9"
    },
    {
        "name": "Suriname",
        "official": "Republic of Suriname",
        "flag": "\ud83c\uddf8\ud83c\uddf7"
    },
    {
        "name": "Svalbard and Jan Mayen",
        "official": "Svalbard og Jan Mayen",
        "flag": "\ud83c\uddf8\ud83c\uddef"
    },
    {
        "name": "Sweden",
        "official": "Kingdom of Sweden",
        "flag": "\ud83c\uddf8\ud83c\uddea"
    },
    {
        "name": "Switzerland",
        "official": "Swiss Confederation",
        "flag": "\ud83c\udde8\ud83c\udded"
    },
    {
        "name": "Syria",
        "official": "Syrian Arab Republic",
        "flag": "\ud83c\uddf8\ud83c\uddfe"
    },
    {
        "name": "S\u00e3o Tom\u00e9 and Pr\u00edncipe",
        "official": "Democratic Republic of S\u00e3o Tom\u00e9 and Pr\u00edncipe",
        "flag": "\ud83c\uddf8\ud83c\uddf9"
    },
    {
        "name": "Taiwan",
        "official": "Republic of China (Taiwan)",
        "flag": "\ud83c\uddf9\ud83c\uddfc"
    },
    {
        "name": "Tajikistan",
        "official": "Republic of Tajikistan",
        "flag": "\ud83c\uddf9\ud83c\uddef"
    },
    {
        "name": "Tanzania",
        "official": "United Republic of Tanzania",
        "flag": "\ud83c\uddf9\ud83c\uddff"
    },
    {
        "name": "Thailand",
        "official": "Kingdom of Thailand",
        "flag": "\ud83c\uddf9\ud83c\udded"
    },
    {
        "name": "Timor-Leste",
        "official": "Democratic Republic of Timor-Leste",
        "flag": "\ud83c\uddf9\ud83c\uddf1"
    },
    {
        "name": "Togo",
        "official": "Togolese Republic",
        "flag": "\ud83c\uddf9\ud83c\uddec"
    },
    {
        "name": "Tokelau",
        "official": "Tokelau",
        "flag": "\ud83c\uddf9\ud83c\uddf0"
    },
    {
        "name": "Tonga",
        "official": "Kingdom of Tonga",
        "flag": "\ud83c\uddf9\ud83c\uddf4"
    },
    {
        "name": "Trinidad and Tobago",
        "official": "Republic of Trinidad and Tobago",
        "flag": "\ud83c\uddf9\ud83c\uddf9"
    },
    {
        "name": "Tunisia",
        "official": "Tunisian Republic",
        "flag": "\ud83c\uddf9\ud83c\uddf3"
    },
    {
        "name": "Turkey",
        "official": "Republic of Turkey",
        "flag": "\ud83c\uddf9\ud83c\uddf7"
    },
    {
        "name": "Turkmenistan",
        "official": "Turkmenistan",
        "flag": "\ud83c\uddf9\ud83c\uddf2"
    },
    {
        "name": "Turks and Caicos Islands",
        "official": "Turks and Caicos Islands",
        "flag": "\ud83c\uddf9\ud83c\udde8"
    },
    {
        "name": "Tuvalu",
        "official": "Tuvalu",
        "flag": "\ud83c\uddf9\ud83c\uddfb"
    },
    {
        "name": "Uganda",
        "official": "Republic of Uganda",
        "flag": "\ud83c\uddfa\ud83c\uddec"
    },
    {
        "name": "Ukraine",
        "official": "Ukraine",
        "flag": "\ud83c\uddfa\ud83c\udde6"
    },
    {
        "name": "United Arab Emirates",
        "official": "United Arab Emirates",
        "flag": "\ud83c\udde6\ud83c\uddea"
    },
    {
        "name": "United Kingdom",
        "official": "United Kingdom of Great Britain and Northern Ireland",
        "flag": "\ud83c\uddec\ud83c\udde7"
    },
    {
        "name": "United States",
        "official": "United States of America",
        "flag": "\ud83c\uddfa\ud83c\uddf8"
    },
    {
        "name": "United States Minor Outlying Islands",
        "official": "United States Minor Outlying Islands",
        "flag": "\ud83c\uddfa\ud83c\uddf2"
    },
    {
        "name": "United States Virgin Islands",
        "official": "Virgin Islands of the United States",
        "flag": "\ud83c\uddfb\ud83c\uddee"
    },
    {
        "name": "Uruguay",
        "official": "Oriental Republic of Uruguay",
        "flag": "\ud83c\uddfa\ud83c\uddfe"
    },
    {
        "name": "Uzbekistan",
        "official": "Republic of Uzbekistan",
        "flag": "\ud83c\uddfa\ud83c\uddff"
    },
    {
        "name": "Vanuatu",
        "official": "Republic of Vanuatu",
        "flag": "\ud83c\uddfb\ud83c\uddfa"
    },
    {
        "name": "Vatican City",
        "official": "Vatican City State",
        "flag": "\ud83c\uddfb\ud83c\udde6"
    },
    {
        "name": "Venezuela",
        "official": "Bolivarian Republic of Venezuela",
        "flag": "\ud83c\uddfb\ud83c\uddea"
    },
    {
        "name": "Vietnam",
        "official": "Socialist Republic of Vietnam",
        "flag": "\ud83c\uddfb\ud83c\uddf3"
    },
    {
        "name": "Wallis and Futuna",
        "official": "Territory of the Wallis and Futuna Islands",
        "flag": "\ud83c\uddfc\ud83c\uddeb"
    },
    {
        "name": "Western Sahara",
        "official": "Sahrawi Arab Democratic Republic",
        "flag": "\ud83c\uddea\ud83c\udded"
    },
    {
        "name": "Yemen",
        "official": "Republic of Yemen",
        "flag": "\ud83c\uddfe\ud83c\uddea"
    },
    {
        "name": "Zambia",
        "official": "Republic of Zambia",
        "flag": "\ud83c\uddff\ud83c\uddf2"
    },
    {
        "name": "Zimbabwe",
        "official": "Republic of Zimbabwe",
        "flag": "\ud83c\uddff\ud83c\uddfc"
    },
    {
        "name": "\u00c5land Islands",
        "official": "\u00c5land Islands",
        "flag": "\ud83c\udde6\ud83c\uddfd"
    }
]