var Back = function(pathStack, fileManager) {
  var back = document.createElement('div');
  back.className = 'Back';

  function goBack() {
    if(pathStack.length==1) {
      return;
    }
    pathStack.shift();
    fileManager.setPath(pathStack[0])
    console.log(pathStack)
  }

  back.onclick = goBack;

  return {
    dom : function(child) {
      return back;
    }
  }
}