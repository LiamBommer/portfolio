
$(document).ready(function() {

    // Project card link to page
    $("#onecooperation").on("click", function() {
        window.location.href = "work/onecooperation";
    });
    $("#buzzwordreader").on("click", function() {
        window.location.href = "work/buzzwordreader";
    });
    $('#urdesign').on("click", function() {
        window.location.href = "work/urdesign";
    });
    $('#jiaoxiang').on("click", function() {
        window.location.href = "work/jiaoxiang";
    });
    $('#ritparking').on("click", function() {
        window.location.href = "work/ritparking";
    });
    $('#snapchat').on("click", function() {
        window.location.href = "work/snapchat";
    });

    // Change cursor to pointer
    $("div.card").css("cursor", "pointer");

})
