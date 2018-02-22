requirejs(['scripts/util.js'], function (util) {
  var menuItemClass = 'menu-item__link'
  var activeClass = menuItemClass + '--active'

  function setActiveMenuItem (menuDOM, activeIndex) {
    var menuItemDOMs = menuDOM.querySelectorAll('.' + menuItemClass)
    var activeDOMs = menuDOM.querySelectorAll('.' + activeClass)

    activeDOMs.forEach(function (DOM) {
      if (util.cssClassUtil.hasClass(DOM, activeClass)) {
        util.cssClassUtil.removeClass(DOM, activeClass)
      }
    })
    util.cssClassUtil.addClass(menuItemDOMs[activeIndex], activeClass)
  }

  function menu (menuDOM, options) {
    options = options || {}
    // set default active menu item
    options.activeIndex = 0

    menuDOM.addEventListener('click', function (event) {
      var menuItemDOMs = menuDOM.querySelectorAll('.' + menuItemClass)
      var activeIndex = Array.prototype.indexOf.call(menuItemDOMs, event.target)
      options.activeIndex = activeIndex
      setActiveMenuItem(menuDOM, activeIndex)
    })
    setActiveMenuItem(menuDOM, options.activeIndex)
  }

  menu(document.querySelector('.menu'))
})
