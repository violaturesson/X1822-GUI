var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        // Typical action to be performed when the document is ready:
        //document.getElementById("notes").innerHTML = xhttp.responseText;
        //var notes = JSON.parse(xhttp.response);
        //for (i = 0; i < notes.length; i++) {
        //    var note = notes[i];
        //    document.getElementById('dropdown').innerHTML += '<option value="'
        //        + JSON.stringify(note._id) +
        //        '">' + JSON.stringify(note.title) + '</option>';
        console.log(xhttp.response);
        var inData = JSON.parse(xhttp.response);
        console.log(inData[0].title);

        ko.applyBindings(new viewModel(inData));
        console.log(document.getElementById('dropdown').nodeValue);

        showNote();
    };
};
//xhttp.open("GET", "http://localhost:8088/notes/5a748ac47aaa3009a0a0340f", true);
xhttp.open("GET", "http://localhost:8088/notes", true);
xhttp.send();

var viewModel = function (data) {
    this.notes = ko.observableArray(data);
    this.note = {
        _id: ko.observable(''),
        title: ko.obervable(''),
        body: ko.observable('')
    }
}

function showNote(id) {
    var element = document.getElementById('dropdown');
    document.getElementById('noteTitle').value = element.options[element.selectedIndex].text;
    document.getElementById('noteBody').value = element.options[element.selectedIndex].value;

};