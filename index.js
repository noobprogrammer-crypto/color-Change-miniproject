

function bgColorChanger(){
    let randomColor = '0123456789ABCDEF';
    let new_color = '#';

    for(let i=0;i<6;i++){
        new_color += randomColor[Math.floor(Math.random()*16)];
    }

    return new_color;
}

function changeBackground(){
    const container = document.querySelector('.container');
    container.style.backgroundColor = bgColorChanger();
}

document.getElementById('color-btn').addEventListener('click',changeBackground);