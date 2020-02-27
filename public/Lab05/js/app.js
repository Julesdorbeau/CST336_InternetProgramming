document.querySelector('.search').addEventListener('click', research);

function research() {
    $.ajax({
        method: "GET",
        url: "https://pixabay.com/api/",
        dataType: "json",
        data: {
            key: '15406951-a0c730f88213c1ae3831f7b9d',
            q : $('input').val(),
            orientation : $('#userChoice').val() == 'hor' ? 'horizontal' : 'vertical',
            image_type : 'vector'
        },
        success: function (result, status) {
            $('#images').html('');
            result.hits.forEach(function(r) {
                $('#images').append('<div class="col-sm-4"><p>Likes : '+r.likes+'</p><br><img src="'+r.webformatURL+'"></div>');
            });
        }
    });
}