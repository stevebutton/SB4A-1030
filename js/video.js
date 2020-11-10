$(document).on('click', '.view-video', function () {
    const videoUrl = $(this).attr("videourl")
    const videoPoster = $(this).attr("poster")
    if (videoUrl === "") return;
    console.log('', videoUrl);
    $(".copy-me-2 video").attr("src", videoUrl)
    $(".copy-me-2 video").attr("poster",videoPoster)
});
$(document).on('click', '.close-video', function () {
    $(".copy-me-2 video").get(0).pause()
    console.log('close -video');
});