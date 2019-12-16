var config = {
  clientId: '413a534538df8f2ckjwia8d7725c23b',
  clientSecret: '2d3eab98386dd8wkwe84j7e2a71b6b',
  USD: 66,
  EUR: 75,
  RUB: 1,
  botToken: '862713267:AAHavQqWrRTsktlDMeU5SGFgorkwkcwWRtYc',
  groupId: '289798293',

  get accessToken() {
    if (!this._accessToken) {
      var scriptProperties = PropertiesService.getScriptProperties()
      this._accessToken = scriptProperties.getProperty('admitad.accessToken')
    }
    return this._accessToken
  },
  set accessToken(value) {
    var scriptProperties = PropertiesService.getScriptProperties()
    scriptProperties.setProperty('admitad.accessToken', value)
    this._accessToken = value
  },

  get refreshToken() {
    if (!this._refreshToken) {
      var scriptProperties = PropertiesService.getScriptProperties()
      this._refreshToken = scriptProperties.getProperty('admitad.refreshToken')
    }
    return this._refreshToken
  },
  set refreshToken(value) {
    var scriptProperties = PropertiesService.getScriptProperties()
    scriptProperties.setProperty('admitad.refreshToken', value)
    this._refreshToken = value
  },

  get expirationTime() {
    if (!this._expirationTime) {
      var scriptProperties = PropertiesService.getScriptProperties()
      this._expirationTime = scriptProperties.getProperty(
        'admitad.expirationTime'
      )
    }
    return this._expirationTime
  },
  set expirationTime(value) {
    var scriptProperties = PropertiesService.getScriptProperties()
    scriptProperties.setProperty('admitad.expirationTime', value)
    this._expirationTime = value
  },
}
