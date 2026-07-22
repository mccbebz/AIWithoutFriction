const newsletterForm = document.getElementById('newsletterForm');
const newsletterMessage = document.getElementById('newsletterMessage');

newsletterForm?.addEventListener('submit', async function(event){
  event.preventDefault();

  const emailInput = newsletterForm.querySelector('input[name="email"]');
  const submitButton = newsletterForm.querySelector('button[type="submit"]');
  const email = emailInput?.value.trim();

  if (!email) return;

  const originalButtonText = submitButton.textContent;
  submitButton.disabled = true;
  submitButton.textContent = 'Submitting...';
  newsletterMessage.textContent = '';

  try {
    const response = await fetch('https://api.hsforms.com/submissions/v3/integration/submit/246778021/b4c80249-4eb6-443d-b21b-31841299dc9f', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        fields: [{ name: 'email', value: email }],
        context: {
          pageUri: window.location.href,
          pageName: document.title
        }
      })
    });

    if (!response.ok) throw new Error('Newsletter signup failed');

    newsletterForm.reset();
    newsletterMessage.textContent = 'Thanks for subscribing!';
  } catch (error) {
    newsletterMessage.textContent = 'Sorry, something went wrong. Please try again.';
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = originalButtonText;
  }
});
