import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { Container,Col,Row} from 'react-bootstrap';
import youtube from './api/youtube';
import './App.css';
import MainVideo from './components/MainVideo';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';

function App() {

  const [mainVideo,setMainVideo] = useState(undefined)
  const [videos,setVideos] = useState([])

  useEffect(()=>{
    handleSubmit('srk')
  },[])

  const handleSubmit = async (searchTerm)=>{

      const response = await youtube.get('search',{
         params:{
             part:'snippet',
             maxResults:5,
             key:'AIzaSyCJcWYk65V9JTcdiCH-7S-lqaY_0Fu4Vpk',
             q:searchTerm
         }
      });
      console.log(response.data)
      setMainVideo(response.data.items[0])
      setVideos(response.data.items)
  }

  return <Container>
    <SearchBar onSubmit={handleSubmit}/>
    <Row>
      <Col sm={8}>
      <MainVideo videoRef={mainVideo}/>
      </Col>
      <Col sm={4}>
      <VideoList videoItem={videos} setMainVideo={setMainVideo}/>
      </Col>
    </Row>
  </Container>
}

export default App;
