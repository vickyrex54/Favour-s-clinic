const buttons = document.querySelectorAll(".book-btn");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    let service = btn.dataset.service;

    let message = `Good day Doctor,\nI would like to book an appointment for: ${service}.\nPlease let me know the available dates and times.\nThank you!`;

    const whatsappURL = `https://api.whatsapp.com/send?phone=+2348149435269&text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappURL, "_blank");
  });
});
