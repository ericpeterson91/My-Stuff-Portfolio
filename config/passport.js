// const passport = require('passport');
// const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
// const Item = require('../models/item');


// passport.use(new GoogleStrategy({
//     clientID: process.env.GOOGLE_CLIENT_ID,
//     clientSecret: process.env.GOOGLE_SECRET,
//     callbackURL: process.env.GOOGLE_CALLBACK
//   },
//   function(accessToken, refreshToken, profile, cb) {
    
//     Item.findOne({ 'googleId': profile.id }, function(err, item) {
//         if (err) return cb(err);
//         if (item) {
//           return cb(null, item);
//         } else {
//           // we have a new item via OAuth!
//           var newItem = new Item({
//             name: profile.displayName,
//             email: profile.emails[0].value,
//             googleId: profile.id
//           });
//           newItem.save(function(err) {
//             if (err) return cb(err);
//             return cb(null, newItem);
//           });
//         }
//       });
//   }
// ));

// passport.serializeUser(function(item, done) {
//     done(null, item.id);
// });

// passport.deserializeUser(function(id, done) {
//     Item.findById(id, function(err, item) {
//       done(err, item);
//     });
//   });