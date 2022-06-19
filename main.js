var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("textbox").innerHTML = "";
    recognition.start();

   


}

recognition.onresult = function(event) {

    console.log(event);

    var Content =  event.results[0][0].transcript;
    console.log(Content);

    document.getElementById("textbox").innerHTML = Content;

    if(Content == "Take my selfie.")
    {
        console.log("taking selfie ----");
        speak(); 
    }

    if(Content == "Play some songs.")
    {
        console.log("Playing music ----");
        speak1(); 
    }
    
    if(Content == "Firework.")
    {
        console.log("Playing music ----");
        speak2(); 
    }

    if(Content == "Aphmau music.")
    {
        console.log("Playing music ----");
        speak3(); 
    }

    if(Content == "Wonders of nature.")
    {
        console.log("Playing music ----");
        speak4(); 
    }

    if(Content == "Relaxing music.")
    {
        console.log("Playing music ----");
        speak5(); 
    }






    function speak2(){
        var synth = window.speechSynthesis;
    
        speak_data = "Ok, playing Firework by Katty Perry right now."
        var utterThis = new SpeechSynthesisUtterance(speak_data);
    
    synth.speak(utterThis);
    Webcam.attach(camera);
    FireworkTeleport()
    
    }



function speak3(){
    var synth = window.speechSynthesis;

    speak_data = "Ok, playing Aphmau music in 5 seconds"
    var utterThis = new SpeechSynthesisUtterance(speak_data);

synth.speak(utterThis);
Webcam.attach(camera);

setTimeout(function()
{
    MindTeleport()
},    5000);

function MindTeleport() {
    location.replace("Song1mind.html")
  }
}

function speak4(){
    var synth = window.speechSynthesis;

    speak_data = "Ok, playing Wonders of Nature right now"
    var utterThis = new SpeechSynthesisUtterance(speak_data);

synth.speak(utterThis);
Webcam.attach(camera);
NatureTeleport()



}

function speak5(){
    var synth = window.speechSynthesis;

    speak_data = "Ok, playing Relaxing music right now."
    var utterThis = new SpeechSynthesisUtterance(speak_data);

synth.speak(utterThis);
Webcam.attach(camera);
RelaxingmusicTeleport()

function RelaxingmusicTeleport() {
    location.replace("Relaxing music.html")
  }

}



}


    function speak1(){
        var synth = window.speechSynthesis;
    
        speak_data = "Which song do you want to play? Firework, Aphmau music, Relaxing music, Wonders of Nature. Click the start button again to speak which one you want to hear. Also, Aphmau music includes You'll be on my mind/I love you"
        var utterThis = new SpeechSynthesisUtterance(speak_data);
    
    synth.speak(utterThis);
    Webcam.attach(camera);

}

function speak(){
    var synth = window.speechSynthesis;

    speak_data = "Taking your Selfie in 5 seconds"
    var utterThis = new SpeechSynthesisUtterance(speak_data);

synth.speak(utterThis);
Webcam.attach(camera);

setTimeout(function()
{
    take_snapshot();
    save();
},    5000);
}

function save()
{
    link =  document.getElementById("link");
    image = document.getElementById("selfie_image").src ; 
    link.href =  image;
    link.click();
}

Webcam.set({

width:360,
height:250,
image_format : 'png',
pbg_quality:90
});
camera = document.getElementById("camera");

function take_snapshot()
{
    Webcam.snap(function(data_uri)  {
        document.getElementById("result").innerHTML =  '<img id="selfie_image"  src="'+data_uri+'">';

    });

}




