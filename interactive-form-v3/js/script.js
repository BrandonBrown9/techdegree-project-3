// Global Variables
const jobRole = document.getElementById("title");
const otherJobRole = document.getElementById("other-job-role");
const designEle = document.getElementById("design");
const colorEle = document.getElementById("color");

// Methods
    //Focus on Input Field onPageLoad
    function focusOnInput() {
        document.getElementById("name").focus();
    }

    //Toggle Hidden Other Job Field Component
    jobRole.addEventListener("change", function() {
        if (jobRole.value == "other") {
            otherJobRole.style.display = "block";
        } else {
            otherJobRole.style.display = "none";
        }
    })
    
    //Design Theme and Color option component
    colorEle.disabled = true;
    designEle.addEventListener("change", function() {
        //if statement can be rewritten to use case method
        if (designEle.value == "js puns" ||  designEle.value == "heart js") {
            colorEle.disabled = false;
        } else {
            colorEle.disabled = true;
        }
    })

// Method Calls
console.log(designEle);
console.log(colorEle);