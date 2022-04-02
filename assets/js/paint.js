function configureListeners() {
    let images = document.getElementsByTagName('img') 


     for (var i = 0; i < images.length; i++) {        
        // iterate over images and add mouseover event listeners   
        let swatches = images[i]
        swatches.addEventListener('mouseover', addOpacity, false)
        swatches.addEventListener('mouseout', removeOpacity, false)
    } 
}

function addOpacity(event) {
    // add appropriate CSS class
    if (!this.classList.contains('dim')){
        this.classList.add('dim')
    }
    getProductInfo(event.target.id);     
}

function removeOpacity(event) {
     //remove appropriate CSS class
     if(this.classList.contains('dim')){
         this.classList.remove('dim')
     }

    let element = document.getElementById('color-price');
        element.textContent = '';
        
    let color = document.getElementById('color-name');
        color.textContent = ''; 

    event.preventDefault();    
}

function getProductInfo(partNumber) {
    let price;
    let colorName;  
    
    switch (partNumber) {
        case 'pn1':           
        // set variables for price and color name and invoke a function to update the price
            price = '$14.99'
            colorName = 'Lime Green'
            updatePrice(colorName, price)           
            break;           
        case 'pn2':
            price = '$11.14'
            colorName = 'Medium Brown' 
            updatePrice(colorName, price)     
            break;            
        case 'pn3':
            price = '$22.99'
            colorName = 'Medium Blue'   
            updatePrice(colorName, price)   
            break;   
        case 'pn4':
            price = '$14.99'
            colorName = 'Hot Pink'            
            updatePrice(colorName, price)   
            break;   
        case 'pn5':
            price = '$21.98'
            colorName = 'Solid white' 
            updatePrice(colorName, price)              
            break;   
        case 'pn6':
            price = '$4.99'
            colorName = 'Solid Black'   
            updatePrice(colorName, price)            
            break;   
        case 'pn7':
            price = '$13.42'
            colorName = 'Light Ble'       
            updatePrice(colorName, price)        
            break;   
        case 'pn8':
            price = '$11.99'
            colorName = 'Royal Purple'   
            updatePrice(colorName, price)         
            break;   
        case 'pn9':
            price = '$14.99'
            colorName = 'Solid Yellow'                       
            updatePrice(colorName, price)   
            break;   
          default:              
    }

    function updatePrice(colorName, price)
    {       
        let colorPrice = document.getElementById('color-price');
        colorPrice.textContent = price;
        
        let color = document.getElementById('color-name');
        color.textContent = colorName;
    }
    
}
