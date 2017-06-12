var InfoBar = function(path, pathStack, fileManager) {
  var infoBar = document.createElement('div');
  infoBar.className = 'InfoBar';

  var topButtons = document.createElement('div');
  topButtons.className = 'topButtons';
  infoBar.appendChild(topButtons)

  var back = Back(pathStack, fileManager);
  back.className = 'Back';
  topButtons.appendChild(back.dom());

  var newF = New(fileManager);
  topButtons.appendChild(newF.dom())

  var pathText = document.createElement('div');
  pathText.innerText = path;
  pathText.className = 'PathText';
  infoBar.appendChild(pathText);

  return {
    dom : function(child) {
      return infoBar;
    }
  }
}