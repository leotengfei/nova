webpackJsonp([2],{"0olx":function(t,e,i){(t.exports=i("BkJT")(!1)).push([t.i,"\n.upload-container .editor-slide-upload[data-v-0bde6b44] {\n  margin-bottom: 20px;\n}\n",""])},LYNy:function(t,e,i){var o=i("Eg/L"),n=i("onEp");i("xUTu")("keys",function(){return function(t){return n(o(t))}})},ZLEe:function(t,e,i){t.exports={default:i("gUiJ"),__esModule:!0}},cZi4:function(t,e,i){(t.exports=i("BkJT")(!1)).push([t.i,"\n.tinymce-container[data-v-2aef0440] {\n  position: relative;\n}\n.tinymce-container[data-v-2aef0440] .mce-fullscreen {\n  z-index: 10000;\n}\n.tinymce-textarea[data-v-2aef0440] {\n  visibility: hidden;\n  z-index: -1;\n}\n.editor-custom-btn-container[data-v-2aef0440] {\n  position: absolute;\n  right: 4px;\n  top: 4px;\n  /*z-index: 2005;*/\n}\n.editor-upload-btn[data-v-2aef0440] {\n  display: inline-block;\n}\n",""])},gUiJ:function(t,e,i){i("LYNy"),t.exports=i("yDNk").Object.keys},"ls/L":function(t,e,i){(t.exports=i("BkJT")(!1)).push([t.i,'\n.title-prompt[data-v-1582080e] {\n  position: absolute;\n  right: 0px;\n  font-size: 12px;\n  top: 10px;\n  color: #ff4949;\n}\n.createPost-container[data-v-1582080e] {\n  position: relative;\n}\n.createPost-container .createPost-main-container[data-v-1582080e] {\n    padding: 40px 45px 20px 50px;\n}\n.createPost-container .createPost-main-container .postInfo-container[data-v-1582080e] {\n      position: relative;\n      margin-bottom: 10px;\n}\n.createPost-container .createPost-main-container .postInfo-container[data-v-1582080e]:after {\n        content: "";\n        display: table;\n        clear: both;\n}\n.createPost-container .createPost-main-container .postInfo-container .postInfo-container-item[data-v-1582080e] {\n        float: left;\n}\n.createPost-container .createPost-main-container .editor-container[data-v-1582080e] {\n      min-height: 500px;\n      margin: 0 0 30px;\n}\n.createPost-container .createPost-main-container .editor-container .editor-upload-btn-container[data-v-1582080e] {\n        text-align: right;\n        margin-right: 10px;\n}\n.createPost-container .createPost-main-container .editor-container .editor-upload-btn-container .editor-upload-btn[data-v-1582080e] {\n          display: inline-block;\n}\n.createPost-container .word-counter[data-v-1582080e] {\n    width: 40px;\n    position: absolute;\n    right: -10px;\n    top: 0px;\n}\n',""])},ni30:function(t,e,i){var o=i("cZi4");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);i("8bSs")("83becf56",o,!0)},o1LK:function(t,e,i){var o=i("0olx");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);i("8bSs")("5188dfa4",o,!0)},xUTu:function(t,e,i){var o=i("34sJ"),n=i("yDNk"),s=i("LyA7");t.exports=function(t,e){var i=(n.Object||{})[t]||Object[t],a={};a[t]=e(i),o(o.S+o.F*s(function(){i(1)}),"Object",a)}},yKOu:function(t,e,i){var o=i("ls/L");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);i("8bSs")("08c89baf",o,!0)},yaIr:function(t,e,i){"use strict";var o=i("rVsN"),n=i.n(o),s=i("ZLEe"),a=i.n(s),r=i("aA9S"),l=i.n(r),c=i("vLgD");function d(){return Object(c.a)({url:"/adminNews/fileToken",method:"get"})}function u(t){return Object(c.a)({url:"/adminNews/delFile",method:"post",data:{file:t}})}var p={name:"editorSlideUpload",props:{color:{type:String,default:"#1890ff"}},data:function(){return{dialogVisible:!1,listObj:{},fileList:[],postData:{token:""}}},methods:{checkAllSuccess:function(){var t=this;return a()(this.listObj).every(function(e){return t.listObj[e].hasSuccess})},handleSubmit:function(){var t=this;console.log("handleSubmit");var e=a()(this.listObj).map(function(e){return t.listObj[e]});this.checkAllSuccess()?(console.log(e),console.log(this.fileList),this.$emit("successCBK",e),this.listObj={},this.fileList=[],this.dialogVisible=!1):this.$message("请等待所有图片上传成功 或 出现了网络问题，请刷新页面重新上传！")},handleSuccess:function(t,e){console.log(t),console.log("handleSuccess"),console.log(e);for(var i=e.uid,o=a()(this.listObj),n=0,s=o.length;n<s;n++)if(this.listObj[o[n]].uid===i)return this.listObj[o[n]].url="http://p9mwnc6fh.bkt.clouddn.com/"+t.key,void(this.listObj[o[n]].hasSuccess=!0)},handleRemove:function(t){console.log("handleRemove"),console.log(t.response.key),u(t.response.key).then(function(t){console.log(t)});for(var e=t.uid,i=a()(this.listObj),o=0,n=i.length;o<n;o++)if(this.listObj[i[o]].uid===e)return void delete this.listObj[i[o]]},beforeUpload:function(t){var e=this;console.log("beforeUpload"),console.log(t);var i=this,o=window.URL||window.webkitURL,s=t.uid;return this.listObj[s]={},new n.a(function(n,a){var r=new Image;r.src=o.createObjectURL(t),r.onload=function(){i.listObj[s]={hasSuccess:!1,uid:t.uid,width:this.width,height:this.height}},d().then(function(t){e.postData.token=t.msg,n(!0)})})}}},h={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"upload-container"},[i("el-button",{style:{background:t.color,borderColor:t.color},attrs:{icon:"el-icon-upload",size:"mini",type:"primary"},on:{click:function(e){t.dialogVisible=!0}}},[t._v("上传图片\n  ")]),t._v(" "),i("el-dialog",{attrs:{"append-to-body":"",visible:t.dialogVisible},on:{"update:visible":function(e){t.dialogVisible=e}}},[i("el-upload",{staticClass:"editor-slide-upload",attrs:{action:"http://up-z1.qiniup.com",multiple:!0,"file-list":t.fileList,"show-file-list":!0,"list-type":"picture-card","on-remove":t.handleRemove,"on-success":t.handleSuccess,"before-upload":t.beforeUpload,data:t.postData}},[i("el-button",{attrs:{size:"small",type:"primary"}},[t._v("点击上传")])],1),t._v(" "),i("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")]),t._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:t.handleSubmit}},[t._v("确 定")])],1)],1)},staticRenderFns:[]};var m=["advlist anchor autolink autoresize autosave code codesample colorpicker colorpicker contextmenu directionality emoticons fullpage fullscreen hr image imagetools importcss insertdatetime link lists media nonbreaking noneditable pagebreak paste preview print save searchreplace spellchecker tabfocus table template textcolor textpattern visualblocks visualchars wordcount"],g=["bold italic underline strikethrough forecolor backcolor | alignleft aligncenter alignright outdent indent | blockquote undo redo removeformat subscript superscript code codesample","hr bullist numlist link | image charmap\t preview anchor pagebreak fullscreen insertdatetime media table emoticons"],f={name:"tinymce",components:{editorImage:i("/Xao")(p,h,!1,function(t){i("o1LK")},"data-v-0bde6b44",null).exports},props:{id:{type:String},value:{type:String,default:""},toolbar:{type:Array,required:!1,default:function(){return[]}},menubar:{default:"file edit insert view format table"},height:{type:Number,required:!1,default:350}},data:function(){return{hasChange:!1,hasInit:!1,tinymceId:this.id||"vue-tinymce-"+ +new Date}},watch:{value:function(t){var e=this;!this.hasChange&&this.hasInit&&this.$nextTick(function(){return window.tinymce.get(e.tinymceId).setContent(t)})}},mounted:function(){this.initTinymce()},activated:function(){this.initTinymce()},deactivated:function(){this.destroyTinymce()},methods:{initTinymce:function(){var t=this,e=this;window.tinymce.init({selector:"#"+this.tinymceId,language:"zh_CN",height:this.height,body_class:"panel-body ",object_resizing:!1,toolbar:this.toolbar.length>0?this.toolbar:g,menubar:this.menubar,plugins:m,autoresize_bottom_margin:50,autoresize_max_height:650,autoresize_min_height:350,autoresize_on_init:!0,autoresize_overflow_padding:50,end_container_on_empty_block:!0,powerpaste_word_import:"clean",code_dialog_height:450,code_dialog_width:1e3,advlist_bullet_styles:"square",advlist_number_styles:"default",imagetools_cors_hosts:["www.tinymce.com","codepen.io"],default_link_target:"_blank",link_title:!1,init_instance_callback:function(i){e.value&&i.setContent(e.value),e.hasInit=!0,i.on("NodeChange Change KeyUp SetContent",function(){t.hasChange=!0,t.$emit("input",i.getContent())})}})},destroyTinymce:function(){window.tinymce.get(this.tinymceId)&&window.tinymce.get(this.tinymceId).destroy()},setContent:function(t){window.tinymce.get(this.tinymceId).setContent(t)},getContent:function(){window.tinymce.get(this.tinymceId).getContent()},imageSuccessCBK:function(t){var e=this;t.forEach(function(t){window.tinymce.get(e.tinymceId).insertContent('<img class="wscnph" src="'+t.url+'" >')})}},destroyed:function(){this.destroyTinymce()}},v={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tinymce-container editor-container"},[e("textarea",{staticClass:"tinymce-textarea",attrs:{id:this.tinymceId}}),this._v(" "),e("div",{staticClass:"editor-custom-btn-container"},[e("editorImage",{staticClass:"editor-upload-btn",attrs:{color:"#1890ff"},on:{successCBK:this.imageSuccessCBK}})],1)])},staticRenderFns:[]};var b=i("/Xao")(f,v,!1,function(t){i("ni30")},"data-v-2aef0440",null).exports,y=i("+mJe"),w={name:"Sticky",props:{stickyTop:{type:Number,default:0},zIndex:{type:Number,default:1},className:{type:String}},data:function(){return{active:!1,position:"",currentTop:"",width:void 0,height:void 0,child:null,stickyHeight:0}},mounted:function(){this.height=this.$el.getBoundingClientRect().height,window.addEventListener("scroll",this.handleScroll)},activated:function(){this.handleScroll()},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)},methods:{sticky:function(){this.active||(this.position="fixed",this.active=!0,this.width=this.width+"px")},reset:function(){this.active&&(this.position="",this.width="auto",this.active=!1)},handleScroll:function(){this.width=this.$el.getBoundingClientRect().width,this.$el.getBoundingClientRect().top<=this.stickyTop?this.sticky():this.reset()}}},x={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{style:{height:t.height+"px",zIndex:t.zIndex}},[i("div",{class:t.className,style:{top:t.stickyTop+"px",zIndex:t.zIndex,position:t.position,width:t.width,height:t.height+"px"}},[t._t("default",[i("div",[t._v("sticky")])])],2)])},staticRenderFns:[]},_=i("/Xao")(w,x,!1,null,null,null).exports,F=i("gLmA");i("oOXz");i("hRKE");function k(t){var e=t.split("<body>");t="";for(var i=1;i<e.length;i++)t+=e[i];e=t.split("</body>"),t="";for(var o=0;o<e.length-1;o++)t+=e[o];return t}var S={status:0,title:"",content:"",image:"",time:"",weight:1,name:[],source:"原创",classify:""},C={name:"articleDetail",components:{Tinymce:b,MDinput:y.a,Sticky:_,tagsInput:F.a},props:{isEdit:{type:Boolean,default:!1}},data:function(){return{view:{path:this.$route.path,name:this.$route.name},pageDataLoading:!1,isClickedUpload:!1,postForm:l()({},S),options:[{value:"教育",label:"教育"},{value:"政策",label:"政策"},{value:"娱乐",label:"娱乐"}],dialogImageUrl:"",listObj:{},dialogVisible:!1,fetchSuccess:!0,loading:!1,rules:{},selectedTags:[],postData:{token:""}}},computed:{contentShortLength:function(){return this.postForm.title.length}},created:function(){this.isEdit?(console.log(this.$route.params.id),this.pageDataLoading=!0,this.fetchData()):this.postForm=l()({},S)},methods:{fetchData:function(){var t=this;console.log("请求数据");var e,i=this.$route.params.id;(e=i,Object(c.a)({url:"/adminNews/editNews",method:"post",data:{nid:e}})).then(function(e){console.log(e),e.content="<!DOCTYPE html><html><head></head><body>"+e.content+"</body></html>",t.postForm=e,t.pageDataLoading=!1,console.log(t.postForm)})},handleRemove:function(t,e){var i=this;console.log(t,e),u(t.response.key).then(function(t){console.log(t),200===t.code?i.$notify({title:"成功",message:"删除图片成功",type:"success",duration:2e3}):i.$notify({title:"失败",message:"删除图片失败",type:"error",duration:2e3})});for(var o=t.uid,n=a()(this.listObj),s=0,r=n.length;s<r;s++)if(this.listObj[n[s]].uid===o)return void delete this.listObj[n[s]]},handlePictureCardPreview:function(t){this.dialogImageUrl=t.url,this.dialogVisible=!0},handleAvatarSuccess:function(t,e){"success"===e.status&&(this.postForm.image="http://p9mwnc6fh.bkt.clouddn.com/"+t.key,this.isClickedUpload=!0,this.$notify({title:"成功",message:"上传图片成功",type:"success",duration:2e3}))},beforeAvatarUpload:function(t){var e=this,i=window.URL||window.webkitURL,o=t.uid,s="image/jpeg"===t.type,a=t.size/1024/1024<2;return s&&a?(this.listObj[o]={},new n.a(function(n,s){var a=new Image;a.src=i.createObjectURL(t),a.onload=function(){e.listObj[o]={hasSuccess:!1,uid:t.uid,width:this.width,height:this.height}},d().then(function(t){e.postData.token=t.msg,n(!0)})})):(this.postData.token="",this.$notify({title:"警告",message:"图片只能是jpg格式并且大小小于2M",type:"warning",duration:2e3}),!1)},submitForm:function(){var t=this;console.log(this.postForm);var e=this;this.postForm.status=2;var i,o,n,s,a,r,l,d,u,p=this.postForm.content;(console.log(p),p=k(p),console.log(p),this.loading=!0,this.isEdit)?function(t,e,i,o,n,s,a,r,l,d){return Object(c.a)({url:"/adminNews/editNewsData",method:"post",data:{nid:t,status:e,title:i,content:o,image:n,time:s,weight:a,name:r,source:l,classify:d}})}(this.$route.params.id,this.postForm.status,this.postForm.title,p,this.postForm.image,this.postForm.time,this.postForm.weight,this.postForm.name,this.postForm.source,this.postForm.classify).then(function(t){console.log(t),200===t.code&&(e.loading=!1,e.$notify({title:"成功",message:"发布文章成功,1s后跳转",type:"success",duration:2e3}),setTimeout(function(){e.$store.dispatch("delVisitedViews",e.view).then(function(t){var i=t.slice(-1)[0];i?e.$router.push(i.path):e.$router.push("/")})},1e3))},function(i){console.log(i),e.loading=!1,t.postForm.status=0,e.$notify({title:"失败",message:"发布文章失败，请检查信息是否填写完整！",type:"warning",duration:2e3})}):(i=this.postForm.status,o=this.postForm.title,n=p,s=this.postForm.image,a=this.postForm.time,r=this.postForm.weight,l=this.postForm.name,d=this.postForm.source,u=this.postForm.classify,Object(c.a)({url:"/adminNews/addOneNews",method:"post",data:{status:i,title:o,content:n,image:s,time:a,weight:r,name:l,source:d,classify:u}})).then(function(t){console.log(t),200===t.code&&(e.loading=!1,e.$notify({title:"成功",message:"发布文章成功",type:"success",duration:2e3}),setTimeout(function(){e.$store.dispatch("delVisitedViews",e.view).then(function(t){var i=t.slice(-1)[0];i?e.$router.push(i.path):e.$router.push("/")})},2e3))},function(i){console.log(i),e.loading=!1,t.postForm.status=0,e.$notify({title:"失败",message:"发布文章失败，请检查信息是否填写完整！",type:"warning",duration:2e3})})},draftForm:function(){var t=this;if(0!==this.postForm.title.length){var e=this;this.postForm.status=1;var i=this.postForm.content;i=k(i),console.log(i),this.loading=!0;var o="";console.log(this.isEdit),this.isEdit&&(o=this.$route.params.id),function(t,e,i,o,n,s,a,r,l,d){return Object(c.a)({url:"/adminNews/draft",method:"post",data:{nid:t,status:e,title:i,content:o,image:n,time:s,weight:a,name:r,source:l,classify:d}})}(o,this.postForm.status,this.postForm.title,i,this.postForm.image,this.postForm.time,this.postForm.weight,this.postForm.name,this.postForm.source,this.postForm.classify).then(function(t){console.log(t),200===t.code&&(e.loading=!1,e.$notify({title:"成功",message:"文章保存为草稿成功",type:"success",duration:2e3}))},function(i){console.log(i),e.loading=!1,t.postForm.status=0,e.$notify({title:"失败",message:"文章保存为草稿失败，请检查是否填写标题！",type:"warning",duration:2e3})})}else this.$message({message:"请填写必要的标题",type:"warning"})}}},$={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"createPost-container"},[i("el-form",{directives:[{name:"loading",rawName:"v-loading",value:t.pageDataLoading,expression:"pageDataLoading"}],ref:"postForm",staticClass:"form-container",attrs:{"label-position":"left",model:t.postForm,rules:t.rules,"element-loading-text":"拼命加载中"}},[i("sticky",{attrs:{className:"sub-navbar state"+t.postForm.status}},[t.fetchSuccess?[i("router-link",{directives:[{name:"show",rawName:"v-show",value:t.isEdit,expression:"isEdit"}],staticStyle:{"margin-right":"15px"},attrs:{to:"/xinwen/x_tianjia"}},[i("el-button",{attrs:{type:"info"}},[t._v("添加新闻")])],1),t._v(" "),i("el-button",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{"margin-left":"10px"},attrs:{type:"success"},on:{click:function(e){t.submitForm()}}},[t._v("发布\n        ")]),t._v(" "),i("el-button",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{type:"warning"},on:{click:t.draftForm}},[t._v("草稿")])]:[i("el-tag",[t._v("发送异常错误,刷新页面,或者联系程序员")])]],2),t._v(" "),i("div",{staticClass:"createPost-main-container"},[i("el-row",[i("el-col",{attrs:{span:21}},[i("el-form-item",{staticStyle:{"margin-bottom":"40px"},attrs:{prop:"title"}},[i("MDinput",{attrs:{name:"name",required:"",maxlength:100},model:{value:t.postForm.title,callback:function(e){t.$set(t.postForm,"title",e)},expression:"postForm.title"}},[t._v("\n              标题\n            ")]),t._v(" "),i("span",{directives:[{name:"show",rawName:"v-show",value:t.postForm.title.length>=26,expression:"postForm.title.length>=26"}],staticClass:"title-prompt"},[t._v("app可能会显示不全")]),t._v(" "),i("span",{directives:[{name:"show",rawName:"v-show",value:t.contentShortLength,expression:"contentShortLength"}],staticClass:"word-counter"},[t._v(t._s(t.contentShortLength)+"字")])],1),t._v(" "),i("div",{staticClass:"postInfo-container"},[i("el-row",[i("el-col",{attrs:{span:8}},[i("el-form-item",{staticClass:"postInfo-container-item",attrs:{"label-width":"80px",label:"发布时间:"}},[i("el-date-picker",{attrs:{type:"date",format:"yyyy-MM-dd",placeholder:"选择日期时间","value-format":"yyyy-MM-dd"},model:{value:t.postForm.time,callback:function(e){t.$set(t.postForm,"time",e)},expression:"postForm.time"}})],1)],1),t._v(" "),i("el-col",{attrs:{span:8}},[i("el-form-item",{attrs:{"label-width":"80px",label:"文章等级:"}},[i("el-rate",{staticStyle:{"line-height":"2.5"},attrs:{max:4,colors:["#99A9BF","#F7BA2A","#FF9900"],texts:["普通","优先","热点","置顶"],"show-text":""},model:{value:t.postForm.weight,callback:function(e){t.$set(t.postForm,"weight",e)},expression:"postForm.weight"}})],1)],1)],1),t._v(" "),i("el-row",[i("el-col",{attrs:{span:8}},[i("el-form-item",{staticClass:"postInfo-container-item",attrs:{"label-width":"80px",label:"文章来源:"}},[i("el-input",{attrs:{placeholder:"请输入文章来源",clearable:""},model:{value:t.postForm.source,callback:function(e){t.$set(t.postForm,"source",e)},expression:"postForm.source"}})],1)],1),t._v(" "),i("el-col",{attrs:{span:8}},[i("el-form-item",{attrs:{"label-width":"80px",label:"文章分类:"}},[i("el-select",{attrs:{clearable:"",placeholder:"请选择"},model:{value:t.postForm.classify,callback:function(e){t.$set(t.postForm,"classify",e)},expression:"postForm.classify"}},t._l(t.options,function(t){return i("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}))],1)],1)],1)],1)],1)],1),t._v(" "),i("el-form-item",{staticStyle:{"margin-bottom":"40px"},attrs:{"label-width":"80px",label:"标签:"}},[i("tags-input",{attrs:{"element-id":"tags",placeholder:"输入后按回车键添加","existing-tags":{"web-development":"Web Development",php:"PHP",javascript:"JavaScript"},typeahead:!0},model:{value:t.postForm.name,callback:function(e){t.$set(t.postForm,"name",e)},expression:"postForm.name"}})],1),t._v(" "),i("div",{staticStyle:{"margin-bottom":"20px"}},[i("el-row",[t.isEdit&&!t.isClickedUpload?i("el-col",{attrs:{span:8}},[i("div",[i("img",{staticStyle:{width:"150px",height:"150px"},attrs:{src:t.postForm.image,alt:""}})])]):t._e(),t._v(" "),i("el-col",{attrs:{span:8}},[i("el-upload",{attrs:{action:"http://up-z1.qiniup.com",multiple:!1,limit:1,"before-upload":t.beforeAvatarUpload,"list-type":"picture-card","on-preview":t.handlePictureCardPreview,"on-remove":t.handleRemove,"on-success":t.handleAvatarSuccess,data:t.postData}},[i("i",{staticClass:"el-icon-plus"})]),t._v(" "),i("el-dialog",{attrs:{visible:t.dialogVisible},on:{"update:visible":function(e){t.dialogVisible=e}}},[i("img",{attrs:{width:"100%",src:t.dialogImageUrl,alt:""}})])],1)],1)],1),t._v(" "),i("div",{staticClass:"editor-container"},[i("tinymce",{ref:"editor",attrs:{height:400},model:{value:t.postForm.content,callback:function(e){t.$set(t.postForm,"content",e)},expression:"postForm.content"}})],1)],1)],1)],1)},staticRenderFns:[]};var j=i("/Xao")(C,$,!1,function(t){i("yKOu")},"data-v-1582080e",null);e.a=j.exports},"ziE/":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o={name:"createForm",components:{ArticleDetail:i("yaIr").a}},n={render:function(){var t=this.$createElement;return(this._self._c||t)("article-detail",{attrs:{"is-edit":!1}})},staticRenderFns:[]},s=i("/Xao")(o,n,!1,null,null,null);e.default=s.exports}});