import React, { useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Dashboard } from './Components/Dashboard';
import { Login } from './Components/Login';

function App() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState();


  const handleIdChange = (e) => {
    setId(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log('Form submitted');

    const clientId = `${id}`;
    const clientSecret = `${password}`;

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
          // setMessage('Login successful!');
          console.log('Login successful!');
          // setResponseMessage(response.data);

          // extracting just access token and expiry
          const accessToken = response.data.access_token;
          const expires_in = response.data.expires_in;
          console.log('Access Token:', accessToken, 'Expires in:', expires_in);

          // Get the existing data from local storage
          const storedData = JSON.parse(localStorage.getItem('items')) || [];

          // Creating a new object with the new data
          const testObject = { token: accessToken, expires_in: expires_in };

          // Adding the new object to the existing data
          storedData.push(testObject);

          // Store the updated data back in local storage
          localStorage.setItem('items', JSON.stringify(storedData));
          console.log(JSON.parse(localStorage.getItem('items')));

          window.location = '/Dashboard';
        } else {
          setMessage('Authentication error: No access token received.');
          // console.log('Authentication error: No access token received.');
        }
      })
      .catch((error) => {
        // console.log('Error:', error);
        setMessage('An error occurred. Please try again later.');
        // console.error(error);
        // console.log('An error occurred. Please try again later.');
      });
  };
  return (
      <Router>
    <div className="App">
        <Routes>
          <Route path="/Dashboard" element={<Dashboard welcomeMessage="Welcome" />} />
          <Route
            path="/"
            element={
              <Login
                handleSubmit={handleSubmit}
                id={id}
                handleIdChange={handleIdChange}
                password={password}
                handlePasswordChange={handlePasswordChange}
                message={message}
              />
            }
          />
        </Routes>
    </div>

      </Router>
  );
}
export default App;