// Get Slider Items | Array.form [ES6 Feature
var sliderImages = Array.from(document.querySelectorAll(".slider-container img"));
// Get Number Of Slides
var slidesCount = sliderImages.length;
// Set Current Slide
var currentSlide = 1;

// Slide Number Element
var slideNumberElement = document.getElementById('slide-number');

// Previous and Next Buttons
var nextButton = document.getElementById('next');
var prevButton = document.getElementById('prev');
// Handle Click on Previous and Next Buttons
nextButton.onclick = function nextSlide(){
    if(nextButton.classList.contains('disabled')){
        return false;
    }else{
        currentSlide++;
        theChecker();
    }
};
prevButton.onclick = function prevSlide(){
    if (prevButton.classList.contains('disabled')) {

        // Do Nothing
        return false;
    
      } else {
    
        currentSlide--;
    
        theChecker();
    
      }
}
;


// Create The Main UL Element
var paginationElement = document.createElement('ul');

// Set ID On Created Ul Element
paginationElement.setAttribute('id', 'pagination-ul');


// Create List Items Based On Slides Count
for(let i=1; i<= slidesCount; i++){
// Create il Element
var paginationItem = document.createElement('li');
paginationItem.setAttribute('data-index', i);
paginationItem.appendChild(document.createTextNode(i));
paginationElement.appendChild(paginationItem);


}
// Add The Created UL Element to The Page
document.getElementById('indicators').appendChild(paginationElement);
// Get The New Created UL
var paginationCreatedUl = document.getElementById('pagination-ul');
// Get Pagination Items | Array.form [ES6 Feature]
var paginationsBullets = Array.from(document.querySelectorAll('#pagination-ul li'));
console.log(paginationsBullets);

// Loop Through All Bullets Items
for (var i = 0; i < paginationsBullets.length; i++) {

  paginationsBullets[i].onclick = function () {

    currentSlide = parseInt(this.getAttribute('data-index'));

    theChecker();

  }

}
// Trigger The Checker Function
theChecker();
// Next Slide Function



// Previous Slide Function

// Create The Checker Function
function theChecker(){
slideNumberElement.textContent='slide# ' + (currentSlide) + ' of ' + (slidesCount);
//remove all active class
removeAllActive();

  // Set Active Class On Current Slide
  sliderImages[currentSlide - 1].classList.add('active');
  // Set Active Class on Current Pagination Item
  paginationCreatedUl.children[currentSlide - 1].classList.add('active');
//check if the current slide is 1
if(currentSlide == 1){
    prevButton.classList.add('disabled');
}else{
    prevButton.classList.remove('disabled');
}
// Check if Current Slide is The Last    
if(currentSlide == slidesCount){
    nextButton.classList.add('disabled');
}else{
    nextButton.classList.remove('disabled');
}


}

// function remove active classes
function removeAllActive(){
    sliderImages.forEach(function(img){
        img.classList.remove('active');
    })

    paginationsBullets.forEach(function(item){
        item.classList.remove('active');
    })

}