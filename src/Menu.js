export function menu(){
    const container = document.getElementById('content');
    let titleContainer = document.createElement('div');
    titleContainer.setAttribute("id","titleContainer");
    let title = document.createElement('p');
    title.textContent = "Bucks Stars"
    container.appendChild(titleContainer);
    titleContainer.appendChild(title);
}