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

});

function genProjects(){
  post.forEach(res => {
        let card = document.createElement("div");
        let title = document.createElement("h3");
        title.appendChild(document.createTextNode(res.title));

        card.appendChild(title);


        let desc = document.createElement("h4");
        desc.appendChild(document.createTextNode('Description:'));
        desc.style.margin=0;
        card.appendChild(desc);



        card.appendChild(createDesc(res.description));

        card.appendChild(createBr("-10px"));

        let tools = document.createElement("h4");
        tools.appendChild(document.createTextNode('Tools:'));
        tools.style.margin=0;
        card.appendChild(tools);


        card.appendChild(createTools(res.tools));


        card.appendChild(createBr("15px"));


        card.appendChild(createLink(res.link));

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

function createLink(text){
  let link = document.createElement("button");
  link.appendChild(document.createTextNode('GITHUB'));
  link.onclick = function() {
    window.open(text, '_blank');
  };
  if(text == ""){
    link.disabled=true;
    link.title="Code is not public.";
    link.style.color="grey";
    link.style.cursor="default"
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
