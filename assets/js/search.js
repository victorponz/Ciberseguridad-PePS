/**
 * Thanks to https://github.com/CloudCannon/bakery-store-jekyll-template/tree/lunrjs
 */
(function() {
  function displaySearchResults(results, store) {
    var searchResults = document.getElementById('search-results');

    if (results.length) { // Are there any results?
      var appendString = '';
      let hitString = "<span class='hit'>";
      var query = document.getElementById('search-box').getAttribute('value');
      for (var i = 0; i < results.length; i++) {  // Iterate over the results
        var item = store[results[i].ref];
        let title = item.title.split(query).join(hitString + query + "</span>");
        appendString += '<li><h3><a href="' + item.url + '">' + title + '</a></h3>';
        let content  = item.content.split(query).join(hitString + query + "</span>");
        let indexOf = content.indexOf(hitString + query);
        appendString += '<p>' + content.substring(indexOf - 20, indexOf -20 + 150) + '...</p></li>';
      }1
      searchResults.innerHTML = appendString;
    } else {
      searchResults.innerHTML = '<li>No se han encontrado resultados</li>';
    }
  }

  function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');

    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split('=');

      if (pair[0] === variable) {
        return decodeURIComponent(pair[1].replace(/\+/g, '%20'));
      }
    }
  }

  var searchTerm = getQueryVariable('query');

  if (searchTerm) {
    document.getElementById('search-box').setAttribute("value", searchTerm);

    // Initalize lunr with the fields it will be searching on. I've given title
    // a boost of 10 to indicate matches on this field are more important.
    var idx = lunr(function () {
      this.field('id');
      this.field('title', { boost: 10 });
      this.field('content');
    });

    for (var key in window.store) { // Add the data to lunr
      idx.add({
        'id': key,
        'title': window.store[key].title,
        'content': window.store[key].content
      });

      var results = idx.search(searchTerm); // Get lunr to perform a search
      displaySearchResults(results, window.store); // We'll write this in the next section
    }
  }
})();
