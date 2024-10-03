//main.js


import './src/css/style.css'
import { createSidebar } from '/src/js/side-bar';
import { createMainContent } from '/src/js/content';



function createAppUI() {
    const appContainer = document.getElementById('app');
    appContainer.className = 'app-container';

    
    const {mainContent, mainContentBottom, mainContentTop} = createMainContent();
    const sideBar = createSidebar(mainContentBottom,mainContentTop);

    appContainer.appendChild(sideBar);
    appContainer.appendChild(mainContent);

    console.log('Ui created')
}

createAppUI();