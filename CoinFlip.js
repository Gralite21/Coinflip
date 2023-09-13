function playGame (guess){
    const randomNumber = (Math.random());
    const head = document.getElementById("head")
    const tail = document.getElementById("tail")
    let result = '';
    let winOrLose = '';
    if (randomNumber < 0.5) {
        result = 'Heads' ;
        document.querySelector('.coinSide').innerHTML='HEADS';
        head.classList.remove('invisible');
        tail.classList.add('invisible');
    } else{
        result = 'Tails';
        document.querySelector('.coinSide').innerHTML='Tails';
        tail.classList.remove('invisible');
        head.classList.add('invisible');
    } if (guess===result){
        document.querySelector('.result').innerHTML='YOU WON';
    } else{
        document.querySelector('.result').innerHTML='YOU LOST';
    }
}