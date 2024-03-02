let grids = [];
const container = document.querySelector('.container')

for (let i = 0; i < 256; i++)  {
    grids[i] = document.createElement('div');
    grids[i].classList.add(`grid${i}`);
    container.appendChild(grids[i]);
}

for (let grid of grids) {
    function colorize () {
        grid.style.backgroundColor = 'black';
        setTimeout( () => {
            grid.style.backgroundColor = 'transparent';
        }, 300)
    }
    grid.addEventListener("mouseenter", colorize);
}