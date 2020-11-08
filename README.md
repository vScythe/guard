## Opstelling

_Vereist [Node.js] (nodejs.org) v12 of hoger_

 1.  Download of kloon deze repository

 2.  Installeer de vereiste afhankelijkheden met behulp van `npm install` in de repository-map

 3.  Maak een .env-bestand en voeg er `BOT_TOKEN = <TOKEN>` aan toe. (Vervang \ <TOKEN \> naar je TOKEN), of verander in index.js `client.login(process.env.BOT_TOKEN);` naar `client.login("BOT TOKEN");`

 4.  Configureer `config.js` naar je persoonlijke voorkeuren

 5.  Voer `npm start` of `node .` uit om de bot te starten

 6.  Zorg ervoor dat de hoogste rol die de bot heeft hoger is dan die van anderen, zodat deze hun rollen kan verwijderen

## Commando's

 `g! prefix [prefix]`  Toont het huidige voorvoegsel, wijzigt het voorvoegsel indien gespecificeerd

 `g! limieten [index] [waarde]`  Geeft de limieten weer, wijzigt de waarde van een index indien gespecificeerd

 `g! reset [type]`  Reset de gespecificeerde gegevens of verzameling

 `g! recent [ID]`  Toont recente moderatie-acties die de limieten van de bot kunnen activeren

 `g! log [#channel]`  Wijst het logboekkanaal toe voor acties en limietwijzigingen