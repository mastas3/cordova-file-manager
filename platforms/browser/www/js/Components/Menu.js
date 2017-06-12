var Menu = function(fileManager) {
  var menu = document.createElement('div');
  menu.className = 'Menu';

  var optionFolder = document.getElementById('div');
  var optionFile = document.getElementById('div');
  optionFolder.className = 'MenuOptions';
  optionFolder.className = 'MenuOptions';
  optionFolder.innerText = 'New Folder';
  optionFolder.innerText = 'New File';
  menu.appendChild(optionFolder);
  menu.appendChild(optionFile);


  function clickedOnMenu() {
    console.log('clicked on menu')
  }

  menu.onclick = clickedOnMenu;

  return {
    dom : function(child) {
      return menu;
    }
  }
}