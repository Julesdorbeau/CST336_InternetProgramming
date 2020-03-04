document.querySelector('#search').addEventListener('click', research);
document.querySelector('#randomSearch').addEventListener('click', randomASearch);
var randomArray = ['otter', 'baseball','penguin', 'a', 'boat', 'paris', 'london', 'amsterdam', 'chicken', 'b', 'c', 'd','e'];
$(document).ready(firstDisplay());

function research() {
    $.ajax({
        method: "GET",
        url: "https://api.unsplash.com/search/photos",
        dataType: "json",
        data: {
            query : $('input').val(),
            client_id : 'vBqGLd_U7WuAvwbjXxAqfpWmMtDCADqHPqUaMDwr2po',
        },
        success: function (result, status) {
            $('#images').html('');
            result.results.forEach(function(r) {
                $('#images').append('<div class="col-sm-4"><br><p class="img-desc"> Description : <p class="img-desc-suit">'+ r.alt_description +'</p></p><img src="'+r.urls.small+'" alt="Error"></div>');
            });
        }
    });
}

function firstDisplay(){
    for(var i = 0; i<3; i++) {
        $.ajax({
            method: "GET",
            url: "https://api.unsplash.com/search/photos",
            dataType: "json",
            data: {
                query : 'random',
                client_id : 'vBqGLd_U7WuAvwbjXxAqfpWmMtDCADqHPqUaMDwr2po',
            },
            success: function (result, status) {
                var toDisplay = Math.floor(Math.random() * result.results.length);
                $('#images').append('<div class="col-sm-4" id="start"><br><p class="img-desc-start"> Description : <p class="img-desc-suit">'+ result.results[toDisplay].alt_description +'</p></p><img src="'+result.results[toDisplay].urls.small+'" alt="Error"></div>');
            }
        });
    }
}

function randomASearch() {
    $('#images').html('');
    for(var i = 0; i<6; i++) {
        $.ajax({
            method: "GET",
            url: "https://api.unsplash.com/search/photos",
            dataType: "json",
            data: {
                query: randomArray[Math.floor(Math.random() * randomArray.length)],
                client_id: 'vBqGLd_U7WuAvwbjXxAqfpWmMtDCADqHPqUaMDwr2po',
            },
            success: function (result, status) {
                var toDisplay = Math.floor(Math.random() * result.results.length);
                $('#images').append('<div class="col-sm-4" id="random"><br><p class="img-desc-start"> Description : <p class="img-desc-suit">' + result.results[toDisplay].alt_description + '</p></p><img src="' + result.results[toDisplay].urls.small + '" alt="Error"></div>');
            }
        });
    }
}