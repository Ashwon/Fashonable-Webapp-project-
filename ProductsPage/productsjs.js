var total = 0;
var allitems = {
    "pro1" : ["pro1", "Nike Sportswear Tech Fleece", "Men's 1/2-Zip Sweatshirt", "₹ 7 995.00"],
    "pro2" : ["pro2", "Man United 23/24 Third Jersey", "Men's Football" , "₹ 5 299.00"],
    "pro3" : ["pro3", "BRANDLOVE Tee", "Men's Training" , "₹ 839.50"],
    "pro4" : ["pro4", "Nike Dri-FIT ADV A.P.S.", "Men's Engineered Short-Sleeve Fitness Top", "₹ 4 495.00"],
    "pro5" : ["pro5", "Nike ESC", "Men's Full-Zip Wool Jumper", "₹ 7 995.00"],
    "pro6" : ["pro6", "Essentials Single Jersey Logo TEE", "Men's Sportswear", "₹ 1 099.00"],
    "pro7" : ["pro7", "LeBron", "Men's Pullover Fleece Hoodie", "₹ 6 396.00"],
    "pro8" : ["pro8", "MONCLER X ADIDAS Sweatpants", "Unisex Originals" , "₹ 79 999.00"],
    "pro9" : ["pro9", "Essentials Embroidered Logo Pants", "Men's Training" , "₹ 1 749.50"],
    "pro10" : ["pro10", "Jordan Essentials", "Men's Loopback Fleece Shorts", "₹ 2 695.00"],
    "pro11" : ["pro11", "Liverpool F.C. Stadium Away", "Men's Nike Dri-FIT Football Shorts", "₹ 2 795.00"],
    "pro12" : ["pro12", "BAPE X ADIDAS Golf WIND.RDY Pants", "Men's Originals", "₹ 24 999.50"],
    "pro13" : ["pro13", "SATIN Firebird Track Top", "Women's Originals", "₹ 8 999.00"],
    "pro14" : ["pro14", "Nike Sportswear Tech Fleece", "Women's Oversized Full-Zip Hoodie" , "₹ 8 995.00"],
    "pro15" : ["pro15", "Z.N.E Pants", "Women's Sportswear" , "₹ 8 999.50"],
    "pro16" : ["pro16", "Nike Sportswear Air", "Women's Fleece Oversized High-Rise Joggers", "₹ 4 295.00"],
    "pro17" : ["pro17", "Nike Sportswear Phoenix Bouclé", "Women's Slim Cropped Knit Short-Sleeve Top", "₹ 3 495.00"],
    "pro18" : ["pro18", "MONCLER X ADIDAS SEELOS Pants", "Women's Originals", "₹ 89 999.00"],
    "pro19" : ["pro19", "ADICOLOR Classics Trefoil Tee", "Women's Originals", "₹ 1 995.50"],
    "pro20" : ["pro20", "Nike Sportswear Phoenix Fleece", "Women's Over-Oversized Cardigan" , "₹ 3 995.00"],
    "pro21" : ["pro21", "Nike Forward Hoodie", "Women's Oversized Hoodie" , "₹ 9 995.00"],
    "pro22" : ["pro22", "CAMO Trefoil Infill Tee", "Women's Originals", "₹ 1 499.50"],
    "pro23" : ["pro23", "Nike Sportswear Phoenix Fleece", "Women's Mid-Rise Trousers", "₹ 4 295.00"],
    "pro24" : ["pro24", "Jordan", "Women's Oversized T-Shirt", "₹ 3 295.00"],
    "pro25" : ["pro25", "Nike Air Max Excee", "Men's Shoes", "₹ 7 995.00"],
    "pro26" : ["pro26", "Nike Air Max Pulse", "Men's Shoes" , "₹ 13 995.00"],
    "pro27" : ["pro27", "Nike Air Force 1'07", "Men's Shoes" , "₹ 11 895.00"],
    "pro28" : ["pro28", "AVRYN Shoes", "Women's Shoes", "₹ 9 799.00"],
    "pro29" : ["pro29", "ULTIMASHOW Shoes", "Women's Shoes", "₹ 2 799.50"],
    "pro30" : ["pro30", "SOLARGLIDE 6 Shoes", "Women's Shoes", "₹ 6 999.50"],
    "pro31" : ["pro31", "Nike Air Max 90 Futura", "Women's Shoes", "₹ 12 795.00"],
    "pro32" : ["pro32", "Nike Waffle Debut", "Women's Shoes" , "₹ 5 695.00"],
    "pro33" : ["pro33", "Nike Tech Hera", "Women's Shoes" , "₹ 9 695.00"],
    "pro34" : ["pro34", "FLUIDFLOW 2.0 Running Shoe", "Men's Running", " ₹ 2 364.00"],
    "pro35" : ["pro35", "ULTIMASHOW Shoes", "Men's Running", "₹ 3 919.00"],
    "pro36" : ["pro36", "CLOUDFOAM Comfort Shoes", "Men's Running", "₹ 5 599.50"],
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

        localStorage.setItem("subtotal", totprice);
    }

}    


