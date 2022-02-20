var arr = []
var arr2 = []
var localfirst
$(document).on("click", "#kateqoriyaelaveet", function(e){
        e.preventDefault();

        
        
        if($("#kateqoriyaelaveetinputu").val()){
        $("#boskateqoriya").addClass("d-none")

        $("#kateqoriyaelaveetmespinner").removeClass("d-none")
        function katelaveetinputbos(){
        $("#kateqoriyaelaveetmespinner").addClass("d-none")
        $("#kateqoriyaelaveetmekelaveedildi").removeClass("d-none")
        // $("#kateqoriyaelaveet").addClass("d-none")
        }
        setTimeout(() => katelaveetinputbos(), 2000); 
}
else{
        $("#boskateqoriya").removeClass("d-none")
}
})


