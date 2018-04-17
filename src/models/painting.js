const uuid = require('uuid/v4')
const paintings = []

function getAll (limit) {
  return limit ? paintings.slice(0, limit) : paintings
}

function getOne(id){
    const painting = paintings.find(painting => painting.id === id);
    console.log(id)

    if(painting) {
      return { data: painting };
    }
    else {
      return { error: 'Painting Not Found'};
    }
}

function create (body) {
    const errors = []
    const name = body.name
  
    let response
    if (!name) {
      errors.push('name is required')
      response = { errors }
    } else {
      const painting = { id: uuid(), name }
      paintings.push(painting)
      response = painting
    }
  
    return response
}

function update(name, id) {
    console.log("I'm in models");
    const painting = paintings.find(painting => painting.id === id);

    if (name && painting) {
        painting.name = name;
        return {data: painting};
    }
    else {
        return { error: 'Painting Not Found'};
    }
}

function remove(id) {
    const painting = paintings.find(painting => painting.id === id);

    if (painting) {
        const index = paintings.indexOf(painting);
        paintings.splice(index, 1);
        return {data: painting};
    }
    else
        return {error: 'Painting Not Found'};
}


module.exports = { getAll, getOne, update, remove, create };
