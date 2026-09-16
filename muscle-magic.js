// Global array to store customer objects
const customers = [];

const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const ageInput = document.getElementById('age');
const heightInput = document.getElementById('height');
const weightInput = document.getElementById('weight');
const tableBody = document.getElementById('tableBody');

function renderTable() {
  tableBody.innerHTML = '';
  customers.forEach(customer => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td><strong>${customer.name}</strong></td>
      <td>${customer.email}</td>
      <td>${customer.age}</td>
      <td>${customer.height}</td>
      <td>${customer.weight}</td>
    `;
    tableBody.appendChild(row);
  });
}

function clearInputs() {
  nameInput.value = '';
  emailInput.value = '';
  ageInput.value = '';
  heightInput.value = '';
  weightInput.value = '';
}

document.getElementById('submitBtn').addEventListener('click', () => {
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const age = ageInput.value.trim();
  const height = heightInput.value.trim();
  const weight = weightInput.value.trim();

  if (!name || !email || !age || !height || !weight) {
    alert('Please fill in all fields.');
    return;
  }

  const customer = { name, email, age, height, weight };
  customers.push(customer);
  renderTable();
  clearInputs();
});

document.getElementById('clearBtn').addEventListener('click', clearInputs);
