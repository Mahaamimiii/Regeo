document.addEventListener("DOMContentLoaded", function () {
    // Flip Card Logic
    const profileCard = document.getElementById("profileCard");
    const flipButton = document.getElementById("flipButton");
    const flipBackButton = document.getElementById("flipBackButton");

    flipButton.addEventListener("click", function () {
        profileCard.classList.add("flipped");
    });

    flipBackButton.addEventListener("click", function () {
        profileCard.classList.remove("flipped");
    });

    // Profile Picture Upload
    const uploadInput = document.getElementById("uploadPic");
    const profilePic = document.getElementById("profilePic");

    uploadInput.addEventListener("change", function (event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                const imgUrl = e.target.result;
                localStorage.setItem("profilePic", imgUrl); // Save to local storage
                profilePic.src = imgUrl;
            };
            reader.readAsDataURL(file);
        }
    });

    // Load Saved Profile Picture on Refresh
    const savedPic = localStorage.getItem("profilePic");
    if (savedPic) {
        profilePic.src = savedPic;
    }
});
