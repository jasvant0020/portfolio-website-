//--------------------Typing Animation --------------------------
// Check if the elements are present and log them
    const textElement = document.querySelector(".text");
    const text1Element = document.querySelector(".text1");
    const text2Element = document.querySelector(".text2");

    if (textElement) {
        console.log("Element .text found");
        var typed = new Typed(".text", {
            strings: ["Python Developer", "java Developer", "skilled in oops with java", "skilled in DSA with java","skilled in C++","Web developer"],
            typeSpeed: 40,
            backSpeed: 40,
            backDelay: 1000,
            loop: true,
        });
    } else {
        console.log("Element .text not found");
    }

    if (text1Element) {
        console.log("Element .text1 found");
        var typed1 = new Typed(".text1", {
            strings: ["Thank you for your interest in connecting with me on Facebook.<br> However, I currently do not have a Facebook account.<br> Please feel free to reach out to me through other available contact options on this website.<br> I look forward to connecting with you!"],
            typeSpeed: 10,
        });
    } else {
        console.log("Element .text1 not found");
    }


    if (text2Element) {
      console.log("Element .text2 found");
      var typed2 = new Typed(".text2", {
        strings: [
          "Thank you for your interest in connecting with me on Twitter.<br> However, I currently do not have a Twitter account.<br> Please feel free to reach out to me through other available contact options on this website.<br> I look forward to connecting with you!",
        ],
        typeSpeed: 10,
      });
    } else {
      console.log("Element .text1 not found");
    }



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
const scriptURL = 'https://script.google.com/macros/s/AKfycby19HoS_vjFuoOxKjplrdwSaU9Y9mDOLH4jWbFmj2bEsZ-L3eUTfNgQu_X0uEDLbSeq2A/exec'; 
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

    fetch(scriptURL, { method: 'POST', body: formData })
        .then(response => {
            msg.innerHTML = "Message sent successfully";
            setTimeout(function(){
                msg.innerHTML = ""; 
            },5000);
            form.reset();
        });


    //--------------Hide the message after 5 seconds----------------------
    setTimeout(function() {
      msg.innerHTML = "";
    }, 5000);
});

// Show button when scrolling down
window.addEventListener('scroll', function() {
  const scrollToTopBtn = document.getElementById('scrollToTopBtn');
  if (window.scrollY > 300) { // Adjust the value as needed
    scrollToTopBtn.style.display = 'block';
  } else {
    scrollToTopBtn.style.display = 'none';
  }
});

// Scroll to the top function
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Smooth scrolling
  });
}

