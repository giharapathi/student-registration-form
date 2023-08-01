function validation_form(){
    var Fname=document.form.F_Name;
    var Mname=document.form.M_Name;
    var Lname=document.form.L_Name;
    var email = document.form.email;
    var contactNum =document.form.tel_home;
    var mobileOne=document.form.tel_mobile1;
    var mobileTwo=document.form.tel_mobile2;
    var usern = document.form.userName.value.trim();
    var pw = document.form.password;
    var c_pw = document.form.Confirm_Password;
    if(agree_checkbox()){
        if (Name(Fname, "f_name_span")) {
            if (Name(Mname, "m_name_span")) {
                if (Name(Lname, "l_name_span")) {
                    if (ageCalculator()) {
                        if (ValidateEmail(email, "email_span")) {
                            if (phonenumber(contactNum, "tel_home_span")) {
                                if (phonenumber(mobileOne, "tel_mobile1_span")) {
                                    if (phonenumber(mobileTwo, "tel_mobile2_span")) {
                                        if(validateUserName(usern)){
                                            if(CheckPassword(pw)){
                                                if(pwchecker(pw,c_pw)){
                                                    window.location.replace('endPage.html');
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    return false;
}

function agree_checkbox(){
    var remember = document.getElementById('checkbox');
    if (remember.checked){
        document.getElementById('span_checkbox').innerHTML=''
        return true;
    }else{
        document.getElementById('span_checkbox').innerHTML='select the checkbox'
        return false;
    }
}

function Name(name,id){
    var len= name.value.length;
    if (len==0){
        document.getElementById(id).innerHTML="You can't keep this field empty!";
        name.focus();
        return false;
    }else{
        document.getElementById(id).innerHTML="";
        return true;
    }
}

function ValidateEmail(email,id){
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.value.match(mailformat)) {
        document.getElementById(id).innerHTML="";
        return true;
    }else{
        document.getElementById(id).innerHTML="Enter a valid email address";
        email.focus();
        return false;
    }
}

function contactNumValidation(contact,id) {
    if (contact.value.trim().length != 10) {
        document.getElementById(id).innerHTML = "Enter a valid Number";
        contact.focus();
        return false;
    } else {
        document.getElementById(id).innerHTML = "";
        contact.focus();
        var phoneno = /^\d{10}$/;
        return true;
    }
}
function phonenumber(contact,id)
{
    var phoneno = /^\d{10}$/;
    if((contact.value.match(phoneno))){
        document.getElementById(id).innerHTML = "";
        return true;
    }
    else
    {
        document.getElementById(id).innerHTML = "Enter a valid Number";
        return false;
    }
}


function ageCalculator() {
    var userinput = document.getElementById("DOB").value;
    var dob = new Date(userinput);
    if(userinput==null || userinput=='') {
        document.getElementById("message").innerHTML = "**Choose a date please!";
        return false;
    } else {
        var month_diff = Date.now() - dob.getTime();
        var age_dt = new Date(month_diff);
        var year = age_dt.getUTCFullYear();
        var age = Math.abs(year - 1970);
        document.getElementById("Age").value = age
        return true;
    }

}

function validateUserName(username){
    var usernameRegex = /^[a-z]+$/;
    return usernameRegex.test(username);
}

function CheckPassword(inputtxt)
{
    var x = inputtxt.value;
    var passw = /(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9]+$/;

    if(passw.test(x))
    {
        document.getElementById("password_span").innerHTML = ''
        return true;
    }

    else{
        document.getElementById("password_span").innerHTML = 'invalid password'
        return false;
    }
}

function pwchecker(password,con_password){
    var p = password.value;
    var cp = con_password.value;
    if(p!=cp){
        document.getElementById('con_password_span').innerHTML="didn't match with password"
        return false;
    }
    else{
        document.getElementById('con_password_span').innerHTML=''
        return true;
    }
}