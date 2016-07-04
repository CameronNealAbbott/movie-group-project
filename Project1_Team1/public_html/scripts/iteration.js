$(document).ready(function () {
    load_images();
});


function load_images() {

    var data = movies["movies"];
    //get the template
    $.get("templates/photo.html", function (template) {
        var html_maker = new htmlMaker(template); //create an html Maker
        var html = html_maker.getHTML(data); //generate dynamic HTML based on the data
        $("#photos").html(html);
    });
}

