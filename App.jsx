import './App.css'
import Footer from './Footer'
import Header from './Header'
import Add from './Add'
import Sub from './Sub'
import Formula from './Formula'
import Details from './Details'
import Array from './Array'
import Boolean from './Boolean'
import Method from './Method'
import City from './City'
import Greeting from './Greeting'
import Increment from './Increment'
import Input from './Input'
import Toggle from './Toggle'
import Register from './Register'
import Product from './Product'
function App() {
  return (
    <>
    {/* <Header />
    <Footer/>
    <Add a={5} b={2}/>
    <Sub a={10} b={5}/>
    <Details c={{Name:'maha',Mobile:'9345953242',Age:'22'}}/>
    <Array c={['Maha','janani','nithya']}/>
    <Boolean a={true}/>
    <Method a={true}/>
    <City s={{City:'Madurai',Temperature:'31c',Message:'Today Temperature very hot'}}/> */}
    <Greeting/>
    <Increment/>
    <Input/>
    <Toggle/>
    <Register/>
    <Product/>
    
    </>
      
    
  )
}

export default App