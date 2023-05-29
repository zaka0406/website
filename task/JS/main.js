$(document).ready(function () {
    $(`.burger-btn`).on(`click`,function(){
        $(`.burger-btn`).toggleClass(`cross`);
        $(`.nav-list`).fadeToggle(300);
    })
});