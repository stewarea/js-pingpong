function enter(a) {
  var text = "";
  for (var i = 1 ; i <= a ; i++)
  {
    if (i % 15 === 0) {
      text += "pingpong <br>";
    }  else if (i % 5 === 0) {
      text += "pong <br>";
    }  else if (i % 3 === 0) {
      text += "ping <br>";
    }  else {
      text += i + "<br>";
    }

  }
  return text;
}



$(document).ready(function() {
  $("form#enter").submit(function(event) {
    var a = parseInt($("input#number").val());
    var result = enter(a);

    $("#pingpongdisplay").html(result);

    $("#result").show();

    event.preventDefault();

  });
});
