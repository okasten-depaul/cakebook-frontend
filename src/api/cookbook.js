const API_URL = 'somestring';

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
}

export function createNewCookbook(name) {
  //placeholder
  //fetch(API_URL).then(r => r.json())
  return true;
}