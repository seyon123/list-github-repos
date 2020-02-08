# List GitHub Repos
|![Home Page](screen1.png "Home Page")|![Repo Page](screen2.png "Repo Page")|
|:---:|:---:|

![GitHub repo size](https://img.shields.io/github/repo-size/seyon123/list-github-repos?style=for-the-badge) ![GitHub last commit](https://img.shields.io/github/last-commit/seyon123/list-github-repos?label=Last%20Commit&style=for-the-badge) ![GitHub](https://img.shields.io/github/license/seyon123/list-github-repos?style=for-the-badge)
 ## Overview
 This repo lists all of your GitHub repos onto a webpage. The styling and functionality can easily be customized to meet your needs. A demo webpage can be found here: https://repos.seyonrajagopal.ca/

 ## Prerequisites

 jQuery is required for this repo to work properly. You can import the script from CDN into your html page like below:

 ```html
 <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1jquery.min.js"></script>
 ```

 ## How To Use
Start by forking or downloading this repository. There is mainly 2 file from this repository that you need, <a href="js/script.js">script.js</a> and <a href="css/styles.css">styles.css</a>. The JavaScript file gets necessary information about the users repositories from GitHub's api and the css file contains styling for elements.

Find the script.js file located at `js/script.js`, place the file in your project and uncomment and edit the following lines:

```javascript
var user = ""; //put GitHub username in the ""
window.onload = genRepo(user);
```
<i>Note: another method would be to call the </i>`genRepo("username")`<i> function with a button or a form which wouldn't require you to do this step.</i>


 Go to your projects's html page and make sure you reference the JavaScript file in the head if you havn't done so, eg:
 ```html
<script src="js/script.js"></script>
 ``` 

 In the html page and add a div named `repo-box` where you want the repositiories to show:
```html
<div id="repo-box"></div>
```

Final step is to add the styling. My styles.css file can be found at `css/styles.css` You may use that or modify or create your own.

If you wish to modify or create your own syling, the following classes and  ids are used to styling. You may make or add changes to these as you desire:
```html
#repo-box    -> <div> contains all the repositories being printed out
.error-box   -> <div> error message div when user name is not correct
.error-msg   -> <h1> message of the error
.repo-item   -> <div> contains the information for repository
.title       -> <h1> title of the repository
.description -> <p> description of the repository
.bottom      -> <div> contains the icons and values for language, stars and forks of repo
.img         -> <span> contains images of language, stars, and forks
.language    -> <div> contains image and values for language
.star        -> <div> contains image and values for number of stars
.fork        -> <div> contains image and values for number of forks
```
<i>Note: UIkit was also used for some styling and icons. You may have to use your own icons if you dont want to use UIkit.</i>

 
