import React from 'react';

export const Form2 = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <div className="Words">
        <header1>Sign Up</header1>
      </div>
      <div className="form-group">
        <label htmlFor="name">First Name</label>
        <input
          type="name"
          className="form-control"
          id="name"
          placeholder="Enter your first name"
        />
      </div>

      <div className="form-group">
        <label htmlFor="name">Last Name</label>
        <input
          type="name"
          className="form-control"
          id="name"
          placeholder="Enter your last name"
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="Enter your email"
        />
      </div>
      <div className="form-group">
        <label htmlFor="name">Password</label>
        <input className="form-control" id="password" placeholder="Enter your password" />
      </div>
      <div className="form-group">
        <button className="form-control btn btn-primary" type="submit">
          Log In
        </button>
      </div>
    </form>
  );
};
export default Form2;

