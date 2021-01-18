$(document).ready(function () {
    $(window).click(function (event) {
        if (parent.frames.playQueue.isVisible && !$(event.target).closest('.playlist-keeper').length) {
            parent.frames.playQueue.onHidePlayQueue();
        }
    });
});