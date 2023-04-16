const cartItem = JSON.parse(localStorage.getItem('cartImgLink'));
// console.log(cartItem)
const cartContainer = document.querySelector('.cart-container');
let cart_Item = document.querySelector('.cart-item');
let cartItemE1 = '';
try {
    cartItem.forEach((cart) => {
        //cart this call back function will traverse throung all the index of cartItem
        cartItemE1 += `
        <tr class="cart-item">
                    <td>
                        <img src="img/${cart}" alt="">
                    </td>
                    <td>
                        <p>Cartoon Astronaut T-shirt</p>
                    </td>
                    
                    <td>
                        <input type="number" min="1" value="1" max="10">
                    </td>
                    <td>
                        <p>&#8377 499</p>
                    </td>
                    <td>
                        <i class="fa-solid fa-trash"></i>
                    </td>
                </tr>
        `

    })
}
catch (err) {
    console.log(err);
}
let noOfPdt = document.querySelector('.no-of-item');
let noOfPdtMob = document.querySelector('.no-of-item-mob');
index = localStorage.getItem('index');
noOfPdt.innerHTML = index;
noOfPdtMob.innerHTML = index;
if (index == 0) {
    noOfPdt.innerHTML = '';
    noOfPdtMob.innerHTML = '';
}
cartContainer.innerHTML = cartItemE1;
if (cartContainer.innerHTML === '') {
    cartContainer.innerHTML = '<h3>no item added yet</h3>'
}
const deleteIcons = document.querySelectorAll('.fa-trash');

deleteIcons.forEach((icon) => {
    let srcOfImg;
    let imgLink;
    let parent1 = icon.parentElement;
    let parent2 = parent1.parentElement;
    //parent2 is cart-item
    srcOfImg = parent2.getElementsByTagName('img')[0].src;
    icon.addEventListener('click', (event) => {
        index--;
        noOfPdt.innerHTML = index;
        noOfPdtMob.innerHTML = index;
        localStorage.setItem('index', index);
        const secondLastIndex = srcOfImg.lastIndexOf('/', srcOfImg.lastIndexOf('/') - 1);
        imgLink = srcOfImg.substring(secondLastIndex + 1);

        // Get the image filename from the data-image attribute
        const image = imgLink;
        // console.log(image);
        // Get the cart items from localStorage
        const cartItems = JSON.parse(localStorage.getItem('cartImgLink'));

        // Remove the image from the cart items array
        // if image is product/f3.jpg then filter func will return all the element of array except product/f3.jpg in updatedCartItems
        const updatedCartItems = cartItems.filter((item) => item !== image);

        // Update the cart items in localStorage
        localStorage.setItem('cartImgLink', JSON.stringify(updatedCartItems));

        // Remove the row from the table
        const row = event.target.closest('.cart-item');
        row.remove();
        // localStorage.setItem('cartImgLink', JSON.stringify(cartItem));
    });
});