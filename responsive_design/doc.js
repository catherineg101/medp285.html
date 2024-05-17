let image = document.querySelector('img');

if (image) {
    image.addEventListener('click', function() {
        console.log('image clicked!');
        
        alert('This is an Amy Winehouse Documentary!');
        
        document.body.style.backgroundColor = 'indigo';
        
        let header = document.querySelector('h1');
        
        
        if (header) {
            
            header.style.color = 'coral';
        } 
    }); 
}
