/**
 * Created by Administrator on 2017/11/28 0028.
 */
$.ajax({
   type:'GET',
    url:'data/getlist_re.php',
    success: function (data) {
        var html="";
        for(var i=0;i<data.length;i++){
            html+=`
            <tr>
            <td>${i+1}</td>
            <td>${data[i].uname}</td>
            <td>${data[i].utel}</td>
            <td>${data[i].area}</td>
            <td>${data[i].identify}</td>
            <td>${data[i].school}</td>
            <td>${data[i].subject}</td>
            <td>${data[i].team_id}</td>
        </tr>
            `;
        }
        $('#list_area').html(html);
    }
});