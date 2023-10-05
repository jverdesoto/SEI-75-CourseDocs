import 'dotenv/config'
import mongoose from "mongoose";
import User from '../models/userModel.js';
mongoose.connect(`${process.env.DATABAE_URL}`);

export default {
    saveUser,
    updateUser,
    getUser
}

async function saveUser(userEmail,userName){
    // get user from database
    let status = 200;
    console.log(`save user data : ${userEmail} and ${userName}`);
    // if the user exists, update user loggedin time
    let userObject = getUser(userEmail);
    if(userObject!==null)
    {
        status = updateUser(userName);
    }// else save new user
    else{
        try{
            const newUser = new User({
                name: userName,
                email: userEmail,
                lastLoginTime: new Date().getTime() 
            })

            newUser.save();
            status = 200;
        }catch(error)
        {
            status = 500;
        }
    }
    return status;
}

// update an existing  book  title and published date
async function updateUser(userName){
    console.log(`User Email : ` + userName);
    const filter = {"email": `${userName}`};
   
    User.updateOne(filter, {
        name: userName,
        lastLoginTime: new Date().getTime()
    }).then(()=>{
        console.log('Update User')
        return 200;
    }).catch((error) => {
        console.log('Update User Error')
        console.log(error);
        return 500;
    });
}


async function getUser(userEmail){
    console.log(`User email = ${userEmail}`)
    const filter = {"email": `${userEmail}`};
    return await User.findOne(filter)
}
