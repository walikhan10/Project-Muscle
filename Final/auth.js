// // $(function){
// //     var firebaseConfig = {
//         apiKey: "AIzaSyDqJV3PB3fDfYUsk8Q2HbnbvE7SoQs-DWE",
//         authDomain: "project-muscle-e3d84.firebaseapp.com",
//         projectId: "project-muscle-e3d84",
//         storageBucket: "project-muscle-e3d84.appspot.com",
//         messagingSenderId: "182910615574",
//         appId: "1:182910615574:web:5645114f6dde5674cd3537",
//         measurementId: "G-EKVRD04K2W"
//       };
// //       // Initialize Firebase
// //       firebase.initializeApp(firebaseConfig);
// //       firebase.analytics();

// //       $""
// // }



(function () {
    
    // Your web app's Firebase configuration
    var firebaseConfig = {
        apiKey: "AIzaSyDqJV3PB3fDfYUsk8Q2HbnbvE7SoQs-DWE",
        authDomain: "project-muscle-e3d84.firebaseapp.com",
        projectId: "project-muscle-e3d84",
        storageBucket: "project-muscle-e3d84.appspot.com",
        messagingSenderId: "182910615574",
        appId: "1:182910615574:web:5645114f6dde5674cd3537",
        measurementId: "G-EKVRD04K2W"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    //Get Elements
    const txtEmail = document.getElementById("txtEmail");
    const txtPassword = document.getElementById("txtPassword");
    const btnLogin = document.getElementById("btnLogin");
    const btnSignup = document.getElementById("btnSignup");

    //Add Login Event
    btnLogin.addEventListener('click', e => {
        const email = txtEmail.value;
        const password = txtPassword.value;

        const auth = firebase.auth();

        //sign in with firebase auth
        auth.signInWithEmailAndPassword(email, password).then(user =>{
            alert("Login Successful :)");
        }).catch(err => {
            alert(err.message);
        });
        
    });

    //Add Signup Event
    btnSignup.addEventListener('click', e => {

        //get email and password
        const email = txtEmail.value;
        const password = txtPassword.value;

        const auth = firebase.auth();

        //sign in with firebase auth
        const promise = auth.createUserWithEmailAndPassword(email, password).then(user => {
            alert("Signup Successful :)")
        }).catch(err => {
            alert(err.message);
        });

    });


}());