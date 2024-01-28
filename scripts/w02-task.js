/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

// w02-task.js
let fullName = 'Na Tang'; 
const currentYear = new Date().getFullYear();
const profilePicture = 'images/IMG_0265.JPG'; 

// step3 Set the HTML Element Variables
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img');

// step4 Adding Content to the Document
imageElement.setAttribute('src', profilePicture);
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('alt', `Profile image of ${fullName}`);

// step5 Arrays
const favoriteFoods = ["Pizza", "Chocolate", "Sushi", "Ice Cream"];
foodElement.innerHTML += `<br>${favoriteFoods}`;
const singleFavoriteFood = "Burgers";
favoriteFoods.push(singleFavoriteFood);
foodElement.innerHTML += `<br>${favoriteFoods}`;
favoriteFoods.shift();
foodElement.innerHTML += `<br>${favoriteFoods}`;
favoriteFoods.pop();
foodElement.innerHTML += `<br>${favoriteFoods}`;
