import Card from "./components/Card/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";
import React from 'react';
import axios from 'axios';


function App() {

  const [items,setItems]=React.useState([]);
  const [cartItems,setCartItems]=React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);

{/* ------------------ avelacnel korzinayum   -------------------------------------- */}


const onAddToCart = (obj) => {
  setCartItems(prev => [...prev,obj])
}



{/* ------------------ Stanal tvyalnere Mocapiic -------------------------------------- */}
 
React.useEffect(()=>{
    
 //---- Stanal tvyalner (fetch)-ov serveric------------------

         // fetch('https://647e20d4af984710854af749.mockapi.io/items')
             //     .then(res => {
             //             return res.json()
             //           })
             //     .then((json)=> {
             //             setItems(json)
             //          })
      
 //  ---- Stanal tvyalner (axios)-ov serveric------------------

    axios.get('https://647e20d4af984710854af749.mockapi.io/items').then((res) =>{
        setItems(res.data)
      })



},[])
  
  {/* ---------------------  Poisk Input   --------------------------- */}

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  {/* ------------------------------------------------------------------- */}

return (
     <div className="wrapper clear">
{/* ------------------ Korzina bacel pakel ------------------------------------------------ */}
            
              {/* tarberak 1 */}
    {cartOpened && <Drawer items={cartItems} onCloseCart={()=>setCartOpened(false)} />}
                {/* tarberak 2 */}
    {/* {cartOpened ? <Drawer onCloseCart={()=>setCartOpened(false)} />:null} */}
    
{/* -------------------------------- header ------------------------------------------- */}

    <Header  onClickCart={()=>setCartOpened(true)}/>

{/* ------------------------------------------------------------------------------------ */}

      <div className="content p-40">
          <div className="d-flex align-center justify-between mb-40">
          <h1 >{searchValue ? `Поиск по запросу: "${searchValue}"`: 'Все Кроссовки '}</h1>

{/* ------------------------------ Poisk Input ----------------------------------------- */}
          
            <div className="search-block d-flex">
              <img src="/img/search.svg" alt="Search"/>

    {/* ete inpute datarke chi erevum img,ete grvume inch vor ban img erevume */}      
      
     {searchValue && 
       <img 
           onClick={()=> setSearchValue('')}  
           className="clear removeBtn"          
           src="/img/btn-remove.svg" 
           alt="Clear" 
       />
      }

    {/* ---------------- */}  

         <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск..."/>
            </div>
          </div>

{/*---------------------------------------- Card -------------------------------------------- */}
       
        <div className="d-flex flex-wrap">

       
     
          {items.filter((item)=>item.title.toLowerCase().includes(searchValue.toLowerCase())).map((item,index) => 
             
           <Card 
                key={index}
                title={item.title}
                price={item.price}
                imageUrl={item.imageUrl} 
                onPlus={(obj) => onAddToCart(item)}
           
           />
          )}
         
       
        </div>


      </div>
    </div>
  );
}

export default App;
