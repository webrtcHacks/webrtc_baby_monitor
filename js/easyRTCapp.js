//source: https://github.com/priologic/easyrtc/blob/master/docs/easyrtc_client_tutorial.md
     
     easyRTC.setStreamAcceptor( function(callerEasyrtcid, stream) {  
        var video = document.getElementById('remote');
        easyRTC.setVideoObjectSrc(video, stream);
    });

     easyRTC.setOnStreamClosed( function (callerEasyrtcid) {
        easyRTC.setVideoObjectSrc(document.getElementById('remote'), "");
    });

    
    function my_init() {

        easyRTC.setLoggedInListener( loggedInListener);
        var connectSuccess = function(myId) {
            console.log("My easyrtcid is " + myId);
        }
        var connectFailure = function(errmesg) {
            console.log(errmesg);
        }

    //ADDED THIS
    easyRTC.setApiKey("4lbjgglag51i4thm");
    easyRTC.setSocketUrl("https://lb1.easyrtc.com/");


    easyRTC.enableDebug(false);
    console.log("EasyRTC Initializing.");
    
    //Prevent audio feedback when self-testing
    easyRTC.enableAudio(false);
    //easyRTC.enableDebug(true);
    console.log("EasyRTC Initializing.");
    
        easyRTC.initMediaSource(
              function () {      // success callback    
                  var selfVideo = document.getElementById("local");
                  easyRTC.setVideoObjectSrc(selfVideo, easyRTC.getLocalStream());
                  easyRTC.connect("webrtcHacks Baby Monitor", connectSuccess, connectFailure);
              },
              connectFailure
        );
     }


    function loggedInListener(connected) {
        var otherClientDiv = document.getElementById('otherClients');
        while (otherClientDiv.hasChildNodes()) {
            otherClientDiv.removeChild(otherClientDiv.lastChild);
        }
        for(var i in connected) {
            var button = document.createElement('button');
            button.onclick = function(easyrtcid) {
                return function() {
                    performCall(easyrtcid);
                }
            }(i);

            label = document.createTextNode(i);
            button.appendChild(label);
            otherClientDiv.appendChild(button);
        }
    }


    function performCall(easyrtcid) {
        easyRTC.call(
           easyrtcid, 
           function(easyrtcid) { console.log("completed call to " + easyrtcid);},
           function(errorMessage) { console.log("err:" + errorMessage);},
           function(accepted, bywho) {
              console.log((accepted?"accepted":"rejected")+ " by " + bywho);
           }
       );
    }