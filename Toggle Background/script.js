const toggleBtn = document.getElementById('toggleBtn');
const body = document.body;

toggleBtn.addEventListener('click', () => {
    // Generate a random hexadecimal color
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    
    // Set the background color of the body to the random color
    body.style.backgroundColor = randomColor;
});
