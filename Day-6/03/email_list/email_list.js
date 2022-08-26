var $ = function (id) {
    return document.getElementById(id);
}
var stateCodeLookup = function (stateCode) {
	var states = ["CA" , "WA" , "OR", "NV" , "NM" , "AZ" , "WY" , "MT"];
    var variable = "TX";
    states.push(variable);
    stateCode =  stateCode.toUpperCase();
    for(var i in states){
        if(states[i]==stateCode){
            return true;
        }
    }
    return false;
}
var joinList = function () {
	var email_address1 = $("email_address1").value;
    var email_address2 = $("email_address2").value;
    var isValid = true;
    //validate the first email address
    if(email_address1 == ""){
        $("email_address1_error").firstChild.nodeValue ="This field is required.";
        isValid = false;
    }else{
        $("email_address1_error").firstChild.nodeValue = "";
    }
    // validate second email address
    if(email_address2 == ""){
        $("email_address2_error").firstChild.nodeValue ="This field is required.";
        isValid = false;
    }else if(email_address1 !== email_address2){
        $("email_address2_error").firstChild.nodeValue ="This entry must be equal to first entry";
        isValid = false;
    }
    else{
        $("email_address2_error").firstChild.nodeValue = "";
    }
    // validate first name
    if($("first_name").value == ""){
        $("first_name_error").firstChild.nodeValue ="This field is required.";
        isValid = false;
    }else{
        $("first_name_error").firstChild.nodeValue = "";
    }
    // validate state code entry
    var stateCode = $("state_code").value;
    if(!stateCodeLookup(stateCode)){
        $("state_code_error").firstChild.nodeValue = "State code is invalid";
        isValid =false;
    }
    else{
        $("state_code_error").firstChild.nodeValue = "";
    }
    //submit the form if all entries are valid
    if(isValid){
        $("email_form").submit();
    }
}
window.onload = function () {
    $("join_list").onclick = joinList;
    $("email_address1").focus();
}
