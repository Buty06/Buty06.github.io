const $container = document.getElementById('container')
let count = 0

setInterval(() => {
    
    if ($container.children[count].style.animation !== 'falling 2.5s infinite') {
        $container.children[count].style.animation = 'falling 2.5s infinite'
        
        count = 0
        count += Math.round(Math.random()*11)
    }

    
}, 200);

