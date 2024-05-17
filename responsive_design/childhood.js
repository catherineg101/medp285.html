document.addEventListener("DOMContentLoaded", function () {
    const amyImage = document.getElementById("amyImage");
    const header = document.querySelector("h1.header");

    amyImage.addEventListener('click', function () {
        const date = new Date().getDay();

        // Define colors for each day of the week
        const colors = [
            'lightcoral',   // Sunday
            '#FADA5B',      // Monday
            '#FA5B5B',      // Tuesday
            'yellow',       // Wednesday
            'plum',    // Thursday
            'brown',   // Friday
            'blueviolet'          // Saturday
        ];

        // Change header and background color based on the day of the week
        header.textContent = "Life is short. Anything could happen and it usually does, so there is no point in sitting around thinking about all the ifs, ands and buts. - Amy Winehouse" ; // Change header text (optional)
        header.style.color = "";           // Change header color (optional)
        document.body.style.backgroundColor = colors[date]; // Change background color
        console.log('clicked');
    });
});
