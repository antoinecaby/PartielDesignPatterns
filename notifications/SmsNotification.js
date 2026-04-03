class SmsNotification {
  constructor(tel) {
    this.tel = tel;
  }

  send(message) {
    console.log(`[SMS] -> ${this.tel} : ${message}`);
  }
}

module.exports = SmsNotification;
