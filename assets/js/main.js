
// CS50 MODAL
const csmodal = document.getElementById("csModal");
  
// Get the image and insert it inside the modal - use its "alt" text as a caption
const csimg = document.getElementById("cs50");
const modalcsImg = document.getElementById("img01");
const cscaptionText = csmodal.querySelector(".caption");
csimg.onclick = function(){
  csmodal.style.display = "block";
  modalcsImg.src = this.src;
  cscaptionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
const csspan = document.getElementsByClassName("close")[1];

// When the user clicks on <span> (x), close the modal
csspan.onclick = function() { 
  csmodal.style.display = "none";
}

// CS50WEB MODAL
const cswmodal = document.getElementById("cswModal");
  
// Get the image and insert it inside the modal - use its "alt" text as a caption
const cswimg = document.getElementById("cs50w");
const modalcswImg = document.getElementById("img02");
const cswcaptionText = cswmodal.querySelector(".caption");
cswimg.onclick = function(){
  cswmodal.style.display = "block";
  modalcswImg.src = this.src;
  cswcaptionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
const cswspan = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
cswspan.onclick = function() { 
  cswmodal.style.display = "none";
}

// JSMODAL
const jsmodal = document.getElementById("jsModal");
  
// Get the image and insert it inside the modal - use its "alt" text as a caption
const jsimg = document.getElementById("advancedjs");
const modaljsImg = document.getElementById("img03");
const jscaptionText = jsmodal.querySelector(".caption");
jsimg.onclick = function(){
  jsmodal.style.display = "block";
  modaljsImg.src = this.src;
  jscaptionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
const jsspan = document.getElementsByClassName("close")[2];

// When the user clicks on <span> (x), close the modal
jsspan.onclick = function() { 
  jsmodal.style.display = "none";
}

// REDUX MODAL
const reduxModal = document.getElementById("reduxModal");
  
// Get the image and insert it inside the modal - use its "alt" text as a caption
const reduxImg = document.getElementById("redux");
const modalreduxImg = document.getElementById("img04");
reduxImg.onclick = function(){
  reduxModal.style.display = "block";
  modalreduxImg.src = this.src;
}

// Get the <span> element that closes the modal
const reduxspan = document.getElementsByClassName("close")[3];

// When the user clicks on <span> (x), close the modal
reduxspan.onclick = function() { 
  reduxModal.style.display = "none";
}

// PORTFOLIO

const isotopeContainer = document.querySelector('.isotope');
const filterItems = document.querySelectorAll('#filters .type');

imagesLoaded(isotopeContainer, function () {
	
	var iso = new Isotope( isotopeContainer, {
	  // options
	  itemSelector: '.item',
	  layoutMode: 'fitRows'
	  
	});
	
	// filter items on click
	filterItems.forEach((filterItem) => {
	
		filterItem.addEventListener('click', (e) => {
			
			console.log('clicked');
			
			let filterValue = filterItem.getAttribute('data-filter');
			
			// arrange - https://isotope.metafizzy.co/methods.html
			iso.arrange({ filter: filterValue });
			
			
			//toggle active class
			for (let siblingFilterItem of filterItem.parentNode.children) {
		        siblingFilterItem.classList.remove('active');
		    }
			filterItem.classList.add('active');

		});

	});
});

