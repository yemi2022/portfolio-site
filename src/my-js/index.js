//sscroll conditions for sticky navbar, mobile portrait, landscape and large screen
window.onscroll = () => {
    const home = document.getElementById('home-nav');
    const project = document.getElementById('project-nav');
    const about = document.getElementById('about-nav');
    const contact = document.getElementById('contact-nav');
    const home_mobile = document.getElementById('home-mobile');
    const project_mobile = document.getElementById('project-mobile');
    const about_mobile = document.getElementById('about-mobile');
    const contact_mobile = document.getElementById('contact-mobile');
    const navBar = document.getElementById('top');
    const back_to_top = document.getElementById('back-to-top');


    //sticky navbar condition
    if  (window.scrollY > 50) {
        navBar.classList.add("sticky");
        back_to_top.classList.remove("invisible");
        back_to_top.style.opacity = "1";
    }   else{
        navBar.classList.remove("sticky");
        back_to_top.classList.add("invisible");        
        back_to_top.style.opacity = "0";
    } 

    //mobile portrait
    if  (window.innerWidth < 600) {
        window.addEventListener("scroll", () => {
            if  (window.scrollY < 400) {
                home_mobile.classList.add("showing");
                about_mobile.classList.remove("showing");
                project_mobile.classList.remove("showing");
                contact_mobile.classList.remove("showing");
            }   else if(window.scrollY > 399 && window.scrollY < 2100) { 
                home_mobile.classList.remove("showing");
                about_mobile.classList.add("showing");
                project_mobile.classList.remove("showing");
                contact_mobile.classList.remove("showing");     
            }   else if (window.scrollY > 2099 && window.scrollY < 4600) {
                home_mobile.classList.remove("showing");
                about_mobile.classList.remove("showing");
                project_mobile.classList.add("showing");
                contact_mobile.classList.remove("showing");       
            }   else if (window.scrollY > 4599) { 
                home_mobile.classList.remove("showing");
                about_mobile.classList.remove("showing");
                project_mobile.classList.remove("showing");
                contact_mobile.classList.add("showing");    
            }   
             else{
                home_mobile.classList.remove("showing");
                about_mobile.classList.remove("showing");
                project_mobile.classList.remove("showing");
                contact_mobile.classList.remove("showing");
            };
        });

        //mobile landscape
    }   else if (window.innerWidth > 600 && window.innerWidth < 900) {
        window.addEventListener("scroll", () => {
            if  (window.scrollY < 200) {
                home_mobile.classList.add("showing");
                about_mobile.classList.remove("showing");
                project_mobile.classList.remove("showing");
                contact_mobile.classList.remove("showing");
            }   else if(window.scrollY > 199 && window.scrollY < 1050) {   
                home_mobile.classList.remove("showing");
                about_mobile.classList.add("showing");
                project_mobile.classList.remove("showing");
                contact_mobile.classList.remove("showing");     
            }   else if (window.scrollY >1049 && window.scrollY < 2700) {
                home_mobile.classList.remove("showing");
                about_mobile.classList.remove("showing");
                project_mobile.classList.add("showing");
                contact_mobile.classList.remove("showing");       
            }   else if (window.scrollY > 2699) {
                home_mobile.classList.remove("showing");
                about_mobile.classList.remove("showing");
                project_mobile.classList.remove("showing");
                contact_mobile.classList.add("showing");    
            }   
             else{
                home_mobile.classList.remove("showing");
                about_mobile.classList.remove("showing");
                project_mobile.classList.remove("showing");
                contact_mobile.classList.remove("showing");
            };
        });

        //non-mobile screens
    }   else{
        window.addEventListener("scroll", () => {
            if  (window.scrollY < 400) {
                home.classList.add("active");
                about.classList.remove("active");
                project.classList.remove("active");
                contact.classList.remove("active");
            }   else if(window.scrollY > 400 && window.scrollY < 1150) {
                home.classList.remove("active");
                about.classList.add("active");
                project.classList.remove("active");
                contact.classList.remove("active");    
            }   else if (window.scrollY > 1150 && window.scrollY < 2400) {
                home.classList.remove("active");
                about.classList.remove("active");
                project.classList.add("active");
                contact.classList.remove("active");   
            }   else if (window.scrollY > 2400) {
                home.classList.remove("active");
                about.classList.remove("active");
                project.classList.remove("active");
                contact.classList.add("active");   
            }   
             else{
                home.classList.remove("active");
                about.classList.remove("active");
                project.classList.remove("active");
                contact.classList.remove("active");
            };
        });
    }
}
