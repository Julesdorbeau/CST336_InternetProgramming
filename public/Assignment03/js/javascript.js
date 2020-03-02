document.querySelector('#search').addEventListener('click', research);

function test() {
    alert($('input').val());
}

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
                $('#images').append('<div class="col-sm-4"><br><img src="'+r.urls.small+'" alt="Error"></div>');
            });
        }
    });
}