/**
 * Created by Administrator on 2017/10/24 0024.
 */
$.ajax({
   type:'GET',
    url:'data/select.php',
    success: function (data) {
        console.log(data);
        var html="";
        for(var i=0;i<data.length;i++){
            html+=`
            <tr>
                <td>${data[i].uname}</td>
                <td>${data[i].utel}</td>
                <td>${data[i].loca}</td>
                <td>${data[i].sub}</td>
            </tr>
            `;
        }
        $('#apoint_table').html(html);
    }
});