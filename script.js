(function() {
    $.ajax({
        url: "projects.json",
        type: "GET",
        success: function(projects) {
            console.log("projects", projects);
            pushProjects(projects);
        },
        error: function(error, reason) {
            console.log("error getting projects", reason);
        }
    });
})();

// NAVIGATION
$('#aboutLink').on('click', function() {
    console.log("about clicked");
    $('#work').fadeOut('fast');
    $('#about').fadeIn('fast');

});

$('#workLink').on('click', function() {
    console.log("work clicked");
    $('#about').fadeOut('fast');
    // $('#work').fadeIn('fast');
    $('#work').fadeIn('fast');
});

// GET PROJECTS ARRAY FROM JSON
$.ajax({
    url: "projects.json",
    type: "GET",
    success: function(projects) {
        console.log("projects", projects);
        pushProjects(projects);
    },
    error: function(error, reason) {
        console.log("error getting projects", reason);
    }
});

// PUSH PROJECTS
function pushProjects(projects) {
    for (var proj = 0; proj < projects.length; proj++) {
        var title = projects[proj]["title"];
        var desc = projects[proj]["desc"];
        // var viewProject = projects[proj]["viewProject"];
        var img = projects[proj]["img"];
        var pub = projects[proj]["pub"];
        var tech = projects[proj]["tech"];
        var onPhotoClick = projects[proj]["onPhotoClick"];
        var id = projects[proj]["id"];

        $('#projects').append('<div class="project"><a href="' + onPhotoClick + '"><img class="projectimg" src="' + img + '" alt="' + title + '"/></a><div class="photo-text"><h3 class="title" id="' + id + '">' + title + '</h3><p class="desc">' + desc + '</p><p class="pub">' + pub + '</p><p class="tech">' + tech + '</p></div><div class="mobile-desc"><p class="mobileTitle">' + title + '</div>');

        $('.title').on('click', function() {
            var clickedId = this.id;
            console.log('this id was clicked', clickedId);

            var filtered = projects.filter(function(item) {
                return item.id == clickedId;
            });
            console.log(filtered);

            // var clickedId = this.id;
            // console.log(id, " was clicked");
            // console.log('clickedProject is', clickedProject);
            // $('#work').fadeOut('fast');
            // $('#singleImage').fadeIn('fast');
            // $('#singleImage');
        });

    }

}
