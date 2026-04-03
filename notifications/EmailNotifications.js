class EmailNotification {
  constructor(destinataire) {
    this.destinataire = destinataire;
  }

  send(message) {
    console.log(`[MAIL] -> ${this.destinataire} : ${message}`);
  }
}

module.exports = EmailNotification;
