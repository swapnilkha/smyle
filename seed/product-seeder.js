var Product = require('../models/product');
 
var mongoose = require('mongoose');

mongoose.connect("mongodb+srv://smyle:smylepass@cluster0-5zyat.mongodb.net/smyle");

var products = [
 new Product({
    imagePath:'/images/image1.jpeg' ,
    title: 'Striped at Work',
    description: 'Formal',
    price: 90
 }),
 new Product({
    imagePath: '/images/image2.jpeg',
    title: 'Work chic',
    description: "Formal",
    price: 75
}),
new Product({
    imagePath: '/images/image3.jpeg',
    title: 'Sweater Weather',
    description: "Formal",
    price: 60
}),
new Product({
    imagePath: '/images/image4.jpeg',
    title: 'The Nun',
    description: "Formal",
    price: 25
}),
new Product({
    imagePath: '/images/image5.jpeg',
    title: 'Preppy Work',
    description: "Formal",
    price: 50
}),
new Product({
    imagePath: '/images/image6.jpeg',
    title: 'Work Glam',
    description: "Formal",  
    price: 55
}),
new Product({
    imagePath: '/images/image7.jpeg',
    title: 'Park Date',
    description: "Casual",
    price: 35
}),
new Product({
    imagePath: '/images/image8.jpeg',
    title: 'Cafe Date',
    description: "Casual",
    price: 65
}),
new Product({
    imagePath: '/images/image9.jpeg',
    title: 'Brunch Date',
    description: "Casual",
    price: 85
}),

new Product({
    imagePath: '/images/image10.jpeg',
    title: 'Aquarium Date',
    description: "Casual",
    price: 85
}),

new Product({
    imagePath: '/images/image11.jpeg',
    title: 'Floral Glam',
    description: "Casual",
    price: 85
}),

new Product({
    imagePath: '/images/image12.jpeg',
    title: 'Sunday Dress',
    description: "Casual",
    price: 85
})

];

Product.insertMany(products, function(err, docs) {
    if (err) {
        console.log(err);
    } 
    if (docs.length === products.length) {
        exit();
        
    console.log('Success!');
    } 
});

function exit() {
    mongoose.disconnect();
}