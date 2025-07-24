// Data storage
let people = [];

// Add person from inputs to the list
function addPerson() {
  const name = document.querySelector('#name').value.trim();
  const age = document.querySelector('#age').value.trim();
  const program = document.querySelector('#program').value;

  if (!name || !age || !program) {
    alert('Please fill all fields.');
    return;
  }

  people.push({ name, age, program });
  renderPeople();
  clearInputs();
}

// Render people list under the form
function renderPeople() {
  const list = document.querySelector('#person-list');
  list.innerHTML = '';
  people.forEach((p, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <span><strong>${p.name}</strong> (Age: ${p.age}) - ${p.program}</span>
      <button onclick="removePerson(${index})">Remove</button>
    `;
    list.appendChild(li);
  });
}

// Remove person at index
function removePerson(index) {
  people.splice(index, 1);
  renderPeople();
}

// Clear form inputs after adding person
function clearInputs() {
  document.querySelector('#name').value = '';
  document.querySelector('#age').value = '';
  document.querySelector('#program').value = '';
  document.querySelector('#name').focus();
}

// Submit form handler
document.querySelector('#signup-form').addEventListener('submit', e => {
  e.preventDefault();
  if (people.length === 0) {
    alert('Add at least one person before submitting.');
    return;
  }
  // Here you can send `people` array to backend or save in localStorage:
  localStorage.setItem('lincolnTaekwondoSignups', JSON.stringify(people));
  alert('Signup submitted! Thank you.');
  people = [];
  renderPeople();
  clearInputs();
});

// Toggle hamburger menu on mobile
function toggleMenu() {
  document.getElementById('menu').classList.toggle('show');
}

// Optional: Close menu when clicking nav links on mobile
document.querySelectorAll('.nav-link').forEach(link =>
  link.addEventListener('click', () => {
    document.getElementById('menu').classList.remove('show');
  })
);
