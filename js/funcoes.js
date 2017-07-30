var leia = document.querySelectorAll('.leia-mais');
var tit = document.querySelector('.titulo-depoimentos');
var carol = document.querySelector('.depoimento-carol');
var lari = document.querySelector('.depoimento-lari');
var clara = document.querySelector('.depoimento-clara');
var depoimentos = document.querySelectorAll('.dep-text');
var close = document.querySelectorAll('.close');

var boxcarol = document.querySelector('#box-carol');
var boxlari = document.querySelector('#box-lari');
var boxclara = document.querySelector('#box-clara');



Array.prototype.forEach.call(leia, function(item, index, array){
    item.addEventListener('click', function(){
        if(index == 0){
            boxcarol.style.display = 'none';
            boxlari.style.display = 'none';
            boxclara.style.display = 'none';
            carol.style.display = 'block';
        }
        else if (index == 1){
            boxcarol.style.display = 'none';
            boxlari.style.display = 'none';
            boxclara.style.display = 'none';
            lari.style.display = 'block';
        }
        else if(index == 2){
            boxcarol.style.display = 'none';
            boxlari.style.display = 'none';
            boxclara.style.display = 'none';
            clara.style.display = 'block';
        }
    })
})

Array.prototype.forEach.call(close, function(item, index, array){
    item.addEventListener('click', function(){
        if(index == 0){
            boxcarol.style.display = 'flex';
            boxlari.style.display = 'flex';
            boxclara.style.display = 'flex';
            carol.style.display = 'none';
        }
        else if (index == 1){
            boxcarol.style.display = 'flex';
            boxlari.style.display = 'flex';
            boxclara.style.display = 'flex';
            lari.style.display = 'none';
        }
        else if(index == 2){
            boxcarol.style.display = 'flex';
            boxlari.style.display = 'flex';
            boxclara.style.display = 'flex';
            clara.style.display = 'none';
        }
    })
})

// SCROLL
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

    var menuItems = document.querySelectorAll("nav.nav-header ul li");

	Array.prototype.forEach.call(menuItems, function(item){
        item.addEventListener('click', function(){
            var classes = item.classList;
            var target;
            Array.prototype.forEach.call(classes, function(classe){
                target = classe.split(/-/)[1];
            });
            var to = document.querySelector('#'+target).offsetTop;
            return scrollTo(document.body, to+100, 600);
        }, false);
    });