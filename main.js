// 1- function send email using smtp server
import "https://ipgeolocation.abstractapi.com/v1/?api_key=c1c0d1fd8fb84414a4e73cadbcab0bae"
function sendEmail() {
  // console.log('it,s working');


  if (isEmpty($("#name").val()) || isEmpty($("#emailId").val()) || isEmpty($("#IdeaSubject").val()) || isEmpty($("#subjectOption").val())) {
    $("#alertData").html('There is an empty field ! please check again before sharing !')
    $("#alertData").css("color", "red");
  }

  else {
    $("#alertData").css("color", "white");
    Email.send({
      // adding SMTP Credentilas Encruption:
      SecureToken : "https://emailvalidation.abstractapi.com/v1/?api_key=b3f72ef57e67485fa0fe66d03d22fdc4&email=ahmed-2090@hotmail.com",

      // Host: "smtp.elasticemail.com",
      //Username: "ahmed-2090@hotmail.com",
      // Password: "b3f72ef57e67485fa0fe66d03d22fdc4",
      To: 'ahmed-2090@hotmail.com',
      From: "ahmed-2090@hotmail.com",
      Subject: "RBK student email: " + document.getElementById("subjectOption").value,
      Body: "Name: " + document.getElementById("name").value +
        "<br> Email: " + document.getElementById("emailId").value +
        "<br> Message: <br>" + document.getElementById("IdeaSubject").value
    }).then(
      message => alert("Thanks ! we will try to contact you as soon as possible !")
    );
    console.log($("#name"));

    $("#hiddenThanks").html("Thank you " + $("#name").val() + " for sharing " + $("#subjectOption").val()) + " !";
    $("#hiddenThanks").css("color", "var(--rbk)");

    document.getElementById("msform").reset();
    setTimeout(reset, 5000);

  }
}

// 2- function reset : to reset the form after sending the email:

function reset() {

  $("#hiddenThanks").css("color", "white");

}


// 2- function isEmpty : to check if a field is Empty before sending the email:

function isEmpty(str) {
  if (str.length === 0) { return true; }
  else { return (false) }
}




function httpGetAsync(url, callback) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function() {
      if (xmlHttp.readyState === 4 && xmlHttp.status === 200)
      callback(xmlHttp.responseText);
  }
  xmlHttp.open("GET", url, true); // true for asynchronous
  xmlHttp.send(null);
}

var url = "https://emailvalidation.abstractapi.com/v1/?api_key=b3f72ef57e67485fa0fe66d03d22fdc4&email=ahmed-2090@hotmail.com"

httpGetAsync(url)
