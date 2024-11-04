//--------------------Typing Animation --------------------------
var typed = new Typed(".text", {
  strings: ["Frontend Developer", "web Developer", "UI Designer", "Programmer"],
  typeSpeed: 40,
  backSpeed: 40,
  backDelay: 1000,
  loop: true,
});

//--------------------Tab functionality--------------------------
var tablinks = document.getElementsByClassName('tab-links');
var tabcontents = document.getElementsByClassName('tab-contents');

function opentab(tabname) {
    for (let tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (let tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

//---------------------Side menu functionality---------------------
var sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.style.right = "0";
}

function closemenu() {
    sidemenu.style.right = "-200px";
}

//--------------Google Sheets form submission functionality------------
const scriptURL = 'https://script.google.com/macros/s/AKfycbzwU_TnvK5ntVmstuKmqyiScJHCrwGlv62fOlM42A8NNUDUMTzoo4-UcJqisfD2WUbD/exec'; 
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
    e.preventDefault();

    //-----------Capture date, time, and day-------
    const now = new Date();
    const date = now.toISOString().split('T')[0];
    const time = now.toTimeString().split(' ')[0];
    const dayName = now.toLocaleDateString('en-US', { weekday: 'long' });

    //--------Prepare form data to send, adding date, time, and day-----------
    const formData = new FormData(form);
    formData.append('date', date);
    formData.append('time', time);
    formData.append('day', dayName);

    //------------Display the success message immediately---------------
    msg.innerHTML = "Message sent successfully";

    fetch(scriptURL, { method: 'POST', body: formData })
      .then(response => {
          form.reset(); // Clears the form
      })
      .catch(error => {
          console.error('Error!', error.message);
          msg.innerHTML = "There was an error sending your message.";
      });

    //--------------Hide the message after 5 seconds----------------------
    setTimeout(function() {
      msg.innerHTML = "";
    }, 5000);
});
