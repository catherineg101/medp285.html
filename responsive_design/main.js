document.addEventListener("DOMContentLoaded", function () {
    let date = new Date().getDay();
    let hour = new Date().getHours();

    function setDayColor(dayOfWeek) {
        switch(dayOfWeek) {
            case 0: 
                return 'lightcoral';
            case 1: 
                return '#FADA5B'; 
            case 2: 
                return '#FA5B5B'; 
            case 3: 
                return 'royalblue'; 
            case 4: 
                return 'green'; 
            case 5: 
                return 'orange'; 
            case 6: 
                return 'purple'; 
            default: 
                return 'white'; 
        }
    }

    document.body.style.background = setDayColor(date);

    if (hour >= 18 || hour < 6) {
        document.body.style.backgroundColor = 'brown';
        document.body.style.color = 'white';
        document.querySelectorAll('nav a').forEach(link => link.classList.add('light'));
    }

    let fonts = [
        "'Comic Sans MS', cursive", 
        "Arial, sans-serif",
        "'Helvetica', sans-serif",
        "'Palatino', serif", 
        "'Courier New', monospace", 
        "'Impact', sans-serif", 
        "'Trebuchet MS', sans-serif" 
    ];
    document.body.style.fontFamily = fonts[date];

    let images = document.querySelectorAll('main > a > img');
    images.forEach(image => {
        image.addEventListener('mouseover', function () {
            images.forEach(img => img.style.opacity = '0.5');
            this.style.opacity = '1';
        });

        image.addEventListener('mouseout', function () {
            images.forEach(img => img.style.opacity = '1');
        });
    });

    



