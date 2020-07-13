import React from "react";
import "../component/In.css";
import { Link } from "react-router-dom";

const In = () => {
  return (
    <div className="flex-container">
      <div className="content-container">
        <div className="form-container in">
          <form>
            <h1>Sign IN</h1>
            <div className="align">
              <span className="subtitle">USERNAME:</span>
              <input type="text" name="username" />
              <span className="subtitle">PASSWORD:</span>
              <input type="password" name="password" />
              <input type="submit" value="SIGN IN" className="submit-btn" />
              <p className="center subtitle fancy">OR</p>
              <p className="center subtitle">
                Haven't joined us yet, <Link to="/up">SIGN UP</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default In;
