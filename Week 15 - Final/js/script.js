/* 
	 ______    _                     _          _____      _               _   _               _____          
	|  ____|  | |                   | |        / ____|    | |             | | (_)             |  __ \         
	| |__   __| |_   _  __ _ _ __ __| | ___   | (___   ___| |__   __ _ ___| |_ _  __ _ _ __   | |__) |_ _ ____
	|  __| / _` | | | |/ _` | '__/ _` |/ _ \   \___ \ / _ \ '_ \ / _` / __| __| |/ _` | '_ \  |  ___/ _` |_  /
	| |___| (_| | |_| | (_| | | | (_| | (_) |  ____) |  __/ |_) | (_| \__ \ |_| | (_| | | | | | |  | (_| |/ / 
	|______\__,_|\__,_|\__,_|_|  \__,_|\___/  |_____/ \___|_.__/ \__,_|___/\__|_|\__,_|_| |_| |_|   \__,_/___|
	
*/

$(document).ready(function () {

    // Gear Carousel
    $('#gearCarousel').carousel({
        interval: 5000
    });

    $('#carouselControl').click(function () {

        if ($('#carouselControl').hasClass('paused')) {
            $('#gearCarousel').carousel('cycle');
            $('#carouselControl').text('Pause');
        } else {
            $('#gearCarousel').carousel('pause');
            $('#carouselControl').text('Play');
        }

        $('#carouselControl').toggleClass('paused');
    });

    // Tent Carousel
    $('#tentCarousel').carousel({
        interval: 5000
    });

    $('#carouselControl').click(function () {

        if ($('#carouselControl').hasClass('paused')) {
            $('#tentCarousel').carousel('cycle');
            $('#carouselControl').text('Pause');
        } else {
            $('#tentCarousel').carousel('pause');
            $('#carouselControl').text('Play');
        }

        $('#carouselControl').toggleClass('paused');
    });

    // Orders Carousel 
    $('#ordersCarousel').carousel({
        interval: 5000
    });

    $('#carouselControl').click(function () {

        if ($('#carouselControl').hasClass('paused')) {
            $('#ordersCarousel').carousel('cycle');
            $('#carouselControl').text('Pause');
        } else {
            $('#ordersCarousel').carousel('pause');
            $('#carouselControl').text('Play');
        }

        $('#carouselControl').toggleClass('paused');
    });

    // Carousel Post 1
    $('#carouselPost1').carousel({
        interval: 5000
    });

    $('#carouselControl').click(function () {

        if ($('#carouselControl').hasClass('paused')) {
            $('#carouselPost1').carousel('cycle');
            $('#carouselControl').text('Pause');
        } else {
            $('#carouselPost1').carousel('pause');
            $('#carouselControl').text('Play');
        }

        $('#carouselControl').toggleClass('paused');
    });

    // Carousel Post 2
    $('#carouselPost2').carousel({
        interval: 5000
    });

    $('#carouselControl').click(function () {

        if ($('#carouselControl').hasClass('paused')) {
            $('#carouselPost2').carousel('cycle');
            $('#carouselControl').text('Pause');
        } else {
            $('#carouselPost2').carousel('pause');
            $('#carouselControl').text('Play');
        }

        $('#carouselControl').toggleClass('paused');
    });

    // Joshua Tree Modal
    $('#modalLauncher1').click(function () {
        $('#JoshuaTreeModal').modal({
            backdrop: true
        });
    });

    // Mount Lemmon Modal
    $('#modalLauncher2').click(function () {
        $('#MountLemmonModal').modal({
            backdrop: true
        });
    });

    // Russian River Modal
    $('#modalLauncher3').click(function () {
        $('#RussianRiverModal').modal({
            backdrop: true
        });
    });

    // Shopping Cart
    let carts = document.querySelectorAll('.add-cart');

    let products = [{
            name: 'Orange Tent',
            tag: 'tent1',
            price: 15,
            inCart: 0
        },
        {
            name: 'Hard Wear Tent',
            tag: 'tent2',
            price: 14,
            inCart: 0
        },
        {
            name: 'Blue Tent',
            tag: 'tent3',
            price: 12,
            inCart: 0
        },
        {
            name: 'Mountain Tent',
            tag: 'tent4',
            price: 17,
            inCart: 0
        },
        {
            name: 'Yellow Tent',
            tag: 'tent5',
            price: 16,
            inCart: 0
        },
        {
            name: 'Modern Tent',
            tag: 'tent6',
            price: 20,
            inCart: 0
        },
        {
            name: 'Small Tent',
            tag: 'tent7',
            price: 10,
            inCart: 0
        },
        {
            name: 'Quechua Tent',
            tag: 'tent8',
            price: 11,
            inCart: 0
        }
    ];

    for (let i = 0; i < carts.length; i++) {
        carts[i].addEventListener('click', () => {
            cartNumbers(products[i]);
            totalCost(products[i]);
        });
    }

    function onLoadCartNumbers() {
        let productNumbers = localStorage.getItem('cartNumbers');
        if (productNumbers) {
            document.querySelector('.cart span').textContent = productNumbers;
        }
    }

    function cartNumbers(product, action) {
        let productNumbers = localStorage.getItem('cartNumbers');
        productNumbers = parseInt(productNumbers);

        let cartItems = localStorage.getItem('productsInCart');
        cartItems = JSON.parse(cartItems);

        if (action) {
            localStorage.setItem("cartNumbers", productNumbers - 1);
            document.querySelector('.cart span').textContent = productNumbers - 1;
            console.log("action running");
        } else if (productNumbers) {
            localStorage.setItem("cartNumbers", productNumbers + 1);
            document.querySelector('.cart span').textContent = productNumbers + 1;
        } else {
            localStorage.setItem("cartNumbers", 1);
            document.querySelector('.cart span').textContent = 1;
        }
        setItems(product);
    }

    function setItems(product) {
        // let productNumbers = localStorage.getItem('cartNumbers');
        // productNumbers = parseInt(productNumbers);
        let cartItems = localStorage.getItem('productsInCart');
        cartItems = JSON.parse(cartItems);

        if (cartItems != null) {
            let currentProduct = product.tag;

            if (cartItems[currentProduct] == undefined) {
                cartItems = {
                    ...cartItems,
                    [currentProduct]: product
                }
            }
            cartItems[currentProduct].inCart += 1;

        } else {
            product.inCart = 1;
            cartItems = {
                [product.tag]: product
            };
        }

        localStorage.setItem('productsInCart', JSON.stringify(cartItems));
    }

    function totalCost(product, action) {
        let cart = localStorage.getItem("totalCost");

        if (action) {
            cart = parseInt(cart);

            localStorage.setItem("totalCost", cart - product.price);
        } else if (cart != null) {

            cart = parseInt(cart);
            localStorage.setItem("totalCost", cart + product.price);

        } else {
            localStorage.setItem("totalCost", product.price);
        }
    }

    function displayCart() {
        let cartItems = localStorage.getItem('productsInCart');
        cartItems = JSON.parse(cartItems);

        let cart = localStorage.getItem("totalCost");
        cart = parseInt(cart);

        let productContainer = document.querySelector('.products');

        if (cartItems && productContainer) {
            productContainer.innerHTML = '';
            Object.values(cartItems).map((item, index) => {
                productContainer.innerHTML +=
                    `<div class="product"><ion-icon name="close-circle"></ion-icon><img src="../assets/images/tents/1x1/${item.tag}.jpg" />
                <span class="sm-hide">${item.name}</span>
            </div>
            <div class="price sm-hide">$${item.price}.00</div>
            <div class="quantity">
                <ion-icon class="decrease " name="arrow-dropleft-circle"></ion-icon>
                    <span>${item.inCart}</span>
                <ion-icon class="increase" name="arrow-dropright-circle"></ion-icon>   
            </div>
            <div class="total">$${item.inCart * item.price}.00</div>`;
            });

            productContainer.innerHTML += `
            <div class="basketTotalContainer">
                <h4 class="basketTotalTitle">Total</h4>
                <h4 class="basketTotal">$${cart}.00</h4>
            </div>`

            deleteButtons();
            manageQuantity();
        }
    }

    function manageQuantity() {
        let decreaseButtons = document.querySelectorAll('.decrease');
        let increaseButtons = document.querySelectorAll('.increase');
        let currentQuantity = 0;
        let currentProduct = '';
        let cartItems = localStorage.getItem('productsInCart');
        cartItems = JSON.parse(cartItems);

        for (let i = 0; i < increaseButtons.length; i++) {
            decreaseButtons[i].addEventListener('click', () => {
                console.log(cartItems);
                currentQuantity = decreaseButtons[i].parentElement.querySelector('span').textContent;
                console.log(currentQuantity);
                currentProduct = decreaseButtons[i].parentElement.previousElementSibling.previousElementSibling.querySelector('span').textContent.toLocaleLowerCase().replace(/ /g, '').trim();
                console.log(currentProduct);

                if (cartItems[currentProduct].inCart > 1) {
                    cartItems[currentProduct].inCart -= 1;
                    cartNumbers(cartItems[currentProduct], "decrease");
                    totalCost(cartItems[currentProduct], "decrease");
                    localStorage.setItem('productsInCart', JSON.stringify(cartItems));
                    displayCart();
                }
            });

            increaseButtons[i].addEventListener('click', () => {
                console.log(cartItems);
                currentQuantity = increaseButtons[i].parentElement.querySelector('span').textContent;
                console.log(currentQuantity);
                currentProduct = increaseButtons[i].parentElement.previousElementSibling.previousElementSibling.querySelector('span').textContent.toLocaleLowerCase().replace(/ /g, '').trim();
                console.log(currentProduct);

                cartItems[currentProduct].inCart += 1;
                cartNumbers(cartItems[currentProduct]);
                totalCost(cartItems[currentProduct]);
                localStorage.setItem('productsInCart', JSON.stringify(cartItems));
                displayCart();
            });
        }
    }

    function deleteButtons() {
        let deleteButtons = document.querySelectorAll('.product ion-icon');
        let productNumbers = localStorage.getItem('cartNumbers');
        let cartCost = localStorage.getItem("totalCost");
        let cartItems = localStorage.getItem('productsInCart');
        cartItems = JSON.parse(cartItems);
        let productName;
        console.log(cartItems);

        for (let i = 0; i < deleteButtons.length; i++) {
            deleteButtons[i].addEventListener('click', () => {
                productName = deleteButtons[i].parentElement.textContent.toLocaleLowerCase().replace(/ /g, '').trim();

                localStorage.setItem('cartNumbers', productNumbers - cartItems[productName].inCart);
                localStorage.setItem('totalCost', cartCost - (cartItems[productName].price * cartItems[productName].inCart));

                delete cartItems[productName];
                localStorage.setItem('productsInCart', JSON.stringify(cartItems));

                displayCart();
                onLoadCartNumbers();
            })
        }
    }

    onLoadCartNumbers();
    displayCart();
}); //End Ready

