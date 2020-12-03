// Global Variables
const jobRole = document.getElementById("title");
const otherJobRole = document.getElementById("other-job-role");
const designEle = document.getElementById("design");
const colorEle = document.getElementById("color");
const colorEleOption = document.querySelectorAll("#color option");

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

    designEle.addEventListener("change", (e) => {
        for (let i = 0; i < colorEle.length; i++) {
            if (e.target.value === "js puns") {
                colorEle.disabled = false;
                colorEleOption[0].style.display = "block";
                colorEleOption[1].style.display = "block";
                colorEleOption[2].style.display = "block";
                colorEleOption[3].style.display = "none";
                colorEleOption[4].style.display = "none";
                colorEleOption[5].style.display = "none";
            }  
            
            if (e.target.value === 'heart js') {
                colorEle.disabled = false;
                colorEleOption[0].style.display = "none";
                colorEleOption[1].style.display = "none";
                colorEleOption[2].style.display = "none";
                colorEleOption[3].style.display = "block";
                colorEleOption[4].style.display = "block";
                colorEleOption[5].style.display = "block";
            } 
        }
    })

// Method Calls

console.log(colorEleOption[1]);
console.log(colorEle.length);


//two truths and a lie
    // I played electric guitar in a band and performed several times in Atlanta
    // I got to meet my favorite band in Atlanta in 2018
    // I am a  die hard Steelers fan (11-0)
    