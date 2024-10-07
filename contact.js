const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_eh4g5ji';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Sent! ,thankyou for you feeback');
      document.getElementById('contactForm').reset();
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});