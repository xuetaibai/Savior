(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[868],{71100:function(B){B.exports={baseView:"baseView___1OVH6",left:"left___2sTav",right:"right___6rvTG",avatar_title:"avatar_title___2KHNu",avatar:"avatar___Bi4Qh",button_view:"button_view___1Xmht",area_code:"area_code___3B71N",phone_number:"phone_number___153zl"}},41736:function(B){B.exports={standardList:"standardList____eOhR",headerInfo:"headerInfo___3GrHd",listContent:"listContent___141WU",listContentItem:"listContentItem___pClZn",extraContentSearch:"extraContentSearch___lsWbj",listCard:"listCard___2SlS8",standardListForm:"standardListForm___14iw1",formResult:"formResult___3sZ6B"}},37113:function(B){B.exports={standardList:"standardList___fsbpX",headerInfo:"headerInfo___3WSN_",listContent:"listContent___6WAHL",listContentItem:"listContentItem___navQr",extraContentSearch:"extraContentSearch___3e2Zl",listCard:"listCard___37CgA",standardListForm:"standardListForm___Sq-l_",formResult:"formResult___8fQmt"}},32108:function(B){B.exports={main:"main___1jT5e",leftMenu:"leftMenu___1QY4v",right:"right___2a0zh",title:"title___2n0kH"}},38933:function(B,pe,n){"use strict";n.r(pe),n.d(pe,{default:function(){return st}});var F=n(8870),C=n(2824),mt=n(30887),fe=n(99210),Z=n(67294),Ee=n(21349),ht=n(34792),Y=n(48086),j=n(3182),Ze=n(94043),o=n.n(Ze),Ce=n(952),w=n(5966),Se=n(52688),y=n(48971);function Be(){return G.apply(this,arguments)}function G(){return G=(0,j.Z)(o().mark(function u(){return o().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,y.WY)("/api/currentuser/",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("access"))}}));case 1:case"end":return t.stop()}},u)})),G.apply(this,arguments)}function pt(){return k.apply(this,arguments)}function k(){return k=_asyncToGenerator(_regeneratorRuntime.mark(function u(){return _regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",request("/api/currentuser/",{method:"POST",headers:{Authorization:"Bearer ".concat(localStorage.getItem("access"))}}));case 1:case"end":return t.stop()}},u)})),k.apply(this,arguments)}function ft(){return H.apply(this,arguments)}function H(){return H=_asyncToGenerator(_regeneratorRuntime.mark(function u(){return _regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",request("/api/users"));case 1:case"end":return t.stop()}},u)})),H.apply(this,arguments)}var be=n(71100),T=n.n(be),e=n(85893),we=function(r){var t=r.avatar;return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{className:T().avatar_title,children:"\u5934\u50CF"}),(0,e.jsx)("div",{className:T().avatar,children:(0,e.jsx)("img",{src:t,alt:"avatar"})})]})},De=function(){var r=(0,y.QT)(function(){return Be()}),t=r.data,a=r.loading,s=function(){if(t){if(t.avatar)return t.avatar;var f="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png";return f}return""},g=function(){var m=(0,j.Z)(o().mark(function f(){return o().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:Y.default.warning("\u8BF7\u8BBF\u95EE\u7BA1\u7406\u540E\u53F0\u4FEE\u6539\u4E2A\u4EBA\u4FE1\u606F!");case 1:case"end":return d.stop()}},f)}));return function(){return m.apply(this,arguments)}}();return(0,e.jsx)("div",{className:T().baseView,children:a?null:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{className:T().left,children:(0,e.jsxs)(Ce.ZP,{layout:"vertical",onFinish:g,submitter:{resetButtonProps:{style:{display:"none"}},submitButtonProps:{children:"\u66F4\u65B0\u57FA\u672C\u4FE1\u606F"}},initialValues:(0,F.Z)({},t),hideRequiredMark:!0,children:[(0,e.jsx)(w.Z,{width:"md",name:"username",label:"\u7528\u6237\u540D",disabled:!0,rules:[{required:!0}]}),(0,e.jsx)(w.Z,{width:"md",name:"name",label:"\u6635\u79F0",disabled:!0,rules:[{required:!0}]}),(0,e.jsx)(w.Z,{width:"md",name:"email",label:"\u90AE\u7BB1",disabled:!0,rules:[{required:!0}]}),(0,e.jsx)(Se.Z,{name:"autosentmail",label:"\u81EA\u52A8\u90AE\u4EF6",required:!0,tooltip:"\u81EA\u52A8\u53D1\u9001\u6E17\u900F\u6D4B\u8BD5\u62A5\u544A\u81F3\u90AE\u7BB1\uFF01",disabled:!0})]})}),(0,e.jsx)("div",{className:T().right,children:(0,e.jsx)(we,{avatar:s()})})]})})},Pe=De,vt=n(58024),ve=n(39144),gt=n(89032),D=n(15746),Ft=n(54421),b=n(38272),yt=n(94233),Ae=n(51890),jt=n(57663),I=n(71577),xt=n(71194),ge=n(5644),Fe=n(49101),Et=n(57106),J=n(99683),Zt=n(43185),Te=n(11324),X=n(37476),Ie=n(10927),R=n(90672),Re=n(37113),N=n.n(Re),Le=function(r){var t=r.done,a=r.visible,s=r.current,g=r.onDone,m=r.onSubmit,f=r.children;if(!a)return null;var v={beforeUpload:function(i){return i.type!=="image/png"&&Y.default.error("".concat(i.name," is not a png file")),i.type==="image/png"?!0:Te.Z.LIST_IGNORE},onChange:function(i){var l=new FormData;return l.append("img",i.fileList[0].file),console.log(l),l}};return(0,e.jsx)(X.Z,{visible:a,title:t?null:"".concat(s?"\u7F16\u8F91":"\u6DFB\u52A0\u9879\u76EE"),className:N().standardListForm,width:640,onFinish:function(){var d=(0,j.Z)(o().mark(function i(l){return o().wrap(function(S){for(;;)switch(S.prev=S.next){case 0:m(l);case 1:case"end":return S.stop()}},i)}));return function(i){return d.apply(this,arguments)}}(),initialValues:s,submitter:{render:function(i,l){return t?null:l}},trigger:(0,e.jsx)(e.Fragment,{children:f}),modalProps:{onCancel:function(){return g()},destroyOnClose:!0,bodyStyle:t?{padding:"72px 0"}:{}},children:t?(0,e.jsx)(J.ZP,{status:"success",title:"\u64CD\u4F5C\u6210\u529F",subTitle:"\u4E00\u7CFB\u5217\u7684\u4FE1\u606F\u63CF\u8FF0\uFF0C\u5F88\u77ED\u540C\u6837\u4E5F\u53EF\u4EE5\u5E26\u6807\u70B9\u3002",extra:(0,e.jsx)(I.Z,{type:"primary",onClick:g,children:"\u77E5\u9053\u4E86"}),className:N().formResult}):(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(Ie.Z,(0,F.Z)((0,F.Z)({},v),{},{label:"\u4E0A\u4F20",name:"project_logo"})),(0,e.jsx)(w.Z,{name:"project_center",label:"\u9879\u76EE\u540D\u79F0",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u9879\u76EE\u540D\u79F0"}],placeholder:"\u8BF7\u8F93\u5165"}),(0,e.jsx)(R.Z,{name:"project_description",label:"\u9879\u76EE\u63CF\u8FF0",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u81F3\u5C11\u4E94\u4E2A\u5B57\u7B26\u7684\u9879\u76EE\u63CF\u8FF0\uFF01",min:5}],placeholder:"\u8BF7\u8F93\u5165\u81F3\u5C11\u4E94\u4E2A\u5B57\u7B26"})]})})},ze=Le,q=n(91896);function Me(u){return _.apply(this,arguments)}function _(){return _=(0,j.Z)(o().mark(function u(r){return o().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,y.WY)("/api/project/",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("access"))}}));case 1:case"end":return a.stop()}},u)})),_.apply(this,arguments)}var Ne=function(r){for(var t in r)typeof r[t]=="undefined"&&(r[t]="");return r};function Oe(u){var r=Ne(u),t=new FormData;for(var a in r)t.append(a,r[a]);return t}function We(u){return ee.apply(this,arguments)}function ee(){return ee=(0,j.Z)(o().mark(function u(r){var t;return o().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return t=(0,q.Z)({},r),s.abrupt("return",(0,y.WY)("/api/project/",{method:"POST",headers:{Authorization:"Bearer ".concat(localStorage.getItem("access"))},data:Oe(r)}));case 2:case"end":return s.stop()}},u)})),ee.apply(this,arguments)}function Ct(){return te.apply(this,arguments)}function te(){return te=_asyncToGenerator(_regeneratorRuntime.mark(function u(){return _regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",request("/api/project/",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("access"))}}));case 1:case"end":return t.stop()}},u)})),te.apply(this,arguments)}function Ve(u){return re.apply(this,arguments)}function re(){return re=(0,j.Z)(o().mark(function u(r){return o().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,y.WY)("/api/post_fake_list",{method:"POST",data:(0,F.Z)((0,F.Z)({},r),{},{method:"delete"})}));case 1:case"end":return a.stop()}},u)})),re.apply(this,arguments)}function St(u){return ae.apply(this,arguments)}function ae(){return ae=_asyncToGenerator(_regeneratorRuntime.mark(function u(r){return _regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",request("/api/post_fake_list",{method:"POST",data:_objectSpread(_objectSpread({},r),{},{method:"post"})}));case 1:case"end":return a.stop()}},u)})),ae.apply(this,arguments)}function $e(u){return ne.apply(this,arguments)}function ne(){return ne=(0,j.Z)(o().mark(function u(r){return o().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,y.WY)("/api/post_fake_list",{method:"POST",data:(0,F.Z)((0,F.Z)({},r),{},{method:"update"})}));case 1:case"end":return a.stop()}},u)})),ne.apply(this,arguments)}var Bt=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:100;return new Promise(function(t){setTimeout(function(){t(!0)},r)})},Ue=function(){var r=(0,Z.useState)(!1),t=(0,C.Z)(r,2),a=t[0],s=t[1],g=(0,Z.useState)(!1),m=(0,C.Z)(g,2),f=m[0],v=m[1],d=(0,Z.useState)(void 0),i=(0,C.Z)(d,2),l=i[0],p=i[1],S=(0,y.QT)(function(){return Me({count:50})}),V=S.data,$=S.loading,U=S.mutate,L=(0,y.QT)(function(x,c){return x==="remove"?Ve(c):x==="update"?$e(c):We(c)},{manual:!0,onSuccess:function(c){U(c)}}),K=L.run,Q=V||[],oe={showSizeChanger:!0,showQuickJumper:!0,pageSize:5,total:Q.length},je=function(c){v(!0),p(c)},z=function(c){K("remove",{id:c})},de=function(c){ge.Z.confirm({title:"\u5220\u9664\u4EFB\u52A1",content:"\u786E\u5B9A\u5220\u9664\u8BE5\u4EFB\u52A1\u5417\uFF1F",okText:"\u786E\u8BA4",cancelText:"\u53D6\u6D88",onOk:function(){return z(c.id)}})},ce=function(){s(!1),v(!1),p({})},me=function(c){s(!0);var M=c!=null&&c.id?"update":"add";K(M,c)};return(0,e.jsxs)("div",{children:[(0,e.jsx)("div",{className:N().standardList,children:(0,e.jsxs)(ve.Z,{className:N().listCard,bordered:!1,style:{marginTop:24},bodyStyle:{padding:"0 32px 40px 32px"},children:[(0,e.jsxs)(I.Z,{type:"dashed",onClick:function(){Y.default.warning("\u8BF7\u8BBF\u95EE\u7BA1\u7406\u540E\u53F0\u4FEE\u6539\u9879\u76EE\u8BBE\u7F6E!(\u4E3B\u8981\u56E0\u4E3A\u4F5C\u8005\u4E0D\u4F1A\u5199)")},style:{width:"100%",marginBottom:8},children:[(0,e.jsx)(Fe.Z,{}),"\u6DFB\u52A0\u9879\u76EE"]}),(0,e.jsx)(b.ZP,{size:"large",rowKey:"id",loading:$,pagination:oe,dataSource:Q,renderItem:function(c){return(0,e.jsxs)(b.ZP.Item,{children:[(0,e.jsx)(D.Z,{span:10,children:(0,e.jsx)(b.ZP.Item.Meta,{avatar:(0,e.jsx)(Ae.C,{src:c.project_logo,shape:"square",size:"large"}),title:c.project_center,description:c.project_description})}),(0,e.jsx)(D.Z,{span:6,children:(0,e.jsx)(b.ZP.Item.Meta,{title:"\u9879\u76EE\u6A21\u677F",description:c.project_template_name})})]})}})]})}),(0,e.jsx)(ze,{done:a,visible:f,current:l,onDone:ce,onSubmit:me})]})},Ke=Ue,ye=n(64317),Qe=n(41736),P=n.n(Qe),Ye=function(r){var t=r.done,a=r.visible,s=r.current,g=r.onDone,m=r.onSubmit,f=r.children;return a?(0,e.jsx)(X.Z,{visible:a,title:"\u6DFB\u52A0\u6F0F\u6D1E\u6A21\u677F",className:P().standardListForm,width:500,onFinish:function(){var v=(0,j.Z)(o().mark(function d(i){return o().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:m(i);case 1:case"end":return p.stop()}},d)}));return function(d){return v.apply(this,arguments)}}(),initialValues:s,submitter:{render:function(d,i){return t?null:i}},trigger:(0,e.jsx)(e.Fragment,{children:f}),modalProps:{onCancel:function(){return g()},destroyOnClose:!0,bodyStyle:t?{padding:"72px 0"}:{}},children:t?(0,e.jsx)(J.ZP,{status:"success",title:"\u64CD\u4F5C\u6210\u529F",subTitle:"\u4E00\u7CFB\u5217\u7684\u4FE1\u606F\u63CF\u8FF0\uFF0C\u5F88\u77ED\u540C\u6837\u4E5F\u53EF\u4EE5\u5E26\u6807\u70B9\u3002",extra:(0,e.jsx)(I.Z,{type:"primary",onClick:g,children:"\u77E5\u9053\u4E86"}),className:P().formResult}):(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(ye.Z,{name:"program_type",label:"\u6F0F\u6D1E\u7C7B\u578B",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u6F0F\u6D1E\u7C7B\u578B"}],options:[{label:"WEB\u6F0F\u6D1E",value:"WEB\u6F0F\u6D1E"},{label:"\u79FB\u52A8\u5BA2\u6237\u7AEF\u6F0F\u6D1E",value:"\u79FB\u52A8\u5BA2\u6237\u7AEF\u6F0F\u6D1E"},{label:"PC\u5BA2\u6237\u7AEF\u6F0F\u6D1E",value:"PC\u5BA2\u6237\u7AEF\u6F0F\u6D1E"},{label:"\u667A\u80FD\u786C\u4EF6",value:"\u667A\u80FD\u786C\u4EF6"},{label:"\u5176\u5B83",value:"\u5176\u5B83"}],placeholder:"\u8BF7\u9009\u62E9\u6F0F\u6D1E\u7C7B\u578B"}),(0,e.jsx)(w.Z,{name:"program_vul_name",label:"\u6F0F\u6D1E\u540D\u79F0",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u6F0F\u6D1E\u540D\u79F0"}],placeholder:"\u8BF7\u8F93\u5165"}),(0,e.jsx)(R.Z,{name:"program_describe",label:"\u6F0F\u6D1E\u63CF\u8FF0",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u81F3\u5C11\u4E94\u4E2A\u5B57\u7B26\u7684\u6F0F\u6D1E\u63CF\u8FF0\uFF01",min:5}],placeholder:"\u8BF7\u8F93\u5165\u81F3\u5C11\u4E94\u4E2A\u5B57\u7B26"}),(0,e.jsx)(R.Z,{name:"program_repair",label:"\u4FEE\u590D\u5EFA\u8BAE",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u81F3\u5C11\u4E94\u4E2A\u5B57\u7B26\u7684\u4FEE\u590D\u5EFA\u8BAE\uFF01",min:5}],placeholder:"\u8BF7\u8F93\u5165\u81F3\u5C11\u4E94\u4E2A\u5B57\u7B26"})]})}):null},Ge=Ye,bt=n(13062),ke=n(71230),He=function(r){var t=r.done,a=r.visible,s=r.current,g=r.onDone,m=r.onSubmit,f=r.children;return a?(0,e.jsx)(X.Z,{visible:a,title:"\u7F16\u8F91\u6F0F\u6D1E\u6A21\u677F",className:P().standardListForm,width:500,onFinish:function(){var v=(0,j.Z)(o().mark(function d(i){return o().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:m(i);case 1:case"end":return p.stop()}},d)}));return function(d){return v.apply(this,arguments)}}(),initialValues:s,submitter:{render:function(d,i){return t?null:i}},trigger:(0,e.jsx)(e.Fragment,{children:f}),modalProps:{onCancel:function(){return g()},destroyOnClose:!0,bodyStyle:t?{padding:"72px 0"}:{}},children:t?(0,e.jsx)(J.ZP,{status:"success",title:"\u64CD\u4F5C\u6210\u529F",subTitle:"\u4E00\u7CFB\u5217\u7684\u4FE1\u606F\u63CF\u8FF0\uFF0C\u5F88\u77ED\u540C\u6837\u4E5F\u53EF\u4EE5\u5E26\u6807\u70B9\u3002",extra:(0,e.jsx)(I.Z,{type:"primary",onClick:g,children:"\u77E5\u9053\u4E86"}),className:P().formResult}):(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(ke.Z,{children:[(0,e.jsx)(D.Z,{flex:2,children:(0,e.jsx)(w.Z,{name:"id",label:"\u7F16\u53F7",width:"xs",disabled:!0,placeholder:"\u81EA\u52A8\u751F\u6210"})}),(0,e.jsx)(D.Z,{flex:5,children:(0,e.jsx)(ye.Z,{name:"program_type",label:"\u6F0F\u6D1E\u7C7B\u578B",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u6F0F\u6D1E\u7C7B\u578B"}],options:[{label:"WEB\u6F0F\u6D1E",value:"WEB\u6F0F\u6D1E"},{label:"\u79FB\u52A8\u5BA2\u6237\u7AEF\u6F0F\u6D1E",value:"\u79FB\u52A8\u5BA2\u6237\u7AEF\u6F0F\u6D1E"},{label:"PC\u5BA2\u6237\u7AEF\u6F0F\u6D1E",value:"PC\u5BA2\u6237\u7AEF\u6F0F\u6D1E"},{label:"\u667A\u80FD\u786C\u4EF6",value:"\u667A\u80FD\u786C\u4EF6"},{label:"\u5176\u5B83",value:"\u5176\u5B83"}],placeholder:"\u8BF7\u9009\u62E9\u6F0F\u6D1E\u7C7B\u578B"})})]}),(0,e.jsx)(w.Z,{name:"program_vul_name",label:"\u6F0F\u6D1E\u540D\u79F0",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u6F0F\u6D1E\u540D\u79F0"}],placeholder:"\u8BF7\u8F93\u5165"}),(0,e.jsx)(R.Z,{name:"program_describe",label:"\u6F0F\u6D1E\u63CF\u8FF0",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u81F3\u5C11\u4E94\u4E2A\u5B57\u7B26\u7684\u6F0F\u6D1E\u63CF\u8FF0\uFF01",min:5}],placeholder:"\u8BF7\u8F93\u5165\u81F3\u5C11\u4E94\u4E2A\u5B57\u7B26"}),(0,e.jsx)(R.Z,{name:"program_repair",label:"\u4FEE\u590D\u5EFA\u8BAE",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u81F3\u5C11\u4E94\u4E2A\u5B57\u7B26\u7684\u4FEE\u590D\u5EFA\u8BAE\uFF01",min:5}],placeholder:"\u8BF7\u8F93\u5165\u81F3\u5C11\u4E94\u4E2A\u5B57\u7B26"})]})}):null},Je=He;function O(u){return ue.apply(this,arguments)}function ue(){return ue=(0,j.Z)(o().mark(function u(r){return o().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,y.WY)("/api/program/",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("access"))},params:r}));case 1:case"end":return a.stop()}},u)})),ue.apply(this,arguments)}function Xe(u){return se.apply(this,arguments)}function se(){return se=(0,j.Z)(o().mark(function u(r){var t;return o().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return t=(0,q.Z)({},r),s.abrupt("return",(0,y.WY)("/api/program/",{method:"POST",headers:{Authorization:"Bearer ".concat(localStorage.getItem("access"))},data:(0,F.Z)((0,F.Z)({},t),{},{method:"post"})}));case 2:case"end":return s.stop()}},u)})),se.apply(this,arguments)}function qe(u){return ie.apply(this,arguments)}function ie(){return ie=(0,j.Z)(o().mark(function u(r){return o().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,y.WY)("/api/program/"+r.id+"/",{method:"DELETE",headers:{Authorization:"Bearer ".concat(localStorage.getItem("access"))}}));case 1:case"end":return a.stop()}},u)})),ie.apply(this,arguments)}function _e(u){return le.apply(this,arguments)}function le(){return le=(0,j.Z)(o().mark(function u(r){var t;return o().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return t=(0,q.Z)({},r),console.log(t),s.abrupt("return",(0,y.WY)("/api/program/"+r.id+"/",{method:"PUT",headers:{Authorization:"Bearer ".concat(localStorage.getItem("access"))},data:(0,F.Z)((0,F.Z)({},t),{},{method:"put"})}));case 3:case"end":return s.stop()}},u)})),le.apply(this,arguments)}var et=n(11553),tt=function(){var r=(0,Z.useState)(!1),t=(0,C.Z)(r,2),a=t[0],s=t[1],g=(0,Z.useState)(!1),m=(0,C.Z)(g,2),f=m[0],v=m[1],d=(0,Z.useState)(!1),i=(0,C.Z)(d,2),l=i[0],p=i[1],S=(0,Z.useState)(void 0),V=(0,C.Z)(S,2),$=V[0],U=V[1],L=(0,y.QT)(function(){return O()}),K=L.data,Q=L.loading,oe=L.mutate,je=(0,y.QT)(function(E,h){if(E==="remove")return qe(h),O();if(E==="update")return _e(h),O();if(E==="add")return Xe(h),O()},{manual:!0,onSuccess:function(h){oe(h)}}),z=je.run,de=K||[],ce={showSizeChanger:!0,showQuickJumper:!0,pageSize:20,total:de.length},me=function(h){p(!0),U(h)},x=function(h){z("remove",{id:h})},c=function(h){ge.Z.confirm({title:"\u5220\u9664\u4EFB\u52A1",content:"\u786E\u5B9A\u5220\u9664\u8BE5\u4EFB\u52A1\u5417\uFF1F",okText:"\u786E\u8BA4",cancelText:"\u53D6\u6D88",onOk:function(){return x(h.id)}})},M=function(){s(!1),v(!1),p(!1),U({})},it=function(h){s(!0);var A="add";z(A,h)},lt=function(h){s(!0);var A="update";z(A,h)},ot=(0,Z.useState)([]),xe=(0,C.Z)(ot,2),dt=xe[0],ct=xe[1];return(0,e.jsxs)("div",{children:[(0,e.jsx)("div",{className:P().standardList,children:(0,e.jsxs)(ve.Z,{className:P().listCard,bordered:!1,style:{marginTop:24},bodyStyle:{padding:"0 32px 40px 32px"},children:[(0,e.jsxs)(I.Z,{type:"dashed",onClick:function(){v(!0)},style:{width:"100%",marginBottom:8},children:[(0,e.jsx)(Fe.Z,{}),"\u6DFB\u52A0\u6F0F\u6D1E\u6A21\u677F"]}),(0,e.jsx)(b.ZP,{size:"large",rowKey:"id",loading:Q,pagination:ce,dataSource:de,renderItem:function(h){return(0,e.jsxs)(b.ZP.Item,{actions:[(0,e.jsx)("a",{onClick:function(he){he.preventDefault(),me(h)},children:"\u7F16\u8F91"},"edit"),(0,e.jsx)("a",{onClick:function(he){he.preventDefault(),c(h)},children:"\u5220\u9664"},"delete")],expandable:{expandedRowKeys:dt,onExpandedRowsChange:ct},children:[(0,e.jsx)(D.Z,{span:4,children:(0,e.jsx)(b.ZP.Item.Meta,{title:h.program_type,description:(0,e.jsx)("strong",{children:h.program_vul_name})})}),(0,e.jsx)(D.Z,{span:12,children:(0,e.jsx)(b.ZP.Item.Meta,{title:"\u4FEE\u590D\u5EFA\u8BAE\uFF1A",description:(0,e.jsx)(et.Z,{text:h.program_repair,maxLine:"3"})})})]})}})]})}),(0,e.jsx)(Ge,{done:a,visible:f,current:$,onDone:M,onSubmit:it}),(0,e.jsx)(Je,{done:a,visible:l,current:$,onDone:M,onSubmit:lt})]})},rt=tt,at=n(32108),W=n.n(at),nt=fe.Z.Item,ut=function(){var r={base:"\u57FA\u672C\u8BBE\u7F6E",project:"\u9879\u76EE\u8BBE\u7F6E",program:"\u6574\u6539\u8BBE\u7F6E"},t=(0,Z.useState)({mode:"inline",selectKey:"base"}),a=(0,C.Z)(t,2),s=a[0],g=a[1],m=(0,Z.useRef)(),f=function(){requestAnimationFrame(function(){if(!!m.current){var l="inline",p=m.current.offsetWidth;m.current.offsetWidth<641&&p>400&&(l="horizontal"),window.innerWidth<768&&p>400&&(l="horizontal"),g((0,F.Z)((0,F.Z)({},s),{},{mode:l}))}})};(0,Z.useLayoutEffect)(function(){return m.current&&(window.addEventListener("resize",f),f()),function(){window.removeEventListener("resize",f)}},[m.current]);var v=function(){return Object.keys(r).map(function(l){return(0,e.jsx)(nt,{children:r[l]},l)})},d=function(){var l=s.selectKey;switch(l){case"base":return(0,e.jsx)(Pe,{});case"project":return(0,e.jsx)(Ke,{});case"program":return(0,e.jsx)(rt,{});default:return null}};return(0,e.jsx)(Ee.Z,{children:(0,e.jsxs)("div",{className:W().main,ref:function(l){l&&(m.current=l)},children:[(0,e.jsx)("div",{className:W().leftMenu,children:(0,e.jsx)(fe.Z,{mode:s.mode,selectedKeys:[s.selectKey],onClick:function(l){var p=l.key;g((0,F.Z)((0,F.Z)({},s),{},{selectKey:p}))},children:v()})}),(0,e.jsxs)("div",{className:W().right,children:[(0,e.jsx)("div",{className:W().title,children:r[s.selectKey]}),d()]})]})})},st=ut}}]);