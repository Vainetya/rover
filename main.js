canvas=document.getElementById("myCanvas");
ctx=canvas.getContext('2d');
nasa_array=["nasa_1.jpeg","nasa_2.jpeg","nasa_3.jpeg"];
random_number=Math.floor(Math.random()*3)
background_img=nasa_array[random_number];
rover_img="rover.png";
rover_width=100;
rover_height=90;
rover_Y=10;
rover_X=10;
function add(){
    background_imgtag=new Image();
    background_imgtag.onload=uploadbackground
    background_imgtag.src=background_img;

    rover_imgtag=new Image();
    rover_imgtag.onload=uploadrover
    rover_imgtag.src=rover_img
}
function uploadbackground(){
    ctx.drawImage(background_imgtag,0,0,canvas.width,canvas.height)
}
function uploadrover(){
    ctx.drawImage(rover_imgtag,rover_X,rover_Y,rover_width,rover_height)
    
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keypressed=e.keyCode;

    if(keypressed=="38"){
        up();
        console.log("up")
    }
    if(keypressed=="40"){
        down();
        console.log("down")
    }
    if(keypressed=="37"){
        left();
        console.log("left")
    }
    if(keypressed=="39"){
        right();
        console.log("right")
    } 
}
function up(){
if(rover_Y>=0 ){
    rover_Y=rover_Y-10;
    uploadbackground();
    uploadrover();

}
}
function down(){
    if(rover_Y<=500){
        rover_Y=rover_Y+10
        uploadbackground();
        uploadrover();
    
    }
    }

    function left(){
        if(rover_X>=0 ){
            rover_X=rover_X-10;
            uploadbackground();
            uploadrover();
        
        }
        }

        function right(){
            if(rover_X<=700){
                rover_X=rover_X+10;
                uploadbackground();
                uploadrover();
            
            }
            }