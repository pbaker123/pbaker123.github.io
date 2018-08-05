document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var options = {
    	inDuration: 300,
      outDuration: 225,
      coverTrigger: false, // Displays dropdown below the button
    };
  var instances = M.Sidenav.init(elems, options);
});

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.dropdown-trigger');
  var options = {
  	inDuration: 300,
    outDuration: 225,
    coverTrigger: false, // Displays dropdown below the button
    alignment: 'right' // Displays dropdown with edge aligned to the left of button
  };
  var instances = M.Dropdown.init(elems, options);
});

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.collapsible');
  var instances = M.Collapsible.init(elems);
});

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.carousel');
  var options = {
  };
  var instances = M.Carousel.init(elems, options);
});