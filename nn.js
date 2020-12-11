var Containerr = document.getElementById("k");
var bn = document.getElementById("h");
bn.addEventListener("click", function() {
var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'https://islametaiwi.github.io/jh/textt.json');
ourRequest.onload = function() {
  if (ourRequest.status >= 200 && ourRequest.status < 400) {
    var ourData = JSON.parse(ourRequest.responseText);
    renderHTtML(ourData);
  }
};

ourRequest.send();

});

function renderHTtML(data) {
var htmlStringg = "";

for (i = 0; i < data.length; i++) {
  htmlStringg += "<p>" + data[i].name + ":"+data[i].description;
  htmlStringg += '.</p>';

}

document.getElementById("k").innerHTML = htmlStringg;
}
