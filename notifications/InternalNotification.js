class InternalNotification {
  constructor(equipe) {
    this.equipe = equipe;
  }

  send(message) {
    console.log(`[Notification Interne] -> équipe ${this.equipe} : ${message}`);
  }
}

module.exports = InternalNotification;
