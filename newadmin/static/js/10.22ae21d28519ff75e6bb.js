webpackJsonp([10],{"8dP3":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=a("aA9S"),l=a.n(o),s=a("+mJe"),r=a("4Auo"),n=(a("i1tf"),{cname:"",total:0,grade:"",project:"",teacher:"",cPrice:0,image_uri:"",tag:"",intro:""}),i={components:{MDinput:s.a,tagsInput:r.a},data:function(){return{dialogImageUrl:"",postForm:l()({},n),dialogVisible:!1,fileList:[{name:"sdf",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"},{name:"sdf",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"}],rules:{}}},methods:{handleRemove:function(t,e){console.log(t,e)},handlePictureCardPreview:function(t){this.dialogImageUrl=t.url,this.dialogVisible=!0},handleAvatarSuccess:function(t,e){this.imageUrl=URL.createObjectURL(e.raw)},beforeAvatarUpload:function(t){console.log(t.type);var e="image/jpeg"===t.type,a="image/svg+xml"===t.type,o=t.size/1024/1024<2;return console.log((e||a)&&o),e||a||this.$message.error("上传头像图片只能是 JPG或SVG 格式!"),o||this.$message.error("上传头像图片大小不能超过 2MB!"),(e||a)&&o},handleRemoveList:function(t,e){console.log(t,e)},handlePreviewList:function(t){console.log(t)},handleExceedList:function(t,e){this.$message.warning("当前限制选择 3 个文件，本次选择了 "+t.length+" 个文件，共选择了 "+(t.length+e.length)+" 个文件")},beforeRemoveList:function(t,e){return this.$confirm("确定移除 $ { file.name }？")}},computed:{contentShortLength:function(){return this.postForm.cname.length}}},p={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("el-form",{ref:"postForm",staticClass:"form-container",attrs:{model:t.postForm,rules:t.rules,"label-width":"80px"}},[a("el-row",[a("el-col",{attrs:{span:21}},[a("el-form-item",{staticStyle:{"margin-bottom":"40px"}},[a("MDinput",{attrs:{name:"name",required:"",maxlength:100},model:{value:t.postForm.cname,callback:function(e){t.$set(t.postForm,"cname",e)},expression:"postForm.cname"}},[t._v("\n              视频标题\n            ")]),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:t.postForm.cname.length>=26,expression:"postForm.cname.length>=26"}],staticClass:"title-prompt"},[t._v("app可能会显示不全")]),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:t.contentShortLength,expression:"contentShortLength"}],staticClass:"word-counter"},[t._v(t._s(t.contentShortLength)+"字")])],1)],1)],1),t._v(" "),a("el-row",[a("el-col",{attrs:{span:8}},[a("el-form-item",{staticStyle:{"margin-bottom":"40px"},attrs:{label:"课程价格"}},[a("el-input-number",{attrs:{"controls-position":"right",min:0},model:{value:t.postForm.cPrice,callback:function(e){t.$set(t.postForm,"cPrice",e)},expression:"postForm.cPrice"}})],1)],1),t._v(" "),a("el-col",{attrs:{span:8}},[a("el-form-item",{staticStyle:{"margin-bottom":"40px"},attrs:{label:"年级"}},[a("el-select",{attrs:{placeholder:"请选择年级"},model:{value:t.postForm.grade,callback:function(e){t.$set(t.postForm,"grade",e)},expression:"postForm.grade"}},[a("el-option",{attrs:{label:"高三",value:"高三"}}),t._v(" "),a("el-option",{attrs:{label:"高二",value:"高二"}}),t._v(" "),a("el-option",{attrs:{label:"高一",value:"高一"}}),t._v(" "),a("el-option",{attrs:{label:"初三",value:"初三"}}),t._v(" "),a("el-option",{attrs:{label:"初二",value:"初二"}}),t._v(" "),a("el-option",{attrs:{label:"初一",value:"初一"}})],1)],1)],1),t._v(" "),a("el-col",{attrs:{span:8}},[a("el-form-item",{staticStyle:{"margin-bottom":"40px"},attrs:{label:"科目"}},[a("el-select",{attrs:{placeholder:"请选择科目"},model:{value:t.postForm.project,callback:function(e){t.$set(t.postForm,"project",e)},expression:"postForm.project"}},[a("el-option",{attrs:{label:"数学",value:"数学"}}),t._v(" "),a("el-option",{attrs:{label:"语文",value:"语文"}}),t._v(" "),a("el-option",{attrs:{label:"英语",value:"英语"}}),t._v(" "),a("el-option",{attrs:{label:"物理",value:"物理"}}),t._v(" "),a("el-option",{attrs:{label:"化学",value:"化学"}}),t._v(" "),a("el-option",{attrs:{label:"生物",value:"生物"}}),t._v(" "),a("el-option",{attrs:{label:"政治",value:"政治"}}),t._v(" "),a("el-option",{attrs:{label:"历史",value:"历史"}}),t._v(" "),a("el-option",{attrs:{label:"地理",value:"地理"}}),t._v(" "),a("el-option",{attrs:{label:"理综",value:"理综"}}),t._v(" "),a("el-option",{attrs:{label:"文综",value:"文综"}})],1)],1)],1),t._v(" "),a("el-col",{attrs:{span:20}},[a("el-form-item",{staticStyle:{"margin-bottom":"40px"},attrs:{label:"教师"}},[a("tags-input",{attrs:{"element-id":"tags",placeholder:"输入后按回车键添加","existing-tags":{1:"邓亚磊",2:"李强",3:"王明"},typeahead:!0},model:{value:t.postForm.teacher,callback:function(e){t.$set(t.postForm,"teacher",e)},expression:"postForm.teacher"}})],1)],1),t._v(" "),a("el-col",{attrs:{span:10}},[a("el-form-item",{staticStyle:{"margin-bottom":"40px"},attrs:{label:"课程封面"}},[a("el-upload",{attrs:{action:"https://jsonplaceholder.typicode.com/posts/",multiple:!1,limit:1,"before-upload":t.beforeAvatarUpload,"list-type":"picture-card","on-preview":t.handlePictureCardPreview,"on-remove":t.handleRemove}},[a("i",{staticClass:"el-icon-plus"})]),t._v(" "),a("el-dialog",{attrs:{visible:t.dialogVisible},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("img",{attrs:{width:"100%",src:t.dialogImageUrl,alt:""}})])],1)],1),t._v(" "),a("el-col",{attrs:{span:4}},[a("p",{staticStyle:{color:"#aaa"}},[t._v("jpg视频封面大小一般为374X260px")]),t._v(" "),a("p",{staticStyle:{color:"#aaa"}},[t._v("svg为每日一题的图标")])]),t._v(" "),a("el-col",{attrs:{span:20}},[a("el-form-item",{staticStyle:{"margin-bottom":"60px"},attrs:{label:"课程标签"}},[a("el-input",{attrs:{placeholder:"eg.每日一题（1）"},model:{value:t.postForm.tag,callback:function(e){t.$set(t.postForm,"tag",e)},expression:"postForm.tag"}})],1)],1),t._v(" "),a("el-col",{attrs:{span:20}},[a("el-form-item",{staticStyle:{"margin-bottom":"60px"},attrs:{label:"课程简介"}},[a("el-input",{attrs:{type:"textarea",placeholder:"每日一题系列课程中，简介必须包含（每日一题）"},model:{value:t.postForm.intro,callback:function(e){t.$set(t.postForm,"intro",e)},expression:"postForm.intro"}})],1)],1),t._v(" "),a("el-col",{attrs:{span:10}},[a("el-form-item",{staticStyle:{"margin-bottom":"60px"},attrs:{label:"视频文件"}},[a("el-upload",{staticClass:"upload-demo",attrs:{action:"https://jsonplaceholder.typicode.com/posts/","on-preview":t.handlePreviewList,"on-remove":t.handleRemoveList,"before-remove":t.beforeRemoveList,multiple:"","on-exceed":t.handleExceedList,"file-list":t.fileList}},[a("el-button",{attrs:{size:"small",type:"primary"}},[t._v("点击上传")]),t._v(" "),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[t._v("上传格式为mp4的视频文件")])],1)],1)],1),t._v(" "),a("el-col",{attrs:{span:14}},[a("el-form-item",{staticStyle:{"margin-bottom":"60px"},attrs:{label:"课程简介"}},[a("h1",[t._v("添加视频input")])])],1)],1)],1)],1)},staticRenderFns:[]};var c=a("/Xao")(i,p,!1,function(t){a("tufq")},"data-v-550aed7c",null);e.default=c.exports},XVos:function(t,e,a){(t.exports=a("BkJT")(!1)).push([t.i,"\n.title-prompt[data-v-550aed7c]{\n  position: absolute;\n  right: 0px;\n  font-size: 12px;\n  top:10px;\n  color:#ff4949;\n}\n.word-counter[data-v-550aed7c] {\n    width: 40px;\n    position: absolute;\n    right: -10px;\n    top: 0px;\n}\n\n",""])},tufq:function(t,e,a){var o=a("XVos");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);a("8bSs")("f092aa7e",o,!0)}});