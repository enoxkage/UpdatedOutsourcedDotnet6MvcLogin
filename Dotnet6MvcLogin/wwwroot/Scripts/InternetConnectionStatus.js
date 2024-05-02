$(document).ready(function () {

    // Listen for online/offline events
    $(window).on('online', function () {
        online();
    });

    $(window).on('offline', function () {
        offline();
    });

    //styling of response online or offline
    function online() {
        $('#Box').css('background-color', 'green');
        $('span').text('Online');
    }

    function offline() {
        $('#Box').css('background-color', 'red');
        $('span').text('Offline');
    }

    //using ajax to send a GET request to an api for internet connection
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/todos/1",
        method: "GET",
        success: function () {
            //if connection to the internet is a success a response is given stating that you are online
            online();
        },
        error: function () {
            //if there is no connection to the internet a response is given stating that you are offline
            offline();
        }
    });
});



