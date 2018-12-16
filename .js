
/*****  Solution #1  *******************************************************************************************************/

function chunkArrayInGroups1(arr, size) {
    
    let newArr = []; // create an empty array newArr where will store our ‘chunks’

    let i = 0;

    while(i < arr.length){
        
        let chunk = arr.slice(i, i+size);   // create each chunk using arr.slice()

        newArr.push(chunk); // add the chunk to newArr with newArr.push().

        i += size;
    }
    return newArr;    
}

chunkArrayInGroups1([0, 1, 2, 3, 4, 5, 6, 7, 8], 4); // return [[0, 1, 2, 3], [4, 5, 6, 7], [8]]



/*****  Solution #2  *******************************************************************************************************/

function chunkArrayInGroups2(arr, size) {
    let newArr = [];
    
    while (arr.length) {
        
        newArr.push(arr.splice(0,size));  // push to the newArr array using arr.splice(0, size)
                                          // for each iteration of while loop, it deletes size number of elements from arr and push them as an array to newArr.
    }
    console.log(newArr);
  }



/*****  Solution #3  *******************************************************************************************************/

function chunkArrayInGroups3(arr, size) {
    
      if (arr.length <= size){
          return [arr];
      }
      else {
          // For any array larger than size, it’s splited in two. 
          // First segment is nested and concatnated with second segment which makes a recursive call.
          return [arr.slice(0,size)].concat(chunkArrayInGroups(arr.slice(size),size));
      }
}


// Retrieved from
// https://guide.freecodecamp.org/certifications/javascript-algorithms-and-data-structures/basic-algorithm-scripting/chunky-monkey/

