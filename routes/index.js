var express = require('express');
const itemCtrl = require('./../controllers/items')
var router = express.Router();
const Item = require('../models/item')




router.get('/', itemCtrl.index)

router.get('/new', function(req, res) {
  res.render('new')
})

router.get('/:id', async function(req, res){
  let item = await Item.findById(req.params.id)
  res.render('comment', {item})
})

router.post('/new', itemCtrl.create)

router.post('/:id', async function(req, res){
  let item = await Item.findById(req.params.id)
  item.comment.push(req.body)
  await item.save()
  res.redirect(`/${item.id}`)
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

// router.get('/', itemCtrl.show)

module.exports = router;
