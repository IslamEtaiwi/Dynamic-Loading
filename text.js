var Container = document.getElementById("demo");
var btn = document.getElementById("y");
btn.addEventListener("click", function() {
var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'https://islametaiwi.github.io/data/bd.json');
ourRequest.onload = function() {
  if (ourRequest.status >= 200 && ourRequest.status < 400) {
    var ourData = JSON.parse(ourRequest.responseText);
    renderHTML(ourData);
  }
};

ourRequest.send();

});

function renderHTML(data) {
var htmlStringi = "";

for (i = 0; i < data.length; i++) {
  htmlStringi += "<p>" + data[i].name + ":"+data[i].description;
  htmlStringi += '.</p>';

}

document.getElementById("demo").innerHTML = htmlStringi;
}
