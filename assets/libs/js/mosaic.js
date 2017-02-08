function initMosaic(folderPath) {
    var allImages = "";

    for (var i = 1; i <= 72; i++) {
        allImages += '<img src="'+folderPath+'/mosaic_'+i+'.png">';
    }

    $('#photos').append(allImages);
}

