// Function to load the days content into the calendar
async function loadDays() {
  const response = await fetch('partials/days.html');
  const data = await response.text();
  const calendarDaysElement = document.getElementById('calendar-days');
  if (calendarDaysElement) {
    calendarDaysElement.innerHTML = data;

    // Make days 18 to 23 not clickable
    for (let i = 19; i <= 23; i++) {
      const dayElement = document.querySelector(`[data-bs-target="#day${i}"]`);
      if (dayElement) {
        dayElement.removeAttribute('data-bs-toggle'); // Remove modal toggle attribute
        dayElement.removeAttribute('data-bs-target'); // Remove modal target attribute
        dayElement.style.cursor = 'not-allowed'; // Change cursor to indicate it's not clickable
        dayElement.classList.add('disabled'); // Optionally add a class for further styling
      }
    }
  }
}

// Function to load the modals content
async function loadModals() {
  const response = await fetch('partials/modals.html');
  const data = await response.text();
  const modalsContainerElement = document.getElementById('modals-container');
  if (modalsContainerElement) {
    modalsContainerElement.innerHTML = data;

    // Load modal contents for each day
    for (let i = 1; i <= 25; i++) {
      const dayResponse = await fetch(`partials/day-content/day${i}.html`);
      const content = await dayResponse.text();
      const dayContentElement = document.getElementById(`day${i}Content`);
      if (dayContentElement) {
        dayContentElement.innerHTML = content;
      }
    }
  }
}

// Function to get the current day of the month
function getCurrentDay() {
  const today = new Date();
  return today.getDate();
}

// Function to enable the days up to the current day
function enableCurrentDays() {
  const currentDay = getCurrentDay();
  for (let i = 1; i <= currentDay; i++) {
    const dayElement = document.querySelector(`[data-bs-target="#day${i}"]`);
    if (dayElement) {
      dayElement.classList.remove('disabled');
    }
  }
}

// Function to initialize the calendar by loading days and modals
async function initialize() {
  await loadDays();
  enableCurrentDays();
  await loadModals();
}

initialize();

