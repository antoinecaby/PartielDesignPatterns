const EmailNotification = require("./EmailNotifications.js");
const SmsNotification = require("./SmsNotification.js");
const InternalNotification = require("./InternalNotification.js");

class NotificationFactory {
  static create(type, config = {}) {
    if (type === "email") {
      return new EmailNotification(config.destinataire);
    }
    if (type === "sms") {
      return new SmsNotification(config.tel);
    }
    if (type === "internal") {
      return new InternalNotification(config.equipe);
    }
  }
}

module.exports = NotificationFactory;
