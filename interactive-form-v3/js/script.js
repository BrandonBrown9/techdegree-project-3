// Global Variables
const jobRole = document.getElementById("title");
const otherJobRole = document.getElementById("other-job-role");
const designEle = document.getElementById("design");
const colorEle = document.getElementById("color");
const colorEleOption1 = document.getElementsByClassName("js puns");
const colorEleOption2 = document.getElementsByClassName("heart js");


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

    designEle.addEventListener("change", function(color) {
            if (designEle.value === "js puns") {
                colorEle.disabled = false;
                for (let i = 0; i < colorEleOption2.length; i++) {
                    colorEleOption2[i].disabled = true;
                }
            } else if (designEle.value === "heart js") {
            colorEle.disabled = false;
            for (let i = 0; i < colorEleOption1.length; i++) {
                colorEleOption1[i].disabled = true;
            }
        }
    })

// Method Calls

console.log(colorEle.length);
// console.log(colorEleOption1);

//two truths and a lie
    // I played electric guitar in a band and performed several times in Atlanta
    // I got to meet my favorite band in Atlanta in 2018
    // I am a  die hard Steelers fan (11-0)
    