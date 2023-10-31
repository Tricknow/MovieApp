import React from "react";
import Proptypes from 'prop-types';

function Food({name, picture, rating}){
  return (
    <div>
      <h2>I like {name} </h2>
      <h4>{rating} / 5.0</h4>
      <img src={picture} alt={name} />
    </div>
)}

const foodILike = [
  {
    id : 1,
    name : 'kimchi',
    image : 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.-jIKARtJO5PoIFAY5maawAHaFj%26pid%3DApi&f=1&ipt=3b8027e39b0b088596fc00f57070cea62238178bb2fc2b6955a3feab5161c7d3&ipo=images',
    rating : 5
  },
  {
    id : 2,
    name : 'Samgyeopsal',
    image : 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.z1NRYI5oQWdaIQQ7QJwhjAHaHa%26pid%3DApi&f=1&ipt=5e6adcb8bc513edb29a6594bbfb2c7586bf26d9a6994073a21f596dcfbf41a96&ipo=images',
    rating : 4
  },
  {
    id : 3,
    name : 'Bibimbap',
    image : 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.PGMADTeqQpHS4FZiUJ4T1wHaE8%26pid%3DApi&f=1&ipt=533830a8e7f96c02f4af0ce10208e124cca59b7a1eafb065495a69ecaf40c3ea&ipo=images',
    rating : 3
  }
];

function App() {
  return (
  <div>
    <h1>Hello!!</h1>
    {foodILike.map(dish => (
      <Food key={dish.id}
        name={dish.name}
        picture={dish.image}
        rating={dish.rating}/>))}

    </div>
  );
}

Food.propTypes = {
  name: Proptypes.string.isRequired,
  picture: Proptypes.string.isRequired,
  rating: Proptypes.number.isRequired
};

export default App;
