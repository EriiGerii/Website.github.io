function submitForm(event) {
    event.preventDefault();

    
    const deliveryTime = 3;

   
    document.getElementById('purchaseForm').style.display = 'none';
    document.getElementById('confirmationMessage').style.display = 'block';
    document.getElementById('deliveryTime').innerText = deliveryTime;
}