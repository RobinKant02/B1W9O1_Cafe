var frisdrank = Number(1.20), bier = Number(2.30), wijn = Number(4.10);
var order, quantity;

function klantorder() {
    while(!order) {
        order = prompt("Geef een order op. fris, bier, wijn of bitterballen");
        order = order.toLowerCase();          
        if(order === 'stop') {
            alert("je bent gestopt");
            bon();
            break; 
        } else if(order !== 'fris' && order !== 'bier' && order !== 'wijn' && order !== 'snack') {
            alert("Ongeldige order. fris, bier, wijn of bitterballen"); 
            order = false;
            if(order === 'snack') {
                
            } 
        } else { 
            klantQuantity();
            break;
        };
    };
};

function klantQuantity() {
    while(!quantity) {
        quantity = prompt("Hoeveel " + order + " wilt u bestellen?");
        quantity = quantity.toLowerCase();       
        if(quantity === 'stop') {
            alert("je bent gestopt");
            bon();
            break; 
        } else if(!quantity.match(/^\d+$/)) {
            alert(`Incorrect number.`); 
            quantity = false; 
        } else { 
            alert('Je hebt ' + quantity + "x " + order + " besteld.");
            order = false, quantity = false;
            klantorder();
            break;
        };
    };
};
function bon() {
    document.write("Hier is uw bon." + "<br>");
}
klantorder();