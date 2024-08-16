import './style.css';

import { render } from './Render';

render(0, false);


const buttons = document.getElementsByClassName('headBut');

for(let i = 0; i < buttons.length; i++){
    buttons[i].Id = i;
    buttons[i].onclick = changePage;
}

function changePage(currentButton){
    render(currentButton.currentTarget.Id);
}
