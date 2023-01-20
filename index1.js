// Media query for alert function

function myFunction(x) {
    if (x.matches) {
      alert("It's recommended to use the website on PC/Laptop for much better experience and result, Thank You!")
    } else {
    }
  }
  
  var x = window.matchMedia("(max-width: 700px)")
  myFunction(x)

