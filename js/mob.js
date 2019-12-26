var aspirations = ["App Developer", "Web Developer", "Game Programmer", "Adult"];
let curr=0;
$(document).ready(function() {
  setInterval(rotate, 3000);
  let platform = getMobileOperatingSystem();
  setInterval(bounce, 1500);
  genMobProjects();
});

function genMobProjects(){
    post.forEach(res => {
        let card = document.createElement("div");
        let title = document.createElement("h2");
        title.appendChild(document.createTextNode(res.title));

        card.appendChild(title);

        let desc = document.createElement("h4");
        desc.appendChild(document.createTextNode('DESCRIPTION:'));
        desc.style.margin=0;
        card.appendChild(desc);

        card.appendChild(createDesc(res.description));

        card.appendChild(createBr("-10px"));

        let tools = document.createElement("h4");
        tools.appendChild(document.createTextNode('TOOLS:'));
        tools.style.margin=0;
        card.appendChild(tools);

        card.appendChild(createTools(res.tools));

        card.appendChild(createBr("15px"));

        card.appendChild(createLink(res.link,res.video));

        let container = document.querySelector(".projects_container");
        card.classList.add("project_card");
        container.appendChild(card);
    });
}

function createDesc(text){
    let description = document.createElement("p");
    description.appendChild(document.createTextNode(text));
    description.style.margin=0;
    return description;
  }
  
  function createTools(text){
    let used = document.createElement("p");
    used.appendChild(document.createTextNode(text.join(", ")));
    used.style.margin=0;
    return used;
  }
  
  function createLink(text, video){
    let link = document.createElement("button");
  
    if(video && video.length>0){
      link.appendChild(document.createTextNode('VIDEO'));
      link.onclick = function() {
        window.open(video, '_blank');
      };
    } else if(text == ""){
      link.disabled=true;
      link.title="Code is not public.";
      link.style.color="grey";
      link.style.cursor="default"
    }else{
      link.appendChild(document.createTextNode('GITHUB'));
      link.onclick = function() {
        window.open(text, '_blank');
      };
    }
    return link;
  }
  
  function createBr(size){
    let br = document.createElement("br");
    br.style.marginTop=size;
    return br;
  }

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