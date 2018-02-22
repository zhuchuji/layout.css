(function () {
  var moduleRepo = {}
  window.export = function (exportObj) {
    for (var key in exportObj) {
      moduleRepo[key] = exportObj[key]
    }
  }
  window.import = function (importObj) {
    for (var key in importObj) {
      importObj[key] = moduleRepo[key]
    }
  }
})()
