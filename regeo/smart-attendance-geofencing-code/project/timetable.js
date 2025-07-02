
        document.addEventListener("DOMContentLoaded", function () {
            let savedAttendance = JSON.parse(localStorage.getItem("attendance")) || {};
        
            // Check if camera1.html detected the student as present
            let studentPresent = localStorage.getItem("studentPresent") === "true";
        
            document.querySelectorAll(".status-button").forEach((button, index) => {
                if (savedAttendance[index + 1] === "Present" || (index === 0 && studentPresent)) {
                    button.classList.remove("absent");
                    button.classList.add("present");
                    button.textContent = "Present";
                    savedAttendance[index + 1] = "Present"; // Save this in localStorage
                } else {
                    button.classList.add("absent");
                    button.textContent = "Absent";
                }
            });
        
            localStorage.setItem("attendance", JSON.stringify(savedAttendance));
        });
        

    checkLocationAndUpdate();
    setInterval(checkAttendanceByTime, 60000); // Check every 60 seconds

// Define the timetable with start and end times
const timetable = [
    { period: 1, start: "10:00", end: "11:00" }
];

// Target location (St. Joseph's College)
const targetLocation = { lat: 13.029010534412746, lon: 80.20376571495048 };
const locationThreshold = 0.01;

function checkAttendanceByTime() {
    let now = new Date();
    let currentTime = now.getHours().toString().padStart(2, "0") + ":" + now.getMinutes().toString().padStart(2, "0");

    timetable.forEach((period, index) => {
        if (currentTime >= period.start && currentTime <= period.end) {
            checkLocationAndUpdate(index + 1); // Check location for current period
        }
    });
}

function checkLocationAndUpdate(currentPeriod) {
    navigator.geolocation.getCurrentPosition(position => {
        const { latitude, longitude } = position.coords;
        const isPresent = Math.abs(latitude - targetLocation.lat) < locationThreshold &&
                          Math.abs(longitude - targetLocation.lon) < locationThreshold;

        let savedAttendance = JSON.parse(localStorage.getItem("attendance")) || {};

        if (currentPeriod && isPresent) {
            let button = document.querySelectorAll(".status-button")[currentPeriod - 1];
            button.classList.remove("absent");
            button.classList.add("present");
            button.textContent = "Present";
            savedAttendance[currentPeriod] = "Present";
        }

        localStorage.setItem("attendance", JSON.stringify(savedAttendance));
    }, () => {
        alert("Location access denied! Unable to verify attendance.");
        

    });
}
