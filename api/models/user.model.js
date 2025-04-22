import mongoose from 'mongoose';

// Setting rules/validation for the user before he/she can register 
const userSchema = new mongoose.Schema ({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    }, 
},
{
    timestamps: true,
}
);

const User = mongoose.model("user", userSchema);

export default User;