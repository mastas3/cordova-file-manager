// function render() {
//     var args = deepRender([...arguments]);
//     var result = args.reduce(function reducer(parent,child) {
//         if(Array.isArray(child)) {

//         }
//         console.log(child)
//         parent.appendChild(child)
//         return parent;
//     }, document.body)
// }

// function deepRender(array) {
//     return array.map(val => {
//         if(Array.isArray(val)) {
//             return deepRender(val)
//         } else if(val.render) {
//             return val.render();
//         } else {
//             return val;
//         }
//     })
// }

// var listItems = [ListItem(), ListItem(), ListItem()];

// render(fileManager, listView, listItems)

var root = ListItem(fileManager.getId(), 'root', 'folder', 'folder.png', 'data');
var photos = ListItem(fileManager.getId(), 'Photos', 'folder', 'folder.png', 'data');
var downloads = ListItem(fileManager.getId(), 'Downloads', 'folder', 'folder.png', 'data');
var etc = ListItem(fileManager.getId(), 'etc', 'folder', 'folder.png', 'data');
var android = ListItem(fileManager.getId(), 'Android', 'folder', 'folder.png', 'data');
var files = ListItem(fileManager.getId(), 'Files', 'folder', 'folder.png', 'data');
var whatsapp = ListItem(fileManager.getId(), 'Whatsapp', 'folder', 'folder.png', 'data');
var google = ListItem(fileManager.getId(), 'Google', 'folder', 'folder.png', 'data');

fileManager.dom(root.dom())
fileManager.dom(photos.dom())
fileManager.dom(downloads.dom())
fileManager.dom(etc.dom())
fileManager.dom(android.dom())
fileManager.dom(files.dom())
fileManager.dom(whatsapp.dom())
fileManager.dom(google.dom())

document.body.appendChild(fileManager.dom())





document.addEventListener('deviceready', function() {
    var myPath = cordova.file.externalRootDirectory;

    window.resolveLocalFileSystemURL(myPath, function(dirEntry) {
        var directoryReader = dirEntry.createReader();
        directoryReader.readEntries(onSuccess, onError);
    })
  
    function onSuccess(entries) {
        console.log(entries);
    }

    function onError(err) {
        console.log(err)
    }


}, false)


// function listDirectories() {
//     var index = 0;
//     var i;

//     var localURLs    = [
//     cordova.file.cacheDirectory,
//     cordova.file.applicationDirectory,
//     cordova.file.applicationStorageDirectory,
//     cordova.file.dataDirectory,
//     cordova.file.documentsDirectory,
//     cordova.file.externalApplicationStorageDirectory,
//     cordova.file.externalCacheDirectory,
//     cordova.file.externalRootDirectory,
//     cordova.file.externalDataDirectory,
//     cordova.file.sharedDirectory,
//     cordova.file.syncedDataDirectory
//     ];

//     /**
//      * Recursive function for file entry.
//      */
//     var addFileEntry = function (entry) {
//     var dirReader = entry.createReader();
//     dirReader.readEntries(
//         function (entries) {
//         var fileStr = "";
//         var i;
//         for (i = 0; i < entries.length; i++) {
//             if (entries[i].isDirectory === true) {
//             // Recursive -- call back into this subdirectory
//             addFileEntry(entries[i]);
//             } else {
//             console.log(entries[i].fullPath);
//             index++;
//             }
//         }
//         },
//         function (error) {
//         console.error("readEntries error: " + error.code);
//         }
//     );
//     };

//     var addError = function (error) {
//     console.error("getDirectory error: " + error.code);
//     };

//     for (i = 0; i < localURLs.length; i++) {
//     if (localURLs[i] === null || localURLs[i].length === 0) {
//         continue; // skip blank / non-existent paths for this platform
//     }
//     window.resolveLocalFileSystemURL(localURLs[i], addFileEntry, addError);
//     }
// }


