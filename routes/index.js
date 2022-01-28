var express = require('express');
const itemCtrl = require('./../controllers/items')
var router = express.Router();
const Item = require('../models/item')
const passport = require('passport');

router.get('/', itemCtrl.index)

router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect : '/',
    failureRedirect : '/'
  }
));

router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

router.get('/new', function(req, res) {
  res.render('new')
})

router.post('/new', itemCtrl.create)

router.post('/:id/comment', async function(req, res){
  let item = await Item.findById(req.params.id)
  item.comment.push(req.body)
  await item.save()
  res.redirect(`/${item.id}/comment`)
})

router.get('/:id/edit', async function(req, res){
  let item = await Item.findById(req.params.id)
  res.render('edit', {item})
})

router.put('/:id', async function(req, res){
  let item =  await Item.findById(req.params.id) 
  item.name = req.body.name
  item.purchasePrice = req.body.purchasePrice
  item.purchaseDate = req.body.purchaseDate
  item.save()
  res.redirect('/')
})

router.delete('/:id', itemCtrl.deleteOne)

router.delete('/:id/comment', itemCtrl.deleteComments)

router.get('/:id/comment', async function(req, res){
  let item = await Item.findById(req.params.id)
  res.render('comment', {item})
})

module.exports = router;
