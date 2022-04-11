const Item = require('./../models/item')

module.exports = {
    create,
    show,
    index,
    deleteOne, 
    update, 
    deleteComments
}

function update(req, res){
    const item = Item.findById(req.params.id) 
}
    
async function create(req, res) {
    req.body.user = req.user._id
    const item = await new Item(req.body)
    item.save()
    res.redirect('/') 
}


function getUserStatus(status) {
    if (status) return status
    else return null
}

function index(req, res) {
    let userStatus = getUserStatus(req.user)
    let search;
    if (userStatus) {
         search = userStatus._id 
       }
       else {
        search = {};
       }
    Item.find({user: search}, function(err, i){
        res.render('./index' , {
            items: i, 
            user: req.user,
        })
    })
}

async function deleteOne(req, res) {
    await Item.findByIdAndDelete(req.params.id)
    res.redirect('/')
}

async function deleteComments(req, res) {
    let item = await Item.findById(req.params.id)
    item.comment = [];
    await item.save()
    res.redirect(`/${req.params.id}/comment`)
}

function show(req, res) { 
    Item.findById(req.params.id, function(err, item) {
        res.render('./index', { Item });  
 })  
}