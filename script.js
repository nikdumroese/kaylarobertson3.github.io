(function() {
    $.ajax({
        url: "projects.json",
        type: "GET",
        success: function(projects) {
            console.log("projects", projects);
            pushProjects(projects);
            showSingleProject(projects);
        },
        error: function(error, reason) {
            console.log("error getting projects", reason);
            $('#projects').append('<div class="project"><p class="error">Error getting projects. Try refreshing! :)</div>');
        }
    });
})();


// NAVIGATION
$('#aboutLink').on('click', function() {
    $(window).scrollTop(0);
    $('#work').fadeOut('fast');
    $('#about').fadeIn('fast');
    $('#singleProject').hide();

});

$('#workLink').on('click', function() {
    $(window).scrollTop(0);
    $('#about').fadeOut('fast');
    $('#work').fadeIn('fast');
    $('#singleProject').hide();

});

$('#closeSingleProject').on('click', function() {
    $(window).scrollTop(0);
    $('#singleProject').fadeOut('fast');
    $('#work').fadeIn('fast');
    $('#about').hide('');
    $('#singleProject').hide();

});


// PUSH PROJECTS
function pushProjects(projects) {
    for (var proj = 0; proj < projects.length; proj++) {
        var title = projects[proj]["title"];
        var desc = projects[proj]["desc"];
        var thumb = projects[proj]["thumb"];
        var pub = projects[proj]["pub"];
        var tech = projects[proj]["tech"];
        var id = projects[proj]["id"];

        $('#projects').append('<div class="project" id="' + id + '"><div class="projectimg"><div class="photo-text"><h3 class="cardTitle">' + title + '</h3></div><img src="' + thumb + '" alt="' + title + '"/></div><p class="mobileTitle">' + title + '</p></div>');
    }

}



// SHOW SINGLE PROJECT
function showSingleProject(projects) {
    $('.project').on('click', function() {
        $('#work').fadeOut('fast');
        $('#singleProject').empty();
        $(window).scrollTop(0);

        var clickedId = this.id;
        var filtered = projects.filter(function(item) {
            return item.id == clickedId;
        });

        var clickedTitle = filtered[0].title;
        var clickedPub = filtered[0].pub;
        var clickedDesc = filtered[0].desc;
        var clickedTech = filtered[0].tech;
        var viewProject = filtered[0].viewProject;
        var clickedImg = filtered[0].img;
        var clickedImg2 = filtered[0].img2;
        var clickedImg3 = filtered[0].img3;
        var clickedImg4 = filtered[0].img4;
        var alt = filtered[0].alt;
        var alt2 = filtered[0].alt2;
        var alt3 = filtered[0].alt3;
        var alt4 = filtered[0].alt4;
        var iframe = filtered[0].iframe;

        if (!filtered[0].img2) {
            $('#singleProject').append('<p class="back hov"> <i class="fa fa-times-circle" aria-hidden="true"></i> CLOSE</p><div class="single"><div class="singleLeftCol"><h3 class="title">'+clickedTitle+'</h3><p class="pub">'+clickedPub+'</p><p class="desc">'+clickedDesc+'</p><p class="tech">'+clickedTech+'</p><br/><a class="hov" href="'+viewProject+'"><p class="hov viewProject">View Project→</p></a></div><div class="singleRightCol"><img class="singleProjectImg" alt="'+alt+'"src="'+clickedImg+'"/></div></div> ');

        } else if (!filtered[0].img3) {
            $('#singleProject').append('<p class="back hov"> <i class="fa fa-times-circle" aria-hidden="true"></i> CLOSE</p><div class="single"><div class="singleLeftCol"><h3 class="title">'+clickedTitle+'</h3><p class="pub">'+clickedPub+'</p><p class="desc">'+clickedDesc+'</p><p class="tech">'+clickedTech+'</p><br/><a class="hov" href="'+viewProject+'"><p class="hov viewProject">View Project→</p></a></div><div class="singleRightCol"><img class="singleProjectImg" alt="'+alt+'"src="'+clickedImg+'"/><img class="singleProjectImg" alt="'+alt2+'"src="'+clickedImg2+'"/></div></div> ');
        }
        else if (!filtered[0].img4) {
            $('#singleProject').append('<p class="back hov"> <i class="fa fa-times-circle" aria-hidden="true"></i> CLOSE</p><div class="single"><div class="singleLeftCol"><h3 class="title">'+clickedTitle+'</h3><p class="pub">'+clickedPub+'</p><p class="desc">'+clickedDesc+'</p><p class="tech">'+clickedTech+'</p><br/><a class="hov" href="'+viewProject+'"><p class="hov viewProject">View Project→</p></a></div><div class="singleRightCol"><img class="singleProjectImg" alt="'+alt+'"src="'+clickedImg+'"/><img class="singleProjectImg" alt="'+alt2+'"src="'+clickedImg2+'"/><img class="singleProjectImg" alt="'+alt3+'"src="'+clickedImg3+'"/></div></div> ');
        } else {
            $('#singleProject').append('<p class="back hov"> <i class="fa fa-times-circle" aria-hidden="true"></i> CLOSE</p><div class="single"><div class="singleLeftCol"><h3 class="title">'+clickedTitle+'</h3><p class="pub">'+clickedPub+'</p><p class="desc">'+clickedDesc+'</p><p class="tech">'+clickedTech+'</p><br/><a class="hov" href="'+viewProject+'"><p class="hov viewProject">View Project→</p></a></div><div class="singleRightCol"><img class="singleProjectImg" alt="'+alt+'"src="'+clickedImg+'"/><img class="singleProjectImg" alt="'+alt2+'"src="'+clickedImg2+'"/><img class="singleProjectImg" alt="'+alt3+'"src="'+clickedImg3+'"/><img class="singleProjectImg" alt="'+alt4+'"src="'+clickedImg4+'"/></div></div> ');
        }

        if (filtered[0].iframe) {
            $('.singleRightCol').append('<iframe src="'+iframe+'"></iframe>');
        }

        $('#singleProject').fadeIn('fast');

        $('.back').on('click', function() {
            $('#singleProject').fadeOut('fast');
            $('#work').fadeIn('fast');
            $('#about').hide('');
            $('#singleProject').hide();
        });
    });
}
