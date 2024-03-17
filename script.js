document.body.addEventListener('keyup',(event)=>{
    playSound(event.code.toLowerCase())
})

document.querySelector('.composer button').addEventListener('click',()=>{
    let input = document.querySelector('#input').value;
    
    if(input !== ''){
        let inputArrays = input.split('');
        composerAudio(inputArrays)
    }

})
function playSound(sound){
    let audioElement = document.querySelector(`#s_${sound}`)
    let colorKey = document.querySelector(`div[data-key="${sound}"]`)

    if(audioElement){
        audioElement.currentTime = 0;
        audioElement.play()
    }
    if(colorKey){
        colorKey.classList.add('active');

        setInterval(()=>{
            colorKey.classList.remove('active')
        },300);
    }
}
function composerAudio(inputArrays){
    let wait = 0

    for(let audioItem of inputArrays){

        setTimeout(()=>{
            playSound(`key${audioItem}`)
        },wait);

        wait += 250;
    }
}


