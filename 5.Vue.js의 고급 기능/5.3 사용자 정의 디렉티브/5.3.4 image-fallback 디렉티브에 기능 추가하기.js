Vue.directive("fallback-image", {
  bind: function (el, binding) {
    console.log("bind", binding, el);
    var once = binding.modifiers.once;
    el.addEventListener("error", function onError() {
      // 이미지 불러오기에 실패 시 처리
      el.src = binding.value;

      if (once) {
        el.removeEventListener("error", onError);
      }
    });
  },
  update: function (el, binding) {
    console.log("update", binding);
    if (binding.oldValue !== binding.value && binding.oldValue === el.src) {
      el.src = binding.value;
    }
  },
});

var vm = new Vue({
  el: "#app",
  data: function () {
    return {
      altText: "logo",
      noImageURL: "https://dummyimage.com/400x400/000/ffffff.png&text=no+image",
    };
  },
});
