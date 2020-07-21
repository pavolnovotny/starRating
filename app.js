const stars= document.querySelectorAll('.star')
const output= document.querySelector('.output')

stars.forEach((star, index)=>{
    star.starValue= (index +1 )
   
    star.addEventListener("mouseover",starRate)
    star.addEventListener("mouseout",starRate)
    star.addEventListener("click",starRate)
})

function starRate(e){
    
    let t= e.type
    let starValue= this.starValue
    console.log(starValue)


    
    stars.forEach((el, index)=>{
        if(t==='click'){
            if(starValue> index){
                el.classList.add('orange')
                output.innerHTML=`You rated ${starValue} stars`
            }else{
                el.classList.remove('orange')
            }
        }
        if(t==='mouseover'){
            if(starValue> index){
                el.classList.add('yellow')
            }else{
                el.classList.remove('yellow')
            }
        }
        if(t==='mouseout'){
            if(starValue> index){
                el.classList.add('yellow')
            }else{
                el.classList.remove('yellow')
            }
        }
    })
}

