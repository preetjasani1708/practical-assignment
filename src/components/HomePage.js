import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteTask } from '../features/dataSlice';

const HomePage = () => {
  const tasks = useSelector((state) => state.data.tasks);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      dispatch(deleteTask(id));
    }
  };

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Task List</h2>
        <Link to="/add" className="btn btn-primary">
          Add New Task
        </Link>
      </div>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Task Name</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task.id}>
                <td>{task.name}</td>
                <td>{task.description}</td>
                <td>
                  <Link
                    to={`/update/${task.id}`}
                    className="btn btn-warning btn-sm me-2"
                  >
                    Update
                  </Link>
                  <button
                    onClick={() => handleDelete(task.id)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {!tasks?.length && (<div className='d-flex justify-content-center align-items-center'>
          No Record Found.
        </div>)}
      </div>
    </div>
  );
};

export default HomePage;
