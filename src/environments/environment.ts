// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyBSTB-BCv4poUpxOBeC_KUOzYHLVrogJPI",
    authDomain: "heroesapp-807f7.firebaseapp.com",
    databaseURL: "https://heroesapp-807f7.firebaseio.com",
    projectId: "heroesapp-807f7",
    storageBucket: "heroesapp-807f7.appspot.com",
    messagingSenderId: "456607380006"
  }
};
