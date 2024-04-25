const scrollHandler = function () {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const qbflElement = document.querySelector('.qbfl');
    const listMain = document.querySelector("ul.main")
    const mainHeight = listMain.clientHeight;
    const mainToTop = listMain.clientTop;
    const offset = mainHeight + mainToTop;
    if (scrollTop >= offset) {
        listMain.classList.add("withscroll");
        qbflElement.style.display = 'flex';
    } else {
        listMain.classList.remove("withscroll");
        qbflElement.style.display = 'none';
    }
};
//全部分类
document.addEventListener('DOMContentLoaded', function () {
    scrollHandler()
    window.addEventListener('scroll', scrollHandler);
});





//搜索栏
const searchIcon = document.querySelector('.searchbox-wrapper img');
const searchBoxContainer = document.querySelector('.searchbox-container');
const overlay = document.querySelector('.overlay');

searchIcon.addEventListener('click', function () {
    searchBoxContainer.classList.add('open'); // 添加 'open' 类名
    overlay.style.display = 'block'; // 显示遮罩层
});

document.addEventListener('click', function (event) {
    const targetElement = event.target;
    if (!searchBoxContainer.contains(targetElement) && targetElement !== searchIcon) {
        searchBoxContainer.classList.remove('open'); // 移除 'open' 类名
    }
    if (!searchBoxContainer.classList.contains('open')) {
        overlay.style.display = 'none'; // 隐藏遮罩层
    }
});

// 回到顶部
window.onscroll = function () {
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    document.querySelector('li.home-top').style.display = scrollTop >= 200 ? 'block' : 'none';
};
document.querySelector('li.home-top').onclick = function () {
    window.scrollTo(0, 0);
};

var timer = null;   //将来绑定interval计时器(全局变量)
// banner切换 轮播图
function bannerToggle(index) {
    // 取消激活
    document.querySelector('.banner-indicators>li.active').className = '';
    // 该激活的激活
    indicators[index].className = 'active';
    // 控制图片滑动
    document.querySelector('ul.banner-slide').style.marginLeft = '-' + index + '00%';
};
// 首页banner,小按钮
var indicators = document.querySelectorAll('.banner-indicators>li');
for (var i = 0; i < indicators.length; i++) {
    indicators[i].index = i;
    indicators[i].onmouseover = function () {
        if (this.className === 'active') return;
        // 调用bannertoggle指定第几个激活
        bannerToggle(this.index);
    }
};
// 中间按钮
document.querySelector('.banner-prev').onclick = function () {
    var index = document.querySelector('ul.banner-indicators>li.active').index;
    index = index === 0 ? indicators.length - 1 : index - 1;
    bannerToggle(index);
};
document.querySelector('.banner-next').onclick = function () {
    var index = document.querySelector('ul.banner-indicators>li.active').index;
    index = index === indicators.length - 1 ? 0 : index + 1;
    bannerToggle(index);
};
// 自动播放
function autoPlay() {
    timer = setInterval(function () {
        var index = document.querySelector('ul.banner-indicators>li.active').index;
        index = index === indicators.length - 1 ? 0 : index + 1;
        bannerToggle(index);
    }, 5000);
}
document.querySelector('.banner').onmouseover = function () {
    clearInterval(timer);     //停止自动轮播
}
document.querySelector('.banner').onmouseout = function () {
    autoPlay();              //调用autoplay再次启用自动轮播
};
autoPlay();
// 第二部分
var phones = [
    {
        img: '../images/home/floor2-1.png',
        name: '荣耀20 PRO',
        favour: '直降500元|享12期免息',
        price: 2499
    },
    {
        img: '../images/home/floor2-2.png',
        name: 'HUAWEI nova 5z',
        favour: '4800万AI四摄',
        price: 1599
    },
    {
        img: '../images/home/floor2-3.png',
        name: '荣耀V30 PRO',
        favour: '最高优惠200元|享免息',
        price: 4199
    },
    {
        img: '../images/home/floor2-4.png',
        name: 'HUAWEI Mate 30  4G',
        favour: '享分期免息|赠保护壳',
        price: 4299
    },
    {
        img: '../images/home/floor2-5.png',
        name: '荣耀20',
        favour: '最高优惠200元|享免息',
        price: 2099
    },
    {
        img: '../images/home/floor2-6.png',
        name: 'HUAWEI Mate 30 RS 保时捷设计',
        favour: '致敬时代',
        price: 12999
    },
    {
        img: '../images/home/floor2-7.png',
        name: 'HUAWEI nova 5 Pro',
        favour: '限量赠好礼',
        price: 2499
    },
    {
        img: '../images/home/floor2-8.png',
        name: '荣耀20青春版',
        favour: '最高优惠400',
        price: 999
    }
];

