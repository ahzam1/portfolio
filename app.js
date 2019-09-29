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

        let description = document.createTextNode('Description:' + res.description + ', ');
        card.appendChild(description);

        let date = document.createTextNode('date:' + res.id);
        card.appendChild(date);

        let container = document.querySelector("#p");
        card.classList.add("card");
        container.appendChild(card);
    });
}
