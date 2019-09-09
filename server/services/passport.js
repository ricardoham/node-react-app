const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');

passport.use(new GoogleStrategy({
  clientID: keys.googleClientID,
  clientSecret: keys.googleClienteSecret,
  callbackURL: '/auth/google/callback',

}, function (accessToken, refreshToken, profile, done) {
  console.log('access token ', accessToken);
  console.log('access refreshToken ', refreshToken);
  console.log('access profile ', profile);
}))