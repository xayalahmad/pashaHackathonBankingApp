$("#parametrspinner")



$(document).on("click", "#yaddasaxlabtnparametr", function(){
  $("#parametrspinner").removeClass("d-none")
  function yaddasaxla(){
  $("#parametrspinner").addClass("d-none")
  $("#yaddasaxlatitleparametr").removeClass("d-none")
  $("#yaddasaxlabtn").addClass("d-none")
  $("#yaddasaxlabtnparametr").addClass("d-none")
  }

  setTimeout(() => yaddasaxla(), 2000); 
})
