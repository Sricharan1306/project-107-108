document.getElementById("getvoice").onclick=function(){
    var synth= window.speechSynthesis;
    speak_data="If you play  Dog barking sound then the Dog will dance"
    var utter_this= new SpeechSynthesisUtterance(speak_data);
    synth.speak(utter_this);
  
    setTimeout(Timer,2000);
}
function Timer(){
    var synth= window.speechSynthesis;
    speak_data="  If you  play Tiger growling sound then  the tiger will dance."
    var utter_this= new SpeechSynthesisUtterance(speak_data);
    synth.speak(utter_this);
  
    setTimeout(Timer2,2000);
}
function Timer2(){
    var synth= window.speechSynthesis;
    speak_data=" If you play cat meow sound then  the cat will dance. "
    var utter_this= new SpeechSynthesisUtterance(speak_data);
    synth.speak(utter_this);
  
    setTimeout(Timer3,2000);
}
function Timer3(){
    var synth= window.speechSynthesis;
    speak_data=" If you play Lion roaring sound then the Lion will dance.  "
    var utter_this= new SpeechSynthesisUtterance(speak_data);
    synth.speak(utter_this);
  
    setTimeout(Timer4,2000);
}
function Timer4(){
    var synth= window.speechSynthesis;
    speak_data="If your background voice is only audible then every animal will dance together, wait for 2 seconds and then try playing the sounds "
    var utter_this= new SpeechSynthesisUtterance(speak_data);
    synth.speak(utter_this);
    setTimeout(start1,2000);
}
document.getElementById("download").onclick=function(){
    window.location="download.html";
}
function start1(){

        navigator.mediaDevices.getUserMedia({audio:true});
        classifier=ml5.soundClassifier("https://storage.googleapis.com/tm-model/ejhFUhww2/model.json",modelready);

    function modelready(){
        
        classifier.classify(getresults);
    }
    var dog=0;
    var cat=0;
    var lion=0;
    var tiger=0;
    function getresults(error,result){
        if(error){
            console.error(error);
        }
        else{
            console.log(result);
            random_color_r=Math.floor(Math.random()*255)+1;
        random_color_g=Math.floor(Math.random()*255)+1;
        random_color_b=Math.floor(Math.random()*255)+1;
        document.getElementById("result").innerHTML="I can hear-"+result[0].label;
        document.getElementById("result_accuracy").innerHTML="Accuracy"+result[0].confidence.toFixed(2)*100+"%";
        document.getElementById("result").style.color="rgb("+random_color_r+","+random_color_g+","+random_color_b+")";
        document.getElementById("result_accuracy").style.color="rgb("+random_color_r+","+random_color_g+","+random_color_b+")";
        document.getElementById("result_cat").innerHTML=cat;
        document.getElementById("result_dog").innerHTML=dog;
        document.getElementById("result_lion").innerHTML=lion;
        document.getElementById("result_tiger").innerHTML=tiger;


var image=document.getElementById("image_1");
var image2=document.getElementById("image_2");
var image3=document.getElementById("image_3");
var image4=document.getElementById("image_4");

if(result[0].label=="Meow"){
  image.src="cat.gif";
  image2.src="";
  image3.src="";
  image4.src="";
   cat=cat+1;
}
else if(result[0].label=="Background Noise"){
  
image.src="cat.gif";
 image2.src="DJ_Dog.gif";
  image3.src="lion.gif";
image4.src="tiger.gif";
cat=cat+1;
dog=dog+1;
 lion=lion+1;
  tiger=tiger+1;
}
else if(result[0].label=="Barking"){
    
image.src="DJ_Dog.gif";
image2.src="";
  image3.src="";
  image4.src="";
  dog=dog+1;
}
else if(result[0].label=="Growling"){
   image.src="tiger.gif";
   image2.src="";
  image3.src="";
  image4.src="";
  tiger=tiger+1;
}
else{
    image.src="lion.gif";
    image2.src="";
  image3.src="";
  image4.src="";
   lion=lion+1;
}
        }
    } 
}