/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/*

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>
  */

  function makeMenu(items){
    const menu = document.createElement('div');
    const unOrdered = document.createElement('ul');
    const list = items;
    //loop through array to turn each item into a li and then append the li to the ul
      list.forEach((l)=>{
      let newE = document.createElement('li');
      newE.innerText = l;
      unOrdered.appendChild(newE);
    })

    menu.classList.add('menu');
    menu.appendChild(unOrdered);

    return menu;
  }

//so here is the hamburgerIcon that acts a a button
const menuButton = document.querySelector('.menu-button');

//Despite what the directions say, we need to add this to the header
const header = document.querySelector('.header');
//We also need to store the menu component in memory to toggle it later duhhhh
const menu = makeMenu(menuItems);
header.appendChild(menu);

menuButton.addEventListener('click', (e)=>{
// menu.classList.toggle('menu--open')
menu.classList.toggle('menu--open');
})







  /*

  The function takes an array as its only argument.

  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array.
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.

*/
