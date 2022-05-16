const API_URL = 'http://localhost:8080';
const REQUEST_HEADERS = {
  mode: 'no-cors'
}

export function getCookbooks() {
  /*return [
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
  */ 
const cookbookarray = [
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
  }]

 const response = fetch(`${API_URL}/api/cookbook/get/1`) 
 .then(response => response. json())
 . then(data => {
  console. log(data)
 })
  . catch(error => console. error(error))
        
        for(var i in response) {
           cookbookarray.push([i, response[i]])
           console.log(response[i])
           
        }
  console.log(cookbookarray)

  return cookbookarray
  

  



  // })


return cookbookarray
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