//---------------Common heart & Copy Count Update Function-------------
function Nav_update(id){
    const value =parseInt( document.getElementById(id).innerText) ;
    const new_value = value + 1 ;
    document.getElementById(id).innerText = new_value;
}


//-------------------Heart Count------------------------- 
let hearts = document.getElementsByClassName("fa-regular") ;
for(const heart of hearts){
    heart.addEventListener("click",function(e){
        // console.log("Clicked") ;
        Nav_update("Heart_Count") ;
    })
}

//-------------------------Copy Count------------------------- 
let AllCopies = document.getElementsByClassName("cpy-btn") ;
for(const copies of AllCopies){
    copies.addEventListener('click',function(e){
        console.log("Copy")
        Nav_update("Copy-Count") ;
    })
}
//-------------------- Copy text  to the Clipboard------------- 
for(const copies of AllCopies){
    copies.addEventListener('click',function(e){
       const ParentCard = this.closest(".cards") ;
    //    console.log(ParentCard.innerText) ;
       const number = ParentCard.querySelector('.contact-number') ;
       navigator.clipboard.writeText(number.innerText) ; 
       console.log(number.innerText) ;
       
    })
}

