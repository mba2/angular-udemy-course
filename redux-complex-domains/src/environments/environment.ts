// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase : {
    apiKey: "AIzaSyA5ZginPk7lNuTz4b3qaM73mpf1FiCpS-0",
    authDomain: 'oshop-bd325.firebaseapp.com',
    databaseURL: "https://oshop-bd325.firebaseio.com",
    projectId: "oshop-bd325",
    storageBucket: "",
    messagingSenderId: "427011801597"
  },
  firebase.initializeApp(config)
};
