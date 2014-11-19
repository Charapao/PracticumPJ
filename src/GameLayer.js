var GameLayer = cc.LayerColor.extend({
    init: function() {
        this._super( new cc.Color4B( 127, 127, 127, 255 ) );
        this.setPosition( new cc.Point( 0, 0 ) );
        this.initText();
        var ship = new Ship();
        ship.setPosition( new cc.Point( 0, 0 ) );
        this.addChild( ship );
        ship.scheduleUpdate();
        this.setKeyboardEnabled( true );
        var Fire = false;
    
        var bullet = new Bullet();
        bullet.setPosition( new cc.Point( 400,200));
        this.addChild( bullet);
        bullet.scheduleUpdate();
                

    //    bullet.setPositionBullet(200,200);
        
        
        
        

        return true;
    },
    initText: function(){
        var textField = cc.LabelTTF.create("wadlek",GameLayer.FONT,30 );
        textField.setPosition(cc.p(800/2, 15));
        this.addChild(textField);        




    },
     onKeyDown: function( e ) {
         if(e == 32){
            console.log("---");
            
            
         }
     }
    // onKeyUp: function( e ) {
    // console.log( 'Up: ' + e );
    // }
 
});

var StartScene = cc.Scene.extend({
    onEnter: function() {
        this._super();
        
        var layer = new GameLayer();
        layer.init();
        this.addChild( layer );

    }
});