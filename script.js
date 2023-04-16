const humburger = document.getElementById('bar');
const navE1 = document.getElementById('navbar');
const cutE1 = document.getElementById('cut');
const featuredPdtSection = document.getElementById('featured-pdt');
const html = document.querySelector('html');
// console.log(html);
humburger.addEventListener('click', () => {
    navE1.classList.add('active');
    html.classList.add('show')

})
cutE1.addEventListener('click', () => {
    navE1.classList.remove('active')
    html.classList.remove('show');
})


const navLinks = document.querySelectorAll('#navbar a');

// Add an event listener to each <a> tag
navLinks.forEach(link => {
    link.addEventListener('click', function (event) {
        // Prevent the default behavior of the link
        event.preventDefault();

        // Remove the 'active' class from all <a> tags
        navLinks.forEach(link => {
            link.classList.remove('active');
        });

        // Remove the 'nav-line' class from all <span> tags
        const navSpans = document.querySelectorAll('#navbar span');
        navSpans.forEach(span => {
            span.classList.remove('nav-line');
        });

        let href = this.getAttribute('href');
        console.log(href);
        // Add the 'active' class to the clicked <a> tag
        this.classList.add('active');

        // Add the 'nav-line' class to the <span> tag inside the clicked <li> tag
        const parentLi = this.parentElement;
        const navSpan = parentLi.querySelector('span');
        navSpan.classList.add('nav-line');

        // Wait for a short delay before changing the page location
        window.location.href = href;
        
        setTimeout(() => {
            if (this.getAttribute('href') === window.location.href) {
                console.log("kaka")
                this.classList.add('active');
        
                // Add the 'nav-line' class to the <span> tag inside the corresponding <li> tag
                const parentLi = link.parentElement;
                const navSpan = parentLi.querySelector('span');
                navSpan.classList.add('nav-line');
            }
        }, 3000);
    });
});

// Check if the current page URL matches the href attribute value of each <a> tag
// navLinks.forEach(link => {
    
// });



// navLinks.forEach((ele) =>{
//     ele.addEventListener('click', (e) =>{
//        let href = e.target.getAttribute('href');
//        window.location.href = href;
//     })
// })
