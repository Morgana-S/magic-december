let isMuted = false;

// Get the current day
function getCurrentDay() {
  const today = new Date();
  return today.getDate();
}

// Enable the days up to and including the current day
function enableCurrentDays() {
  const currentDay = getCurrentDay();
  for (let i = 1; i <= currentDay; i++) {
    const dayElement = document.querySelector(`[data-bs-target="#day${i}"]`);
    if (dayElement) {
      dayElement.classList.remove('disabled');
      dayElement.style.cursor = 'pointer'; // Reset cursor to pointer
      if (i === currentDay) {
        dayElement.classList.add('highlight-current-day'); // Add class for animation
      }
    }
  }
}

// Manage tooltips based on screen size
function manageTooltipsOnResize() {
  const isSmallScreen = window.matchMedia('(max-width: 768px)').matches;
  const tooltips = document.querySelectorAll('[data-bs-toggle="tooltip"]');

  tooltips.forEach((tooltipEl) => {
    const tooltipInstance = bootstrap.Tooltip.getInstance(tooltipEl);

    if (isSmallScreen) {
      // Destroy tooltips on small screens
      if (tooltipInstance) {
        tooltipInstance.dispose();
      }
    } else {
      // Re-enable tooltips on larger screens if not present
      if (!tooltipInstance) {
        new bootstrap.Tooltip(tooltipEl);
      }
    }
  });
}

// Toggle mute state
function toggleMute() {
  isMuted = !isMuted;
  const muteButton = document.getElementById('mute-button');
  if (muteButton) {
    muteButton.innerHTML = isMuted
      ? '<i class="fa-solid fa-volume-xmark fa-lg"></i>'
      : '<i class="fa-solid fa-volume-high fa-lg"></i>';
  }
}

// Toggle dark mode
function toggleDarkMode() {
  const modalBodies = document.querySelectorAll('.modal-body');
  modalBodies.forEach((modalBody) => {
    modalBody.classList.toggle('bg-dark');
    modalBody.classList.toggle('text-white');
  });

  const darkModeToggle = document.getElementById('dark-mode-toggle');
  if (darkModeToggle) {
    darkModeToggle.innerHTML = modalBodies[0].classList.contains('bg-dark')
      ? '<i class="fa-solid fa-sun fa-lg"></i>'
      : '<i class="fa-solid fa-moon fa-lg"></i>';
  }
}

// Set up "Read More" buttons
function setupReadMoreButtons() {
  const readMoreButtons = document.querySelectorAll('.read_more');

  readMoreButtons.forEach((button) => {
    button.addEventListener('click', function () {
      const collapseTarget = this.getAttribute('data-bs-target');
      const collapseElement = document.querySelector(collapseTarget);

      if (collapseElement) {
        collapseElement.addEventListener('shown.bs.collapse', () => {
          this.textContent = 'Read less';
        });

        collapseElement.addEventListener('hidden.bs.collapse', () => {
          this.textContent = 'Read more';
        });
      }

      // Toggle button text immediately on click
      this.textContent =
        this.textContent === 'Read more' ? 'Read less' : 'Read more';
    });
  });
}

// Load the instructions modal content
async function loadInstructionsModal() {
  const response = await fetch('partials/instructions.html');
  const data = await response.text();
  const instructionsModalContainer = document.getElementById(
    'instructions-modal-container',
  );
  if (instructionsModalContainer) {
    instructionsModalContainer.innerHTML = data;
  }
}

// Load the days content into the calendar
async function loadDays() {
  const response = await fetch('partials/days.html');
  const data = await response.text();
  const calendarDaysElement = document.getElementById('calendar-days');
  if (calendarDaysElement) {
    calendarDaysElement.innerHTML = data;

    // Load the bell sound
    const bellSound = new Audio('assets/sound/bell.mp3');

    // Select all day elements
    const dayElements = document.querySelectorAll('.calendar-day');

    dayElements.forEach((dayElement, index) => {
      const dayNumber = index + 1; // Adjust index to start from 1

      if (!dayNumber) {
        // Make days 19 to 23 unclickable
        dayElement.removeAttribute('data-bs-toggle');
        dayElement.removeAttribute('data-bs-target');
        dayElement.style.cursor = 'not-allowed';
        dayElement.classList.add('disabled');
      } else {
        // Ensure other days are clickable
        dayElement.setAttribute('data-bs-toggle', 'modal');
        dayElement.setAttribute('data-bs-target', `#day${dayNumber}`);
        dayElement.style.cursor = 'pointer';
        dayElement.classList.remove('disabled');

        // Add click event to play the bell sound
        dayElement.addEventListener('click', () => {
          if (!isMuted) {
            bellSound.currentTime = 0;
            bellSound.play();
          }
        });
      }

      // Tooltip logic
      const tooltipWrapper = dayElement.querySelector('.tooltip-wrapper');
      if (tooltipWrapper) {
        tooltipWrapper.setAttribute('data-bs-toggle', 'tooltip');
        tooltipWrapper.setAttribute('data-bs-placement', 'top');
        tooltipWrapper.setAttribute('title', `Day ${dayNumber}`);
      }
    });

    // Enable Bootstrap tooltips
    const tooltipTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]'),
    );
    tooltipTriggerList.forEach(function (tooltipTriggerEl) {
      new bootstrap.Tooltip(tooltipTriggerEl);
    });
  }
}

// Load the modals content
async function loadModals() {
  const response = await fetch('partials/modals.html');
  const data = await response.text();
  const modalsContainerElement = document.getElementById('modals-container');
  if (modalsContainerElement) {
    modalsContainerElement.innerHTML = data;
  }

  // Load modal contents for each day
  for (let i = 1; i <= 31; i++) {
    const dayResponse = await fetch(`partials/day-content/day${i}.html`);
    const content = await dayResponse.text();
    const dayContentElement = document.getElementById(`day${i}Content`);
    if (dayContentElement) {
      dayContentElement.innerHTML = content;
    }
  }
}

async function initialize() {
  await loadDays();
  enableCurrentDays();
  await loadModals();
  setupReadMoreButtons();
}

document.addEventListener('DOMContentLoaded', async () => {
  // Attach toggleMute to the mute button
  const muteButton = document.getElementById('mute-button');
  if (muteButton) {
    muteButton.addEventListener('click', toggleMute);
  }

  // Attach toggleDarkMode to the dark mode button
  const darkModeToggle = document.getElementById('dark-mode-toggle');
  if (darkModeToggle) {
    darkModeToggle.addEventListener('click', toggleDarkMode);
  }

  // Initialize the calendar and related content
  await initialize();

  // Load instructions modal
  await loadInstructionsModal();

  // Initialize tooltips for larger screens by default
  if (!window.matchMedia('(max-width: 768px)').matches) {
    document
      .querySelectorAll('[data-bs-toggle="tooltip"]')
      .forEach((tooltipEl) => {
        new bootstrap.Tooltip(tooltipEl);
      });
  }

  // Manage tooltips based on screen size
  manageTooltipsOnResize();
});

// Handle window resize for tooltips
window.addEventListener('resize', manageTooltipsOnResize);
