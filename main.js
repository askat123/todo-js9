const input = document.querySelector(".input");
const btn = document.querySelector(".add");
const list = document.querySelector(".list");

btn.addEventListener("click", () => {
  if (input.value === "") {
    alert("ПУСТОЕ ПОЛЕ!!!");
  } else {
    const todo = document.createElement("li");
    todo.classList.add("block");
    const textTodo = document.createElement("span");
    textTodo.textContent = input.value;
    todo.append(textTodo);
    list.append(todo);
    input.value = "";
    console.log(input.value);
    const delBtn = document.createElement("button");
    delBtn.classList.add("delBtn");
    delBtn.innerHTML = "delete";

    // delete
    delBtn.addEventListener("click", () => {
      list.removeChild(todo);
    });
    todo.append(delBtn);
    // edit
    const editBtn = document.createElement("button");
    editBtn.classList.add("editBtn");
    editBtn.innerHTML = "edit";
    editBtn.addEventListener("click", () => {
      const editInput = document.createElement("input");
      editInput.type = "text";
      todo.replaceChild(editInput, textTodo);
      editInput.value = textTodo.textContent;
      editInput.addEventListener("blur", () => {
        textTodo.textContent = editInput.value;
        todo.replaceChild(textTodo, editInput);
      });
    });
    todo.append(editBtn);
  }
});
