(function(window){
    var helloSpeaker={};
    helloSpeaker.word = "Hello";
    helloSpeaker.speak= function(name) {
    console.log(helloSpeaker.word + " " + name);
  }
  window.helloSpeaker=helloSpeaker;
})(window);


