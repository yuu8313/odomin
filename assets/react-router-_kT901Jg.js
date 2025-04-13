import{r as a}from"./react-BhSE-Csv.js";import{i as v,A as k,p as F,s as S,m as W,j as N,g as M,r as D,a as V}from"./@remix-run-Ci2Y9YYq.js";/**
 * React Router v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function P(){return P=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},P.apply(this,arguments)}const L=a.createContext(null),A=a.createContext(null),b=a.createContext(null),B=a.createContext(null),E=a.createContext({outlet:null,matches:[],isDataRoute:!1}),_=a.createContext(null);function ue(e,t){let{relative:r}=t===void 0?{}:t;R()||v(!1);let{basename:n,navigator:i}=a.useContext(b),{hash:s,pathname:l,search:u}=q(e,{relative:r}),p=l;return n!=="/"&&(p=l==="/"?n:N([n,l])),i.createHref({pathname:p,search:u,hash:s})}function R(){return a.useContext(B)!=null}function O(){return R()||v(!1),a.useContext(B).location}function J(e){a.useContext(b).static||a.useLayoutEffect(e)}function ce(){let{isDataRoute:e}=a.useContext(E);return e?ae():$()}function $(){R()||v(!1);let e=a.useContext(L),{basename:t,future:r,navigator:n}=a.useContext(b),{matches:i}=a.useContext(E),{pathname:s}=O(),l=JSON.stringify(M(i,r.v7_relativeSplatPath)),u=a.useRef(!1);return J(()=>{u.current=!0}),a.useCallback(function(d,c){if(c===void 0&&(c={}),!u.current)return;if(typeof d=="number"){n.go(d);return}let o=D(d,JSON.parse(l),s,c.relative==="path");e==null&&t!=="/"&&(o.pathname=o.pathname==="/"?t:N([t,o.pathname])),(c.replace?n.replace:n.push)(o,c.state,c)},[t,n,l,s,e])}function de(){let{matches:e}=a.useContext(E),t=e[e.length-1];return t?t.params:{}}function q(e,t){let{relative:r}=t===void 0?{}:t,{future:n}=a.useContext(b),{matches:i}=a.useContext(E),{pathname:s}=O(),l=JSON.stringify(M(i,n.v7_relativeSplatPath));return a.useMemo(()=>D(e,JSON.parse(l),s,r==="path"),[e,l,s,r])}function G(e,t){return K(e,t)}function K(e,t,r,n){R()||v(!1);let{navigator:i,static:s}=a.useContext(b),{matches:l}=a.useContext(E),u=l[l.length-1],p=u?u.params:{};u&&u.pathname;let d=u?u.pathnameBase:"/";u&&u.route;let c=O(),o;if(t){var h;let f=typeof t=="string"?F(t):t;d==="/"||(h=f.pathname)!=null&&h.startsWith(d)||v(!1),o=f}else o=c;let m=o.pathname||"/",g=m;if(d!=="/"){let f=d.replace(/^\//,"").split("/");g="/"+m.replace(/^\//,"").split("/").slice(f.length).join("/")}let x=W(e,{pathname:g}),C=H(x&&x.map(f=>Object.assign({},f,{params:Object.assign({},p,f.params),pathname:N([d,i.encodeLocation?i.encodeLocation(f.pathname).pathname:f.pathname]),pathnameBase:f.pathnameBase==="/"?d:N([d,i.encodeLocation?i.encodeLocation(f.pathnameBase).pathname:f.pathnameBase])})),l,r,n);return t&&C?a.createElement(B.Provider,{value:{location:P({pathname:"/",search:"",hash:"",state:null,key:"default"},o),navigationType:k.Pop}},C):C}function Q(){let e=ne(),t=V(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return a.createElement(a.Fragment,null,a.createElement("h2",null,"Unexpected Application Error!"),a.createElement("h3",{style:{fontStyle:"italic"}},t),r?a.createElement("pre",{style:i},r):null,null)}const X=a.createElement(Q,null);class Y extends a.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,r){return r.location!==t.location||r.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:r.error,location:r.location,revalidation:t.revalidation||r.revalidation}}componentDidCatch(t,r){console.error("React Router caught the following error during render",t,r)}render(){return this.state.error!==void 0?a.createElement(E.Provider,{value:this.props.routeContext},a.createElement(_.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Z(e){let{routeContext:t,match:r,children:n}=e,i=a.useContext(L);return i&&i.static&&i.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=r.route.id),a.createElement(E.Provider,{value:t},n)}function H(e,t,r,n){var i;if(t===void 0&&(t=[]),r===void 0&&(r=null),n===void 0&&(n=null),e==null){var s;if(!r)return null;if(r.errors)e=r.matches;else if((s=n)!=null&&s.v7_partialHydration&&t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let l=e,u=(i=r)==null?void 0:i.errors;if(u!=null){let c=l.findIndex(o=>o.route.id&&(u==null?void 0:u[o.route.id])!==void 0);c>=0||v(!1),l=l.slice(0,Math.min(l.length,c+1))}let p=!1,d=-1;if(r&&n&&n.v7_partialHydration)for(let c=0;c<l.length;c++){let o=l[c];if((o.route.HydrateFallback||o.route.hydrateFallbackElement)&&(d=c),o.route.id){let{loaderData:h,errors:m}=r,g=o.route.loader&&h[o.route.id]===void 0&&(!m||m[o.route.id]===void 0);if(o.route.lazy||g){p=!0,d>=0?l=l.slice(0,d+1):l=[l[0]];break}}}return l.reduceRight((c,o,h)=>{let m,g=!1,x=null,C=null;r&&(m=u&&o.route.id?u[o.route.id]:void 0,x=o.route.errorElement||X,p&&(d<0&&h===0?(oe("route-fallback"),g=!0,C=null):d===h&&(g=!0,C=o.route.hydrateFallbackElement||null)));let f=t.concat(l.slice(0,h+1)),U=()=>{let y;return m?y=x:g?y=C:o.route.Component?y=a.createElement(o.route.Component,null):o.route.element?y=o.route.element:y=c,a.createElement(Z,{match:o,routeContext:{outlet:c,matches:f,isDataRoute:r!=null},children:y})};return r&&(o.route.ErrorBoundary||o.route.errorElement||h===0)?a.createElement(Y,{location:r.location,revalidation:r.revalidation,component:x,error:m,children:U(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):U()},null)}var T=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(T||{}),w=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(w||{});function ee(e){let t=a.useContext(L);return t||v(!1),t}function te(e){let t=a.useContext(A);return t||v(!1),t}function re(e){let t=a.useContext(E);return t||v(!1),t}function z(e){let t=re(),r=t.matches[t.matches.length-1];return r.route.id||v(!1),r.route.id}function ne(){var e;let t=a.useContext(_),r=te(),n=z();return t!==void 0?t:(e=r.errors)==null?void 0:e[n]}function ae(){let{router:e}=ee(T.UseNavigateStable),t=z(w.UseNavigateStable),r=a.useRef(!1);return J(()=>{r.current=!0}),a.useCallback(function(i,s){s===void 0&&(s={}),r.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,P({fromRouteId:t},s)))},[e,t])}const j={};function oe(e,t,r){j[e]||(j[e]=!0)}function fe(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function le(e){v(!1)}function ve(e){let{basename:t="/",children:r=null,location:n,navigationType:i=k.Pop,navigator:s,static:l=!1,future:u}=e;R()&&v(!1);let p=t.replace(/^\/*/,"/"),d=a.useMemo(()=>({basename:p,navigator:s,static:l,future:P({v7_relativeSplatPath:!1},u)}),[p,u,s,l]);typeof n=="string"&&(n=F(n));let{pathname:c="/",search:o="",hash:h="",state:m=null,key:g="default"}=n,x=a.useMemo(()=>{let C=S(c,p);return C==null?null:{location:{pathname:C,search:o,hash:h,state:m,key:g},navigationType:i}},[p,c,o,h,m,g,i]);return x==null?null:a.createElement(b.Provider,{value:d},a.createElement(B.Provider,{children:r,value:x}))}function pe(e){let{children:t,location:r}=e;return G(I(t),r)}new Promise(()=>{});function I(e,t){t===void 0&&(t=[]);let r=[];return a.Children.forEach(e,(n,i)=>{if(!a.isValidElement(n))return;let s=[...t,i];if(n.type===a.Fragment){r.push.apply(r,I(n.props.children,s));return}n.type!==le&&v(!1),!n.props.index||!n.props.children||v(!1);let l={id:n.props.id||s.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,loader:n.props.loader,action:n.props.action,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(l.children=I(n.props.children,s)),r.push(l)}),r}export{b as N,ve as R,O as a,de as b,ue as c,q as d,pe as e,le as f,fe as l,ce as u};
