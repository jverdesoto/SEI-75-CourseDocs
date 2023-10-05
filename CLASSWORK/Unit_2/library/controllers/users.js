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
    // if the user exists, update user loggedin time
    let userObject = await getUser(userEmail);
    if(userObject!==null)
    {
        status = updateUser(userEmail,userName);
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
async function updateUser(userEmail, userName){
    const filter = {"email": `${userEmail}`};
    const lastLoggedInTime = new Date().getTime();
    console.log(`Updated lastLoggedin time : ${lastLoggedInTime}`);
    User.updateOne(filter, {
        name: userName,
        lastLoginTime: lastLoggedInTime
    }).then(()=>{
        return 200;
    }).catch((error) => {
        return 500;
    });
}


async function getUser(userEmail){
    // console.log(`User email = ${userEmail}`)
    const filter = {"email": `${userEmail}`};
    let userObject = null;
   
    userObject = await User.findOne(filter)
    // console.log(`User Object = ${JSON.stringify(userObject)}`)
   
    return userObject;
}
