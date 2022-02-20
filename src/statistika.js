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

google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Language', 'Speakers (in millions)'],
    ['Assamese', 10], ['Bengali', 83],
    ['Tamil', 61], ['Telugu', 74], ['Urdu', 52]
  ]);

  var options = {
    is3D: true,
    legend: 'none',
    pieSliceText: 'label',
    // slices: {  4: {offset: 0.2},
    //           12: {offset: 0.3},
    //           14: {offset: 0.4},
    //           15: {offset: 0.5},
    // },
  };

  var chart = new google.visualization.PieChart(document.getElementById('piechart'));
  chart.draw(data, options);
}










google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart1);

function drawChart1() {
  var data = google.visualization.arrayToDataTable([
    ['Year', 'Sales', 'Expenses'],
    ['2004',  1000,      400],
    ['2005',  1170,      460],
    ['2006',  660,       1120],
    ['2007',  1030,      540]
  ]);

  var options = {
    title: 'Company Performance',
    curveType: 'function',
    legend: { position: 'bottom' }
  };

  var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

  chart.draw(data, options);
}