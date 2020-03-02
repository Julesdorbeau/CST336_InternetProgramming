document.querySelector('.search').addEventListener('click', research);
var firstImages = ['otter', 'penguin', 'baseball', 'boat'];
var secondImages = ['otter', 'baseball','penguin', 'kiwi', 'boat', 'paris', 'london', 'amsterdam', 'chicken', 'a', 'b', 'c', 'd','e'];
$(document).ready(firstDisplay());
var counter = 0;
var randomSearch =  null;

document.querySelector('#research').addEventListener('keyup', secondDisplay);

function research() {
    $.ajax({
        method: "GET",
        url: "https://pixabay.com/api/",
        dataType: "json",
        data: {
            key: '15406951-a0c730f88213c1ae3831f7b9d',
            q : $('input').val().toLowerCase(),
            orientation : $('#userChoice').val() == 'hor' ? 'horizontal' : 'vertical',
            image_type : 'vector'
        },
        success: function (result, status) {
            $('#images').html('');
            $('input').html('');
            result.hits.forEach(function(r) {
                $('#images').append('<div class="col-sm-4"><p>Likes : '+r.likes+'</p><img src="'+r.webformatURL+'"></div><br>');
            });
        }
    });
}

function firstDisplay() {
    firstImages.forEach(function(r) {
        $.ajax({
            method: "GET",
            url: "https://pixabay.com/api/",
            dataType: "json",
            data: {
                key: '15406951-a0c730f88213c1ae3831f7b9d',
                q : r,
                orientation : $('#userChoice').val() == 'hor' ? 'horizontal' : 'vertical',
                image_type : 'vector'
            },
            success: function (result, status) {
                $('#images').append('<div class="col-sm-4"><p>Likes : '+result.hits[Math.floor(Math.random() * result.hits.length)].likes+'</p>' +
                    '<br><img src="'+result.hits[Math.floor(Math.random() * result.hits.length)].webformatURL+'"></div>');
            }
        });
    });
}

function secondDisplay() {
    if(counter === 0) {
        $('#images').html('');
        for (var i = 0; i < 4; i++) {
            randomSearch = Math.floor(Math.random() * secondImages.length);
            $.ajax({
                method: "GET",
                url: "https://pixabay.com/api/",
                dataType: "json",
                data: {
                    key: '15406951-a0c730f88213c1ae3831f7b9d',
                    q: secondImages[randomSearch],
                    orientation: $('#userChoice').val() == 'hor' ? 'horizontal' : 'vertical',
                    image_type: 'vector'
                },
                success: function (result, status) {
                    $('#images').append('<div class="col-sm-4"><p>Likes : ' + result.hits[Math.floor(Math.random() * result.hits.length)].likes + '</p>' +
                        '<br><img src="' + result.hits[Math.floor(Math.random() * result.hits.length)].webformatURL + '"></div>');
                }
            });
        }
    }
    counter += 1;
    if(counter === 5) { counter = 0; }
}