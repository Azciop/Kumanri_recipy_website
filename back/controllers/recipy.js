const uuid = require('uuid/v1');
const Recipy = require('../models/Recipy');

exports.getAllRecipies = (req, res, next) => {
  Recipy.find().then(
    (recipies) => {
      const mappedRecipies = recipies.map((recipy) => {
        recipy.imageUrl = req.protocol + '://' + req.get('host') + '/images/' + recipy.imageUrl;
        return recipy;
      });
      res.status(200).json(mappedRecipies);
    }
  ).catch(
    () => {
      res.status(500).send(new Error('Database error!'));
    }
  );
};

exports.getOneRecipy = (req, res, next) => {
  Recipy.findById(req.params.id).then(
    (recipy) => {
      if (!recipy) {
        return res.status(404).send(new Error('Recipy not found!'));
      }
      recipy.imageUrl = req.protocol + '://' + req.get('host') + '/images/' + recipy.imageUrl;
      res.status(200).json(recipy);
    }
  ).catch(
    () => {
      res.status(500).send(new Error('Database error!'));
    }
  )
};
