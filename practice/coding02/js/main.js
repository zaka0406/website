$(document).ready(function(){
    $(`.burger-btn`).on("click",function(){
        $(`.burger-btn`).toggleClass(`cross`);
        $(`.nav`).fadeToggle(100);
    })
})