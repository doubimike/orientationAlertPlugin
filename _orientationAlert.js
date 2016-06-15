function hengshuping() {
    if (window.orientation == 90 || window.orientation == -90) {
        alert('为了达到最佳的浏览效果，请用竖屏状态观看！');
    }
}

window.addEventListener('onorientationchange' in window ? 'orientationchange' : 'resize', hengshuping, false);  