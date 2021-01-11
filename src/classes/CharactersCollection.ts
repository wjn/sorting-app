import { Sortable } from '../interfaces/Sortable';

export class CharactersCollection implements Sortable {
  constructor(public data: string) {}
  get length(): number {
    return this.data.length;
  }
  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase();
  }

  swap(leftIndex: number, rightIndex: number): void {
    const characters = Array.from(this.data);
    const leftHand = characters[leftIndex];
    characters[leftIndex] = characters[rightIndex];
    characters[rightIndex] = leftHand;
    this.data = characters.join('');
  }
}
