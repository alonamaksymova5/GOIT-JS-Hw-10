import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{f as h,i as d}from"./assets/vendor-77e16229.js";const u=document.querySelector("#datetime-picker"),o=document.querySelector("button[data-start]"),p=document.querySelector("[data-days]"),y=document.querySelector("[data-hours]"),b=document.querySelector("[data-minutes]"),g=document.querySelector("[data-seconds]");o.disabled=!0;let s=null,c=null;const C={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){const e=t[0];e<=new Date?(d.error({title:"Error",message:"Please choose a date in the future"}),o.disabled=!0):(s=e,o.disabled=!1)}};h(u,C);o.addEventListener("click",S);function S(){s&&(D(s),o.disabled=!0,u.disabled=!0)}function D(t){c=setInterval(()=>{const e=new Date().getTime(),n=t-e;if(n<0){clearInterval(c),u.disabled=!1,o.disabled=!0;return}const r=k(n);q(r)},1e3)}function k(t){const i=Math.floor(t/864e5),l=Math.floor(t%864e5/36e5),m=Math.floor(t%36e5/6e4),f=Math.floor(t%6e4/1e3);return{days:i,hours:l,minutes:m,seconds:f}}function a(t){return String(t).padStart(2,"0")}function q({days:t,hours:e,minutes:n,seconds:r}){p.textContent=a(t),y.textContent=a(e),b.textContent=a(n),g.textContent=a(r)}d.settings({class:"izi-toast",position:"topRight",backgroundColor:"rgba(239, 64, 64, 1)",progressBarColor:"rgba(181, 27, 27, 1)",theme:"dark"});
//# sourceMappingURL=commonHelpers.js.map
