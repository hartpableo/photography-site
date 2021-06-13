// welcome-cta 
const welcomeCta = document.querySelector('.welcome-cta');
const welcomeSection = document.querySelector('.welcome-section');
const pageContent = document.querySelector('.page-content');

welcomeCta.addEventListener('click',function() {
    welcomeSection.style.animation = `move-up 1300ms ease-in-out forwards`;
    document.querySelector('body').classList.add('opened');
    pageContent.style.opacity = 1;
});

window.addEventListener('scroll',function() {
    const scrollHeight = window.pageYOffset;

    if (scrollHeight > 0) {
        welcomeSection.style.animation = `move-up 1300ms ease-in-out forwards`;
        document.querySelector('body').classList.add('opened');
        pageContent.style.opacity = 1;
    };
});

// auto fix navbar when scrolling down
const header = document.querySelector('.main-header');
const headerHeight = header.getBoundingClientRect().bottom + 200;

window.addEventListener('scroll',function() {
    const scrollHeight = window.pageYOffset;

    if (scrollHeight > headerHeight) {
        header.style.animation = `fix-nav 750ms ease-in-out forwards`;
    } else if (scrollHeight <= headerHeight) {
        header.style.animation = `none`;
    };
});

// navbar toggle button
const toggleBtn = document.querySelector('.fa-bars');
const navbar = document.querySelector('.navbar ul');

toggleBtn.addEventListener('click',function() {
    navbar.classList.toggle('clicked');
});

// close navlinks after clicking a link
const navlinks = document.querySelectorAll('.navbar ul li a');

navlinks.forEach(function(link) {
    link.addEventListener('click',function() {
        navbar.classList.toggle('clicked');
    });
});

// category name appear on hover
const categoryItem = document.querySelectorAll('.category-item');
const categoryName = document.querySelectorAll('.category-name');

categoryItem.forEach(function(item) {
    item.addEventListener("mouseover",function(event) {
        const itemImg = event.currentTarget.children[0];
        const itemName = event.currentTarget.children[1];

        itemImg.style.filter = `brightness(50%)`;
        itemName.style.transform = `translateX(0)`;
    });

    item.addEventListener("mouseleave",function(event) {
        const itemImg = event.currentTarget.children[0];
        const itemName = event.currentTarget.children[1];

        itemImg.style.filter = `brightness(100%)`;
        itemName.style.transform = `translateX(-200%)`;
    });
});

// auto-update year
const year = document.querySelector('.year');
year.innerHTML = new Date().getFullYear();