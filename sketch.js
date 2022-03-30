
function setup(){
  var canvas = createCanvas(1000,800);
  database=firebase.database();
  persona=new Persona();
  form=new Form();
  form.display();

}

function draw(){
background("blue")

}
