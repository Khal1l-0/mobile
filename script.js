let item = document.getElementById('info')
let text = document.querySelectorAll('.text')

item.addEventListener('click', ()=>{
    item.classList.toggle('active')
})

text.forEach((e)=>{
    e.addEventListener(('click'), ()=>{
        text.forEach((i)=>{
            i.classList.remove('active')
        })
        e.classList.add('active')  
    })
    
})

