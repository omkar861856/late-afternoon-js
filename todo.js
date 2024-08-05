let form = document.querySelector(".todoForm");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(form);

  let todo = formData.get("todo");

  console.log(todo);

  // Add new todo to the list

  let li = document.createElement("li");

  li.innerHTML = `${todo}  <span onclick="DeleteTodo()">Delete</span>`;



  li.addEventListener("click", () => {
    li.classList.toggle("completed");
  });


  let list = document.querySelector("#todoList");

  list.appendChild(li);

  form.reset();
});


function DeleteTodo(){
    
}
