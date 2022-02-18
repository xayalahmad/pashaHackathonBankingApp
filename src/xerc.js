$(document).on("click", "#yaddasaxlabtn", function(){
    $("#yaddasaxlaspinner").removeClass("d-none")
    function yaddasaxla(){
    $("#yaddasaxlaspinner").addClass("d-none")
    $("#yaddasaxlatitle").removeClass("d-none")
    $("#yaddasaxlabtn").addClass("d-none")
    }

    setTimeout(() => yaddasaxla(), 2000); 
})

$(document).on("click", ".dropdown-item", function(){
    let catName = $(this).data("category")
    console.log(catName);
    $(".dropdown-toggle").html(catName)
})

$(document).on("click", "#filtirlemek", function(){
    $("#filterspinner").removeClass("d-none")
    function filtirle(){
    $("#filterspinner").addClass("d-none")
    $("#allxercinformation").removeClass("d-none")
    $("#kateqoriyaelaveetmekelaveedildi").removeClass("d-none")
    }

    setTimeout(() => filtirle(), 2000);
})