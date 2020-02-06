var data = require("../data.json");

exports.addFriend = function(request, response)
{
    var n = request.query.name;
    var d = request.query.description;
    var newFri = { "name": n, "description": d, "imageURL": "http://lorempixel.com/400/400/people"};
    console.log(newFri);
    data.friends.push(newFri);
    response.render('index', data);
    
};
