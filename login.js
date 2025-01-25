 // Firebase Configuration (Replace with your actual Firebase config)
const firebaseConfig = {
    apiKey: "AIzaSyAoqXw_XofcwooxRuKoYbMBjcRVh-R666o",
    authDomain: "vishwanet-2e88a.firebaseapp.com",
    projectId: "vishwanet-2e88a"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Login Handler
document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Redirect to dashboard or home page
            window.location.href = 'dashboard.html';
        })
        .catch((error) => {
            alert(error.message);
        });
});