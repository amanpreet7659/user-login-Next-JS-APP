import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'
import baseUrl from '../../helper/baseUrl'
import Link from 'next/link'

const AllUsers = ({ user }) => {
    const modelRef = useRef(null)
    const modelRef1 = useRef(null)
    const router = useRouter()
    const [id, setId] = useState()
    if (router.isFallback) {
        return <h1>loadding...</h1>
    }
    const deleteUser = async () => {
        const res = await fetch(`${baseUrl}/api/user`, { method: "DELETE",})
        await res.json()
        router.push('/')
    }
    useEffect(() => {
        M.Modal.init(modelRef.current)
        M.Modal.init(modelRef1.current)
    }, [])
    const editModal = () => {
        return (<div ref={modelRef} id="modal1" className="modal">
            <div className="modal-content">
                <h4>Edit Modal Header</h4>
                <p>A bunch of text</p>
            </div>
            <div className="modal-footer">
                <a href="#!" className="modal-close waves-effect waves-green btn-flat">Agree</a>
            </div>
        </div>)
    }

    console.log('id,', id);
    const deleteModal = () => {
        return (<div ref={modelRef1} id="modal2" className="modal">
            <div className="modal-content">
                <h4>Are you Sure to want to Delete </h4>
                <p></p>
            </div>
            <div className="modal-footer ">
                <a className="btn modal-trigger btn-floating  waves-effect waves-light red" data-target="modal2"> <i className="material-icons">cancel</i></a>
                <button className="btn modal-trigger btn-floating  waves-effect waves-light red" onClick={() => { deleteUser() }}data-target="modal2"><i  className="material-icons">check</i></button>
            </div>
        </div>)
    }
    console.log('User', user);
    return (
        <div >
            <table className='highlight '>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Password</th>
                        <th>Con-Password</th>
                        <th>Email</th>
                    </tr>
                </thead>

                <tbody>
                    {user.map((i) => {
                        return <tr>
                            <td>{i.name}</td>
                            <td>{i.password}</td>
                            <td>{i.conpassword}</td>
                            <td>{i.email}</td><td><Link href="/user/[id]" as={`/user/${i._id}`}><a><i className="material-icons" >edit</i></a></Link></td>   
                        </tr>
                    })}
                </tbody>
                {deleteModal()}
            </table>
            {editModal()}
        </div>
    )
}

export async function getStaticProps() {
    const res = await fetch(`${baseUrl}/api/users`, { method: "GET" })
    const data = await res.json()
    return {
        props: {
            user: data
        }
    }
}

export default AllUsers
