var arr = []
var lokalarzuarray
$(document).on("click", "#arzuelaveet", function(e){
        e.preventDefault();

        
        
        if($("#arzuelaveetinputu").val() && $("#arzuelaveetinputu2").val() ){
        $("#bosarzu").addClass("d-none")


        $("#arzuelaveetmespinner").removeClass("d-none")
        function katelaveetinputbos(){
        $("#arzuelaveetmespinner").addClass("d-none")
        $("#arzuelaveetmekelaveedildi").removeClass("d-none")
        // $("#arzuelaveet").addClass("d-none")
        }
        setTimeout(() => katelaveetinputbos(), 2000); 

        var inpurval = $("#arzuelaveetinputu").val()
        arr.push(inpurval)
        localStorage.setItem("arzular", arr);
        let arzulokal = localStorage.getItem("arzular")
        console.log(arzulokal.split(","));
        console.log(arzulokal.length);
        lokalarzuarray = arzulokal.split(",")
        console.log(lokalarzuarray);
        // for(i = 0; i++; i< arzulokal.length){
        //         console.log(arzulokal[i]);
        // }

        // $("#allarzu").html(

        //         lokalarzuarray.map((q, i) =>{
        //                 return `
                        
        //                 <div class="d-flex justify-content-between pt-2 pb-2 mb-2 col-12" style="border:  1px solid #ff0038; border-radius: 4px;">
        //                 <div class="font1">${i+1}. ${q}</div>
        //                 <div>
        //                   <i class="fas colorred mr-1 fa-pen p-1"></i>
        //                   <i class="fas colorred ml-1 fa-trash p-1"></i>
        //                 </div>
        //             </div>
                        
        //                 `
        
        //         })
        // )

}
else{
        $("#bosarzu").removeClass("d-none")

}
})




$(document).on("click", "#birinciarzu1yapulelaveetmek", function(e){
    e.preventDefault();

    
    
    if($("#arzu1elaveetinputu").val() ){
    $("#arzu1").addClass("d-none")


    $("#arzu1elaveetmespinner").removeClass("d-none")
    function katelaveetinput(){
    $("#arzu1elaveetmespinner").addClass("d-none")
    $("#arzu1elaveetmekelaveedildi").removeClass("d-none")
    // $("#arzu1elaveet").addClass("d-none")
    }
    setTimeout(() => katelaveetinput(), 2000); 

    var inpurval = $("#arzu1elaveetinputu").val()
    arr.push(inpurval)
    localStorage.setItem("arzu1lar", arr);
    let arzu1lokal = localStorage.getItem("arzu1lar")
    console.log(arzu1lokal.split(","));
    console.log(arzu1lokal.length);
    lokalarzu1array = arzu1lokal.split(",")
    console.log(lokalarzu1array);
    // for(i = 0; i++; i< arzu1lokal.length){
    //         console.log(arzu1lokal[i]);
    // }

    // $("#allarzu1").html(

    //         lokalarzu1array.map((q, i) =>{
    //                 return `
                    
    //                 <div class="d-flex justify-content-between pt-2 pb-2 mb-2 col-12" style="border:  1px solid #ff0038; border-radius: 4px;">
    //                 <div class="font1">${i+1}. ${q}</div>
    //                 <div>
    //                   <i class="fas colorred mr-1 fa-pen p-1"></i>
    //                   <i class="fas colorred ml-1 fa-trash p-1"></i>
    //                 </div>
    //             </div>
                    
    //                 `
    
    //         })
    // )

}
else{
    $("#arzu1").removeClass("d-none")

}
})







$(document).on("click", "#birinciarzu2yapulelaveetmek", function(e){
    e.preventDefault();

    
    
    if($("#arzu2elaveetinputu").val() ){
    $("#arzu2").addClass("d-none")


    $("#arzu2elaveetmespinner").removeClass("d-none")
    function katelaveetinput(){
    $("#arzu2elaveetmespinner").addClass("d-none")
    $("#arzu2elaveetmekelaveedildi").removeClass("d-none")
    // $("#arzu2elaveet").addClass("d-none")
    }
    setTimeout(() => katelaveetinput(), 2000); 

    var inpurval = $("#arzu2elaveetinputu").val()
    arr.push(inpurval)
    localStorage.setItem("arzu2lar", arr);
    let arzu2lokal = localStorage.getItem("arzu2lar")
    console.log(arzu2lokal.split(","));
    console.log(arzu2lokal.length);
    lokalarzu2array = arzu2lokal.split(",")
    console.log(lokalarzu2array);
    // for(i = 0; i++; i< arzu2lokal.length){
    //         console.log(arzu2lokal[i]);
    // }

    // $("#allarzu2").html(

    //         lokalarzu2array.map((q, i) =>{
    //                 return `
                    
    //                 <div class="d-flex justify-content-between pt-2 pb-2 mb-2 col-12" style="border:  1px solid #ff0038; border-radius: 4px;">
    //                 <div class="font1">${i+1}. ${q}</div>
    //                 <div>
    //                   <i class="fas colorred mr-1 fa-pen p-1"></i>
    //                   <i class="fas colorred ml-1 fa-trash p-1"></i>
    //                 </div>
    //             </div>
                    
    //                 `
    
    //         })
    // )

}
else{
    $("#arzu2").removeClass("d-none")

}
})