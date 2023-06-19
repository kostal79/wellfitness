const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const LocalStrategy = require("passport-local").Strategy;
const passport = require("passport")
const User = require("./models/user");
const Basket = require('./models/basket');

const GOOGLE_CLIENT_ID = "143816524808-epo6t6kq9m7rl9m96is2kgdsh429onrv.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";
const FACEBOOK_APP_ID = process.env.FACEBOOK_APP_ID;
const FACEBOOK_APP_SECRET =process.env.FACEBOOK_APP_SECRET;

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/api/auth/google/callback",
    },
    async function (accessToken, refreshToken, profile, done) {
      const user = await User.findOne({ googleId: profile.id })
      if (user) {
        done(null, user);
      } else {
        const newUser = new User({
          first_name: profile.displayName,
          email: profile.emails[0].value,
          avatar: profile.photos[0].value,
          googleId: profile.id,
        })

        const user_id = newUser.id;

        const newBasket = new Basket({
          user_id: user_id
        })

        const basket_id = newBasket.id;

        newUser.basket = basket_id;

        await Promise.allSettled([newUser.save(), newBasket.save()]);
        done(null, newUser)
      }
    })
);

passport.use(
  new FacebookStrategy(
    {
      clientID: FACEBOOK_APP_ID,
      clientSecret: FACEBOOK_APP_SECRET,
      callbackURL: "/api/auth/google/callback",
    },
    async function (accessToken, refreshToken, profile, done) {
      const user = await User.findOne({ googleId: profile.id })
      if (user) {
        done(null, user);
      } else {
        const newUser = new User({
          first_name: profile.displayName,
          email: profile.emails[0].value,
          avatar: profile.photos[0].value,
          facebookId: profile.id,
        })
        await newUser.save()
        done(null, newUser)
      }
    })
);

passport.use("login", new LocalStrategy({
  usernameField: "email",
},
  async function (email, password, done) {
    try {
      const user = await User.findOne({ email: email })
      if (!user) { return done(null, false); }
      if (!user.verifyPassword(password)) { return done(null, false); }
      return done(null, user);
    } catch (error) {
      console.log(error)
      return done(error)
    }
  }
));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);
  done(null, user);
});