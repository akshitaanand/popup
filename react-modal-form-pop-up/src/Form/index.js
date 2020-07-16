import React from 'react';

export const Form = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <div className="Words">
        <header1>Sign In</header1>
      </div>

      <div className="form-group">
        <label htmlFor="email">Username</label>
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="Enter your username"
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
export default Form;

