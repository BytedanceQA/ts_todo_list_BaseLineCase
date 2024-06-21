function quickSort(arr: number[]): number[] {
    if (arr.length <= 1) {
      return arr;
    }
  
    const pivot = arr[Math.floor(arr.length / 2)];
    const less: number[] = [];
    const equal: number[] = [];
    const greater: number[] = [];
  
    for (const num of arr) {
      if (num < pivot) {
        less.push(num);
      } else if (num === pivot) {
        equal.push(num);
      } else {
        greater.push(num);
      }
    }
  
    return [...quickSort(less), ...equal, ...quickSort(greater)];
  }



function convertNumbersToInt(str: string): string {
   str.replace(/\d+/g, (match) => parseInt(match, 10).toString());
}