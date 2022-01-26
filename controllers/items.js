const Item = require('./../models/item')

module.exports = {
    create,
    show,
    index,
    deleteOne, 
    update
}

function update(req, res){
    const item = Item.findById(req.params.id) 
    }
    
    //how do I pass down the correct item to the edit EJS page?



async function create(req, res) {
    console.log(req.body)
    // Item.create(req.body)
    const item = await new Item(req.body)
    // item.sort({purchaseDate: 'desc'})
    item.save()
    res.redirect('/')

    // console.log(req.body)
}

function index(req, res) {
    // Item.sort({purchaseDate: 'desc'})
    Item.find({}, function(err, i){
        console.log(i)
        res.render('./index' , {items: i})
    })
}

async function deleteOne(req, res) {
    await Item.findByIdAndDelete(req.params.id)
    res.redirect('/')
}






// function comment(req, res) {
//     // Item.sort({purchaseDate: 'desc'})
//     Item.findById({}, function(err, i){
//         console.log(i)
//         res.render('./comment' , {items: i})
//     })
// }






function show(req, res) { 
    Item.findById(req.params.id, function(err, item) {
            res.render('./index', { Item });  //change probably 
        })  

  }