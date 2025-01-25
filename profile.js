 // profile.js

document.addEventListener("DOMContentLoaded", () => {
    const imageUpload = document.getElementById("imageUpload");
    const profileImage = document.getElementById("profileImage");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const bioInput = document.getElementById("bio");
    const collegeInput = document.getElementById("college");
    const departmentInput = document.getElementById("department");
    const hobbiesInput = document.getElementById("hobbies");
    const clubsInput = document.getElementById("clubs");
    const yearInput = document.getElementById("year");
    const birthdateInput = document.getElementById("birthdate");
    const saveButton = document.getElementById("saveButton");
    const cancelButton = document.getElementById("cancelButton");

    // Load data from localStorage
    function loadProfile() {
        const profileData = JSON.parse(localStorage.getItem("profileData"));
        if (profileData) {
            if (profileData.image) profileImage.src = profileData.image;
            if (profileData.name) nameInput.value = profileData.name;
            if (profileData.email) emailInput.value = profileData.email;
            if (profileData.bio) bioInput.value = profileData.bio;
            if (profileData.college) collegeInput.value = profileData.college;
            if (profileData.department) departmentInput.value = profileData.department;
            if (profileData.hobbies) hobbiesInput.value = profileData.hobbies;
            if (profileData.clubs) clubsInput.value = profileData.clubs;
            if (profileData.year) yearInput.value = profileData.year;
            if (profileData.birthdate) birthdateInput.value = profileData.birthdate;
        }
    }

    // Save data to localStorage
    function saveProfile() {
        const profileData = {
            image: profileImage.src,
            name: nameInput.value,
            email: emailInput.value,
            bio: bioInput.value,
            college: collegeInput.value,
            department: departmentInput.value,
            hobbies: hobbiesInput.value,
            clubs: clubsInput.value,
            year: yearInput.value,
            birthdate: birthdateInput.value,
        };
        localStorage.setItem("profileData", JSON.stringify(profileData));
        alert("Profile saved successfully!");
    }

    // Handle image upload
    imageUpload.addEventListener("change", (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                profileImage.src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    });

    // Save button handler
    saveButton.addEventListener("click", saveProfile);

    // Cancel button handler
    cancelButton.addEventListener("click", () => {
        if (confirm("Are you sure you want to discard your changes?")) {
            loadProfile();
        }
    });

    // Load the profile data on page load
    loadProfile();
});
