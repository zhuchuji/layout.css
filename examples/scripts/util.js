define(function () {
  function documentReady (callback) {
    document.addEventListener('DOMContentLoaded', callback, false)
  }

  function filterToArray () {
    var args = arguments
    var array = Array.prototype.filter.call(args, function (value) {
      return Boolean(value)
    })
    return array
  }

  var cssClassUtil = {
    addClass: function (dom, className) {
      if (!this.hasClass(dom, className)) {
        dom.className = dom.className.trim() + ' ' + className
      }
    },
    removeClass: function (dom, className) {
      while (this.hasClass(dom, className)) {
        var classStartIndex = dom.className.indexOf(className)
        var classEndIndex = classStartIndex + className.length + 1
        dom.className = dom.className.slice(0, classStartIndex + 1) + dom.className.slice(classEndIndex)
      }
    },
    // @Todo check className just for one time
    toggleClass: function (dom, className) {
      if (this.hasClass(dom, className)) {
        this.removeClass(dom, className)
      } else {
        this.addClass(dom, className)
      }
    },
    hasClass: function (dom, className) {
      var classReg = new RegExp('(^|\\s)' + className + '((?=\\s)|$)')
      return dom.className.search(classReg) !== -1
    }
  }

  return {
    documentReady: documentReady,
    cssClassUtil: cssClassUtil
  }
})
