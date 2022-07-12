 const btn = document.querySelector('button');
btn.addEventListener('click', async ()=>{

    let stream = await navigator.mediaDevices.getDisplayMedia({
        video:true
    })

    const mime = MediaRecorder.isTypeSupported("video/webm; codecs=vp9")
    ? "video/webm; codecs=vp9"
    : "video/webm"
    let mediaRecorder = new MediaRecorder(stream,{
        mimeType : mime
    })
    let chunks = []
    mediaRecorder.addEventListener('dataavailable', (e)=>{
      chunks.push(e.data)
    //   console.log(e.data)
    })

    mediaRecorder.addEventListener('stop',()=>{
        let blob = new Blob(chunks,{
            type: chunks[0].type
        })

        let video = document.querySelector("video")
        video.src = URL.createObjectURL(blob)

        let a = document.createElement('a')
        a.href = URL.createObjectURL(blob)
        a.download = "video.mp4"
        a.click()
    })

    mediaRecorder.start()
})