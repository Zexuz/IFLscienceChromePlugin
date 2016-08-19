function doStuff() {

    if (window.location.href.substr(window.location.href.length - 4).indexOf("all") === -1) {
        httpGetAsync(window.location.href + "all/", function (err) {
            console.log(err);
            if (err) return;

            window.location.href += "all/";
        });
    }
}

function httpGetAsync(theUrl, callback) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {

        if (xmlHttp.readyState !== 4)
            return;

        if (xmlHttp.status == 404)
            return callback(true);

        callback(false);

    };
    xmlHttp.open("GET", theUrl, true); // true for asynchronous
    xmlHttp.send(null);
}


doStuff();


/*

 This is to you IFLS

 ....................../´¯/)
 ....................,/¯../
 .................../..../
 ............./´¯/'...'/´¯¯`·¸
 ........../'/.../..../......./¨¯\
 ........('(...´...´.... ¯~/'...')
 .........\.................'...../
 ..........''...\.......... _.·´
 ............\..............(
 ..............\.............\...

 */