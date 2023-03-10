'use strict'

// ------- перемещение при скролле -------------
const animItems = document.querySelectorAll('.rectangle__img');
window.addEventListener('scroll', animOnScroll);
function animOnScroll() {
  for (let index = 0; index < animItems.length; index++) {
    const animItem = animItems[index];
    const animItemHeight = animItem.offsetHeight;
    const animItemOffset = offset(animItem).top;
    const animStart = 4;

    let animItemPoint = window.innerHeight - animItemHeight / animStart;

    if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
      animItem.classList.add('_active');
    } else {
      animItem.classList.remove('_active');
    }
  } 
}

function offset(el) {
  const rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
}



// ------- перемещение картинки в галерее ---------
let list1 = document.querySelectorAll('.gallery1__img');
list1.forEach(item =>{ 
            item.addEventListener('click', (event) =>{
            list1.forEach(el=>{ el.classList.remove('active1'); });
            item.classList.add('active1')
        })
    })

let list2 = document.querySelectorAll('.gallery2__img');
list2.forEach(item =>{ 
            item.addEventListener('click', (event) =>{
            list2.forEach(el=>{ el.classList.remove('active2'); });
            item.classList.add('active2')
        })
    })   


// ------ увеличение картинки из галереи ---------
$(function(){
  $('.gallery__img').click(function(event) {
    var i_path = $(this).attr('src');
    $('body').append('<div id="overlay"></div><div id="magnify"><img src="'+i_path+'"><div id="close-popup"><i></i></div></div>');
    $('#magnify').css({
      left: ($(document).width() - $('#magnify').outerWidth())/2,
            top: ($(window).height() - $('#magnify').outerHeight())/2
    });
    $('#overlay, #magnify').fadeIn('fast');
  });
  
  $('body').on('click', '#close-popup, #overlay', function(event) {
    event.preventDefault();

    $('#overlay, #magnify').fadeOut('fast', function() {
      $('#close-popup, #magnify, #overlay').remove();
    });
  });
});



// ------- дополнительная галерея ---------------

document.querySelector('.gallery__link').onclick = () => {function1(); function2()};
function function1() {
      var element = document.getElementById('gallery2');
      element.classList.contains('hidden') ? element.classList.remove('hidden') : element.classList.add("hidden");
  }
function function2() {
  var el = document.querySelector('.gallery__link');
  el.textContent == 'SEE MORE' ? el.textContent = 'HIDE' : el.textContent = 'SEE MORE';
}



// ------- возврат в начало страницы --------------
const btnUp = {
  el: document.querySelector('.btn-up'),
  show() {
    this.el.classList.remove('btn-up_hide');
  },
  hide() {
    this.el.classList.add('btn-up_hide');
  },
  addEventListener() {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      scrollY > 400 ? this.show() : this.hide();
    });
    document.querySelector('.btn-up').onclick = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }
}

btnUp.addEventListener();
