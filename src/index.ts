class Sorter {
  constructor(public collection: number[]) {}

  sort(): void {
    const { length } = this.collection;
    console.log('length: ', length);
    console.log('initial collection: ', this.collection);

    for (let i = 0; i < length; i++) {
      console.log(`\n===== i=${i} =====`);
      console.log('jLimiter: ', length - i - 1);

      for (let j = 0; j < length - i - 1; j++) {
        console.log(`----- j=${j} -----`);

        if (this.collection[j] > this.collection[j + 1]) {
          // swap left with right
          const leftHand = this.collection[j];
          this.collection[j] = this.collection[j + 1];
          this.collection[j + 1] = leftHand;
        }

        console.log(`collection: `, this.collection);
      }
    }
  }
}

const sorter = new Sorter([10, 3, -5, 0]);
sorter.sort();
console.log('\nFinal Sorted Collection: ', sorter.collection);
