/**
 * Created by Administrator on 2017/10/17 0017.
 */
// 百度地图API功能
var searchMap= function (tab) {
    var loca='';
    var address='';
    var tel='';
    var intro='';
    $.ajax({
        type:'POST',
        url:'../sql/selectmap.php',
        data:{tab:tab},
        success: function (data) {
            //console.log(data);
            loca=data[0].loca;
            address=data[0].address;
            tel=data[0].tel;
            intro=data[0].intro;
            //console.log(loca,address,tel,intro);
            var arr=loca.split(',');
            //console.log(arr);
            var map = new BMap.Map('allmap');
            var poi = new BMap.Point(arr[0],arr[1]);
            map.centerAndZoom(poi, 16);
            map.enableScrollWheelZoom();

            var content = '<div style="margin:0;line-height:20px;padding:2px;">' +
                '<img src="../images/m-logo.jpg" alt="" style="float:right;zoom:1;overflow:hidden;width:100px;height:100px;margin-left:3px;"/>' +
                '地址：'+address+'<br/>电话：'+tel+'<br/>简介：'+intro +
                '</div>';

//创建检索信息窗口对象
            var searchInfoWindow = null;
            searchInfoWindow = new BMapLib.SearchInfoWindow(map, content, {
                title  : "无线星空",      //标题
                width  : 290,             //宽度
                height : 105,              //高度
                panel  : "panel",         //检索结果面板
                enableAutoPan : true,     //自动平移
                searchTypes   :[
                    BMAPLIB_TAB_SEARCH,   //周边检索
                    BMAPLIB_TAB_TO_HERE,  //到这里去
                    BMAPLIB_TAB_FROM_HERE //从这里出发
                ]
            });
            var marker = new BMap.Marker(poi); //创建marker对象
            marker.enableDragging(); //marker可拖拽
            searchInfoWindow.open(marker);
            marker.addEventListener("click", function(e){
                searchInfoWindow.open(marker);
            });
            map.addOverlay(marker); //在地图中添加marker


        }
    });
};
searchMap('北大街校区');

//动态加载标签
$.ajax({
    type:'GET',
    url:'../sql/selectmaptab.php',
    success: function (data) {
        //console.log(data);
        var html='';
        for(var i=0;i<data.length;i++){
        html+=`<a><li>${data[i].tab}</li></a>`;
        }
        //console.log(html);
        $('.leftnav,.mapnav').html(html);
    }
});
//动态加载校区信息
var getMapDetail= function (city,sid) {
    $.ajax({
        type:'POST',
        url:'../sql/selectmapdetail.php',
        data:{city:city},
        success: function (data) {
            //console.log(data);
            var html='';
            for(var i=0;i<data.length;i++){
                html+=`
                <li><b>${data[i].tab}：</b>${data[i].address}  电话：${data[i].tel}</li>
                `;
            }
            $('#'+sid).html(html);
        }
    });
};
getMapDetail('西安','c-xian');
getMapDetail('咸阳','c-xianyang');
getMapDetail('渭南','c-weinan');
getMapDetail('宝鸡','c-baoji');
getMapDetail('汉中','c-hanzhong');

//标签点击事件
$('.leftnav,.mapnav').on('click','a>li', function (e) {
    $(e.target).addClass('active');
    $(e.target).parent().siblings().children().removeClass('active');
    searchMap($(e.target).html());
});

