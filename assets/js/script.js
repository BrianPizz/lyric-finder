var searchInput;
var seacrhBtnEl = $('#search-btn');
var resultsEl = $('#search-results');


seacrhBtnEl.on('click', function (event) {
    event.preventDefault()

    if ($('#search-val').val() === '') {
        return
    } else {
        searchInput = $('#search-val').val();
        searchApi(searchInput);
    }

    console.log(searchInput)
});


function searchApi(query) {
    var url = 'https://genius-song-lyrics1.p.rapidapi.com/search/?q=' + query + '&per_page=10&page=1';

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '5785bee15emshf94920a3813b013p19d4f8jsn16dcd17b2cc5',
            'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com'
        }
    };

    fetch(url, options)
        .then(function (response) {
            if (response.ok) {
                return response.json();
            }
        })
        .then(function (data) {
            console.log(data.hits)
            resultsEl.empty()
            for(let i = 0; i < data.hits.length;i++){
                
                printResults(data.hits[i])
            }
        })
}

function printResults(hits){
    
    

    var resultCard = $('<div>').addClass('custom-card d-flex text-light');

    var coverArt = $('<img>')
    coverArt.attr('src', hits.result.header_image_thumbnail_url);
    resultCard.append(coverArt);

    var infoSection = $('<div>')

    var titleEl = $('<h2>').addClass('title my-3').text(hits.result.title);
    infoSection.append(titleEl);

    var artistEl = $('<h3>').addClass('artist mb-3').text(hits.result.artist_names);
    infoSection.append(artistEl);

    var dateEl = $('<p>').text(hits.result).text(hits.result.release_date_with_abbreviated_month_for_display);
    infoSection.append(dateEl);



    resultCard.append(infoSection);

    resultsEl.append(resultCard);
}