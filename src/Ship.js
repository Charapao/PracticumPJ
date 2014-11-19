var screenWidth = 800;
var screenHeight = 600;
var Ship = cc.Sprite.extend({
    ctor: function() {
        this._super();
        this.v = 0;
        this.vx = 0;
        this.vy = 0;
        this.angle = 0;
        this.initWithFile( 'images/ship.png' );
        this.direction = Ship.DIR.RIGHT;
    },
    
    
        update: function( dt ) {
	
    	var pos = this.getPosition();
        this.angle += 0.5;
        this.vx = 0.5 * Math.sin(this.angle * Math.PI / 180);
        this.vy = 0.5 * Math.cos(this.angle * Math.PI / 180);
        this.setRotation((this.angle)%360);
        if (pos.y > screenHeight) 
            this.setPosition(new cc.Point(pos.x + this.vx, 0 + this.vy));
        else if(pos.y < 0)
            this.setPosition(new cc.Point(pos.x + this.vx, screenHeight + this.vy));
        else if(pos.x > screenWidth)
            this.setPosition(new cc.Point(0 + this.vx, pos.y + this.vy));
        else if(pos.x < 0)
            this.setPosition(new cc.Point(screenWidth + this.vx, pos.y + this.vy));
        else 
            this.setPosition(new cc.Point(pos.x + this.vx, pos.y + this.vy));
    }
});


Ship.DIR = {
    UP: 1,
    RIGHT: 2
};

