
// functio that holds everything ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
$(document).ready(function() {

    var input = $('#input');
    var select = $('#select');
    var resultsContainer = $('#results');
    var offset = 0;



    $('#searchButton').on('click', function searchSpotify(e) {
        $(resultsContainer).empty();
        $.ajax({
            url: 'https://elegant-croissant.glitch.me/spotify',
            method: 'GET',
            data: {
                q: input.val(),
                type: select.val(),
            },

            success: function(data) {
                var html = '';
                data = data.artists || data.albums;

                if (data.length == 0) {
                    $('.showingResults').html("No results for " + input.val());
                } else {
                    //results or no results header
                    $('.showingResults').html("Showing results for <span>" + input.val() + ":</span>");
                    $('.showingResults').css('background-color', 'rgb(247, 247, 247)');
                }

                for (var i = 0; i < data.items.length; i++) {
                    var name = data.items[i].name;
                    var link = data.items[i].external_urls.spotify;

                    if (data.items[i].images[0]) {
                        var image = data.items[i].images[0].url;
                    } else {
                        image = "https://cdn.pixabay.com/photo/2016/10/22/00/15/spotify-1759471_960_720.jpg";
                    }
                    html += "<div class='holder'><a href=" + link + "><img class = 'image' src=" + image + "></a></img><h3 class = 'result'><a href=" + link + ">" + name + "</a></h3></div>";
                }

                if (data.next != null) {
                    $("#more").show();
                } else {
                    $('#more').hide();
                }

                console.log(html, resultsContainer.length);
                resultsContainer.append(html);
                // scroll();
            }
        });
    });

    // Ajax request for MORE results ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    $('#more').on('click', function () {
        offset += 20;
        var nextUrl;
        $.ajax({
            url: 'https://elegant-croissant.glitch.me/spotify',
            method: 'GET',
            data: {
                q: input.val(),
                type: select.val(),
                offset: offset,
                next: nextUrl
            },

            success: function(data) {
                nextUrl = data.next && data.next.replace('https://api.spotify.com/v1/search', 'https://elegant-croissant.glitch.me/spotify');


                var html = '';
                data = data.artists || data.albums;

                if (data.length == 0) {
                    $('.showingResults').html("No results for " + input.val());
                } else {
                    //results or no results header
                    $('.showingResults').html("Showing results for <span>" + input.val() + ":</span>");
                    $('.showingResults').css('background-color', 'rgb(247, 247, 247)');
                }

                for (var i = 0; i < data.items.length; i++) {

                    var name = data.items[i].name;
                    var link = data.items[i].external_urls.spotify;

                    if (data.items[i].images[0]) {
                        var image = data.items[i].images[0].url;
                    } else {
                        image = "https://cdn.pixabay.com/photo/2016/10/22/00/15/spotify-1759471_960_720.jpg";
                    }
                    html += "<div class='holder'><a href=" + link + "><img class = 'image' src=" + image + "></a></img><h3 class = 'result'><a href=" + link + ">" + name + "</a></h3></div>";
                }

                if (data.next != null) {
                    $("#more").show();
                } else {
                    $('#more').hide();
                }

                console.log(html, resultsContainer.length);
                resultsContainer.append(html);
                // scroll();


            }
        });
    });




    //enter key to also search~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    $('#input').on('keypress', function(e) {
        if (e.keyCode === 13) {
            $('.myButton').click();
        }
    });
});
