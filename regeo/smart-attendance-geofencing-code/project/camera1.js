async function startCamera() {
    try {
        mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
        video.srcObject = mediaStream;
        streamActive = true;
        detectMotion();
        startCameraButton.disabled = true;
        stopCameraButton.disabled = false;
        localStorage.setItem("studentPresent", "true");


        // Navigate to default.html after 1 second
        setTimeout(() => {
            window.location.href = 'camera1.html';
        }, 1000);

    } catch (err) {
        console.error("Error accessing the camera: ", err);
        alert("Camera permission denied. Please enable the camera.");
        streamActive = false;
    }
}
