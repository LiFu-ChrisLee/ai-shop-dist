"use strict";(self["webpackChunkai_shop"]=self["webpackChunkai_shop"]||[]).push([[948],{5090:function(e,t,a){a.d(t,{A:function(){return c}});var s=function(){var e=this,t=e._self._c;return t("div",{staticClass:"compare-image-frame",style:e.compFrameStyle},[t("div",{staticClass:"bottom-image"},[t("img",{attrs:{src:e.originImgSrc}})]),t("div",{staticClass:"top-image",style:e.compTopImgFrameStyle},[t("img",{style:e.compTopImgStyle,attrs:{src:e.refinedImgSrc}})]),t("span",{staticClass:"rate-dragger",style:e.compDraggerStyle}),t("span",{staticClass:"rate-separator",style:e.compSeparatorStyle}),t("input",{directives:[{name:"model",rawName:"v-model",value:e.topImgRate,expression:"topImgRate"}],staticClass:"rate-input",attrs:{type:"range",min:"0",max:"100"},domProps:{value:e.topImgRate},on:{__r:function(t){e.topImgRate=t.target.value}}})])},o=[],r={props:{imgWidth:{type:String,default:"648px"},imgHeight:{type:String,default:"648px"},originImgSrc:{type:String,default:"https://cdn.hairstylebot.cn/HD/2025-02-17-782972f7e93247f9aaa7ea0a6c8a5265.jpeg"},refinedImgSrc:{type:String,default:"https://cdn.hairstylebot.cn/HD/2025-02-18-001d8b9bda894eabbae7d7a7f3deda28.jpg"}},data(){return{topImgRate:100}},computed:{compFrameStyle(){return{height:this.imgHeight,width:this.imgWidth}},compTopImgFrameStyle(){return{width:`${this.topImgRate}%`}},compTopImgStyle(){return{height:this.imgHeight,width:this.imgWidth}},compDraggerStyle(){return{left:`calc(${this.topImgRate}% - 24px)`}},compSeparatorStyle(){return{left:`calc(${this.topImgRate}% - 2px)`}}}},l=r,i=a(1656),n=(0,i.A)(l,s,o,!1,null,"4d7d36fa",null),c=n.exports},7497:function(e,t,a){a.d(t,{A:function(){return m}});var s=function(){var e=this,t=e._self._c;return t("el-upload",{style:e.uploadStyle,attrs:{action:"https://lab.cloudlike.cn/api/draw/uploadImg","before-upload":e.beforeImageUpload,"on-success":e.imageUploadSuccess,"on-error":e.imageUploadError,limit:1,"show-file-list":!1,"file-list":e.fileList,disabled:e.disabled,accept:".png,.jpg,.jpeg,.webp"}},[t("div",{staticClass:"uploader-content",class:e.imageLoading&&"image--loading",style:e.imageStyle},[e.compImageUrl?[t("img",{staticClass:"image",attrs:{src:e.compImageUrl}}),t("span",{staticClass:"image-uploader-actions",on:{click:function(e){e.stopPropagation()}}},[t("span",{on:{click:function(t){return t.stopPropagation(),e.deleteImage.apply(null,arguments)}}},[t("i",{staticClass:"el-icon-delete"})])])]:t("div",[t("i",{staticClass:"image-uploader-icon"}),t("h5",{staticClass:"upload-tips"},[e._v(e._s(e.uploadTips))])])],2)])},o=[],r=(a(4603),a(7566),a(8721),a(6142)),l={mixins:[r.A],model:{prop:"imageUrl",event:"change"},props:{uploadPosition:{type:String,default:"center"},imageSize:{type:String,default:"152px"},uploadTips:String,imageUrl:{type:String,required:!0,default:""},disabled:{type:Boolean,default:!1}},data(){return{fileList:[],imageLoading:!1}},computed:{uploadStyle(){return{textAlign:this.uploadPosition}},imageStyle(){return{width:this.imageSize,height:this.imageSize}},compImageUrl:{get(){return this.imageUrl},set(e){this.$emit("change",e),this.dispatch("ElFormItem","el.form.change",e)}}},watch:{imageUrl:{immediate:!0,handler(e){e||(this.fileList=[])}}},methods:{beforeImageUpload(e){this.imageLoading=!0;const t=["image/png","image/jpg","image/jpeg","image/webp"].includes(e.type),a=e.size/1024/1024<10;t||this.$message.error("The uploaded image must be in the format of png/jpg/jpeg/webp."),a||this.$message.error("The size of the uploaded image cannot exceed 10MB.");const s=new Promise(((t,a)=>{const s=new Image;s.onload=()=>{const e=s.width,o=s.height;e>=12&&e<=4096&&o>=12&&o<=4096?t():(this.$message.error("The dimensions of the uploaded image must be between 256 and 4096 pixels in both length and width."),a(new Error))},s.src=URL.createObjectURL(e)}));return t&&a&&s},imageUploadSuccess(e){this.imageLoading=!1;const{code:t,data:a,message:s}=e;200===t?this.compImageUrl=a:this.$message.error(s)},imageUploadError(){this.imageLoading=!1,this.$message.error("Upload failed!")},deleteImage(){this.compImageUrl=""}}},i=l,n=a(1656),c=(0,n.A)(i,s,o,!1,null,"72972b42",null),m=c.exports},2254:function(e,t,a){a.r(t),a.d(t,{default:function(){return g}});var s=function(){var e=this,t=e._self._c;return t("div",[t("h2",{staticClass:"generator-name"},[e._v("Ad Background Generator")]),t("el-row",{attrs:{type:"flex",justify:"space-between"}},[t("el-col",{staticClass:"generate-conditon",attrs:{span:9}},[t("el-form",{ref:"form1",attrs:{model:e.formValues,rules:e.formRules,"hide-required-asterisk":"",size:"small","label-position":"left"},on:{submit:function(e){e.stopPropagation()}}},[t("ViewBlock",{staticClass:"update-block"},[t("el-row",{attrs:{type:"flex",justify:"space-between"}},[t("el-col",{staticClass:"update-content",attrs:{span:12}},[t("el-form-item",{attrs:{prop:"productURL"}},[t("h4",{staticClass:"update-title"},[e._v("Product")]),t("UploadImage",{attrs:{"upload-position":"center","upload-tips":"Upload photos"},model:{value:e.formValues.productURL,callback:function(t){e.$set(e.formValues,"productURL",t)},expression:"formValues.productURL"}})],1)],1),t("el-col",{staticClass:"update-content",attrs:{span:12}},[t("el-form-item",{attrs:{prop:"backgroundURL"}},[t("h4",{staticClass:"update-title"},[e._v(" Background "),t("el-tooltip",{attrs:{content:"You can either upload your own background or use our provided background—it's up to you!",placement:"top","popper-class":"is-custom prompt-tip-content"}},[t("i",{staticClass:"el-icon-question"})])],1),t("UploadImage",{attrs:{"upload-position":"center","upload-tips":"Optional"},model:{value:e.formValues.backgroundURL,callback:function(t){e.$set(e.formValues,"backgroundURL",t)},expression:"formValues.backgroundURL"}})],1)],1)],1),t("el-row",{staticClass:"example-content",attrs:{type:"flex",justify:"space-between"}},[t("el-col",{attrs:{span:24}},[t("h4",{staticClass:"example-title"},[e._v(" Background (Optional) "),t("el-tooltip",{attrs:{content:"You can either upload your own background or use our provided background—it's up to you!",placement:"top","popper-class":"is-custom prompt-tip-content"}},[t("i",{staticClass:"el-icon-question"})])],1)]),e._l(3,(function(a){return t("el-col",{key:a,staticClass:"bg-example-content",attrs:{span:8}},[t("div",{staticClass:"bg-example",class:e.formValues.backgroundURL===e.bgExampleUrls[a-1]&&"is-active",on:{click:function(t){return e.selectExample(a)}}},[e.bgExampleUrls[a-1]?t("img",{attrs:{src:e.bgExampleUrls[a-1]}}):e._e()])])}))],2)],1),t("ViewBlock",[t("el-form-item",{attrs:{"label-width":"70px",label:"Size",prop:"size"}},[t("el-select",{attrs:{placeholder:"Size"},model:{value:e.formValues.size,callback:function(t){e.$set(e.formValues,"size",t)},expression:"formValues.size"}},e._l(e.sizeOptions,(function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),t("p",{staticClass:"bottom-buttons"},[t("el-button",{staticClass:"reset-button",attrs:{type:"text"},on:{click:e.resetOptional}},[e._v(" Enter either image or text ")])],1),t("p",{staticClass:"bottom-buttons bottom-buttons--left"},[t("el-button",{staticClass:"generate-button",attrs:{type:"primary"},on:{click:e.generateImages}},[e._v(" Generate with one click ")])],1),t("el-form-item",{attrs:{prop:"agree"}},[t("div",{staticClass:"checkbox-wrap"},[t("el-checkbox",{model:{value:e.formValues.agree,callback:function(t){e.$set(e.formValues,"agree",t)},expression:"formValues.agree"}},[e._v(" Agree to the ")]),t("UserRulesButton",{attrs:{checked:e.formValues.agree}})],1)])],1)],1)],1),t("el-col",{staticClass:"generate-images",attrs:{span:15}},[t("el-row",{attrs:{type:"flex",justify:"center"}},[t("el-skeleton",{staticClass:"generated-image",attrs:{loading:e.generateLoading,animated:e.generateLoading},scopedSlots:e._u([{key:"template",fn:function(){return[t("el-skeleton-item",{attrs:{variant:"image"}})]},proxy:!0}])},[[e.generatedList.length>0?t("img",{attrs:{src:e.selectedIamgeUrl}}):e._e()]],2)],1),t("ViewBlock",{staticClass:"generated-list-block"},[t("el-row",{staticClass:"generated-list-content",attrs:{type:"flex"}},[t("el-col",{staticClass:"bottom-buttons bottom-buttons--right",attrs:{span:24}},[t("el-button",{staticClass:"prompt-button",attrs:{size:"small"},on:{click:e.createPrompt}},[e._v(" Download ")])],1)],1)],1)],1)],1)],1)},o=[],r=a(7497),l=a(5702),i=a(1410),n=a(3188),c={components:{UploadImage:r.A,ViewBlock:l.A,UserRulesButton:i.A},data(){const e=(e,t,a)=>((this.formValues.backgroundURL||this.formValues.prompt)&&a(),a(new Error("At least one of image"))),t=(e,t,a)=>{if(!t)return a(new Error("Agree to AI Privacy Agreement"));a()};return{formValues:{productURL:"",backgroundURL:"",prompt:"",size:"3:4",batchSize:1,agree:!1},formRules:{productURL:[{required:!0,message:"Upload clothes photos"}],backgroundURL:[{validator:e}],prompt:[{validator:e}],size:[{required:!0,message:"Select size"}],batchSize:[{required:!0,message:"Select quantity"}],agree:[{validator:t}]},bgExampleUrls:[],wordLimit:200,sizeOptions:[{value:"3:4",label:"Illustration 3:4 (768x1024)"},{value:"1:1",label:"Avatar 1:1 (1024x1024)"},{value:"9:16",label:"Wallpaper 9:16 (720x1280)"},{value:"16:9",label:"Movie 16:9 (1280x720)"},{value:"4:3",label:"Article illustration 4:3 (1024x768)"}],numberOptions:[1,2,3,4],generateLoading:!1,generatedList:[],selectedIamgeUrl:""}},computed:{wordNum(){return this.formValues.prompt.length||0}},methods:{resetOptional(){this.formValues.colorURL="",this.formValues.prompt=""},selectExample(e){this.bgExampleUrls[e-1]&&(this.formValues.backgroundURL=this.bgExampleUrls[e-1])},generateImages(){this.$refs.form1.validate((e=>{if(e){const{productURL:e,backgroundURL:t,size:a}=this.formValues,[s,o]=a.split(":");this.generateLoading=!0,(0,n.U)({productURL:e,backgroundURL:t,width:s,height:o}).then((e=>{console.log(e),this.generatedList=Object.values(e||{}),this.selectedIamgeUrl=this.generatedList[0]||"",this.generateLoading=!1})).catch((()=>{}))}}))},randomPrompt(){},createPrompt(){}}},m=c,p=a(1656),u=(0,p.A)(m,s,o,!1,null,"18ae85b4",null),g=u.exports},2194:function(e,t,a){a.r(t),a.d(t,{default:function(){return h}});var s=function(){var e=this,t=e._self._c;return t("div",[t("h2",{staticClass:"generator-name"},[e._v("2D to 3D Conversion")]),t("el-row",{attrs:{type:"flex",justify:"space-between"}},[t("el-col",{staticClass:"generate-conditon",attrs:{span:9}},[t("el-form",{ref:"form1",attrs:{model:e.formValues,rules:e.formRules,"hide-required-asterisk":"",size:"small","label-position":"left"},on:{submit:function(e){e.stopPropagation()}}},[t("FormBlock",{staticClass:"update-block",attrs:{prop:"imageURL"}},[t("h4",{staticClass:"update-title"},[e._v("2D Images")]),t("UploadImage",{attrs:{"upload-position":"center","upload-tips":"Upload photos","image-size":"306px"},model:{value:e.formValues.imageURL,callback:function(t){e.$set(e.formValues,"imageURL",t)},expression:"formValues.imageURL"}})],1),t("ViewBlock",[t("el-form-item",{attrs:{prop:"type"}},[t("el-row",{staticClass:"example-content",attrs:{type:"flex",justify:"space-between"}},[t("el-col",{attrs:{span:24}},[t("h4",{staticClass:"example-title"},[e._v(" Style "),t("el-tooltip",{attrs:{content:"You can use our provided style.",placement:"top","popper-class":"is-custom prompt-tip-content"}},[t("i",{staticClass:"el-icon-question"})])],1)]),e._l(4,(function(a){return t("el-col",{key:a,staticClass:"bg-example-content",attrs:{span:8}},[t("div",{staticClass:"bg-example",class:e.formValues.type===a&&"is-active",on:{click:function(t){return e.selectExample(a)}}},[e.bgExampleUrls[a-1]?t("img",{attrs:{src:e.bgExampleUrls[a-1]}}):e._e()])])}))],2)],1)],1),t("ViewBlock",[t("el-form-item",{attrs:{"label-width":"70px",label:"Quantity",prop:"batchSize"}},[t("div",{staticClass:"radio-group-wrap"},[t("el-radio-group",{model:{value:e.formValues.batchSize,callback:function(t){e.$set(e.formValues,"batchSize",t)},expression:"formValues.batchSize"}},e._l(e.numberOptions,(function(e){return t("el-radio-button",{key:e,attrs:{label:e}})})),1)],1)]),t("p",{staticClass:"bottom-buttons bottom-buttons--left"},[t("el-button",{staticClass:"generate-button",attrs:{type:"primary"},on:{click:e.generateImages}},[e._v(" Generate with one click ")])],1),t("el-form-item",{attrs:{prop:"agree"}},[t("div",{staticClass:"checkbox-wrap"},[t("el-checkbox",{model:{value:e.formValues.agree,callback:function(t){e.$set(e.formValues,"agree",t)},expression:"formValues.agree"}},[e._v(" Agree to the ")]),t("UserRulesButton",{attrs:{checked:e.formValues.agree}})],1)])],1)],1)],1),t("el-col",{staticClass:"generate-images",attrs:{span:15}},[t("el-row",{attrs:{type:"flex",justify:"center"}},[t("el-skeleton",{staticClass:"generated-image",attrs:{loading:e.generateLoading,animated:e.generateLoading},scopedSlots:e._u([{key:"template",fn:function(){return[t("el-skeleton-item",{attrs:{variant:"image"}})]},proxy:!0}])},[[e.generatedList.length>0?t("CompareImage",{attrs:{src:e.selectedIamgeUrl}}):e._e()]],2)],1),t("ViewBlock",{staticClass:"generated-list-block"},[t("el-row",{staticClass:"generated-list-content",attrs:{type:"flex"}},[e._l(e.formValues.batchSize,(function(a){return t("el-col",{key:a,staticClass:"generated-list-img-content",attrs:{span:6}},[t("div",{staticClass:"img-content"},[e.generatedList[a-1]?t("img",{attrs:{src:e.generatedList[a-1]}}):e._e()])])})),t("el-col",{staticClass:"bottom-buttons bottom-buttons--right",attrs:{span:24}},[t("el-button",{staticClass:"prompt-button",attrs:{size:"small"},on:{click:e.randomPrompt}},[e._v(" Share ")]),t("el-button",{staticClass:"prompt-button",attrs:{size:"small"},on:{click:e.createPrompt}},[e._v(" Download ")])],1)],2)],1)],1)],1)],1)},o=[],r=a(2911),l=a(7497),i=a(5702),n=a(1410),c=a(5090),m=a(3188),p={components:{FormBlock:r.A,UploadImage:l.A,ViewBlock:i.A,UserRulesButton:n.A,CompareImage:c.A},data(){const e=(e,t,a)=>{if(!t)return a(new Error("Agree to AI Privacy Agreement"));a()};return{formValues:{imageURL:"",type:1,batchSize:1,agree:!1},formRules:{imageURL:[{required:!0,message:"Upload photos"}],type:[{required:!0,message:"Use style"}],batchSize:[{required:!0,message:"Select quantity"}],agree:[{validator:e}]},bgExampleUrls:[],numberOptions:[1,2,3,4],generateLoading:!1,generatedList:[],selectedIamgeUrl:""}},methods:{selectExample(e){this.formValues.type=e},generateImages(){this.$refs.form1.validate((e=>{if(e){const{imageURL:e,type:t,batchSize:a}=this.formValues;this.generateLoading=!0,(0,m.Ui)({imageURL:e,type:t,batchSize:a}).then((e=>{console.log(e),this.generatedList=Object.values(e||{}),this.selectedIamgeUrl=this.generatedList[0]||"",this.generateLoading=!1})).catch((()=>{}))}}))},randomPrompt(){},createPrompt(){}}},u=p,g=a(1656),d=(0,g.A)(u,s,o,!1,null,"7d792ab3",null),h=d.exports},5849:function(e,t,a){a.r(t),a.d(t,{default:function(){return d}});var s=function(){var e=this,t=e._self._c;return t("div",[t("h2",{staticClass:"generator-name"},[e._v("Line Art Coloring")]),t("el-row",{attrs:{type:"flex",justify:"space-between"}},[t("el-col",{staticClass:"generate-conditon",attrs:{span:9}},[t("el-form",{ref:"form1",attrs:{model:e.formValues,rules:e.formRules,"hide-required-asterisk":"",size:"small","label-position":"left"},on:{submit:function(e){e.stopPropagation()}}},[t("ViewBlock",{staticClass:"update-block"},[t("el-row",{attrs:{type:"flex",justify:"space-between"}},[t("el-col",{staticClass:"update-content",attrs:{span:12}},[t("el-form-item",{attrs:{prop:"imageURL"}},[t("h4",{staticClass:"update-title"},[e._v("Line art image")]),t("UploadImage",{attrs:{"upload-position":"center","upload-tips":"Upload photos"},model:{value:e.formValues.imageURL,callback:function(t){e.$set(e.formValues,"imageURL",t)},expression:"formValues.imageURL"}})],1)],1),t("el-col",{staticClass:"update-content",attrs:{span:12}},[t("el-form-item",{attrs:{prop:"colorURL"}},[t("h4",{staticClass:"update-title"},[e._v(" Color style reference "),t("el-tooltip",{attrs:{content:"You can either upload your own color style reference or use our provided—it's up to you!",placement:"top","popper-class":"is-custom prompt-tip-content"}},[t("i",{staticClass:"el-icon-question"})])],1),t("UploadImage",{attrs:{"upload-position":"center","upload-tips":"Optional"},model:{value:e.formValues.colorURL,callback:function(t){e.$set(e.formValues,"colorURL",t)},expression:"formValues.colorURL"}})],1)],1)],1),t("el-row",{staticClass:"example-content",attrs:{type:"flex",justify:"space-between"}},[t("el-col",{attrs:{span:24}},[t("h4",{staticClass:"example-title"},[e._v(" Color style reference image (Optional) "),t("el-tooltip",{attrs:{content:"You can either upload your own color style reference or use our provided—it's up to you!",placement:"top","popper-class":"is-custom prompt-tip-content"}},[t("i",{staticClass:"el-icon-question"})])],1)]),e._l(3,(function(a){return t("el-col",{key:a,staticClass:"bg-example-content",attrs:{span:8}},[t("div",{staticClass:"bg-example",class:e.formValues.colorURL===e.bgExampleUrls[a-1]&&"is-active",on:{click:function(t){return e.selectExample(a)}}},[e.bgExampleUrls[a-1]?t("img",{attrs:{src:e.bgExampleUrls[a-1]}}):e._e()])])}))],2)],1),t("ViewBlock",[t("el-form-item",{attrs:{"label-width":"70px",label:"Size",prop:"size"}},[t("el-select",{attrs:{placeholder:"Size"},model:{value:e.formValues.size,callback:function(t){e.$set(e.formValues,"size",t)},expression:"formValues.size"}},e._l(e.sizeOptions,(function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),t("el-form-item",{attrs:{"label-width":"70px",label:"Quantity",prop:"batchSize"}},[t("div",{staticClass:"radio-group-wrap"},[t("el-radio-group",{model:{value:e.formValues.batchSize,callback:function(t){e.$set(e.formValues,"batchSize",t)},expression:"formValues.batchSize"}},e._l(e.numberOptions,(function(e){return t("el-radio-button",{key:e,attrs:{label:e}})})),1)],1)]),t("p",{staticClass:"bottom-buttons"},[t("el-button",{staticClass:"reset-button",attrs:{type:"text"},on:{click:e.resetOptional}},[e._v(" Enter either image or text ")])],1),t("p",{staticClass:"bottom-buttons bottom-buttons--left"},[t("el-button",{staticClass:"generate-button",attrs:{type:"primary"},on:{click:e.generateImages}},[e._v(" Generate with one click ")])],1),t("el-form-item",{attrs:{prop:"agree"}},[t("div",{staticClass:"checkbox-wrap"},[t("el-checkbox",{model:{value:e.formValues.agree,callback:function(t){e.$set(e.formValues,"agree",t)},expression:"formValues.agree"}},[e._v(" Agree to the ")]),t("UserRulesButton",{attrs:{checked:e.formValues.agree}})],1)])],1)],1)],1),t("el-col",{staticClass:"generate-images",attrs:{span:15}},[t("el-row",{attrs:{type:"flex",justify:"center"}},[t("el-skeleton",{staticClass:"generated-image",attrs:{loading:e.generateLoading,animated:e.generateLoading},scopedSlots:e._u([{key:"template",fn:function(){return[t("el-skeleton-item",{attrs:{variant:"image"}})]},proxy:!0}])},[[e.generatedList.length>0?t("CompareImage",{attrs:{src:e.selectedIamgeUrl}}):e._e()]],2)],1),t("ViewBlock",{staticClass:"generated-list-block"},[t("el-row",{staticClass:"generated-list-content",attrs:{type:"flex"}},[e._l(e.formValues.batchSize,(function(a){return t("el-col",{key:a,staticClass:"generated-list-img-content",attrs:{span:6}},[t("div",{staticClass:"img-content"},[e.generatedList[a-1]?t("img",{attrs:{src:e.generatedList[a-1]}}):e._e()])])})),t("el-col",{staticClass:"bottom-buttons bottom-buttons--right",attrs:{span:24}},[t("el-button",{staticClass:"prompt-button",attrs:{size:"small"},on:{click:e.createPrompt}},[e._v(" Download ")])],1)],2)],1)],1)],1)],1)},o=[],r=a(7497),l=a(5702),i=a(1410),n=a(5090),c=a(3188),m={components:{UploadImage:r.A,ViewBlock:l.A,UserRulesButton:i.A,CompareImage:n.A},data(){const e=(e,t,a)=>((this.formValues.colorURL||this.formValues.prompt)&&a(),a(new Error("At least one of image"))),t=(e,t,a)=>{if(!t)return a(new Error("Agree to AI Privacy Agreement"));a()};return{formValues:{imageURL:"",colorURL:"",prompt:"",size:"3:4",batchSize:1,agree:!1},formRules:{imageURL:[{required:!0,message:"Upload clothes photos"}],colorURL:[{validator:e}],prompt:[{validator:e}],size:[{required:!0,message:"Select size"}],batchSize:[{required:!0,message:"Select quantity"}],agree:[{validator:t}]},bgExampleUrls:[],wordLimit:200,sizeOptions:[{value:"3:4",label:"Illustration 3:4 (768x1024)"},{value:"1:1",label:"Avatar 1:1 (1024x1024)"},{value:"9:16",label:"Wallpaper 9:16 (720x1280)"},{value:"16:9",label:"Movie 16:9 (1280x720)"},{value:"4:3",label:"Article illustration 4:3 (1024x768)"}],numberOptions:[1,2,3,4],generateLoading:!1,generatedList:[],selectedIamgeUrl:""}},computed:{wordNum(){return this.formValues.prompt.length||0}},methods:{resetOptional(){this.formValues.colorURL="",this.formValues.prompt=""},selectExample(e){this.bgExampleUrls[e-1]&&(this.formValues.colorURL=this.bgExampleUrls[e-1])},generateImages(){this.$refs.form1.validate((e=>{if(e){const{imageURL:e,colorURL:t,batchSize:a,size:s}=this.formValues,[o,r]=s.split(":");this.generateLoading=!0,(0,c.eS)({imageURL:e,colorURL:t,batchSize:a,width:o,height:r}).then((e=>{console.log(e),this.generatedList=Object.values(e||{}),this.selectedIamgeUrl=this.generatedList[0]||"",this.generateLoading=!1})).catch((()=>{}))}}))},randomPrompt(){},createPrompt(){}}},p=m,u=a(1656),g=(0,u.A)(p,s,o,!1,null,"705abeb0",null),d=g.exports},5844:function(e,t,a){a.r(t),a.d(t,{default:function(){return b}});var s=function(){var e=this,t=e._self._c;return t("div",[t("h2",{staticClass:"generator-name"},[e._v("Model Outfit Swapping")]),t("el-row",{attrs:{type:"flex",justify:"space-between"}},[t("el-col",{staticClass:"generate-conditon",attrs:{span:9}},[t("el-form",{ref:"form1",attrs:{model:e.formValues,rules:e.formRules,"hide-required-asterisk":"",size:"small","label-position":"left"},on:{submit:function(e){e.stopPropagation()}}},[t("ViewBlock",{staticClass:"update-block"},[t("el-row",{attrs:{type:"flex",justify:"space-between"}},[t("el-col",{staticClass:"update-content",attrs:{span:12}},[t("el-form-item",{attrs:{prop:"clothesURL"}},[t("h4",{staticClass:"update-title"},[e._v("Clothes")]),t("UploadImage",{attrs:{"upload-position":"center","upload-tips":"Upload photos"},model:{value:e.formValues.clothesURL,callback:function(t){e.$set(e.formValues,"clothesURL",t)},expression:"formValues.clothesURL"}})],1)],1),t("el-col",{staticClass:"update-content",attrs:{span:12}},[t("el-form-item",{attrs:{prop:"modelURL"}},[t("h4",{staticClass:"update-title"},[e._v(" Model "),t("el-tooltip",{attrs:{content:"You can either upload your own model image or use our provided model image—it's up to you!",placement:"top","popper-class":"is-custom prompt-tip-content"}},[t("i",{staticClass:"el-icon-question"})])],1),t("UploadImage",{attrs:{"upload-position":"center","upload-tips":"Optional"},model:{value:e.formValues.modelURL,callback:function(t){e.$set(e.formValues,"modelURL",t)},expression:"formValues.modelURL"}})],1)],1)],1),t("el-row",{staticClass:"example-content",attrs:{type:"flex",justify:"space-between"}},[t("el-col",{attrs:{span:24}},[t("h4",{staticClass:"example-title"},[e._v(" Model "),t("el-tooltip",{attrs:{content:"You can either upload your own model image or use our provided model image—it's up to you!",placement:"top","popper-class":"is-custom prompt-tip-content"}},[t("i",{staticClass:"el-icon-question"})])],1)]),e._l(3,(function(a){return t("el-col",{key:a,staticClass:"bg-example-content",attrs:{span:8}},[t("div",{staticClass:"bg-example",class:e.formValues.modelURL===e.bgExampleUrls[a-1]&&"is-active",on:{click:function(t){return e.selectExample(a)}}},[e.bgExampleUrls[a-1]?t("img",{attrs:{src:e.bgExampleUrls[a-1]}}):e._e()])])}))],2)],1),t("ViewBlock",[t("h4",{staticClass:"control-title"},[e._v("Controlnet")]),t("el-row",{attrs:{type:"flex",justify:"space-between"}},[t("el-col",{staticClass:"control-buttons",attrs:{span:1}},[t("Iconfont",{attrs:{icon:"#icon-refresh"},nativeOn:{click:function(t){return e.handleControl("refresh")}}}),t("Iconfont",{class:"eraser"===e.selectedControl&&"selected",attrs:{icon:"#icon-eraser"},nativeOn:{click:function(t){return e.handleControl("eraser")}}}),t("Iconfont",{class:"brush"===e.selectedControl&&"selected",attrs:{icon:"#icon-brush"},nativeOn:{click:function(t){return e.handleControl("brush")}}}),t("Iconfont",{attrs:{icon:"#icon-close"},nativeOn:{click:function(t){return e.handleControl("close")}}})],1),t("el-col",{attrs:{span:23}},[t("div",{ref:"canvasContainerRef",staticClass:"control-canvas"},[t("canvas",{ref:"canvasRef"})])])],1)],1),t("ViewBlock",[t("p",{staticClass:"bottom-buttons"},[t("el-button",{staticClass:"reset-button",attrs:{type:"text"},on:{click:e.resetOptional}},[e._v(" Enter either image or text ")])],1),t("p",{staticClass:"bottom-buttons bottom-buttons--left"},[t("el-button",{staticClass:"generate-button",attrs:{type:"primary"},on:{click:e.generateImages}},[e._v(" Generate with one click ")])],1),t("el-form-item",{attrs:{prop:"agree"}},[t("div",{staticClass:"checkbox-wrap"},[t("el-checkbox",{model:{value:e.formValues.agree,callback:function(t){e.$set(e.formValues,"agree",t)},expression:"formValues.agree"}},[e._v(" Agree to the ")]),t("UserRulesButton",{attrs:{checked:e.formValues.agree}})],1)])],1)],1)],1),t("el-col",{staticClass:"generate-images",attrs:{span:15}},[t("el-row",{attrs:{type:"flex",justify:"center"}},[t("el-skeleton",{staticClass:"generated-image",attrs:{loading:e.generateLoading,animated:e.generateLoading},scopedSlots:e._u([{key:"template",fn:function(){return[t("el-skeleton-item",{attrs:{variant:"image"}})]},proxy:!0}])},[[e.generatedList.length>0?t("img",{attrs:{src:e.selectedIamgeUrl}}):e._e()]],2)],1),t("ViewBlock",{staticClass:"generated-list-block"},[t("el-row",{staticClass:"generated-list-content",attrs:{type:"flex"}},[t("el-col",{staticClass:"bottom-buttons bottom-buttons--right",attrs:{span:24}},[t("el-button",{staticClass:"prompt-button",attrs:{size:"small"},on:{click:e.createPrompt}},[e._v(" Download ")])],1)],1)],1)],1)],1)],1)},o=[],r=(a(4114),a(7497)),l=a(5702),i=a(1410),n=a(6094),c=a(3188),m=a(5953),p=a(23),u=a(3258),g={components:{UploadImage:r.A,ViewBlock:l.A,UserRulesButton:i.A,Iconfont:n.A},data(){const e=(e,t,a)=>{if(!t)return a(new Error("Agree to AI Privacy Agreement"));a()};return{formValues:{clothesURL:"",modelURL:"",size:"3:4",batchSize:1,agree:!1},formRules:{clothesURL:[{required:!0,message:"Upload clothes photos"}],modelURL:[{required:!0,message:"Upload model photos"}],size:[{required:!0,message:"Select size"}],batchSize:[{required:!0,message:"Select quantity"}],agree:[{validator:e}]},bgExampleUrls:[],selectedControl:"",beginState:{},states:[],count:0,recordSteps:!0,canvasWidth:0,canvasHeight:0,imgWidth:0,imgHeight:0,canvasControl:null,sizeOptions:[{value:"3:4",label:"Illustration 3:4 (768x1024)"},{value:"1:1",label:"Avatar 1:1 (1024x1024)"},{value:"9:16",label:"Wallpaper 9:16 (720x1280)"},{value:"16:9",label:"Movie 16:9 (1280x720)"},{value:"4:3",label:"Article illustration 4:3 (1024x768)"}],numberOptions:[1,2,3,4],generateLoading:!1,generatedList:[],selectedIamgeUrl:""}},watch:{"formValues.modelURL"(e){this.clearCanvasImage(),e&&this.loadCanvasImage()}},methods:{resetOptional(){this.formValues.modelURL=""},selectExample(e){this.bgExampleUrls[e-1]&&(this.formValues.modelURL=this.bgExampleUrls[e-1])},generateImages(){this.$refs.form1.validate((e=>{e&&(this.generateLoading=!0,(0,m.w)(this.getCanvasImage()).then((e=>{const{clothesURL:t}=this.formValues;(0,c.$y)({modelURL:e,clothesURL:t}).then((e=>{console.log(e),this.generatedList=Object.values(e||{}),this.selectedIamgeUrl=this.generatedList[0]||"",this.generateLoading=!1})).catch((()=>{}))})))}))},handleControl(e){const t=this.canvasControl;switch(this.selectedControl=e,e){case"refresh":this.recordSteps=!1,t.isDrawingMode=!1,this.states.pop(),0===this.states.length&&(this.states=[this.beginState]),t.loadFromJSON(this.states[this.states.length-1]).renderAll();break;case"eraser":this.recordSteps=!0,t.isDrawingMode=!0,t.freeDrawingBrush=new p.fabric.EraserBrush(t),t.freeDrawingBrush.width=30;break;case"brush":this.recordSteps=!0,t.isDrawingMode=!0,t.freeDrawingBrush=new p.fabric.PencilBrush(t),t.freeDrawingBrush.width=30,t.freeDrawingBrush.color="#fff";break;default:this.recordSteps=!1,t.isDrawingMode=!1,this.states=[this.beginState],t.loadFromJSON(this.beginState).renderAll();break}},loadCanvasImage(){const e=this.canvasHeight,t=this.canvasWidth,a=this.canvasControl;this.recordSteps=!1,p.fabric.Image.fromURL(this.formValues.modelURL,(s=>{this.imgWidth=s.width,this.imgHeight=s.height,this.recordSteps=!0,a.setBackgroundImage(s,a.renderAll.bind(a),{scaleX:t/s.width,scaleY:e/s.height,erasable:!1})}),{crossOrigin:"anonymous"})},getCanvasImage(){const e=this.canvasControl;e.viewportTransform=[this.imgWidth/this.canvasWidth,0,0,this.imgHeight/this.canvasHeight,0,0];const t=e.toDataURL({format:"png",quality:1,width:this.imgWidth,height:this.imgHeight});return e.viewportTransform=[1,0,0,1,0,0],(0,u.r)(t)},clearCanvasImage(){const e=this.canvasControl;e.clear(),this.states=[],this.beginState={},this.count=0},randomPrompt(){},createPrompt(){}},mounted(){const e=this.canvasHeight=this.$refs.canvasContainerRef.offsetHeight,t=this.canvasWidth=this.$refs.canvasContainerRef.offsetWidth,a=this.canvasControl=new p.fabric.Canvas(this.$refs.canvasRef,{width:t,height:e}),s=()=>{this.states.push(a.toJSON()),0===this.count&&(this.beginState=this.states[0]),this.states.length>20&&this.states.shift(),this.count++};a.on("after:render",(()=>{this.recordSteps&&s()}))}},d=g,h=a(1656),f=(0,h.A)(d,s,o,!1,null,"6b70953a",null),b=f.exports},7495:function(e,t,a){a.r(t),a.d(t,{default:function(){return h}});var s=function(){var e=this,t=e._self._c;return t("div",[t("h2",{staticClass:"generator-name"},[e._v("Refine Product Image")]),t("el-row",{attrs:{type:"flex",justify:"space-between"}},[t("el-col",{staticClass:"generate-conditon",attrs:{span:9}},[t("el-form",{ref:"form1",attrs:{model:e.formValues,rules:e.formRules,"hide-required-asterisk":"",size:"small","label-position":"left"},on:{submit:function(e){e.stopPropagation()}}},[t("FormBlock",{staticClass:"update-block",attrs:{prop:"imageURL"}},[t("h4",{staticClass:"update-title"},[e._v("Product")]),t("UploadImage",{attrs:{"upload-position":"center","upload-tips":"Upload photos","image-size":"306px"},model:{value:e.formValues.imageURL,callback:function(t){e.$set(e.formValues,"imageURL",t)},expression:"formValues.imageURL"}})],1),t("ViewBlock",[t("p",{staticClass:"bottom-buttons bottom-buttons--left"},[t("el-button",{staticClass:"generate-button",attrs:{type:"primary"},on:{click:e.generateImages}},[e._v(" Generate with one click ")])],1),t("el-form-item",{attrs:{prop:"agree"}},[t("div",{staticClass:"checkbox-wrap"},[t("el-checkbox",{model:{value:e.formValues.agree,callback:function(t){e.$set(e.formValues,"agree",t)},expression:"formValues.agree"}},[e._v(" Agree to the ")]),t("UserRulesButton",{attrs:{checked:e.formValues.agree}})],1)])],1)],1)],1),t("el-col",{staticClass:"generate-images",attrs:{span:15}},[t("el-row",{attrs:{type:"flex",justify:"center"}},[t("el-skeleton",{staticClass:"generated-image",attrs:{loading:e.generateLoading,animated:e.generateLoading},scopedSlots:e._u([{key:"template",fn:function(){return[t("el-skeleton-item",{attrs:{variant:"image"}})]},proxy:!0}])},[[e.generatedList.length>0?t("CompareImage",{attrs:{src:e.selectedIamgeUrl}}):e._e()]],2)],1),t("ViewBlock",{staticClass:"generated-list-block"},[t("el-row",{staticClass:"generated-list-content",attrs:{type:"flex"}},[t("el-col",{staticClass:"bottom-buttons bottom-buttons--right",attrs:{span:24}},[t("el-button",{staticClass:"prompt-button",attrs:{size:"small"},on:{click:e.createPrompt}},[e._v(" Download ")])],1)],1)],1)],1)],1)],1)},o=[],r=a(2911),l=a(7497),i=a(5702),n=a(1410),c=a(5090),m=a(3188),p={components:{FormBlock:r.A,UploadImage:l.A,ViewBlock:i.A,UserRulesButton:n.A,CompareImage:c.A},data(){const e=(e,t,a)=>{if(!t)return a(new Error("Agree to AI Privacy Agreement"));a()};return{formValues:{imageURL:"",batchSize:1,agree:!1},formRules:{imageURL:[{required:!0,message:"Upload photos"}],batchSize:[{required:!0,message:"Select quantity"}],agree:[{validator:e}]},numberOptions:[1,2,3,4],generateLoading:!1,generatedList:[],selectedIamgeUrl:""}},methods:{generateImages(){this.$refs.form1.validate((e=>{if(e){const{imageURL:e}=this.formValues;this.generateLoading=!0,(0,m.np)({imageURL:e}).then((e=>{console.log(e),this.generatedList=Object.values(e||{}),this.selectedIamgeUrl=this.generatedList[0]||"",this.generateLoading=!1})).catch((()=>{}))}}))},randomPrompt(){},createPrompt(){}}},u=p,g=a(1656),d=(0,g.A)(u,s,o,!1,null,"55109794",null),h=d.exports}}]);