$('#logoutForm').submit(function(e){
    e.preventDefault();
    if(confirm("Logout?")){
        firebase.auth().signOut();
        window.location.href = "login.html";
    }
});

function $_GET(key) {
    var queries = window.location.href.split('?').pop().split('&');
    var params = {};
    queries.map(function (query) {
        var set = query.split('=');
        params[set[0]] = set[1];
    });

    if (key) {
        return params[key] || null;
    } else {
        return params;
    }

}


var config = {
    apiKey: "AIzaSyB2Q4ynCk7cc79xHQv0v91OYhcU5ug7WgY",
    authDomain: "menged-9fa95.firebaseapp.com",
    databaseURL: "https://menged-9fa95.firebaseio.com",
    storageBucket: "menged-9fa95.appspot.com",

};
firebase.initializeApp(config);