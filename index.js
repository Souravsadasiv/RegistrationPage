console.log("This is a registration page");


function save() {
    let fname = document.getElementById("fname");
    let lname = document.getElementById("lname");
    let name = (fname.value).concat(" ", lname.value);
    localStorage.setItem("Name", name);

    let dateOfBirth = document.getElementById("dob");
    localStorage.setItem("Date of Birth", dateOfBirth.value);

    let inputEmail = document.getElementById("mail");
    localStorage.setItem("email", inputEmail.value);

    let f_fname = document.getElementById("f_fname");
    let f_lname = document.getElementById("f_lname");
    let f_name = (f_fname.value).concat(" ", f_lname.value);
    localStorage.setItem("Father's Name", f_name);

    let m_fname = document.getElementById("m_fname");
    let m_lname = document.getElementById("f_lname");
    let m_name = (m_fname.value).concat(" ", m_lname.value);
    localStorage.setItem("Mother's Name", m_name);

    // let gender = document.getElementById('gender');
    // console.log(Options.gender);
    // localStorage.setItem("Gender", gender);

    let nationality = document.getElementById("nationality");
    localStorage.setItem("Nationality", nationality.value);

    let street = document.getElementById("street");
    localStorage.setItem("Street", street.value);

    let city = document.getElementById("city");
    localStorage.setItem("City", city.value);

    let country = document.getElementById("country");
    localStorage.setItem("Country", country.value);

    let tel_home = document.getElementById("tel-home");
    localStorage.setItem("Telephone", tel_home.value);

    let tel_mobile = document.getElementById("tel-mobile");
    localStorage.setItem("Mobile", tel_mobile.value);

}
function saveSecond() {
    let hscInst = document.getElementById("hsc_inst");
    localStorage.setItem("HSC institute", hscInst.value);

    let hscBoard = document.getElementById("hsc_board");
    localStorage.setItem("HSC Board", hscBoard.value);

    let hscPercentage = document.getElementById("hsc_percentage");
    localStorage.setItem("HSC Percentage", hscPercentage.value);

    let sscInst = document.getElementById("ssc_inst");
    localStorage.setItem("SSC institute", sscInst.value);

    let sscBoard = document.getElementById("ssc_board");
    localStorage.setItem("SSC Board", sscBoard.value);

    let sscPercentage = document.getElementById("ssc_percentage");
    localStorage.setItem("SSC Percentage", sscPercentage.value);

    let currentStudy = document.getElementById("curr_pursuing");
    localStorage.setItem("Currently Persuing", currentStudy.value);

    let instituteName = document.getElementById("inst_name");
    localStorage.setItem("Current Institute Name", instituteName.value);

    let percentage = document.getElementById("percentage");
    localStorage.setItem("Overall Percentage", percentage.value);

    let currentBacklogs = document.getElementById("backlogs");
    localStorage.setItem("Current Backlog", currentBacklogs.value);
}

function saveThird() {
    console.log("Btn clicked");
    const myImage = document.getElementById("my-image");
    myImage.addEventListener('change', () => {
        const file = myImage.files[0];
        const fr = new FileReader();

        fr.addEventListener('load', () => {
            const url = fr.result;
            localStorage.setItem("My Image", url)
        });
        fr.readAsDataURL(file);

    });

    const hscMarksheet = document.getElementById("hsc-marksheet");
    myImage.addEventListener('change', () => {
        const file1 = hscMarksheet.files[0];
        const fr1 = new FileReader();

        fr.addEventListener('load', () => {
            const url = fr1.result;
            localStorage.setItem("HSC Marksheet", url)
        });
        fr.readAsDataURL(file1);

    });

    const sscMarksheet = document.getElementById("ssc-marksheet");
    myImage.addEventListener('change', () => {
        const file = sscMarksheet.files[0];
        const fr = new FileReader();

        fr.addEventListener('load', () => {
            const url = fr.result;
            localStorage.setItem("SSC Marksheet", url)
        });
        fr.readAsDataURL(file);

    });

    const allSemMarksheet = document.getElementById("all-sem-marksheet");
    myImage.addEventListener('change', () => {
        const file = allSemMarksheet.files[0];
        const fr = new FileReader();

        fr.addEventListener('load', () => {
            const url = fr.result;
            localStorage.setItem("All Sem Marksheet", url)
            // console.log(url);
        });
        fr.readAsDataURL(file);

    });



}


