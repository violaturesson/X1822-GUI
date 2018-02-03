﻿var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        // Typical action to be performed when the document is ready:
        //document.getElementById("notes").innerHTML = xhttp.responseText;
        var notes = JSON.parse(xhttp.response);
        for (i = 0; i < notes.length; i++) {
            var note = notes[i];
            document.getElementById('dropdown').innerHTML += '<option value="'
                + JSON.stringify(note._id) +
                '">' + JSON.stringify(note.title) + '</option>';
        }
    };
};
//xhttp.open("GET", "http://localhost:8088/notes/5a748ac47aaa3009a0a0340f", true);
xhttp.open("GET", "http://localhost:8088/notes", true);
xhttp.send();

function showNote(id) {

};