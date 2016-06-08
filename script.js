$(document).ready(function(){

    $.ajax({
        type: "GET",
        url: 'https://api.spotify.com/v1/search',
        data: {
            q: 'prince',
            type: 'artist'
        },
        success: function(response) {
            // console.log(response);
            console.log(response);
        }
    });

})


function validateForm() {

    var name = document.getElementById('name').value;

    if (name == "") alert("EMPTY NAME");

    else if (Cookies.get(name) != null) {
        alert(Cookies.get(name));
    } else {
        Cookies.set(name, "WELCOME BACK " + name);
        funstuff();
    }



    return false;

}


function funstuff() {



}

function deleteAllCookies() {
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}
