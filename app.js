$(document).ready(function () {

    var box = $('#searchBox');
    var results = $('.results');

    box.on('keyup', function () {

        var word = box.val();
        call();

        function call() {

            $.ajax({
                url: 'https://en.wikipedia.org//w/api.php?action=opensearch&format=json&prop=revisions&rvprop=content&search=' + word,
                method: 'get',
                dataType: 'JSON',
                headers: ["Content-Type", "application/json; charset=UTF-8"],
                success: function (data) {
                    box.autocomplete({
                        source: data[1],
                        minLength: 1,
                        select: function (event, ui) {
                            word = ui.item.value;
                            call();
                        }
                    });

                    results.empty();

                    for (var i = 0; i < data[3].length; i++) {

                        results.append('<li><a href=' + data[3][i] + ' target=_blank>' + data[1][i] + '</a></li>');

                    }


                },
                error: function () {
                    console.log('Ups, something went wrong!');
                }
            });
        }
    });


});