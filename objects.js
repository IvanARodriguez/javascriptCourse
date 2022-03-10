console.log('=======================================');
console.log('Working with objects and nested objects');
console.log('');

const menu = {
    _courses: {
      appetizers: [],
      mains: [],
      desserts: [],
    },
    get course () {
      return {
        appetizer: this.appetizers,
        mains: this.mains,
        desserts: this.desserts
      }
    },
    addDishToCourse(courseName, dishName, dishPrice){
      const dish = {
        name: dishName,
        price: dishPrice
      };
      this._courses[courseName].push(dish);
    },
  
    getRandomDishFromCourse(courseName){
      const dishes = this._courses[courseName];
      const randomIndex = Math.floor(Math.random() * dishes.length);
      return this._courses[courseName][randomIndex];
  
      console.log(this._courses[courseName])
    },
  
    generateRandomMeal(){
      const apperitizer = this.getRandomDishFromCourse('appetizers');
      const main = this.getRandomDishFromCourse('mains');
      const dessert = this.getRandomDishFromCourse('desserts');
      const totalPrice = apperitizer.price + main.price + dessert.price;
  
      return`Your meal is ${apperitizer.name}, ${main.name}, ${dessert.name}. your price is ${totalPrice}.`
  
    }
  
}
  
menu.addDishToCourse('appetizers', 'Cesar Salad', 7.99);
menu.addDishToCourse('appetizers', 'Buttered Bread', 3.99);
menu.addDishToCourse('appetizers', 'Cheese dips', 5.99);

menu.addDishToCourse('mains', 'Mangu', 10.99);
menu.addDishToCourse('mains', 'Tropical', 19.99);
menu.addDishToCourse('mains', 'Pizza', 7.99);

menu.addDishToCourse('desserts', 'Ice Cream', 10.99);
menu.addDishToCourse('desserts', 'Glazed Donuts', 19.99);
menu.addDishToCourse('desserts', 'Cake', 7.99);

const meal = menu.generateRandomMeal();

console.log(meal)
console.log('')

console.log('=======================================');
console.log('Working with objects and nested objects');
console.log('');

const team ={
    //collection of players
    _players: [
      {
        firstName: 'Pablo',
        lastName: 'Sanchez',
        age: 11
      }
    ],
    //collection of games
    _games: [
      {
        opponent: 'Broncos',
        teamPoints: 42,
        opponentPoints: 27
      }
    ],
    
    //games getter
    get games(){
      return this._game;
    },
  
    //method to add a new player to players
    addPlayer(firstName, lastName, age){
      const player = {
        firstName: firstName,
        lastName: lastName,
        age: age
      };
  
      this._players.push(player)
    },
    // add a new game to games
    addGame(opponent, teamPoints, opponentPoints){
      const game = {
        opponent: opponent,
        teamPoints: teamPoints,
        opponentPoints: opponentPoints
      }
  
      this._games.push(game)
    }
  }
  
  team.addPlayer('Stephen', 'Curry', 28);
  team.addPlayer('Lisa', 'Leslie', 44);
  team.addPlayer('Bugs', 'Bunny', 76);
  
  team.addGame('Red Sex', 28, 48);
  team.addGame('White Sox', 55, 68);
  team.addGame('Cavaliers', 10, 20);
  
  
  console.table(team._players)
  console.table(team._games)