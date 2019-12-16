function Admitad(config) {
  
  function authorize(callback) {
    // собираем запрос
    var url = 'https://api.admitad.com/token/?grant_type=client_credentials&client_id=' + config.clientId + '&scope=statistics'
    var options = {
      method: 'post',
      headers: {
        Authorization: 'Basic ' + Utilities.base64Encode(config.clientId + ':' + config.clientSecret),
      }
    }
    // для отладки,[] позволяет вывести несколько значений, посмотреть по Ctrl(Cmd) + Enter
    Logger.log(['=== AUTH REQUEST', url, options])
    // отправляем запрос
    var response = UrlFetchApp.fetch(url, options).getContentText()
    var json = JSON.parse(response)
    Logger.log(['=== AUTH RESPONSE', json])
    // проверяем ответ
    if(json) {
      // сохраняем все токены
      config.expirationTime = (Date.now() + parseInt(json.expires_in) * 1000)
      config.accessToken = json.access_token
      config.refreshToken = json.refresh_token
    } else {
      Logger.log(['Ошибка авторизации', response])
    }
    // callback нужен, чтобы последовательно выполнить еще действие
    return callback()
  }
  
  function refreshToken(callback) {
    if(config.refreshToken) {
      var url = 'https://api.admitad.com/token/'
      var options = {
        method: 'post',
        payload: 'grant_type=refresh_token'
        + '&client_id=' + config.clientId
        + '&refresh_token=' + config.refreshToken
        + '&client_secret=' + config.clientSecret
      }
      Logger.log(['=== REFRESH REQUEST', url, options])
      var response = UrlFetchApp.fetch(url, options).getContentText()
      var json = JSON.parse(response)
      Logger.log(['=== REFRESH RESPONSE', json])
      if(json) {      
        config.expirationTime = (Date.now() + parseInt(json.expires_in) * 1000)
        config.accessToken = json.access_token
        config.refreshToken = json.refresh_token
      } else {
        Logger.log(['Ошибка обновления токена', response])
      }
      return callback()
    }
    else {
      // если refreshToken нет, вызываем обычную авторизацию 
      return authorize(callback)
    }
  }
  
  // начало и конец периода, накопленные данные
  this.actions = function(first, last, data) {
    // если данных еще нет
    data = data || []
    
    // вспомогательная функция для проверки токена
    var actionsHelper = function(){
      var url =
          'https://api.admitad.com/statistics/actions/?date_start=' + first + '&date_end=' + last + '&limit=500&offset=' + data.length
      var options = {
        method: 'get',
        headers: {
          Authorization: 'Bearer ' + config.accessToken,
        },
      }
      var response = UrlFetchApp.fetch(url, options).getContentText()
      var json = JSON.parse(response)
      
      if(json) {  
        var results = json.results
        
        // аккумулируем полученные данные
        data = data.concat(results)
        Logger.log(['=== TOTAL',json._meta.count,' CURRENT ', data.length])
        
        // json._meta.count содержит общее количество строк по запросу
        // проверяем остатки и рекурсивно вызываем при необходимости, отдавая накопленные данные
        return (json._meta.count > data.length) ? this.actions(first, last, data) : data
        
      } else {
        Logger.log(['Ошибка получения actions', response])
      }
      return data
      // привязываем контекст this, чтобы можно было выполнить this.actions()
    }.bind(this)
    
    // обновляем протухший accessToken
    return ((config.expirationTime && config.expirationTime <= Date.now()) || !config.accessToken) ?
      refreshToken(actionsHelper) : actionsHelper()
  }
  
}