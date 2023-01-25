import Background from './components/background';
import Header from './components/header';
import Publications from './components/publications';
import Footer from './components/footer';

export default function App() {
  return (
    <div className="App">

      <Background />

      <Header />

      <div className='container'>
        <Publications />
        <Publications />
      </div>


      <Footer />


    </div>
  );
}

