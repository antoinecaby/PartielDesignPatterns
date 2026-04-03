class NotificationManager {
  constructor() {
    this.listeners = {};
  }

  subscribe(eventName, notification) {
    if (!this.listeners[eventName]) {
      this.listeners[eventName] = [];
    }

    this.listeners[eventName].push(notification);
  }

  notify(eventName, message) {
    const notifications = this.listeners[eventName] || [];

    notifications.forEach((notification) => {
      notification.send(message);
    });
  }
}

module.exports = NotificationManager;
