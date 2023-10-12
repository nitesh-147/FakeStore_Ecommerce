var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
try {
    fetch("https://fakestoreapi.com/products")
        .then(function (res) { return res.json(); })
        .then(function (json) {
        var _a, _b, _c, _d, _e, _f, _g;
        var cartItems = [];
        function all(category) {
            var allCategories = ["all", "mens", "womens", "electronics", "jewelery"];
            allCategories.forEach(function (e) {
                document.getElementById(e).style.backgroundColor = "white";
            });
            document.getElementById(category).style.backgroundColor = "blue";
            if (category === "mens")
                category = "men's clothing";
            if (category === "womens")
                category = "women's clothing";
            var content = document.getElementsByClassName("content")[0];
            content.innerHTML = "";
            json.forEach(function (element) {
                if (category === "all" || element.category === category) {
                    var pdiv = document.createElement("div");
                    var img = document.createElement("img");
                    img.setAttribute("src", element.image);
                    pdiv.appendChild(img);
                    var title = document.createElement("h5");
                    title.innerHTML = element.title;
                    title.style.height = "25%";
                    title.style.overflow = "hidden";
                    pdiv.appendChild(title);
                    var price = document.createElement("h4");
                    price.innerHTML = "&#8377; " + element.price;
                    price.style.height = "5%";
                    pdiv.appendChild(price);
                    pdiv.addEventListener("click", function () {
                        content.innerHTML = "";
                        var div1 = document.createElement("div");
                        var div2 = document.createElement("div");
                        var img = document.createElement("img");
                        img.setAttribute("src", element.image);
                        img.style.width = "70%";
                        img.style.height = "100%";
                        img.style.boxShadow = "0 0 0";
                        div1.appendChild(img);
                        div1.style.width = "40%";
                        div2.style.width = "40%";
                        div1.style.boxShadow = "0 0 0";
                        div2.style.boxShadow = "0 0 0";
                        div2.style.textAlign = "left";
                        var heading = document.createElement("h5");
                        heading.innerHTML = element.title;
                        div2.appendChild(heading);
                        var categorydesc = document.createElement('p');
                        categorydesc.innerHTML = element.category;
                        div2.appendChild(categorydesc);
                        div2.appendChild(document.createElement('hr'));
                        var price = document.createElement("h4");
                        price.innerHTML = "&#8377; " + element.price;
                        div2.appendChild(price);
                        var rating = document.createElement('h6');
                        rating.innerHTML = "Rating: " + element.rating.rate + "⭐ " + element.rating.count + " Reviews";
                        div2.appendChild(rating);
                        var description = document.createElement('p');
                        description.innerHTML = '<em>' + element.description + '</em>';
                        div2.appendChild(description);
                        var tempdiv = document.createElement('section');
                        var button1 = document.createElement('button');
                        var button2 = document.createElement('button');
                        button1.innerHTML = "-";
                        button2.innerHTML = "+";
                        var span = document.createElement('span');
                        span.style.fontSize = "25px";
                        span.innerHTML = "1";
                        button1.addEventListener("click", function () {
                            var x = parseInt(span.innerHTML);
                            if (x > 1) {
                                x = x - 1;
                                span.innerHTML = "" + x;
                            }
                        });
                        button2.addEventListener("click", function () {
                            var x = parseInt(span.innerHTML);
                            x = x + 1;
                            span.innerHTML = "" + x;
                        });
                        button1.style.border = "none";
                        button2.style.border = "none";
                        button1.style.marginRight = "10px";
                        button2.style.marginLeft = "10px";
                        button1.style.marginBottom = "10px";
                        tempdiv.appendChild(button1);
                        tempdiv.appendChild(span);
                        tempdiv.appendChild(button2);
                        div2.appendChild(tempdiv);
                        var addtoCart = document.createElement('button');
                        addtoCart.innerHTML = "Add to cart";
                        addtoCart.setAttribute("class", "btn btn-primary");
                        addtoCart.addEventListener("click", function () {
                            var quantity = parseInt(span.innerHTML);
                            var newElement = __assign(__assign({}, element), { quantity: quantity });
                            cartItems.push(newElement);
                            addtoCart.innerHTML = "Added to the cart";
                            addtoCart.style.backgroundColor = "purple";
                        });
                        div2.appendChild(addtoCart);
                        content.appendChild(div1);
                        content.appendChild(div2);
                    });
                    content.appendChild(pdiv);
                }
            });
        }
        all("all");
        (_a = document.getElementById("all")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () { return all("all"); });
        (_b = document.getElementById("mens")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function () { return all("mens"); });
        (_c = document
            .getElementById("womens")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", function () { return all("womens"); });
        (_d = document
            .getElementById("electronics")) === null || _d === void 0 ? void 0 : _d.addEventListener("click", function () { return all("electronics"); });
        (_e = document
            .getElementById("jewelery")) === null || _e === void 0 ? void 0 : _e.addEventListener("click", function () { return all("jewelery"); });
        (_f = document.getElementById("logo")) === null || _f === void 0 ? void 0 : _f.addEventListener("click", function () { return all("all"); });
        (_g = document.getElementById('addtocart')) === null || _g === void 0 ? void 0 : _g.addEventListener("click", function () { return displayCart(); });
        var displayCart = function () {
            var content = document.getElementsByClassName("content")[0];
            content.innerHTML = "";
            var mainDiv = document.createElement('div');
            mainDiv.style.width = "100%";
            mainDiv.style.height = "0";
            mainDiv.setAttribute("class", "text-center");
            var h3 = document.createElement('h3');
            h3.innerHTML = "YOUR CART";
            mainDiv.appendChild(h3);
            var p = document.createElement('p');
            p.innerHTML = cartItems.length + " items in your cart";
            mainDiv.appendChild(p);
            var button = document.createElement('button');
            button.innerHTML = "<< continue to Shopping";
            button.addEventListener("click", function () { return all('all'); });
            mainDiv.appendChild(button);
            mainDiv.appendChild(document.createElement('hr'));
            if (cartItems.length === 0) {
                var message = document.createElement('h6');
                message.innerHTML = "The Cart is Empty.";
                mainDiv.appendChild(message);
                content.appendChild(mainDiv);
            }
            else {
                // const table = document.createElement('table');
                var totalP_1 = 0;
                cartItems.forEach(function (item) {
                    var table = document.createElement('div');
                    var removebtn = document.createElement('button');
                    removebtn.innerHTML = "X";
                    removebtn.style.color = "red";
                    removebtn.style.height = "40px";
                    removebtn.style.border = "none";
                    removebtn.addEventListener("click", function () { return removeItem(item); });
                    table.appendChild(removebtn);
                    table.style.width = "100%";
                    table.style.height = "15vh";
                    table.style.padding = "2vh";
                    table.style.backgroundColor = "#f2f2f2";
                    table.style.display = "flex";
                    table.style.justifyContent = "space-evenly";
                    var s1 = document.createElement('section');
                    var s2 = document.createElement('section');
                    var s3 = document.createElement('section');
                    var s4 = document.createElement('section');
                    var img = document.createElement('img');
                    img.setAttribute('src', item.image);
                    img.style.height = "11vh";
                    img.style.width = "10vw";
                    s1.appendChild(img);
                    var title = document.createElement('h3');
                    title.innerHTML = item.title;
                    title.style.height = "100%";
                    title.style.overflow = "hidden";
                    s2.appendChild(title);
                    var button1 = document.createElement('button');
                    var button2 = document.createElement('button');
                    button1.innerHTML = "-";
                    button2.innerHTML = "+";
                    var span = document.createElement('span');
                    span.style.fontSize = "25px";
                    span.innerHTML = item.quantity;
                    button1.addEventListener("click", function () {
                        var x = parseInt(span.innerHTML);
                        if (x > 1) {
                            x = x - 1;
                            span.innerHTML = "" + x;
                            item.quantity = x;
                            displayCart();
                        }
                    });
                    button2.addEventListener("click", function () {
                        var x = parseInt(span.innerHTML);
                        x = x + 1;
                        span.innerHTML = "" + x;
                        item.quantity = x;
                        displayCart();
                    });
                    button1.style.border = "none";
                    button2.style.border = "none";
                    button1.style.marginRight = "10px";
                    button2.style.marginLeft = "10px";
                    button1.style.marginBottom = "10px";
                    s3.appendChild(button1);
                    s3.appendChild(span);
                    s3.appendChild(button2);
                    var total = document.createElement('h3');
                    total.innerHTML = "" + item.quantity * item.price;
                    s4.appendChild(total);
                    s1.style.width = "23vw";
                    s2.style.width = "23vw";
                    s3.style.width = "23vw";
                    s4.style.width = "23vw";
                    table.appendChild(s1);
                    table.appendChild(s2);
                    table.appendChild(s3);
                    table.appendChild(s4);
                    table.style.boxShadow = "0 0 0";
                    mainDiv.appendChild(table);
                    totalP_1 += item.price * item.quantity;
                });
                var button = document.createElement('button');
                button.innerHTML = "CHECKOUT";
                button.style.width = "100%";
                button.setAttribute("class", "btn btn-primary");
                button.style.height = "8vh";
                button.style.borderRadius = "7px";
                var subtotal = document.createElement('h3');
                subtotal.style.display = "flex";
                subtotal.style.justifyContent = "space-between";
                var span1 = document.createElement('span');
                var span2 = document.createElement('span');
                span1.innerHTML = "SUBTOTAL";
                span2.innerHTML = "" + totalP_1.toPrecision(5);
                subtotal.appendChild(span1);
                subtotal.appendChild(span2);
                mainDiv.appendChild(document.createElement('hr'));
                mainDiv.appendChild(subtotal);
                mainDiv.appendChild(document.createElement('hr'));
                button.addEventListener("click", function () {
                    var h1 = document.createElement('h1');
                    h1.innerHTML = "Thank you for shopping with us!";
                    content.innerHTML = "";
                    content.appendChild(h1);
                    setTimeout(function () { return all("all"); }, 5000);
                });
                mainDiv.appendChild(button);
                content.appendChild(mainDiv);
            }
        };
        var removeItem = function (item) {
            cartItems = cartItems.filter(function (ele) { return ele != item; });
            displayCart();
        };
    });
}
catch (e) {
    console.log(e);
}
