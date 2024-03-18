# Zusammenfassung Projekt 6: Tourio-App

In diesem Projekt werden Sie eine Tourio-App erstellen, den besten Freund aller Reisenden: Sie zeigt Sehenswürdigkeiten an, die Sie besuchen möchten, und ermöglicht es Ihnen, diese zu bearbeiten.

## Aufgabe

### Daten lesen

- Richten Sie eine Datenbank ein; verwenden Sie die Datei lib/db.json, um Beispieldaten einzufügen.
- Ersetzen Sie in pages/api/index.js die Variable places, die aus lib/db.js importiert wird, durch eine GET-Anfrage an Ihre Datenbank.
- Tun Sie dasselbe in pages/api/[id]/index.js für die Detailseite.

### Formular erstellen

- Schreiben Sie in pages/create.js die Funktion addPlace, um eine POST-Anfrage zu starten.
- Schreiben Sie die POST-API-Route in pages/api/places/index.js.
- beim Absenden des Formulars sollte der Benutzer auf die Homepage / umgeleitet werden.

### Eintrag aktualisieren

- In pages/places/[id]/edit.js schreiben Sie die Funktion editPlace, um eine PATCH-Anfrage zu starten.
- Schreiben Sie die PATCH-API-Route in pages/api/[id]/index.js.

### Eintrag löschen

- In pages/places/[id].index.js schreiben Sie die Funktion deletePlace, um eine DELETE-Anfrage zu starten.
- Schreiben Sie die DELETE-API-Route in pages/api/places/[id]/index.js.

### Bereitstellen auf Vercel

Bereiten Sie Ihre App für Vercel vor und stellen Sie sicher, dass die Bereitstellung auf die Cloud-Datenbank mit Hilfe von Umgebungsvariablen zugreifen kann.

#### Vercel und MongoDB Atlas (Umgebungsvariablen)

Beim Bereitstellen einer Anwendung auf Vercel kann die App nicht sofort auf Ihre Cloud-Datenbank zugreifen. Dies liegt daran, dass die Authentifizierungsinformationen (Benutzer und Passwort) in einer .env.local-Datei gespeichert sind, die nur für Ihre lokale Entwicklungsumgebung verfügbar ist. Sie können diese Datei nicht auf Vercel hochladen, da sie sensible Informationen enthält. Deshalb haben wir die .env.local-Datei der .gitignore-Datei hinzugefügt.

Um die App auf Vercel zum Laufen zu bringen, müssen wir die Authentifizierungsinformationen auf eine andere Weise bereitstellen. Hier kommen Umgebungsvariablen ins Spiel. Umgebungsvariablen sind eine Möglichkeit, sensible Informationen auf sichere Weise zu speichern. Weitere Informationen zu Umgebungsvariablen finden Sie in der Vercel-Dokumentation.

Deshalb müssen wir Vercel die Zugriffsdetails bereitstellen.

#### Verbindung von Vercel mit MongoDB Atlas

- Navigieren Sie im Dashboard Ihres Vercel-Projekts zu "Einstellungen".

- Wählen Sie in der linken Navigation "Umgebungsvariablen".

  - Fügen Sie den Schlüssel (MONGODB_URI) und den Wert (mongodb+srv...) hinzu.
  - Aktivieren Sie alle Umgebungen (Produktion, Vorschau und Entwicklung).
    -Klicken Sie auf "Speichern".

- Am Ende dieser Seite sollten Sie jetzt eine neue Umgebungsvariable sehen.

- Deployen Sie Ihre Anwendung neu:

  - Wählen Sie in der Hauptnavigation "Bereitstellungen".
  - Öffnen Sie die drei Punkte neben Ihrer letzten Bereitstellung und wählen Sie "Neu bereitstellen".

- Wenn ein Popup-Fenster erscheint, klicken Sie erneut auf die Schaltfläche "Neu bereitstellen".


    ##### Herzlichen Glückwunsch, Sie sind fertig! Öffnen Sie die Vercel-URL Ihres Projekts, um zu sehen, dass Ihre bereitgestellte Anwendung nun auf die Cloud-Datenbank zugreifen kann.

# Recap Project 6: Tourio App

In this project you will build a Tourio App, the best friend of all travelers: it displays sights you want to visit and lets you edit them.

## Task

### Read Data

- Set up a database; use the [`lib/db.json` file](lib/db.json) to insert sample data.
- In `pages/api/index.js`, replace the `places` variable imported from `lib/db.js` with a `GET` request from your database.
- Do the same in `pages/api/[id]/index.js` for the details page.

### Create Form

- In `pages/create.js`, write the `addPlace` function to start a `POST` request.
- Write the `POST` API route in `pages/api/places/index.js`.
- Submitting the form should redirect the user to the homepage `/`.

### Update Entry

- In `pages/places/[id]/edit.js`, write the `editPlace` function to start a `PATCH` request.
- Write the `PATCH` API route in `pages/api/[id]/index.js`

### Delete Entry

- In `pages/places/[id].index.js`, write the `deletePlace` function to start a `DELETE` request.
- Write the `DELETE` API route in `pages/api/places/[id]/index.js`.

### Deploy to Vercel

Deploy your app to Vercel and make sure the deployment can access the cloud database with the help of environment variables.

#### Vercel and MongoDB Atlas (environment variables)

When deploying an application to Vercel, the app is not immediately able to connect with your cloud database. This is because the authentication information (user and password) is stored in a `.env.local` file which is only available to your local development environment. You can't upload this file to Vercel because it contains sensitive information. This is why we added the `.env.local` file to the `.gitignore` file.

To make the app work on Vercel, we need to provide the authentication information in a different way. This is where environment variables come in. Environment variables are a way to store sensitive information in a secure way. You can read more about environment variables in the [Vercel docs](https://vercel.com/docs/projects/environment-variables).

This is why we need to provide Vercel with the access details.

#### Connecting Vercel with MongoDB Atlas

1. In the dashboard of your Vercel project, navigate to "Settings".

2. In the left-hand navigation, choose "Environment Variables".

   1. Add the key (`MONGODB_URI`) and the value (`mongodb+srv...`)
   2. Tick all environments (Production, Preview, and Development).
   3. Click "Save".

3. At the bottom of this page, you should now see a new environment variable

4. Redeploy your application:

   1. In the main navigation, choose "Deployments".
   2. Open the three dots next to your last deployment and choose "Redeploy".

5. If there's a popup, hit the "Redeploy" button again.

6. Congratulations, you are done! Open the Vercel URL of your project to see that your deployed application has now access to the cloud database.

## Development

### Local Development

To work locally, please install the dependencies using `npm i` first.

Run `npm run dev` to start a development server and open the displayed URL in a browser.

Use `npm run test` to run the tests.

### CodeSandbox Cloud

Select the "Preview: 3000" tab to view this project.

Select the "Tests: logs" tab to view the tests.

> The `npm run dev` and `npm run test` scripts run automatically.

### Scripts

You can use the following commands:

- `npm run dev` to start a development server
- `npm run build` to build the project
- `npm run start` to start a production server
- `npm run test` to run the tests
- `npm run lint` to run the linter

## Resources

- [MongoDB Atlas Tutorial](https://www.mongodb.com/basics/mongodb-atlas-tutorial)
- [Environment Variables (Vercel Docs)](https://vercel.com/docs/projects/environment-variables)
