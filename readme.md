# Choix des Design Paterns

Pour cet énoncé, on va utilsier plusierus Design Paterns :

## Observer

On va utiliser un Observer car ça va permettre de déclancher plusieurs plusieurs actions quand un même évènement va se déclancher.
Par exemple, quand une commande est crée, on doit pouvoir envoyer plusieurs notifications (Mail, SMS, log, etc...) et à des personnes différrentes

## Strategy

On va utiliser Strategy car on va devoir gérer plusieurs type de notifications différentes (Mail, SMS, etc...).
Chaque canal de notification est différent mais est utilisé de la même façon

## Factory Method

On va utiliser Factory Method car on doit créer différents objets mais en utilisant la même logique, ça évitera de dupliquer la logique à chaque fois que l'on veux créer un nouvel Objet
