const API_URL = 'http://localhost:8080';
const REQUEST_HEADERS = {
  mode: 'no-cors'
}

export async function getCookbooks() {
 return fetch(`${API_URL}/api/cookbook/all`) 
  .then(response => response.json())
  .then(data => data)
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