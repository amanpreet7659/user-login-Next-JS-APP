// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import initDB from "../../helper/initDB";
import Users from '../../models/user'

// export default function handler(req, res) {
//   res.status(200).json({ name: 'John Doe' })
// }


initDB();

export default async (req, res) => {
  switch (req.method) {
    case 'GET': {
      await getAllUsers(req, res)
      break
    }
    case "POST":
      {
        await saveProduct(req, res)
        break
      }
    case "DELETE": {
      await deleteUser(req, res)
      break
    }
  }
}

const getAllUsers = async (req, res) => {
  Users.find().then(user => { res.status(200).json(user) })
}
const saveProduct = async (req, res) => {
  console.log('req.body', req.body)
  const { name, password, conpassword, email } = req.body
  if (!name || !password || !conpassword || !email) {
    return res.status(422).json({ error: "Please fill all Details" })//Apropriate data not Received
  }
  const product = await new Users({
    name, password, conpassword, email
  }).save()
  res.status(200).json(product)
}

const deleteUser =async (req,res)=>{
  console.log(req.body);
}