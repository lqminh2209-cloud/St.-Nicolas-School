const backToTop = document.getElementById("backToTop");

window.onscroll = function () {
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    backToTop.style.visibility = "visible";
    backToTop.style.opacity = "1";
  } else {
    backToTop.style.visibility = "hidden";
    backToTop.style.opacity = "0";
  }
};

backToTop.onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
// Toggle menu
function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
}
// search overlay
document.addEventListener('DOMContentLoaded', function() {
    // 1. Tìm icon kính lúp trên Desktop (Cần chắc chắn selector này đúng với HTML của bạn)
    const searchIcon = document.querySelector('.fa-magnifying-glass.d-none.d-xl-block');
    
    // 2. Tìm các phần tử của search overlay
    const overlay = document.getElementById('search-overlay');
    const closeBtn = document.getElementById('close-search');
    const searchInput = document.getElementById('search-input');

    // Mở Search Overlay
    if (searchIcon && overlay) {
        searchIcon.addEventListener('click', function() {
            overlay.classList.add('active');
            // Đợi 1 chút cho animation xong rồi mới focus
            setTimeout(() => {
                searchInput.focus();
            }, 300);
        });
    }

    // Đóng Search Overlay bằng nút (X)
    if (closeBtn && overlay) {
        closeBtn.addEventListener('click', function() {
            overlay.classList.remove('active');
        });
    }
    
    // Đóng bằng phím ESC (Cực kỳ quan trọng cho UX)
    document.addEventListener('keydown', function(e) {
        if (e.key === "Escape" && overlay.classList.contains('active')) {
            overlay.classList.remove('active');
        }
    });
});