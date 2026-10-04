const form = document.querySelector(".project-form");
const submitButton = document.querySelector(".submit-button");

form.addEventListener("submit", async function (event) {
  event.preventDefault();

  const originalText = submitButton.textContent;

  submitButton.textContent = "Sending...";
  submitButton.disabled = true;

  const formData = new FormData(form);

  try {

    const response = await fetch("https://formspree.io/f/mrpbvqoe", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json"
      }
    });

    if (response.ok) {

      submitButton.textContent = "Request received ✓";
      submitButton.classList.add("success");

      form.reset();

    } else {

      submitButton.textContent = "Something went wrong — try again";
      submitButton.disabled = false;

    }

  } catch (error) {

    submitButton.textContent = "Connection error — try again";
    submitButton.disabled = false;

  }

});


// Scroll reveal animations

const revealElements = document.querySelectorAll(
  ".section-heading, .step-card, .use-card, .industry-item, .dashboard, .cta-content"
);

revealElements.forEach((element) => {
  element.classList.add("reveal");
});

const revealObserver = new IntersectionObserver(
  (entries) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        revealObserver.unobserve(entry.target);
      }

    });

  },
  {
    threshold: 0.12
  }
);

revealElements.forEach((element) => {
  revealObserver.observe(element);
});