document.getElementById('accountForm').addEventListener('submit', function(e) {
  e.preventDefault(); // prevent form from submitting the traditional way

  // Grab form values
  const userData = {
    userId: document.getElementById('userid').value,
    name: document.getElementById('name').value,
    gmail: document.getElementById('gmail').value,
    mobile: document.getElementById('mobile').value,
    income: document.getElementById('income').value,
    license: document.getElementById('license').value,
  };

  // Simple log to show success (you can replace this with backend integration)
  console.log("Account Created:", userData);
  alert("Account Created Successfully! Check console for data.");

  // Optional: clear form
  this.reset();
});
