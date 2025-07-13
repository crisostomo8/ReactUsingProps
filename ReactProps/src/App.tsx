import './App.css'
import ProductList from './components/Productlist/ProductList'

function App() {
  return (
    <div className="app-wrapper">
      <header className="header">
        <h2 className="site-title">Milktea Shop</h2>
        <button className="add-to-cart">Add to Cart</button>
      </header>

      <div className="container">
        <ProductList 
          title="Milktea 1"
          imgURL="https://gongcha.ph/wp-content/uploads/2022/02/Milk-Tea-with-Pearl.jpg"
          description="This is some description"
          price={35}
          
        />
        <ProductList 
          title="Milktea 2"
          imgURL="https://gongcha.ph/wp-content/uploads/2022/02/Milk-Tea-with-3Js-300x300.jpg"
          description="This is some description"
          price={35}
         
        />
        <ProductList 
          title="Milktea 3"
          imgURL="https://gongcha.co.nz/images/1/b385e67a51b7f7defd5d7199e84c7105.jpg"
          description="This is some description"
          price={35}
          
        />
        <ProductList 
          title="Milktea 4"
          imgURL="https://gongcha.co.nz/images/1/0fe9ee7897e688a0ccc62bac4b209fd1.jpg"
          description="This is some description"
          price={35}
          
        />
      </div>
    </div>
  )
}

export default App