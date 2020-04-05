var inpname = document.querySelector('input[type="text"]');
var inpemail = document.querySelector('input[type="email"]');
console.log(inpname);
document.getElementById('submit').addEventListener('click', submitForm);

function submitForm(e) {
    var nametext = inpname.value;
    if (nametext.length <= 2) {
        document.getElementById('nameAlert').hidden = false;
        $(".alert").fadeTo(1000, 0).slideUp(500, function() {
            document.getElementById('nameAlert').hidden = true;
            $(".alert").fadeTo(0, 100);
        });
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