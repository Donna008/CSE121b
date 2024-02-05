/* LESSON 3 - Programming Tasks */

/* Profile Object  */




/* Populate Profile Object with placesLive objects */




/* DOM Manipulation - Output */

/* Name */

/* Photo with attributes */


/* Favorite Foods List*/


/* Hobbies List */


/* Places Lived DataList */

// Profile Object
let myProfile = {
    name: "Na Tang",
    photo: "images/IMG_0265.JPG", // Replace with the actual path and name
    favoriteFoods: [
      'Rice',
      'Tikka Masala',
      'Prioshki',
      'Shrimp',
      'Banana Cream Pie'
    ],
    hobbies: ['Reading', 'Coding', 'Hiking'], // Add your hobbies
    placesLived: [] // Empty array to be populated later
  };
  
  // Populate Profile Object with placesLived objects
  myProfile.placesLived.push(
    {
      place: 'San Francisco, CA',
      length: '1 year'
    }
  );
  
  // You can add more placesLived objects similarly:
  myProfile.placesLived.push(
    {
      place: 'New York, NY',
      length: '2 years'
    }
  );
  // Add more places as needed
  
  // DOM Manipulation - Output
  
  // Assign the value of the name property to the HTML element with ID 'name'
  document.querySelector('#name').textContent = myProfile.name;
  
  // Assign the value of the photo property as the src attribute of the HTML <img> with ID 'photo'
  document.querySelector('#photo').src = myProfile.photo;
  
  // Assign the value of the name property as the alt attribute of the HTML <img> with ID 'photo'
  document.querySelector('#photo').alt = myProfile.name;
  
  // Create an HTML <li> element for each favorite food and append it to the <ul> with ID 'favorite-foods'
  myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
  });
  
  // Create an HTML <li> element for each hobby and append it to the <ul> with ID 'hobbies'
  myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
  });
  
  // Iterate over placesLived and append <dt> and <dd> elements to the <dl> with ID 'places-lived'
  myProfile.placesLived.forEach(place => {
    let dt = document.createElement('dt');
    dt.textContent = place.place;
  
    let dd = document.createElement('dd');
    dd.textContent = place.length;
  
    document.querySelector('#places-lived').appendChild(dt);
    document.querySelector('#places-lived').appendChild(dd);
  });
  
