const root = document.getElementById('root')

const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const generateBlocks = () => {
    if (!root){
        console.error('no root element')
    }
    
    const box = document.createElement('div')
    box.classList.add('boxStyle')
    box.style.backgroundColor = getRandomColor();
    box.addEventListener('click',() => {
        const originalWidth = box.offsetWidth;
        const originalHeight = box.offsetHeight;
        box.style.width = (originalWidth + 20) + 'px';
        box.style.height = (originalHeight + 20) + 'px';
        setTimeout(() => {
            box.style.width = originalWidth + 'px';
            box.style.height = originalHeight + 'px';
        }, 500);
        console.log(`Block clicked! New size: ${box.style.width} x ${box.style.height}`);
    })
    root.appendChild(box)

}

for(let i = 0; i < 25; i++){
    generateBlocks()
}

const changeColors = () => {
    const boxes = document.querySelectorAll('.boxStyle');
    boxes.forEach(box => {
        box.style.backgroundColor = getRandomColor();
    });
}
setInterval(changeColors, 1000);

