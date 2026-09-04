/* =====================================================================
   NICK SMILES — Songwunsch · Konfiguration
   Diese Datei ist die einzige Stelle, an der etwas geändert werden muss.

   root      Zweig in der Datenbank. Alle Wünsche von Nick liegen darunter,
             getrennt von jedem anderen DJ. NICHT ändern, sobald QR-Codes
             gedruckt sind.
   panelKey  Das DJ-Panel hat KEIN Passwort. Dieser Schlüssel in der Adresse
             ist der einzige Schutz:  admin.html?k=<panelKey>
             Ändern = der alte Link funktioniert sofort nicht mehr.
   ===================================================================== */

window.NICK = {

  name: 'NICK SMILES',

  root: 'djs/nick',

  panelKey: 'EdIFUak9tnMfFp03',

  firebase: {
    apiKey: "AIzaSyBQtX7IpDsvhnYTRjyd6U07O0I4kkMYr3w",
    authDomain: "djozkan-b30e6.firebaseapp.com",
    databaseURL: "https://djozkan-b30e6-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "djozkan-b30e6",
    storageBucket: "djozkan-b30e6.firebasestorage.app",
    messagingSenderId: "699205281796",
    appId: "1:699205281796:web:14d4c3d164ab8fcbc16d51"
  }

};
