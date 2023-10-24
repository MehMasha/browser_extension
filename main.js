// document.addEventListener('DOMContentLoaded', ()=> {


async function move(direction) {
    console.log(direction)
    try {
        const response = await fetch("https://mehauc.online/" + direction);
    } catch(error) {
        console.log('error')
    }
    }


let html = `
<style>
.row1 {
    display: flex; 
    justify-content: center;
    
}
.row2 {
    display: flex; 
    justify-content: center
}

.wasd_button {
    font-size: 64px;
    width: 80px;
    height: 80px;
    margin: 4px;
}

.pult {
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-weight: 700;
}

.name_pult {
    text-align: center;
}
</style>
<h4 class="name_pult">Пульт управления машинкой</h4>
<div class="pult">
    <div class="row1">
        <input 
            class="wasd_button" 
            type="button" 
            id="up" 
            value="W"
        />
    </div>
    <div class="row2">
        <input 
            class="wasd_button" 
            type="button" 
            id="left" 
            value="A" 
            />
        <input 
            class="wasd_button" 
            type="button" 
            id="down" 
            value="S" 
            />
        <input 
            class="wasd_button" 
            type="button" 
            id="right" 
            value="D" 
            />
    </div>
</div>`

function add_pult () { 
    const infoNode = document.querySelector('.about-section__panel--content')
    // alert(infoNode)
    infoNode.innerHTML = infoNode.innerHTML + html
    document.getElementById('up').addEventListener('click' , ()=>move('Forward'))
    document.getElementById('down').addEventListener('click' , ()=>move('Backward'))
    document.getElementById('left').addEventListener('click' , ()=>move('Left'))
    document.getElementById('right').addEventListener('click' , ()=>move('Right'))
}

setTimeout(add_pult, 2000)

// })