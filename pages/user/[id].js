import baseUrl from "../../helper/baseUrl";

const user = ({user}) => {
    console.log('user',user);
    return (<div>
        <a className="btn modal-trigger btn-floating  waves-effect waves #b388ff deep-purple " data-target="modal1"> <i className="material-icons">edit</i></a>
        <a className="btn modal-trigger btn-floating  waves-effect waves-light red" data-target="modal2"><i className="material-icons" >delete</i></a>
    </div>)
}

export async function getServerSideProps({ params: { id } }) {
    const res = await fetch(`${baseUrl}/api/user/${id}`)
    const data = await res.json()
    return {
        props: {
            user: data
        }
    }
}


export default user