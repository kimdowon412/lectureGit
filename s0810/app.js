window.onload = function(){
    let current = 0;
    let isSlide = false;

    function slide(target, dir){
        if(target >= $(".slide-image").length || target < 0 || isSlide) return;

        console.log(target, dir);

        isSlide = true;

        $(".slide-image")
        .eq(target)
        .css({"left": `${dir * 100}%`})
        .animate({"left":0}, 800);

        $(".slide-image")
        .eq(current)
        .animate({"left":`${-100 * dir}%`}, 800, function(){
            isSlide = false;            
        });
        current = target;
        
        $(".pin").removeClass("active");
        $(".pin").eq(target).addClass("active");
    }

    $(".slide-image").css({"left":"100%"});
    $(".slide-image").eq(current).css("left", 0);

    setInterval (function(){
        slide(current +1,1)
    }, 5000);

    $(".pin").on("click", function(){
        let idx = $(".pin").index();
        console.log(idx);
    });

    $(".slide-btn").on("click", function(){
        let dir = $(this).data("dir") * 1; 
        slide(current + dir, dir);
    });
        
};