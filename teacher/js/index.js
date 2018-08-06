var colorArr = [
    "#5EBC9C", "#90BEAF", "#ACE8B8", "#CEE8D4", "#F7E88D", "#FB7C33", "#F99456", "#EC4D55", "#EF4873", "#F68683", "#F8A7A3", "#FCEFE8", "#D8DBD8", "#A39C06", "#6BAF5F", "#64B1C0", "#5F8886", "#8F259F", "#FF476E", "#F5450E", "#D56117", "#EFA521", "#ECC81E", "#C56867", "#58748D", "#D3993D", "#9DB5B7", "#E1CD69", "#1C7F27", "#F2AE01", "#017B9D", "#615E61", "#BC1246", "#DD9330", "#90d4ff", "#54aae0",
    "#92b3ff", "#9bddff", "#ae9bff", "#9bbaff", "#9bf0ff", "#9bffe6", "#9bffba", "#b0ff9b", "#d6ff9b", "#f7ff9b", "#ffeb9b", "#ffd89b", "#ffc59b", "#ffae9b", "#ff9b9b", "#ff9bba", "#ffb5db", "#ffb5f2", "#f9b5ff", "#77e8d1", "#92e877", "#f4b725", "#7ca7ff"
]
var ranColor = function () {
    var num = parseInt(Math.random() * (colorArr.length), 10)
    return colorArr[num]
}
console.log(ranColor())

$.ajax({
    type: 'POST',
    url: 'https://mokey.club/wxxkTeacher/indexTeacher',
    success: function (res) {
        console.log(res.data.gao)
        var gaoArr = res.data.gao;
        var gaoHtml = "";
        for (var i = 0; i < 8; i++) {
            gaoHtml += `
            <div class="col-xs-6 col-sm-3">
            <div class="team__item">
                <div class="team-item__img" style="background-color:${ranColor()}">
                    <img src="images/cl.png" class="img-responsive" alt="${gaoArr[i].tname+gaoArr[i].grade+gaoArr[i].subject}">
                </div>
                <h4>${gaoArr[i].tname}
                    <span>${gaoArr[i].grade}${gaoArr[i].subject}</span>
                </h4>
                <div class="row">
                    <div class="col-md-12">
                        <div class="team-item__contact">
                            <ul>
                                <li>
                                    <img src="images/xin.png">37526</li>
                                <li>
                                    <img src="images/eye.png">7101</li>
                                <li>
                                    <img src="images/star.png">5.5</li>
                            </ul>
                            <div class="clearfix"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            `;
        }
        $('#tech_gao').html(gaoHtml)
    }
})