function TodoItem2() {
  let todoName = "Go to College";
  let todoDate = "18/06/2024";
  return (
    <div class="container mk-row">
      <div class="row">
        <div class="col-6">{todoName}</div>
        <div class="col-4">{todoDate}</div>
        <div class="col-2">
          <button class="btn btn-danger mk-button">Delete</button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem2;
