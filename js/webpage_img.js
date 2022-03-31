/*webpage_img*/
$(function () {
    $(".webpage").mouseenter(function () {
        $(".webpage img").stop().animate({ marginTop: -1600 }, 10000);
    }).mouseleave(function () {
        $(".webpage img").stop().animate({ marginTop: 0 }, 3000);
    });
});

/*phonebox_img*/
    $(function () {
        $(".phonebox").mouseenter(function () {
            $(".phonebox img").stop().animate({ marginTop: -1600 }, 10000);
        }).mouseleave(function () {
            $(".phonebox img").stop().animate({ marginTop: 0 }, 3000);
        });
    });

