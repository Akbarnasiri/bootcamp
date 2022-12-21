var request;

if (window.XMLHttpRequest) {
  request = new XMLHttpRequest()
} else {
  request = new ActiveXObject('Microsoft.XMLHTTP')
}

request.open('GET', 'http://fakestoreapi.com/products')

request.onreadystatechange = () => {
  if (request.readyState === 4 && request.status === 200) {
    var items = JSON.parse(request.responseText);


    var output = "<ul>";

    for (var key in items) {

      output += "<li>" + items[key].title + " | " + " price: " + items[key].price + " $ " + "</li>" + "description: " + items[key].description + "<br><br>";

    }

    output += "</ul>";

    document.getElementById('update').innerHTML = output;

  }
}

request.send()
