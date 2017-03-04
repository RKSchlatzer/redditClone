$( document ).ready(function() {

  $.get("https://www.reddit.com/r/aww/.json", function(goodness){
    var redditArray = goodness.data.children;
    for(var i=0; i<redditArray.length; i++){
    var thumbnail = redditArray[i].data.thumbnail;
    var title = redditArray[i].data.title;
    var score = redditArray[i].data.score;
    var username = redditArray[i].data.author;
    var permalink = redditArray[i].data.permalink;

$('section').append('<a href="https://www.reddit.com' + permalink + '"">' + '<div><img src="' + thumbnail + '"/>' +
'<h2 class=Spaced>Title: </h2>' + '<p id = Title>' + title + '</br></p>'
+ '<h2 class=Spaced>Author: </h2>' + '<p id= Username>' + username + '</br></p>' +
'<h2 class=Spaced>Score: </h2>' + '<p id = Score>'+ score + '</p></div></a>');

    console.log(thumbnail);
    console.log(title);
    console.log(score);
}
  });
});
