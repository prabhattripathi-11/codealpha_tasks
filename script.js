// script.js
document.getElementById("ageForm").addEventListener("submit", function(e) {
  e.preventDefault();
  
  const dobInput = document.getElementById("dob").value;
  const resultDiv = document.getElementById("result");

  if (!dobInput) {
    resultDiv.textContent = "Please select a valid date.";
    return;
  }

  const dob = new Date(dobInput);
  const today = new Date();

  if (dob > today) {
    resultDiv.textContent = "Date of Birth can't be in the future.";
    return;
  }

  let years = today.getFullYear() - dob.getFullYear();
  let months = today.getMonth() - dob.getMonth();
  let days = today.getDate() - dob.getDate();

  if (days < 0) {
    months -= 1;
    days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  }

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  resultDiv.innerHTML = `You are <strong>${years}</strong> years, <strong>${months}</strong> months, and <strong>${days}</strong> days old.`;
});
