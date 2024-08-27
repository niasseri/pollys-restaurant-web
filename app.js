const menuItems = [
    { title: 'Pommes', image: 'images/pommes.webp', price: 3 },
    { title: 'Cola', image: 'images/cola.webp', price: 1 },
    { title: 'Gemüsesuppe', image: 'images/suppe.webp', price: 4 },
    { title: 'Toast', image: 'images/toast.webp', price: 2 },
    { title: 'Kuchen', image: 'images/kuchen.webp', price: 1 },
    { title: 'Tomate', image: 'images/tomate.webp', price: 1 },
    { title: 'Brokkoli', image: 'images/brokoli.webp', price: 1 },
    { title: 'Salat', image: 'images/salat.webp', price: 1 },
    { title: 'Gemüseteller', image: 'images/gemueseteller.webp', price: 4 },
    { title: 'Fisch', image: 'images/fisch.webp', price: 2 }
];

let selectedItems = [];

function init() {
    const menuGrid = document.querySelector('.menu-grid');
    menuItems.forEach((item, index) => {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');
        menuItem.innerHTML = `
            <img src="${item.image}" alt="${item.title}">
            <div class="menu-item-title">${item.title}</div>
            <div class="menu-item-price">${item.price} Euro</div>
        `;
        menuItem.onclick = () => toggleSelection(index);
        menuGrid.appendChild(menuItem);
    });

    document.getElementById('viewOrderButton').onclick = showOrderModal;
    document.getElementById('completeOrderButton').onclick = completeOrder;
    document.querySelector('.close-button').onclick = closeOrderModal;
}

function toggleSelection(index) {
    const menuItem = document.querySelectorAll('.menu-item')[index];
    if (selectedItems.includes(menuItems[index])) {
        selectedItems = selectedItems.filter(item => item !== menuItems[index]);
        menuItem.classList.remove('selected');
    } else {
        selectedItems.push(menuItems[index]);
        menuItem.classList.add('selected');
    }
}

function showOrderModal() {
    const orderSummary = document.getElementById('orderSummary');
    orderSummary.innerHTML = selectedItems.map(item => `${item.title}: ${item.price} Euro`).join('<br>');
    orderSummary.innerHTML += `<br><strong>Gesamt: ${selectedItems.reduce((total, item) => total + item.price, 0)} Euro</strong>`;
    document.getElementById('orderModal').style.display = 'block';
}

function closeOrderModal() {
    document.getElementById('orderModal').style.display = 'none';
}

function completeOrder() {
    selectedItems = [];
    document.querySelectorAll('.menu-item').forEach(item => item.classList.remove('selected'));
    closeOrderModal();
}

document.addEventListener('DOMContentLoaded', init);
