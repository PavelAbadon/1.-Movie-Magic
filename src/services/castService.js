import { get } from "mongoose";
import Cast from "../models/cast.js";

export default{
    create(castData){
        return Cast.create(castData);
    },

    getAll(filter = {}){
        let query = Cast.find();

        if (filter.includes) {
            query = query.in('_id', filter.includes);
        }    

        return query;
    }
}