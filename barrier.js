class Barrier
{
	constructor(x,y,w,h)
	{
		var options={
			isStatic:true			
		}
		this.x = x;
		this.y = y;
		this.w = w
		this.h = h
		this.body = Bodies.rectangle(x, y, w, h , options);
 		World.add(world, this.body);

	}
	display()
	{
			
			var positionBarrier = this.body.position;		

			push()
			translate(positionBarrier.x, positionBarrier.y);
			rectMode(CENTER)
			fill("gray");
			rect(0,0,this.w, this.h);
			pop()
			
	}

}