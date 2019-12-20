var aspirations = ["App Developer", "Web Developer", "Game Programmer", "Adult"];
let curr=0;
$(document).ready(function() {
  setInterval(rotate, 3000);
  let platform = getMobileOperatingSystem();
  setInterval(bounce, 1500);
});

function bounce(){
    $(".scrollbar").animate({ 
        top: "-=8px",
    }, 500 );
    $(".scrollbar").animate({ 
        top: "+=8px",
    }, 500 );
}

function rotate(){
    elem = $("#asp");
    elem.fadeOut(function(){
          elem.html(aspirations[curr]);
          curr++;
          if(curr >= aspirations.length) { curr = 0; }
          elem.fadeIn();
    });
}

function getMobileOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Windows Phone must come first because its UA also contains "Android"
    if (/windows phone/i.test(userAgent)) {
        return "Windows Phone";
    }

    if (/android/i.test(userAgent)) {
        return "Android";
    }

    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return "iOS";
    }

    return "unknown";
}