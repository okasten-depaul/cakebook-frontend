const API_URL = "somestring";

export function getMealplans() {
  return [
    {
      id: 1,
      week: "May 15-May 21",
    },
    {
      id: 2,
      week: "May 22-May 28",
    },
    {
      id: 3,
      name: "May 29 - June 4",
    },
  ];
}

export function createNewMealplan(week) {
  //placeholder
  //fetch(API_URL).then(r => r.json())
  return true;
}
