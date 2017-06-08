var ListView = function() {
  var listView = document.createElement('div');
  listView.className = 'ListView';

  return {
    render : function() {
      return listView;
    }
  };  
}

listView = ListView();