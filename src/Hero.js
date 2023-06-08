class Hero extends Fighter {
  constructor(name, strength, dexterity, image, x, y) {
    super(name, strength, dexterity, image, x, y);
  }

  getDamage() {
    return this.weapon ? this.strength + this.weapon.damage : this.strength;
  };

  getDefense() {
    return this.shield ? this.dexterity + this.shield.protection : this.dexterity;
  };

  /*
    - Dans `Hero` uniquement, ajoute un `getRange()` qui aditionnera la portée de base du combattant à celle de l'arme qu'il porte (pour un `Hero`, c'est donc cette méthode `getRange()` modifiée qui s'exécutera et non plus celle de `Fighter`. Ainsi Heracles avec une épée devrait avoir une portée de 1.5 (ce qui doit lui permettre d'attaquer maintenant en diagonale). Le *range* s'affiche également dans l'inventaire du héros. Bouge le personnage pour vérifier que cela fonctionne.
  */

    getRange() {
      return this.weapon.range + this.range;
    }
  
}