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
    let status = 200;
    if(await User.count({"email": userEmail}) === 0){
        // save new user
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
    }else{
        const lastLoggedInTime = new Date().getTime();
        console.log(`Updated lastLoggedin time : ${lastLoggedInTime}`);
    
        await User.findOneAndUpdate({"email": userEmail},{
            name: userName,
            lastLoginTime: lastLoggedInTime
        })
        status = 200;
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
