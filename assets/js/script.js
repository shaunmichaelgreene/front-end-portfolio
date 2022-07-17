var projectCardEl = document.querySelector("#preview-container");

var linkHandler = function(event) {
    // console.log(event.target.children[0].href); //prints the url when clicking the container border
    // console.log(event.target.previousElementSibling.href);
    var projectLink = (event.target.previousElementSibling.href);
    var projectName = projectLink.slice(38).split("/")[0];
    var liveLink = "https://shaunmichaelgreene.github.io/" + projectName + "/";
    var linkStatus = linkChecker(liveLink);
    
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

    console.log(liveLink);
}

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


projectCardEl.addEventListener("click", linkHandler)