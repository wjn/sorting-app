import { Sorter } from './classes/Sorter';
import { NumbersCollection } from './classes/NumbersCollection';
import { CharactersCollection } from './classes/CharactersCollection';

const numbersCollection = new NumbersCollection([50, 3, -5, 0]);
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log('\nFinal Sorted Collection: ', numbersCollection.data);

const charCollection = new CharactersCollection('quickBrownFox');
const charSorter = new Sorter(charCollection);
charSorter.sort();
console.log('\nFinal Sorted Char Collection: ', charCollection.data);
