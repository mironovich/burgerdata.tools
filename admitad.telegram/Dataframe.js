function Dataframe(data) {
  this.transactions = function(status){
    // по умолчанию считаем все транзакции, а можно передать и approved|pending
    status = status || '.*'
    
    // вспомогательная функция для подсчета уников
    function countDistinct(arr) { 
      var counts = {};
      for (var i = 0; i < arr.length; i++) {
        counts[arr[i]] = 1 + (counts[arr[i]] || 0);
      }
      return Object.keys(counts).length
    }
    
    var orders = data
      // фильтруем только нужные статусы
      .filter(function(order){
        return order.status.match(status)
      })
      .map(function(t){
        // достаём номера заказов
        return t.order_id
      })
      
    return countDistinct(orders)
  }
  
  this.revenue = function(status){
    status = status || '.*' 
    
    return data
      .filter(function(order){
        return order.status.match(status)
      })
      .reduce(function(s, c){
        var t = c.payment * config[c.currency]
        return s + t
      }, 0)
  }
  
}
