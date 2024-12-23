$(document).ready(function () {
    $('.btn_close').on('click', function () {
        $(this).closest('.ad-banner').fadeOut(); // Sử dụng fadeOut để hiệu ứng mượt mà
    });
});
