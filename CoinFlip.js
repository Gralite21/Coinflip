function playGame (guess){
    const randomNumber = (Math.random());
    let result = '';
    let winOrLose = '';
    if (randomNumber < 0.5) {
        result = 'Heads' ;
    } else{
        result = 'Tails';
    } if (guess===result){
        document.querySelector('.result').innerHTML='YOU WON'
    } else{
        document.querySelector('.result').innerHTML='YOU LOST'
    }
}