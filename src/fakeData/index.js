import bangla from './bangla';
import english from './english';
import math from './math';

const fakeData = [...bangla, ...english, ...math];


const shuffle = a => {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
}

shuffle(fakeData);

export default fakeData;