document.querySelector('#search').addEventListener('click', research);


function research() {
    $.ajax({
        method: "GET",
        url: "https://openlibrary.org/api/books",
        dataType: "json",
        data: {
            bibkeys : 'ISBN:'+$('input').val(),
            format : 'json',
            jscmd : 'data',
        },
        success: function (result, status) {
            $('#images').html('');
            $('#images').append('<div class="col-sm-4"><img class="cover" src="'+result.cover+'" alt="Img Missing"></div class="col-sm-4"><br>');
            $('#images').append('<div class="col-sm-4 info"><p>Titre : '+result.title+'</p><p>Author : '+result.author+'</p>' +
                '<p>Publish : '+result.publish_date+'</p><p>Publisher : '+result.publishers+'</p><p>ISBN :'+$('input').val()+'</p><p>Pages : '+result.number_of_pages+'</p></div><br>');
        }
    });
}

function test() {
    alert($('input').val());
}