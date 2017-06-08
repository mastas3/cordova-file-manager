var InfoBar = function(path, pathStack) {
  var infoBar = document.createElement('div');
  infoBar.className = 'InfoBar';
  infoBar.innerText = path;

  var back = Back(pathStack);
  back.className = 'Back';
  infoBar.appendChild(back);

  return {
    dom : function(child) {
      return infoBar;
    }
  }
}