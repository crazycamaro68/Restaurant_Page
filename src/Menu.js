export function menu(){
    //Title Generator
    const container = document.getElementById('content');
    let titleContainer = document.createElement('div');
    titleContainer.setAttribute("id","titleContainer");
    let title = document.createElement('p');
    title.textContent = "Bucks Stars"
    container.appendChild(titleContainer);
    titleContainer.appendChild(title);

    let menuContainer = document.createElement("div");
    let menuContainerTitle = document.createElement("p");
    menuContainerTitle.textContent = "Menu";
    menuContainerTitle.setAttribute("id","menuContainerTitle");
    menuContainer.setAttribute("id","menuContainer");
    container.appendChild(menuContainer);
    menuContainer.appendChild(menuContainerTitle);

    for(let i = 0; i < menuItemsContainer.length; i++){
        let itemName = document.createElement("p");
        let itemPrice = document.createElement("p");
        let itemDescribtion = document.createElement("p");
        let itemContainer = document.createElement("div");
        itemContainer.setAttribute("id", `${menuItemsContainer[i].itemName}`);
        itemContainer.setAttribute("class","menuItems")
        itemName.textContent = menuItemsContainer[i].itemName;
        itemPrice.textContent = menuItemsContainer[i].itemPrice;
        itemDescribtion.textContent = menuItemsContainer[i].itemDescribtion;
        menuContainer.appendChild(itemContainer);
        itemContainer.appendChild(itemName);
        itemContainer.appendChild(itemPrice);
        itemContainer.appendChild(itemDescribtion);
    }

}

function menuItems(name, price, description){
    const itemName = name;
    const itemPrice = price;
    const itemDescribtion = description;

    return {itemName, itemPrice, itemDescribtion}
}
let menuItemsContainer = [];
let coffee = menuItems("Coffee", 2.99, "Coffee anyway you want it!")
let bagle = menuItems("Bagle", 1.99,"Warm Bagle");
let latte = menuItems("Latte", 2.99,"Warm Latte");
menuItemsContainer.push(coffee, bagle, latte);
console.log(menuItemsContainer);