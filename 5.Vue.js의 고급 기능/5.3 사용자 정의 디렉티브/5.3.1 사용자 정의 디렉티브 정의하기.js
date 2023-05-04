Vue.directive('fallback-image', {
    bind: function(el) {
        el.addEventListener('error', function() {
            // 이미지 불러오기에 실패 시 처리
            el.src = 'https://dummyimage.com/400x400/000/ffffff.png&text=no+image'
        })
    }
})

new Vue({
    el: '#app'
})