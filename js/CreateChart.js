import json from '../data.json' assert {type: 'json'};
const date = new Date(); 
const day = date.getDay();

const week = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

const amount = json.map((item) => item.amount);


const maxAmount = Math.max(...amount)
const maxHeight = 120;

json.forEach((item) => {
  const bar = document.querySelector(`#${item.day}-bar`);
  const height = (item.amount / maxAmount) * maxHeight;
  const am = document.querySelector(`#${item.day}-amount`);
  am.textContent = `$${item.amount}`;
  bar.style.height = `${height}px`;
  bar.style.backgroundColor = item.day === week[day] ? 'hsl(186, 34%, 60%)' : 'hsl(10, 79%, 65%)';
  bar.addEventListener('mouseover', () => {
    am.classList.remove('invisible');
  })
  bar.addEventListener('mouseout', () => {
    am.classList.add('invisible');
  })
});


