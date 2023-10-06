import dotenv from 'dotenv';
dotenv.config();
import passport from 'passport';
import GoogleStrategy from 'passport-google-oauth20';
import { User } from '../index.js';

passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_SECRET,
            callbackURL: process.env.GOOGLE_CALLBACK,
        },
        async (accessToken, refreshToken, profile, done) => {
            try {
                // Check if the user exists in the database
                let user = await User.findOne({ googleId: profile.id });

                if (user) {
                    // If the user exists, proceed to the next middleware
                    return done(null, user);
                } else {
                    // If the user doesn't exist, create a new user
                    user = new User({
                        googleId: profile.id,
                        name: profile.displayName,
                        email: profile.emails[0].value,
                        // Add any other fields you want to save
                    });

                    await user.save();
                    return done(null, user);
                }
            } catch (error) {
                return done(error, null);
            }
        }
    )
);

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    const user = await User.findById(id);
    done(null, user);
});

export default passport;
