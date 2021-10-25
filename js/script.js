/**
 * ciclo da 1 a 100, colori diversi per:
 * multipli di 3
 * multipli di 5
 * entrambi
 */


const row = document.querySelector('.container .row');

for (let i=1; i<=100; i++) {
  const box = document.createElement('div');
  box.className = 'box';
  row.append(box);
  if (!(i%3) && !(i%5)) {
    box.innerHTML = 'fizzbuzz';
    box.classList.add('by3and5');
  } else if (!(i%3)) {
    box.innerHTML = 'fizz';
    box.classList.add('by3');
  } else if (!(i%5)) {
    box.innerHTML = 'buzz';
    box.classList.add('by5');
  } else {
    box.innerHTML = i;
  }
}