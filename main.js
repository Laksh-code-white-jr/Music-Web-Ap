song1="";
song2="";
leftwristx="";
leftwristy="";
rightwristx="";
rightwristy="";
scoreleft="";
scoreright="";

function setup(){
    canvas=createCanvas(500,500);
    canvas.center();
    camera=createCapture(VIDEO);
camera.hide();
posenet=ml5.poseNet(camera,modelLoaded);
posenet.on("pose",gotPoses);
    }

    function modelLoaded(){
        console.log("Posenet Has Successfully Loaded")
    }

    function gotPoses(results){
        if(results.length>0){
    console.log(results);
    leftwristx=results[0].pose.leftWrist.x;
    leftwristy=results[0].pose.leftWrist.y;
    rightwristx=results[0].pose.rightWrist.x;
    rightwristy=results[0].pose.rightWrist.y;
    console.log("leftwristx ="+ leftwristx+"leftwristy ="+leftwristy);
    console.log("rightwristx ="+ rightwristx+"rightwristy ="+rightwristy);
        }
    }
    
    function draw(){
        image(camera,0,0,500,500);
        fill("#FF0000");
stroke("#FF0000");
if(scoreleft>0.2){
    circle(leftwristx,leftwristy,20);
song1.play();
}
if(scoreright>0.2){
    circle(rightwristx,rightwristy,20);
song2.play();
}
    }

    function preload(){
        song1=loadSound("Pety.mp3");
        song2=loadSound("robloxparody.mp3");
    }
