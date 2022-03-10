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
  