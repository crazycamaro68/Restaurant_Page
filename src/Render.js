import backGroundIMG1 from './background.jpg';
import { home } from './Home';
import { menu } from './Menu';
import { about } from './About';

export function render(Id, backGround){
    const container = document.getElementById('content');
    //removes all contents on webpage
    while (container.firstChild){
        container.removeChild(container.lastChild)
    }
    //creates back ground
    const backGroundIMG = new Image();
    backGroundIMG.setAttribute("id","backGround")
    backGroundIMG.src = backGroundIMG1;
    container.appendChild(backGroundIMG);

    //used to see what page to show
    switch(Id){
        case (0):
            home()
            break;
        case (1):
            menu()
            break;
        case (2):
            about()
            break;
    }
}