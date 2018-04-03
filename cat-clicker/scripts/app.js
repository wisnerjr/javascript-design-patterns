class Cat {
  constructor(name, src) {
    this.name = name;
    this.src = src;
    this.clickCount = 0;
  }

  count(elemId) {
    var p = document.getElementById(elemId);
    p.textContent = ++this.clickCount;
  }
}

var cat1 = new Cat('Meowth', 'img/cat1.jpg');
var cat2 = new Cat('Persian', 'img/cat2.jpg');


var elem1 = document.getElementById('cat-1');
elem1.src = cat1.src;
elem1.addEventListener('click', cat1.count('cat-count-1'));

var elem2 = document.getElementById('cat-2');
elem2.src = cat2.src;
elem2.addEventListener('click', cat2.count('cat-count-2'));