(function () {
  function documentReady (callback) {
    document.addEventListener('DOMContentLoaded', callback, false)
  }

  var cssClassUtil = {
    addClass: function (dom, className) {
      if (!this.hasClass(dom, className)) {
        dom.className = dom.className.trim() + ' ' + className
      }
    },
    removeClass: function (dom, className) {
      var classReg = new RegExp('(^|\\s)' + className + '(\\s|$)')
      dom.className = dom.className.replace(classReg, ' ')
    },
    toggleClass: function (dom, className) {
      if (this.hasClass(dom, className)) {
        this.removeClass(dom, className)
      } else {
        this.addClass(dom, className)
      }
    },
    hasClass: function (dom, className) {
      var classReg = new RegExp('(^|\\s)' + className + '(\\s|$)')
      return dom.className.search(classReg) !== -1
    }
  }

  window.util = {
    documentReady: documentReady,
    cssClassUtil: cssClassUtil
  }
})()
