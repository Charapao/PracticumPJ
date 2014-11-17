var GameLayer = cc.LayerColor.extend({
    init: function() {
        this._super( new cc.Color4B( 127, 127, 127, 255 ) );
        this.setPosition( new cc.Point( 0, 0 ) );
 
        var ship = new Ship();
        ship.setPosition( new cc.Point( 200, 220 ) );
        this.addChild( ship );
        ship.scheduleUpdate();
     
        return true;
    }
});

var StartScene = cc.Scene.extend({
    onEnter: function() {
        this._super();
        
        var layer = new GameLayer();
        layer.init();
        this.addChild( layer );
    }
});




