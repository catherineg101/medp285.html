document.addEventListener('DOMContentLoaded', function() {
    // DOM query
    const horrorImages = document.querySelectorAll('#horror img');

    // Function to handle image click event
    function handleImageClick(event) {
        const clickedImage = event.target;
        
        // Check if the image has already been clicked
        if (!clickedImage.clicked) {
            clickedImage.style.border = '5px solid red';
            
            // Update page content - Example: Add a caption below the image
            const caption = document.createElement('p');
            caption.textContent = 'The World of Horror Film!';
            caption.style.textAlign = 'center'; // Center the caption text
            clickedImage.parentNode.appendChild(caption);
            
            clickedImage.clicked = true;
        }
    }

    // Add click event listener to each horror image
    horrorImages.forEach(function(image) {
        image.addEventListener('click', handleImageClick);
    });

    