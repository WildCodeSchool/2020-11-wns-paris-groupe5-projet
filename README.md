# 2020-11-wns-paris-groupe5-projet

## Create env file at the root to send email notifications
DB_USER=dbUser <br />
DB_PASS=databasepassword <br />
GMAIL_EMAIL=gmailSender <br />
GMAIL_PASS=emailpassword <br />


## Envoi de mail à partir de son gmail
Il faut aller sur ce lien et autoriser les applications moins sécurisées pour pouvoir utiliser nodemailer avec son gmail <br />
cf doc:  [doc](https://nodemailer.com/usage/using-gmail/)

https://myaccount.google.com/lesssecureapps?pli=1&rapt=AEjHL4NAoSKWSNIcnWC5jSphQocegrE2Tq3vJvAfzBhwtGpxXAHxhQsyBcYfJAN1VL9fy4w6GKoCFPYCTcA53mh5UHdhAxGu_g

## Envoi de sms
Créer un compte gratuitement [ici](https://dashboard.d7networks.com/sms-api)
Récupérer son API Username et API Password<br />
Dans le .env ajouter :<br />
SMS_USER="API Username"<br />
SMS_PASS="API Password"