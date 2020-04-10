
$(document).ready(function() {

    // Progress Bar
    // Reference: https://www.jianshu.com/p/7d702813b684
    // 页面加载完成后1秒进度条消失
    setInterval(function() {
        $('.progress-bar').fadeOut()
    }, 3000);


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

    // Chinese Project card link
    $('#ritparking_zh').on("click", function() {
        window.location.href = "work/ritparking_zh";
    });

})
