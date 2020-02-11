export default class Arena {
  constructor(name, gladiators = []) {
    this.name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    this.gladiators = gladiators;
  }

  addGladiator(gladiatorName) {
    if (this.gladiators.length < 2) {
      this.gladiators.push(gladiatorName);
    }
  }

  fight() {
    if (this.gladiators.length == 2) {
      //   console.log("Fight Fight");
      //   console.log(this.gladiators[0].weapon);

      if (
        (this.gladiators[0].weapon === "Trident" &&
          this.gladiators[1].weapon === "Spear") ||
        (this.gladiators[0].weapon === "Spear" &&
          this.gladiators[1].weapon === "Club") ||
        (this.gladiators[0].weapon === "Club" &&
          this.gladiators[1].weapon === "Trident")
      ) {
        console.log(this.gladiators[0].name);
        this.gladiators.length = 1;
      } else if (
        (this.gladiators[1].weapon === "Trident" &&
          this.gladiators[0].weapon === "Spear") ||
        (this.gladiators[1].weapon === "Spear" &&
          this.gladiators[0].weapon === "Club") ||
        (this.gladiators[1].weapon === "Club" &&
          this.gladiators[0].weapon === "Trident")
      ) {
        console.log(this.gladiators[1].name);
        this.gladiators.shift();
      } else {
        console.log("tie");
        this.gladiators.length = 0;
      }
    }
  }
}

// Trident beats Spear
// Spear beats Club
// Club beats Trident
