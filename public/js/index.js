var mybtn = document.getElementById('mybtn');

window.onscroll = function() {scrollFunction()};

function scrollFunction(){
    if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
        mybtn.style.display = 'block';
    }else{
        mybtn.style.display = 'none';
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


// $( window ).on( "load", function() { 
//     $('.count').counterUp({
//         delay:100,
//         time:3000
//     })
// })


