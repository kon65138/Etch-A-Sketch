let grid = [];
const container = document.querySelector('.container')

for (let i = 0; i < 256; i++)  {
    grid[i] = document.createElement('div');
    grid[i].classList.add(`grid${i}`);
    container.appendChild(grid[i]);
}