import React, { useState } from 'react';
import axios from 'axios';
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Dashboard } from './pages/Dashboard';
import { Login } from './pages/Login';
import { Health } from './pages/Health';
import { Help } from './pages/Help';
import { Insights } from './pages/Insights';
import { Profile } from './pages/Profile';
import { Settings } from './pages/Settings';
import { Sidebar } from './Components/Sidebar';
import { ToastContainer } from 'react-toastify';
import { Navigate } from 'react-router-dom';


function App() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState();

  // const showToastMessage = () => {
  //   toast.success("Welcome :) ", {
  //     position: toast.POSITION.TOP_CENTER,
  //   });
  // }


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
        <ToastContainer />
        <Routes>
          <Route
            exact path="/react-jwt"
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

          <Route
            path="/Dashboard"
            element={
              <Sidebar>
                <Dashboard />
              </Sidebar>
            }
          />

          <Route
            path="/Health"
            element={
              <Sidebar>
                <Health />
              </Sidebar>
            }
          />
          <Route
            path="/Help"
            element={
              <Sidebar>
                <Help />
              </Sidebar>
            }
          />
          <Route
            path="/Insights"
            element={
              <Sidebar>
                <Insights />
              </Sidebar>
            }
          />
          <Route
            path="/Profile"
            element={
              <Sidebar>
                <Profile />
              </Sidebar>
            }
          />
          <Route
            path="/Settings"
            element={
              <Sidebar>
                <Settings />
              </Sidebar>
            }
          />
          
          <Route path="*" element={<Navigate to="/" />} />

        </Routes>
      </div>
    </Router>
  );
}
export default App;