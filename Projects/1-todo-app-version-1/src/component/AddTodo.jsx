function AddTodo() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <input type="text" placeholder="Enter Todo here" />
          </div>
          <div className="col-4">
            <input type="date" />
          </div>
          <div className="col-2">
            <button type="button" className="btn btn-success">
              Add
            </button>
          </div>
        </div>

        <div className="row mt-2">
          <div className="col-6">Buy Milk</div>
          <div className="col-4 justify-content-md-center">4/10/2023</div>
          <div className="col-2">
            <button type="button" className="btn btn-danger">
              Delete
            </button>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-6">Go to College</div>
          <div className="col-4 justify-content-md-center">4/10/2023</div>
          <div className="col-2">
            <button type="button" className="btn btn-danger">
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default AddTodo;
