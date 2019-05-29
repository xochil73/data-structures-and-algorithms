'use strict';



class HashTable {
  constructor(size=42) {
    this.buckets = new Array(size);
    this.size = size;
  }

hash(key) {

  if (!key.length) {
    return hash;
  }

  return hash % this.dataStorage;
}


add(key, value) {

  let index = this.hash(key);


  if(!this.buckets[index]){
    this.buckets[index] = [ ];
  }

  this.buckets[index].push([key,value]);

  return index
}


get(key) {

    let index = this.hash(key);


    if(!this.buckets[index])return null;

  for(let i = 0; i < this.buckets[index]; i++) {
    if(buckets [0][i] === key) {
      console.log(buckets[1])
      return buckets [1]
    }
  }

}

contains(key){
  if (this.buckets.hasOwnProperty(key)) {
    return true;
  }
  else {
    return false;
  }
}


}

const hash = new HashTable();

hash.add('cat', 'bandit');
hash.add('cat', 'archie');
hash.get('cat');

// console.log(hash.buckets);
