$( document ).ready(function() {
var total = 158,
    buttons = document.querySelector('.buttons'),
    pie = document.querySelector('.pie'),
    activeClass = 'active';


// You have to personally set up
var answerOnePercent = 60;
var answers = {
  "Lorem Ipsum" : answerOnePercent,
  "dolor dui lui elit" : 30,
  "consectir lorem oipsujm": 9,
  "answer b and #blameJason": 1,
};

// work out percentage as a result of total
var numberFixer = function(num){
  var result = ((num * total) / 158);
  return result;
}

// create a button for each answer
for(property in answers){
  var newEl = document.createElement('li');
  newEl.innerText = property;
  newEl.setAttribute('data-name', property);
  buttons.appendChild(newEl);
}


// when you click a button setPieChart and setActiveClass
  buttons.addEventListener('click', function(e){
    if(e.target != e.currentTarget){
      var el = e.target,
          name = el.getAttribute('data-name');
      setPieChart(name);
      console.log(answers[name]);
      setPercent(answers[name]);
      setActiveClass(el);
    }
    e.stopPropagation();
  });

var setPieChart = function(num){
  var number = answers[num],
      fixedNumber = numberFixer(number),
      result = fixedNumber + ' ' + total;

  pie.style.strokeDasharray = result;
}

var setPercent = function(num){
  percent = num / 100;
  realPercent = percent * 100 + "%";
  document.getElementById('percentage').innerText = realPercent;
}

var setActiveClass = function(el) {
  for(var i = 0; i < buttons.children.length; i++) {
    buttons.children[i].classList.remove(activeClass);
    el.classList.add(activeClass);
  }
}

// Set up default settings
setActiveClass(buttons.children[0]);
// setPieChart(60);
pie.style.strokeDasharray = answerOnePercent + ' ' + total;
setPercent(60);

});
