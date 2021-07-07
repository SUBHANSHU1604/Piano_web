const WHITE_KEYS = ['z', 'x', 'c','v','b','n','m'];
const BLACK_KEYS = ['s', 'd', 'g', 'h', 'j'];

const keys = document.querySelectorAll('.key')

keys.forEach(key=> {
    key.addEventListener('click', ()=> playNote(key))
})

document.addEventListener('keywords', e=>{
    if(e.repeat) return;
    const key = e.key;
    const whiteKeyIndex = WHITE_KEYS.indexOf(key);
    const blackKeyIndex = BLACK_KEYS.indexOf(key);
    
    if(whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex]);
    if(blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex]);
})

function playNote(key) {
    const noteAudio = document.getElementById(key.dataset.note)
    noteAudio.currentTime = 0;
    noteAudio.play();
    key.classList.add('active');
    noteAudio.addEventListener('ended',()=>{
        key.classList.remove('active');
    });
}

function changecolor(){
    // var rw = Math.floor(Math.random()*256);
    // var gw = Math.floor(Math.random()*256);
    // var bw = Math.floor(Math.random()*256);

    // var rb = Math.floor(Math.random()*256);
    // var gb = Math.floor(Math.random()*256);
    // var bb = Math.floor(Math.random()*256);

    // var wc = "rgb("+rw+","+gw+","+bw+")";
    // var bc = "rgb("+rb+","+gb+","+bb+")";

    const colw = ['white', '#ff644f', '#79edab', '#0000ff', '#ff66ff', '#ff0000', '#cc33ff' ]; 
    const colb = ['black', '#631f16', '#0e331e', '#000066', '#b300b3', '#990000', '#8600b3'];
    // console.log(wc);
    // console.log(bc);
    // console.log(document.getElementById("key white").style.backgroundcolor=wc);
    // console.log(document.getElementById("key black").style.backgroundcolor=bc);

    var whites = document.getElementsByClassName("white");
    var blacks = document.getElementsByClassName("black");
    // console.log(whites);
    // whites[0].style.backgroundColor = "red";
    // console.log(whites.length);
    let n = colw.length;
    let index = Math.floor(Math.random()*n)
    

    for(let i=0; i<whites.length; i++)
    {
        whites[i].style.backgroundColor = colw[index] ;
        
    }
    for(let i=0; i<blacks.length; i++)
    {
        blacks[i].style.backgroundColor = colb[index];
    }
    // keys = document.getElementsByClassName("key");
    // for(let i=0; i<keys.length; i++){
    //     keys.style.opacity = 0.8;
    //    }

    // whites = Array.prototype.slice.call(whites);
    // whites.forEach((v) => {
    // v.style.backgroundColor = wc;
}

