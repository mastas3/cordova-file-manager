var ListItem = function(parentId, name, type, nativeURL, fileManager) {
  var type = type; //folder, file, image
  var icon = type; //icon name
  var nativeURL = nativeURL; //additional data like number of files inside, date created, path 
  var id = Date.now() * Math.random() * 10;
  
  var listItem = document.createElement('div');
  listItem.className = 'ListItem';
  
  var openElem = function(e) {
    console.log(nativeURL);
    fileManager.setPath(nativeURL)
  }

  listItem.onclick = openElem;

  (function render() {
      console.log('ListVItem render');
      var typeDom = document.createElement('div');
      var iconDom = document.createElement('img');

      typeDom.className = 'Type';
      iconDom.className = 'Icon';

      listItem.appendChild(iconDom)
      listItem.appendChild(typeDom)

      iconDom.src = `img/${icon}.png`;
      typeDom.innerText = name;
  }());

  return {
    dom : function() {
      return listItem;
    }
  };  
}
