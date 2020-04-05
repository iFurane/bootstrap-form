var inpname = document.querySelector('input[type="text"]');
var inpemail = document.querySelector('input[type="email"]');
var inprollno = document.querySelector('input[id="inputRollNo"]');
var inpstuid = document.querySelector('input[id="inputStuDep"]');
var inpempid = document.querySelector('input[id="inputEmpID"]');
var inpempdep = document.querySelector('input[id="inputEmpDep]');
console.log(inpname);
document.getElementById('submit').addEventListener('click', submitForm);

function submitForm(e) {
    var check = 0;
    var nametext = inpname.value;
    if (nametext.length <= 2) {
        document.getElementById('nameAlert').hidden = false;
        check++;
    }
    var emailtext = inpemail.value;
    if (emailtext.indexOf('@') == -1 || emailtext.indexOf('.com') == -1) {
        document.getElementById('emailAlert').hidden = false;
        check++;
    }
    if (document.querySelector('option[value="student"]').selected == true) {
        var rollno = inprollno.value;
        if (rollno.length < 8) {
            document.getElementById('rollnoAlert').hidden = false;
            check++;
        }
    } else {
        var empid = inpempid.value;
        if (empid.length < 8) {
            document.getElementById('empidAlert').hidden = false;
            check++;
        }
        console.log(check);

    }
    $(".alert").fadeTo(1500, 0).slideUp(500, function() {
        document.getElementById('nameAlert').hidden = true;
        document.getElementById('emailAlert').hidden = true;
        document.getElementById('rollnoAlert').hidden = true;
        document.getElementById('studepAlert').hidden = true;
        document.getElementById('empidAlert').hidden = true;
        document.getElementById('empdepAlert').hidden = true;
        $(".alert").fadeTo(0, 100);
    });
    if (check == 0) {
        window.location.href = "submitted.html";
    }
}

function populate(e) {
    var opt = document.querySelector('option[value="student"]');
    if (opt.selected) {
        document.getElementById('student').hidden = false;
        document.getElementById('employee').hidden = true;
    } else {
        document.getElementById('student').hidden = true;
        document.getElementById('employee').hidden = false;
    }
}