function generatenumber() {
    

    const min = Math.ceil(document.querySelector('.input').value);
    const max = Math.ceil(document.querySelector('.input2').value);

    const result = Math.floor(Math.random() * (max - min + 1)) + min;

    alert(result);
}