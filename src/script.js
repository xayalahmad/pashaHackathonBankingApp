function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

count=0
$(document).on("click", "#pigimage", function(){
    count++
    console.log(count)
    if(count==1){
        $("#pigimage").attr( "src", "./img/pig2.jpg" );
    }
    if(count==2){
        $("#pigimage").attr( "src", "./img/pig3.jpg" );
    }
    if(count==3){
        function zaman(){

            const date = new Date();
            
            var countDownDate = date.setDate(date.getDate() + 7);
            
            // Update the count down every 1 second
            var x = setInterval(function() {
            
              // Get today's date and time
              var now = new Date().getTime();
                
              // Find the distance between now and the count down date
              var distance = countDownDate - now;
                
              // Time calculations for days, hours, minutes and seconds
              var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
              var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
              var seconds = Math.floor((distance % (1000 * 60)) / 1000);
                
              // Output the result in an element with id="demo"
              document.getElementById("demo").innerHTML =
               `
               <div class="mt-2 timecontainer d-flex text-center mx-auto justify-content-center">
               ${hours } <div id="saatsaniyedeqiqe">saat </div> ${minutes} <div id="saatsaniyedeqiqe"> dəqiqə </div> ${seconds} <div id="saatsaniyedeqiqe"> saniyə </div>
               </div>
              `
            //   hours + "saat "
            //   + minutes + "dəqiqə " + seconds + "saniyə ";
                
              // If the count down is over, write some text 
              if (distance < 0) {
                clearInterval(x);
                document.getElementById("demo").innerHTML = "EXPIRED";
              }
            }, 0000);
        }
        zaman()
        $("#pigimage").attr( "src", "./img/pig4.jpg" );
        $("#winheart").removeClass("d-none")
        $("#demo").removeClass("d-none")
        $("#demotitle").removeClass("d-none")
    }
    // count=0
})
hearts = [80, 100, 120, 150, 200]
function randomInteger(min, max) {
    let result = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log( hearts[result]);
    $("#winheart").html(
        `
        <div class="d-flex align-items-center justify-content-center">
        <div style="font-size: 50px;" class="font1">${hearts[result]}</div>
        <img src="./img/heart.png" width="60px" alt="">
        </div>
        `
    )
    return hearts[result]
}
randomInteger(0,4)


// Set the date we're counting down to



// ! EYE

// var eyecount = 0
$(document).on("click", ".fa-eye", function(){
  // eyecount++
  // if(eyecount == 1){
    $(".fa-eye").addClass("d-none")
    $(".fa-eye-slash").removeClass("d-none")
    $("#blurmoney").addClass("blurmoney")
    $("#blurmoney2").addClass("blurmoney")
  // }

})

$(document).on("click", ".fa-eye-slash", function(){
  // eyecount++
  // if(eyecount == 1){
    $(".fa-eye").removeClass("d-none")
    $(".fa-eye-slash").addClass("d-none")
    $("#blurmoney").removeClass("blurmoney")
    $("#blurmoney2").removeClass("blurmoney")

  // }

})