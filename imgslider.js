const arrayImage = ['a.jpg', 'b.jpg','c.jpg', 'd.jpg']
const arrayLength = arrayImage.length
let i = 0
const demoFunction = ()=> 
    i++
    i=i%arrayLength
    document.querySelector('img').src = `${arrayImage[i]}`
    let set = setInterval(demoFunction, 3000)
    document.querySelector('.container .right').addEventListener('click',()=>{
        i++
    i=i%arrayLength
    document.querySelector('img').src = `${arrayImage[i]}`
    })
    document.querySelector('.container .left').addEventListener('click',()=>{
         document.querySelector('img').src = `${arrayImage[i]}`
})
document.querySelector('.container .left').addEventListener('click', ()=>{
    i--
    if (i<0){
        i=arrayLength-1
    }
    document.querySelector('img').src = `${arrayImage[i]}`
})
document.querySelector('.container').addEventListener('mouseover', ()=>{
    clearInterval(set)
})
document.querySelector('.container').addEventListener('mouseout', ()=>{
    set = setInterval(demoFunction,3000)
})  



