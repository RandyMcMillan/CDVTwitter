function onBodyLoad(){		
	document.addEventListener("deviceready", onDeviceReady, false);
}

function onDeviceReady(){
    console.log("onDeviceReady");
    ___FILEBASENAME___Demo.setup();
}

___FILEBASENAME___Demo = {
    $:function(id){
        return document.getElementById(id);
    },
    
    log:function(s){
        ___FILEBASENAME___Demo.$("log").innerHTML = s;
    },
    
    setup:function(){
        var tests = ["isAvailable", "isSetup", "tweet1", "tweet2", "tweet3", "tweet4", "tweet5", "tweet6", "timeline", "mentions", "friendsIds", "usersLookup"];
        for(var i=0, l=tests.length; i<l; i++){
            this.$(tests[i]).onclick = this[tests[i]];
        }
    },
    
    isAvailable:function(){
        ___FILEBASENAME___Demo.log("wait..");
        window.plugins.___FILEBASENAME___.is___FILEBASENAME___Available(function(r){
            ___FILEBASENAME___Demo.log("___FILEBASENAME___ available? " + r);
        });        
    },
    
    isSetup:function(){
        ___FILEBASENAME___Demo.log("wait..");
        window.plugins.___FILEBASENAME___.isTwitterSetup(function(r){
            ___FILEBASENAME___Demo.log("twitter configured? " + r);
        });
    },
  
	tweet1:function(){
		___FILEBASENAME___Demo.log("wait..");
		window.plugins.___FILEBASENAME___.composeTweet(
			function(s){ ___FILEBASENAME___Demo.log("tweet success"); }, 
			function(e){ ___FILEBASENAME___Demo.log("tweet failure: " + e); }, 
			"Text, Image, URL", 
			{
				urlAttach:"http://m.youtube.com/#/watch?v=obx2VOtx0qU", 
				imageAttach:"http://i.ytimg.com/vi/obx2VOtx0qU/hqdefault.jpg?w=320&h=192&sigh=QD3HYoJj9dtiytpCSXhkaq1oG8M"
			});
	},

	
	/*
	 //Original tweet1 example
    tweet1:function(){
        ___FILEBASENAME___Demo.log("wait..");
        window.plugins.___FILEBASENAME___.composeTweet(
            function(s){ ___FILEBASENAME___Demo.log("tweet success"); }, 
            function(e){ ___FILEBASENAME___Demo.log("tweet failure: " + e); }, 
            "Text, Image, URL", 
            {
                urlAttach:"https://github.com/brianantonelli", 
                imageAttach:"http://zomgdinosaurs.com/zomg.jpg"
            });
    },
	 
	 */

    tweet2:function(){
        ___FILEBASENAME___Demo.log("wait..");
        window.plugins.___FILEBASENAME___.composeTweet(
            function(s){ ___FILEBASENAME___Demo.log("tweet success"); }, 
            function(e){ ___FILEBASENAME___Demo.log("tweet failure: " + e); }, 
            "Text, Remote Image", 
            {
                imageAttach:"http://zomgdinosaurs.com/zomg.jpg"
            });
    },

    tweet6:function(){
        ___FILEBASENAME___Demo.log("wait..");
        window.plugins.___FILEBASENAME___.composeTweet(
                                            function(s){ ___FILEBASENAME___Demo.log("tweet success"); }, 
                                            function(e){ ___FILEBASENAME___Demo.log("tweet failure: " + e); }, 
                                            "Text, Local Image", 
                                            {
                                            imageAttach:"www/ninja-lolcat.gif"
                                            });
    },

    tweet3:function(){
        ___FILEBASENAME___Demo.log("wait..");
        window.plugins.___FILEBASENAME___.composeTweet(
            function(s){ ___FILEBASENAME___Demo.log("tweet success"); }, 
            function(e){ ___FILEBASENAME___Demo.log("tweet failure: " + e); }, 
            "Text, URL", 
            {
                urlAttach:"https://github.com/brianantonelli"
            });
    },

    tweet4:function(){
        ___FILEBASENAME___Demo.log("wait..");
        window.plugins.___FILEBASENAME___.composeTweet(
            function(s){ ___FILEBASENAME___Demo.log("tweet success"); }, 
            function(e){ ___FILEBASENAME___Demo.log("tweet failure: " + e); }, 
            "Text");
    },
    
    tweet5:function(){
        ___FILEBASENAME___Demo.log("wait..");
        window.plugins.___FILEBASENAME___.composeTweet(
            function(s){ ___FILEBASENAME___Demo.log("tweet success"); }, 
            function(e){ ___FILEBASENAME___Demo.log("tweet failure: " + e); });
    },

    timeline:function(){
        ___FILEBASENAME___Demo.log("wait..");
        window.plugins.___FILEBASENAME___.getPublicTimeline(
            function(s){ ___FILEBASENAME___Demo.log("timeline success: " + JSON.stringify(s)); }, 
            function(e){ ___FILEBASENAME___Demo.log("timeline failure: " + e); });
    },
    
    mentions:function(){
        ___FILEBASENAME___Demo.log("wait..");
        window.plugins.___FILEBASENAME___.getMentions(
            function(s){ ___FILEBASENAME___Demo.log("mentions success: " + JSON.stringify(s)); }, 
            function(e){ ___FILEBASENAME___Demo.log("mentions failure: " + e); });
    },
    
    friendsIds:function(){
        ___FILEBASENAME___Demo.log("wait..");
        window.plugins.___FILEBASENAME___.getTWRequest(
            'friends/ids.json',
            {},
            function(s){ ___FILEBASENAME___Demo.log("friendsIds success: " + JSON.stringify(s)); }, 
            function(e){ ___FILEBASENAME___Demo.log("friendsIds failure: " + e); });
    },
    
    usersLookup:function(){
        ___FILEBASENAME___Demo.log("wait..");
        window.plugins.___FILEBASENAME___.getTWRequest(
            'users/lookup.json',
            {user_id: '16141659,783214,6253282'},
            function(s){ ___FILEBASENAME___Demo.log("usersLookup success: " + JSON.stringify(s)); }, 
            function(e){ ___FILEBASENAME___Demo.log("usersLookup failure: " + e); },
            {requestMethod: 'POST'});
    }
    
    
};
