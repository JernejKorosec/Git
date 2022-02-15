// First create a function thath will serve as constructor
// and will initialize class fields
// the fields with this prefix are created automatically
// Then create getters setters and custom functions
// using the prototype keyword


// const author = { name: 'Craig Buckler', city: 'Exmouth' };
function Author(name, city) 
{
    this.name = name;
    this.city = city;
}

Author.prototype.name = function() {
    return this.name;
};
Author.prototype.city = function() {
    return this.city;
};

Author.prototype.getSQL = function() {
    return `{ name: '${this.name}}', city: '${this.name}' }`;
};

//module.exports.Author = Author;
//module.exports.Author = Author;
export default {Author};