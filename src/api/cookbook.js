const API_URL = 'http://localhost:8080';
const REQUEST_HEADERS = {
  mode: 'no-cors'
}

export function getCookbooks() {
  return [
    {
      id: 1,
      name: 'Cookbook 1'
    },
    {
      id: 2,
      name: 'Cookbook 2'
    },
    {
      id: 3,
      name: 'Cookbook 3'
    }
  ]

  // fetch(`${API_URL}/api/cookbooks`, {mode: 'no-cors'})
  // .then(r => r.json())
  // .then(data => {

  // })
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
      }
    ]
  }
}