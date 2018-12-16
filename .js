function chunkArrayInGroups(arr, size) {
    let newArr = [];
  
    // for (var i = 0; i < arr.length; i+=size) {
        
    //     let slicedArr = arr.slice(i, i+size);   

    //     newArr.push(slicedArr);
    //    // console.log(newArr);
    // }


    let i = 0;

    while(i < arr.length){
      let slicedArr = arr.slice(i, i+size);   

       newArr.push(slicedArr);

       i += size;
    }


    return newArr;
    
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4);

