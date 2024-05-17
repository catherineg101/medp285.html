document.addEventListener("DOMContentLoaded", function () {
    let date = new Date().getDay();
    let hour = new Date().getHours();

    function setDayColor(day) {
    switch(day) {
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

    const pics = [
        "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2b48a50e-b769-46e8-bdc1-a599d4a607f9/d4ljdlu-157185f9-430c-4dc4-953c-2e60aa4928e7.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzJiNDhhNTBlLWI3NjktNDZlOC1iZGMxLWE1OTlkNGE2MDdmOVwvZDRsamRsdS0xNTcxODVmOS00MzBjLTRkYzQtOTUzYy0yZTYwYWE0OTI4ZTcucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.42GfC6pFjBsBtj_qOFBi40-Em63a-xtNPwmzV2e2yr8",
        "https://www.pngall.com/wp-content/uploads/2016/04/Amy-Winehouse-Free-Download-PNG.png",
        "https://i.pinimg.com/originals/3f/ad/96/3fad96679cc636dc6cb1a8334d637c04.png",
        "https://www.pngall.com/wp-content/uploads/2016/04/Amy-Winehouse.png",
        "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/ab8e8b57504521.5a2ec88f4379b.png",
        "https://www.pngall.com/wp-content/uploads/2016/04/Amy-Winehouse-PNG-Picture.png"
    ];

    function updateImage() {
        document.getElementById("amy_image").innerHTML = '<img src="' + pics[date] + '">';
    }

    updateImage(); 
});



