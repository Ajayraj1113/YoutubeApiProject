import Video from './Video'

const VideoList = ({videoItem,setMainVideo})=>{
        // const videos = new Array(5).fill()
        // const videos = [1,2,3,4,5]
        console.log(videoItem)
    return (+videoItem === 0) ? <h1>Loading...</h1> : <div className='mt-5'>
        {videoItem.map((vid,idx) => <Video videoDetail={vid} key={idx} setMainVideo={setMainVideo}/>)}
    </div>
}

export default VideoList