var arr = []
var lokalkateqoriyaarray
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

        var inpurval = $("#kateqoriyaelaveetinputu").val()
        arr.push(inpurval)
        localStorage.setItem("Kateqoriyalar", arr);
        let kateqoriyalokal = localStorage.getItem("Kateqoriyalar")
        console.log(kateqoriyalokal.split(","));
        console.log(kateqoriyalokal.length);
        lokalkateqoriyaarray = kateqoriyalokal.split(",")
        console.log(lokalkateqoriyaarray);
        // for(i = 0; i++; i< kateqoriyalokal.length){
        //         console.log(kateqoriyalokal[i]);
        // }

        $("#allkateqoriya").html(

                lokalkateqoriyaarray.map((q, i) =>{
                        return `
                        
                        <div class="d-flex justify-content-between pt-2 pb-2 mb-2 col-12" style="border:  1px solid #ff0038; border-radius: 4px;">
                        <div class="font1">${i+1}. ${q}</div>
                        <div>
                          <i class="fas colorred mr-1 fa-pen p-1"></i>
                          <i class="fas colorred ml-1 fa-trash p-1"></i>
                        </div>
                    </div>
                        
                        `
        
                })
        )

}
else{
        $("#boskateqoriya").removeClass("d-none")
}
})

