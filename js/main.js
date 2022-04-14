The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic")
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data.drinks)
      document.querySelector('img').src = data.drinks
    })
    .catch(err => {
        console.log(`error ${err}`)
    })


document.querySelector('button').addEventListener('click', getDrink)

function getDrink(){

    let drink = document.querySelector('input').value;
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
    .then(res => res.json())
    .then(data =>{

        // 
            console.log(data.drinks);
            document.querySelector('h2').innerHTML = data.drinks[5].strDrink;
            document.querySelector('img').src = data.drinks[5].strDrinkThumb;
            document.querySelector('h3').innerHTML = data.drinks[5].strInstructions;

    })
    .catch(err =>{
        console.log(`error ${err}}`)
    })
}


// fetch('https://www.metaweather.com/api/#locationsearch/api/location/search/?query=london')
// 	.then(response => response.json())
// 	.then(data => console.log(data))
// 	.catch(err => console.error(err));

// var myHeaders = new Headers();
// myHeaders.append("x-rapidapi-key", "XxXxXxXxXxXxXxXxXxXxXxXx");
// myHeaders.append("x-rapidapi-host", "v3.football.api-sports.io");

// var requestOptions = {
//   method: 'GET',
//   headers: myHeaders,
//   redirect: 'follow'
// };

// fetch("https://v3.football.api-sports.io/{endpoint}", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));
    
