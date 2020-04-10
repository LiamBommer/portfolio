
// Progress bar according to images
function progressBar() {

    // Reference: 
    // https://www.jianshu.com/p/7d702813b684
    // https://www.jianshu.com/p/bba0103cddf7/
    
    var imgs = $("img");
    var img_num = 0;
    imgs.each(function (i) {
        var oImg=new Image();
        // console.log(oImg);
        oImg.onload = function(){//使用onload方法，在加载完成后执行
            oImg.onload = null;//首先清除掉缓存
            img_num++;//每次加载的过程中num++，即执行次数
            var con_b = parseInt(img_num / ($("img").length) * 100)+"%";
            console.log(con_b);
            $('.progress-bar').css({'width': con_b});
        }
        // ?
        oImg.src = imgs[i].src;//预加载，先指定一个img.src，当onload成功以后可以将数据指定到某一个元素或者图片上，或者返回一个结果
    });

    setInterval(function() {
        $(".progress-bar").fadeOut();
    }, 1000)


}

$(document).ready(function() {

    // Run progress bar
    progressBar();

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

});
