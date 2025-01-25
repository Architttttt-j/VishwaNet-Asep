 // Firebase Configuration (Replace with your actual Firebase config)
const firebaseConfig = {
    apiKey: "AIzaSyAoqXw_XofcwooxRuKoYbMBjcRVh-R666o",
    authDomain: "vishwanet-2e88a.firebaseapp.com",
    projectId: "vishwanet-2e88a"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Signup Handler
document.getElementById('signupForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('signupUsername').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Update user profile with username
            userCredential.user.updateProfile({
                displayName: username
            });
            
            // Redirect to login page
            window.location.href = 'login.html';
        })
        .catch((error) => {
            alert(error.message);
        });
});