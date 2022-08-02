import Card from './components/Card';
import Drawer from './components/Drawer';
import Header from './components/Header';

function App() {
  const arr = [
    {
      title: 'Мужские Кроссовки Nike Blazer Mid Suede',
      price: 8699,
      imageUrl: '/img/sneakers/1.jpg',
    },
    {
      title: 'Мужские Кроссовки Nike Air Max 270',
      price: 11499,
      imageUrl: '/img/sneakers/2.jpg',
    },
    {
      title: 'Кроссовки Puma X Aka Boku Future Rider',
      price: 16399,
      imageUrl: '/img/sneakers/3.jpg',
    },
  ];
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />
      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="search" />
            <input type="text" placeholder="Search.." />
          </div>
        </div>
        <div className="d-flex">
          {arr.map((obj) => (
            <Card
              title={obj.title}
              price={obj.price}
              imageUrl={obj.imageUrl}
              onClick={() => console.log(obj)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
