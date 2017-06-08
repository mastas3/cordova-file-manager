var ListItem = function(parentId, name, type, icon, data) {
  var type = type; //folder, file, image
  var icon = icon; //icon name
  var data = data; //additional data like number of files inside, date created, path 
  var id = Date.now() * Math.random() * 10;
  
  var listItem = document.createElement('div');
  listItem.className = 'ListItem';
  
  var openElem = function(e) {
    console.log(type)
  }

  listItem.onclick = openElem;

  (function render() {
      var typeDom = document.createElement('div');
      var iconDom = document.createElement('img');
      var dataDom = document.createElement('div');

      typeDom.className = 'Type';
      iconDom.className = 'Icon';
      dataDom.className = 'Data';

      listItem.appendChild(iconDom)
      listItem.appendChild(typeDom)
      listItem.appendChild(dataDom)

      iconDom.src = `img/${icon}`;
      typeDom.innerText = name;
      // dataDom.innerText = data;
  }());

  return {
    dom : function() {
      return listItem;
    }
  };  
}
