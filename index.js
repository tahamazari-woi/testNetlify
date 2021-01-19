// let test = document.getElementById("test")
// test.href = `app://deepLink/${window.location}`
// console.log(test)


// $(document).ready(function(){
//     let test = document.getElementById("test")
//     test.href = `app://deepLink/${window.location}`
//     $('#test')[0].click();
//  });

// window.location.href = `app://deepLink/${window.location}`;
var a = document.createElement('a');
a.setAttribute('href',`app://deepLink/${window.location}`); //<-- this is the URL
document.body.appendChild(a);
a.click();