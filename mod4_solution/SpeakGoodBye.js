(function(window){
    var byeSpeaker={};
    byeSpeaker.word= "Good Bye";
   
    byeSpeaker.speak= function (name) {
        console.log(byeSpeaker.word + " " + name);
      }

window.byeSpeaker=byeSpeaker;
})(window);



