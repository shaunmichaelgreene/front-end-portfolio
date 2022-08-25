var projectCardEl = document.querySelector("#preview-container"); //page element that contains the project screenshot image

var linkHandler = function(event) {
    // console.log(event.target.children[0].href); //prints the url when clicking the container border
    
    //all of the individual project links point to their github repositories. the project screenshot images (projectCardEl) point to the live deployed page. if the project is not deployed live, clicking the projectCardEl will instead redirect to the github repository. 
    var projectLink = (event.target.previousElementSibling.href); //gets the repo link for the clicked screenshot
    var projectName = projectLink.slice(38).split("/")[0]; //uses slice and split to exctract the project name
    var liveLink = "https://shaunmichaelgreene.github.io/" + projectName + "/"; //uses the project name to build the live deployed link
    var linkStatus = linkChecker(liveLink); 
    
    //function attempts to fetch the live link, if the request is good then the page is deployed live and redirects to the live page. If the request fails, the page is not deployed live and redirects to the github repo. 
    function linkChecker (liveLink) {
        $.get(liveLink).done(function () {
            console.log("good link");
            window.open(liveLink, "_blank");
            return true;
           }).fail(function () {
            console.log("bad link");
            window.open(projectLink, "_blank");
            return false;
        });
    }
    
    console.log("Redirecting to: " + liveLink);
}

//event listener for the project images
projectCardEl.addEventListener("click", linkHandler)
//CODE GRAVEYARD
// if (linkStatus == true) {
//     console.log("liveLink is good! opening...")
//     window.open(liveLink, "_blank");
// } else {
//     console.log("No live deployment detected on github, redirecting to main repository")
//     window.open(projectLink, "_blank");
// };

// var request;
// if (window.XMLHttpRequest) {
//     request = new XMLHttpRequest();
// } else {
//     request = new ActiveXObject("Microsoft.XMLHTTP");
// }
// request.open('GET', liveLink, false);
// request.send();

// if (request.status == 200) {
//     console.log('good link!')
//     window.open(liveLink, "_blank");
// } else {
//     console.log("No live deployment detected on github, redirecting to main repository")
//     window.open(projectLink, "_blank");
// }


// function linkChecker (liveLink) {
//     $.get(liveLink).done(function () {
//         console.log("good link");
//         window.open(liveLink, "_blank");
//         return true;
//        }).fail(function () {
//         console.log("bad link");
//         window.open(projectLink, "_blank");
//         return false;
//        });
// }

