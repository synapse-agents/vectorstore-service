(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[465],{39377:function(e,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/status",function(){return a(34510)}])},34510:function(e,s,a){"use strict";a.r(s),a.d(s,{default:function(){return n}});var t=a(85893),l=a(67294),r=a(36267);function n(){let[e,s]=(0,l.useState)(""),[a,n]=(0,l.useState)("Offline"),[o,i]=(0,l.useState)({}),[c,d]=(0,l.useState)({}),[b,h]=(0,l.useState)({}),[m,x]=(0,l.useState)(!1),[u,g]=(0,l.useState)(!1),[p,f]=(0,l.useState)(!1),[j,v]=(0,l.useState)(!1);return(0,l.useEffect)(()=>{fetch("/api/get_status").then(e=>e.json()).then(e=>{s(e.type),i(e.libraries),d(e.variables),h(e.schemas),n("Online")}).catch(e=>{console.error("Error fetching the data:",e)})},[]),(0,t.jsxs)("main",{className:"flex min-h-screen flex-col items-center justify-between p-10 text-slate-900",children:[(0,t.jsxs)("div",{className:"flex flex-col w-full items-start",children:[(0,t.jsx)("div",{className:"mb-2",children:(0,t.jsxs)("div",{className:"flex justify-between items-center w-full",children:[" ",(0,t.jsx)("div",{className:"flex-none",children:(0,t.jsx)("div",{className:"bg-orange-200 border-2 border-slate-800 rounded-lg shadow-lg animate-pop-in hover-container mr-4 ",children:(0,t.jsx)("img",{src:"".concat("static/","verba.png"),alt:"Verba Logo",className:" w-24 h-24 shadow-lg"})})}),(0,t.jsxs)("div",{className:"flex-1",children:[(0,t.jsx)("h1",{className:" text-6xl font-bold",children:"Verba"}),(0,t.jsxs)("div",{className:"flex text-lg",children:[(0,t.jsx)("span",{className:"bg-opacity-0 rounded px-2 py-1 hover-container animate-pop-in",children:"The"}),(0,t.jsx)("span",{className:"bg-opacity-0 rounded font-bold px-2 py-1 hover-container animate-pop-in-late",children:"Golden"}),(0,t.jsx)("span",{className:"bg-orange-200 rounded px-2 py-1 hover-container animate-pop-more-late",children:"RAGtriever"})]})]})]})}),(0,t.jsxs)("div",{className:"flex mt-16 space-x-4 w-full justify-center items-start",children:[" ",(0,t.jsxs)("div",{className:"flex-1 border-2 border-black bg-amber-50 bg-opacity-20 rounded-lg shadow-md backdrop-filter max-h-[50vh] backdrop-blur-md p-4 w-full overflow-y-auto animate-pop-in",children:[(0,t.jsx)("h2",{className:"text-lg font-bold mb-4",children:"\uD83D\uDC15 Verba Status"}),(0,t.jsx)("p",{className:"text-xs font-bold mb-4 text-slate-600",children:"This view shows whether your Verba Client is connected to the Backend and which Deployment of Weaviate you are using"}),(0,t.jsx)("hr",{}),(0,t.jsxs)("div",{className:"grid grid-rows-2 gap-2 mt-4",children:[(0,t.jsx)(r.Z,{main:"Backend",sub:a,clipboard:"Online"==a,subBgColor:"Online"==a?"blue":"orange",onClick:()=>console.log("Connected button clicked")}),(0,t.jsx)(r.Z,{main:e||"Weaviate",sub:a,clipboard:"Online"==a,subBgColor:"Online"==a?"blue":"orange",onClick:()=>console.log("Type button clicked")})]})]}),(0,t.jsxs)("div",{className:"flex-1 border-2 border-black bg-amber-50 bg-opacity-20 rounded-lg shadow-md backdrop-filter max-h-[50vh] backdrop-blur-md p-4 overflow-y-auto w-full animate-pop-in",children:[(0,t.jsx)("h2",{className:"text-lg font-bold mb-4",children:"\uD83D\uDCDA Libraries & Variables"}),(0,t.jsx)("p",{className:"text-xs font-bold mb-4 text-slate-600",children:"This interface lists all available libraries and defined variables."}),(0,t.jsxs)("p",{className:"text-xs font-bold mb-4 text-slate-600 mt-2",children:["To set environment variables, create a ",(0,t.jsx)("code",{children:".env"})," file and define your variables (e.g., ",(0,t.jsx)("code",{children:"OPENAI_API_KEY=Your-Key"}),"). Alternatively, you may configure them system-wide. ",(0,t.jsx)("a",{href:"https://github.com/weaviate/Verba/blob/main/README.md",className:"text-sm text-blue-400",children:"Click here"})," for detailed instructions."]}),(0,t.jsxs)("p",{className:"text-xs font-bold mb-4 text-slate-600 mt-2",children:["To install any requiorange libraries that are not present, use the command ",(0,t.jsx)("code",{children:"pip install Your-Library"})," (for example, ",(0,t.jsx)("code",{children:"pip install spacy"}),")."]}),(0,t.jsx)("hr",{}),(0,t.jsxs)("div",{className:"grid grid-rows-2 gap-2 mt-4",children:[Object.entries(o).map(e=>{let[s,a]=e;return(0,t.jsx)(r.Z,{clipboard:!0,main:s,subBgColor:a?"blue":"orange",sub:a?"Library Installed":"Library not installed",onClick:()=>console.log("".concat(s," button clicked"))},s)}),Object.entries(c).map(e=>{let[s,a]=e;return(0,t.jsx)(r.Z,{clipboard:!0,main:s,subBgColor:a?"blue":"orange",sub:a?"Variable Available":"Variable not set",onClick:()=>console.log("".concat(s," button clicked"))},s)})]})]}),(0,t.jsxs)("div",{className:"flex-1 bg-amber-50 border-2 border-black bg-opacity-20 rounded-lg shadow-md backdrop-filter max-h-[50vh] backdrop-blur-md p-4 w-full overflow-y-auto animate-pop-in",children:[(0,t.jsxs)("div",{className:"flex justify-between items-center mb-4",children:[" ",(0,t.jsx)("h2",{className:"text-lg font-bold",children:"\uD83D\uDCDD Schemas & Objects"})]}),(0,t.jsx)("p",{className:"text-xs font-bold mb-4 text-slate-600",children:"This view shows all schemas and their object count"}),(0,t.jsx)("button",{onClick:()=>x(!0),className:"text-xs bg-slate-400 text-amber-50 hover:bg-orange-400 hover-container px-3 py-2 rounded-lg mr-2",children:"❌ Reset Verba"}),(0,t.jsx)("button",{onClick:()=>g(!0),className:"text-xs bg-slate-400 text-amber-50 hover:bg-orange-400 hover-container px-3 py-2 rounded-lg mr-2",children:"❌ Reset Cache"}),(0,t.jsx)("button",{onClick:()=>f(!0),className:"text-xs bg-slate-400 text-amber-50 hover:bg-orange-400 hover-container px-3 py-2 rounded-lg",children:"❌ Reset Suggestion"}),(0,t.jsx)("hr",{}),(0,t.jsx)("div",{className:"grid grid-rows-2 gap-2 mt-4",children:Object.entries(b).map(e=>{let[s,a]=e;return(0,t.jsx)(r.Z,{clipboard:!0,main:s,subBgColor:"orange",sub:a+" objects",onClick:()=>console.log("".concat(s," button clicked"))},s)})})]})]})]}),m&&(0,t.jsx)("div",{className:"fixed inset-0 flex items-center justify-center z-50",children:(0,t.jsxs)("div",{className:"bg-amber-50 p-6 rounded-lg shadow-lg border-2 border-black animate-pop-in",children:[(0,t.jsx)("h3",{className:"font-bold mb-4",children:"⚠️ Warning"}),(0,t.jsx)("p",{children:"Are you sure? This will remove ALL existing data on your Weaviate Instance."}),(0,t.jsxs)("div",{className:"flex justify-end mt-4",children:[(0,t.jsx)("button",{onClick:()=>x(!1),className:"mr-2 px-4 py-2 bg-slate-300 hover:bg-slate-200 rounded",children:"No"}),(0,t.jsxs)("button",{onClick:()=>{v(!0),fetch("/api/reset").then(e=>e.json()).then(e=>{console.log("Reset successful:",e),x(!1),v(!1),window.location.reload()}).catch(e=>{console.error("Error during reset:",e),v(!1)})},className:"px-4 py-2 bg-orange-500 hover:bg-orange-400 text-amber-50 rounded",children:[j?"Resetting...":"Yes"," "]})]})]})}),u&&(0,t.jsx)("div",{className:"fixed inset-0 flex items-center justify-center z-50",children:(0,t.jsxs)("div",{className:"bg-amber-50 p-6 rounded-lg shadow-lg border-2 border-black animate-pop-in",children:[(0,t.jsx)("h3",{className:"font-bold mb-4",children:"⚠️ Warning"}),(0,t.jsx)("p",{children:"Are you sure? This will remove all cached data."}),(0,t.jsxs)("div",{className:"flex justify-end mt-4",children:[(0,t.jsx)("button",{onClick:()=>g(!1),className:"mr-2 px-4 py-2 bg-slate-300 hover:bg-slate-200 rounded",children:"No"}),(0,t.jsxs)("button",{onClick:()=>{v(!0),fetch("/api/reset_cache").then(e=>e.json()).then(e=>{console.log("Reset successful:",e),g(!1),v(!1),window.location.reload()}).catch(e=>{console.error("Error during reset:",e),v(!1)})},className:"px-4 py-2 bg-orange-500 hover:bg-orange-400 text-amber-50 rounded",children:[j?"Resetting...":"Yes"," "]})]})]})}),p&&(0,t.jsx)("div",{className:"fixed inset-0 flex items-center justify-center z-50",children:(0,t.jsxs)("div",{className:"bg-amber-50 p-6 rounded-lg shadow-lg border-2 border-black animate-pop-in",children:[(0,t.jsx)("h3",{className:"font-bold mb-4",children:"⚠️ Warning"}),(0,t.jsx)("p",{children:"Are you sure? This will remove all suggestions"}),(0,t.jsxs)("div",{className:"flex justify-end mt-4",children:[(0,t.jsx)("button",{onClick:()=>f(!1),className:"mr-2 px-4 py-2 bg-slate-300 hover:bg-slate-200 rounded",children:"No"}),(0,t.jsxs)("button",{onClick:()=>{v(!0),fetch("/api/reset_suggestion").then(e=>e.json()).then(e=>{console.log("Reset successful:",e),f(!1),v(!1),window.location.reload()}).catch(e=>{console.error("Error during reset:",e),v(!1)})},className:"px-4 py-2 bg-orange-500 hover:bg-orange-400 text-amber-50 rounded",children:[j?"Resetting...":"Yes"," "]})]})]})})]})}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=39377)}),_N_E=e.O()}]);