WebRTC Motion Detecting Baby Monitor
====================================

WebRTC-based baby monitor with motion detection.

WebRTC elements utilize on Priologic's EasyRTC Enterprise - https://github.com/priologic/easyrtc
Motion detection elements based on Really Good's js motion detection - https://github.com/ReallyGood/js-motion-detection 

This is currently a very crude proof-of-concept for demonstration purposes. Call is established using easyRTC and the video stream is redirected to motion.js. Motion.js detects motion by comparing frames in the video stream. If the motion level is very low (currently set to 1 - very sensitive) - a 'motion' event is fired. beep.js plays a beep when it sees this this event.

Please see http://webrtchacks.com/baby-motion-detector/ for more details.

