import{R as i,j as e}from"./react-BhSE-Csv.js";import{L as d}from"./react-router-dom-DN0mQ8dA.js";import{L as o}from"./component-layout-DvakhPXe.js";import{m as c,q as p}from"./index-CelrODDd.js";import{u as g}from"./common-Br1QVwti.js";import{T as j,d as f,e as n,f as m,B as x}from"./component-ui-CxzjFQoq.js";import{b as N,u as v}from"./react-router-_kT901Jg.js";import{A as w,Y as y,T as C,a as k,P as A}from"./lucide-react-l0Lv4dhR.js";const L=()=>{const{id:a}=N(),h=v();g();const[b,t]=i.useState(0);i.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[a]);const s=c.find(l=>l.id===Number(a)),r=p[a];return s?e.jsxs(o,{children:[e.jsxs("div",{className:"glass-panel relative overflow-hidden p-0",style:{background:`linear-gradient(135deg, ${s.color}40, ${s.color}20)`,borderColor:s.color,minHeight:"800px"},children:[e.jsx("button",{onClick:()=>h("/members"),className:"absolute top-4 left-4 p-2 rounded-full bg-white/80 hover:bg-white transition-colors z-50 cursor-pointer",style:{boxShadow:"0 2px 4px rgba(0,0,0,0.1)",backdropFilter:"blur(10px)"},children:e.jsx(w,{className:"w-5 h-5"})}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 min-h-[500px]",children:[e.jsxs("div",{className:"p-8 md:p-12 flex flex-col items-center md:items-start justify-center relative z-10",children:[e.jsxs("div",{className:"text-center md:text-left mb-8",children:[e.jsx("h1",{className:"text-4xl md:text-5xl font-bold mb-4 relative z-10",style:{color:"white",textShadow:"2px 2px 4px rgba(0,0,0,0.5)",backdropFilter:"blur(10px)",WebkitBackdropFilter:"blur(10px)",backgroundColor:"rgba(0,0,0,0.2)",padding:"8px 16px",borderRadius:"8px"},children:s.name==="アットおどろくマルベロス"?e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"block",children:"あっとおどろく"}),e.jsx("span",{className:"block",children:"マルベロス"})]}):s.name}),e.jsx("p",{className:"text-xl text-gray-600",children:s.channelId})]}),e.jsx("div",{className:"md:hidden mb-8",children:e.jsx("div",{className:"w-48 h-48 rounded-full overflow-hidden border-4 mx-auto",style:{borderColor:s.color},children:e.jsx("img",{src:s.imageUrl,alt:s.name,className:"w-full h-full object-cover"})})}),e.jsxs(j,{defaultValue:"info",className:"w-full",children:[e.jsxs(f,{className:"grid w-full grid-cols-2 gap-1 p-1 rounded-full bg-[#6AC4BC]/10 relative",children:[e.jsx("div",{className:"absolute inset-0 flex items-center",children:e.jsx("div",{className:"h-full bg-[#6AC4BC]/20 rounded-full transition-all duration-300 ease-in-out",style:{width:"50%",transform:`translateX(${b}%)`}})}),e.jsx(n,{value:"info",className:"relative z-10 data-[state=active]:text-[#6AC4BC] rounded-full py-2 transition-all duration-300 hover:bg-[#6AC4BC]/10",onClick:()=>t(0),children:"プロフィール"}),e.jsx(n,{value:"qa",className:"relative z-10 data-[state=active]:text-[#6AC4BC] rounded-full py-2 transition-all duration-300 hover:bg-[#6AC4BC]/10",onClick:()=>t(100),children:"Q&A"})]}),e.jsx(m,{value:"info",className:"mt-6",children:e.jsxs("div",{className:"w-full md:w-3/4 bg-[#6AC4BC]/10 p-6 rounded-lg shadow-md",children:[e.jsx("h3",{className:"text-2xl font-bold text-[#6AC4BC] mb-4",children:s.name}),e.jsx("div",{className:"mb-6",children:e.jsxs("div",{className:"grid grid-cols-1 gap-4",children:[e.jsxs("div",{className:"bg-[#6AC4BC]/5 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-gray-700 mb-2",children:"誕生日"}),e.jsx("p",{className:"text-gray-600",children:s.birthday||"未設定"})]}),e.jsxs("div",{className:"bg-[#6AC4BC]/5 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-gray-700 mb-2",children:"ユニット"}),e.jsx("p",{className:"text-gray-600",children:"おどみん"})]}),e.jsxs("div",{className:"bg-[#6AC4BC]/5 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-gray-700 mb-2",children:"ファンマーク"}),e.jsx("p",{className:"text-gray-600",children:s.fanMark||"未設定"})]}),e.jsxs("div",{className:"bg-[#6AC4BC]/5 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-gray-700 mb-2",children:"ファンアートタグ"}),e.jsxs("p",{className:"text-gray-600",children:["ファンアートタグ：",s.fanArtTag||"未設定"]})]})]})})]})}),e.jsx(m,{value:"qa",className:"mt-6",children:e.jsxs("div",{className:"w-full md:w-3/4",children:[e.jsx("h3",{className:"text-2xl font-bold text-[#6AC4BC] mb-4",children:"Q&A"}),r==null?void 0:r.map((l,u)=>e.jsxs("div",{className:"mb-4 p-4 bg-[#6AC4BC]/5 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-gray-700 mb-2",children:l.question}),e.jsx("p",{className:"text-gray-600",children:l.answer})]},u))]})})]}),e.jsxs("div",{className:"flex flex-wrap gap-4 mt-8",children:[e.jsxs(x,{variant:"outline",className:"w-full md:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-full transition-all duration-300 hover:scale-105",onClick:()=>window.open(s.youtubeUrl,"_blank"),style:{borderColor:"#FF0000",color:"#FF0000",backgroundColor:"rgba(255, 0, 0, 0.05)",backdropFilter:"blur(10px)"},children:[e.jsx(y,{className:"h-6 w-6"}),e.jsx("span",{className:"font-medium",children:"YouTubeチャンネル"})]}),s.twitterUrl&&e.jsxs(x,{variant:"outline",className:"w-full md:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-full transition-all duration-300 hover:scale-105",onClick:()=>window.open(s.twitterUrl,"_blank"),style:{borderColor:"#1DA1F2",color:"#1DA1F2",backgroundColor:"rgba(29, 161, 242, 0.05)",backdropFilter:"blur(10px)"},children:[e.jsx(C,{className:"h-6 w-6"}),e.jsx("span",{className:"font-medium",children:"Twitter"})]})]})]}),e.jsxs("div",{className:"hidden md:block relative flex items-center justify-center p-6 md:p-0",children:[e.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-transparent to-white/20"}),e.jsx("div",{className:"relative z-10 animate-float mt-40",children:e.jsx("div",{className:"w-64 h-64 md:w-[400px] md:h-[400px] rounded-full overflow-hidden border-4",style:{borderColor:s.color},children:e.jsx("img",{src:s.imageUrl,alt:s.name,className:"w-full h-full object-cover",style:{objectPosition:"top"}})})})]})]})]}),s.recommendedVideo&&e.jsxs("div",{className:"mt-16",children:[e.jsx("h2",{className:"text-2xl font-bold mb-8 text-center",style:{color:s.color},children:"おすすめ動画"}),e.jsx("div",{className:"max-w-4xl mx-auto glass-panel p-6",children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8 items-center",children:[e.jsxs("div",{className:"relative overflow-hidden rounded-lg shadow-lg aspect-video",children:[e.jsx("img",{src:`https://i.ytimg.com/vi/${s.recommendedVideo.videoId}/maxresdefault.jpg`,alt:s.recommendedVideo.title,className:"w-full h-full object-cover"}),e.jsxs("div",{className:"absolute top-2 left-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded flex items-center",children:[e.jsx(k,{className:"w-3 h-3 mr-1"}),e.jsx("span",{children:s.recommendedVideo.duration})]}),e.jsx("div",{className:"absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-black bg-opacity-40",children:e.jsx("a",{href:`https://www.youtube.com/watch?v=${s.recommendedVideo.videoId}`,target:"_blank",rel:"noopener noreferrer",className:"bg-white rounded-full p-4",children:e.jsx(A,{className:"h-10 w-10 text-red-500",fill:"currentColor"})})})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl font-bold text-gray-800 mb-4",children:s.recommendedVideo.title}),e.jsx("p",{className:"text-gray-600 mb-6 leading-relaxed",children:s.recommendedVideo.description}),e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("img",{src:s.imageUrl,alt:s.name,className:"h-10 w-10 rounded-full"}),e.jsx("span",{className:"text-gray-700",children:s.name})]}),e.jsx("a",{href:`https://www.youtube.com/watch?v=${s.recommendedVideo.videoId}`,target:"_blank",rel:"noopener noreferrer",className:"button-primary",children:"続きを見る"})]})]})]})})]}),e.jsxs("div",{className:"mt-16 mb-8",children:[e.jsx("h2",{className:"text-2xl font-bold mb-8 text-center",children:"他のメンバー"}),e.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4",children:c.filter(l=>l.id!==s.id).map(l=>e.jsxs(d,{to:`/members/${l.id}`,className:"p-4 rounded-lg flex flex-col items-center text-center hover:bg-white/50 transition-colors",children:[e.jsx("div",{className:"w-16 h-16 rounded-full overflow-hidden border-2 mb-2",style:{borderColor:l.color},children:e.jsx("img",{src:l.imageUrl,alt:l.name,className:"w-full h-full object-cover"})}),e.jsx("span",{className:"text-sm font-medium",children:l.name})]},l.id))})]})]}):e.jsx(o,{children:e.jsxs("div",{className:"glass-panel p-8 text-center",children:[e.jsx("h1",{className:"text-2xl font-bold mb-4",children:"メンバーが見つかりません"}),e.jsx("p",{className:"mb-6",children:"指定されたIDのメンバーは存在しません。"}),e.jsx(d,{to:"/members",className:"button-primary",children:"メンバー一覧に戻る"})]})})};export{L as M};
