// import Button from 'react-bootstrap/Button';
import Card from "react-bootstrap/Card";

const MainVideo = ({videoRef}) => {
    // console.log(videoRef)
    if(videoRef===undefined) return <h1>Loading....</h1>
    
    const videoSrc = `https://www.youtube.com/embed/${videoRef.id.videoId}`
  return (
    <>
      <Card className="mt-5">
        <Card.Body>
        <iframe frameBorder="0" height="100%" width="100%" title="VideoTitle" src={videoSrc}/>
          {/* <Card.Img
            variant="top"
            src="https://images.unsplash.com/photo-1679834830755-94819b6c34d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
          /> */}
          <Card.Title>{videoRef.snippet.channelTitle}</Card.Title>
          <Card.Text>
          {videoRef.snippet.description}
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default MainVideo;
