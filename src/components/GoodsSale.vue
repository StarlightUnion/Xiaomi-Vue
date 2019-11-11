<template>
  <div class="goods-sale">
    <poster :postItem="postItem1"></poster>
    <goods-box :goodsItem="goodsItem1"></goods-box>
    <poster :postItem="postItem2"></poster>
    <goods-box :goodsItem="goodsItem2"></goods-box>
    <poster :postItem="postItem3"></poster>
    <goods-box :goodsItem="goodsItem3"></goods-box>
    <poster :postItem="postItem4"></poster>
    <goods-box :goodsItem="goodsItem4"></goods-box>
    <poster :postItem="postItem5"></poster>
    <goods-box :goodsItem="goodsItem5"></goods-box>
    <poster :postItem="postItem6"></poster>
    <goods-box :goodsItem="goodsItem6"></goods-box>
    <poster :postItem="postItem7"></poster>
  </div>
</template>

<script>
import Poster from '../parts/Poster'
import GoodsBox from '../parts/GoodsBox'

export default {
  data () {
    return {
      postItem1: {src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1a2f39c9fe0804ace1d3707574c7c86f.jpg?w=2452&h=240', url: 'https://www.mi.com/redminote7pro/'},
      postItem2: {src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e64bcac4e4b7c2ceb94f277bbc57ad45.jpg?w=2452&h=240', url: 'https://www.mi.com/a/h/9819.html'},
      postItem3: {src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7606bb66991f59e15b5b35e917b1a907.jpg?w=2452&h=240', url: 'https://www.mi.com/a/h/11544.html'},
      postItem4: {src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0e2cf7dd837eb8d4690070d7dfa817d9.jpg?w=2452&h=240', url: 'https://item.mi.com/10476.html'},
      postItem5: {src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/89c2a209b742fce9b10d9d196149d634.jpg?w=2452&h=240', url: 'https://www.mi.com/airenergy/'},
      postItem6: {src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/10fb0086cb21120c53248a3d8cc56dc5.jpg?w=2452&h=240', url: 'https://item.mi.com/10327.html'},
      postItem7: {src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/88e35cffc82cd98cd53172460067af17.jpg?w=2452&h=240', url: 'https://item.mi.com/9836.html'},

      goodsItem1: {
        boxTitle: '手机',
        isHot: false,
        vertical: true,
        url: 'https://www.mi.com/a/h/9891.html',
        listData: {
          promo: [{src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/79ed6663b57e30554a5d1f0653c68b78.jpg?w=468&h=1228', url: 'https://www.mi.com/mix2s/'}],
          goods: [
            {value: 'Redmi Note 8 Pro', desc: '6400万全场景四摄', sub: true, newPrice: '1399', oldPrice: '', src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6f2493e6c6fe8e2485c407e5d75e3651.jpg', url: 'http://www.mi.com/redminote8pro'},
            {value: 'Redmi Note 8', desc: '千元4800万四摄', sub: true, newPrice: '999', oldPrice: '', src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4c87947d104ee5833913e4c520108f16.jpg', url: 'http://www.mi.com/redminote8'},
            {value: 'Redmi K20 Pro 6GB+128GB', desc: '骁龙855， 弹出全面屏', sub: false, newPrice: '2299', oldPrice: '2599', src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/beee478168e5c4fd0d66369386fddbbe.jpg', url: 'https://www.mi.com/redmik20pro/'},
            {value: 'Redmi Note 7', desc: '4800万拍照千元机', sub: false, newPrice: '1099', oldPrice: '1399', src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0ce61b71e2f81df62bd0c05aaa901d22.jpg', url: 'https://www.mi.com/redminote7/'},
            {value: 'Redmi 7', desc: '4000mAh超长续航', sub: true, newPrice: '699', oldPrice: '799', src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9aab8a7fa9005ef918c9aa2d5f17c806.jpg', url: 'https://www.mi.com/redmi7/'},
            {value: '小米MIX 3 8GB+128GB', desc: 'DxO百分拍照手机', sub: false, newPrice: '2599', oldPrice: '3599', src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/411d540271f6efbdd882fa33daee0de3.jpg', url: 'https://www.mi.com/mix3/'},
            {value: '小米CC9', desc: '3200万自拍，4800万三摄', sub: true, newPrice: '1699', oldPrice: '1799', src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/bd25cc614a670f4d5546fe82e239ef86.jpg', url: 'https://www.mi.com/micc9/'},
            {value: '小米9 SE', desc: '索尼4800万三摄，骁龙712', sub: true, newPrice: '1599', oldPrice: '1999', src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/134efaa5dec3267ce29e36bad3ec26c9.jpg', url: 'https://www.mi.com/mi9se/'}
          ]
        }
      },
      goodsItem2: {
        boxTitle: '家电',
        isHot: true,
        vertical: false,
        tabList: [
          {value: '热门', type: 'hots', url: 'https://www.mi.com/p/3469.html'},
          {value: '电视音影', type: 'television', url: 'https://www.mi.com/a/h/9819.html'}
        ],
        listData: {
          promo: [
            {src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/221f2c4adfda2fc3827ce3a5dcb4850a.jpg?w=468&h=600', url: 'https://item.mi.com/9614.html'},
            {src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b67de5a8ce9025fb5d8bac66e019d1c3.jpg?w=468&h=600', url: 'https://item.mi.com/9527.html'}
          ],
          hots: [
            {value: '米家互联网空调C1（一级能效）', desc: '变频节能省电，自清洁', sub: false, newPrice: '2599', oldPrice: '2799', src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8ce424d6fe93dfb74733b5838140b7ee.jpg', url: 'https://www.mi.com/airconditionc1/v1c1/'},
            {value: '米家空调', desc: '出众静音，快速制冷热', sub: false, newPrice: '1699', oldPrice: '1799', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2b911be4c2f156bb6e4cf367c6080045.jpg', url: 'https://www.mi.com/aircondition/f3w1/'},
            {value: '米家互联网洗烘一体机 Pro 10kg', desc: '智能洗烘，省心省力', sub: false, newPrice: '2999', oldPrice: '', src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ec20453216dcd42f982cffe5fdbc3115.jpg', url: 'https://item.mi.com/9963.html'},
            {value: '小米电视4A 32英寸', desc: '人工智能系统，高清液晶屏', sub: false, newPrice: '699', oldPrice: '799', src: 'https://i8.mifile.cn/v1/a1/ef617fac-7489-436d-b74e-c43582f09633.jpg', url: 'https://www.mi.com/mitv4A/32/'},
            {value: 'Redmi全自动波轮洗衣机1A 8kg', desc: '一键操作，父母都爱用', sub: false, newPrice: '799', oldPrice: '', src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b8c63a2024528fe5410ebe669b7d2407.jpg', url: 'https://item.mi.com/9509.html'},
            {value: '小米全面屏电视E55A', desc: '全面屏设计，人工智能语音', sub: false, newPrice: '1999', oldPrice: '2099', src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ef6b4e9b9151849b3b1fb1dbf069c6ed.jpg', url: 'https://www.mi.com/mitvall-screen/e55a/'},
            {value: '15.6" 四核i7 16G 独显 512G', desc: '全面均衡的国民轻薄本', sub: false, newPrice: '4899', oldPrice: '', src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cd2aa2dcad6440b469c22e27db9b6236.jpg', url: 'https://item.mi.com/10253.html'},
            {value: 'Air 13.3" 2019款 ', desc: '', sub: true, newPrice: '4699', oldPrice: '', src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/74e573c4c0d89048392d14831cc507d5.jpg', url: 'https://item.mi.com/10000142.html'}
          ],
          television: [
            {value: '小米电视4A 32英寸', desc: '人工智能系统，高清液晶屏', sub: false, newPrice: '699', oldPrice: '799', src: 'https://i8.mifile.cn/v1/a1/ef617fac-7489-436d-b74e-c43582f09633.jpg', url: 'https://www.mi.com/mitv4A/32/'},
            {value: '小米全面屏电视E55A', desc: '全面屏设计，人工智能语音', sub: false, newPrice: '1999', oldPrice: '2099', src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ef6b4e9b9151849b3b1fb1dbf069c6ed.jpg', url: 'https://www.mi.com/mitvall-screen/e55a/'},
            {value: '小米全面屏电视E65A', desc: '全面屏设计，人工智能语音', sub: false, newPrice: '2999', oldPrice: '3999', src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b3317a291b112aa4712059ad93263668.jpg', url: 'https://www.mi.com/mitvall-screen/e65a/'},
            {value: '小米电视4X 43英寸', desc: 'FHD全高清屏，人工智能语音', sub: false, newPrice: '1299', oldPrice: '1499', src: 'https://i8.mifile.cn/b2c-mimall-media/ede227c1f0e3472fb8dcfae980d1e43f.jpg', url: 'https://www.mi.com/mitv4x/43/'},
            {value: '小米电视4C 55英寸', desc: '4K HDR，人工智能系统', sub: false, newPrice: '1699', oldPrice: '1799', src: 'https://i8.mifile.cn/v1/a1/cef8a9c0-2386-5b66-9ed2-6b1d4e4490bf.jpg', url: 'https://www.mi.com/mitv4c/55/'},
            {value: '小米电视4A 65英寸', desc: '4K HDR，人工智能语音系统', sub: false, newPrice: '2699', oldPrice: '2999', src: 'https://i8.mifile.cn/b2c-mimall-media/91b59cc6474e0cd777445b15adb13980.jpg', url: 'https://www.mi.com/mitv4A/65'},
            {value: '小米壁画电视 65英寸', desc: '壁画外观，全面屏，远场语音', sub: false, newPrice: '6999', oldPrice: '', src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0e7eee530e4a103f2f5a0937a14bed53.jpg', url: 'https://www.mi.com/arttv/'},
            {value: '小米盒子4', desc: '', sub: false, newPrice: '299', oldPrice: '', src: 'https://i8.mifile.cn/b2c-mimall-media/aa8a6ce3b2b1201d74d0197482f3403b.jpg', url: 'https://www.mi.com/mibox4'}
          ]
        }
      },
      goodsItem3: {
        boxTitle: '智能',
        isHot: true,
        vertical: false,
        tabList: [
          {value: '热门', type: 'hots', url: 'https://www.mi.com/p/3469.html'},
          {value: '出行', type: 'trip', url: 'https://www.mi.com/p/3469.html'}
        ],
        listData: {
          promo: [
            {src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/45c23f5b9a927b2dc49c25277e07727c.jpg?w=468&h=600', url: 'https://www.mi.com/camera-360/'},
            {src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a660ce095e8f553a9ed1515265f4e9fc.jpg?w=468&h=600', url: 'https://item.mi.com/9285.html'}
          ],
          hots: [
            {value: '小米「小爱老师」', desc: '口袋里的英语外教', sub: true, newPrice: '499', oldPrice: '', src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/011dd8493ad62f3793dbb63d9fbd3bc0.jpg', url: 'https://www.mi.com/aiteacher-wifi/'},
            {value: '小米米家智能门锁 推拉式', desc: '一步推拉，高端智能门锁', sub: false, newPrice: '1599', oldPrice: '1699', src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0baacf6e54cbf89cab2c543cc02344e9.jpg', url: 'https://item.mi.com/10025.html'},
            {value: '小米小爱音箱 Play', desc: '听音乐、语音遥控家电', sub: false, newPrice: '99', oldPrice: '169', src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e7c6e79433c883e1a022ec21402c1679.jpg', url: 'https://www.mi.com/aispeaker-play/'},
            {value: '小爱音箱万能遥控版', desc: '传统家电秒变智能', sub: false, newPrice: '149', oldPrice: '199', src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/44a30f0da2aacb66a0f896293ebc703f.jpg', url: 'https://www.mi.com/aispeaker-control/'},
            {value: '米家电饭煲4L', desc: '890W 立体加热', sub: false, newPrice: '299', oldPrice: '', src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b42e49c6c0208f2de5a2f7a491a3af46.jpg', url: 'https://item.mi.com/9990.html'},
            {value: '小米手环4', desc: '大屏彩显，20天超长续航', sub: false, newPrice: '169', oldPrice: '', src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e850fa029579ba886e3d5c81f00ae534.jpg', url: 'https://www.mi.com/shouhuan4/'},
            {value: '米家九号平衡轮', desc: '能花式酷玩的“风火轮”', sub: false, newPrice: '999', oldPrice: '', src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0c65d472682f0679e192dc7b4cd6e64c.jpg', url: 'https://item.mi.com/10003.html'},
            {value: '小米体脂秤2', desc: '', sub: false, newPrice: '99', oldPrice: '', src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/550177d2e54387521bce9e78cb2949dd.jpg', url: 'https://item.mi.com/9686.html'}
          ],
          trip: [
            {value: '小米米家电动滑板车', desc: '便携折叠，自由穿行', sub: false, newPrice: '1999', oldPrice: '', src: 'https://i8.mifile.cn/v1/a1/768992ca-4136-92f1-244a-0194a81a6360.jpg', url: 'https://www.mi.com/scooter2/'},
            {value: '米兔折叠婴儿推车', desc: '出发去向往的地方', sub: false, newPrice: '669', oldPrice: '699', src: 'https://i8.mifile.cn/b2c-mimall-media/18a82e7cda6ecbc22ecee7ac927d6ff9.jpg', url: 'https://www.mi.com/babyfoldingcar/'},
            {value: '米兔遥控小飞机', desc: '迷你酷玩具，溜到飞起', sub: false, newPrice: '399', oldPrice: '', src: 'https://i8.mifile.cn/b2c-mimall-media/553b5c01820c844565abe64e50bba323.jpg', url: 'https://www.mi.com/minidrone/'},
            {value: '米家车载空气净化器', desc: '高效净化车内空气', sub: false, newPrice: '449', oldPrice: '', src: 'https://i8.mifile.cn/v1/a1/cdc5c77b-d7e9-5a42-f848-3ff1808a139a.jpg', url: 'https://www.mi.com/carair/'},
            {value: 'AMAZFIT 运动手表', desc: '扔掉手机去跑步', sub: false, newPrice: '769', oldPrice: '799', src: 'https://i8.mifile.cn/v1/a1/aaa1593d-9ca7-2944-3b62-380cc3427d82.jpg', url: 'https://www.mi.com/hmwatch/'},
            {value: '九号平衡车 Plus', desc: '一个形影不离的新伙伴', sub: false, newPrice: '3499', oldPrice: '', src: 'https://i8.mifile.cn/v1/a1/877d3ce8-68ab-7506-2a78-55a8c0fba946.png', url: 'https://www.mi.com/scooterplus/'},
            {value: '米家车载逆变器', desc: '双USB充电口，国际组合插孔', sub: false, newPrice: '199', oldPrice: '', src: 'https://i8.mifile.cn/b2c-mimall-media/61472c3fcd181959055551e5c73aafec.jpg', url: 'https://item.mi.com/7627.html'},
            {value: '米家充气宝', desc: '', sub: false, newPrice: '199', oldPrice: '', src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0294e2f3997bf0cffb7bf48361d03588.jpg', url: 'https://item.mi.com/9613.html'}
          ]
        }
      },
      goodsItem4: {
        boxTitle: '搭配',
        isHot: true,
        vertical: false,
        tabList: [
          {value: '热门', type: 'hots', url: 'https://www.mi.com/p/3469.html'},
          {value: '耳机音箱', type: 'earphone', url: 'https://www.mi.com/p/3469.html'}
        ],
        listData: {
          promo: [
            {src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6874615b3c50e837ffe532eb6ea4ef1a.jpg?w=468&h=600', url: 'https://www.mi.com/scooter/'},
            {src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e4e456617d58227cc70d682b42fe90e3.jpg?w=468&h=600', url: 'https://www.mi.com/mj-electricshaver/'}
          ],
          hots: [
            {value: 'Redmi充电宝 10000mAh 标准版 白色', desc: '10000mAh大电量', sub: false, newPrice: '59', oldPrice: '', src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ea8e42faebf7d76a4cb42b8930cf9e46.jpg', url: 'https://item.mi.com/10317.html'},
            {value: 'Redmi充电宝 20000mAh 快充版', desc: '大容量，	可上飞机 ', sub: false, newPrice: '99', oldPrice: '', src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/eaf70e0e9905de6452f07b1f48fcc386.jpg', url: 'https://item.mi.com/10318.html'},
            {value: '小米二合一数据线', desc: '两种接口，支持多种设备', sub: false, newPrice: '19.9', oldPrice: '', src: 'https://i8.mifile.cn/v1/a1/287594eb-b765-8db1-3255-0a05c4c07440.jpg', url: 'https://item.mi.com/4833.html'},
            {value: '小米插线板 5孔位', desc: '多重安全保护', sub: false, newPrice: '39', oldPrice: '', src: 'https://i8.mifile.cn/v1/a1/5dd69c0a-8f4a-b42f-d840-6c5a47f2cd03.jpg', url: 'https://item.mi.com/5857.html'},
            {value: '小米无线充电器', desc: '快速充电，轻巧便携', sub: false, newPrice: '99', oldPrice: '', src: 'https://i8.mifile.cn/b2c-mimall-media/d7fd9ecdca3959beae3fb5db59aa9aff.jpg', url: 'https://item.mi.com/9009.html'},
            {value: '小米蓝牙耳机AirDots青春版', desc: '雅致简约，收纳充电盒', sub: false, newPrice: '199', oldPrice: '', src: 'https://i8.mifile.cn/b2c-mimall-media/92af1f21293fabfbf2a112892b864925.jpg', url: 'https://item.mi.com/9016.html'},
            {value: '小米小爱蓝牙音箱 随身版', desc: '小巧便携，一键唤醒小爱', sub: false, newPrice: '49', oldPrice: '', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/321610e787393c42e5cb2e5730a7681d.jpg', url: 'https://www.mi.com/sound-carry/'},
            {value: '小米小爱触屏音箱', desc: '', sub: false, newPrice: '249', oldPrice: '', src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9946e252a7c49662376c056ced004a20.jpg', url: 'https://www.mi.com/aispeaker-touch/'}
          ],
          earphone: [
            {value: '小米双单元半入耳式耳机', desc: '半入耳式舒适佩戴', sub: false, newPrice: '69', oldPrice: '', src: 'https://i8.mifile.cn/b2c-mimall-media/ddf317f34e47eed06d910ee0ffd6b2fc.jpg', url: 'https://www.mi.com/half-in-ear/'},
            {value: '小米蓝牙项圈耳机', desc: '挂在脖子上的好耳机', sub: false, newPrice: '299', oldPrice: '', src: 'https://i8.mifile.cn/b2c-mimall-media/838ba427ef55317d8c4911b02c95bb79.jpg', url: 'https://www.mi.com/bluetooth-collar/'},
            {value: '小米圈铁耳机2', desc: '全面升级，让声音更有质感', sub: false, newPrice: '99', oldPrice: '', src: 'https://i8.mifile.cn/b2c-mimall-media/a0e1b48582e68cecf4b3e32dd1b5549d.jpg', url: 'https://www.mi.com/quantie2/'},
            {value: '小米随身蓝牙音箱', desc: '全金属外壳，内置麦克风', sub: false, newPrice: '69', oldPrice: '', src: 'https://i8.mifile.cn/v1/a1/T1hVY_BTdv1RXrhCrK.jpg', url: 'https://www.mi.com/littleaudio/'},
            {value: '小米蓝牙耳机青春版', desc: '6.5 克轻巧，高清通话音质', sub: false, newPrice: '59', oldPrice: '', src: 'https://i8.mifile.cn/v1/a1/e4c0f21c-3bd4-323e-673b-a9c1c1c6e294.jpg', url: 'https://www.mi.com/bluetooth-earphone/'},
            {value: '小米运动蓝牙耳机mini', desc: '迷你机身, 小如蚕豆', sub: false, newPrice: '169', oldPrice: '', src: 'https://i8.mifile.cn/v1/a1/852c3872-7aca-e565-b8fb-37aa3ce88979.jpg', url: 'https://www.mi.com/sportearphone-mini/'},
            {value: '小米蓝牙耳机AirDots青春版', desc: '雅致简约，收纳充电盒', sub: false, newPrice: '199', oldPrice: '', src: 'https://i8.mifile.cn/b2c-mimall-media/92af1f21293fabfbf2a112892b864925.jpg', url: 'https://item.mi.com/9016.html'}
          ]
        }
      },
      goodsItem5: {
        boxTitle: '配件',
        isHot: true,
        vertical: false,
        tabList: [
          {value: '热门', type: 'hots', url: 'https://search.mi.com/search_%E4%BF%9D%E6%8A%A4%E5%A3%B3'},
          {value: '保护套', type: 'protective', url: 'https://search.mi.com/search_%E4%BF%9D%E6%8A%A4%E5%A3%B3'}
        ],
        listData: {
          promo: [
            {src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/739ebd8abfc2b1be8866a2c1ad87e709.jpg?w=468&h=600', url: 'https://item.mi.com/9016.html'},
            {src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ffe4182f1d9a5befdf2380ec90ae1620.jpg?w=468&h=600', url: 'https://www.mi.com/dispenser/'}
          ],
          hots: [
            {value: '小米9 SE 街头风保护壳', desc: '简约时尚，多彩三色', sub: false, newPrice: '49', oldPrice: '', src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6c19fad90ad73f91e13c97cce2b15d82.jpg', url: 'https://item.mi.com/9355.html'},
            {value: '小米CC9e 高透果冻保护壳', desc: '更薄更清透', sub: false, newPrice: '49', oldPrice: '', src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9dd5ef3ab726a9b9b9cd39587a1d0e86.jpg', url: 'https://item.mi.com/10173.html'},
            {value: 'Redmi K20 / K20 Pro 怪力魔王保护壳', desc: '怪力魔王专属定制', sub: false, newPrice: '39', oldPrice: '', src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8fb7f3be403cfcbe98576bee28c7cc25.jpg', url: 'https://item.mi.com/9889.html'},
            {value: '小米MIX 3 獬豸神兽保护壳', desc: '因为独特而备受瞩目', sub: false, newPrice: '32.9', oldPrice: '69', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/20bb12392d70e3b7158c252e9c34d0b0.jpg', url: 'https://item.mi.com/9133.html'},
            {value: '小米 USB充电器（4口）', desc: '化繁为简，以一敌四', sub: false, newPrice: '59', oldPrice: '69', src: 'https://i8.mifile.cn/v1/a1/T1C__gBmYv1RXrhCrK.jpg', url: 'https://www.mi.com/chongdianqi4kou'},
            {value: '米家LED随身灯', desc: '小巧轻便 5级亮度调节', sub: false, newPrice: '16.9', oldPrice: '19.9', src: 'https://i8.mifile.cn/v1/a1/b0ded71f-b235-8f99-ba1c-20f80c3a4231.jpg', url: 'https://item.mi.com/4053.html'},
            {value: '小米USB-C数据线 编织线版', desc: '高强度纤维编制线体', sub: true, newPrice: '18.9', oldPrice: '', src: 'https://i8.mifile.cn/b2c-mimall-media/4132366589e457f407b918fe48c89cb1.jpg', url: 'https://item.mi.com/10000124.html'},
            {value: 'USB Type-C 转接头', desc: '', sub: false, newPrice: '5', oldPrice: '', src: 'https://i8.mifile.cn/v1/a1/T1hvC_BQdT1RXrhCrK.jpg', url: 'https://item.mi.com/3751.html'}
          ],
          protective: [
            {value: '小米CC9&小米CC9美图定制版 标准高透贴膜', desc: '高清透亮，耐磨性强', sub: false, newPrice: '19', oldPrice: '', src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5c200476bc9336d171931cb7ee2e4549.jpg', url: 'https://item.mi.com/10171.html'},
            {value: '小米CC9e 标准高透贴膜', desc: '高清透亮，耐磨性强', sub: false, newPrice: '19', oldPrice: '', src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/24f8b0547a798b69be1b868872ddd80f.jpg', url: 'https://item.mi.com/10172.html'},
            {value: 'Redmi 7A标准高透贴膜', desc: '高清高透，精彩清晰可见', sub: false, newPrice: '19', oldPrice: '', src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/958e872fe9930838e90de8acc9fffc28.jpg', url: 'https://item.mi.com/9891.html'},
            {value: '小仙女心愿手链保护壳', desc: '手链绕于指尖，仙气满满', sub: false, newPrice: '199', oldPrice: '', src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e5599ccd40bab44fb0f1722d150fe43f.jpg', url: 'https://item.mi.com/10177.html'},
            {value: '小米CC9 荧光色高透果冻保护壳', desc: '玩转多彩青春色', sub: false, newPrice: '49', oldPrice: '', src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0d8a74ade6b1b5fbd0c88b9679c63832.jpg', url: 'https://item.mi.com/10168.html'},
            {value: 'Redmi K20 / K20 Pro 怪力魔王保护壳', desc: '怪力魔王专属定制', sub: false, newPrice: '39', oldPrice: '', src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8fb7f3be403cfcbe98576bee28c7cc25.jpg', url: 'https://item.mi.com/9889.html'},
            {value: '小米9 ARE U OK保护壳', desc: '一个与众不同的保护壳', sub: false, newPrice: '39', oldPrice: '49', src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/39a5445afe8c48d9b92b2bf9d6d88a26.jpg', url: 'https://item.mi.com/9720.html'},
            {value: '小米9 RUOK保护壳', desc: '', sub: false, newPrice: '39', oldPrice: '', src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/913e51883bf91da95c2f84b0776b95cf.jpg', url: 'https://item.mi.com/9721.html'}
          ]
        }
      },
      goodsItem6: {
        boxTitle: '周边',
        isHot: true,
        vertical: false,
        tabList: [
          {value: '热门', type: 'hots', url: 'https://www.mi.com/p/3484.html'},
          {value: '出行', type: 'trip', url: ''}
        ],
        listData: {
          promo: [
            {src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/99f1f43d9df484572bd81138f45dfc0f.jpg?w=468&h=600', url: 'https://item.mi.com/10578.html'},
            {src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e0b8cffcbdaa88e2a314f0a372ca75dd.jpg?w=468&h=600', url: 'https://item.mi.com/8621.html'}
          ],
          hots: [
            {value: '米家飞行员太阳镜 Pro', desc: '尼龙偏光，轻巧佩戴', sub: false, newPrice: '199', oldPrice: '', src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cccac948e1b8ffb47f1fecde67692e60.jpg', url: 'https://item.mi.com/9732.html'},
            {value: '小米巨能写中性笔10支装', desc: '一支顶4支，超长顺滑书写', sub: false, newPrice: '9.9', oldPrice: '', src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/57433a4b991b2a2ddc889f2d8d434655.jpg', url: 'https://item.mi.com/9836.html'},
            {value: '小米旅行箱 20英寸 布朗熊限量版', desc: '“国际巨星” LINE FRIENDS布朗熊', sub: false, newPrice: '399', oldPrice: '', src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c149537ebb0c2cdb977ddd93200074f4.jpg', url: 'https://item.mi.com/10007.html'},
            {value: '米家迷你保温杯', desc: '可以随身携带的温度', sub: false, newPrice: '49', oldPrice: '', src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/03d94ee6059481a6adcb6c4c5c572fb4.jpg', url: 'https://item.mi.com/10480.html'},
            {value: '米家驱蚊器基础版 3个装', desc: '3个装 长效驱蚊', sub: false, newPrice: '99', oldPrice: '129', src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/41e6890f9d6b7fdb4275c986dc3644e8.jpg', url: 'https://item.mi.com/9723.html'},
            {value: '3卷装抽绳式垃圾袋', desc: '让清洁更简单', sub: false, newPrice: '14.9', oldPrice: '', src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/38748fefeef78183ac01356a23dbc5c5.jpg', url: 'https://item.mi.com/9938.html'},
            {value: '贝医生巴氏牙刷 四色装', desc: '进口刷毛，好品质', sub: false, newPrice: '39.9', oldPrice: '', src: 'https://i8.mifile.cn/v1/a1/413f5e2f-53e7-0879-119c-8b4466feea53.jpg', url: 'https://www.mi.com/toothbrush-set/'},
            {value: '8H 乳胶弹簧静音床垫 M3', desc: '', sub: true, newPrice: '1499', oldPrice: '', src: 'https://i8.mifile.cn/v1/a1/eaa7c8e5-2a8c-0d2c-6de7-a6db2068b192.jpg', url: 'https://item.mi.com/6512.html'}
          ],
          trip: [
            {value: '90分框体旅行箱', desc: '专利轻量合金中框，轻盈坚固 ', sub: true, newPrice: '599', oldPrice: '', src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d26d3a80dd1ab0c6a657f13cb234dade.jpg', url: 'https://item.mi.com/10000147.html'},
            {value: '小米商旅多功能双肩包 2', desc: '商务旅行多场景，切换无压力', sub: false, newPrice: '199', oldPrice: '', src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/47ecc65d37065fde1e71b1b34326e741.jpg', url: 'https://item.mi.com/10181.html'},
            {value: '米家飞行员太阳镜 Pro', desc: '尼龙偏光，轻巧佩戴', sub: false, newPrice: '199', oldPrice: '', src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cccac948e1b8ffb47f1fecde67692e60.jpg', url: 'https://item.mi.com/9732.html'},
            {value: '小米小背包', desc: '小身材大容量， 更精彩！', sub: false, newPrice: '29', oldPrice: '', src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f5f4677730c6be3ecab615795fb0e9c7.jpg', url: 'https://item.mi.com/8621.html'},
            {value: 'Free Tie 真皮板鞋 米家定制', desc: '做一双简单的板鞋', sub: false, newPrice: '129', oldPrice: '199', src: 'https://i8.mifile.cn/v1/a1/e2775107-da04-6611-3580-82227ffec369.png', url: 'https://www.mi.com/plateshoes/'},
            {value: '自动折叠伞', desc: '防泼水伞布，轻盈拒水', sub: false, newPrice: '94', oldPrice: '99', src: 'https://i8.mifile.cn/v1/a1/43549b8e-c8cd-0464-17ba-6be26f395ef0.jpg', url: 'https://www.mi.com/umbrella/'},
            {value: '最生活毛巾•青春系列', desc: '3秒吸水，杀菌无刺激', sub: false, newPrice: '19.9', oldPrice: '', src: 'https://i8.mifile.cn/b2c-mimall-media/1f4c867b5ccb878b43054f640636c872.jpg', url: 'https://item.mi.com/4917.html'},
          ]
        }
      }
    }
  },
  components: {
    'Poster': Poster,
    'GoodsBox': GoodsBox
  }
}
</script>

<style lang="less">
  .goods-sale {
      position: relative;
      width: 1226px;
      height: auto;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
  }
</style>