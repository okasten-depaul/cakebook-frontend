const API_URL = 'http://localhost:8080';
const REQUEST_HEADERS = {
  mode: 'no-cors'
}

export function createNewCookbook(name) {
  //placeholder
  //fetch(API_URL).then(r => r.json())
  return true;
}

export function getCookbook(id) { 
  return {
    name: 'Baking book',
    recipes: [
      {
        id: 1,
        name: 'Guacamole',
        cook_time: '10min',
        prep_time: '10min',
        author: 'Olivia',
        is_favorite: true,
        is_public: false,
        instructions: [
          "Set oven to 350",
          "That doesn't make any sense for guacamole",
          "take some avocados",
          "mash 'em and smash 'em",
          "onion tomato garlic pepper salt maybe cumin, some jalapeno and some cilantro yummy yummy yummy",
          "here's another instruction",
          "taking up more space",
          "again",
          "and again",
          "should this scroll",
          "probably"
        ],
        ingredients: [
          {
            id: 1,
            name: 'avocado',
            quantity: 3,
            measurement: null
          },
          {
            id: 2,
            name: 'garlic',
            quantity: 2,
            measurement: 'teaspoon'
          }
        ]
      }
    ]
  }
}