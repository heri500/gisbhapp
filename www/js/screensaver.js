var VideoScreensaver = '';
jQuery(function ($) {
    VideoScreensaver = '<video id="video-screensaver" loop controls="false" width="100%" height="100%" poster="img/screen-saver.png" muted preload autoplay >';
    VideoScreensaver += '<source src="img/screen-saver.mp4" type="video/mp4">';
    VideoScreensaver += '<source src="img/start-gisbh.ogg" type="video/ogg">';
    VideoScreensaver += '<source src="img/start-gisbh.webm" type="video/webm">';
    VideoScreensaver += 'Sorry but your device does not support html5 video';
    VideoScreensaver += '</video>';
    $('#button-place').parent().css('height', '100%');
    //$('#screen-saver').attr('src','img/screen-saver.png');
    (function () {
        var timeout;
        var isHidden = true;
        $(document).mousemove(function () {
            if (timeout) {
                window.clearTimeout(timeout);
            }
            timeout = window.setTimeout(function () {
                if (!isHidden) {
                    //hide the element here
                    $('#screensaver-place').removeClass('screensaver-off').addClass('screensaver-back');
                    $('#screensaver-place').append(VideoScreensaver);
                    isHidden = true;
                }
            }, 60000);
            if (isHidden) {
                //show the element here
                $('#screensaver-place').removeClass('screensaver-back').addClass('screensaver-off');
                $('#video-screensaver').remove();
                isHidden = false;
            }
        });
    })();
    $(document).mousemove();
})