var ul = document.querySelector('.part2small');
for (var i = 0; i < phones.length; i++) {
    li = document.createElement('li');
    // 动态创建一个a
    a = document.createElement('a');
    // 动态创建一个img
    img = document.createElement('img');
    img.src = phones[i].img; 	           // 控制
    a.appendChild(img);
    // 动态创建一个span
    h4 = document.createElement('h4');
    h4.innerText = phones[i].name;
    a.appendChild(h4);
    span = document.createElement('span');
    span.innerText = phones[i].favour;
    a.appendChild(span);

    // 动态创建一个p
    p = document.createElement('p');
    p.innerText = '￥' + phones[i].price;
    a.appendChild(p);

    li.appendChild(a);
    ul.appendChild(li);
}


// 第三部分
var supreme = [
    {
        img: '../images/home/floor3-1.png',
        name: 'HUAWEI MateBook 2020款',
        favour: '赠蓝牙鼠标+3期免息',
        price: 6399
    },
    {
        img: '../images/home/floor3-2.png',
        name: '荣耀MagicBook 14',
        favour: '订金100最高抵700+赠手环  ',
        price: 3899
    },
    {
        img: '../images/home/floor3-3.png',
        name: 'HUAWEI MateBook 2020款',
        favour: '赠扩展坞+3期免息',
        price: 5999
    },
    {
        img: '../images/home/floor3-4.png',
        name: '荣耀智慧屏系列',
        favour: '最高直降900元',
        price: 2999
    },
    {
        img: '../images/home/floor3-5.png',
        name: 'HUAWEI WATCH GT',
        favour: '最高享3期免息',
        price: 1688
    },
    {
        img: '../images/home/floor3-6.png',
        name: '华为路由 A2',
        favour: '多连不卡 一碰连网',
        price: 399
    },
    {
        img: '../images/home/floor3-7.png',
        name: 'FreeLace 无线耳机',
        favour: '随插随充',
        price: 499
    },
    {
        img: '../images/home/floor3-8.png',
        name: '荣耀手表梦幻系列',
        favour: '3期免息 到手价699起',
        price: 799
    },
    {
        img: '../images/home/floor3-9.png',
        name: '荣耀小哨兵智能摄像机',
        favour: '360度全景云台',
        price: 129
    },
    {
        img: '../images/home/floor3-10.png',
        name: '华为路由WS5200增强版',
        favour: '新品上市',
        price: 199
    },
    {
        img: '../images/home/floor3-11.png',
        name: '华为无线充电器',
        favour: '支持iPhone X系列充电',
        price: 99
    },
    {
        img: '../images/home/floor3-12.png',
        name: '荣耀智能体脂秤',
        favour: 'BIA测脂/高精准传感',
        price: 169
    },
    {
        img: '../images/home/floor3-13.png',
        name: '华为备咖存储',
        favour: '1T大容量',
        price: 699
    },
    {
        img: '../images/home/floor3-14.png',
        name: '荣耀体重秤',
        favour: '3期免息 到手价699起',
        price: 99
    },
    {
        img: '../images/home/floor3-15.png',
        name: '荣耀魔方蓝牙音箱',
        favour: '支持iPhone X系列充电',
        price: 99
    }
];

