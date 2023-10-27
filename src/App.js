import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [id, setId] = useState();
  const [password, setPassword] = useState();
  const [message, setMessage] = useState();
  const [responseMessage, setResponseMessage] = useState();

  const handleIdChange = (e) => {
    setId(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

  localStorage.setItem("items" , JSON.stringify(responseMessage))
  console.log(JSON.stringify(responseMessage))
 

    const clientId = '123456789';
    const clientSecret = '987654321';

    const base64Credentials = btoa(`${clientId}:${clientSecret}`);

    // Data in x-www-form-urlencoded format
    const data = new URLSearchParams();
    data.append('scope', 'public');
    data.append('grant_type', 'client_credentials');

    const headers = {
      'Authorization': `Basic ${base64Credentials}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    };

    axios.post('https://dipeshchapagain.com.np/oauth/api/access-token', data, { headers })
    .then((response) => {
      console.log('Response:', response);

      if (response.data.access_token) {
        setMessage('Login successful!'); 
        setResponseMessage(response.data);
      } else {
        setMessage('Authentication error: No access token received.');
      }
    })
    .catch((error) => {
      console.log('Error:', error);
      setMessage('An error occurred. Please try again later.');
      console.error(error);
    });
  };


  return (
    <div className='App'>
      <form autoComplete='off' style={{ "margin": "150px", "padding": "100px" }} onSubmit={handleSubmit}>
        <div className="form-group row">
          <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">ID</label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              placeholder="ID"
              value={id}
              onChange={handleIdChange}
            />
          </div>
          <br/> <br /> <br />
        </div>
        <div className="form-group row">
          <label htmlFor="inputPassword3" className="col-sm-2 col-form-label" autoCorrect='new-password'>Password</label>
          <div className="col-sm-10">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <br/> <br /> <br />
        </div>
        <div className="form-group row">
          <div className="col-sm-10">
            <button type="submit" className="btn btn-primary">Sign in</button>
          </div>
        </div>
      </form>
      <div className="message" style={{"marginLeft":"250px"}}>
      <h1>{message}</h1>
      <p>{JSON.stringify(responseMessage, null, 1)}</p>
      </div>
    </div>
  );
}

export default App;