const {response, request} = require('express');

const getUsers = (req = request, res = response) => {
  const {} = req.query;
  res.json({
    msg: 'get API - controller'
  });
}

const putUsers = (req = request, res = response) => {
  const {id} = req.params;
  res.json({
    msg: 'put API - controller'
  });
}

const postUsers = (req = request, res = response) => {
  const {nombre, edad} = req.body;
  res.json({
    msg: 'post API - controller',
    nombre,
    edad
  });
}

const deleteUsers = (req = request, res = response) => {
  res.json({
    msg: 'delete API - controller'
  });
}

const patchUsers = (req = request, res = response) => {
  res.json({
    msg: 'patch API - controller'
  });
}

module.exports = {
  getUsers,
  putUsers,
  postUsers,
  deleteUsers,
  patchUsers
};