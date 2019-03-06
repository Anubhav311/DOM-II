// Your code goes here
// //mouseover
// const mainNavigation = document.querySelector('.main-navigation');
// mainNavigation.addEventListener('mouseover', (event) => {
//     mainNavigation.style.backgroundColor = 'red';
// })

// //mouseleave
// mainNavigation.addEventListener('mouseleave', (event) => {
//     mainNavigation.style.backgroundColor = 'white';
// })

// //keydown
// const body = document.querySelector('body'); 
// body.addEventListener('keydown', (event)=> {
//     body.style.backgroundColor = 'red';
// })

// //keyup
// body.addEventListener('keyup', (event)=> {
//     body.style.backgroundColor = 'white';
// })

// //scroll
// window.addEventListener('scroll', (event) => {
//     if(body.style.backgroundColor == 'red') {
//         body.style.backgroundColor = 'white';
//     } else {
//         body.style.backgroundColor = 'red';
//     }
// })

// //drag 
// const imgContent = document.querySelector('.img-content');
// imgContent.addEventListener('dragstart', (event) => {
//     console.log('drag started');
//     setTimeout(() => {
//         imgContent.style.display = 'none';
//     }, 0);
// }) 
// imgContent.addEventListener('dragend', (event) => {
//     console.log('drag ended');
//     setTimeout(() => {
//         imgContent.style.display = 'block';
//     }, 0);
// }) 

// //load
// const footer = document.querySelector('.footer');
// window.addEventListener('load', (event) => {
//     footer.style.backgroundColor = 'red';
// })

// //focus
// const input = document.querySelector('input');
// input.addEventListener('focus', (event) => {
//     input.style.backgroundColor = 'yellow';
// })

// //blur
// input.addEventListener('blur', (event) => {
//     input.style.backgroundColor = 'white';
//     input.style.marginLeft = '0px';
// })

// //resize
// window.addEventListener('resize', (event) => {
//     body.style.backgroundColor = 'yellow';
    
// })

// //select
// input.addEventListener('select', (event) => {
//     input.style.marginLeft = '50px';
// });

// //dblclick
// const button = document.querySelectorAll('.btn');
// button[0].addEventListener('dblclick', (event) => {
//     button[0].style.backgroundColor = 'yellow';
// })
// button[1].addEventListener('dblclick', (event) => {
//     button[1].style.backgroundColor = 'yellow';
// })
// button[2].addEventListener('dblclick', (event) => {
//     button[2].style.backgroundColor = 'yellow';
// })

// //stopPropagation
// const destination = document.querySelector('.destination');
// const contentPick = document. querySelector('.content-pick');

// contentPick.addEventListener('click', (event) => {
//     contentPick.style.backgroundColor = 'green';
// })
// destination.addEventListener('click', (event) => {
//     destination.style.backgroundColor = 'pink';
//     event.stopPropagation();
// })


// const homeLink = document.querySelector('a');
// homeLink.addEventListener('click', (event) => {
//     event.preventDefault();
//     alert('Sorry! default behaviour of this link is disabled')
// })


//GSAP STRETCH
// //load
const footer = document.querySelector('.footer');
window.addEventListener('load', (event) => {
    TweenMax.to(".input", 15, {x:1178});

})



const homeLink = document.querySelector('a');
homeLink.addEventListener('click', (event) => {
    event.preventDefault();
    TweenMax.to("nav", 1, {rotation:360});
})


//dblclick
const button = document.querySelectorAll('.btn');
button[0].addEventListener('dblclick', (event) => {
    TweenMax.to(button[0], 2, {scale: 2, rotation:360});
})
button[1].addEventListener('dblclick', (event) => {
    TweenMax.to(button[1], 2, {scale: 2, rotation:360});
})
button[2].addEventListener('dblclick', (event) => {
    TweenMax.to(button[2], 2, {scale: 2, rotation:360});
})


//drag 
const mainImage = document.querySelector('.main-image');
mainImage.addEventListener('click', (event) => {
    TweenMax.to(mainImage, 0.1, {x:"+=20", yoyo:true, repeat:-1});
    TweenMax.to(mainImage, 0.1, {x:"-=20", yoyo:true, repeat:-1});
}) 
