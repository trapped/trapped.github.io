var messagelineindex = 14;
var linklineindex = 17;
var response = "";

function loadcommits() {
    httpget("https://api.github.com/repos/trapped/rotmg_svr/commits");
    parsejson(response);
    //for (var i = 0; i < numlines; i++) {
    //    var line = lines[i];
    //    var commitmessage = parsemessage(line);
    //    if (commitmessage != "") {
    //        addcommit(commitmessage);
    //        break;
    //    }
    //}
}

function parsejson(text) {
    var jsonn = JSON.parse(text);
    var obj = eval(jsonn);
    var messaget = obj[0].commit.message;
    var linkt = obj[0].html_url;
    addcommit("<a href=\"" + linkt + "\">" + messaget + "</a>");
}

function replacenewlines(text) {
    var txt = text.replace("\n", "<br>");
    txt = txt.replace("\r", "");
    return txt;
}

function addcommit(text) {
    document.getElementById("commits").innerHTML = document.getElementById("commits").innerHTML + "<pre><span id=\"desc\">"+text+"</span></pre>";
}

function httpget(theurl) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", theurl, false);
    xmlhttp.send(null);
    response = xmlhttp.responseText;
}