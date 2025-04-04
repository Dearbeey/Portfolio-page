function openmenu() {
    const sidemenu = document.getElementById("sidemenu");
    sidemenu.style.right = "0"; 
}
function closemenu() {
    const sidemenu = document.getElementById("sidemenu");
    sidemenu.style.right = "-250px"; 
}

//  tab switching
function opentab(tabname) {
    const tabContents = document.querySelectorAll('.tab_content');
    tabContents.forEach(tab => {
        tab.classList.remove('active-tab');
    });

    const tabLinks = document.querySelectorAll('.tab_links');
    tabLinks.forEach(link => {
        link.classList.remove('active-link');
    });
    
    const activeTab = document.getElementById(tabname);
    if (activeTab) {
        activeTab.classList.add('active-tab');
    }

    const activeLink = document.querySelector(`.tab_links[onclick="opentab('${tabname}')"]`);
    if (activeLink) {
        activeLink.classList.add('active-link');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    opentab('interests'); 
});

//  navigation links
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); 
        const targetId = this.getAttribute('href').substring(1); 
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            const sidemenu = document.getElementById("sidemenu");
            sidemenu.style.right = "-250px";
        }
    });
});

// scroll back to top
document.querySelector('footer a').addEventListener('click', (event) => {
    event.preventDefault(); 
    window.scrollTo({
        top: 0,
        behavior: 'smooth' 
    });
});

// Form submission to Google Sheets
const scriptURL = 'https://script.google.com/macros/s/AKfycbzhUuJMwy51Ywshj4QWKWi5WBEy-HZtxGVLr3f37K-P0iIdbAvtQf0vvZi8HayQjHDL/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Message Sent Successfully";
            setTimeout(() => {
                msg.innerHTML = "";
            }, 5000);
            form.reset();
        })
        .catch(error => console.error('Error!', error.message));
});


















