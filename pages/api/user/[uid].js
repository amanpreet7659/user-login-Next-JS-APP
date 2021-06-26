import User from '../../../models/user'

export default async (req, res) => {
    switch (req.method) {
        case "GET":
            {
                await getUser(req, res)
                break
            }
        case "DELETE":
            {
                await deleteUser(req, res)
                break
            }
    }
}

const getUser = async (req, res) => {
    const { uid } = req.query
    console.log('uid',uid);
}