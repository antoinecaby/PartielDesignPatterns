class InternalNotification {
  constructor(equipe) {
    this.equipe = equipe;
  }

  send(message) {
    console.log(`[INTERNAL] -> équipe ${this.equipe} : ${message}`);
  }
}

module.exports = InternalNotification;
