"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1241],{3905:function(e,t,n){n.r(t),n.d(t,{MDXContext:function(){return m},MDXProvider:function(){return d},mdx:function(){return f},useMDXComponents:function(){return p},withMDXComponents:function(){return l}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=a.createContext({}),l=function(e){return function(t){var n=p(t.components);return a.createElement(e,o({},t,{components:n}))}},p=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(m.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),l=p(n),d=r,u=l["".concat(i,".").concat(d)]||l[d]||h[d]||o;return n?a.createElement(u,s(s({ref:t},m),{},{components:n})):a.createElement(u,s({ref:t},m))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var m=2;m<o;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},25825:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return m},toc:function(){return l},default:function(){return d}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],s={id:"inference",title:"Inference Methods",sidebar_label:"Overview",slug:"/inference"},c=void 0,m={unversionedId:"framework_topics/inference/inference",id:"framework_topics/inference/inference",title:"Inference Methods",description:"Posterior distributions can often only be estimated, as the solutions to such problems in general have no closed-form. Bean Machine's inference methods include sequential sampling techniques known as Markov chain Monte Carlo (MCMC) to generate samples representative of this distribution. These posterior distribution samples are the main output of Bean Machine: with enough samples, they will asymptotically converge to the true posterior.",source:"@site/../docs/framework_topics/inference/inference.md",sourceDirName:"framework_topics/inference",slug:"/inference",permalink:"/docs/inference",editUrl:"https://github.com/facebookresearch/beanmachine/edit/main/website/../docs/framework_topics/inference/inference.md",tags:[],version:"current",frontMatter:{id:"inference",title:"Inference Methods",sidebar_label:"Overview",slug:"/inference"},sidebar:"someSidebar",previous:{title:"Worlds and Variables",permalink:"/docs/world"},next:{title:"Single-Site Ancestral MH",permalink:"/docs/ancestral_metropolis_hastings"}},l=[],p={toc:l};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.mdx)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,"Posterior distributions can often only be estimated, as the solutions to such problems in general have no closed-form. Bean Machine's inference methods include sequential sampling techniques known as ",(0,o.mdx)("a",{parentName:"p",href:"https://towardsdatascience.com/a-zero-math-introduction-to-markov-chain-monte-carlo-methods-dcba889e0c50"},"Markov chain Monte Carlo (MCMC)")," to generate samples representative of this distribution. These posterior distribution samples are the main output of Bean Machine: with enough samples, they will asymptotically converge to the true posterior."),(0,o.mdx)("p",null,"To support inference algorithms, Bean Machine represents the model as a ",(0,o.mdx)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Graphical_model"},"probabilistic graphical model"),". A probabilistic graphical model is a directed acyclic graph where each node is a random variable and edges between nodes represent dependencies between random variables. During a single iteration of inference, MCMC assigns a specific, concrete value to each of the unobserved random variable functions in your model. We refer to this set of assignments as a ",(0,o.mdx)("inlineCode",{parentName:"p"},"World")," in Bean Machine."),(0,o.mdx)("p",null,"Each ",(0,o.mdx)("a",{parentName:"p",href:"/docs/world"},"world")," corresponds to a potential sample for the posterior distribution. An MCMC method evaluates how well a particular world would explain the observed data (and prior beliefs). MCMC methods will tend to retain worlds that explain the observed data well and add them as samples to the computed posterior distribution. MCMC methods will tend to discard worlds that do a poor job of explaining the observed data."),(0,o.mdx)("p",null,'In an MCMC method, worlds are computed sequentially. A new world is "proposed" based on the random variable assignments from the current world. In each inference step, an MCMC method iterates over all unobserved random variables and proposes a new value. The world is updated to reflect this change; that is, likelihoods are updated and new variables may be added or removed. This updated world will either replace the existing world or be discarded as determined by the specific inference method. The value associated with each variable at the ',(0,o.mdx)("span",{parentName:"p",className:"math math-inline"},(0,o.mdx)("span",{parentName:"span",className:"katex"},(0,o.mdx)("span",{parentName:"span",className:"katex-mathml"},(0,o.mdx)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,o.mdx)("semantics",{parentName:"math"},(0,o.mdx)("mrow",{parentName:"semantics"},(0,o.mdx)("mi",{parentName:"mrow"},"i")),(0,o.mdx)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"i")))),(0,o.mdx)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,o.mdx)("span",{parentName:"span",className:"base"},(0,o.mdx)("span",{parentName:"span",className:"strut",style:{height:"0.65952em",verticalAlign:"0em"}}),(0,o.mdx)("span",{parentName:"span",className:"mord mathnormal"},"i"))))),"th inference step is returned as the ",(0,o.mdx)("span",{parentName:"p",className:"math math-inline"},(0,o.mdx)("span",{parentName:"span",className:"katex"},(0,o.mdx)("span",{parentName:"span",className:"katex-mathml"},(0,o.mdx)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,o.mdx)("semantics",{parentName:"math"},(0,o.mdx)("mrow",{parentName:"semantics"},(0,o.mdx)("mi",{parentName:"mrow"},"i")),(0,o.mdx)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"i")))),(0,o.mdx)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,o.mdx)("span",{parentName:"span",className:"base"},(0,o.mdx)("span",{parentName:"span",className:"strut",style:{height:"0.65952em",verticalAlign:"0em"}}),(0,o.mdx)("span",{parentName:"span",className:"mord mathnormal"},"i"))))),"th sample for the variable."),(0,o.mdx)("p",null,"As you can imagine, there are a variety of ways of proposing new worlds from the current world, and even for deciding whether to accept or reject a proposed world. Lots of research goes into designing inference methods that are both flexible and performant for a wide class of models. Bean Machine supports several inference methods out-of-the-box, which are described in the following sections, as well as ways to ",(0,o.mdx)("a",{parentName:"p",href:"/docs/programmable_inference"},"combine these methods in the same subroutine"),"."))}d.isMDXComponent=!0}}]);