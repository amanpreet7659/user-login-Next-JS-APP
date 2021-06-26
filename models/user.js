import moongose from 'mongoose'

const userSchema = new moongose.Schema({
    name: {
        type: String,
        required: true,
    },
    password: {
        type: String, required: true,
    },
    conpassword: {
        type: String, required: true,
    },
    email: {
        type: String, required: true,
    }
})

export default moongose.models.user || moongose.model('user', userSchema)