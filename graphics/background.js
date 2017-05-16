'use strict';

var HeadingText = nodecg.Replicant('HeadingText', {defaultValue: 'Ass'});

HeadingText.on('change', function(newValue, oldValue) {
    console.log(newValue);
    $('#Heading').text(newValue);
});

function CheckIframeLoaded(className, bundleName) {
    var iframe = $(`iframe.${className}`);
    iframe.load(function (e) {
        if (iframe[0].contentDocument.body.innerHTML.indexOf("Cannot GET") >= 0)
        {
            var msg = `Please install bundle ${bundleName}!`;
            iframe[0].contentDocument.body.innerHTML = msg;
            console.error(msg);
        }
    });
}

CheckIframeLoaded('nowplaying','nodecg-nowplaying');
CheckIframeLoaded('recentfollower','nodecg-recentfollower');
CheckIframeLoaded('followeralert','nodecg-follower-alert');

$(document).ready(function() {
    if (nodecg.bundleConfig.restream_chat_url === undefined) {
        console.error("Please set up cfg/nodecg-allar-overlay.json and provide a restream_chat_url.");
    } else {
        $("iframe.chat").prop('src', nodecg.bundleConfig.restream_chat_url);
    }
})