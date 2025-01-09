let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let section = document.querySelector('.section');
let navLinks = document.querySelector('#.header nav a');

window.onscroll =() =>{
    section.forEach(sec => {
        let top =window.scrollY;
        let offeset =sec.offesetTop - 150;
        let hieght =sec.offesetHieght;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + hieght){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a [href*=' + id + ']').classList.add('active')
            })
        }
    });
}




menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}