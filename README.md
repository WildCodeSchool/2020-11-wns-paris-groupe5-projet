# 2020-11-wns-paris-groupe5-projet

## BACK-END
### Créer un dossier config dans back
Ensuite créer un fichier dev.env et un ficher test.env  
Voici ce que peut par exemple contenir le fichier dev.env :  
```
Pour dev.env 
DB_HOST=localhost  
DB_USER=dbUser  
DB_PASS=databasepassword  
GMAIL_EMAIL=gmailSender  
GMAIL_PASS=emailpassword  
SMS_USER=identifiant  
SMS_PASS=motDePasse  
JWT_SECRET=justUnLongString  
MONGODB_URL=mongodb://localhost:27017/Runschool  
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

We can link two containers by creating network 
for example
docker network create api-connexion: this create a network named "api-connexion"
docker run -d --name mongodb --network api-connexion mongo: this runs mongo image connected it with the network
Our mongoose url become this : 'mongodb://host.docker.internal:27017/favorites' 
We use the name "mongodb" replace "localhost"
we can after rebuild and run other image to establish connexion:
docker build -t niass/api .  
docker run --name api-5 --network api-connexion -d -p 5000:5000 niass/api

we can build and run our api image without creating network connection
but localhost will be replaced with host.docker.internal
docker build -t niass/api-5 .
docker run --name api-group5 -d -p 5000:5000 --rm niass/api-5

No need to publish port (port mapping) if in the same network

Tricky  
The react app is not executed inside the container but run in the browser  
That is why by juste putting container name in place of localhost doesn't work even if in same network  
So the name will not be translated by docker when it runs  
Just the development server serving this application runs in the  container but not enough  
I changed it back to localhost for react app   
So we need to pubish port  
docker run --name api-group5  -d -p 5000:5000 --network connexion-api --rm niass/api-5  

We can add volume so do not lose mongo data  
docker run --name mongodb --rm -v data:/data/db -d --network connexion-api  mongo  
/data/db: where the data is inside the container according to mongo image documentation  
data: just a name but not the path of data storage  
We could also add username and password for limiting access  

docker run --name mongodb  -e MONGO_INITDB_ROOT_USERNAME=toto -e MONGO_INITDB_ROOT_PASSWORD=password --rm -v data:/data/db -d --network connexion-api  mongo  
mongodb://mongodb:27017/Runschool =>
mongodb://toto:password@mongodb:27017/Runschool?authSource=admin  

We could also put this in dockerfile with default values:
ENV MONGODB_USERNAME=root  
ENV MONGODB_PASSWORD=secret  
and after change it  
docker run --name mongodb  -e MONGODB_USERNAME=toto -e MONGODB_PASSWORD=password --rm -v data:/data/db -d --network connexion-api  mongo  

connection sting will look like this:  
`mongodb://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@mongodb:27017/Runschool?authSource=admin`  

start api container: 
docker run --name api-group5  -d -p 5000:5000 --network connexion-api --rm niass/api-5  

Here we want to make change and see it inside container but we need the absolute path:  
"/Users/ibra/codes/projects/wcs/2020-11-wns-paris-groupe5-projet/back" we map with container files "/app"  
"-v /app/node_modules" this is just we don't want to overwrite node_modules in container  
docker run --name api-group5 -v /Users/ibra/codes/projects/wcs/2020-11-wns-paris-groupe5-projet/back:/app -v /app/node_modules -d -p 5000:5000 --network connexion-api --rm niass/api-5  

start front container:  
docker run --name frontend-5 --rm -p 3000:3000 -it niass/front-5
We could also bind front end app to get container updated  
docker run -v /Users/ibra/codes/projects/wcs/2020-11-wns-paris-groupe5-projet/front/src:/app/src --name frontend-5 --rm -p 3000:3000  -it niass/front-5