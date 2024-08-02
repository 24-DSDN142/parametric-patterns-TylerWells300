//your parameter variables go here!
let rect_width  = 20;
let rect_height = 20;


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(240, 255, 240); //light honeydew green colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  

let Shirtlogo = true;

function setup() {
  createCanvas(500, 500);
  background(0,180,200);
}

function draw() {

  //----------------------------Skateboard
fill(218,160,109)
rect(75,400,350,15,0,0,10,10)

fill(0,0,0)
rect(75,400,350,5,5,5,0,0)

fill(255)
ellipse(135,435,40,40)

fill(100)
ellipse(135,435,20,20)

fill(255)
ellipse(365,435,40,40)

fill(100)
ellipse(365,435,20,20)

line(90,410,190,410)
line(210,408,310,408)
line(330,411,420,411)

//---------------------------Body
fill(0,0,0,)
rect(250,350,100,50,60,60,0,0)
rect(150,350,100,50,60,60,0,0)

fill(222)
rect(150,395,100,5,0,0,10,10)
rect(250,395,100,5,0,0,10,10)

fill(128,207,248)
quad(150,250,130,365,250,365,250,250)
quad(250,250,250,365,370,365,350,250)

fill(255,255,255)
rect(150,100,200,150,)
rect(100,100,50,70,20,0,0,0)
rect(350,100,50,70,0,20,0,0)

fill(245,205,128)
rect(100,170,50,80,0,0,10,10)
rect(350,170,50,80,0,0,10,10)
rect(210,30,80,70,0,0,10,10)

fill(80,53,1)
rect(210,20,80,20,10,10,0,0)

fill(255,255,255)
rect(225,50,10,20)
rect(265,50,10,20)

fill(0,0,0)
rect(228,55,4,10)
rect(268,55,4,10)



if (Shirtlogo == true){
  fill(0,94,250)
  ellipse(250, 150, 150,70);
}

}

}
