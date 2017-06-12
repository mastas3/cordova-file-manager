var Menu = function(fileManager) {
  var menu = document.createElement('div');
  menu.className = 'Menu';

  var optionFolder = document.createElement('div');
  var optionFile = document.createElement('div');
  optionFolder.className = 'MenuOptions';
  optionFile.className = 'MenuOptions';
  optionFolder.innerText = 'New Folder';
  optionFile.innerText = 'New File';
  menu.appendChild(optionFolder);
  menu.appendChild(optionFile);


  function clickedOnMenu() {
    console.log('clicked on menu')
  }

  menu.onclick = clickedOnMenu;

  //returned objcet from Menu()
  return {
    dom : function(child) {
      return menu;
    }
  }
}