(this["webpackJsonpmusic-quiz"]=this["webpackJsonpmusic-quiz"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),o=n(3),a=n.n(o),s=(n(14),n(15),n(1)),i=n(7),u=n(4),l=n(5),h=n(8),d=n(6),m=function(e){var t={};return e.checking?(e.index===e.checkedAnswer&&(t={background:"#D50000",border:"3px solid #FFC551"}),e.index===e.correctIndex&&(t={background:"#63DB1C"})):e.index===e.checkedAnswer&&(t={background:"#004F4F",border:"3px solid #FFC551"}),r.a.createElement("button",{className:"answer",onClick:function(t){e.handleCheck(e.index)},dangerouslySetInnerHTML:{__html:e.answer},style:t})},k=function(e){var t=e.question.incorrect,n=e.question.correct,c=t.slice(0,e.question.correctIndex),o=t.slice(e.question.correctIndex,3),a=[].concat(Object(s.a)(c),[n],Object(s.a)(o));return r.a.createElement("div",{className:"questions"},a.map((function(t,n){return r.a.createElement(m,{question:e.question,answer:t,key:n,index:n,correctIndex:e.question.correctIndex,checkedAnswer:e.question.checkedAnswer,handleCheck:e.handleCheck,checking:e.checking})})))},f=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var c;return Object(u.a)(this,n),(c=t.call(this,e)).handleCheck=function(e){var t=Object(i.a)({},c.state.questions);t[c.state.currentQuestion].checkedAnswer=e,c.setState({questions:t}),t[c.state.currentQuestion].correctIndex===e&&c.setState((function(e){return{points:e.points++}}))},c.handleNext=function(){c.setState((function(e){return{currentQuestion:e.currentQuestion++}}))},c.handlePrevious=function(){c.setState((function(e){return{currentQuestion:e.currentQuestion--}}))},c.handleCheckAnswers=function(){c.setState({currentQuestion:0,checking:!0})},c.state={questions:[],currentQuestion:0,points:0,checking:!1},c}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://opentdb.com/api.php?amount=10&category=12&difficulty=easy&type=multiple").then((function(e){return e.json()})).then((function(t){e.setState({questions:Object(s.a)(t.results.map((function(e){return{question:e.question,incorrect:e.incorrect_answers,correct:e.correct_answer,correctIndex:Math.floor(4*Math.random()),checkedAnswer:""}})))})})).catch((function(e){console.log(e,"Unable to fetch questions")}))}},{key:"render",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.state,n=t.questions,c=t.currentQuestion;return 10!==c?n[c]?r.a.createElement("div",{className:"quiz"},r.a.createElement("h2",{dangerouslySetInnerHTML:{__html:n[c].question}}),r.a.createElement(k,{question:n[c],handleCheck:function(t){return e.handleCheck(t)},checking:this.state.checking}),r.a.createElement("div",{className:"navButtons"},r.a.createElement("button",{className:"prevBtn",onClick:this.handlePrevious},"Previous"),r.a.createElement("p",null,c+1,"/10"),r.a.createElement("button",{className:"nextBtn",onClick:this.handleNext},"Next"))):r.a.createElement("div",null):r.a.createElement("div",{className:"quiz"},r.a.createElement("p",null,"Score: ",this.state.points,"/10"),r.a.createElement("button",{onClick:this.handleCheckAnswers},"Check answers"))}}]),n}(c.Component),p=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Music Quiz"),r.a.createElement(f,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,n){e.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.bdcdda2c.chunk.js.map