
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






// Retrieved from
// https://guide.freecodecamp.org/certifications/javascript-algorithms-and-data-structures/basic-algorithm-scripting/chunky-monkey/

