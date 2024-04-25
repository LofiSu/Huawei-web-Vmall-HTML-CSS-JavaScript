var category = [
    { id: 1, name: '手机', fid: 0 },
    { id: 2, name: '穿戴', fid: 0 },
    { id: 3, name: '平板', fid: 0 },
    { id: 4, name: '电脑', fid: 0 },
    { id: 5, name: '耳机音箱', fid: 0 },
    { id: 6, name: '智能屏', fid: 0 },
    { id: 7, name: '智能家居', fid: 0 },
    { id: 8, name: '出行车品', fid: 0 },
    { id: 9, name: '数码配件', fid: 0 },
    { id: 10, name: '增值服务', fid: 0 },
    { id: 11, name: '商用终端', fid: 0 },
    { id: 12, name: '生态周边', fid: 0 },
    { id: 13, avater: "../images/home/banner-small3.png", name: "HUAWEI nova系列", fid: 1 },
    { id: 14, avater: "../images/home/banner-small4.png", name: "华为畅想系列", fid: 1 },
    { id: 15, avater: "../images/home/banner-small6.png", name: "HUAWEI 麦芒系列", fid: 1 },
    { id: 16, avater: "../images/home/banner-small7.png", name: "荣耀 V系列", fid: 1 },
    { id: 17, avater: "../images/home/banner-small8.png", name: "荣耀 HONOR系列", fid: 1 },
    { id: 18, avater: "../images/home/banner-small9.png", name: "荣耀 X系列", fid: 1 },
    { id: 19, avater: "../images/home/banner-small10.png", name: "荣耀 PLAY系列 ", fid: 1 },

    { id: 20, avater: "../images/home/banner-small5.png", name: "华为Matebook X系列", fid: 2 },
    { id: 21, avater: "../images/home/banner-small-2-2.png", name: "华为Matebook系列", fid: 2 },
    { id: 22, avater: "../images/home/banner-small-2-3.png", name: "华为Matebook D系列", fid: 2 },
    { id: 23, avater: "../images/home/banner-small5.png", name: "华为Matebook E系列", fid: 2 },
    { id: 24, avater: "../images/home/banner-small2-6.png", name: "荣耀MagicBook系列", fid: 2 },
    { id: 25, avater: "../images/home/banner-small2-7.png", name: "荣耀MagicBook Pro系列", fid: 2 },

    { id: 26, avater: "../images/home/banner-small3-1.png", name: "华为MatePad 系列", fid: 3 },
    { id: 27, avater: "../images/home/banner-small3-2.png", name: "华为畅享 系列", fid: 3 },
    { id: 28, avater: "../images/home/banner-small3-3.png", name: "荣耀数字系列", fid: 3 },
    { id: 29, avater: "../images/home/banner-small3-4.png", name: "荣耀畅玩系列", fid: 3 },
    { id: 30, avater: "../images/home/banner-small3-5.png", name: "荣耀防水系列", fid: 3 },

    { id: 31, avater: "../images/home/banner-small4-1.png", name: "智能手表", fid: 4 },
    { id: 32, avater: "../images/home/banner-small4-2.png", name: "儿童手表", fid: 4 },
    { id: 33, avater: "../images/home/banner-small4-3.png", name: "智能手环", fid: 4 },
    { id: 34, avater: "../images/home/banner-small4-4.png", name: "智能健康配件", fid: 4 },
    { id: 35, avater: "../images/home/banner-small4-5.png", name: "VR", fid: 4 },

    { id: 36, avater: "../images/home/banner-small5-1.png", name: "智能家居", fid: 5 },
    { id: 37, avater: "../images/home/banner-small5-2.png", name: "移动路由", fid: 5 },
    { id: 38, avater: "../images/home/banner-small5-3.png", name: "智能音箱", fid: 5 },
    { id: 39, avater: "../images/home/banner-small5-4.png", name: "WIFI放大器", fid: 5 },
    { id: 40, avater: "../images/home/banner-small5-5.png", name: "智能存储", fid: 5 },
    { id: 41, avater: "../images/home/banner-small5-6.png", name: "电视盒子", fid: 5 },

    { id: 42, avater: "../images/home/banner-small-2-2.png", name: "华为智慧屏", fid: 6 },
    { id: 43, avater: "../images/home/banner-small-2-3.png", name: "荣耀智慧屏", fid: 6 },

    { id: 44, avater: "../images/home/banner-small7-1.png", name: "真无线耳机", fid: 7 },
    { id: 45, avater: "../images/home/banner-small7-2.png", name: "有线耳机", fid: 7 },
    { id: 46, avater: "../images/home/banner-small7-3.png", name: "有线耳机", fid: 7 },
    { id: 47, avater: "../images/home/banner-small7-4.png", name: "蓝牙音箱", fid: 7 },
    { id: 48, avater: "../images/home/banner-small7-5.png", name: "智能眼镜", fid: 7 },
    { id: 49, avater: "../images/home/banner-small7-6.png", name: "智能音箱", fid: 7 },

    { id: 50, avater: "../images/home/banner-small8-1.jpg", name: "移动电源", fid: 8 },
    { id: 51, avater: "../images/home/banner-small8-2.png", name: "充电器/线材", fid: 8 },
    { id: 52, avater: "../images/home/banner-small8-3.png", name: "自拍杆/支架", fid: 8 },
    { id: 53, avater: "../images/home/banner-small8-4.png", name: "摄像头/镜头", fid: 8 },
    { id: 54, avater: "../images/home/banner-small8-5.png", name: "智能硬件", fid: 8 },
    { id: 55, avater: "../images/home/banner-small8-6.png", name: "生活周边", fid: 8 },
    { id: 56, avater: "../images/home/banner-small8-7.png", name: "保护壳", fid: 8 },
    { id: 57, avater: "../images/home/banner-small8-8.png", name: "保护套", fid: 8 },
    { id: 58, avater: "../images/home/banner-small8-9.png", name: "贴膜", fid: 8 },
    { id: 59, avater: "../images/home/banner-small2-6.png", name: "个人电脑配件", fid: 8 },

    { id: 60, avater: "../images/home/banner-small9-1.png", name: "智能灯光", fid: 9 },
    { id: 61, avater: "../images/home/banner-small8-8.png", name: "生活电器", fid: 9 },
    { id: 62, avater: "../images/home/banner-small9-3.png", name: "数码周边", fid: 9 },
    { id: 63, avater: "../images/home/banner-small9-4.png", name: "环境卫士", fid: 9 },
    { id: 64, avater: "../images/home/banner-small9-5.png", name: "安防门锁", fid: 9 },
    { id: 65, avater: "../images/home/banner-small9-6.png", name: "健康保健", fid: 9 },
    { id: 66, avater: "../images/home/banner-small9-7.png", name: "运动户外", fid: 9 },
    { id: 67, avater: "../images/home/banner-small9-8.png", name: "厨电卫浴", fid: 9 },
    { id: 68, avater: "../images/home/banner-small9-9.png", name: "影视娱乐", fid: 9 },
    { id: 69, avater: "../images/home/banner-small9-10.png", name: "汽车出行", fid: 9 },

    { id: 70, avater: "../images/home/banner-small10-1.png", name: "华为视频卡", fid: 10 },
    { id: 71, avater: "../images/home/banner-small10-2.png", name: "花币卡", fid: 10 },
    { id: 72, avater: "../images/home/banner-small10-3.png", name: "华为音乐卡", fid: 10 },
    { id: 73, avater: "../images/home/banner-small10-4.png", name: "华为云空间", fid: 10 },
    { id: 74, avater: "../images/home/banner-small10-5.png", name: "电池更换服务", fid: 10 },
    { id: 75, avater: "../images/home/banner-small10-6.png", name: "服务器", fid: 10 },
    { id: 76, avater: "../images/home/banner-small10-7.png", name: "AI计算平台", fid: 10 }
];


