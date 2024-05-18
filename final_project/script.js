document.addEventListener('DOMContentLoaded', function() {

    function handleImageClick(event) {
        const clickedImage = event.target;
        
       
        if (!clickedImage.clicked) {
            clickedImage.style.border = '5px solid red';
            
          
            const caption = document.createElement('p');
            caption.textContent = 'The World of Horror Film!';
            caption.style.textAlign = 'center'; 
            clickedImage.parentNode.appendChild(caption);
          
            clickedImage.clicked = true;
        }
    }

    const horrorImage = document.querySelector('#horror img');

    horrorImage.addEventListener('click', handleImageClick);
});
document.addEventListener('DOMContentLoaded', function() {
  
    const signUpBtn = document.getElementById('signup-btn');

    
    signUpBtn.addEventListener('click', function(event) {
        
        event.preventDefault();

        
        alert('Thank you for signing up for The Horror Buffet!');
    });
     signUpBtn.style.backgroundColor = 'red';
});

 function toggleMode() {
           
            document.body.classList.toggle('night-mode');
        }
        // Get references to the buttons
const nightModeBtn = document.getElementById('nightModeBtn');
const darkModeBtn = document.getElementById('lightModeBtn');


nightModeBtn.addEventListener('click', () => {
   
    document.body.style.backgroundColor = '#000';
    document.body.style.color = '#fff';
});

lightModeBtn.addEventListener('click', () => {
   
    document.body.style.backgroundColor = 'indigo';
    document.body.style.color = '#ccc';
});


