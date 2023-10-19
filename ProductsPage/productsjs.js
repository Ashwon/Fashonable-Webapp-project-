var total = 0;
var allitems = {
    "pro1" : ["pro1", "Nike Sportswear Tech Fleece", "Men's 1/2-Zip Sweatshirt", "₹ 7 995.00"],
    "pro2" : ["pro2", "Man United 23/24 Third Jersey", "Men's Football" , "₹ 5 299.00"],
    "pro3" : ["pro3", "BRANDLOVE Tee", "Men's Training" , "₹ 839.50"],
    "pro4" : ["pro4", "Nike Dri-FIT ADV A.P.S.", "Men's Engineered Short-Sleeve Fitness Top", "₹ 4 495.00"],
    "pro5" : ["pro5", "Nike ESC", "Men's Full-Zip Wool Jumper", "₹ 7 995.00"],
    "pro6" : ["pro6", "Essentials Single Jersey Logo TEE", "Men's Sportswear", "₹ 1 099.00"]
};
var cartitems = new Array();
var cartactive = false;


function increaseCount(a, b) {
    var input = b.previousElementSibling;
    var value = parseInt(input.value, 10); 
    value ++;
    input.value = value;
    calculate(a, "increase", value)
}

function decreaseCount(a, b) {
    var input = b.nextElementSibling;
    var value = parseInt(input.value, 10); 
    if (value > 0) {
        value --;
        input.value = value;
        calculate(a, "reduce", value)   
    }
}


function calculate(a, b, c) { 
    if(b == "increase") {
        total += 1;
    }
    else {
        total -= 1;
    }
    
    if(c==0) {
        delete cartitems[a];
        summary(a)
    }
    else {
        cartitems[a] = c;
    }
    summary();
}


function summary(a) {   
    if(cartactive == true) {
        var totitems = document.getElementById("totitems");   
        var totalprice = document.getElementById("totprice");
        var totprice = 0;   
        var tot = 0; 

        for(i in cartitems) {
            var price = allitems[i][3];
            
            price = price.replace("₹ ", "");
            price = price.replace(" ", "");

            totprice += parseFloat(price) * cartitems[i];
            tot += cartitems[i];
        } 

        totitems.innerHTML = "Your cart: " + tot + " items";
        totalprice.innerHTML = "Subtotal: ₹ " + totprice;
        
        if(a != undefined) {
            var cartitem = document.getElementById("cartitemid" + a);
            cartitem.remove();
        }    


        if(tot == 0) {  
            totitems.innerHTML = "Your cart is empty";
            document.getElementById("paybtn").style.display = "none";
        }
    }

}    


function cart() {
    var promen = document.getElementById("productsmen");
    promen.style.display = "none";

    var cart = document.getElementById("cart");
    cart.style.display = "block";

    var producttype = document.getElementById("producttype");
    producttype.style.display = "none";

    var no = 1;
    cartactive = true;
    summary();

    for(i in cartitems) {
        
        var img = allitems[i][0];
        var name = allitems[i][1];
        var desc = allitems[i][2];
        var price = allitems[i][3];
        
        var div = document.createElement("div");
        div.className = "cartitem";
        div.id = "cartitemid" + i;
        div.innerHTML = "<p class='no'>" + no+"." +"</p><img src='productsmen/" + img + ".webp' alt=''><div class='carttext'><p class='ctname'>" + name + "</p><p class='ctdesc'>" + desc + "</p><p class='ctprice'>" + price + "</p></div><div class='qntbtn'><button class='qntdown' id='" + img + "' onclick='decreaseCount(this.id, this)'>-</button><input type='text' value='" + cartitems[i] + "'><button class='qntup' id='"+img+"'onclick='increaseCount(this.id, this)'>+</button></div>";
        cart.appendChild(div);
        no++;
    }

}


function producttype(id) {
    if (id=="women") {
        document.getElementById("productsmen").style.display = "none";
        document.getElementById("productswomen").style.display = "block";
        document.getElementById("men").classList.remove("active");
        document.getElementById("women").classList.add("active");
    }
    else if (id=="men") {
        document.getElementById("productswomen").style.display = "none";
        document.getElementById("productsmen").style.display = "block";
        document.getElementById("women").classList.remove("active");
        document.getElementById("men").classList.add("active");
    }
}





