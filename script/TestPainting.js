const {Buyer} = require('./Buyer.js');
function Painting(name, price, highestBid, artist, dimensions, medium, stock, lowestBid) {

    this.name = name;
    this.newBid = lowestBid;
    this.price = price;
    this.highestBid = highestBid;
    this.artist = artist;
    this.dimensions = dimensions;
    this.medium = medium;
    this.stock = stock;

    Painting.prototype.setPainting = function() {
        console.log("Title: " + this.name);
        console.log("Artist: " + this.artist.fullName);
        console.log("Cost: " + this.price);
        console.log("Highest Bidder: " + this.highestBid.fullName);
        console.log("Stock remaining: " + this.stock);
        console.log("Dimensions: " + this.dimensions);
        console.log("Medium: " + this.medium);
    }
    
    Painting.prototype.setBid = function(newBid, newHighest) {
        this.newBid = newBid;
        this.highestBid = newHighest;        // Painting.setBid = '0000000000'; 
    }
    
    Painting.prototype.getBid = function() {
        return this.highestBid;          // console.log(Painting.getBid);
    }
}
module.exports = {Painting};