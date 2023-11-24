
import './App.css';
import Banner from './components/Banner';
import Nav from './components/Nav';
import Row from './components/Row';
import requests from './requests';




function App() {
  return (
    <div className="App">

      <Nav/>
      <Banner  fetchUrl={requests.fetchNetflixOriginals}/>
     
    

     <Row  isPoster={true}  title='Trending Movies' fetchUrl={requests.fetchTrending}/>
     <Row title='NetflixOriginals' fetchUrl={requests.fetchNetflixOriginals}/>

     <Row title='TOP Rated' fetchUrl={requests.fetchTopRated}/>

     <Row title='Action Movies' fetchUrl={requests.fetchActionMovies}/>

     <Row title='Horror Movies' fetchUrl={requests.fetchHorrorMovies}/>

     <Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies}/>

     <Row title='Romance Movie' fetchUrl={requests.fetchRomanceMovies}/>

     <Row title='Documentry' fetchUrl={requests.fetchDocumentaries}/>

     
    </div>
  );
}

export default App;
