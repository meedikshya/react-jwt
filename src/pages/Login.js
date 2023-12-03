import React from 'react'

export const Login = ({handleSubmit,id,handleIdChange,password,handlePasswordChange,message}) => {
  return (
    <div>

 <form style={{ "margin": "150px", "padding": "100px" }} onSubmit={handleSubmit}>
        <div className="form-group row">
          <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">ID</label>
          <div className="col-sm-10">
            <input autoComplete='off'
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
          <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
          <div className="col-sm-10">
            <input
            autoComplete='new-password'
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
      <span>
      #####NOTE#####
      
      <br/>
      username:123456789
      password:987654321
      </span>
      </div> 

    </div>
  )
}
