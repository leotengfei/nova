$.ajax({
    type:'GET',
    url:'assets/data/paiming.php',
    success:function(data){
        var total=data[0].total;
        var html='';
        var delnum=function(num){
            return (num/total)*100
        }
        for(var i=1;i<data.length;i++){
            html+=`
            <div class="am-u-sm-4">${data[i].vname}</div>
            <div class="am-u-sm-8">
                <div class="am-progress am-progress-striped">
                    <div class="am-progress-bar am-progress-bar-secondary" style="width: ${delnum(data[i].vnum)}%">${data[i].vnum}票</div>
                 </div>
            </div>
            `
        }
        $('#paiming_area').html(html);
    }
})