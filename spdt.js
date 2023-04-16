

const mainImg = document.getElementById('MainImg');
let imgLink = localStorage.getItem('img_link');

mainImg.src = `img/${imgLink}`
Array.from(document.getElementsByClassName('small-img')).forEach((ele) => {
    ele.addEventListener('click', (e) => {
        mainImg.src = e.target.src;
    })
})

const srcOfImg = mainImg.src;
const secondLastIndex = srcOfImg.lastIndexOf('/', srcOfImg.lastIndexOf('/') - 1);
const mainImgLink = srcOfImg.substring(secondLastIndex + 1);
console.log(mainImgLink)

let index = 0;
let noOfPdt = document.querySelector('.no-of-item');
let noOfPdtMob = document.querySelector('.no-of-item-mob');
index = localStorage.getItem('index');
let popUp = document.querySelector('.pop-up');
noOfPdt.innerHTML = index;
noOfPdtMob.innerHTML = index;
if (index == 0) {
    noOfPdt.innerHTML = '';
    noOfPdtMob.innerHTML = '';
}
const cartItem = JSON.parse(localStorage.getItem('cartImgLink')) || [];
document.getElementById('add-cart').addEventListener('click', () => {
    index++;
    localStorage.setItem('index', index);
    noOfPdt.innerHTML = index;
    noOfPdtMob.innerHTML = index;
    cartItem.push(mainImgLink);
    localStorage.setItem('cartImgLink', JSON.stringify(cartItem));
    popUp.style.right = '32px';
    setTimeout(() => {
        popUp.style.right = '-300px';
    }, 3000)
})

