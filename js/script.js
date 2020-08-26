//REPO: rest-todoolean
// GOAL: replicare quanto visto a lezione sulla todo-list permettendo all'utente di leggere tutti i task inseriti, inserirne di nuovi, eliminare quelli vecchi
// API:
// 	READ: GET - http://157.230.17.132:3008/todos
// 	INSERT: POST - http://157.230.17.132:3008/todos - DATA: text
// 	DELETE: DELETE - http://157.230.17.132:3008/todos/ID

function getElements(){

  $.ajax({
    url: "http://157.230.17.132:3008/todos",
    method: "GET",
    // data:{
    //   text: text,
    //
    // },
    success: function(data){
      console.log(data);
      // var template = $("elements-template");
      // var compiled = Handlebars.compile(template);
      // var target = $("#target ul");
      // var targetHTML = compiled(target);
      // target.append(targetHTML);
    },
    error: function(error){
      console.log("error");
    }
  });
}





function init(){

getElements();
}
$(document).ready(init);
