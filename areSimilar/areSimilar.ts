function areSimilar(a: number[], b: number[]): boolean {
   if (a.length !== b.length) return false;
   if(a.toString() === b.toString()) return true;
   const c = [];
   const d = [];

   a.forEach((el, index) => {
       if(a[index] !== b[index]){
           c.push(a[index]);
           d.push(b[index]);
       }
   });


   if(c.length !== 2) return false;

  return (c.toString() === d.reverse().toString());

}

// console.log(areSimilar([1, 2, 3, 4], [1, 2, 3]));
// console.log(areSimilar([1, 2, 3], [2, 1, 3]));
console.log(areSimilar([1, 2, 2], [2, 1, 1]));
