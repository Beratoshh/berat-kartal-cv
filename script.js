// Contact form handling
document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('.contact-form');
  const submitBtn = document.querySelector('.submit-btn');
  const originalBtnText = submitBtn.innerHTML;

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Change button state
    submitBtn.innerHTML = '<span>Sending...</span><span class="btn-icon">⏳</span>';
    submitBtn.disabled = true;

    // Get form data
    const formData = new FormData(form);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');

    // Create mailto link (fallback method)
    const mailtoLink = `mailto:Berat_kartal05@hotmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`From: ${name} (${email})\n\nMessage:\n${message}`)}`;
    
    // Simulate sending delay
    setTimeout(() => {
      // Open email client
      window.location.href = mailtoLink;
      
      // Reset button
      submitBtn.innerHTML = '<span>Message Sent!</span><span class="btn-icon">✅</span>';
      submitBtn.style.background = 'linear-gradient(135deg, #48bb78 0%, #38a169 100%)';
      
      // Reset form
      form.reset();
      
      // Reset button after 3 seconds
      setTimeout(() => {
        submitBtn.innerHTML = originalBtnText;
        submitBtn.disabled = false;
        submitBtn.style.background = 'linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%)';
      }, 3000);
    }, 1000);
  });

  // Add input validation feedback
  const inputs = form.querySelectorAll('input, textarea');
  inputs.forEach(input => {
    input.addEventListener('blur', function() {
      if (this.validity.valid) {
        this.style.borderColor = '#48bb78';
      } else if (this.value) {
        this.style.borderColor = '#f56565';
      }
    });

    input.addEventListener('focus', function() {
      this.style.borderColor = 'var(--primary)';
    });
  });
});
