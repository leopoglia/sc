import Header from './components/header';
import Publications from './components/publications';

export default function App() {
  return (
    <div className="App">

      <img className='background' src="img/background.jpg" alt="background" style={{ width: '100%' }} />

      <Header />

      <Publications />
      <Publications />


    </div>
  );
}

