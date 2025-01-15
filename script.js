let item = document.querySelector('.info')
let text = document.querySelectorAll('.text')
let day = document.querySelectorAll('.calendar_week-item')


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

day.forEach((e)=>{
    e.addEventListener(('click'), ()=>{
        day.forEach((i)=>{
            i.classList.remove('active')
        })
        e.classList.add('active')  
    })
    
})