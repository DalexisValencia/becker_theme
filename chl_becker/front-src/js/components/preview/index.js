(function ($) {

  const previewVideo = (url)=>{
    const idContainer = window.innerWidth <= 1000 ? 'preview-video-mobile' : 'preview-video'
      if (/(youtube.com|youtu.be)/.test(url)) {
        const idVideo = /(youtube.com)/.test(url)
          ? url.split('=')[1]
          : url.split('be/')[1];
       
        $(`#${idContainer}`).html(
          `<iframe width="100%" attr height="100%" src="https://www.youtube-nocookie.com/embed/${idVideo}"></iframe>`,
        );
      
    } else if (/(vm.tiktok.com)/.test(url)) {
        
      let url = `/ch_becker/validations/url?url=${url}`;
      $.ajax({
        type: "GET",
        url: url,
        success: (data)=> {
          $(`#${idContainer}`).html(
            `<iframe width="100%" height="100%" src="https://www.tiktok.com/embed/v2/${data}?lang=es-ES"></iframe>`,
          );
        },
    });
       
    }
       else if (/(tiktok.com)/.test(url)) {
        const idVideo = url.split('/')[5].split('?')[0];
        $(`#${idContainer}`).html(
          `<iframe width="100%" height="100%" src="https://www.tiktok.com/embed/v2/${idVideo}?lang=es-ES"></iframe>`,
        );
      }
      else if (/(instagram.com)/.test(url)) {
        const idVideo = url.split('/')[4];
        $(`#${idContainer}`).html(
          `<iframe width="100%" height="100%" src="https://www.instagram.com/p/${idVideo}/embed"></iframe>`,
        );
      }
  }

  
  if (document.getElementById('preview-video')) {
    $('.input-link-video').on('keyup input ', e => {
       previewVideo(e.target.value)
    });
  } 
  if (document.getElementById('urlvideo')) { 
      const url_video = document.getElementById('urlvideo').innerHTML;
      console.log('Holaaa!!!!!')
      previewVideo(url_video);
  }
  
})(jQuery);
