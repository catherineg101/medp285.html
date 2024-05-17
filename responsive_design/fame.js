document.addEventListener("DOMContentLoaded", function () {
    // Function to determine the current day of the week
    function getCurrentDayOfWeek() {
        return new Date().getDay(); 
    }

   
    function updateFontBasedOnDay() {
        const dayOfWeek = getCurrentDayOfWeek();
        let fontFamily = "";

        switch (dayOfWeek) {
            case 0:
                fontFamily = "'Comic Sans MS', cursive";
                break;
            case 1:
                fontFamily = "Arial, sans-serif";
                break;
            case 2:
                fontFamily = "monospace"; 
                break;
            case 3:
                fontFamily = "'Palatino', serif";
                break;
            case 4:
                fontFamily = "'Courier New', monospace";
                break;
            case 5:
                fontFamily = "'Impact', sans-serif";
                break;
            case 6:
                fontFamily = "'Trebuchet MS', sans-serif";
                break;
            default:
                fontFamily = "sans-serif";
                break;
        }

        document.querySelector('.header').style.fontFamily = fontFamily;
    }

   
    function setDayColor() {
        let date = new Date().getDay();
        let hour = new Date().getHours();
        let backgroundColor = "";

        switch(date) {
            case 0: 
                backgroundColor = 'powderblue';
                break;
            case 1: 
                backgroundColor = 'orchid'; 
                break;
            case 2: 
                backgroundColor = 'navajowhite'; 
                break;
            case 3: 
                backgroundColor = 'chocolate'; 
                break;
            case 4: 
                backgroundColor = 'papayawhip'; 
                break;
            case 5: 
                backgroundColor = 'orange'; 
                break;
            case 6: 
                backgroundColor = 'purple'; 
                break;
            default: 
                backgroundColor = 'rebeccapurple'; 
                break;
        }



        if (hour >= 18 || hour < 6) {
            backgroundColor = 'lightblue';
            document.body.style.color = 'black';
            document.querySelectorAll('nav a').forEach(link => link.classList.add('light'));
        }

        document.body.style.background = backgroundColor;
    }

    updateFontBasedOnDay();

   
    setDayColor();
});
