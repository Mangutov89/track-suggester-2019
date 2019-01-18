$(document).ready(function() {
  $(".ruby").hide();
  $(".php").hide();
  $(".java").hide();
  $(".css").hide();
  $(".csharp").hide();
  $("#trackform").submit(function(event) {
    event.preventDefault();
    var name = $("#person1").val();
    var age = $("#age").val();
    var question1 = parseInt($("#question1").val());
    var question2 = parseInt($("#question2").val());
    var question3 = parseInt($("#question3").val());
    var question4 = parseInt($("#question4").val());
    var question5 = parseInt($("#question5").val());
    var question6 = parseInt($("#question6").val());
    var question7 = parseInt($("#question7").val());
    var question8 = parseInt($("#question8").val());
    var total = question1 + question2 + question3 + question4 + question5 + question6 + question7 + question8

    if (name) {
      if (total < 100) {
        $(".ruby").show();
        $(".php").hide();
        $(".java").hide();
        $(".css").hide();
        $(".csharp").hide();
      } else if (total > 101 && total < 200) {
        $(".php").show();
        $(".ruby").hide();
        $(".java").hide();
        $(".css").hide();
        $(".csharp").hide();
      } else if (total > 201 && total < 300) {
        $(".java").show();
        $(".ruby").hide();
        $(".php").hide();
        $(".css").hide();
        $(".csharp").hide();
      } else if (total > 301 && total < 400) {
        $(".css").show();
        $(".ruby").hide();
        $(".php").hide();
        $(".java").hide();
        $(".csharp").hide();
      } else if (total > 401 && total < 500) {
        $(".csharp").show();
        $(".ruby").hide();
        $(".php").hide();
        $(".java").hide();
        $(".css").hide();
      } else if (total > 501 && total < 600) {
        $(".java").show();
        $(".ruby").hide();
        $(".php").hide();
        $(".css").hide();
        $(".csharp").hide();
      } else {
        $(".php").show();
        $(".ruby").hide();
        $(".java").hide();
        $(".css").hide();
        $(".csharp").hide();
      }
    } else {
      alert("Enter your name please")
    }
    $(".name").text(name)
  });
});
