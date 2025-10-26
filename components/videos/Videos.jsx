import Video from './Video';

const videos = [
  { id: "gLPh9-ZGc2w", title: "Farewell | Class Practice | Al Madina IT" },
  { id: "3W3pxKUO48k", title: "অফিস অ্যাপ্লিকেশন কোর্স ব্যাচ-৩৫০" },
  { id: "JdTLmNEYAVU", title: "কম্পিউটার ও ফ্রিল্যান্সিং কোর্স" },
  { id: "MayQTTjoOJM", title: "কম্বো প্যাকেজ (অফিস ও গ্রাফিক্স ডিাজইন কোর্স)" },
]

function Videos() {
  return (
    <div className='row'>
      {videos.map((video) => <Video key={video.id} video={video} />)}
    </div>
  )
}

export default Videos
