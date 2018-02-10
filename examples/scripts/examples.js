requirejs(['scripts/util.js'], function (util) {

  function menu (menuDom, options) {
    var activeClass = 'menu-item__link--active'
    menuDom.addEventListener('click', function (event) {
      // var doms = menuDom.querySelectorAll('.' + activeClass)
      // doms.forEach(function (dom) {
      //   util.cssClassUtil.removeClass(dom, activeClass)
      // })
      util.cssClassUtil.addClass(event.target, activeClass)
    })
  }

  menu(document.querySelector('.menu'))
})
