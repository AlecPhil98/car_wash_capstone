"use strict"



window.onload = () => {

    console.log(servicePackages)

    initServiceDropDown();

    let serviceDropDown = document.querySelector("#serviceDropDown")

    serviceDropDown.addEventListener("change", displayServiceCard)



   
}





function displayServiceCard(event) {

    // holds where the service cards will be held
    let serviceDiv = document.querySelector("#serviceCards")

    // clears out the previous service information 
    serviceDiv.innerHTML = ""

    let wash = servicePackages.find((wash) => wash.name === event.target.value);

    //create card div and add its classes 
    let cardDiv = document.createElement("div");
    cardDiv.classList.add("card", "w-25");

    // creates the timag and set it properties 
    let cardImage = document.createElement("img");
    cardImage.classList.add("card-img-top", "card-img-fit");

    //add the source to the images 
    cardImage.src = `./service_Images/${wash.img}`
    console.log(cardImage)
    cardImage.alt = wash.name;

    // add the image and the cardDiv 
    cardDiv.appendChild(cardImage);

    // create the card body and add its classes 
    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    // lets create the card title 
    let cardTitle = document.createElement("h5");
    cardTitle.classList.add("card-title");

    cardTitle.innerHTML = wash.name;

    // set the pet name as the card body 
    cardBody.appendChild(cardTitle);

    // create the p tag for the card details 
    let cardText = document.createElement("p");
    cardTitle.classList.add("card-text");

    cardText.innerHTML = `
    ${wash.desc} 
    `
    // add the cardText to the cardBody
    cardBody.appendChild(cardText)

    // add the card body to card div 
    cardDiv.appendChild(cardBody)

    serviceDiv.appendChild(cardDiv)



}

function initServiceDropDown() {
    let serviceDropDown = document.querySelector("#serviceDropDown");
    // create the element for the default option 
    let defaultOption = document.createElement("option");

    // This is the value of the selected value 
    defaultOption.value = "";

    // This is what is displayed in the dropdown 
    defaultOption.textContent = "Select A Wash";

    // add the option we created to the dropdown
    serviceDropDown.appendChild(defaultOption);

    // write a loop to work with each indivduial category and build an option for it 
    servicePackages.forEach((wash) => {

        // create  new option to the dropdown 
        let newOption = document.createElement("option");

        // set the value for the option 
        newOption.value = wash.name;

        // set the textContent
        newOption.textContent = wash.name;

        serviceDropDown.appendChild(newOption);


    })


}