document.getElementById('userForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();

  const response = await fetch('/submit', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ name, email })
  });

  const result = await response.json();
  document.getElementById('responseMsg').textContent = result.status === 'success'
    ? 'Data submitted successfully!'
    : 'Failed to submit data.';
});
