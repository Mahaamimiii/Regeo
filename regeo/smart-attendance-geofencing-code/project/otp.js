document.addEventListener("DOMContentLoaded", () => {
    const inputs = document.querySelectorAll(".otp-card-inputs input");
    const verifyBtn = document.getElementById("verify-btn");

    // Auto move to next input field
    inputs.forEach((input, index) => {
        input.addEventListener("input", (e) => {
            if (e.target.value && index < inputs.length - 1) {
                inputs[index + 1].focus();
            }
        });

        // Handle backspace navigation
        input.addEventListener("keydown", (e) => {
            if (e.key === "Backspace" && index > 0 && !e.target.value) {
                inputs[index - 1].focus();
            }
        });
    });

    // OTP Verification Logic
    verifyBtn.addEventListener("click", () => {
        let otpCode = "";
        inputs.forEach(input => otpCode += input.value);
        
        // Simulated correct OTP
        const correctOTP = "12345"; 

        if (otpCode === correctOTP) {
            alert("✅ OTP Verified Successfully!");
            window.location.href = "markin.html"; // Redirect to markin.html
        } else {
            alert("❌ Invalid OTP. Please try again.");
        }
    });
});
