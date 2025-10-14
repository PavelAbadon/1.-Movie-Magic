import User from "../models/User.js";
import bcrypt from 'bcrypt';
import { generateAuthToken } from "../utils/tokenUtils.js";




export default{
   async register(userData) {
        const isUserExists = await User.exists({email:  userData.email});
        if(isUserExists){
           throw new Error('User allready exists');

        }

        if(userData.password !== userData.rePassword){
            throw new Error("Паролата не е еднаква");
        }

        const user = await User.create(userData);
        const token = generateAuthToken(user)
        return token; 
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
        
        const token = generateAuthToken(user);
        return token;

    }
}