//Form

//Navigation Buttons with Show and Hide Functionality
$("form").hide();
$(".btn2").hide();
$(".btn1").click(function () {
    $("form").show();
    $(".btn1").hide();
    $(".btn2").show();
    $(".container-products").hide();
    $(".billing").hide();
    $(".buy").hide();
    $(".payment").hide();
});
$(".btn2").click(function () {
    $("form").hide();
    $(".btn2").hide();
    $(".btn1").show();
    $(".container-products").show();
});
$(".btn4").click(function () {
    $(".shipping").show();
    $(".billing").hide();
    $(".payment").hide();
    $(".btn2").show();
    $(".btn4").hide();
    $(".btn5").hide();
});
$(".btn5").click(function () {
    $(".payment").show();
    $(".billing").hide();
    $(".btn4").hide();
    $(".btn5").hide();
    $(".btn6").show();
    $(".buy").show();
});
$(".btn6").click(function () {
    $(".payment").hide();
    $(".billing").show();
    $(".btn4").show();
    $(".btn5").show();
    $(".btn6").hide();
    $(".buy").hide();
});

//Copy and Clear Form Fields 
function copyInfo(form) {
    var checked = form.inlineCheckbox1.checked;
    form.validationFirstNameB.value = checked ? form.validationFirstName.value : "";
    form.validationLastNameB.value = checked ? form.validationLastName.value : "";
    form.validationAddressB.value = checked ? form.validationAddress.value : "";
    form.validationAddress2B.value = checked ? form.validationAddress2.value : "";
    form.validationCityB.value = checked ? form.validationCity.value : "";
    form.validationStateB.value = checked ? form.validationState.value : "";
    form.validationZipB.value = checked ? form.validationZip.value : "";
}
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict';
    window.addEventListener('load', function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
                $(".btn3").click(function () {
                    $(".shipping").hide();
                    $(".billing").show();
                    $(".payment").hide();
                    $(".btn2").hide();
                    $(".btn4").show();
                    $(".btn5").show();
                });
            }, false);
        });
    }, false);
})();