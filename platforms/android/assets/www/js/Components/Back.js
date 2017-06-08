var Back = function(pathStack) {
  var back = document.createElement('div');
  back.className = 'Back';

  function goBack() {
    console.log(pathStack)
  }

  back.onclick = goBack;

  return {
    dom : function(child) {
      return back;
    }
  }
}