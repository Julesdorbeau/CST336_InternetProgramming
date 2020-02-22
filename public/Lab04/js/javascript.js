var usernameAvailable = false;

//Displaying City from API after typing a zip code
$("#zip").on("change", function(){

    //alert(  $("#zip").val()  );
    $.ajax({
        method: "GET",
            url: "https://itcdland.csumb.edu/~milara/ajax/cityInfoByZip.php?zip=93955",
        dataType: "json",
        data: { "zip": $("#zip").val() },
        success: function(result,status) {

            if(!result) {
                //alert("Not correct");
                $("#ZipTest").html("Zip is not correct");
            }
            if(result) {
                $("#ZipTest").html("");
            }
            //alert(result);
            $("#city").html(result.city);
            $("#latitude").html(result.latitude);
            $("#longitude").html(result.longitude);
        }

    });//ajax
});//zip

//$document.ready(function() {
    $.ajax({
        method: "GET",
        url: "https://itcdland.csumb.edu/~milara/ajax/states.php",
        dataType: "json",
        data: {"state": $("#state").val()},
        success: function (result, status) {

            $("#state").html("<option> Select One </option>");
            for (let i = 0; i < result.length; i++) {
                $("#state").append("<option value=" + result[i].usps +">" + result[i].state + "</option>");
            }

        }
    });
//});

$("#state").on("change", function() {

    //alert($("#state").val());

    $.ajax({
        method: "GET",
        url: "https://itcdland.csumb.edu/~milara/ajax/countyList.php?state=ca",
        dataType: "json",
        data: { "state": $("#state").val() },
        success: function(result,status) {

            //alert(result[0].county);
            $("#county").html("<option> Select One </option>");
            for (let i=0; i < result.length; i++){
                $("#county").append("<option>" + result[i].county + "</option>");
            }

        }
    });//ajax
}); //state

$("#username").change(function() {

    //alert($("#username").val());
    $.ajax({
        method: "GET",
        url: "https://cst336.herokuapp.com/projects/api/usernamesAPI.php?username=eeny",
        dataType: "json",
        data: { "username":$("#username").val() },
        success: function(result,status) {

            if(result.available){
                $("#usernameError").html("Username is available!");
                $("#usernameError").css("color", "green");
                usernameAvailable = true;
            }
            else {
                $("#usernameError").html("Username is unavailable!");
                $("#usernameError").css("color", "red");
                usernameAvailable = false;
            }
        }
    });//ajax
}); //username

$("#signupForm").submit(function(event){

    //alert("submitting form...");
    if (!isFormValid()) {
        event.preventDefault();
    }

});//signupForm

function isFormValid(){
    var isValid = true;
    if (!usernameAvailable) {
        isValid = false;
    }

    if ($("#username").val().length == 0) {
        isValid = false;
        $("#usernameError").html("Username is required");
    }

    if ($("#password").val() != $("#passwordAgain").val()){
        $("#passwordAgainError").html("Password Mismatch!");
        isValid = false;
    }
    return isValid;
}