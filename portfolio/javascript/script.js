/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


document.addEventListener('DOMContentLoaded', function (event) {


    var logoLink = document.getElementById("logoLink");

    logoLink.addEventListener('click', function (event) {
        event.preventDefault();
        var href = "index.html";
        showTransitionBars(href);
    });



    window.goTo = function (event) {
        event.preventDefault(); // Prevent the default link behavior
        var href = event.target.getAttribute('href'); // Get the href attribute value

        // Hide the body content with an opacity transition
        document.getElementById("hero").style.transition = 'opacity 0.5s ease-in-out';
        document.getElementById("hero").style.opacity = 0;
        document.getElementById("transitionHolder").style.display = 'block';

        // Delay the navigation after the opacity transition completes
        setTimeout(function () {
            showTransitionBars(href); // Show the transition bars after opacity transition
        }, 500);
    };


    // Show the body content with an opacity transition when the page loads
    document.getElementById("hero").style.transition = 'opacity 0.5s ease-in-out';
    document.getElementById("hero").style.opacity = 1;


// Add click event listeners to all <a> elements
    var links = document.querySelectorAll('.nav-link');
    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener('click', function (event) {
            // Prevent the default link behavior and then trigger the transition bars animation
            event.preventDefault();
            window.goTo(event); // Call the goTo function
        });
    }

    function showTransitionBars(href) {
        const transitionBars = document.querySelectorAll('.transition-bars');

        // Loop through each transition bar and show them with a delay
        transitionBars.forEach((bar, index) => {
            setTimeout(() => {
                bar.style.display = 'block'; // Set display to 'block'
            }, index * 400); // Delay each bar by 800 milliseconds, default
        });

        // Calculate the total duration of all bars
        const totalDuration = transitionBars.length * 400;

        // Simulate a delay before navigating to the specified href
        setTimeout(() => {
            window.location.href = href;
        }, totalDuration);
    }


});

/*-------------*/
function filterSelection(c) {
    var items = document.getElementsByClassName("col-lg-4");

    for (var i = 0; i < items.length; i++) {
        var item = items[i];
        var categories = item.getAttribute("data-cate").split(" ");

        // Check if the item has the specified category
        if (categories.includes(c) || c === "all") {
            item.classList.add("show");
        } else {
            item.classList.remove("show");
        }
    }
}

/*-works if html has lesser classes example only col-md-6 design-*/
/*function filterSelection(c) { 
    console.log("Filtering by category:", c);
    var x, i;
    x = document.getElementsByClassName("col-md-6");
    if (c == "all") {
        c = "";
    }
    for (i = 0; i < x.length; i++) {
        removeClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1)
            addClass(x[i], "show");
    }
}

function addClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
        }
    }
}

function removeClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}*/



/*-----*/







