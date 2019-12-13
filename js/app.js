let focus = "projects";
var aspirations = ["App Developer", "Web Developer", "Game Programmer", "Adult"];
var curr = 0;
$(document).ready(function() {
  genProjects();
  fillDesc();
  setInterval(rotate, 5000);
   $(".subtitle").fadeIn("slow");
   $("li").click(function() {
     sel = $(this).attr('id')
     document.getElementById(focus).classList.remove("active");
     $("#"+focus.charAt(0)).fadeOut("fast", function(){
       $("#"+sel.charAt(0)).fadeIn("fast");
     });
     document.getElementById(sel).classList.add("active");
     focus=sel;
   });
   if(window.mobilecheck()){
     //mobile phone
     alert("Mobile site is still under development, come back soon!");     
   }
});

function genProjects(){
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

        let container = document.querySelector("#p");
        card.classList.add("card");
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

function fillDesc(){
  document.getElementById('descme').innerHTML = about.about;
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

//credit to detectmobilebrowsers.com
window.mobilecheck = function() {
  var check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
};