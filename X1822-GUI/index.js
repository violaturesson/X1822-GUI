var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        // Typical action to be performed when the document is ready:
        document.getElementById("notes").innerHTML = xhttp.responseText;
    }
};
//xhttp.open("GET", "http://localhost:8088/notes/5a748ac47aaa3009a0a0340f", true);
xhttp.open("GET", "http://localhost:8088/notes", true);
xhttp.send();