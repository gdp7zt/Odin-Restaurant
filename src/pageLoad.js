import home from './main';
import menu from './menu';
import contact from './contact';

export default function onPageLoad() {
    const container = document.querySelector('div#container');
    container.appendChild(createHeader());

    const main = document.createElement('div');
    main.classList.add('main');
    main.appendChild(home());
    container.appendChild(main);

    container.appendChild(createFooter());

    let homePage = document.querySelector('.header1');
    homePage.addEventListener('click', () =>{
        main.removeChild(main.firstChild);
        main.appendChild(home());
    });

    let MenuPage = document.querySelector('.header2');
    MenuPage.addEventListener('click', () =>{
        main.removeChild(main.firstChild);
        main.appendChild(menu());
    });

    let contactPage = document.querySelector('.header3');
    contactPage.addEventListener('click', () =>{
        main.removeChild(main.firstChild);
        main.appendChild(contact());
    });
}

function createHeader() {
    const header = document.createElement('div');
    header.classList.add('header');

    const title = document.createElement('h2');
    title.innerHTML = 'CrepeScape A la Folie';
    header.appendChild(title);

    const listItems = document.createElement('ul');
    listItems.innerHTML= '<li><button class=\'tab header1\'>Home</button></li><li><button class=\'tab header2\'>Menu</button></li><li><button class=\'tab header3\'>Contact</button></li>';
    header.appendChild(listItems);

    return header;
}

function createFooter() {
    const footer = document.createElement('div');
    footer.classList.add('footer');

    footer.innerHTML = '<div>Copyright &copy 2022 gdp7zt <a href=\'https://github.com/gdp7zt/Odin-Restaurant\' target=\'_blank\'><img src=\'../imgs/icons8-github.svg\'></a><div>'

    return footer;
}