(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var c=n(7),a=n.n(c),o=n(2),r=n(3),i=n(5),s=n(4),l=(n(12),n(1)),u=n(0),d=function(t){Object(i.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={date:new Date},t.timerId=0,t}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.timerId=window.setInterval((function(){var e=new Date;t.setState({date:e}),console.log(e.toLocaleTimeString())}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerId)}},{key:"render",value:function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("strong",{children:this.props.name})," time is ",this.state.date.toLocaleTimeString()]})}}]),n}(l.Component),h=function(t){Object(i.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={hasClock:!0,clockName:"Clock 1"},t.timerId=setInterval((function(){var e=Math.random().toString().slice(2,6);t.setState({clockName:"Clock ".concat(e)})}),3e3),t.showClock=function(){t.setState({hasClock:!0})},t.hideClock=function(){t.setState({hasClock:!1})},t}return Object(r.a)(n,[{key:"componentDidMount",value:function(){document.addEventListener("click",this.showClock),document.addEventListener("contextmenu",this.hideClock)}},{key:"render",value:function(){var t=this.state,e=t.hasClock,n=t.clockName;return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"React clock"}),Object(u.jsx)("div",{children:Object(u.jsx)("div",{children:e&&Object(u.jsx)(d,{name:n})})})]})}}]),n}(l.Component),v=h;a.a.render(Object(u.jsx)(v,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.588662ee.chunk.js.map