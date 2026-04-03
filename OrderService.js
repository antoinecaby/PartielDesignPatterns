class OrderService {
  constructor(notificationManager) {
    this.notificationManager = notificationManager;
  }

  createOrder(orderId, customerEmail) {
    console.log(`Commande ${orderId} créée`);

    this.notificationManager.notify(
      "order_created",
      `Votre commande ${orderId} a bien été enregistrée.`,
    );
  }

  refusePaiment(orderId) {
    console.log(`Paiement refusé pour la commande ${orderId}`);

    this.notificationManager.notify(
      "payment_refused",
      `Le paiement de la commande ${orderId} a été refusé.`,
    );
  }

  shipOrder(orderId) {
    console.log(`Commande ${orderId} expédiée`);

    this.notificationManager.notify(
      "order_shipped",
      `Votre commande ${orderId} a été expédiée.`,
    );
  }

  highAmountOrder(orderId, amount) {
    console.log(`Commande ${orderId} avec montant élevé : ${amount}€`);

    this.notificationManager.notify(
      "high_value_order",
      `La commande ${orderId} dépasse le seuil avec un montant de ${amount}€.`,
    );
  }
}

module.exports = OrderService;
