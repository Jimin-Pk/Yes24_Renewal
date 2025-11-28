$(function(){
    let activeIndex = null;

    $(".wmw .wml").mouseenter(function(){
        const index = $(this).data("index");
        activeIndex = index;

        $(".wmw .wml").css("background","#0080ff");
        $(".wmw .wml").css("color","#fff");

        $(this).css("background","#fff");
        $(this).css("color","#0080ff");
        $(".dom").hide();
        $(".whfad").hide();

        $(`.dom[data-index="${index}"]`).css("display","flex");
        $(`.whfad[data-index="${index}"]`).css("display","block");
    });

    $(".wmw .wml").mouseleave(function(){
        const index = $(this).data("index");

        if(activeIndex !== index){ 
        $(this).css("background","#0080ff");
        $(this).css("color","#fff");
        }
    });

    $(".dom").mouseenter(function(){
        const index = $(this).data("index");
        activeIndex = index;
    });

    $(".dom").mouseleave(function(){
        const index = $(this).data("index");

        $(`.wmw .wml[data-index=${index}"]`).css("background","#0080ff");
        $(`.wmw .wml[data-index=${index}"]`).css("color","#fff");
        $(".dom").hide();
        $(".whfad").hide();

        activeIndex = null;
    });

    $("#whfmw").mouseleave(function(){
        $(".wml").css({"background":"#0080ff", "color":"#fff"});
        $(".dom").hide();
        $(".whfad").hide();
        activeIndex = null;
    });
});