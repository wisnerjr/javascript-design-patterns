function count() {
  var p = document.getElementById('cat-count');
  var value = Number.parseInt(p.textContent);
  if (! Number.isNaN(value))
    p.textContent = ++value;
}  

var elem = document.getElementById('cat');
elem.addEventListener('click', count);