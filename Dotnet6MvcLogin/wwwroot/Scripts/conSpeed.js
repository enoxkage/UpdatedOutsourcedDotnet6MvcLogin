window.onload = function () {

    checkConnectionSpeed();
}

var downlink = navigator.connection.downlink;


function checkConnectionSpeed() {
    var x = document.getElementById('connection-message');


    if (downlink > 1.0) {
        x.style.backgroundColor = 'green';
        x.innerHTML = 'Your internet connection looks good';
    } else {
        x.style.backgroundColor = 'red';
        x.innerHTML = 'Your internet connection is too slow';
    }
}