var ul = document.querySelector('ul.supreme');
var indexs = 0, li = null;
for (var i = 0; i < supreme.length; i++) {
    li = document.createElement('li');
    // 动态创建一个a
    a = document.createElement('a');
    // 动态创建一个img
    div = document.createElement('div');

    img = document.createElement('img');
    img.src = supreme[i].img; 	           // 控制
    div.appendChild(img);
    a.appendChild(div);
    span = document.createElement('span');
    span.innerText = supreme[i].favour;
    a.appendChild(span);

    li.appendChild(a);
    // 动态创建一个h4
    h4 = document.createElement('h4');
    h4.innerText = supreme[i].name;
    li.appendChild(h4);
    // 动态创建一个p
    p = document.createElement('p');
    p.innerText = '￥' + supreme[i].price;
    li.appendChild(p);

    ul.appendChild(li);
};
//小按钮
document.querySelector('.supreme2>.prev2').disabled = true;
document.querySelector('.supreme2>.next2').disabled = supreme.length <= 5;
// 左边
document.querySelector('div.supreme2>.prev2').onclick = function () {
    document.querySelector('.supreme2>.next2').disabled = false;
    indexs = indexs - 1;
    document.querySelector('ul.supreme').style.marginLeft = '-' + indexs * 100 + '%';
    document.querySelector('div.supreme2>.prev2').disabled = indexs === 0;
};
// 右边
document.querySelector('div.supreme2>.next2').onclick = function () {
    document.querySelector('.supreme2>.prev2').disabled = false;
    indexs = indexs + 1;
    document.querySelector('ul.supreme').style.marginLeft = '-' + indexs * 100 + '%';
    document.querySelector('div.supreme2>.next2').disabled = supreme.length <= 5 * (indexs + 1);
};

// part5
var rongyao = [
    {
        img: '../images/home/rongyao1.png',
        name: '',
        favour: '',
        price: ''
    },
    {
        img: '../images/home/rongyao2.png',
        name: '荣耀9X PRO',
        favour: '优惠200 送心晴耳机',
        price: 1999
    },
    {
        img: '../images/home/rongyao3.png',
        name: 'HUAWEI nova 6 SE',
        favour: '享6期分期免息',
        price: 2199
    },
    {
        img: '../images/home/rongyao4.png',
        name: '荣耀20S',
        favour: '最高优惠400',
        price: 1499
    },
    {
        img: '../images/home/rongyao5.png',
        name: 'HUAWEI Mate 30 Pro',
        favour: '享分期免息|赠保护壳 ',
        price: 5799
    },
    {
        img: '../images/home/rongyao6.png',
        name: '荣耀Play3',
        favour: '最高优惠300元 ',
        price: 899
    },
    {
        img: '../images/home/rongyao7.png',
        name: 'HUAWEI P30',
        favour: '限量赠好礼',
        price: 3688
    },
    {
        img: '../images/home/rongyao8.png',
        name: 'HUAWEI Mate 20 RS 保时捷设计',
        favour: '赠Sound X智能音箱|享6期免息 ',
        price: 12999
    },
    {
        img: '../images/home/rongyao9.png',
        name: '荣耀8X荣耀20青春版',
        favour: '最高优惠600',
        price: 999
    },
    {
        img: '../images/home/rongyao10.png',
        name: '华为畅享10 Plus',
        favour: '2.17最高领券减150 ',
        price: 1399
    },
    {
        img: '../images/home/rongyao11.png',
        name: '荣耀8X Max',
        favour: '最高降800元 ',
        price: 999
    },
    {
        img: '../images/home/rongyao12.png',
        name: '华为畅享10',
        favour: '2.17最高领券减150 ',
        price: 1299
    },
    {
        img: '../images/home/rongyao13.png',
        name: '荣耀Play3e',
        favour: '购机抽锦鲤大奖',
        price: 899
    },
    {
        img: '../images/home/rongyao14.png',
        name: '华为畅享 10S',
        favour: '2.17最高领券减250',
        price: 1599
    },
    {
        img: '../images/home/rongyao15.png',
        name: '荣耀20i',
        favour: '最高降600元',
        price: 1299
    }
];
var ul = document.querySelector('ul.rongyao-nav-main');
for (var i = 0; i < rongyao.length; i++) {
    li = document.createElement('li');
    a = document.createElement('a');
    div = document.createElement('div');
    img = document.createElement('img');
    img.src = rongyao[i].img;
    a.appendChild(img);

    h4 = document.createElement('h4');
    h4.innerText = rongyao[i].name;
    div.appendChild(h4);

    span = document.createElement('span');
    span.innerText = rongyao[i].favour;
    div.appendChild(span);

    p = document.createElement('p');
    p.innerText = '￥' + rongyao[i].price;
    div.appendChild(p);
    a.appendChild(div);
    li.appendChild(a);
    ul.appendChild(li);
}


