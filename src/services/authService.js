import User from "../models/User.js";
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";

const JWT_SECRET = 'ghjugtyufhjvbnv$EGHEEEEEEEEEEEEET';

export default{
   async register(userData) {
        const user = new User(userData);
        await user.save(); 
    },

    async login(email, password){
        const user = await User.findOne({ email });
        if(!user){
            throw new Error('Invalid User or Password');
        }

        const isValid = await bcrypt.compare(password, user.password)
        if(!isValid){
            throw new Error('Invalid User or Password');
        }

        const payload = {
            id: user.id,
            email:user.email,
        }
        const token = jwt.sign(payload, JWT_SECRET, {expiresIn: '2h'});
        return token;

    }
}