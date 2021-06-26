import { useState } from "react"

const Login = () => {
    const [name,setName]=useState('')
    const [pass,setPass]=useState('')
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log("login",name,pass);
    }
    return (
        <div className="container center-align ">
            <div className="row">
                <form onSubmit={(e)=>{handleSubmit(e)}} className="col s12 ">
                    <div className="row ">
                        <div className="input-field col s12">
                            <input placeholder="Enter Username" type="text"
                            value={name} onChange={(e)=>{setName(e.target.value)}}
                            className="validate" />
                            <label >User Name</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12 ">
                            <input id="password" onChange={(e)=>{setPass(e.target.value)}} value={pass} type="password" className="validate" />
                            <label >Password</label>
                        </div>
                    </div>
                    <button class="btn waves-effect waves-light" type="submit" >Login<i class="material-icons right">login</i>
                    </button>
                    {/* <button class="btn waves-effect waves-light" type="submit" >Reset Password<i class="material-icons right"></i>
                    </button> */}
                </form>
            </div>
        </div>
    )
}

export default Login
