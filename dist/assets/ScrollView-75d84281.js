import{h as g,d as u,r as _,w as d,f as h,a as p,c as f,b as e,i as x,g as i}from"./index-e37a1f86.js";const a=g({transitionComplete:null}),b=()=>({transitionState:a,toggleTransitionComplete:t=>{a.transitionComplete=t}}),v=e("section",{class:"section flex-center column blue"},[e("h1",null,"Basic ScrollTrigger in VueJS"),e("h2",null,"Scroll down to see the magic happen!!")],-1),C=e("div",{class:"box"},"box",-1),S=e("div",{class:"box"},"box",-1),T=e("div",{class:"box"},"box",-1),k=[C,S,T],B=e("section",{class:"section flex-center orange column"},[e("h1",null,"The End!"),e("h2",null,[x(" For more information visit:  "),e("a",{href:"https://greensock.com/scrolltrigger/",target:"_blank",rel:"noreferrer"}," greensock.com/scrolltrigger/ ")])],-1),E=u({__name:"ScrollView",setup(m){const{transitionState:t}=b(),o=_();let n;return d([()=>t.transitionComplete,o],s=>{console.log({newValue:s}),s&&o.value&&(n=i.context(r=>{const c=r.selector(".box");console.log(c),c.forEach(l=>{i.to(l,{x:150,scrollTrigger:{trigger:l,start:"bottom bottom",end:"top 20%",scrub:!0}})})},o.value))},{immediate:!0}),h(()=>{n.revert()}),(s,r)=>(p(),f("main",null,[v,e("div",{class:"section flex-center column",ref_key:"main",ref:o},k,512),B]))}});export{E as default};