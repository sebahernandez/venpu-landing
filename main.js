document.addEventListener('DOMContentLoaded', (event) => {
  document.getElementById('step1').style.display = 'block';
});

document.querySelector('.menu-toggle').addEventListener('click', function () {
  document.querySelector('ul.menu').classList.toggle('active');
});


function nextStep(stepNumber) {
  for (let i = 1; i <= 3; i++) {
    document.getElementById('step' + i).style.display = 'none';
  }
  document.getElementById('step' + stepNumber).style.display = 'block';
}

function previousStep(stepNumber) {
  for (let i = 1; i <= 3; i++) {
    document.getElementById('step' + i).style.display = 'none';
  }
  document.getElementById('step' + (stepNumber - 1)).style.display = 'block';
}

function finish() {
  alert('Has completado todos los pasos!');
}

window.nextStep = nextStep;
window.previousStep = previousStep;
window.finish = finish;

