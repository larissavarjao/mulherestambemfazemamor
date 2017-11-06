var menuItems = document.querySelectorAll("nav.nav-header ul li");
var leia = document.querySelectorAll('.leia-mais');
var tit = document.querySelector('.titulo-depoimentos');
var carol = document.querySelector('#carol');
var lari = document.querySelector('#larissa');
var clara = document.querySelector('#clara');
var depoimentos = document.querySelectorAll('.dep-text');
var close = document.querySelectorAll('.close');
var boxcarol = document.querySelector('#box-carol');
var boxlari = document.querySelector('#box-lari');
var boxclara = document.querySelector('#box-clara');
var imagem1 = document.querySelector('#slide-1');
var imagem2 = document.querySelector('#slide-2');
var mtfa = document.querySelector('#carousel-1');
var slide2 = document.querySelector('#carousel-2');
var counter = 0;

Array.prototype.forEach.call(leia, function(item, index, array){
    item.addEventListener('click', function(){
        if(index == 0){
            activeDepoimentoCarol();
        }
        else if (index == 1){
            activeDepoimentoLari();
        }
        else if(index == 2){
            activeDepoimentoClara();
        }
    })
})

Array.prototype.forEach.call(close, function(item, index, array){
    item.addEventListener('click', function(){
        if(index == 0){
            removeDepoimentoCarol();
        }
        else if (index == 1){
            removeDepoimentoLari();
        }
        else if(index == 2){
            removeDepoimentoClara();
        }
    })
})

Array.prototype.forEach.call(menuItems, function(item){
    item.addEventListener('click', function(){
        var target = item.classList[0];
        console.log(item.classList[0]);
        var to = document.querySelector(target).offsetTop;
        console.log(to);
        console.log(document.body, to, 500);
        return scrollTo(document.body, to, 500);
    }, false);
});

function scrollTo(element, to, duration) {
    if (duration <= 0) return;
    var difference = to - element.scrollTop;
    var perTick = difference / duration * 10;

    setTimeout(function() {
        element.scrollTop = element.scrollTop + perTick;
        if (element.scrollTop === to) return;
        scrollTo(element, to, duration - 10);
    }, 10);
}

function activeDepoimentoCarol(){
    boxcarol.style.display = 'none';
    boxlari.style.display = 'none';
    boxclara.style.display = 'none';
    $(document).ready(function(){
        $(carol).fadeIn(4000);
    }); 
}

function activeDepoimentoLari(){
    boxcarol.style.display = 'none';
    boxlari.style.display = 'none';
    boxclara.style.display = 'none';
    $(document).ready(function(){
        $(lari).fadeIn(4000);
    });
}

function activeDepoimentoClara(){
    boxcarol.style.display = 'none';
    boxlari.style.display = 'none';
    boxclara.style.display = 'none';
    $(document).ready(function(){
        $(clara).fadeIn(4000);
    });
}

function removeDepoimentoCarol(){
    boxcarol.style.display = 'flex';
    boxlari.style.display = 'flex';
    boxclara.style.display = 'flex';
    carol.style.display = 'none';
}

function removeDepoimentoLari(){
    boxcarol.style.display = 'flex';
    boxlari.style.display = 'flex';
    boxclara.style.display = 'flex';
    lari.style.display = 'none';
}

function removeDepoimentoClara(){
    boxcarol.style.display = 'flex';
    boxlari.style.display = 'flex';
    boxclara.style.display = 'flex';
    clara.style.display = 'none';
}


function imagemaparecendo1(){
    imagem1.style.opacity = '1';
    imagem2.style.opacity = '0';
    mtfa.style.opacity = '1';
    slide2.style.opacity = '0';
    imagem1.style.transform = 'scale(1.2)';
    imagem1.style.width = 'cover';
    mtfa.style.transform = 'scale(.5)';
    imagem2.style.transform = 'scale(1)';
    slide2.style.transform = 'scale(1)';
}

function imagemaparecendo2(){
    imagem1.style.opacity = '0';
    imagem2.style.opacity = '1';
    mtfa.style.opacity = '0';
    slide2.style.opacity = '1';
    imagem2.style.transform = 'scale(1.2)';
    slide2.style.transform = 'scale(.5)';
    imagem1.style.transform = 'scale(1)';
    mtfa.style.transform = 'scale(1)';
}

var imagemTransform = setInterval(function slide(){
    if(counter % 19 === 0){
        if(imagem1.style.opacity === '1'){
            imagemaparecendo2();            
        } else {
            imagemaparecendo1(); 
        }
    }
    counter++;
}, 1000);