

const Video = ({videoSrcURL, videoTitle, ...props}: any) => (
        <iframe
            width='100%'
            height='100%'
            src={videoSrcURL}
            title={videoTitle}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen>
        </iframe>
)
export default Video