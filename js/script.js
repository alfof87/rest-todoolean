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
    success: function(data){
      console.log(data);
      printTasks(data);

    },
    error: function(error){
      console.log("error");
    }
  });
}

function printTasks(tasks){
  var target = $("#tasks");
  // target.text(" ");
  for (var i = 0; i < tasks.length; i++) {
    var task = tasks[i];
    target.append(`<li>${task.text}</li>`);
  }
}
function addInsertListener(){
  var btn = $("#btn");
  btn.click(postElements);
}

function postElements(){
  var inpText = $("#input-text");
  var text = inpText.val();
  // console.log(text);
  $.ajax({
    url: "http://157.230.17.132:3008/todos",
    method:  "POST",
    data: {
      text: text
    },
    success: function(data){
      console.log(data);
      $("#tasks").append(text);
    },
    error: function(error){
      console.log("error");
    }
  });
}
//????????????????
function printTasks(tasks){
  var target = $("#tasks");
  target.text(" ");
  for (var i = 0; i < tasks.length; i++) {
    var task = tasks[i]
    target.append(`<li>${task.text}</li>`);
  }
}
//????????????????????
// function deletelistener(){
//   var x = $("<span>x</span>");
//   x.click(function(){
//     `<li>${task.text}<span>x</span></li>`.empty();
//   })
// }
function init(){
// deletelistener();
addInsertListener();
postElements();
getElements();
}
$(document).ready(init);
