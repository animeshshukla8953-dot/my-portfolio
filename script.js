// Contact form - sends message using EmailJS
var form = document.getElementById("contactForm");
var status = document.getElementById("formStatus");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  status.textContent = "Sending...";

  emailjs.send("service_i8dlg5d", "template_qjqxvog", {
    title: "Portfolio Contact",
    name: document.getElementById("nameInput").value,
    email: document.getElementById("emailInput").value,
    message: document.getElementById("messageInput").value
  }).then(function () {
    status.textContent = "Message sent successfully!";
    form.reset();
  }).catch(function (error) {
    status.textContent = "Failed to send message.";
    console.log(error);
  });
});

// Show current year in footer
document.getElementById("year").textContent = new Date().getFullYear();
