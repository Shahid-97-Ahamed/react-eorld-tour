import { Suspense } from 'react';
import './App.css'
import Countries from './component/countries';

const CountriesPromise = fetch('https://openapi.programming-hero.com/api/all')
  .then(res => res.json())
function App() {
  return (
    <>
      <section id="center">
        <div>
          <h1>World Tour Guide</h1>
          <Suspense fallback={<h2>Loading...</h2>}>
            <Countries countriesPromise={CountriesPromise}>

            </Countries>
          </Suspense>


        </div>

      </section>
    </>
  )
}

export default App
