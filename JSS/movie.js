// Lấy các phần tử cần thiết
const slider = document.querySelector('.slider');
const navButtons = document.querySelectorAll('.nav-btn');
let currentSlide = 0;
const totalSlides = navButtons.length;

// Hàm chuyển slide
function goToSlide(slideIndex) {
    // Xác định vị trí cần chuyển (theo phần trăm chiều rộng)
    slider.style.transform = `translateX(-${slideIndex * 100}%)`;

    // Cập nhật trạng thái nút điều hướng
    navButtons.forEach((btn, index) => {
        btn.classList.toggle('active', index === slideIndex);
    });

    // Cập nhật chỉ số slide hiện tại
    currentSlide = slideIndex;
}

// Tự động chuyển slide sau mỗi 3 giây
function autoSlide() {
    currentSlide = (currentSlide + 1) % totalSlides; // Nếu hết ảnh, quay lại slide đầu tiên
    goToSlide(currentSlide);
}

// Dừng tự động chuyển khi người dùng nhấn vào nút
let autoSlideInterval = setInterval(autoSlide, 3000);
navButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        goToSlide(index);

        // Dừng tự động chuyển slide trong 10 giây sau khi người dùng tương tác
        clearInterval(autoSlideInterval);
        autoSlideInterval = setInterval(autoSlide, 3000);
    });
});


const tabLinks = document.querySelectorAll(".tab a"); // Chọn các tab liên kết
tabLinks.forEach(function (el) {
    el.addEventListener("click", function (event) {
        event.preventDefault(); // Ngăn không cho hành động mặc định xảy ra

        const btn = event.currentTarget;
        tabLinks.forEach(function (link) {
            link.classList.remove("active"); // Xóa class active
        });

        btn.classList.add("active"); // Thêm class active cho nút được nhấn
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const tabFollow = document.getElementById('quick');

    if (tabFollow) {
        const viewportHeight = window.innerHeight;

        window.addEventListener('scroll', function () {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;

            // Calculate position to always be vertically centered
            const newTop = scrollTop + viewportHeight / 2 - tabFollow.offsetHeight / 2;

            
            tabFollow.style.position = 'absolute';
            tabFollow.style.top = `${newTop}px`;
           // tabFollow.style.right = '0px'; // Ensure it stays at the right edge
           tabFollow.style.transition = "1 ease";
        });
    }
});