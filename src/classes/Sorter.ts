import { Sortable } from '../interfaces/Sortable';
export class Sorter {
  /**
   *
   * @param collection : TODO: add type for collection
   */
  constructor(public collection: Sortable) {}

  sort(): void {
    const { length } = this.collection;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.collection.compare(j, j + 1)) {
          // swap left with right
          this.collection.swap(j, j + 1);
        }
      }
    }
  }
}
