// Function to load the days content into the calendar
async function loadDays() {
  const response = await fetch('partials/days.html');
  const data = await response.text();
  document.getElementById('calendar-days').innerHTML = data;
}

// Function to load the modals content
async function loadModals() {
  const response = await fetch('partials/modals.html');
  const data = await response.text();
  document.getElementById('modals-container').innerHTML = data;

  // Load modal contents for each day
  for (let i = 1; i <= 25; i++) {
    const dayResponse = await fetch(`partials/day-content/day${i}.html`);
    const content = await dayResponse.text();
    document.getElementById(`day${i}Content`).innerHTML = content;
  }
}

// Function to initialize the calendar by loading days and modals
async function initialize() {
  await loadDays();
  await loadModals();
}

initialize();
