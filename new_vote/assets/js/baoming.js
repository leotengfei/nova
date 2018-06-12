
$('#btn-sub').click(function(){
    var bname=$('#bname').val();
    var regbname=/^[\u3e00-\u9fa5]{2,5}$/i;
    var valibName=regbname.test(bname);
    console.log(valibName);
    var btel=$('#btel').val();
    var regtel=/^[1][3,4,5,7,8,9][0-9]{9}$/i;
    var valibTel=regtel.test(btel);
    console.log(valibTel);
    var xiaoqu=$('#xiaoqu').val();
    //console.log(xiaoqu)
    var str='';
    if(!valibName){
        str=`<div class="am-alert am-alert-danger" data-am-alert>
        <button type="button" class="am-close">&times;</button>
        <p>用户名必须为汉字！</p>
      </div>`;
      $('#my-tips').html(str);
    }else if(!valibTel){
        str=`
        <div class="am-alert am-alert-danger" data-am-alert>
            <button type="button" class="am-close">&times;</button>
            <p>请检查电话号码格式</p>
        </div>
        `;
        $('#my-tips').html(str);
    }else if(bname&&btel&&xiaoqu){
        $.ajax({
            type:'POST',
            data:{
                bname:bname,
                btel:btel,
                xiaoqu:xiaoqu
            },
            url:'assets/data/insertBaoming.php',
            success:function(data){
                console.log(data.code);
                if(data.code=='1'){
                    str=`
                    <div class="am-alert am-alert-success" data-am-alert>
                        <button type="button" class="am-close">&times;</button>
                        <p>报名成功！工作人员随后会和您联系！</p>
                    </div>
                    `;
                    $('#bname').val('');
                    $('#btel').val('');
                    $('#my-tips').html(str);
                }else{
                    str=`
                    <div class="am-alert am-alert-danger" data-am-alert>
                        <button type="button" class="am-close">&times;</button>
                        <p>报名失败！</p>
                    </div>
                    `;
                    $('#my-tips').html(str);
                }
            }
        })
    }else{
        str=`
        <div class="am-alert am-alert-danger" data-am-alert>
            <button type="button" class="am-close">&times;</button>
            <p>请完整填写信息</p>
        </div>
        `;
        $('#my-tips').html(str);
    }
    
})