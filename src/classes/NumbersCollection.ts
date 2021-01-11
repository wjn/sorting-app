import { Sortable } from '../interfaces/Sortable';
export class NumbersCollection implements Sortable {
  constructor(public data: number[]) {}

  // `get` prefix treats this function as a property, i.e., this.length
  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }

  swap(leftIndex: number, rightIndex: number): void {
    const leftHand = this.data[leftIndex];
    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = leftHand;
  }
}
