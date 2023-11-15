$(".owl-carousel").owlCarousel({
  merge:true,
  loop:true,
  video:true,
  image:true
});
function calculateUsage() {
        
  var watts = document.getElementById('watts').value;
  var hours = document.getElementById('hours').value;
  var days = document.getElementById('days').value;
  
  
  var totalEnergy = (watts * hours * days) / 1000; // Converting to kWh
  
  
  document.getElementById('result').innerHTML = "Total Electricity Usage: " + totalEnergy + " kWh";}