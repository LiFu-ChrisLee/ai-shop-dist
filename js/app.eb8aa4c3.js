(function(){"use strict";var e={1652:function(e,t,a){var l=a(6848),s=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},r=[],o={methods:{postPageHeight(){window.parent!==window&&window.parent.postMessage(document.documentElement.scrollHeight,"*")}},mounted(){this.postPageHeight(),window.addEventListener("resize",this.postPageHeight)},destroyed(){window.removeEventListener("resize",this.postPageHeight)}},n=o,i=a(1656),c=(0,i.A)(n,s,r,!1,null,"37fae567",null),u=c.exports,m=a(6178),g=function(){var e=this,t=e._self._c;return t("div",[t("h2",{staticClass:"generator-name"},[e._v("Ad Background Generator")]),t("el-row",{attrs:{type:"flex",justify:"space-between"}},[t("el-col",{staticClass:"generate-conditon",attrs:{span:10}},[t("el-form",{ref:"form1",attrs:{model:e.formValues,rules:e.formRules,size:"small","label-position":"left"},on:{submit:function(e){e.stopPropagation()}}},[t("FormBlock",{staticClass:"update-block",attrs:{prop:"imageURL"}},[t("el-row",{attrs:{type:"flex",justify:"space-between"}},[t("el-col",{staticClass:"update-content",attrs:{span:12}},[t("h4",{staticClass:"update-title"},[e._v("Product")]),t("UploadImage",{attrs:{"upload-position":"center","upload-tips":"Upload photos"}})],1),t("el-col",{staticClass:"update-content",attrs:{span:12}},[t("h4",{staticClass:"update-title"},[e._v(" Background "),t("el-tooltip",{attrs:{content:"You are required to input at least one of the following: image or prompt. You can also choose both.",placement:"top","popper-class":"is-custom ad-bg-tip-content"}},[t("i",{staticClass:"el-icon-question"})])],1),t("UploadImage",{attrs:{"upload-position":"center","upload-tips":"Optional"}})],1)],1),t("el-row",{staticClass:"example-content",attrs:{type:"flex",justify:"space-between"}},[t("el-col",{attrs:{span:24}},[t("h4",{staticClass:"example-title"},[e._v(" Background (Optional) "),t("el-tooltip",{attrs:{content:"You are required to input at least one of the following: image or prompt. You can also choose both.",placement:"top","popper-class":"is-custom ad-bg-tip-content"}},[t("i",{staticClass:"el-icon-question"})])],1)]),e._l(3,(function(a){return t("el-col",{key:a,staticClass:"bg-example-content",attrs:{span:8}},[t("div",{staticClass:"bg-example"},[e.bgExampleUrls[a-1]?t("img",{attrs:{src:e.bgExampleUrls[a-1]}}):e._e()])])}))],2)],1),t("FormBlock",{attrs:{prop:"prompt"}},[t("h4",{staticClass:"example-title"},[e._v(" Prompt (Optional) "),t("el-tooltip",{attrs:{content:"You are required to input at least one of the following: image or prompt. You can also choose both.",placement:"top","popper-class":"is-custom ad-bg-tip-content"}},[t("i",{staticClass:"el-icon-question"})])],1),t("el-input",{staticClass:"desc-input",attrs:{placeholder:"e.g. Generate a background for the sofa in an Italian living room.",type:"textarea",maxlength:e.wordLimit,resize:"none"},model:{value:e.formValues.prompt,callback:function(t){e.$set(e.formValues,"prompt",t)},expression:"formValues.prompt"}}),t("el-row",{attrs:{type:"flex",justify:"space-between"}},[t("p",[t("el-button",{staticClass:"prompt-button",attrs:{size:"small"},on:{click:e.randomPrompt}},[t("i",{staticClass:"button-icon--random"}),e._v(" Random ")]),t("el-button",{staticClass:"prompt-button",attrs:{size:"small"},on:{click:e.createPrompt}},[t("i",{staticClass:"button-icon--create"}),e._v(" Create ")])],1),t("p",{staticClass:"word-limit"},[t("i",{staticClass:"el-icon-delete"}),e._v(" "+e._s(e.wordNum)+"/"+e._s(e.wordLimit)+" ")])])],1),t("ViewBlock",[t("el-form-item",{attrs:{"label-width":"70px",label:"Size",prop:"size"}},[t("el-select",{attrs:{placeholder:"Size"},model:{value:e.formValues.size,callback:function(t){e.$set(e.formValues,"size",t)},expression:"formValues.size"}},e._l(e.sizeOptions,(function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),t("el-form-item",{attrs:{"label-width":"70px",label:"Quantity",prop:"number"}},[t("div",{staticClass:"radio-group-wrap"},[t("el-radio-group",{model:{value:e.formValues.number,callback:function(t){e.$set(e.formValues,"number",t)},expression:"formValues.number"}},e._l(e.numberOptions,(function(e){return t("el-radio-button",{key:e,attrs:{label:e}})})),1)],1)]),t("p",{staticClass:"bottom-buttons"},[t("el-button",{staticClass:"reset-button",attrs:{type:"text"}},[e._v(" Enter either image or text ")])],1),t("p",{staticClass:"bottom-buttons bottom-buttons--left"},[t("el-button",{staticClass:"generate-button",attrs:{type:"primary"}},[e._v(" Generate with one click ")])],1),t("el-form-item",{attrs:{prop:"agree"}},[t("div",{staticClass:"checkbox-wrap"},[t("el-checkbox",{model:{value:e.formValues.agree,callback:function(t){e.$set(e.formValues,"agree",t)},expression:"formValues.agree"}},[e._v(" Agree to the ")]),t("UserRulesDialog",{on:{agree:e.handleDialogAgree},model:{value:e.showUserRulesDialog,callback:function(t){e.showUserRulesDialog=t},expression:"showUserRulesDialog"}},[t("strong",{staticClass:"rule-button",class:e.formValues.agree&&"rule-button--actived",on:{click:e.handleUserRulesClick}},[e._v("  AI Privacy Agreement ")])])],1)])],1)],1)],1),t("el-col",{staticClass:"generate-images",attrs:{span:14}},[t("el-row",{attrs:{type:"flex",justify:"center"}},[t("el-skeleton",{staticClass:"generated-image",attrs:{loading:e.generateLoading,animated:e.generateLoading},scopedSlots:e._u([{key:"template",fn:function(){return[t("el-skeleton-item",{attrs:{variant:"image"}})]},proxy:!0}])},[[e.generatedList.length>0?t("img",{attrs:{src:e.selectedIamgeUrl}}):e._e()]],2)],1),t("ViewBlock",[t("el-row",{staticClass:"generated-list-content",attrs:{type:"flex"}},[e._l(4,(function(a){return t("el-col",{key:a,staticClass:"generated-list-img-content",attrs:{span:6}},[t("div",{staticClass:"img-content"},[e.generatedList[a-1]?t("img",{attrs:{src:e.generatedList[a-1]}}):e._e()])])})),t("el-col",{staticClass:"bottom-buttons bottom-buttons--right",attrs:{span:24}},[t("el-button",{staticClass:"prompt-button",attrs:{size:"small"},on:{click:e.randomPrompt}},[e._v(" Share ")]),t("el-button",{staticClass:"prompt-button",attrs:{size:"small"},on:{click:e.createPrompt}},[e._v(" Download ")])],1)],2)],1)],1)],1)],1)},p=[],d=function(){var e=this,t=e._self._c;return t("el-form-item",e._b({staticClass:"form-block"},"el-form-item",e.$attrs,!1),[e._t("default")],2)},f=[],h={},b=h,v=(0,i.A)(b,d,f,!1,null,"45c5db91",null),w=v.exports,k=function(){var e=this,t=e._self._c;return t("el-upload",{style:e.uploadStyle,attrs:{action:"","show-file-list":!1,"before-upload":e.beforeImgageUpload,"auto-upload":!1,limit:1,accept:".png,.jpg,.jpeg,.webp"}},[t("div",{staticClass:"uploader-content",style:e.imagePreviewStyle},[e.imageUrl?[t("img",{staticClass:"image",attrs:{src:e.imageUrl}}),t("span",{staticClass:"image-uploader-actions",on:{click:function(e){e.stopPropagation()}}},[t("span",{on:{click:e.deleteImage}},[t("i",{staticClass:"el-icon-delete"})])])]:t("div",[t("i",{staticClass:"image-uploader-icon"}),t("h5",{staticClass:"upload-tips"},[e._v(e._s(e.uploadTips))])])],2)])},C=[],x=(a(4603),a(7566),a(8721),{props:{uploadPosition:{type:String,default:"center"},imagePreviewSize:{type:String,default:"152px"},uploadTips:String},data(){return{imageUrl:""}},computed:{uploadStyle(){return{textAlign:this.uploadPosition}},imagePreviewStyle(){return{width:this.imagePreviewSize,height:this.imagePreviewSize}}},methods:{beforeImgageUpload(e){const t=["image/png","image/jpg","image/jpeg","image/webp"].includes(e.type),a=e.size/1024/1024<10;t||this.$message.error("The uploaded image must be in the format of png/jpg/jpeg/webp."),a||this.$message.error("The size of the uploaded image cannot exceed 10MB.");const l=new Promise(((t,a)=>{const l=new Image;l.onload=()=>{const s=l.width,r=l.height;s>=256&&s<=4096&&r>=256&&r<=4096?(this.imageUrl=l.src,this.$emit("change",e.raw),t()):(this.$message.error("The dimensions of the uploaded image must be between 256 and 4096 pixels in both length and width."),a(new Error))},l.src=URL.createObjectURL(e.raw)}));return t&&a&&l},deleteImage(){console.log("del")}}}),y=x,V=(0,i.A)(y,k,C,!1,null,"7908b7a6",null),_=V.exports,R=function(){var e=this,t=e._self._c;return t("div",{staticClass:"form-block"},[e._t("default")],2)},U=[],z={},A=z,L=(0,i.A)(A,R,U,!1,null,"46272c86",null),D=L.exports,S=function(){var e=this,t=e._self._c;return t("el-popover",{attrs:{placement:"top",width:"600",title:"AI Privacy Agreement",trigger:"manual","popper-class":"user-rules-dialog"},scopedSlots:e._u([{key:"reference",fn:function(){return[e._t("default")]},proxy:!0}],null,!0),model:{value:e.compVisible,callback:function(t){e.compVisible=t},expression:"compVisible"}},[t("div",{staticClass:"user-rules-content"},[e._v("XXX")]),t("p",{staticClass:"user-rules-buttons"},[t("el-button",{attrs:{size:"small"},on:{click:e.handleDialogCancel}},[e._v("取消")]),t("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.handleDialogAgree}},[e._v(" 确定 ")])],1)])},I=[],B={model:{prop:"visible",event:"change"},props:{visible:{type:Boolean,required:!0}},computed:{compVisible:{set(e){this.$emit("change",e)},get(){return this.visible}}},methods:{handleDialogCancel(){this.compVisible=!1},handleDialogAgree(){this.$emit("agree",!0),this.compVisible=!1}}},O=B,P=(0,i.A)(O,S,I,!1,null,null,null),j=P.exports,$={components:{FormBlock:w,UploadImage:_,ViewBlock:D,UserRulesDialog:j},data(){return{formValues:{imageURL:null,backgroundURL:null,prompt:"",size:"768x1024",number:1,agree:!1},formRules:{},bgExampleUrls:[],wordLimit:200,sizeOptions:[{value:"768x1024",label:"Illustration 3:4 (768x1024)"},{value:"1024x1024",label:"Avatar 1:1 (1024x1024)"},{value:"720x1280",label:"Wallpaper 9:16 (720x1280)"},{value:"1152x768",label:"Illustration 3:2 (1152x768)"},{value:"1280x720",label:"Movie 16:9 (1280x720)"},{value:"1024x768",label:"Article illustration 4:3 (1024x768)"}],numberOptions:[1,2,3,4],showUserRulesDialog:!1,generateLoading:!1,generatedList:[],selectedIamgeUrl:""}},computed:{wordNum(){return this.formValues.prompt.length||0}},methods:{randomPrompt(){},createPrompt(){},handleUserRulesClick(){this.showUserRulesDialog=!0},handleDialogAgree(){this.formValues.agree=!0}}},H=$,F=(0,i.A)(H,g,p,!1,null,"2ccb8e1a",null),q=F.exports,T=function(){var e=this,t=e._self._c;return t("div",[t("el-row",{attrs:{type:"flex"}},[t("el-col",{staticClass:"generate-conditon",attrs:{span:10}},[t("el-form",{ref:"form1",attrs:{model:e.formValues,rules:e.formRules,size:"small","label-position":"top"}},[t("FormBlock",{attrs:{label:"Upload a 2D image",prop:"imageRaw"}},[t("UploadImage",{attrs:{"upload-position":"center","image-preview-size":"486px"},on:{change:e.handleChangeImage}})],1)],1),t("ViewBlock",[t("el-button",{staticClass:"generate-button",attrs:{type:"primary"}},[e._v(" Click to generate ")])],1)],1),t("el-col",{staticClass:"generate-images",attrs:{span:14}},[t("ViewBlock",{style:e.contentStyle},[t("el-row",{staticClass:"generate-images-row",attrs:{gutter:10,type:"flex",align:"middle",justify:"space-between"}},[t("el-col",{staticClass:"generated-image-wrap",attrs:{span:24}},[t("el-skeleton",{staticClass:"generated-image--single generated-image-skeleton",attrs:{loading:e.generateLoading,animated:e.generateAnimated},scopedSlots:e._u([{key:"template",fn:function(){return[t("el-skeleton-item",{staticClass:"generated-image--single",attrs:{variant:"image"}})]},proxy:!0}])},[[t("el-image",{staticClass:"generated-image--single",attrs:{src:e.srcList[0]||"","preview-src-list":e.srcList,fit:"fill"}})]],2)],1)],1)],1)],1)],1)],1)},E=[],M={components:{FormBlock:w,UploadImage:_,ViewBlock:D},data(){return{formValues:{imageRaw:null},formRules:{},srcList:[],generateLoading:!0,generateAnimated:!1,contentHeight:null}},computed:{contentStyle(){return{height:`${this.contentHeight}px`}}},methods:{handleChangeImage(e){this.formValues.imageRaw=e}},mounted(){this.contentHeight=document.querySelector(".el-col.generate-conditon").scrollHeight}},Y=M,N=(0,i.A)(Y,T,E,!1,null,"b0505958",null),G=N.exports,W=function(){var e=this,t=e._self._c;return t("div",[t("el-row",{attrs:{type:"flex"}},[t("el-col",{staticClass:"generate-conditon",attrs:{span:10}},[t("el-form",{ref:"form1",attrs:{model:e.formValues,rules:e.formRules,size:"small","label-position":"top"}},[t("FormBlock",{attrs:{label:"Upload a product image",prop:"imageRaw"}},[t("UploadImage",{attrs:{"upload-position":"center","image-preview-size":"486px"},on:{change:e.handleChangeImage}})],1)],1),t("ViewBlock",[t("el-button",{staticClass:"generate-button",attrs:{type:"primary"}},[e._v(" Click to generate ")])],1)],1),t("el-col",{staticClass:"generate-images",attrs:{span:14}},[t("ViewBlock",{style:e.contentStyle},[t("el-row",{staticClass:"generate-images-row",attrs:{gutter:10,type:"flex",align:"middle",justify:"space-between"}},[t("el-col",{staticClass:"generated-image-wrap",attrs:{span:24}},[t("el-skeleton",{staticClass:"generated-image--single generated-image-skeleton",attrs:{loading:e.generateLoading,animated:e.generateAnimated},scopedSlots:e._u([{key:"template",fn:function(){return[t("el-skeleton-item",{staticClass:"generated-image--single",attrs:{variant:"image"}})]},proxy:!0}])},[[t("el-image",{staticClass:"generated-image--single",attrs:{src:e.srcList[0]||"","preview-src-list":e.srcList,fit:"fill"}})]],2)],1)],1)],1)],1)],1)],1)},X=[],Q={components:{FormBlock:w,UploadImage:_,ViewBlock:D},data(){return{formValues:{imageRaw:null},formRules:{},srcList:[],generateLoading:!0,generateAnimated:!1,contentHeight:null}},computed:{contentStyle(){return{height:`${this.contentHeight}px`}}},methods:{handleChangeImage(e){this.formValues.imageRaw=e}},mounted(){this.contentHeight=document.querySelector(".el-col.generate-conditon").scrollHeight}},J=Q,K=(0,i.A)(J,W,X,!1,null,"5ad6d85c",null),Z=K.exports,ee=function(){var e=this,t=e._self._c;return t("div",[t("el-row",{attrs:{type:"flex"}},[t("el-col",{staticClass:"generate-conditon",attrs:{span:10}},[t("el-form",{ref:"form1",attrs:{model:e.formValues,rules:e.formRules,size:"small","label-position":"top"}},[t("FormBlock",{attrs:{label:"Upload a model image",prop:"imageRaw"}},[t("UploadImage",{attrs:{"upload-position":"center"},on:{change:e.handleChangeImage}})],1),t("FormBlock",{attrs:{label:"Describe the desired clothing for the model or upload a clothing image",prop:"backgroundDesc"}},[t("div",{staticClass:"form-item--desc"},[t("el-input",{staticClass:"desc-input",attrs:{placeholder:"e.g. Change the model's coat to a gray denim jacket.",type:"textarea",maxlength:"200",resize:"none",rows:5},model:{value:e.formValues.backgroundDesc,callback:function(t){e.$set(e.formValues,"backgroundDesc",t)},expression:"formValues.backgroundDesc"}}),t("UploadImage",{attrs:{"upload-position":"right","image-preview-size":"128px"},on:{change:e.handleChangeBackgroundImage}})],1)])],1),t("ViewBlock",[t("el-form",{ref:"form2",attrs:{model:e.formValues,rules:e.formRules,"label-width":"250px",size:"small"}},[t("el-form-item",{attrs:{label:"Size selection",prop:"size"}},[t("el-select",{attrs:{placeholder:"Size selection"},model:{value:e.formValues.size,callback:function(t){e.$set(e.formValues,"size",t)},expression:"formValues.size"}},e._l(e.sizeOptions,(function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),t("el-form-item",{attrs:{label:"Number of images to generate",prop:"number"}},[t("div",{staticClass:"radio-group-wrap"},[t("el-radio-group",{model:{value:e.formValues.number,callback:function(t){e.$set(e.formValues,"number",t)},expression:"formValues.number"}},e._l(e.numberOptions,(function(e){return t("el-radio-button",{key:e,attrs:{label:e}})})),1)],1)]),t("el-form-item",{attrs:{"label-width":"0",prop:"agree"}},[t("div",{staticClass:"checkbox-wrap"},[t("el-checkbox",{model:{value:e.formValues.agree,callback:function(t){e.$set(e.formValues,"agree",t)},expression:"formValues.agree"}},[e._v(" Read and agree to the ")]),t("UserRulesDialog",{on:{agree:e.handleDialogAgree},model:{value:e.showUserRulesDialog,callback:function(t){e.showUserRulesDialog=t},expression:"showUserRulesDialog"}},[t("strong",{staticClass:"rule-button",class:e.formValues.agree&&"rule-button--actived",on:{click:e.handleUserRulesClick}},[e._v("  AI User Rules. ")])])],1)])],1),t("el-button",{staticClass:"generate-button",attrs:{type:"primary"}},[e._v(" Click to generate ")])],1)],1),t("el-col",{staticClass:"generate-images",attrs:{span:14}},[t("ViewBlock",{style:e.contentStyle},[t("el-row",{staticClass:"generate-images-row",attrs:{gutter:10,type:"flex",align:"middle",justify:"space-between"}},[1===e.formValues.number?t("el-col",{staticClass:"generated-image-wrap",attrs:{span:24}},[t("el-skeleton",{staticClass:"generated-image--single generated-image-skeleton",attrs:{loading:e.generateLoading,animated:e.generateAnimated},scopedSlots:e._u([{key:"template",fn:function(){return[t("el-skeleton-item",{staticClass:"generated-image--single",attrs:{variant:"image"}})]},proxy:!0}],null,!1,2368681702)},[[t("el-image",{staticClass:"generated-image--single",attrs:{src:e.srcList[0]||"","preview-src-list":e.srcList,fit:"fill"}})]],2)],1):2===e.formValues.number?e._l(e.formValues.number,(function(a){return t("el-col",{key:a,staticClass:"generated-image-wrap generated-image-wrap--duo",attrs:{span:24}},[t("el-skeleton",{staticClass:"generated-image--duo generated-image-skeleton",attrs:{loading:e.generateLoading,animated:e.generateAnimated},scopedSlots:e._u([{key:"template",fn:function(){return[t("el-skeleton-item",{staticClass:"generated-image--duo",attrs:{variant:"image"}})]},proxy:!0}],null,!0)},[[t("el-image",{staticClass:"generated-image--duo",attrs:{src:e.srcList[a-1]||"","preview-src-list":e.srcList,fit:"fill"}})]],2)],1)})):e._l(e.formValues.number,(function(a){return t("el-col",{key:a,staticClass:"generated-image-wrap",attrs:{span:12}},[t("el-skeleton",{staticClass:"generated-image--plural generated-image-skeleton",attrs:{loading:e.generateLoading,animated:e.generateAnimated},scopedSlots:e._u([{key:"template",fn:function(){return[t("el-skeleton-item",{staticClass:"generated-image--plural",attrs:{variant:"image"}})]},proxy:!0}],null,!0)},[[t("el-image",{staticClass:"generated-image--plural",attrs:{src:e.srcList[a-1]||"","preview-src-list":e.srcList,fit:"fill"}})]],2)],1)}))],2)],1)],1)],1)],1)},te=[],ae={components:{FormBlock:w,UploadImage:_,ViewBlock:D,UserRulesDialog:j},data(){return{formValues:{imageRaw:null,backgroundDesc:"",backgroundRow:null,size:"768x1024",number:1,agree:!1},formRules:{},sizeOptions:[{value:"768x1024",label:"Illustration 3:4 (768x1024)"},{value:"1024x1024",label:"Avatar 1:1 (1024x1024)"},{value:"720x1280",label:"Wallpaper 9:16 (720x1280)"},{value:"1152x768",label:"Illustration 3:2 (1152x768)"},{value:"1280x720",label:"Movie 16:9 (1280x720)"},{value:"1024x768",label:"Article illustration 4:3 (1024x768)"}],numberOptions:[1,2,3,4],showUserRulesDialog:!1,srcList:[],generateLoading:!0,generateAnimated:!1,contentHeight:null}},computed:{contentStyle(){return{height:`${this.contentHeight}px`}}},methods:{handleChangeImage(e){this.formValues.imageRaw=e},handleChangeBackgroundImage(e){this.formValues.backgroundRow=e},handleUserRulesClick(){this.showUserRulesDialog=!0},handleDialogAgree(){this.formValues.agree=!0}},mounted(){this.contentHeight=document.querySelector(".el-col.generate-conditon").scrollHeight}},le=ae,se=(0,i.A)(le,ee,te,!1,null,"4d6501b2",null),re=se.exports,oe=function(){var e=this,t=e._self._c;return t("div",[t("el-row",{attrs:{type:"flex"}},[t("el-col",{staticClass:"generate-conditon",attrs:{span:10}},[t("el-form",{ref:"form1",attrs:{model:e.formValues,rules:e.formRules,size:"small","label-position":"top"}},[t("FormBlock",{attrs:{label:"Upload a line art",prop:"imageRaw"}},[t("UploadImage",{attrs:{"upload-position":"center"},on:{change:e.handleChangeImage}})],1),t("FormBlock",{attrs:{label:"Describe the desired coloring effect or upload a reference image",prop:"backgroundDesc"}},[t("div",{staticClass:"form-item--desc"},[t("el-input",{staticClass:"desc-input",attrs:{placeholder:"e.g. Color the line art in the style of Hayao Miyazaki's animations.",type:"textarea",maxlength:"200",resize:"none"},model:{value:e.formValues.backgroundDesc,callback:function(t){e.$set(e.formValues,"backgroundDesc",t)},expression:"formValues.backgroundDesc"}}),t("UploadImage",{attrs:{"upload-position":"right","image-preview-size":"128px"},on:{change:e.handleChangeBackgroundImage}})],1)])],1),t("ViewBlock",[t("el-form",{ref:"form2",attrs:{model:e.formValues,rules:e.formRules,"label-width":"250px",size:"small"}},[t("el-form-item",{attrs:{label:"Size selection",prop:"size"}},[t("el-select",{attrs:{placeholder:"Size selection"},model:{value:e.formValues.size,callback:function(t){e.$set(e.formValues,"size",t)},expression:"formValues.size"}},e._l(e.sizeOptions,(function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),t("el-form-item",{attrs:{label:"Number of images to generate",prop:"number"}},[t("div",{staticClass:"radio-group-wrap"},[t("el-radio-group",{model:{value:e.formValues.number,callback:function(t){e.$set(e.formValues,"number",t)},expression:"formValues.number"}},e._l(e.numberOptions,(function(e){return t("el-radio-button",{key:e,attrs:{label:e}})})),1)],1)]),t("el-form-item",{attrs:{"label-width":"0",prop:"agree"}},[t("div",{staticClass:"checkbox-wrap"},[t("el-checkbox",{model:{value:e.formValues.agree,callback:function(t){e.$set(e.formValues,"agree",t)},expression:"formValues.agree"}},[e._v(" Read and agree to the ")]),t("UserRulesDialog",{on:{agree:e.handleDialogAgree},model:{value:e.showUserRulesDialog,callback:function(t){e.showUserRulesDialog=t},expression:"showUserRulesDialog"}},[t("strong",{staticClass:"rule-button",class:e.formValues.agree&&"rule-button--actived",on:{click:e.handleUserRulesClick}},[e._v("  AI User Rules. ")])])],1)])],1),t("el-button",{staticClass:"generate-button",attrs:{type:"primary"}},[e._v(" Click to generate ")])],1)],1),t("el-col",{staticClass:"generate-images",attrs:{span:14}},[t("ViewBlock",{style:e.contentStyle},[t("el-row",{staticClass:"generate-images-row",attrs:{gutter:10,type:"flex",align:"middle",justify:"space-between"}},[1===e.formValues.number?t("el-col",{staticClass:"generated-image-wrap",attrs:{span:24}},[t("el-skeleton",{staticClass:"generated-image--single generated-image-skeleton",attrs:{loading:e.generateLoading,animated:e.generateAnimated},scopedSlots:e._u([{key:"template",fn:function(){return[t("el-skeleton-item",{staticClass:"generated-image--single",attrs:{variant:"image"}})]},proxy:!0}],null,!1,2368681702)},[[t("el-image",{staticClass:"generated-image--single",attrs:{src:e.srcList[0]||"","preview-src-list":e.srcList,fit:"fill"}})]],2)],1):2===e.formValues.number?e._l(e.formValues.number,(function(a){return t("el-col",{key:a,staticClass:"generated-image-wrap generated-image-wrap--duo",attrs:{span:24}},[t("el-skeleton",{staticClass:"generated-image--duo generated-image-skeleton",attrs:{loading:e.generateLoading,animated:e.generateAnimated},scopedSlots:e._u([{key:"template",fn:function(){return[t("el-skeleton-item",{staticClass:"generated-image--duo",attrs:{variant:"image"}})]},proxy:!0}],null,!0)},[[t("el-image",{staticClass:"generated-image--duo",attrs:{src:e.srcList[a-1]||"","preview-src-list":e.srcList,fit:"fill"}})]],2)],1)})):e._l(e.formValues.number,(function(a){return t("el-col",{key:a,staticClass:"generated-image-wrap",attrs:{span:12}},[t("el-skeleton",{staticClass:"generated-image--plural generated-image-skeleton",attrs:{loading:e.generateLoading,animated:e.generateAnimated},scopedSlots:e._u([{key:"template",fn:function(){return[t("el-skeleton-item",{staticClass:"generated-image--plural",attrs:{variant:"image"}})]},proxy:!0}],null,!0)},[[t("el-image",{staticClass:"generated-image--plural",attrs:{src:e.srcList[a-1]||"","preview-src-list":e.srcList,fit:"fill"}})]],2)],1)}))],2)],1)],1)],1)],1)},ne=[],ie={components:{FormBlock:w,UploadImage:_,ViewBlock:D,UserRulesDialog:j},data(){return{formValues:{imageRaw:null,backgroundDesc:"",backgroundRow:null,size:"768x1024",number:1,agree:!1},formRules:{},sizeOptions:[{value:"768x1024",label:"Illustration 3:4 (768x1024)"},{value:"1024x1024",label:"Avatar 1:1 (1024x1024)"},{value:"720x1280",label:"Wallpaper 9:16 (720x1280)"},{value:"1152x768",label:"Illustration 3:2 (1152x768)"},{value:"1280x720",label:"Movie 16:9 (1280x720)"},{value:"1024x768",label:"Article illustration 4:3 (1024x768)"}],numberOptions:[1,2,3,4],showUserRulesDialog:!1,srcList:[],generateLoading:!0,generateAnimated:!1,contentHeight:null}},computed:{contentStyle(){return{height:`${this.contentHeight}px`}}},methods:{handleChangeImage(e){this.formValues.imageRaw=e},handleChangeBackgroundImage(e){this.formValues.backgroundRow=e},handleUserRulesClick(){this.showUserRulesDialog=!0},handleDialogAgree(){this.formValues.agree=!0}},mounted(){this.contentHeight=document.querySelector(".el-col.generate-conditon").scrollHeight}},ce=ie,ue=(0,i.A)(ce,oe,ne,!1,null,"05abf5ca",null),me=ue.exports;l["default"].use(m.Ay);const ge=[{path:"/",name:"home",redirect:"/advertisement"},{path:"/advertisement",name:"advertisement",component:q},{path:"/convert-2d",name:"convert2D",component:G},{path:"/refine-product",name:"refineProduct",component:Z},{path:"/model-outfit",name:"Convert2D",component:re},{path:"/line-art",name:"lineArt",component:me}],pe=new m.Ay({routes:ge});var de=pe,fe=a(3518);l["default"].use(fe.Ay);var he=new fe.Ay.Store({state:{},getters:{},mutations:{},actions:{},modules:{}}),be=a(9143),ve=a.n(be),we=a(1040);l["default"].config.productionTip=!1,l["default"].use(ve(),{locale:we.A}),new l["default"]({router:de,store:he,render:e=>e(u)}).$mount("#app")}},t={};function a(l){var s=t[l];if(void 0!==s)return s.exports;var r=t[l]={id:l,loaded:!1,exports:{}};return e[l].call(r.exports,r,r.exports,a),r.loaded=!0,r.exports}a.m=e,function(){a.amdO={}}(),function(){var e=[];a.O=function(t,l,s,r){if(!l){var o=1/0;for(u=0;u<e.length;u++){l=e[u][0],s=e[u][1],r=e[u][2];for(var n=!0,i=0;i<l.length;i++)(!1&r||o>=r)&&Object.keys(a.O).every((function(e){return a.O[e](l[i])}))?l.splice(i--,1):(n=!1,r<o&&(o=r));if(n){e.splice(u--,1);var c=s();void 0!==c&&(t=c)}}return t}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[l,s,r]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var l in t)a.o(t,l)&&!a.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){a.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){var e={524:0};a.O.j=function(t){return 0===e[t]};var t=function(t,l){var s,r,o=l[0],n=l[1],i=l[2],c=0;if(o.some((function(t){return 0!==e[t]}))){for(s in n)a.o(n,s)&&(a.m[s]=n[s]);if(i)var u=i(a)}for(t&&t(l);c<o.length;c++)r=o[c],a.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return a.O(u)},l=self["webpackChunkai_shop"]=self["webpackChunkai_shop"]||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))}();var l=a.O(void 0,[504],(function(){return a(1652)}));l=a.O(l)})();
//# sourceMappingURL=app.eb8aa4c3.js.map