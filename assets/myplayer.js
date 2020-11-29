    var videoObject = {
        //playerID:'ckplayer01',//播放器ID，第一个字符不能是数字，用来在使用多个播放器时监听到的函数将在所有参数最后添加一个参数用来获取播放器的内容
        container: '#video', //容器的ID或className
        variable: 'player', //播放函数名称
        loaded: 'loadedHandler', //当播放器加载后执行的函数
        //autoplay: true, //是否自动播放
        //duration: 500, //设置视频总时间
        //cktrack: 'material/srt.srt', //字幕文件
        poster: './material/poster.jpg', //封面图片
        // preview: { //预览图片
        //     file: ['material/mydream_en1800_1010_01.png', 'material/mydream_en1800_1010_02.png'],
        //     scale: 2
        // },
        config: '', //指定配置函数
        debug: true, //是否开启调试模式
        //flashplayer: true, //强制使用flashplayer
        drag: 'start', //拖动的属性
        seek: 0, //默认跳转的时间
        //playbackrate:1,//默认速度的编号，只对html5有效,设置成-1则不显示倍速
        //advertisements:'website:ad.json',
        //front:'frontFun',//上一集的操作函数
        //next:'nextFun',//下一集的操作函
        promptSpot: [ //提示点
            {
                words: '提示点文字01',
                time: 30
            },
            {
                words: '提示点文字02',
                time: 150
            }
        ],
        //mobileCkControls:true,//是否在移动端（包括ios）环境中显示控制栏
        //live:true,//是否是直播视频，true=直播，false=点播
        video: [
            // ['http://img.ksbbs.com/asset/Mon_1703/05cacb4e02f9d9e.mp4', 'video/mp4', '中文标清', 0],
            // ['http://img.ksbbs.com/asset/Mon_1703/d0897b4e9ddd9a5.mp4', 'video/mp4', '中文高清', 0],
            // ['http://img.ksbbs.com/asset/Mon_1703/eb048d7839442d0.mp4', 'video/mp4', '英文高清', 10],
            // ['http://img.ksbbs.com/asset/Mon_1703/d30e02a5626c066.mp4', 'video/mp4', '英文超清', 0]
        ]
    };
   
    // $.getJSON('../material/test.json',function(data){
       
    //     // var data=['http://img.ksbbs.com/asset/Mon_1703/05cacb4e02f9d9e.mp4', 'video/mp4']
    //     var video=['video/mp4'];
    //     video.unshift(data.video)
    //     videoObject.video.push(video)
    //     var player = new ckplayer(videoObject);
    // })
    
    var words=location.href.split("?")[1];
    var id=words.split("=")[1]
    $.ajax({
     type : "get",
     url : "http://10.21.30.218:8080/api/media/"+id,
     //contentType : "application/json",
     success : function(res) {
        console.log(res)
        var video=['video/mp4'];
        video.unshift('http://10.21.30.218:3068/'+res.data.mediaUrl)
        videoObject.video.push(video)
        console.log(video)
        var player = new ckplayer(videoObject);
     }
  })