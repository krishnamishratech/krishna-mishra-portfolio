/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*=============== MENU SHOW ===============*/
/* validate*/
if(navToggle){
    navToggle.addEventListener('click', () => {
         navMenu.classList.add('show-menu')
     })
}

/*===============  MENU HIDDEN ===============*/
/*valiadate*/
if(navClose){
     navClose.addEventListener('click', () => {
         navMenu.classList.remove('show-menu')
     })
}

/*=============== REMOVE MENU MOBILE ===============*/

const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    //when we click//
    navMenu.classList.remove("show-menu")
}
navLink.forEach(n => n.addEventListener('click', linkAction))



/*=============== ADD BLUR TO HEADER ===============*/
const blurHeader = () => {
    const header = document.getElementById('header')

    this.scrollY >= 50 ? header.classList.add('blur-header')
        : header.classList.remove('blur-header')

}
window.addEventListener('scroll',blurHeader)

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
      contactMessage =document.getElementById('contact-message')

const sendEmail = (e) =>{
    e.preventDefault()

    // serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_pcgdrt1','template_tslwzgn', '#contact-form', '8-Wd9v1ItNuoAd-9P')
        .then(() =>{
            //show message
            contactMessage.textcontent = 'Message sent successfully ✅ '

            // Remove message after five seconds
            setTimeout(() =>{
                contactMessage.textcontent = ''
            },5000)

            //clear input filed
            contactForm.reset()


        }, () =>{
            // Show error message
            contactMessage.textContent = 'Message not sent (service error) ❌'
        })
}

contactForm.addEventListener('submit',sendEmail)

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                   : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll',scrollUp)
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollY = window.pageYOffest

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
                   sectionTop = current.offsetTop -58,
                   sectionId =current.getAttribute('id'),
                   sectionClass = document.querySelector('nav__menu a[herf*=' + sectionId + ']')

         if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
                  sectionsClass.classList.add('active-link')
         }else{
                  sectionsClass.classList.remove('active-link')
         }          

    })
}

