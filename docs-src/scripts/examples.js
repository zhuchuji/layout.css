(function () {
  var menuBtnClass = 'menu__btn'
  var menuMaskClass = 'menu__mask'
  var menuListClass = 'menu__list'
  var menuItemClass = 'menu-item__link'
  var activeClass = menuItemClass + '--active'

  function setActiveMenuItem (menuList, activeIndex) {
    var menuItemDOMs = menuList.querySelectorAll('.' + menuItemClass)
    var activeDOMs = menuList.querySelectorAll('.' + activeClass)

    activeDOMs.forEach(function (DOM) {
      if (util.cssClassUtil.hasClass(DOM, activeClass)) {
        util.cssClassUtil.removeClass(DOM, activeClass)
      }
    })
    util.cssClassUtil.addClass(menuItemDOMs[activeIndex], activeClass)
  }

  function initMenu (menuDOM, options) {
    options = options || {}
    // set default active menu item
    options.activeIndex = 0
    var menuBtn = menuDOM.querySelector('.' + menuBtnClass)
    var menuList = menuDOM.querySelector('.' + menuListClass)
    var menuMask = menuDOM.querySelector('.' + menuMaskClass)

    menuBtn.addEventListener('click', function (event) {
      util.cssClassUtil.toggleClass(menuList, 'menu__list--open')
      util.cssClassUtil.toggleClass(menuMask, 'menu__mask--hidden')
    })

    menuMask.addEventListener('click', function (event) {
      if (event.target === menuMask) {
        util.cssClassUtil.removeClass(menuList, 'menu__list--open')
        util.cssClassUtil.addClass(menuMask, 'menu__mask--hidden')
      }
    })

    menuList.addEventListener('click', function (event) {
      var menuItemDOMs = menuList.querySelectorAll('.' + menuItemClass)

      var activeIndex = Array.prototype.indexOf.call(menuItemDOMs, event.target)
      options.activeIndex = activeIndex
      setActiveMenuItem(menuDOM, activeIndex)
    })



    setActiveMenuItem(menuList, options.activeIndex)
  }

  initMenu(document.querySelector('.menu'))
})()
