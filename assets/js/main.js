
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
            var con_b = parseInt(img_num / (imgs.length) * 100)+"%";
            // console.log(con_b);
            $('.progress-bar').css({'width': con_b});

            if (img_num == imgs.length) {
                // 全部加载完成后一秒隐藏进度条
                setTimeout(function() {
                    $(".progress").fadeOut();
                }, 1500)
            }
        }
        // ?
        oImg.src = imgs[i].src;//预加载，先指定一个img.src，当onload成功以后可以将数据指定到某一个元素或者图片上，或者返回一个结果
    });


}


/*
    中文首页打字效果js

    References
        https://github.com/mattboldt/typed.js/
*/
function typing() {

    // 判断是否中文
    if($('.typed_1').length > 0) {

        var options_1 = {
            strings: ['是一个从用户出发，致力于创造优秀使用体验的交互设计师<br/>我还是一个'],
            typeSpeed: 25,
            smartBackspace: false,
            showCursor: false
        };
        var typed_1 = new Typed('.typed_1', options_1);

        // 等待两秒上面的输入完成后继续
        setTimeout(function() {
            var options_2 = {
                strings: ['前端开发', '游戏爱好者', '吉他手', '摄影爱好者'],
                typeSpeed: 80,
                backSpeed: 20,
                backDelay: 1000,
                loop: true,
                loopCount: Infinity,
            };
            var typed_2 = new Typed('.typed_2', options_2);
        }, 1500)

    }

};


$(document).ready(function() {

    // Run progress bar
    progressBar();

    // Initial typing effect
    typing();


    // $('.typed_2').on('click', function() {
    //     window.location.href = "about";
    // }).css('cursor', 'pointer');

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
    $('#jiaoxiang_zh').on("click", function() {
        window.location.href = "work/jiaoxiang_zh";
    });
    $("#onecooperation_zh").on("click", function() {
        window.location.href = "work/onecooperation_zh";
    });
    $("#smokepuppy_zh").on("click", function() {
        window.location.href = "work/smokepuppy_zh";
    });

});
