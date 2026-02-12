const temperatureField = document.querySelector(".temp");
const locationField = document.querySelector(".time_location p");
const dateTimeField = document.querySelector(".time_location span");
const weatherField = document.querySelector(".condition p");
const searchField = document.querySelector(".search_area");
const iconField = document.querySelector(".icon");

const form = document.querySelector("form");
form.addEventListener("submit", searchForLocation);

function searchForLocation(e)
{
    e.preventDefault();                    //prevent refreshing of page on submission
    let target = searchField.value;
    fetchResults(target);
}

const fetchResults = async (targetLocation) => {
    let api = `http://api.weatherapi.com/v1/current.json?key=380e401d99b24c4f922183210261101&q=${targetLocation}&aqi=no`;
    const response = await fetch(api);
    const data = await response.json();
    console.log(data);`     `  

    let locationName = data.location.name;
    let temp = data.current.temp_c;
    let dateTime = data.location.localtime; 
    let condition = data.current.condition.text;
    let icon = data.current.condition.icon;

    updateDetails(temp, locationName, dateTime, condition, icon);
}

function updateDetails(temp, locationName, dateTime, condition, icon)
{
    temperatureField.innerText = temp;
    locationField.innerText = locationName;
    dateTimeField.innerText = dateTime;
    weatherField.innerText = condition;
    // iconField.innerText = icon;
}
