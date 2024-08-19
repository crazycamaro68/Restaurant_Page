export function about(){
    //Title Generator
    const container = document.getElementById('content');
    let titleContainer = document.createElement('div');
    titleContainer.setAttribute("id","titleContainer");
    let title = document.createElement('p');
    title.textContent = "Bucks Stars"
    container.appendChild(titleContainer);
    titleContainer.appendChild(title);

    let aboutContainer = document.createElement("div");
    aboutContainer.setAttribute("id","aboutContainer");
    container.appendChild(aboutContainer);

    let aboutTitle = document.createElement("p");
    aboutTitle.setAttribute("id","aboutTitle");
    aboutTitle.textContent = "About Us";
    aboutContainer.appendChild(aboutTitle);

    for(let i = 0; i < 3; i++){
        let textLine = document.createElement("p");
        textLine.setAttribute("id",`textLine${i}`);
        textLine.textContent = contactDetails[i];
        aboutContainer.appendChild(textLine);
    }
}

let contactDetails = ["Buck Star","54 Goober Drive, Buckleberry, NY, 12548","1-800-648-5213"];