// count 表示总共有多少个公告需要轮播
// index 表示当前正显示第几个公告
// isToggle 表示当前公告是否正处于切换中
var times = null;
var count = 3, index = 0, isToggle = false;
// 公告切换
function noticeToggle() {
    if (isToggle) return;     //如果正处于切换中,不能切换,直接返回
    isToggle = true;       //表示当前正处于切换中
    index = index + 1;
    var noticeEl = document.querySelector('ul.notice');
    // 总是再次开启动画,做一些重要的收尾和重置的工作.
    noticeEl.style.transition = 'all 0.3s';
    noticeEl.style.transform = 'translateY(-' + index * 100 + '%)';
    // 切换动画结束后,做一些重要的收尾和重置工作
    setTimeout(function () {
        isToggle = false;        //表示切换已经结束,可以进行下一次切换
        if (index === count) {    //如果需要重置
            // 停止动画,以便瞬间拉回;
            noticeEl.style.transition = 'all 0s';
            // 瞬间重置拉回起始位置,以便继续下一轮轮播
            noticeEl.style.transform = 'translateY(-0%)';
            // index重置
            index = 0;
        }
    }, 320);
}
// 自动播放
function autoPlays() {
    times = setInterval(function () {
        noticeToggle();
    }, 3000);
}
document.querySelector('.notice-wrapper').onmouseover = function () {
    clearInterval(times);     //停止自动轮播
};
document.querySelector('.notice-wrapper').onmouseout = function () {
    autoPlays();              //调用autoplay再次启用自动轮播
};
autoPlays();


// 1.尝试从cookie中获取用户的用户名,进而判断是否登录
var login = '请登录';
var exit = '注册';
var li = document.querySelector('.logins');
a = document.createElement('a');
a.className = 'unlogin';
a.href = "../login/login.html";
li.appendChild(a);
if (Cookies.get('uName')) {
    login = Cookies.get('uName');
    exit = '退出';
    a.href = "../personal/personal.html";
}
top1();
function top1() {
    document.querySelector('.unlogin').innerText = login;
    document.querySelector('.zc').innerText = exit;
}

var part2 = document.querySelectorAll('.part2small a');
for (var i = 0; i < part2.length; i++) {
    part2[i].onclick = function () {
        this.href = '../xiangqing/xiangqing.html';
    };
}
var part3 = document.querySelectorAll('.supreme a');
for (var i = 0; i < part3.length; i++) {
    part3[i].onclick = function () {
        this.href = '../xiangqing/xiangqing.html';
    };
}
var part5 = document.querySelectorAll('.rongyao-nav-main a');
for (var i = 0; i < part5.length; i++) {
    part5[i].onclick = function () {
        this.href = '../xiangqing/xiangqing.html';
    };
}