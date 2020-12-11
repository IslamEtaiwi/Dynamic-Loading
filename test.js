var bn = document.getElementById("v");
var Containner = document.getElementById("demoo");

bn.addEventListener("click", function() {
var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'https://islametaiwi.github.io/m/m.json');
ourRequest.onload = function() {
  if (ourRequest.status >= 200 && ourRequest.status < 400) {
    var ourData = JSON.parse(ourRequest.responseText);
    renderHTMLi(ourData);
  }
};

ourRequest.send();

});

function renderHTMLi(data) {
var htmlString = "";

for (i = 0; i < data.length; i++) {
  htmlString += "<p>" + data[i].name + ":"+data[i].description;
  htmlString += '.</p>';

}

document.getElementById("demoo").innerHTML = htmlString;
}
