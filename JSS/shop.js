const tabLinks = document.querySelectorAll(".tab_st07 a"); // Chọn các tab liên kết
const hotSellingSection = document.querySelector("h3.cinema_hot_selling"); // Tiêu đề "Bán Chạy Nhất"
const allProductsSection = document.querySelector("h3.cinema_hot_selling:nth-of-type(2)"); // Tiêu đề "Danh Mục Sản Phẩm"
const lotteComboSection = document.querySelector("h3.cinema_hot_selling:nth-of-type(3)"); // Tiêu đề "Lotte Combo"

tabLinks.forEach(function (el) {
    el.addEventListener("click", function (event) {
        event.preventDefault(); // Ngăn không cho hành động mặc định xảy ra

        const btn = event.currentTarget;
        tabLinks.forEach(function (link) {
            link.classList.remove("active"); // Xóa class active
        });

        btn.classList.add("active"); // Thêm class active cho nút được nhấn

        // Kiểm tra nút và cuộn đến phần tử tương ứng
        if (btn.classList.contains("btn50")) {
            hotSellingSection.scrollIntoView({
                behavior: "smooth", // Cuộn mượt
                block: "start" // Canh phần tử xuất hiện trên cùng
            });
        } else if (btn.classList.contains("btn10")) {
            allProductsSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        } else if (btn.classList.contains("btn20")) {
            lotteComboSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
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
        });
    }
});
