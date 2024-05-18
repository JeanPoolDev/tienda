import { useState } from 'react'
import './App.css'
import Footer from './components/footer'
import Guitarra from './components/guitarra'
import Header from './components/header'
import db from './data/db.js'

function App() {
  
  const [data, setData] = useState(db);

  return (
    <>
    <Header />

    <main className="container-xl mt-5">
        <h2 className="text-center">
          Nuestra Colección
        </h2>

        <div className="row mt-5">
          {
            data.map( (guitarras) => (
              <Guitarra 
                key={guitarras.id}
                guitarras={guitarras}
              />
            ) )
          }
        </div>
    </main>

    <Footer />

    </>
  )
}

export default App
