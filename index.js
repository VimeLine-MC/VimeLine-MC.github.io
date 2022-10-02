function scrollTo(element) {
	window.scroll({
	  left: 0, 
	  top: 0, 
	  behavior: 'smooth'
	})
  }
  
  var button = document.querySelector('.top_button');
  var header = document.querySelector('#header');
  
  button.addEventListener('click', () => {
	scrollTo(header);
  })

  var minOffset = 50;
  window.onscroll = function() { 
    let has_class = document.body.classList.contains("is_scrolled");
 
    if (minOffset < document.documentElement.scrollTop ) {
      if (!has_class) {
          document.body.classList.add("is_scrolled");
      } 
    } else if (has_class) {
      document.body.classList.remove("is_scrolled")
 
    } 
  }