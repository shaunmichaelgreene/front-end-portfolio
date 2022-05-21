var projectCardEl = document.querySelector("#preview-container");

var linkHandler = function(event) {
    // console.log(event.target.children[0].href); //prints the url when clicking the container border
    console.log(event.target.previousElementSibling.href);
    var projectLink = (event.target.previousElementSibling.href);
    var projectName = projectLink.slice(38).split("/")[0];
    var liveLink = "https://shaunmichaelgreene.github.io/" + projectName + "/";
    console.log(liveLink);
    window.open(liveLink, "_blank");
}


projectCardEl.addEventListener("click", linkHandler)