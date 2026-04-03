const NotificationFactory = require("./notifications/NotificationFactory.js");
const NotificationManager = require("./NotificationManager.js");
const OrderService = require("./OrderService.js");

const notificationManager = new NotificationManager();

const customerEmailNotification = NotificationFactory.create("email", {
  destinataire: "client@exemple.fr",
});

const supportEmailNotification = NotificationFactory.create("email", {
  destinataire: "support@exemple.fr",
});

const customerSmsNotification = NotificationFactory.create("sms", {
  tel: "0102030405",
});

const logisticsInternalNotification = NotificationFactory.create("internal", {
  equipe: "Logistique",
});

notificationManager.subscribe("order_created", customerEmailNotification);
notificationManager.subscribe("payment_refused", supportEmailNotification);
notificationManager.subscribe("order_shipped", customerSmsNotification);
notificationManager.subscribe(
  "high_value_order",
  logisticsInternalNotification,
);

notificationManager.subscribe("order_created", logisticsInternalNotification);

const orderService = new OrderService(notificationManager);

orderService.createOrder("1");
orderService.refusePaiment("2");
orderService.shipOrder("3");
orderService.highAmountOrder("4", 3507409836445);
