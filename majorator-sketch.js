var mic, fft;

function setup() {
    createCanvas(710,400);

   noFill();

   mic = new p5.AudioIn();
   mic.start();
   fft = new p5.FFT();
   fft.setInput(mic);
}

function draw() {
   background(200);

   var spectrum = fft.analyze();
    if (frameCount%60 == 0){
        console.log(spectrum);
    }

   beginShape();
   for (i = 0; i<spectrum.length; i++) {
    vertex(i, map(spectrum[i], 0, 255, height, 0) );
   }
   endShape();
   
}





