const button = document.querySelectorAll('.button')
const body = document.querySelector('body')
button.forEach((button)=>{
console.log(button);
button.addEventListener('click',function(e){
    console.log(e.target.id);
    switch (e.target.id) {
        case 'grey':
            body.style.backgroundColor="grey"
            body.style.color="white"
            break;
            
        case 'white':
             body.style.backgroundColor="white"
             body.style.color="black"
            break;
            
        case 'blue':
            body.style.backgroundColor="#8a9cd7"
            body.style.color="black"
            break;
            
        case 'yellow':
            body.style.backgroundColor="yellow"
            body.style.color="green"
            break;
    
        default:
            body.style.backgroundColor="white"
            body.style.color="black"
            break;
    }
})

})
