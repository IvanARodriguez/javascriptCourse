class School{
    constructor(name, level, numberOfStudents){
      this._name = name;
      this._level = level;
      this._numberOfStudents = numberOfStudents;
    }
     get name(){
       return this._name;
     }
  
     get level(){
       return this._level;
     }
  
     get numberOfStudents(){
       return this._numberOfStudents;
     }
  
     set numOfStudents(value){
       if(typeof value === 'number'){
         return this._numberOfStudents
       } else {
         console.log('Invalid type: numberOfStudents must be set to a number')
       }
     }
  
     quickFacts(){
       console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level`)
     }
  
     static pickSubstituteTeacher(substituteTeachers){
       substituteTeachers = []
       const randomIndex = Math.floor(substituteTeachers.length * Math.random());
       return substituteTeachers[randomIndex];
     }
  }
  
   class PrimarySchool extends School{
     constructor(name, level, numberOfStudents, pickupPolicy){
       super(name, 'primary', numberOfStudents);
       this._pickupPolicy = pickupPolicy;
     }
  
     get pickupPolicy(){
       return this._pickupPolicy
     }
   }
  
   class HighSchool extends School{
  
     constructor(name, level, numberOfStudents, sportsTeams){
       super(name, 'high', numberOfStudents)
       this._sportsTeams = sportsTeams;
     }
  
     get sportsTeams(){
       console.log(this._sportsTeams);
     }
   }
  
  
  const lorraineHansbury = new PrimarySchool(
    'Lorraine Hansbury',  
    this.level, 
    514, 
    'Students must be picked up by a parent, guardian, or a family member over the age of 13.'
  );
  
  lorraineHansbury.quickFacts()
  
  School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli'])
  
  
  const alSmith = new HighSchool(
    'Al E. Smith', 
    this.level, 
    415,
    ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']
    );
  
  console.log(alSmith.sportsTeams)
  
  