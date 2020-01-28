// -------------------------------------------
//   Author: Seyon Rajagopal
//   Copyright (c) 2020 Seyon Rajagopal
// -------------------------------------------


// To use this file uncomment the  following 2 lines of code and 
// enter GitHub username in the ""

// var user = "";
// window.onload = genRepo(user);


function genRepo(user) {
    const testuser = /^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i;

    if (testuser.test(user) == false || user == "" || user == null) {
        $("#repo-box").append("<div class='error-box'><h1 class='error-msg'> Sorry the GitHub username appears to be invalid </h1></div>");
    }

    else {

        var requestURL = 'https://api.github.com/users/' + user + '/repos';
        var request = $.get(requestURL, function () {
        })
            .done(function () {
                request = request.responseJSON;
                if (!Array.isArray(request) || !request.length) {
                    $("#repo-box").append("<div class='error-box'><h1 class='error-msg'> Sorry the username entered appears to be invalid </h1></div>");
                }
                else {
                    for (i = 0; i < request.length; i++) {
                        // variables from api request
                        var repo_url = request[i].html_url;
                        var username = request[i].owner.login;
                        var repo_name = request[i].name;
                        var repo_description = request[i].description;
                        var repo_language = request[i].language;
                        var repo_stars = request[i].stargazers_count;
                        var repo_forks = request[i].forks;

                        // replaces null values to be better represented when displayed
                        if (repo_description == null) {
                            repo_description = "<i>No Description</i>";
                        }
                        if (repo_language == null) {
                            repo_language = "-";
                        }

                        // Puts repo information into div
                        $("#repo-box").append("<a href='" + repo_url + "' target='_blank'><div class='repo-item'><h1 class='title'>" +
                            username + "/" +
                            repo_name + "</h1><p class='description'>" +
                            repo_description + "</p>" + "<div class='bottom'><div class='language'><span class='img' uk-icon='code' class='uk-icon'></span>" +
                            repo_language + "</div>  <div class='star'><span class='img' uk-icon='star' class='uk-icon'></span>" +
                            repo_stars + "  </div> <div class='fork'><span class='img' uk-icon='git-fork' class='uk-icon'></span>" +
                            repo_forks + "</div></div></div>");
                    }
                }
            });
    }
}