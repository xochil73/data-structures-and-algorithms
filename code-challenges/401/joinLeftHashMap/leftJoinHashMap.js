'use strict';

import Hashtable from './hashtable';

function leftJoin(leftHashMap, rightHashMap) {

  let finalArray = [...leftHashMap];

  for(let i=0; i<finalArray.length; i++) {
    if(rightHashMap.has(finalArray[i])) {
      finalArray[i].add(rightHashMap[i]);
    }
    else {
      finalArray[i].add(null);
    }
  }
  return finalArray;
}

