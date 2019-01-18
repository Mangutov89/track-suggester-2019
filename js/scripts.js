$(document).ready(function() {
  $("#trackform").submit(function(event) {
    event.preventDefault();
    var name = $("#person1").val();
    var age = $("#age").val();
    var question1 = $("#question1").val();
    var question2 = $("#question2").val();
    var question3 = $("#question3").val();
    var question4 = $("#question4").val();
    var question5 = $("#question5").val();
    var total = question1 + question2 + question3 + question4 + question5
    console.log(question3);


  });
});
