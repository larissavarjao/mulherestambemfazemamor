var leia = document.querySelectorAll('.leia-mais');
var tit = document.querySelector('.titulo-depoimentos');

Array.prototype.forEach.call(leia, function(item, index, array){
    item.addEventList('click', function(){
        if(index == 0)
            tit.style.color = 'white';
        else if (index == 1)
            tit.style.color = 'pink';
        else if(index == 2)
            tit.style.color = 'blue';
    })
})