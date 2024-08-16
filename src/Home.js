export function home(){
    const container = document.getElementById('content');
    //Title
    let titleContainer = document.createElement('div');
    titleContainer.setAttribute("id","titleContainer");
    let title = document.createElement('p');
    title.textContent = "Bucks Stars"
    container.appendChild(titleContainer);
    titleContainer.appendChild(title);
    
    //specails
    let specailContainer = document.createElement("div");
    specailContainer.setAttribute("id","specailContainer");
    container.appendChild(specailContainer);
    let todaySpecailsTitle = document.createElement("p");
    todaySpecailsTitle.textContent = "Today's Specails!";
    todaySpecailsTitle.setAttribute("id","todaySpecailsTitle");
    specailContainer.appendChild(todaySpecailsTitle);
    let todaySpecails = ["2 Coffees for 4.99$","Bagle for 1.99$","Latte for 2.99$"]
    let todaySpecailsContainer = document.createElement("div");
    todaySpecailsContainer.setAttribute("id","todaySpecailsContainer")
    specailContainer.appendChild(todaySpecailsContainer);
    for(let i = 0; i < todaySpecails.length; i++){
        let specail = document.createElement('p');
        specail.setAttribute("id", `specail${i}`);
        specail.setAttribute("class", "specails")
        specail.textContent = todaySpecails[i];
        todaySpecailsContainer.appendChild(specail);
    }
    
}