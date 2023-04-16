
const html1 = document.querySelector('html');
Array.from(document.getElementsByClassName('pdtimage')).forEach((ele) => {
    let srcOfImg;
    let imgLink;
    // let pdtImg = ele.getElementsByClassName('pdtimage')[0];
    ele.addEventListener('click', (e) => {
        srcOfImg = e.target.src;
        window.location.href = 'sproduct.html'
        const secondLastIndex = srcOfImg.lastIndexOf('/', srcOfImg.lastIndexOf('/') - 1);
        imgLink = srcOfImg.substring(secondLastIndex + 1);
        localStorage.setItem('img_link', imgLink);
    })
})
let index = 0;
let noOfPdt = document.querySelector('.no-of-item');
let noOfPdtMob = document.querySelector('.no-of-item-mob');

index = localStorage.getItem('index');
noOfPdt.innerHTML = index;
noOfPdtMob.innerHTML = index;
if(index == 0){
    noOfPdt.innerHTML = '';
noOfPdtMob.innerHTML =  '';
}
const cartItem =JSON.parse(localStorage.getItem('cartImgLink')) || [];
// cartItem = ;
let popUp = document.querySelector('.pop-up');
Array.from(document.getElementsByClassName('add-cart')).forEach((cart) => {
    
    let srcOfImg;
    let imgLink;
    let parent = cart.parentElement;
    let image = parent.getElementsByClassName('pdtimage')[0];
    cart.addEventListener('click', () => {
        index++;
        localStorage.setItem('index', index);
        noOfPdt.innerHTML = index;
        noOfPdtMob.innerHTML = index;
        srcOfImg = image.src;
        const secondLastIndex = srcOfImg.lastIndexOf('/', srcOfImg.lastIndexOf('/') - 1);
        imgLink = srcOfImg.substring(secondLastIndex + 1);
        cartItem.push(imgLink);
        localStorage.setItem('cartImgLink', JSON.stringify(cartItem));
        html1.classList.add('show');
        popUp.style.right = '32px';
        setTimeout(() =>{
            popUp.style.right = '-300px';
            html1.classList.remove('show');
        }, 2000)

    })
})

