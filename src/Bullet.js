var Bullet = cc.Sprite.extend({
    ctor: function() {
        this._super();
        this.v = 5;
        this.angle2 = 0;
        this.vx = 0;
        this.vy = 0;
        this.initWithFile( 'images/bullet.png' );
    },
   
     update: function() {
    	this.angle2 += 0.5;
        this.vx = 0.5 * Math.sin(this.angle2 * Math.PI / 180);
        this.vy = 0.5 * Math.cos(this.angle2 * Math.PI / 180);
        //console.log(this.angle2);
     	var pos = this.getPosition();
        if (pos.y < screenHeight || pos.y > 0 || pos.x <screenWidth || pos.x >0){
        	this.setPosition(new cc.Point(pos.x + this.vx, pos.y + this.vy));

        }
     }
    // setPositionBullet: function(x,y) {
    // 	pos.x=x;
    // 	pos.y=y;
    // 	this.setPosition( new cc.Point( x, y));



    //}
    //}


});