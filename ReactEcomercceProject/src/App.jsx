import './App.css'
import NavBar from './componentes/NavBar'
import ItemListContainer from './componentes/ItemListContainer'

function App() {


  return (
    <>
      <NavBar />
      <div className="catalogo">
        <ItemListContainer />
        <ItemListContainer />
        <ItemListContainer />
      </div>

    </>
  )
}

export default App
