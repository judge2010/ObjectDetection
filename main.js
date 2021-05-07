var status="";
object=[];
function preload(){
img=loadImage("dog_cat.jpg")
};
function setup(){
    Canvas=createCanvas(600 ,400);
    Canvas.position(500 ,200);
    ObjectDetector=ml5.objectDetector("pocoSsd",modelLoaded);
    document.getElementById("status").innerHTML= "Status - Detecting Object";
};
function draw(){
 image(img ,0 ,0 ,600 ,400);
};
function modelLoaded(){
console.log("model is loaded"); 
status=true;
ObjectDetector.detect(img,gotResult);
};
function gotResult(error,results){
    if(error){
        console.log(error);
            }
    else{
                console.log(results);
                object=results;
            };        
};