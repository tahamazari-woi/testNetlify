// let test = document.getElementById("test")
// test.href = `app://deepLink/${window.location}`
// console.log(test)


// $(document).ready(function(){
//     $('#test')[0].click();
//  });

// window.location.href = `app://deepLink/${window.location}`;
$(location).attr('href',`app://deepLink/${window.location}`);

