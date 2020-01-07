function itemWaterfall() {
    if ($(".first-style-item").length > 0) {
        var interval = 50;  //每个item的间隔
        var items = $(".first-style-item");  //获取所有item
        var item_width = items[0].offsetWidth;  //获取第一个item的宽度
        var items_width = items[0].offsetWidth + interval;  //取区块的实际宽度
        var container_width = $(".first-style-article-list")[0].offsetWidth;  //获取容器宽度
        var n = parseInt(container_width / item_width);  //一行所允许放置的item个数
        //寻找数组最小高度的下标
        function findMinIndex(arr) {
            var len = arr.length, min = 999999, index = -1;
            for (var i = 0; i < len; i++) {
                if (min > arr[i]) {
                    min = arr[i];
                    index = i;
                }
            }
            return index;
        }

        //放置item
        function putItem() {
            var items_height = [];  //每个item的高度
            var len = items.length;  //获取item的个数
            for (var i = 0; i < len; i++) {
                var item_height = items[i].offsetHeight;  //获取每个item的高度
                //放置在第一行的item
                if (i < n) {
                    items_height[i] = item_height;  //高度数组更新
                    items.eq(i).css("position", "absolute");
                    items.eq(i).css("top", 0);
                    items.eq(i).css("left", i * items_width);
                } else {  //放置在其他行的item
                    var min_index = findMinIndex(items_height);  //寻找最小高度下标
                    if (min_index == -1) {
                        console.log("高度计算出现错误");
                        return;
                    }
                    items.eq(i).css("position", "absolute");
                    items.eq(i).css("top", items_height[min_index] + interval);
                    items.eq(i).css("left", min_index * items_width);
                    items_height[min_index] += item_height + interval;  //高度数组更新
                }
            }
            var max_height = Math.max.apply(null, items_height);
            $(".first-style-article-list").css("height", max_height);  //最后更新容器高度
        }

        putItem();
    }
}

itemWaterfall();
//在窗口大小改变后，item重新放置
window.onresize = function () {
    itemWaterfall();
    if (typeof imgWaterfall === 'function') {
        imgWaterfall();
    }
};