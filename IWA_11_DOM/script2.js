const order1 = document.querySelector('[data-key="order1"]');
const biscuits1 = order1.getAttribute('data-biscuits');
const donuts1 = order1.getAttribute('data-donuts');
const pancakes1 = order1.getAttribute('data-pancakes');
const status1= order1.getAttribute('data-delivered');

const order2 = document.querySelector('[data-key="order2"]');
const biscuits2 = order2.getAttribute('data-biscuits');
const donuts2 = order2.getAttribute('data-donuts');
const pancakes2 = order2.getAttribute('data-pancakes');
const status2= order2.getAttribute('data-delivered');

const order3 = document.querySelector('[data-key="order3"]');
const biscuits3 = order3.getAttribute('data-biscuits');
const donuts3 = order3.getAttribute('data-donuts');
const pancakes3 = order3.getAttribute('data-pancakes');
const status3= order3.getAttribute('data-delivered');

order1.querySelector('.biscuits .count').textContent = biscuits1;
order1.querySelector('.donuts .count').textContent = donuts1;
order1.querySelector('.pancakes .count').textContent = pancakes1;
order1.querySelector('.status dd').textContent = status1 === 'true' ? 'Delivered' : 'Pending';

order2.querySelector('.biscuits .count').textContent = biscuits2;
order2.querySelector('.donuts .count').textContent = donuts2;
order2.querySelector('.pancakes .count').textContent = pancakes2;
order2.querySelector('.status dd').textContent = status2 === 'true' ? 'Delivered' : 'Pending';

order3.querySelector('.biscuits .count').textContent = biscuits3;
order3.querySelector('.donuts .count').textContent = donuts3;
order3.querySelector('.pancakes .count').textContent = pancakes3;
order3.querySelector('.status dd').textContent = status3 === 'true' ? 'Delivered' : 'Pending';