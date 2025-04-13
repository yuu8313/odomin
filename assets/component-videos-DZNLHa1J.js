import{j as e,R as n}from"./react-BhSE-Csv.js";import{a as d,P as x}from"./lucide-react-l0Lv4dhR.js";const m=({isOpen:s,onClose:l,videoId:t})=>s?e.jsx("div",{className:"fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4",children:e.jsxs("div",{className:"relative w-full max-w-7xl aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10",children:[e.jsx("div",{className:"absolute top-4 right-4 z-10",children:e.jsx("button",{onClick:l,className:"text-white hover:text-gray-300 p-3 rounded-full bg-black/50 hover:bg-black/70 transition-colors group",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6 group-hover:scale-110 transition-transform",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"})})})}),e.jsx("div",{className:"w-full h-full",children:e.jsx("iframe",{src:`https://www.youtube.com/embed/${t}`,title:"YouTube video player",className:"w-full h-full rounded-2xl",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,style:{boxShadow:"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"}})})]})}):null,h=({videoId:s,title:l,description:t,duration:i,channelName:a,channelAvatar:o})=>{const[c,r]=n.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"bg-white rounded-lg shadow overflow-hidden hover:-translate-y-1 transition-all duration-300 cursor-pointer",onClick:()=>r(!0),children:[e.jsxs("div",{className:"relative",children:[e.jsx("img",{src:`https://i.ytimg.com/vi/${s}/maxresdefault.jpg`,alt:l,className:"w-full aspect-video object-cover"}),e.jsxs("div",{className:"absolute top-2 left-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded flex items-center",children:[e.jsx(d,{className:"w-3 h-3 mr-1"}),e.jsx("span",{children:i})]}),e.jsx("div",{className:"absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-black bg-opacity-40",children:e.jsx("div",{className:"bg-secondary rounded-full p-3",children:e.jsx(x,{className:"h-8 w-8 text-primary",fill:"currentColor"})})})]}),e.jsxs("div",{className:"p-4",children:[e.jsx("h3",{className:"text-base font-bold text-gray-800 line-clamp-2 mb-2",children:l}),e.jsx("p",{className:"text-sm text-gray-600 mb-3",children:t}),e.jsx("div",{className:"flex justify-between items-center",children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("img",{src:o,alt:a,className:"h-8 w-8 rounded-full"}),e.jsx("span",{className:"text-xs text-gray-500",children:a})]})})]})]}),e.jsx(m,{isOpen:c,onClose:()=>r(!1),videoId:s})]})};export{h as V};
