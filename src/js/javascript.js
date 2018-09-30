var collapsesHTML = document.getElementsByClassName("collapse");
var collapses = [];
var displayed = null;

var handleClick = function(collapse) {
  var hidden = collapse.getAttribute("class").indexOf("plus") !== -1;
  var targetId = collapse.getAttribute("href");
  var target = document.getElementById(targetId);
  if (hidden) {
    collapse.className = "far fa-minus-square collapse";
    target.className = "subsection-content display";
    if (displayed) {
      displayed.collapse.className = "far fa-plus-square collapse";
      displayed.element.className = "subsection-content hide";
    }
    displayed = {
      collapse: collapse,
      element: target
    };
    target.style.transform = "scaleY(0)";
    var scaleY = 0.0;
    var time = setInterval(frame, 100);
    function frame() {
      if (scaleY >= 0.95) {
        scaleY = 1.0;
        target.style.transform = "scaleY(" + scaleY + ")";
        clearInterval(time);
      } else {
        scaleY += 0.14;
        target.style.transform = "scaleY(" + scaleY + ")";
      }
    }
  } else {
    collapse.className = "far fa-plus-square collapse";
    target.className = "subsection-content hide";
    displayed = null;
  }
};

for (var i = 0; i < collapsesHTML.length; i++) {
  collapses = [...collapses, collapsesHTML.item(i)];
}

collapses.forEach(function(collapse) {
  collapse.onclick = function() {
    handleClick(collapse);
  };
});

// -------------------------------------------------------------

var tooltipsHTML = document.getElementsByClassName("tooltip");
var tooltips = [];
var tooltiptextsHTML = document.getElementsByClassName("tooltiptext");
var tooltiptexts = [];

for (var i = 0; i < tooltipsHTML.length; i++) {
  tooltips = [...tooltips, tooltipsHTML.item(i)];
  tooltiptexts = [...tooltiptexts, tooltiptextsHTML.item(i)];
}

tooltips.forEach(function(tooltip) {
  tooltip.onmousemove = function(event) {
    var rect = tooltip.getBoundingClientRect();
    var x = event.clientX - rect.x;
    tooltiptexts.forEach(function(tooltiptext) {
      tooltiptext.style.left = x + "px";
    });
  };
});

// -------------------------------------------------------------

var levels = {
  BI: 4,
  ML: 3,
  Cloud: 3,
  SSI: 2,
  Hadoop: 4,
  Hive: 3,
  C: 3,
  Java: 3,
  PHP: 4,
  Matlab: 4,
  HTML: 4,
  CSS: 4,
  Javascript: 4,
  SQL: 3,
  PLSQL: 3,
  R: 4,
  MYSQL: 4,
  Oracle: 3
};

for (field in levels) {
  var stars = document.getElementsByClassName(field).item(0);
  var children = stars.children;
  for (var i = 0; i < levels[field]; i++) {
    var star = children.item(i);
    star.className = "fas fa-star";
  }
}
