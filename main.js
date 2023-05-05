noseX=0
noseY=0
function preload() {
}

function setup() {
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video,ModelLoaded);
    poseNet.on('pose',gotPoses);
}

function ModelLoaded(){
console.log('PoseNet is Intialized');
}

function gotPoses(results)
{
    if(results.length>0);
    {
        console.log(results);
        console.log("nose x =" + results[0].pose.nose.x);
        console.log("nose y =" + results[0].pose.nose.y);
    }
}


function take_snapshot(){
    save('AryaveerVij.png');
}