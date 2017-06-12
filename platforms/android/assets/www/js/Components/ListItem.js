var ListItem = function(parentId, name, type, nativeURL, fileManager) {
  var type = type; //folder, file, image
  var icon = type; //icon name
  var nativeURL = nativeURL; //additional data like number of files inside, date created, path 
  var id = Date.now() * Math.random() * 10;
  var numberOfFilesInsideFolder = document.createElement('div');
  numberOfFilesInsideFolder.className = 'numberOfFilesInsideFolder';

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

      if(type == 'folder') {
        fileManager.dir(nativeURL).then(function(files) {
          
          numberOfFilesInsideFolder.innerText = files.length + ' files';
            
          console.log('numberOfFilesInsideFolder: ' + numberOfFilesInsideFolder);
        });
      }



      typeDom.className = 'Type';
      iconDom.className = 'Icon';

      listItem.appendChild(iconDom)
      listItem.appendChild(typeDom)
      listItem.appendChild(numberOfFilesInsideFolder);

      iconDom.src = `img/${icon}.png`;
      typeDom.innerText = name;
  }());

  return {
    dom : function() {
      return listItem;
    }
  };  
}
