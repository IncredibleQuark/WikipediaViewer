$(document).ready(function () {
    
    var box = $('#searchBox').on('keyup', function () {
    var word = box.val();

    console.log('takkk');

    $.ajax({
        url: 'https://en.wikipedia.org//w/api.php?action=opensearch&format=json&prop=revisions&rvprop=content&search='+word,
        method: 'get',
        dataType: 'JSON',
        headers: ["Content-Type", "application/json; charset=UTF-8"],
        success: function (data) {
            var auto = box.autocomplete({
                source: data[1]
            });

        },
        error: function () {
            console.log('Ups, something went wrong!');
        }
    });

});

});