class Arena {
  constructor(size, monsters, hero) {
    this.monsters = monsters;
    this.hero = hero;
    this.size = size;
  }

 getDistance(f1, f2) {
  const distance = Math.sqrt( Math.pow(f1.x - f2.x, 2) + Math.pow(f1.y - f2.y, 2) )
  return distance.toFixed(2)
 }

 isTouchable(f1, f2) {
  return this.getDistance(f1, f2) <= f1.getRange()
 }
}