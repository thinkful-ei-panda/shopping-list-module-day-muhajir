//Throws error if name is blank

function validateName(name) {
  if(name === '') {
    throw new TypeError('Name must not be blank');
  }
}

function create(name) {
  return {
    id: cuid(),
    name: name,
    checked: false
  }
};


export default {
  validateName,
  create
};