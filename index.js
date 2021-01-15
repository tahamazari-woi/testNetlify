let test = document.getElementById("test")
test.href = `app://deepLink/${window.location}`
// console.log(test)


$(document).ready(function(){
    $('#test')[0].click();
 });