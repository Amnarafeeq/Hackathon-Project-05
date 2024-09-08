// Helper function to generate a random string (for unique IDs)
function generateRandomString(length) {
    if (length === void 0) { length = 8; }
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var result = '';
    for (var i = 0; i < length; i++) {
        var randomIndex = Math.floor(Math.random() * chars.length);
        result += chars[randomIndex];
    }
    return result;
}
// Main script handling form submission and resume functionality
document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("resume-form");
    var resumeDisplay = document.getElementById("resume-display");
    var downloadBtn = document.getElementById("download-btn");
    if (form && resumeDisplay && downloadBtn) {
        form.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent form submission
            // Get form data
            var firstName = document.getElementById("first-name").value;
            var lastName = document.getElementById("last-name").value;
            var email = document.getElementById("email").value;
            var phone = document.getElementById("phone").value;
            var education = document.getElementById("education").value;
            var skills = document.getElementById("skills").value;
            var workExperience = document.getElementById("work-experience").value;
            // Generate resume HTML with correct classes for styling
            var resumeHTML = "\n                <h1 class=\"resume-section-title\">Resume</h1>\n                <section class=\"resume-section\">\n                    <h2 class=\"resume-section-title\">Personal Information</h2>\n                    <div class=\"resume-content resume-info\">\n                        <p class=\"resume-info-item\"><span>First Name:</span> ".concat(firstName, "</p>\n                        <p class=\"resume-info-item\"><span>Last Name:</span> ").concat(lastName, "</p>\n                        <p class=\"resume-info-item\"><span>Email:</span> ").concat(email, "</p>\n                        <p class=\"resume-info-item\"><span>Contact No:</span> ").concat(phone, "</p>\n                    </div>\n                </section>\n                <section class=\"resume-section\">\n                    <h2 class=\"resume-section-title\">Education</h2>\n                    <div class=\"resume-content\">\n                        <p>").concat(education, "</p>\n                    </div>\n                </section>\n                <section class=\"resume-section\">\n                    <h2 class=\"resume-section-title\">Skills</h2>\n                    <div class=\"resume-content resume-skills\">\n                        <ul>\n                            ").concat(skills
                .split(',')
                .map(function (skill) { return "<li>".concat(skill.trim(), "</li>"); })
                .join(''), "\n                        </ul>\n                    </div>\n                </section>\n                <section class=\"resume-section\">\n                    <h2 class=\"resume-section-title\">Work Experience</h2>\n                    <div class=\"resume-content\">\n                        <p>").concat(workExperience, "</p>\n                    </div>\n                </section>\n            ");
            // Display the resume
            resumeDisplay.innerHTML = resumeHTML;
            // Show the download button
            downloadBtn.style.display = "block";
            // Set up the download button event listener
            downloadBtn.onclick = function () { return downloadResume(resumeHTML); };
        });
        // Function to handle downloading the resume
        function downloadResume(resumeHtml) {
            var blob = new Blob([resumeHtml], { type: "text/html" });
            var url = URL.createObjectURL(blob);
            var a = document.createElement("a");
            a.href = url;
            a.download = "resume.html";
            a.click();
            URL.revokeObjectURL(url);
        }
    }
    else {
        console.error("Form, resume display, or download button element not found.");
    }
});
