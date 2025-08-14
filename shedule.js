const buttons = document.querySelectorAll('.tab-button');
const contents = document.querySelectorAll('.schedule-content');

function showDay(dayId) {
    contents.forEach(content => {
    content.classList.toggle('active', content.id === dayId);
});
buttons.forEach(button => {
    button.classList.toggle('active', button.dataset.day === dayId);
});
}

// Initialize: show first day
showDay('day1');

// Set up click handler
buttons.forEach(button => {
  button.addEventListener('click', () => {
    showDay(button.dataset.day);
  });
});
