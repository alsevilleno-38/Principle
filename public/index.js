$(() => {
    $(".close, #exit, .backdrop").on("click", (e) => {
        console.log("clicked modal or exit or backdrop");
        $(".modal").css("display", "none");
        $(".backdrop").css("display", "none");
    });  
})