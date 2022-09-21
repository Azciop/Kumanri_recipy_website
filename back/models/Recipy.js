const recipies = [
  {
    "ingredients": ["", "", ""],
    "_id": "107fb5b75607497b96722bda5b504926",
    "name": "",
    "difficulty": 3,
    "price": "cheap",
    "duration": 60,
    "imageUrl": "",
    "description": "",
    "altTxt": "",

  },
];

exports.find = () => {
  return new Promise((resolve, reject) => resolve(JSON.parse(JSON.stringify(recipies))));
}

exports.findById = (id) => {
  return new Promise((resolve, reject) =>
    resolve(JSON.parse(JSON.stringify(recipies)).find(recipy =>
      recipy._id == id)
    )
  );
}