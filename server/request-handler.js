import bcrypt from "bcrypt" ;
import jwt from "jsonwebtoken";



import loginSchema from "../schema/fileSchema.js"

let { sign } = jwt;


export async function register(req , res){
    try {
        let  {username , password , moviename , language , duration , year , genre, description , rating , vote}  = req.body;
        let userExist = await loginSchema.findOne({username});
        if(userExist){
            return res.status(400).send("Username already exist!!!");
        }
        let hashPass = await bcrypt.hash(password , 10);
        let result = await loginSchema.create({
            username , 
            password : hashPass ,
            moviename ,
            language ,
            duration ,
            year,
            genre,
            description,
            rating ,
            vote
        })
        if(result){
            return res.json("Registration Successful");
        }
    } catch (error) {
        console.log(error);
        return res.status(500).send("Error occured");
    }
}



export async function login(req , res){
    try {
        let { username , password } = req.body;

        let user = await loginSchema.findOne({username});
        if(!user){
            return res.status(400).send("Invalid username and password");
        }
        let match = await bcrypt.compare(password , user.password);
        if(match){
            let token = await sign({
                username :user.username,
                id: user._id
            },
            process.env.SECRET_KEY,{
                expiresIn : "24h"
            })
            return res.status(200).json({
                msg : "Login Succesfull",
                token
            });
        }
        return res.status(400).send("Invalid username and password");
    } catch (error) {
        console.log(error);
        return res.status(500).send("Error occured");
    }
}

export async function getPrivateData(req, res) {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        const user = await loginSchema.findOne({ _id: decoded.id });

        
        if (user) {
           
            return res.json({
                username: user.username,
                moviename: user.moviename,
                language: user.language,
                duration: user.duration,
                year : user.year,
                genre:user.genre,
                description: user.description,
                rating: user.rating,
                vote: user.vote

            });
        } else {
            return res.status(404).json({ error: 'User not found' });
        }
    } catch (error) {
        console.error(error);
        return res.status(401).json({ error: 'Unauthorized' });
    }
}

