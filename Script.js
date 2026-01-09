const ctaBtn = document.getElementById("ctaBtn");
const contactSection = document.getElementById("contact");
const form = document.getElementById("contactForm");
const message = document.getElementById("message");

ctaBtn.addEventListener("click", () => {
    contactSection.scrollIntoView({ behavior: "smooth" });
});

form.addEventListener("submit", function(e) {
    e.preventDefault();
    message.textContent = "✅ So‘rovingiz yuborildi! Tez orada bog‘lanamiz.";
    message.style.color = "green";
    form.reset();
});
