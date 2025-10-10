import User from "../models/User.js"

export default{
   async register(userData) {
        const user = new User(userData);
        await user.save(); 
    }
}