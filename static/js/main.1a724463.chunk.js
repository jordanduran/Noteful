(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{102:function(e,t,a){},205:function(e,t,a){},206:function(e,t,a){},207:function(e,t,a){},208:function(e,t,a){},209:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(81),l=a.n(r),c=a(24),i=a(25),s=a(11),u=(a(95),a(43)),d=a(4),m=a(5),f=a(7),h=a(6),p=a(8),v=a(15),N=a(13),E=a(86),b=a(82);a(98);function g(e){e.tag,e.className,e.childrenm;var t=Object(b.a)(e,["tag","className","childrenm"]);return o.a.createElement(e.tag,Object(E.a)({className:["NavCircleButton",e.className].join(" ")},t),e.children)}g.defaultProps={tag:"a"};var y=o.a.createContext({notes:[],folders:[],deleteNote:function(){},addFolder:function(){},addNote:function(){}}),j=(a(99),function(e){function t(){return Object(d.a)(this,t),Object(f.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.context,t=e.notes,a=e.folders;return o.a.createElement("div",{className:"NoteListNav"},o.a.createElement("ul",{className:"NoteListNav__list"},a.map(function(e){return o.a.createElement("li",{key:e.id},o.a.createElement(s.c,{className:"NoteListNav__folder-link",to:"/Noteful/folder/".concat(e.id)},o.a.createElement("span",{className:"NoteListNav__num-notes"},function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return e.filter(function(e){return e.folderId===parseInt(t,10)}).length}(t,e.id)),e.title))})),o.a.createElement("div",{className:"NoteListNav__button-wrapper"},o.a.createElement(g,{tag:s.b,to:"/Noteful/add-folder",type:"button",className:"NoteListNav__add-folder-button"},o.a.createElement(N.a,{icon:"plus"}),o.a.createElement("br",null),"Folder")))}}]),t}(n.Component));j.contextType=y;var O=j,k=(a(102),function(e){function t(){return Object(d.a)(this,t),Object(f.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.context.folders;return o.a.createElement("div",{className:"NotePageNav"},o.a.createElement(g,{tag:"button",role:"link",onClick:function(){return e.props.history.goBack()},className:"NotePageNav__back-button"},o.a.createElement(N.a,{icon:"chevron-left"}),o.a.createElement("br",null),"Back"),t&&o.a.createElement("h3",{className:"NotePageNav__folder-name"},t.title))}}]),t}(n.Component));k.contextType=y;var _=k,F=a(85),C={API_ENDPOINT:"https://afternoon-eyrie-12522.herokuapp.com"},S=(a(205),function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(f.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).handleClickDelete=function(e){e.preventDefault();var t=a.props.id;fetch("".concat(C.API_ENDPOINT,"/notes/").concat(t),{method:"DELETE",headers:{"content-type":"application/json"}}).then(function(e){if(!e.ok)return e.json().then(function(e){return Promise.reject(e)})}).then(function(){a.context.deleteNote(t),a.props.onDeleteNote(t),a.props.history.push("/")}).catch(function(e){console.error({error:e})})},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=e.name,a=e.id,n=e.modified;return o.a.createElement("div",{className:"Note"},o.a.createElement("h2",{className:"Note__title"},o.a.createElement(s.b,{to:"/note/".concat(a)},t)),o.a.createElement("button",{className:"Note__delete",type:"button",onClick:this.handleClickDelete},o.a.createElement(N.a,{icon:"trash-alt"})," ","remove"),o.a.createElement("div",{className:"Note__dates"},o.a.createElement("div",{className:"Note__dates-modified"},"Modified"," ",o.a.createElement("span",{className:"Date"},Object(F.format)(n,"Do MMM YYYY")))))}}]),t}(o.a.Component));S.defaultProps={onDeleteNote:function(){}},S.contextType=y;a(206);var w=function(e){function t(){return Object(d.a)(this,t),Object(f.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.context.notes,a=parseInt(this.props.match.params.folderId,10),n=t.filter(function(e){return a?e.folder_id===a:e});return console.log(n),this.props.err?o.a.createElement("h3",null,this.props.error):o.a.createElement("section",{className:"NoteListMain"},o.a.createElement("ul",null,n.map(function(t){return o.a.createElement("li",{key:t.id},o.a.createElement(S,{id:t.id,name:t.note_name,modified:t.date_modified,history:e.props.history,match:e.props.match}))})),o.a.createElement("div",{className:"NoteListMain__button-container"},o.a.createElement(g,{tag:s.b,to:"/Noteful/add-note",type:"button",className:"NoteListMain__add-note-button"},o.a.createElement(N.a,{icon:"plus"}),o.a.createElement("br",null),"Note")))}}]),t}(n.Component);w.contextType=y;var M=w;a(207);function x(e){return o.a.createElement("section",{className:"NotePageMain"},o.a.createElement(S,{id:e.note.id,name:e.note.note_name,modified:e.note.date_modified}),o.a.createElement("div",{className:"NotePageMain__content"},e.note.content.split(/\n \r|\n/).map(function(e,t){return o.a.createElement("p",{key:t},e)})))}function P(e){return e.hasError?o.a.createElement("h3",{className:"error"},e.message):o.a.createElement(o.a.Fragment,null)}x.defaultProps={note:{content:""}};var I=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(f.a)(this,Object(h.a)(t).call(this,e))).state={name:"",folderValid:!1,validMessage:""},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"updateFolder",value:function(e){var t=this;this.setState({name:e},function(){t.validateFolder(e)})}},{key:"validateFolder",value:function(e){var t=this.state.validMessage,a=!1;0===(e=e.trim()).length?(t="Folder Name is required",a=!0):e.length<3?(t="Folder Name must be at least 3 characters",a=!0):(t="",a=!1),this.setState({validMessage:t,folderValid:!a})}},{key:"addFolderRequest",value:function(e,t){var a=this;fetch("https://afternoon-eyrie-12522.herokuapp.com/folders",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({title:e})}).then(function(e){if(!e.ok)throw new Error("Unable to add folder to database");return e.json()}).then(function(e){t(e),a.props.history.push("/Noteful")}).catch(function(t){return console.log(e,t)})}},{key:"render",value:function(){var e=this;console.log(this.props);var t=this.context.addFolder;return this.handleSubmit=function(a){a.preventDefault(),console.log(t),e.addFolderRequest(e.state.name,t)},o.a.createElement("form",{onSubmit:function(t){return e.handleSubmit(t)}},o.a.createElement("label",null,"Add Folder:",o.a.createElement("input",{onChange:function(t){return e.updateFolder(t.target.value)},type:"text",name:"addFolder",id:"addFolder"})),o.a.createElement(P,{hasError:!this.state.folderValid,message:this.state.validMessage}),o.a.createElement("button",{type:"submit",disabled:!this.state.folderValid},"Submit"))}}]),t}(n.Component);I.contextType=y;var D=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(f.a)(this,Object(h.a)(t).call(this,e))).state={noteName:"",noteContent:"",folder:"",folderId:"",validNoteMessage:"",validNoteName:!1,validContentMessage:"",validContent:!1,validFolderMessage:"",validFolder:!1,datetime:new Date},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"updateNoteName",value:function(e){var t=this;this.setState({noteName:e},function(){t.validateNoteName(e)})}},{key:"updateNoteContent",value:function(e){var t=this;this.setState({noteContent:e},function(){t.validateNoteContent(e)})}},{key:"updateFolder",value:function(e){var t=this;this.setState({folder:e},function(){t.validateFolder(e)})}},{key:"validateFolder",value:function(e){var t=this.state.validFolderMessage,a=!1;console.log(e),console.log(this.context.folders),void 0===this.context.folders.find(function(t){return t.title===e})?(t="Please select a valid folder",a=!0):(t="",a=!1),this.setState({validFolderMessage:t,validFolder:!a})}},{key:"validateNoteName",value:function(e){var t=this.state.validNoteMessage,a=!1;(e=e.trim()).length<3?(t="Please enter a note name at least 3 characters long",a=!0):(t="",a=!1),this.setState({validMessage:t,validNoteName:!a})}},{key:"validateNoteContent",value:function(e){var t=this.state.validContentMessage,a=!1;(e=e.trim()).length<3?(t="Please enter content that is at least 3 characters long",a=!0):(t="",a=!1),this.setState({validContentMessage:t,valdContent:!a})}},{key:"addNoteRequest",value:function(e,t,a,n,o){fetch("https://afternoon-eyrie-12522.herokuapp.com/notes",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({note_name:e,content:t,date_modified:n,folder_id:a})}).then(function(e){if(!e.ok)throw new Error("Couldn't add note. Sorry!");return e.json()}).then(function(e){return o(e)}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){var e=this;console.log(this.props),this.handleSubmit=function(a){a.preventDefault(),console.log(e.state.folder),e.state.folder?e.addNoteRequest(e.state.noteName,e.state.noteContent,e.context.folders.find(function(t){return t.title===e.state.folder}).id,new Date,t):e.addNoteRequest(e.state.noteName,e.state.noteContent,e.context.folders[0].id,new Date,t)};var t=this.context.addNote,a=this.context.folders.map(function(e){return console.log(e),o.a.createElement("option",{key:e.id,value:e.title},e.title)});return o.a.createElement("div",null,o.a.createElement("form",{onSubmit:function(t){return e.handleSubmit(t)}},o.a.createElement("label",null," Note Name",o.a.createElement("input",{placeholder:"Note name",onChange:function(t){return e.updateNoteName(t.target.value)}})),o.a.createElement("label",null," Note content",o.a.createElement("input",{placeholder:"Note content",onChange:function(t){return e.updateNoteContent(t.target.value)}})),o.a.createElement("label",null," Folder Name",o.a.createElement("select",{placeholder:"Folder name",onChange:function(t){return e.updateFolder(t.target.value)}},a)),o.a.createElement("button",{type:"submit"},"Submit")),this.state.validNoteName?o.a.createElement(o.a.Fragment,null):o.a.createElement("p",null,this.state.validNoteMessage),this.state.validContent?o.a.createElement(o.a.Fragment,null):o.a.createElement("p",null,this.state.validContentMessage),this.state.validFolder?o.a.createElement(o.a.Fragment,null," "):o.a.createElement("p",null,this.state.validFolderMessage))}}]),t}(n.Component);D.contextType=y;var T=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(f.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).state={hasError:null},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return this.state.hasError?o.a.createElement("main",{className:"error-page"},o.a.createElement("h1",null,"Something seems to have gone wrong"),o.a.createElement("p",null,"Try refresing the page")):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){console.error(e),this.setState({hasError:e})}}]),t}(o.a.Component),A=(a(208),function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(f.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).state={notes:[],folders:[]},a.deleteNote=function(e){var t=a.state.notes.filter(function(t){return t.id!==parseInt(e,10)});a.setState({notes:t})},a.addFolder=function(e){a.setState({folders:[].concat(Object(u.a)(a.state.folders),[e])})},a.addNote=function(e){a.setState({notes:[].concat(Object(u.a)(a.state.notes),[e])}),window.history.back()},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"getFolders",value:function(){var e=this;fetch("https://afternoon-eyrie-12522.herokuapp.com/folders").then(function(e){if(!e.ok)throw new Error("Opps! Something went wrong");return e.json()}).then(function(t){return e.setState({folders:t})}).catch(function(e){return o.a.createElement(M,{error:e})})}},{key:"getNotes",value:function(){var e=this;fetch("https://afternoon-eyrie-12522.herokuapp.com/notes").then(function(e){if(!e.ok)throw new Error("Oops! Something went wrong");return e.json()}).then(function(t){return e.setState({notes:t})}).catch(function(e){return o.a.createElement(M,{error:e})})}},{key:"componentDidMount",value:function(){this.getFolders(),this.getNotes()}},{key:"renderNavRoutes",value:function(){return o.a.createElement(T,null,o.a.createElement(o.a.Fragment,null,["/Noteful/","/Noteful/folder/:folderId"].map(function(e){return o.a.createElement(v.a,{exact:!0,key:e,path:e,component:O})}),o.a.createElement(v.a,{path:"/Noteful/note/:noteId",component:_}),o.a.createElement(v.a,{path:"/Noteful/add-folder",component:I}),o.a.createElement(v.a,{path:"/Noteful/add-note",component:D})))}},{key:"renderMainRoutes",value:function(){var e=this.state.notes;return o.a.createElement(T,null,o.a.createElement(o.a.Fragment,null,["/Noteful/","/Noteful/folder/:folderId"].map(function(e){return o.a.createElement(v.a,{exact:!0,key:e,path:e,component:M})}),o.a.createElement(v.a,{path:"/Noteful/note/:noteId",render:function(t){var a=parseInt(t.match.params.noteId,10),n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return e.find(function(e){return e.id===parseInt(t,10)})}(e,a);return o.a.createElement(x,Object.assign({},t,{note:n}))}}),o.a.createElement(v.a,{path:"/Noteful/add-folder"}),o.a.createElement(v.a,{path:"/Noteful/add-note"})))}},{key:"render",value:function(){var e={folders:this.state.folders,notes:this.state.notes,deleteNote:this.deleteNote,addFolder:this.addFolder,addNote:this.addNote};return o.a.createElement(T,null,o.a.createElement(y.Provider,{value:e},o.a.createElement("div",{className:"App"},o.a.createElement("nav",{className:"App__nav"},this.renderNavRoutes()),o.a.createElement("header",{className:"App__header"},o.a.createElement("h1",null,o.a.createElement(s.b,{to:"/Noteful/"},"Noteful")," ",o.a.createElement(N.a,{icon:"check-double"}))),o.a.createElement("main",{className:"App__main"},this.renderMainRoutes()))))}}]),t}(n.Component));c.b.add(i.c,i.b,i.d,i.a),l.a.render(o.a.createElement(s.a,null,o.a.createElement(A,null)),document.getElementById("root"))},87:function(e,t,a){e.exports=a(209)},95:function(e,t,a){},98:function(e,t,a){},99:function(e,t,a){}},[[87,1,2]]]);
//# sourceMappingURL=main.1a724463.chunk.js.map