function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(220);
  translate(200,200);
  rotate(-90);
  
  let hr = hour();
  let mn = minute();
  let sc = second();
  
  strokeWeight(2);
  stroke(255,100,150);
  noFill();
  let end1 = map(sc, 0, 60, 0, 360);
  //arc(0, 0, 300, 300, 0, end1);
  
  push();
  rotate(end1);
  strokeWeight(2);
  stroke(255,100,150);
  line(0,0,100,0);
  pop();  

  strokeWeight(4);
  stroke(150,100,255);
    let end2 = map(mn, 0, 60, 0, 360);
  //arc(0,0,280,280,0,end2);
  
  push();
  rotate(end2);
  strokeWeight(4);
  stroke(150,100,255);
  line(0,0,75,0);
  pop();

  strokeWeight(8);
  stroke(100,255,150);
      let end3 = map(hr % 12, 0, 12, 0, 360);
  //arc(0,0,260,260,0,end3);


  push();
  rotate(end3);
  strokeWeight(8);
  stroke(100,255,150);
  line(0,0,50,0);
  pop();  

  strokeWeight(9);
  stroke(247, 15, 15);
  ellipse(0,0,290,290);
          
  stroke(255);
  point(0,0);
  
  stroke(0);
  point(130,0);
  
  stroke(0);
  point(110,70);
  
  stroke(0);
  point(0,130);
  
  stroke(0);
  point(0,-130);
       
  stroke(0);
  point(-130,0);
  
  stroke(0);
  point(60,110);
  
  stroke(0);
  point(-60,110);
  
  stroke(0);
  point(-110,70);
  
  stroke(0);
  point(-110,-70);
  
  stroke(0);
  point(-60,-110);
  
  stroke(0);
  point(60,-110);
  
  stroke(0);
  point(110,-70);
  
  //fill(255);
  //nostroke();
  //(hr + ':' mn + ':' sc, 10, 200);
   
}