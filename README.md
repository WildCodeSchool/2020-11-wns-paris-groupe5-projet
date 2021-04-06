# 2020-11-wns-paris-groupe5-projet

## BACK-END
### Créer un dossier config dans back
Ensuite créer un fichier dev.env,  un ficher test.env et mongo.env 
Voici ce que peut par exemple contenir le fichier dev.env :  

Pour dev.env 
```
DB_HOST=localhost  
DB_USER=dbUser  
DB_PASS=databasepassword  
GMAIL_EMAIL=gmailSender  
GMAIL_PASS=emailpassword  
SMS_USER=identifiant  
SMS_PASS=motDePasse  
JWT_SECRET=justUnLongString  

MONGODB_URL=mongodb
MONGODB_USERNAME=jeVousLenvoieEnPrivé
MONGODB_PASSWORD=jeVousLenvoieEnPrivé   
```

Pour mongo.env 
```
MONGO_INITDB_ROOT_USERNAME=jeVousLenvoieEnPrivé
MONGO_INITDB_ROOT_PASSWORD=jeVousLenvoieEnPrivé 
```

PS: Pensez à mettre les vraies valeurs après les "="  

Le fichier test.env permettra d'utiliser une autre base de données lors des tests  
Vous pourrez par exemple changer l'url mongodb MONGODB_URL=mongodb://localhost:27017/test-db  



## Envoi de mail à partir de son compte Gmail
Aller sur le 2e lien et autoriser les applications moins sécurisées pour pouvoir utiliser Nodemailer avec son Gmail <br />

Lien vers la documentation:  [Documentation](https://nodemailer.com/usage/using-gmail/)<br />
Lien vers l'autorisation Gmail: [Cliquez ici](https://myaccount.google.com/lesssecureapps?pli=1&rapt=AEjHL4NAoSKWSNIcnWC5jSphQocegrE2Tq3vJvAfzBhwtGpxXAHxhQsyBcYfJAN1VL9fy4w6GKoCFPYCTcA53mh5UHdhAxGu_g)

## Envoi de sms
Créer un compte gratuitement [en cliquant ici](https://dashboard.d7networks.com/sms-api)  

Récupérer son API Username et API Password<br />

Dans le fichier config/.env ajouter:<br />
SMS_USER="API Username"<br />
SMS_PASS="API Password"

## Installer les packages 
```
cd back
npm install

```
## Pour démarrer le back 
```
npm run dev

```
## Pour lancer les tests 
```
npm run test

```
## Docker
```
1 - Lancer docker sur votre machine
2 - Commande dans le terminal : docker-compose up --build 
```
