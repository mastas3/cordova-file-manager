function listDir(parent, path) {
    window.resolveLocalFileSystemURL(path, function(dirEntry) {
        var directoryReader = dirEntry.createReader();
        directoryReader.readEntries(function success(entries) {
            console.log(entries)
            entries.forEach(function(entry) {
                if(entry.isDirectory) {
                    // listDir(entry.nativeURL)
                    parent.dom((ListItem(parent.getId(), entry.name, 'folder', 'folder.png', entry.nativeURL).dom()))
                } else if(entry.isFile) {
                    //if entry is file
                    parent.dom((ListItem(parent.getId(), entry.name, 'file', 'file.png', entry.nativeURL).dom()))
                }
            });
        }, function error(err) {
            console.log('error: ' + err)
        });
    })
}