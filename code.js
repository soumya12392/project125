var leftWristX = 0;
var rightWristX = 0;
var difference = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 550);

    canvas = createCanvas(500, 450);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function draw() {
    background("#f0ad4e");
    textSize(difference);
    fill("#ffffff");
    text("Soumya", 50, 50);
}

function modelLoaded() {
    console.log("PoseNet is Intialized!");
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("leftWristX = " + leftWristX + ", rightWristX = " + rightWristX + ", difference = " + difference);
    }
}