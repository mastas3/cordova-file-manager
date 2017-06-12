var ListView = function() {
  var listView = document.createElement('div');
  listView.className = 'ListView';
  listView.id = Date.now() * Math.random() * 10; 
  var listItems = [];
  console.log('ListView body function')

  return {
    dom : function(child) {
      if(arguments.length!==0 && child!=null) {
        listView.appendChild(child);
      }
      return listView;
    },

    init: function(folderContentPromise, fileManager) {
      console.log('ListView init');

      folderContentPromise.then(function(files) {
        files.forEach(function(file) {
          var type = file.isDirectory ? 'folder' : file.isFile ? 'file' : 'other'
          listItems.push(ListItem(listView.id, file.name, type, file.nativeURL, fileManager))
        })

        listItems.forEach(function(listItem) {
          listView.appendChild(listItem.dom())
        })
      })
    },

    getId: function() {
      return id;
    }
  };  
}
