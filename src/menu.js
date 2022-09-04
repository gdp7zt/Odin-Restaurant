export default function menu() {
    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menuContainer');


    const savoryHeader = createMenuSection('Savory');
    menuContainer.appendChild(savoryHeader);

    const savory1 = createMenuItem('La Nordique', 'Smoked salmon, dill, lemon, creme fraiche', '$14');
    menuContainer.appendChild(savory1);

    const savory2 = createMenuItem('Croque Monsieur', 'Ham, Italian Cheese, bechamel sauce', '$11');
    menuContainer.appendChild(savory2);

    const savory3 = createMenuItem('Croque Madame', 'Ham, cheese, bechamel, egg', '$12');
    menuContainer.appendChild(savory3);

    const savory4 = createMenuItem('La Fermiere', 'Chicken, Peppers, Mushrooms, Onions, Spinach, Bechamel, Cheese, Bacon', '$14');
    menuContainer.appendChild(savory4);

    const savory5 = createMenuItem('Brie it On', 'Ham and Brie', '$11');
    menuContainer.appendChild(savory5);

    const savory6 = createMenuItem('Brie It Is', 'Brie, Apples, Fig Jam', '$11');
    menuContainer.appendChild(savory6);


    const sweetHeader = createMenuSection('Sweet');
    menuContainer.appendChild(sweetHeader);

    const sweet1 = createMenuItem('Paris', 'Nutella and Whipped cream', '$7');
    menuContainer.appendChild(sweet1);

    const sweet2 = createMenuItem('La Reine', 'Nutella and Strawberries', '$8');
    menuContainer.appendChild(sweet2);

    const sweet3 = createMenuItem('Elliot', 'Nutella, Strawberries, Bananas', '$9');
    menuContainer.appendChild(sweet3);

    const sweet4 = createMenuItem('Tess', 'Vanilla cream and Strawberries', '$8');
    menuContainer.appendChild(sweet4);

    const sweet5 = createMenuItem('Normandy', 'Cinnamon apples and Caramel sauce', '$10');
    menuContainer.appendChild(sweet5);

    const sweet6 = createMenuItem('Choco', 'Bananas and Chocolate Sauce', '$7');
    menuContainer.appendChild(sweet6);

    const sweet7 = createMenuItem('Sugar and Spice', 'Sugar and Cinnamon', '$7');
    menuContainer.appendChild(sweet7);

    const sweet8 = createMenuItem('Sunshine', 'Lemon curd and Blueberries', '$10');
    menuContainer.appendChild(sweet8);


    const drinkHeader = createMenuSection('Drinks');
    menuContainer.appendChild(drinkHeader);

    const drink1 = createMenuItem('Perrier', 'Sparkling Water', '$2.50');
    menuContainer.appendChild(drink1);

    const drink2 = createMenuItem('Water', 'Bottled Water', '$2');
    menuContainer.appendChild(drink2);

    const drink3 = createMenuItem('Tea', 'Sweet/Unsweet', '$3');
    menuContainer.appendChild(drink3);

    const drink4 = createMenuItem('Apple Juice', 'Bottled Apple Juice', '$2');
    menuContainer.appendChild(drink4);


    


    return menuContainer
}





function createMenuItem(name, description, price) {
    const itemContainer = document.createElement('div');
    itemContainer.classList.add('menuItemContainer');

    const itemName = document.createElement('h3');
    itemName.classList.add('menuItemName');
    itemName.innerHTML = name;

    const ingredients = document.createElement('div');
    ingredients.classList.add('menuItemIngredients');
    ingredients.innerHTML = description;

    const itemPrice = document.createElement('div');
    itemPrice.classList.add('menuItemPrice');
    itemPrice.innerHTML = price;
    
    itemContainer.appendChild(itemName);
    itemContainer.appendChild(ingredients);
    itemContainer.appendChild(itemPrice);

    return itemContainer;
}

function createMenuSection(name){
    const menuSection = document.createElement('h2');
    menuSection.classList.add('menuSection');
    menuSection.innerHTML = name;

    return menuSection;
}