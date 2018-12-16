
function chunkArrayInGroups(arr, size) {
    
    let newArr = []; // create an empty array newArr where will store our ‘chunks’.

    let i = 0;

    while(i < arr.length){
        
        let slicedArr = arr.slice(i, i+size);   

        newArr.push(slicedArr);

        i += size;
    }
    return newArr;    
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4); // return [[0, 1, 2, 3], [4, 5, 6, 7], [8]]




// Retrieved from
// https://guide.freecodecamp.org/certifications/javascript-algorithms-and-data-structures/basic-algorithm-scripting/chunky-monkey/

