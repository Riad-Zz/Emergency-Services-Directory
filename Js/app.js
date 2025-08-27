//---------------Common ID Search -------------------------
function SearchID(id){
    return document.getElementById(id) ;
}
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
        // console.log("Copy")
        alert("Number Copied !") ;
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

//--------------------Call Manage-------------------------------
const allCalls = document.getElementsByClassName("call-btn") ;
for(const call of allCalls){
    call.addEventListener('click',function(e){
        // console.log("Clicked") ;
        const coin =parseInt(SearchID("coin_count").innerText) ;
        //--------------Coin Checking----------------
        if(coin < 20){
            alert("Insufficient Coin ! Cannot Call Anymore!") ;
        }else{
            //------Parent Card Finding------------
            const ParentCards = this.closest(".cards") ;
            // console.log(ParentCards.innerText) ;
            const Name = ParentCards.querySelector('p').innerText ;
            const callNumber = ParentCards.querySelector('.contact-number').innerText ;
            alert("📞 Calling "+Name+" "+callNumber+" ...") ; 

            //----------------Coin Calculation--------------- 
            const newCoin = coin - 20 ; 
            SearchID("coin_count").innerText = newCoin ;

            //Appending Clild 
            const Histories = SearchID("history-container") ;
            const historyCards = document.createElement('div') ;
            historyCards.innerHTML = `
                <div class="History-Card p-[16px] flex justify-between gap-[15px] items-center bg-[#FAFAFA] rounded-lg mb-4">
                        <div class="left-text">
                            <p class="font-semibold text-[1.125rem] text-[#111111]">${Name}</p>
                            <p class="text-[1.125rem] text-[#5C5C5C]">${callNumber}</p>
                        </div>
                        <div class="right-time">
                            <p class="text-[#111111] text-[1.125rem]">${new Date().toLocaleTimeString()}</p>
                        </div>
                    </div>
            `
            Histories.prepend(historyCards);
        }
    })
}


