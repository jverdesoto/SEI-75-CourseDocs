const jwt = require('jsonwebtoken')
const User = require('../../models/user')
const bcrypt = require('bcrypt')


async function create(req, res) {
    try {
        // Add the user to the db
        const user = await User.create(req.body)
        const token = createJWT(user)
        res.json(token)
    } catch (err) {
        res.status(400).json(err)
    }
}

async function login(req, res) { 
    try {
        const { email, password } = req.body;
        
        const user = await User.findOne({ email });
        if (!user) {
            res.status(401).json({ error: 'User not found' });
            return;
        }
        
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            res.status(401).json({ error: 'Incorrect password' });
            return;
        }
        
        const token = jwt.sign({ user }, process.env.SECRET, { expiresIn: '48h' });
        res.json({ token });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
    // try { 
        //     const user = await User.findOne({ email: req.body.email })
        //     if (!user) throw new Error()
        
        //     const match = await bcrypt.compare(req.body.password, user.password); 
        //     if (!match) throw new Error();
        //      res.json( createJWT(user))
        // } catch { res.status(400).json('Bad Credentials')
        //    } 
    }
    
    function checkToken(req, res) {
        console.log('req.user', req.user)
        res.json(req.exp)
    }
    
    // Helper functions
    function createJWT(user) {
        return jwt.sign(
            { user },
            process.env.SECRET,
            { expiresIn: '48h'}
            )
        }
        
        
        module.exports = {
            create,
            login,
            checkToken
        }