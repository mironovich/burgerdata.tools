function Oleg() {
  // помощницы для красивостей
  function r(num) {
    return Math.floor(num)
  }
  function p(num) {
    return ' (' + Math.floor(num * 100) + '%)'
  }

  var data = []
  var admitad = new Admitad(config)

  // достаем последние 7 дней
  var yesterday = new Date(new Date().setDate(new Date().getDate() - 1))
  var _8days_ago = new Date(new Date().setDate(new Date().getDate() - 8))
  // Utilities - приблуда Apps Script с полезными штуками
  data = admitad.actions(
    Utilities.formatDate(_8days_ago, 'GMT+3', 'dd.MM.yyyy'),
    Utilities.formatDate(yesterday, 'GMT+3', 'dd.MM.yyyy')
  )

  var df1 = new Dataframe(data)
  var tr1 = df1.transactions()
  var re1 = df1.revenue()

  // предыдущие 7 дней для сравнения
  var _9days_ago = new Date(new Date().setDate(new Date().getDate() - 9))
  var _16days_ago = new Date(new Date().setDate(new Date().getDate() - 16))
  data = admitad.actions(
    Utilities.formatDate(_16days_ago, 'GMT+3', 'dd.MM.yyyy'),
    Utilities.formatDate(_9days_ago, 'GMT+3', 'dd.MM.yyyy')
  )

  var df2 = new Dataframe(data)
  var tr2 = df2.transactions()
  var re2 = df2.revenue()

  // собираем соообщение
  var message =
    '\n*Last 7, total*' +
    '\n' +
    '\n*Orders*: ' +
    tr1 +
    p(tr1 / tr2 - 1) +
    '\n*Revenue*: ' +
    r(re1) +
    p(re1 / re2 - 1)

  // отправляем сообщение
  telegram(message)
}