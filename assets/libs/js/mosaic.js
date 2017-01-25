function initMosaic(folderPath) {
    var allImages = "";

    for (var i = 1; i <= 36; i++) {
        allImages += '<img src="'+folderPath+'/mosaic_'+i+'.png">';
    }

    for (var i = 1; i <= 36; i++) {
        allImages += '<img src="'+folderPath+'/mosaic_'+i+'.png">';
    }

    $('#photos').append(allImages);
}

