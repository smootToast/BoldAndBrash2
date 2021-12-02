const {Painting} = require('./TestPainting.js');
const {Buyer} = require('./Buyer.js');
function Artist(fullName, username, password) {

    this.paintingArray = [];
    //For adding paintings
    this.fullName = fullName;
    this.username = username;
    // Address for Artists?
    this.password = password;


    Artist.prototype.addPainting = function (painting) {
        this.paintingArray.push(painting);
        console.log("Painting has been Added");

    }

    Artist.prototype.setBidder = function(bid, painting, buyer) {

        for(let i = 0; i < buyer.bidArrays.length; i++){     //Checks to see if the buyer has a bid and wants to update it
            if(painting.name === buyer.bidArrays[i].name && buyer.bidArrays[i].price < bid){
                buyer.bidArrays.splice(i, 1);
                buyer.bidArrays.push(painting);
                console.log("Successfully bid " + bid + " on " + painting.name);
                return painting.setBid(bid, buyer);
            } else if(painting === buyer.bidArrays[i].name && buyer.bidArrays[i].price > bid) {
                console.log("Sorry, your bid of " + bid + " is under " + buyer.bidArrays[i].price);
                return;
            }
        }

        if(bid > painting.highestBid) {
            buyer.bidArrays.push(painting);
            console.log('Successfully bid ' + bid + ' on ' + painting.name);

            return painting.setBid(bid, buyer);
        } else {
            console.log("Sorry, your bid of " + bid + " is under " + painting.highestBid);
        }

    }

    Artist.prototype.buyOut = function(painting) {
        let isPainted = false;
        for(let i = 0; i < this.paintingArray.length; i++ ){   //Checks to see if the artist actually has made the painting
            if(this.paintingArray[i].name === painting.name) {
                isPainted = true;
                break;
            }
        }
        if(!isPainted){
            console.log("You do not have access to this painting");
            return;
        }
        painting.stock--;
        painting.highestBid.insertOrders(this.fullName,painting, "4235128399121223", true);
    }

    /* Artist.prototype.setPrice = function (paintingArray) {
         //Talk to group on how to approach this
         //Theoretically this should work if Eliot runs it on his localhost(browser)
         //if prompt doesnt work -> use window.prompt
         let name = prompt("Which painting would you like to set the price to?");
         const objIndex = paintingArray.findIndex((obj => obj.name === name));
         let price = prompt("How much would you like to sell this painting for?");
         paintingArray[objIndex].price = price;
         console.log("The painting " + " ' " + name + " ' " + "has a set price of: " + price);

     }
 */
    Artist.prototype.printArtist = function () {

        console.log("Full name: " + this.fullName);
        console.log("Username: " + this.username);
        console.log("Paintings for sale:  ");
        if (this.paintingArray.length == 0) {
            console.log("Artist has no paintings for sale");
        } else {
            for (let i = 0; i < this.paintingArray.length; i++) {
                console.log(this.paintingArray[i].namePainting + " is available");
                console.log("Price: " + this.paintingArray[i].price + " Dimensions: " + this.paintingArray[i].dimensions + " Medium: " + this.paintingArray[i].medium + " Stock: " + this.paintingArray[i].stock);
            }
        }
        Artist.prototype.removePainting = function (painting) {
            for (let i = 0; i < this.paintingArray.length; i++) {
                if (painting === this.paintingArray[i].name) {
                    console.log(this.paintingArray[i].name + "has been removed");
                    this.paintingArray.splice(i, 1);

                }
            }
        }
        Artist.prototype.knowsBidder = function () {
            for (let i = 0; i < this.paintingArray.length; i++) {
                if (this.paintingArray[i].highestBid === 0) {
                    console.log("No Bidder ");
                } else {
                    console.log("Highest Bid:$" + this.paintingArray[i].highestBid + " for " + this.paintingArray[i].namePainting);

                }
            }

        }

        Artist.prototype.setPassword = function (password) {
            this.password = password;
            console.log("Successfully changed password");
        }
        Artist.prototype.getPassword = function () {
            return this.password;
        }

        Artist.prototype.paintingList = function () {
            return this.paintingArray;
        }
        Artist.prototype.setUsername = function (username) {
            this.username = username;
        }

        Artist.prototype.getUsername = function () {
            return this.username;
        }
        Artist.prototype.getFullname = function () {
            return this.fullName;
        }

        Artist.prototype.setFullname = function (fullName) {
            this.fullName = fullName;
        }

    }

}
    module.exports = {Artist};
