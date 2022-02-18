$(document).on("click", ".dropdown-item", function(){
    let catName = $(this).data("category")
    console.log(catName);
    $(".dropdown-toggle").html(catName)
    $("#modalkateqoriya2").html(catName)
})


$(document).on("click", "#filtirlemek2", function(){
        $("#kateqoriyalaragorespinner").removeClass("d-none")
        function yaddasaxla2(){
        $("#kateqoriyalaragorespinner").addClass("d-none")
        $("#kategoriyaucunqrafik").removeClass("d-none")
        // $("#yaddasaxlabtn").addClass("d-none")
        }
    
        setTimeout(() => yaddasaxla2(), 2000); 
})