let ArtObj = class {
  constructor(name, medium, description, price) {
    this.name = name;
    this.medium = medium;
    this.description = description;
    this.price = price;
  }
};

let artObj = new ArtObj("Bold and Brash", "Painting", "Self Portrait", "$100.00");

function alert(){
  console.log(artObj.name + ", " + artObj.medium + ", " + artObj.description + ", " + artObj.price);
}
alert();