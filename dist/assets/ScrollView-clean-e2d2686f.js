import{d as l,r as a,o as i,g as t,j as _,a as d,c as h,b as e,i as m}from"./index-86d5d624.js";const u=e("section",{class:"section flex-center column blue"},[e("h1",null,"Basic ScrollTrigger in VueJS"),e("h2",null,"Scroll down to see the magic happen!!")],-1),f=e("div",{class:"box"},"box",-1),g=e("div",{class:"box"},"box",-1),p=e("div",{class:"box"},"box",-1),x=[f,g,p],b=e("section",{class:"section flex-center orange column"},[e("h1",null,"The End!"),e("h2",null,[m(" For more information visit:  "),e("a",{href:"https://greensock.com/scrolltrigger/",target:"_blank",rel:"noreferrer"}," greensock.com/scrolltrigger/ ")])],-1),S=l({__name:"ScrollView-clean",setup(v){const r=a();return i(()=>{Array.from(r.value.children).forEach(o=>{t.to(o,{x:150,scrollTrigger:{trigger:o,start:"bottom bottom",end:"top 20%",scrub:!0}})})}),_((o,s,c)=>{Array.from(r.value.children).forEach(n=>{t.to(n,{x:1e3,onComplete:()=>{c()}})})}),(o,s)=>(d(),h("main",null,[u,e("div",{class:"section flex-center column",ref_key:"wrapper",ref:r},x,512),b]))}});export{S as default};