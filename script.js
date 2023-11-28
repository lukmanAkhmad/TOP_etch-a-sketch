const tombolReset = document.querySelector('.tombol-reset')
const container = document.querySelector('#container');

function membuatGrid(ukuran){
    // Ketika parameter ukuran di ubah efek mouseover sebelumnya akan dihapus !
    let square = container.querySelectorAll('div');
    square.forEach((div) => div.remove());

    container.style.gridTemplateColumns = `repeat(${ukuran}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${ukuran}, 1fr)`;

    let jumlah = ukuran * ukuran;
    for(let i = 0;i < jumlah;i++){
        let kotak = document.createElement('div');
        kotak.classList.add('kelasKotak');
        kotak.addEventListener('mouseover', warnaAcak);
        kotak.style.backgroundColor = "white";
        container.insertAdjacentElement('beforeend', kotak);
    };

};
membuatGrid(16);

tombolReset.addEventListener('click', () => {
    let promptReset = prompt('Masukan Angka Mulai Dari 1 Sampai 100');

    if(promptReset > 0 && promptReset <= 100){
        console.log(promptReset);
        
        membuatGrid(promptReset);
    } else{
        
        alert('Masukan Angka Mulai Dari 1 Sampai 100 !!!');
    };

});

function warnaAcak(){
    this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
}

// function warnaHitam() {
//     this.style.backgroundColor = "black";
// }