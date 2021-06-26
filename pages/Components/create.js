import { useState } from "react"
import baseUrl from "../../helper/baseUrl"

const create = () => {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [conpassword, setConPass] = useState('')
    const [email, setEmail] = useState('')
    // const [field, setField] = useState({
    //     name: '', password: '', conpassword: '', email: ''
    // })
    // const handleChange = (e) => {
    //     const name = e.target.name
    //     const value = e.target.value
    //     if (name === 'Username') {
    //         field.name = value
    //     }
    //     else if (name === 'password') {
    //         field.password = value
    //     }
    //     else if (name === "conPassword") {
    //         field.conpassword = value
    //     }
    //     else if (name === 'email') {
    //         field.email = value
    //     }
    //     console.log(field);
    // }
    const formSubmit = async (e) => {
        e.preventDefault();
        console.log(name, password, conpassword, email);
        const res = await fetch(`${baseUrl}/api/users`, {
            method: "POST", headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({
                name,
                password, conpassword,
                email,
            })
        })
        const result = await res.json()
        if (result.error) {
            M.toast({ html: result.error, classes: 'red' })
        } else {
            M.toast({ html: 'Record Save Successfully', classes: 'green' })
        }
    }
    return (
        <div>
            <div className="row">
                <form className="col s12" onSubmit={(e) => { formSubmit(e) }}>
                    <div className="row">
                        <div className="input-field col s12">
                            <input onChange={(e) => { setName(e.target.value) }}
                                value={name} name="Username" placeholder="Enter user Name" type="text" className="validate" />
                            <label >User Name</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input onChange={(e) => { setPassword(e.target.value) }} value={password} type="password"
                                name="password" className="validate" placeholder="Enter Password here " />
                            <label>Password</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input onChange={(e) => { setConPass(e.target.value) }} value={conpassword} type="password"
                                name="conPassword" placeholder="Re-Enter Password here" className="validate" />
                            <label>Confirm Password</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input onChange={(e) => { setEmail(e.target.value) }} value={email} type="email"
                                name="email" className="validate" placeholder="Enter Email" />
                            <label >Email</label>
                        </div>
                    </div>
                    <button className="btn waves-effect waves-light #b388ff deep-purple" type="submit" >Add User<i className="material-icons right">add</i>
                    </button>
                </form>
            </div>
        </div>
    )
}

export default create
