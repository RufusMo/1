$(function () {
    $(".menuList .menu-item").mouseover(function () {
        $(".menuContent").hide();
        var selector = $(this).attr('data-id');
        $('.' + selector).show();
    });

    $(".menuList .menu-item , .menuContent").mouseleave(function () {
        $(".menuContent").hide();
    });

    $(".menuContent ").mouseover(function () {
        $(".menuContent").hide();
        $(this).show();
    })
});

