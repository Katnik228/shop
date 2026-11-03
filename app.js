const products = [
  { id: 1, title: 'Ноутбук 15"',       category: 'Компьютеры', price: 85000 },
  { id: 2, title: 'Монитор 27"',       category: 'Компьютеры', price: 28000 },
  { id: 3, title: 'Клавиатура',        category: 'Аксессуары', price: 6500 },
  { id: 4, title: 'Мышь беспроводная', category: 'Аксессуары', price: 2500 },
  { id: 5, title: 'Монитор 27"',       category: 'Компьютеры', price: 28000 },
  { id: 6, title: 'Клавиатура',        category: 'Аксессуары', price: 6500 },
  { id: 7, title: 'Мышь беспроводная', category: 'Аксессуары', price: 2500 }
];

const catalog = document.getElementById('catalog');

/* подсказка */
/* const btn = document.getElementById('btn');

btn.addEventListener('click', ()=>{
    console.log('privet')
})
 */



/* ТЕСТ */
function renderProducts() {
  catalog.innerHTML = products.map(p => `
    <div class="card">
      <div class="category">${p.category}</div>
      <h3>${p.title}</h3>
      <div class="price">${p.price.toLocaleString('ru-RU')} ₽</div>
      <button data-id="${p.id}">В корзину</button>
    </div>
  `).join('');
}



renderProducts();