const whyInput = document.getElementById('why');
const whatInput = document.getElementById('what');
const howInput = document.getElementById('how');
const button = document.getElementById('genereer');
const resultaat = document.getElementById('resultaat');

function genereerVisie() {
  const why = whyInput.value || '...';
  const what = whatInput.value || '...';
  const how = howInput.value || '...';

  const tekst = `Onze organisatie bestaat omdat ${why}. 
We bieden ${what}, waarbij wij ons onderscheiden door ${how}.`;

  resultaat.textContent = tekst;
}

button.addEventListener('click', genereerVisie);