function validateFname() {
    let nameInput = document.getElementById("fname");
    const namePattern = /^[A-Za-z\s\-]+$/;
    const nameValue = nameInput.value.trim();
    if (!namePattern.test(nameValue)) {
        nameInput.style.border = "solid 3px red";
        return false;
    } else {
        nameInput.style.border = "solid 3px green";
        return true;
    }
}
function validateLname() {
    let nameInput = document.getElementById("lname");
    const namePattern = /^[A-Za-z\s\-]+$/;
    const nameValue = nameInput.value.trim();
    if (!namePattern.test(nameValue)) {
        nameInput.style.border = "solid 3px red";
        return false;
    } else {
        nameInput.style.border = "solid 3px green";
        return true;
    }
}

function validateF_Fname() {
    let nameInput = document.getElementById("f_fname");
    const namePattern = /^[A-Za-z\s\-]+$/;
    const nameValue = nameInput.value.trim();
    if (!namePattern.test(nameValue)) {
        nameInput.style.border = "solid 3px red";
        return false;
    } else {
        nameInput.style.border = "solid 3px green";
        return true;
    }
}
function validateF_Lname() {
    let nameInput = document.getElementById("f_lname");
    const namePattern = /^[A-Za-z\s\-]+$/;
    const nameValue = nameInput.value.trim();
    if (!namePattern.test(nameValue)) {
        nameInput.style.border = "solid 3px red";
        return false;
    } else {
        nameInput.style.border = "solid 3px green";
        return true;
    }
}

function validateM_Fname() {
    let nameInput = document.getElementById("m_fname");
    const namePattern = /^[A-Za-z\s\-]+$/;
    const nameValue = nameInput.value.trim();
    if (!namePattern.test(nameValue)) {
        nameInput.style.border = "solid 3px red";
        return false;
    } else {
        nameInput.style.border = "solid 3px green";
        return true;
    }
}
function validateM_Lname() {
    let nameInput = document.getElementById("m_lname");
    const namePattern = /^[A-Za-z\s\-]+$/;
    const nameValue = nameInput.value.trim();
    if (!namePattern.test(nameValue)) {
        nameInput.style.border = "solid 3px red";
        return false;
    } else {
        nameInput.style.border = "solid 3px green";
        return true;
    }
}

// //fuction to validate Date of birth
function validateDOB() {
    let dateOfBirth = document.getElementById("dob");
    const dobValue = dateOfBirth.value;
    const dobDate = new Date(dobValue);
    const todayDate = new Date();

    if (dobDate > todayDate) {
        dateOfBirth.style.border = "solid 3px red";
        return false;
    } else {
        dateOfBirth.style.border = "solid 3px green";
        return true;
    }
}

// //function to validate email
function validateEmail() {
    let emailInput = document.getElementById("mail");
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailValue = emailInput.value.trim();
    if (!emailPattern.test(emailValue)) {
        emailInput.style.border = "solid 3px red";
        return false;
    } else {
        emailInput.style.border = "solid 3px green";
        return true;
    }
}
// //function to validate mobilenumber

function validateMobileNumber() {
    let mobileNumberInput = document.getElementById("tel-mobile");
    let regx = /[7-9]\d{9}/;
    const mobValue=mobileNumberInput.value.trim();
    if (!regx.test(mobValue)) {
        mobileNumberInput.style.border = "solid 3px red";
        return false;
    } else {
        mobileNumberInput.style.border = "solid 3px green";
        return true;
    }
}



function validateHSCPercentage() {
    let percentageInput = document.getElementById("hsc_percentage");
    const percentageValue = parseFloat(percentageInput.value.trim());
    if (isNaN(percentageValue) || percentageValue < 0 || percentageValue > 100) {
        percentageInput.style.border = "solid 3px red";
        return false;
    } else {
        percentageInput.style.border = "solid 3px green";
        return true;
    }
}
function validateSSCPercentage() {
    let percentageInput = document.getElementById("ssc_percentage");
    const percentageValue = parseFloat(percentageInput.value.trim());
    if (isNaN(percentageValue) || percentageValue < 0 || percentageValue > 100) {
        percentageInput.style.border = "solid 3px red";
        return false;
    } else {
        percentageInput.style.border = "solid 3px green";
        return true;
    }
}
function validateOverallPercentage() {
    let percentageInput = document.getElementById("percentage");
    const percentageValue = parseFloat(percentageInput.value.trim());
    if (isNaN(percentageValue) || percentageValue < 0 || percentageValue > 100) {
        percentageInput.style.border = "solid 3px red";
        return false;
    } else {
        percentageInput.style.border = "solid 3px green";
        return true;
    }
}







