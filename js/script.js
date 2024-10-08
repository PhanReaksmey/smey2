document.addEventListener('DOMContentLoaded', () => {
    const foodItems = document.querySelectorAll('.food-item');
    
    foodItems.forEach(item => {
        item.addEventListener('click', () => {
            alert(`You clicked on ${item.querySelector('h2').innerText}`);
        });
    });
});