var ul = document.querySelector('ul.main'); // ①
var li = null, a = null, span = null, subUl = null, subLi = null, subCategory = null;
// 找出所有一级分类
var mainCategory = category.filter(function (item) {
    return item.fid === 0;
});

// 外层循环：就是左边列表循环
for (var i = 0; i < mainCategory.length; i++) {
    // 循环到该项，创建一个 li，并且写定类名 ③
    li = document.createElement('li');
    li.className = 'main-content' + i; // 写类名
    a = document.createElement('a'); // 创建超链接标签
    a.innerText = mainCategory[i].name; // 超链接文字为 该项的name属性，即对应的“手机”、“穿戴”……
    li.appendChild(a); // 将创建的超链接标签写到刚刚创建的 li 里面此时，li长这样：<li class="main-content 1/2/3..."><a>该项的name</a></li>
    // 也就是说上面的五行语句作用就是创建如上的标签
    ul.appendChild(li); // 然后将创建的标签写入 ul，这个ul就是①获取的元素

    // 动态创建二级ul，二级ul呢就是列表右边隐藏的内容，也是一个列表 ②
    subUl = document.createElement('ul'); // 创建一个 ul 标签
    subUl.className = 'content-nav'; // 给标签赋值一个class为content-nav
    // 找出二级分类，即根据数据找到当前项的内容列表
    subCategory = category.filter(function (item) {
        return item.fid === mainCategory[i].id;
    });
    // 此时 subCategory 是个数组，数组就是内容列表
    // 循环遍历内容数组，但是 j <= ，因为有一个=号，最后就会多循环一次
    for (var j = 0; j <= subCategory.length; j++) {
        subLi = document.createElement('li'); // 同理创建 li 标签、a、span标签
        a = document.createElement('a');

        span = document.createElement('span');

        // 判断是否是多循环的那一次
        if (j == subCategory.length) {
            span.innerText = "查看全部";
        } else {
            // 如果是正常循环，就填充内容（还有一个图片）
            img = document.createElement('img');
            img.src = subCategory[j].avater;
            span.innerText = subCategory[j].name;
            a.appendChild(img); // img 插入到 a 标签里面
        }
        // 正常循环最终创建标签：<li></li> <a><img src=avatar /></a> <span>name<span>  如果是多的那次循环，span里面是 查看全部 并且没有 img

        // 下面三个语句就是插入到相应标签
        a.appendChild(span); // <span>name</span> 插入到a里面，<a><img src=avatar/><span>name</span></a> 多的那次循环依然没有img
        subLi.appendChild(a); // a 插入到 li：<li><a>....</a></li>
        subUl.appendChild(subLi); // li 插入到 ②
    }
    li.appendChild(subUl); // 最后把 ② 插入到 ③，因此 ③ 现在是 <li class="main-content 1/2/3..."><a>该项的name</a> ②(太多了省略)</li>
}
var aaa = document.querySelectorAll('ul.content-nav a');
for (var i = 0; i < aaa.length; i++) {
    aaa[i].onclick = function () {
        this.href = '../list/list.html?id=1';
    };
}

document.querySelector(".qbfl").addEventListener("click", function (e) {
    ul.classList.toggle("show")
})