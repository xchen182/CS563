function CalcPrice() {
    //set default tip rate as
    document.getElementById("tiprate").defaultValue = 15;

    const total = parseFloat(document.querySelector('#total').value)
    const tiprate = parseFloat(document.querySelector('#tiprate').value)
    

    //check total price and tiprate, if fail pop alert and return false.
    if(total < 0){
        alert("Total price must great than 0!");
        return false;
    }
    if(tiprate < 0){
        alert("Tip rate at least be 0!");
        return false;
    }

    //only 2 decimal place are counted
    const tip = total*(tiprate/100);
    const tax= total*0.055
    const gtotal = (total+tip+tax).toFixed(2);
     
    //return value to page
    document.querySelector('#tip').innerHTML = tip;
    document.querySelector('#grandtotal').innerHTML = gtotal;
}

document.querySelector('#calculate').addEventListener('click', CalcPrice);