import React from "react";
import "../component/In.css";
import { Link } from "react-router-dom";

const Up = () => {
  return (
    <div className="flex-container up">
      <div className="content-container">
        <div className="form-container">
          <form>
            <h1>Sign Up</h1>
            <div className="align">
              <span className="subtitle">FULL NAME:</span>
              <input type="text" name="username" />
              <span className="subtitle">USERNAME:</span>
              <input type="text" name="username" />
              <span className="subtitle">EMAIL:</span>
              <input type="text" name="username" />
              <span className="subtitle">PASSWORD:</span>
              <input type="password" name="password" />
              <input type="submit" value="SIGN UP" className="submit-btn" />
              <p className="center subtitle fancy">OR</p>
              <p className="center subtitle">
                Already have an account, <Link to="/">SIGN IN</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Up;
