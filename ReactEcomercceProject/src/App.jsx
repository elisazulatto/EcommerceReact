import './App.css'
import NavBar from './componentes/NavBar'
import ItemListContainer from './componentes/ItemListContainer'

function App() {
  return (
    <>
      <NavBar />
      <div className="catalogo">
        <ItemListContainer greeting="¡Bienvenidos a nuestra tienda!" />
      </div>
    </>
  )
}

export default App
