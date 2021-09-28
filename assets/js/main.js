function isAnyPartOfElementInViewport(el) {

    const rect = el.getBoundingClientRect();
    // DOMRect { x: 8, y: 8, width: 100, height: 100, top: 8, right: 108, bottom: 108, left: 8 }
    const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
    const windowWidth = (window.innerWidth || document.documentElement.clientWidth);
    
    // http://stackoverflow.com/questions/325933/determine-whether-two-date-ranges-overlap
    const vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);
    const horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);
    
    return (vertInView && horInView);
}
function addClass(el, className){
    if (el.classList)
        el.classList.add(className);
    else
        el.className += ' ' + className;
}
function removeClass(el, className){
    if (el.classList)
        el.classList.remove(className);
    else
        el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');

}
function hasClass(el, className){
    if (el.classList)
        return el.classList.contains(className);
    else
        return new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
}
function toggleClass(el, className){

    if (el.classList) {
        el.classList.toggle(className);
    } else {
        var classes = el.className.split(' ');
        var existingIndex = classes.indexOf(className);
    
        if (existingIndex >= 0)
        classes.splice(existingIndex, 1);
        else
        classes.push(className);
    
        el.className = classes.join(' ');
    }
  
}
function unactive(){
    allMenuTopics.forEach(el => {
        removeClass(el, 'active');
    });
   
}
function isAnyHeadingVisible(){
    let found = false;
    allHeaders.forEach(el => {
        if (isAnyPartOfElementInViewport(el)){
            found = true;
         }
    });
    return found;
}
function activeCurrentTocItem(){
    allHeaders.forEach(el => {
        if (isAnyPartOfElementInViewport(el)){
            unactive();
            lastHeadingActive = decodeURIComponent(el.getAttribute('id'));
            lastActive = menuFixed.querySelector("[href='#" + lastHeadingActive + "']");
            addClass(lastActive, 'active');
            if (!isAnyPartOfElementInViewport(lastActive)){
                lastActive.scrollIntoView();
            }
        }
    });
}
var menu = document.getElementById("menu");
var menuFixed = document.getElementById("menuFixed");
var topFixed = document.getElementById("topFixed");
var indexFixed = document.getElementById("indexFixed");
var menuContainer =  document.getElementById("menuContainer");
var allHeaders =  document.querySelectorAll('h1, h2, h3, h4, h5, h6');
var allMenuTopics = menuFixed.querySelectorAll('a');
let lastScrollTop = 0;
let lastActive;
let lastHeadingActive;
var backToTop = document.getElementById("back-to-top-link");

window.addEventListener('scroll', function(e) {
    //Mostrar/ocultar el menú
    if (!isAnyPartOfElementInViewport(menu)){
        addClass(menuFixed, "show");
        addClass(topFixed, "show");
        addClass(indexFixed, "show");
        backToTop.style.display = 'inline';
    }else{
        removeClass(menuFixed, "show");
        removeClass(topFixed, "show");
        removeClass(indexFixed, "show");
        backToTop.style.display = 'none';
    }

    //Mostrar en el meńu la opción activa
    var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
    var isAnyVisible = isAnyHeadingVisible();
    
    activeCurrentTocItem();
    //Si estamos yendo hacia arriba y no se ve ninguna heading, hemos de activar el anterior a lastActive
     if ((st <= lastScrollTop) && (!isAnyVisible)) {
        //Elijo el li anterior al actual para activarlo,
        let previousHeader;
        for(var i = 0; i < allHeaders.length; i++){
            if (lastHeadingActive == allHeaders[i].getAttribute("id")){
                break;
            }
            previousHeader = allHeaders[i];
        }
        if (previousHeader){
            unactive();
            var tocItem = menuFixed.querySelector("[href='#" + previousHeader.getAttribute("id") + "']");
            addClass(tocItem, 'active');
            if (!isAnyPartOfElementInViewport(tocItem)){
                tocItem.scrollIntoView();
            }
        }
    }
    lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
   
});

menuFixed.querySelectorAll('li a').forEach(el => {
    el.addEventListener("click", e => {
        e.preventDefault();
        let hash = decodeURIComponent(e.currentTarget.href.split("#")[1]);
        let destination = document.getElementById(hash);
        destination.scrollIntoView({ behavior: 'smooth' })
        window.setTimeout(() =>location.hash = hash, 500);
    });
});

topFixed.querySelector('.toogle').addEventListener("click", e => {
    e.preventDefault();
    let el = e.currentTarget;
    if (hasClass(el, 'expanded')){
        addClass(menuContainer, 'hide-menu');
    }else{
        removeClass(menuContainer, 'hide-menu');
    }
    toggleClass(el, 'expanded');
});

function showMenu() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
const modalTriggers = document.querySelectorAll('.popup-trigger')
const modalCloseTrigger = document.querySelector('.popup-modal__close')
const bodyBlackout = document.querySelector('.body-blackout')
const iframeIndice = document.querySelector('#iframeIndice');

modalTriggers.forEach(trigger => {
  trigger.addEventListener('click', () => {
    const { popupTrigger } = trigger.dataset
    const popupModal = document.querySelector(`[data-popup-modal="${popupTrigger}"]`)
    iframeIndice.classList.add('is--visible')
    popupModal.classList.add('is--visible')
    bodyBlackout.classList.add('is-blacked-out')
    
    popupModal.querySelector('.popup-modal__close').addEventListener('click', () => {
       popupModal.classList.remove('is--visible')
       bodyBlackout.classList.remove('is-blacked-out')
       iframeIndice.classList.remove('is--visible')
    })
    
    bodyBlackout.addEventListener('click', () => {
      // TODO: Turn into a function to close modal
      popupModal.classList.remove('is--visible')
      bodyBlackout.classList.remove('is-blacked-out')
    })
  })
})
