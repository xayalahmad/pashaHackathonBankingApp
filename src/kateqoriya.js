$(document).on("click", "#kateqoriyaelaveet", function(e){

        $("#kateqoriyaelaveetmespinner").removeClass("d-none")
        function katelaveetinputbos(){
        $("#kateqoriyaelaveetmespinner").addClass("d-none")
        $("#kateqoriyaelaveetmekelaveedildi").removeClass("d-none")
        $("#kateqoriyaelaveet").addClass("d-none")
        }
        setTimeout(() => katelaveetinputbos(), 2000); 
})