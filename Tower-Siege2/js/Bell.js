class Bell{
	constructor(x,y,r)
	{
		var options={
			//isStatic:true,
			restitution :0,
            friction :1,
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.image=loadImage("images/bell.png")
		this.body=Bodies.circle(this.x, this.y, this.r, options)
		World.add(world, this.body);
	}

	display(){

        var pos= this.body.position;
        imageMode(CENTER);

        if(this.body.speed <2){
          image(this.image,pos.x,pos.y,this.r*2, this.r*2);
        }
        else{

          World.remove(world, this.body);
          //World.remove(world, this.image);
          // World.add(world, this.body);
          // World.destroy(world, this.body);
          
          push();
          
          //this.visiblity = 255;
         this.visiblity = this.visiblity - 5;
          //this.visiblity = this.x;
          //this.visiblity = this.body.position.x;
        
          
          
          tint(255,this.visiblity);
          image(this.image, this.body.position.x, this.body.position.y,this.r, this.r);
          pop();
        }


        }
 

}