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

    // creates the image and set it properties 
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
    cardBody.classList.add("card-body", "bg-primary");

    // lets create the card title 
    let cardTitle = document.createElement("h5");
    cardTitle.classList.add("card-title",);

    cardTitle.innerHTML = wash.name;

    // set the pet name as the card body 
    cardBody.appendChild(cardTitle);

    // create the p tag for the card details 
    let cardText = document.createElement("p");
    cardTitle.classList.add("card-text");

    cardText.innerHTML = `
    ${wash.desc} 
    `
    // Creates adnd shows the price of service 
    let priceText = document.createElement("p2");
    cardTitle.classList.add("card-text");

    priceText.innerHTML = `Price of service is $${wash.price}`

    // creates the list items
    let listServices = document.createElement("div")
    cardDiv.classList.add("list")

    // shows the lsit items in the card if the item is undefined it is hidden 
    listServices.innerHTML = `
    ${wash.listItems.thing1 !== undefined ? `<li class='list-group-item'>${wash.listItems.thing1}</li>` : ''}
    ${wash.listItems.thing2 !== undefined ? `<li class='list-group-item'>${wash.listItems.thing2}</li>` : ''}
    ${wash.listItems.thing3 !== undefined ? `<li class='list-group-item'>${wash.listItems.thing3}</li>` : ''}
    ${wash.listItems.thing4 !== undefined ? `<li class='list-group-item'>${wash.listItems.thing4}</li>` : ''}
    ${wash.listItems.thing5 !== undefined ? `<li class='list-group-item'>${wash.listItems.thing5}</li>` : ''}
    ${wash.listItems.thing6 !== undefined ? `<li class='list-group-item'>${wash.listItems.thing6}</li>` : ''}
    ${wash.listItems.thing7 !== undefined ? `<li class='list-group-item'>${wash.listItems.thing7}</li>` : ''}
    ${wash.listItems.thing8 !== undefined ? `<li class='list-group-item'>${wash.listItems.thing8}</li>` : ''}
    ${wash.listItems.thing9 !== undefined ? `<li class='list-group-item'>${wash.listItems.thing9}</li>` : ''}
    ${wash.listItems.thing10 !== undefined ? `<li class='list-group-item'>${wash.listItems.thing10}</li>` : ''}
    ${wash.listItems.thing11 !== undefined ? `<li class='list-group-item'>${wash.listItems.thing11}</li>` : ''}
    ${wash.listItems.thing11 !== undefined ? `<li class='list-group-item'>${wash.listItems.thing12}</li>` : ''}
    
    `
    // button added to card 
    let addCart = document.createElement("div")
    cardDiv.classList.add("card-body")

    addCart.innerHTML = `
    
        <a href="checkout2.html" class="btn btn-primary active" tabindex="-1" role="button" id="newBtn">Add to Cart</a>
           
    `



    // Creates the description to the card
    cardBody.appendChild(cardText)
    // Creates the price tag 
    cardBody.appendChild(priceText)

    // add the card body to card div 
    cardDiv.appendChild(cardBody)

    cardDiv.appendChild(listServices)

    serviceDiv.appendChild(cardDiv)

    cardDiv.appendChild(addCart)



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

    // Create the element for the "Show All" option
    let showAllOption = document.createElement("option");
    showAllOption.value = "show_all";
    showAllOption.textContent = "Show All";
    serviceDropDown.appendChild(showAllOption);


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

    // Add event listener to dropdown to show/hide section based on selection
    serviceDropDown.addEventListener("change", function () {
        let showAll = document.querySelector("#showAll");
        if (this.value === "show_all") {
            showAll.classList.remove("hidden");
        } else {
            showAll.classList.add("hidden");
        }
    });


}





