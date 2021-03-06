const Database = {
  store: {
    heroes: [
      { id: 1, name: 'Captain America', squad: 'Avengers' },
      { id: 2, name: 'Iron Man', squad: 'Avengers' },
      { id: 3, name: 'Spiderman', squad: 'Avengers' },
      { id: 4, name: 'Superman', squad: 'Justice League' },
      { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
      { id: 6, name: 'Aquaman', squad: 'Justice League' },
      { id: 7, name: 'Hulk', squad: 'Avengers' },
    ]
  }
};
Add a method to Database called findOne and have it behave the same as the findOne function above. However, instead of referencing a HEROES array in the global scope, it should pull from the store in the Database. HINT: You'll want to use this for this...

The usage should be:

Database.findOne({ id: 2 });
=> { id: 2, name: 'Iron Man', squad: 'Avengers' }