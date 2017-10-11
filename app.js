
var box = document.getElementById('searchBox');

box.addEventListener('input', function () {
    var word = box.value;

    console.log('takkk');

    $.ajax({
        url: 'https://en.wikipedia.org//w/api.php?action=opensearch&format=json&prop=revisions&rvprop=content&search='+word,
        method: 'get',
        dataType: 'JSON',
        success: function (data) {
            console.log(data);
        },
        error: function () {
            console.log('Ups, something went wrong!');
        }
    });

});