# angular-firebase
Crea rápidamente una aplicación con AngujarJS y Firebase

## Instalación
#### 1. Clona este repositorio en tu local:
  ```shell
  $ git clone https://github.com/aledroner/angular-firebase.git
  ```

#### 2. Create una cuenta en firebase https://firebase.google.com

#### 3. Create un nuevo proyecto desde la consola de Firebase

#### 4. Conecta Firebase con el frontend de tu aplicación
  1. Click en “Agregar Firebase a tu app web”
  2. Copia el contenido de la ventana emergente SIN LOS TAGS de los CDN y pégalo en `public/app.js`. Debería parecerse a esto:

```javascript
// Initialize Firebase
var config = {
  apiKey: "XXXXXXXXXXXXXXXXXXXXXX",
  authDomain: "XXXXXXXXXXXX.firebaseapp.com",
  databaseURL: "https://XXXXXXXXXXXX.firebaseio.com",
  projectId: "XXXXXXXXXXXX",
  storageBucket: "XXXXXXXXXXXX.appspot.com",
  messagingSenderId: "XXXXXXXXXX"
};
firebase.initializeApp(config);
```
  
## Configuración de la base de datos
Para que funcione correctamente el ejemplo deberás tener una estructura de datos tal que así en tu base de datos de firebase:
```
tu-aplicacion-firebase
|
+-angular
  |
  +-object
    |
    +-nombre: "Alejandro"
```

## Desplegar aplicación
Ahora subiremos los archivos al hosting de firebase

#### 1. Inicializar la aplicación. Deberás estar dentro del directorio raíz de tu app.
  ```shell
  $ firebase init
  ```
  Se iniclializará la consola de FIREBASE. Elige las siguiente opciones:
  * Are you ready to proceed? Yes 
  * Which Firebase CLI features do you want to setup for this folder? Press Space to select features, then Enter to confi rm your choices. Database: Deploy Firebase Realtime Database Rules, Hosting: Configure and deploy Firebase Hosting site
  * Select a default Firebase project for this directory: TU_PROYECTO_FIREBASE
  * What file should be used for Database Rules? database.rules.json
  * What do you want to use as your public directory? public
  * Configure as a single-page app (rewrite all urls to /index.html)? No

#### 2. Despliega la aplicación
  ```shell
  $ firebase deploy
  ```
  Sigue la URL proporcinada para ver tu app desde un hosting de Firebase
   ```shell
  Hosting URL: https://XXXXXXXXXXXXXXXX.firebaseapp.com
  ```

## Créditos
Basado en el [tutorial de David East](https://www.youtube.com/watch?v=LdDwbIEpT4s)
