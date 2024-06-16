function AddTodo() {
  return (
    <div class="container text-center">
      <div class="row">
        <div class="col-6">
          <input placeholder="Enter Todo here"></input>
        </div>
        <div class="col-4">
          <input type="date"></input>
        </div>
        <div class="col-2">
          <button class="btn btn-success mk-button">Add</button>
        </div>
      </div>
    </div>
  );
}
export default AddTodo;
