var searchInputEl = $('#search-val');
var seacrhBtnEl = $('#search-btn');
var resultsEl = $('search-results');

var url = 'https://genius-song-lyrics1.p.rapidapi.com/search/?q=' + searchInputEl.val() +'&per_page=10&page=1';

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '5785bee15emshf94920a3813b013p19d4f8jsn16dcd17b2cc5',
		'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com'
	}
};

function searchApi(event){
    event.preventDefault()
    fetch(url, options)
    .then(function(response){
        if(response.ok){
            return response.json();
        }
    })
    .then (function(data){
        console.log(data)
    })
}


seacrhBtnEl.on('click', searchApi);