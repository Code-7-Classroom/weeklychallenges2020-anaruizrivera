
// Filter
var items = document.getElementsByClassName('product');
function filterItems() {
   var type = document.getElementById("filterSelect").value;
   for (var i = 0; i < items.length; i++){
       var itemType= items[i].getElementsByClassName("type");
       var itemTypeValue= itemType[0].innerText;
       if(itemTypeValue == type){
           items[i].style.display = '';
       }
       else if(type == 'default'){
           items[i].style.display = '';
       }
       else{
           items[i].style.display = 'none';
       }
   }
}
 
// Price
var items = document.getElementsByClassName('product');
 
function priceItems() {
   var price = document.getElementById("priceSelect").value;
 
   for (var i = 0; i < items.length; i++){
       var itemPrice= items[i].getElementsByClassName("item__price");
       var itemPriceValue= itemPrice[0].innerText;
 
       if(itemPriceValue == price){
           items[i].style.display = '';
       }
       else if(price == 'default'){
           items[i].style.display = '';
       }
       else{
           items[i].style.display = 'none';
       }
 
   }
}

