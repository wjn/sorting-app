import { NumbersCollection } from './NumbersCollection';
export class Sorter {
  /**
   *
   * @param collection : TODO: add type for collection
   */
  constructor(public collection: NumbersCollection) {}

  sort(): void {
    const { length } = this.collection;
    console.log('length: ', length);
    console.log('initial collection: ', this.collection);

    for (let i = 0; i < length; i++) {
      console.log(`\n===== i=${i} =====`);
      console.log('jLimiter: ', length - i - 1);

      for (let j = 0; j < length - i - 1; j++) {
        console.log(`----- j=${j} -----`);

        if (this.collection.compare(j, j + 1)) {
          // swap left with right
          this.collection.swap(j, j + 1);
        }

        console.log(`collection: `, this.collection);
      }
    }
  }
}
