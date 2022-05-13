const Video = ({videoSrcURL, videoTitle, ...props}: any) => (
        <iframe
            width='1000px'
            height='100%'
            src={videoSrcURL}
            title={videoTitle}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen>
        </iframe>
)
export default Video