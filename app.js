let storage="0",memory="0",delivery='0',total=1299,withPromoCode;
// memory,storage delivery configuration dom
let mac_memory=document.querySelector('.mac-memory');
let mac_storage=document.querySelector('.mac-storage');
let mac_delivery=document.querySelector('.mac-delivery');
// dom initialize

let base_price = document.getElementById('base_price').textContent
let extra_memory = document.getElementById('memory_cost')
let storage_memory = document.getElementById('storage_cost')
let delivery_cost = document.getElementById('delivery_cost')
let total_cost = document.getElementById('total_cost')
let code_input = document.getElementById('code_input')
let promo_submit = document.getElementById('promo_code_btn')
let totalCost = document.getElementById('total_cost')
let discountTotal = document.getElementById('discount_price')
//intial the value total cost

//memory configuration
mac_memory.addEventListener('click',(e) =>{
    let keyValue = e.target.classList[1];
    if(keyValue == 'eight-GB'){
        memory = "0"
    }else if(keyValue ==='sixteen-GB'){
        memory = "180"
    }
    extra_memory.innerText = memory
    updateBalance();
})
//storage configuration
mac_storage.addEventListener('click',(e) =>{
    let keyValue = e.target.classList[1];
    if(keyValue == '256-GB'){
        storage = "0"
    }else if(keyValue ==='512-GB'){
        storage = "100"
    }else if(keyValue ==='1-TB'){
        storage = "180"
    }
    storage_memory.innerText = storage
    updateBalance();
})
//delivery configuration
mac_delivery.addEventListener('click',(e) =>{
    let keyValue = e.target.classList[1];
    if(keyValue == 'normal-delivery'){
        delivery = "0"
    }else if(keyValue ==='early-delivery'){
        delivery = "20"
    }
    delivery_cost.innerText = delivery
    updateBalance();
    
})
function updateBalance(){
    total = parseInt(base_price) + parseInt(extra_memory.textContent) + parseInt(storage_memory.textContent) + parseInt(delivery_cost.textContent)
    //total value insert the dom
    totalCost.textContent = total
    discountTotal.innerText = total
    return total

}

// promo code apply function
promo_submit.addEventListener('click',(e) =>{
    let withoutPromoCode = totalCost.textContent
    let promo_value = code_input.value
    if(promo_value == 'stevekaku'){
        discountTotal.innerText = withoutPromoCode - withoutPromoCode *0.2
         
    }
    else{
        alert('please insert right promo code')
    }
    code_input.value = ''
})
/*
1. 
*/