let grids = [];
let gridno = 256;
let container = document.querySelector('.container')
const btn = document.querySelector('button');
btn.addEventListener("click", chooseGridSize)
function chooseGridSize () {
    for (let grid of grids) grid.remove();
    let sides = prompt("how many squares per side?");
    if (sides > 100) sides = 100;
    gridno = sides * sides;
    for (let i = 0; i < gridno; i++)  {
        grids[i] = document.createElement('div');
        grids[i].classList.add(`grid${i}`);
        let percent = 100/sides;
        container.appendChild(grids[i]);
        grids[i].style.cssText = `width:${percent}%; height:${percent}%;`;
    }
    for (let grid of grids) {
        function colorize () {
            let randomColor = Math.floor(Math.random()*16777215).toString(16);
            grid.style.backgroundColor = '#' + randomColor;
            setTimeout( () => {
                grid.style.backgroundColor = 'transparent';
            }, 3000)
        }
        grid.addEventListener("mouseenter", colorize);
    }
}
for (let i = 0; i < gridno; i++)  {
    grids[i] = document.createElement('div');
    grids[i].classList.add(`grid`);
    container.appendChild(grids[i]);
    grids[i].style.cssText = `width:6.25%; height:6.25%;`;
}

for (let grid of grids) {
    function colorize () {
        let randomColor = Math.floor(Math.random()*16777215).toString(16);
        grid.style.backgroundColor = '#' + randomColor;
        setTimeout( () => {
            grid.style.backgroundColor = 'transparent';
        }, 3000)
    }
    grid.addEventListener("mouseenter", colorize);
}

