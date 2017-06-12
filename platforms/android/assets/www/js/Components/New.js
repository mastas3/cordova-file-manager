var New = function(fileManager) {
  var newF = document.createElement('div');
  newF.className = 'newFile';

  function openMenu() {
    var menu = Menu();
    newF.appendChild(menu.dom(fileManager));
  }

  newF.onclick = openMenu;

  return {
    dom : function(child) {
      return newF;
    }
  }
}