function cart() {
    var promen = document.getElementById("productsmen");
    promen.style.display = "none";
    var prowomen = document.getElementById("productswomen");
    prowomen.style.display = "none";
    var proacc = document.getElementById("productsacc");
    proacc.style.display = "none";

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
        div.innerHTML = "<p class='no'>" + no+"." +"</p><img src='productsall/" + img + ".webp' alt=''><div class='carttext'><p class='ctname'>" + name + "</p><p class='ctdesc'>" + desc + "</p><p class='ctprice'>" + price + "</p></div><div class='qntbtn'><button class='qntdown' id='" + img + "' onclick='decreaseCount(this.id, this)'>-</button><input type='text' value='" + cartitems[i] + "'><button class='qntup' id='"+img+"'onclick='increaseCount(this.id, this)'>+</button></div>";
        cart.appendChild(div);
        no++;
    }

}

function gotoo() {    
    var id = localStorage.getItem("whichpage");   
    if (id[3]=="w" || id[6]=="h") {
        producttype("women")
    }   
    else if (id=="goshoe" || id[3]=="a" || id[6]=="e") {
        producttype("acc");
    }
    else if (id=="gomen" || id[3]=="m" || id[6]=="i" || id[6]=="o") {
        producttype("men");
    }
    else {
        producttype("men");
    }
    localStorage.clear();
}


function producttype(id) {
    if (id=="women") {
        document.getElementById("productsmen").style.display = "none";
        document.getElementById("productswomen").style.display = "block";
        document.getElementById("productsacc").style.display = "none";

        document.getElementById("men").classList.remove("active");
        document.getElementById("women").classList.add("active");
        document.getElementById("acc").classList.remove("active");
    }
    else if (id=="men") {
        document.getElementById("productswomen").style.display = "none";
        document.getElementById("productsmen").style.display = "block";
        document.getElementById("productsacc").style.display = "none";

        document.getElementById("women").classList.remove("active");
        document.getElementById("men").classList.add("active");
        document.getElementById("acc").classList.remove("active");
    }
    else if (id=="acc") {
        document.getElementById("productswomen").style.display = "none";
        document.getElementById("productsmen").style.display = "none";
        document.getElementById("productsacc").style.display = "block";

        document.getElementById("women").classList.remove("active");
        document.getElementById("men").classList.remove("active");
        document.getElementById("acc").classList.add("active");
    }
    else {
        localStorage.setItem("whichpage", id);
        window.location.href = "ProductsPage/Products.html";
    }
}


function pay() {
    window.open("pay.html");
    
}

function bill(){
    totprice = localStorage.getItem("subtotal");
    var sub = document.getElementById("sub");
    sub.innerHTML = "Subtotal: ₹ " + totprice;

    var tota = document.getElementById("tota");
    t = parseInt(totprice) + 1000;
    tota.innerHTML = "Total: ₹ " + t;
    
}

function payit(){
    alert("Payment Successful");
    window.open("../index.html");
}

