import React from 'react';
import '../css/Catalogue.css';

// Import images
import item1 from '../images/item1.jpg';
import item2 from '../images/item2.png';
import item3 from '../images/item3.png';
import item4 from '../images/item4.png';
import item5 from '../images/item5.png';
import item6 from '../images/item6.png';
import item7 from '../images/item7.png';
import item8 from '../images/item8.png';
import item9 from '../images/item9.png';
import item10 from '../images/item10.png';
import item11 from '../images/item11.png';
import item12 from '../images/item12.png';

export const Home = () => {
  const items = [
    { src: item1, alt: 'Item 1' },
    { src: item2, alt: 'Item 2' },
    { src: item3, alt: 'Item 3' },
    { src: item4, alt: 'Item 4' },
    { src: item5, alt: 'Item 5' },
    { src: item6, alt: 'Item 6' },
    { src: item7, alt: 'Item 7' },
    { src: item8, alt: 'Item 8' },
    { src: item9, alt: 'Item 9' },
    { src: item10, alt: 'Item 10' },
    { src: item11, alt: 'Item 11' },
    { src: item12, alt: 'Item 12' },
  ];

  return (
    <div className="catalogue-container">
        <h2 className="catalogue-heading">Catalogue</h2>
      <main className="catalogue-main">
        <div className="items-grid">
          {items.map((item, index) => (
            <div key={index} className="item-card">
              <img src={item.src} alt={item.alt} />
            </div>
          ))}
        </div>
      </main>
        <div className="pagination">
            <button>Next</button>
        </div>
    </div>
  );
};
