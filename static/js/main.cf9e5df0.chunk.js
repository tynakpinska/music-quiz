(this["webpackJsonpmusic-quiz"]=this["webpackJsonpmusic-quiz"]||[]).push([[0],{156:function(e,t,n){e.exports=n(369)},367:function(e,t,n){},368:function(e,t,n){},369:function(e,t,n){"use strict";n.r(t);n(157);var c=n(5),a=n.n(c),r=n(150),s=n.n(r),o=(n(367),n(368),n(154)),i=n(62),u=n(151),l=n(152),h=n(155),d=n(153),m=function(e){var t={};return e.checking?(e.index===e.checkedAnswer&&(t={background:"#D50000",border:"3px solid #FFC551"}),e.index===e.correctIndex&&(t={background:"#63DB1C"})):e.index===e.checkedAnswer&&(t={background:"#004F4F",border:"3px solid #FFC551"}),a.a.createElement("button",{className:"answer",onClick:function(t){e.handleCheck(e.index)},dangerouslySetInnerHTML:{__html:e.answer},style:t})},k=function(e){var t=e.question,n=e.handleCheck,c=e.checking,r=t.incorrect,s=t.correct,o=r.slice(0,t.correctIndex),u=r.slice(t.correctIndex,3),l=[].concat(Object(i.a)(o),[s],Object(i.a)(u));return a.a.createElement("div",{className:"questions"},l.map((function(e,r){return a.a.createElement(m,{question:t,answer:e,key:r,index:r,correctIndex:t.correctIndex,checkedAnswer:t.checkedAnswer,handleCheck:n,checking:c})})))},f={questions:[],currentQuestion:0,points:0,checking:!1,blocked:!1},v=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var c;return Object(u.a)(this,n),(c=t.call(this,e)).fetchQuestions=function(){fetch("https://opentdb.com/api.php?amount=10&category=12&difficulty=easy&type=multiple").then((function(e){return e.json()})).then((function(e){c.setState({questions:Object(i.a)(e.results.map((function(e){return{question:e.question,incorrect:e.incorrect_answers,correct:e.correct_answer,correctIndex:Math.floor(4*Math.random()),checkedAnswer:""}})))})})).catch((function(e){console.log(e,"Unable to fetch questions")}))},c.handleCheck=function(e){if(!c.state.checking){var t=Object(o.a)({},c.state.questions);t[c.state.currentQuestion].checkedAnswer===e?(t[c.state.currentQuestion].checkedAnswer="",c.setState({questions:t,blocked:!0})):(t[c.state.currentQuestion].checkedAnswer=e,c.setState({questions:t,blocked:!1}))}},c.handleNext=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:c.state,n=t.questions,a=t.currentQuestion;""===n[a].checkedAnswer?c.setState({blocked:!0}):c.setState({currentQuestion:a+1,blocked:!1}),n[c.state.currentQuestion].correctIndex!==n[c.state.currentQuestion].checkedAnswer||c.state.checking||c.setState((function(e){return{points:e.points+1}}))},c.handlePrevious=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:c.state,n=t.currentQuestion;c.setState({currentQuestion:n-1})},c.handleCheckAnswers=function(){c.setState({currentQuestion:0,checking:!0})},c.handlePlayAgain=function(){c.setState(f),c.fetchQuestions()},c.state=f,c}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.fetchQuestions()}},{key:"render",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.state,n=t.questions,c=t.currentQuestion,r=t.points,s=t.checking;return 10!==c?n[c]?a.a.createElement("div",{className:"quiz"},a.a.createElement("h2",{dangerouslySetInnerHTML:{__html:n[c].question}}),a.a.createElement(k,{question:n[c],handleCheck:function(t){return e.handleCheck(t)},checking:s}),a.a.createElement("div",{className:"navButtons"},this.state.currentQuestion?a.a.createElement("button",{className:"prevBtn",onClick:this.handlePrevious},"Previous"):a.a.createElement("div",null),a.a.createElement("p",null,c+1,"/10"),a.a.createElement("button",{className:"nextBtn",onClick:this.handleNext},"Next")),this.state.blocked?a.a.createElement("p",null,"Select your answer"):a.a.createElement("div",null)):a.a.createElement("div",null):a.a.createElement("div",{className:"quiz"},a.a.createElement("p",null,"Score: ",r,"/10"),a.a.createElement("button",{onClick:this.handleCheckAnswers},"Check answers"),a.a.createElement("button",{onClick:this.handlePlayAgain},"Play again"))}}]),n}(c.Component),p=function(){return a.a.createElement("div",{className:"App"},a.a.createElement("h1",null,"Music Quiz"),a.a.createElement(v,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[156,1,2]]]);
//# sourceMappingURL=main.cf9e5df0.chunk.js.map