// /* W05: Programming Tasks */

// /* Declare and initialize global variables */
// const templesElement = document.getElementById("templesElement");
// let templeList = [];


// /* async displayTemples Function */
// const displayTemples = async (temples) => {
//     await Promise.all(temples.map(async (temple) => {
//         const article = document.createElement("article");
//         const h3 = document.createElement("h3");
//         h3.textContent = temple.templeName;
//         const img = document.createElement("img");
//         img.src = temple.imageUrl;
//         img.alt = temple.location;
//         article.appendChild(h3);
//         article.appendChild(img);
//         templesElement.appendChild(article);
//     }));
// };


// /* async getTemples Function using fetch()*/
// const getTemples = async () => {
//     try {
//         const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
//         templeList = await response.json();
//         displayTemples(templeList);
//     } catch (error) {
//         console.error("Error fetching temple data:", error);
//     }
// };


// /* reset Function */
// const reset = () => {
//     templesElement.innerHTML = "";
// };


// /* filterTemples Function */
// const filterTemples = (temples) => {
//     reset();
//     const filter = document.getElementById("filtered").value;
//     switch (filter) {
//         case "utah":
//             displayTemples(temples.filter(temple => temple.location.includes("Utah")));
//             break;
//         case "nonutah":
//             displayTemples(temples.filter(temple => !temple.location.includes("Utah")));
//             break;
//         case "older":
//             displayTemples(temples.filter(temple => new Date(temple.dedicatedDate) < new Date(1950, 0, 1)));
//             break;
//         case "all":
//             displayTemples(temples);
//             break;
//     }
// };


// getTemples();

// /* Event Listener */
// document.querySelector("#filtered").addEventListener("change", () => {
//     filterTemples(templeList);
// });



// w05-task.js

// // Declare and initialize global variables
// const templesElement = document.getElementById("temples");
// let templeList = [];

// // Async displayTemples Function
// const displayTemples = async (temples) => {
//     await Promise.all(temples.map(async (temple) => {
//         const article = document.createElement("article");
//         const h3 = document.createElement("h3");
//         h3.textContent = temple.templeName;
//         const img = document.createElement("img");
//         img.src = temple.imageUrl;
//         img.alt = temple.location;
//         article.appendChild(h3);
//         article.appendChild(img);
//         templesElement.appendChild(article);
//     }));
// };

// // Async getTemples Function using fetch()
// const getTemples = async () => {
//     try {
//         const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
//         templeList = await response.json();
//         displayTemples(templeList);
//     } catch (error) {
//         console.error("Error fetching temple data:", error);
//     }
// };

// // Reset Function
// const reset = () => {
//     templesElement.innerHTML = "";
// };

// // Filter Temples Function
// const filterTemples = (temples) => {
//     reset();
//     const filter = document.getElementById("filtered").value;
//     switch (filter) {
//         case "utah":
//             displayTemples(temples.filter(temple => temple.location.includes("Utah")));
//             break;
//         case "notutah":
//             displayTemples(temples.filter(temple => !temple.location.includes("Utah")));
//             break;
//         case "older":
//             displayTemples(temples.filter(temple => new Date(temple.dedicatedDate) < new Date(1950, 0, 1)));
//             break;
//         case "all":
//             displayTemples(temples);
//             break;
//     }
// };

// // Event Listener: filterTemples Element change
// document.getElementById("filtered").addEventListener("change", () => {
//     filterTemples(templeList);
// });

// // Initial call to fetch and display temples
// getTemples();


// w05-task.js

// Declare and initialize global variables
const templesElement = document.getElementById("temples");
let templeList = [];

// Sort function by a specific key
const sortBy = (temples, key) => {
    return temples.sort((a, b) => {
        const valueA = a[key].toUpperCase(); // Convert to uppercase for case-insensitive sorting
        const valueB = b[key].toUpperCase();

        if (valueA < valueB) {
            return -1;
        }
        if (valueA > valueB) {
            return 1;
        }
        return 0;
    });
};

// Async displayTemples Function
const displayTemples = async (temples) => {
    await Promise.all(temples.map(async (temple) => {
        const article = document.createElement("article");
        const h3 = document.createElement("h3");
        h3.textContent = temple.templeName;
        const img = document.createElement("img");
        img.src = temple.imageUrl;
        img.alt = temple.location;
        article.appendChild(h3);
        article.appendChild(img);
        templesElement.appendChild(article);
    }));
};

// Async getTemples Function using fetch()
const getTemples = async () => {
    try {
        const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
        templeList = await response.json();
        displayTemples(templeList);
    } catch (error) {
        console.error("Error fetching temple data:", error);
    }
};

// Reset Function
const reset = () => {
    templesElement.innerHTML = "";
};

// Filter Temples Function
const filterTemples = (temples) => {
    reset();
    const filter = document.getElementById("filtered").value;

    // Sort by templeName before applying the filter
    const sortedTemples = sortBy(temples, "templeName");

    switch (filter) {
        case "utah":
            displayTemples(sortedTemples.filter(temple => temple.location.includes("Utah")));
            break;
        case "notutah":
            displayTemples(sortedTemples.filter(temple => !temple.location.includes("Utah")));
            break;
        case "older":
            displayTemples(sortedTemples.filter(temple => new Date(temple.dedicatedDate) < new Date(1950, 0, 1)));
            break;
        case "all":
            displayTemples(sortedTemples);
            break;
    }
};

// Event Listener: filterTemples Element change
// document.getElementById("filtered").addEventListener("change", () => {
//     filterTemples(templeList);
// });

// Event Listener: filterTemples Element change
document.getElementById("filtered").addEventListener("change", () => {
    // Call sortBy function when the selection changes
    sortBy(templeList, "templeName");
    // Then, call filterTemples to update the display based on the sorted data
    filterTemples(templeList);
});
// Initial call to fetch and display temples
getTemples();
