function telegram(message) {
    UrlFetchApp.fetch('https://api.telegram.org/bot' + config.botToken + "/sendMessage", {
      method: 'post',
      payload: {
          chat_id: config.groupId,
          parse_mode: 'Markdown',
          text: message
      }
    })
}