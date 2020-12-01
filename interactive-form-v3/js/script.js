// Global Variables
const jobRole = document.getElementById("title");
const otherJobRole = document.getElementById("other-job-role");

// Methods
    //Focus on Input Field onPageLoad

    function focusOnInput() {
        document.getElementById("name").focus();
    }

    //Toggle Hidden Other Job Field
    jobRole.addEventListener("change", function() {
        if (jobRole.value == "other") {
            otherJobRole.style.display = "block";
        } else {
            otherJobRole.style.display = "none";
        }
    })
        
// Method Calls
