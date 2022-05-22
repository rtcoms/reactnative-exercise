import create from 'zustand'

function generateItem(index) {
  return {
    title: `Title ${index}`,
    image: 'https://picsum.photos/200',
    description: `Description ${index}`
  };
}

const useStore = create(set => ({
  items: [
    { title: "Title 1", image: 'https://picsum.photos/200', description: 'Description 1' },
    { title: "Title 2", image: 'https://picsum.photos/200', description: 'Description 2' },
    { title: "Title 3", image: 'https://picsum.photos/200', description: 'Description 3' },
    { title: "Title 4", image: 'https://picsum.photos/200', description: 'Description 4' },
    { title: "Title 5", image: 'https://picsum.photos/200', description: 'Description 5' },
    { title: "Title 6", image: 'https://picsum.photos/200', description: 'Description 6' },
    { title: "Title 7", image: 'https://picsum.photos/200', description: 'Description 7' },
    { title: "Title 8", image: 'https://picsum.photos/200', description: 'Description 8' },
    { title: "Title 9", image: 'https://picsum.photos/200', description: 'Description 9' },
    { title: "Title 10", image: 'https://picsum.photos/200', description: 'Description 10' },
    { title: "Title 11", image: 'https://picsum.photos/200', description: 'Description 11' },
    { title: "Title 12", image: 'https://picsum.photos/200', description: 'Description 12' },
    { title: "Title 13", image: 'https://picsum.photos/200', description: 'Description 13' },
    { title: "Title 14", image: 'https://picsum.photos/200', description: 'Description 14' },
    { title: "Title 15", image: 'https://picsum.photos/200', description: 'Description 15' }
  ],

  generateItems: (index) => {
    console.log('-----GNERATING ITEMS for card index:', index);
    let numberRange = Array((index + 10 + 1) - (index + 6)).fill().map((_, idx) => index + 6 + idx);

    let generatedItems =  numberRange.map((num) => generateItem(num) );
    set(state => ({items: [...state.items, ...generatedItems]}))
  }
}))

export default useStore;
