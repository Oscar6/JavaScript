var todos = ["Buy New Turtle"];

var input = prompt("What would you like to do?");

while(input !== "quit"){
	//handle input
	if(input === "list") {
		listTodos();
	} else if(input === "new") {
	 	addTodo();
	} else if(input === "delete"){
		deleteTodo();
	}

	//ask again for new input
	input = prompt("What would you like to do?");
}
console.log("OK, YOU QUIT THE APP");

//FUNCTIONS FOR ToDoS
function listTodos(){
	console.log("******")
		todos.forEach(function(todo, i){
			console.log(i + ": " + todo);
		});
		console.log("******")
}

function addTodo(){
	//ask for new to do
	var newTodo = prompt("Enter new todo");
	//add new to dos array
		todos.push(newTodo);
		console.log("Added To Do");
}

function deleteTodo(){
	//ask for index of to do to be deleted
		var index = prompt("Enter index of to do to delete");

		//delete that to do
		//splice()
		todos.splice(index,1);
		console.log("Deleted To Do");
}