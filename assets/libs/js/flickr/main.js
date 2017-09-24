function gup( name, url ) {
    if (!url) url = location.href;
    name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
    var regexS = "[\\?&]"+name+"=([^&#]*)";
    var regex = new RegExp( regexS );
    var results = regex.exec( url );
    return results == null ? null : results[1];
}

(function(document, window) {
   'use strict';

   var gallery;

   var lastSearch = gup("tag");
   console.log(lastSearch);
   console.log(tagClean);
    if(!lastSearch || lastSearch === "") {
        if(tagClean != null && tagClean != undefined) { lastSearch = tagClean; }
        else { lastSearch = ""; }
    }

   function searchPhotos(text, page) {
       console.log(page);
      if (text.length === 0) {
         //alert('Error: the field is required');
      }
      page = page > 0 ? page : 1;

      Flickr.searchText({
         text: text,
         per_page: 30,
         jsoncallback: 'Website.Homepage.showPhotos',
         page: page
      });
   }

   function createPager(element, parameters) {
       if(element == null) return;
      var pagesToShow = 5;
      var url = '/search/' + parameters.query + '/';
      element.textContent = '';

      var previousLinks = {
         '&lt;&lt;': 1,
         '&lt;': (parameters.currentPage - 1 || parameters.currentPage)
      };

      for (var key in previousLinks) {
         link = document.createElement('a');
         link.href = url + previousLinks[key];
         link.innerHTML = '<span class="js-page-number" page="' + previousLinks[key] + '">' + key + '</span>';
         var listItem = document.createElement('li');
         listItem.appendChild(link);
         element.appendChild(listItem);
      }

      // Avoid showing less than 6 pages in the pager because the user reaches the end
      var pagesDifference = parameters.pagesNumber - parameters.currentPage;
      var startIndex = parameters.currentPage;

      if (pagesDifference < pagesToShow) {
         startIndex = parameters.currentPage - (pagesToShow - pagesDifference - 1) || 1;
      }

      if(startIndex < 1) { startIndex = 1; }

      var link;
      for(var i = startIndex; i < parameters.currentPage + pagesToShow && i <= parameters.pagesNumber; i++) {
         link = document.createElement('a');
         link.href = url + i;
         link.innerHTML = '<span class="js-page-number" page="' + i + '">' + i + '</span>';
         if (i === parameters.currentPage) {
            link.className += ' current';
         }
         listItem = document.createElement('li');
         listItem.appendChild(link);
         element.appendChild(listItem);
      }

      var nextLinks = {
         '&gt;': (parameters.currentPage === parameters.pagesNumber ? parameters.pagesNumber : parameters.currentPage + 1),
         '&gt;&gt;': parameters.pagesNumber
      };

      for (key in nextLinks) {
         link = document.createElement('a');
         link.href = url + nextLinks[key];
         link.innerHTML = '<span class="js-page-number" page="' + nextLinks[key] + '">' + key + '</span>';
         var listItem = document.createElement('li');
         listItem.appendChild(link);
         element.appendChild(listItem);
      }
   }

   function showPhotos(data) {
      createPager(
         document.getElementsByClassName('js-thumbnails__pager')[0], {
            query: lastSearch,
            currentPage: data.photos.page,
            pagesNumber: data.photos.pages
         }
      );

      gallery = new Gallery(data.photos.photo, document.getElementsByClassName('js-gallery__image')[0]);
      gallery.createThumbnailsGallery(document.getElementsByClassName('js-thumbnails__list')[0]);
   }

    function init() {

        var formSearch = document.getElementsByClassName('js-form-search')[0];
        if(formSearch != null) {
            formSearch.addEventListener('submit', function(event) {
                event.preventDefault();

                lastSearch = document.getElementById('query').value;
                if (lastSearch.length > 0) {
                    searchPhotos(lastSearch, 1);
                }
            });
        }

        var leftArrow = document.getElementsByClassName('js-gallery__arrow--left')[0];
        if(leftArrow != null) {
            leftArrow.addEventListener('click', function() {
                gallery.showPrevious.bind(gallery)();
            });
            leftArrow.addEventListener('keydown', function(event) {
                if (event.which === 13) {
                    gallery.showPrevious.bind(gallery)();
                }
            });
        }

        var rightArrow = document.getElementsByClassName('js-gallery__arrow--right')[0];
        if(rightArrow != null) {
            rightArrow.addEventListener('click', function() {
                gallery.showNext.bind(gallery)();
            });
            rightArrow.addEventListener('keydown', function(event) {
                if (event.which === 13) {
                    gallery.showNext.bind(gallery)()();
                }
            });
        }

        var pager = document.getElementsByClassName('js-thumbnails__pager')[0];
        if(pager != null) {
            pager.addEventListener('click', function(event) {
                event.preventDefault();
                var page;
                var currentLink = this.getElementsByClassName('current')[0];
                if (event.target.nodeName === 'SPAN') {
                    page = event.target.getAttribute("page");
                    console.log(event.target);
                } else if (event.target.nodeName === 'A') {
                    page = event.target.getElementsByClassName('js-page-number')[0].getAttribute("page");
                    console.log(event.target);
                }
                console.log("page = " + page);
                console.log("currentPage = " + currentLink.getElementsByClassName('js-page-number')[0].getAttribute("page"));
                // Avoid reloading the same page
                if (page && page !== currentLink.getElementsByClassName('js-page-number')[0].getAttribute("page")) {
                    searchPhotos(lastSearch, page);
                }
            });
        }

      // Kickstart the page
      searchPhotos(lastSearch, 1);
   }

   window.Website = Utility.extend(window.Website || {}, {
      Homepage: {
         init: init,
         showPhotos: showPhotos
      }
   });
})(document, window);

