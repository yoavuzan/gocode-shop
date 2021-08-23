import "App.css" 
import Products from "./components/Products";
import {useState,useEffect} from 'react'
import Header from "./components/Header";
import Products from "./components/Products";

const groupBy = (xs, key) =>
  xs.reduce((rv, x) => {
    rv[x[key]] = true || [];
    return rv;
  }, {});

function App() {
  
  const[Category,SetCategory]=useState([]);
  const[Store,setStore]=useState([]);

  const SelectCategory=(category)=>{
    if(category!=="All")
    setStore(Store.filter((App)=>App.category==category));
    else
    setStore(Store);
   };


useEffect(()=>{
fetch("https://fakestoreapi.com/products")
.than(res=>res.json())
.than((json)=>{
console.log(json);
setStore(json);
SetCategory(["All", ...Object.keys(groupBy(json, "category"))])

});}
,[]);

return (
  <div>
    <Header Category={Category} SelectCategory={SelectCategory}/>
    <Products Store={Store}/>
  </div>
);
}

export default App;




