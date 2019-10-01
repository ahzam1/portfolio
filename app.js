let focus = "projects"
$(document).ready(function() {
  genProjects();
   $(".subtitle").fadeIn("slow");
   $("li").click(function() {
     document.getElementById(focus).classList.remove("active");
     document.getElementById(focus.charAt(0)).style.display = "none";
     focus = $(this).attr('id')
     document.getElementById(focus).classList.add("active");
     document.getElementById(focus.charAt(0)).style.display = "block";
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


        let description = document.createElement("p");
        description.appendChild(document.createTextNode(res.description));
        description.style.margin=0;
        card.appendChild(description);

        card.appendChild(document.createElement("br"));
        let tools = document.createElement("h4");
        tools.appendChild(document.createTextNode('Tools:'));
        tools.style.margin=0;
        card.appendChild(tools);

        let used = document.createElement("p");
        used.appendChild(document.createTextNode(res.tools.join(", ")));
        used.style.margin=0;
        card.appendChild(used);


        let container = document.querySelector("#p");
        card.classList.add("card");
        container.appendChild(card);
    });
}
