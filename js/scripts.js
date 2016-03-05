function enter(a) {
  text = "";
  for (i = a; i > 0 ; i++)
    if (i % 15 === 0)
      return "pingpong";
    else if (i % 5 === 0)
      return "pong";
    else if (i % 3 === 0)
      return "ping";
    else
      return i;
    text += i ;

  // {
  //   // text += i + " bottles of beer on the wall " + i  + " bottles of beer.  You take one down, pass it around " + (i-1) + " bottles of beer on the wall." + "<br>";
  // }
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
