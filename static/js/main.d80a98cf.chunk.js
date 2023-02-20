(this.webpackJsonpconnect4=this.webpackJsonpconnect4||[]).push([[0],{13:function(e,r,t){},8:function(e,r,t){"use strict";t.r(r);var n=t(2),a=t(3),i=t(5),s=t(4),l=t(1),u=t.n(l),o=t(7),f=t.n(o),c=(t(13),t(0));function d(e){return Object(c.jsx)("button",{className:"square",onClick:function(){return e.onClick()},children:Object(c.jsx)("div",{className:"Red"===e.value?"circle red-player":"Yellow"===e.value?"circle yellow-player":"circle"})})}var v=function(e){Object(i.a)(t,e);var r=Object(s.a)(t);function t(){return Object(n.a)(this,t),r.apply(this,arguments)}return Object(a.a)(t,[{key:"renderSquare",value:function(e){return Object(c.jsx)(d,{value:this.props.value[e],onClick:this.props.onClick})}},{key:"render",value:function(){return Object(c.jsxs)("div",{className:"board-col",children:[this.renderSquare(5),this.renderSquare(4),this.renderSquare(3),this.renderSquare(2),this.renderSquare(1),this.renderSquare(0)]})}}]),t}(u.a.Component),h=function(e){Object(i.a)(t,e);var r=Object(s.a)(t);function t(){var e;return Object(n.a)(this,t),(e=r.call(this)).state={boardValue:new Array(7).fill(null).map((function(e){return new Array(6).fill(null)})),redIsNext:!0,winner:null,vsComp:!0},e}return Object(a.a)(t,[{key:"handleReset",value:function(){for(var e=this.state.boardValue.slice(),r=0;r<7;r++)for(var t=0;t<6;t++)e[r][t]=null;this.setState({boardValue:e,redIsNext:!0,winner:null})}},{key:"miniMax",value:function(e,r,t,n,a,i,s,l){var u;if(0===a||x(e,s,l)||O(e))return function(e){for(var r=0,t=0;t<7;t++)for(var n=0;n<3;n++)r+=b(e[t][n],e[t][n+1],e[t][n+2],e[t][n+3]);for(var a=0;a<6;a++)for(var i=0;i<4;i++)r+=b(e[i][a],e[i+1][a],e[i+2][a],e[i+3][a]);for(var s=0;s<4;s++)for(var l=0;l<3;l++)r+=b(e[s][l],e[s+1][l+1],e[s+2][l+2],e[s+3][l+3]);for(var u=6;u>2;u--)for(var o=0;o<3;o++)r+=b(e[u][o],e[u-1][o+1],e[u-2][o+2],e[u-3][o+3]);return r}(e);for(var o="Red"===r?"Yellow":"Red",f="Red"===r?1/0:-1/0,c=3,d=0;d<7;d++)if(i[d]<=5)if(e[d][i[d]]=r,i[d]++,u=this.miniMax(e,o,t,n,a-1,i,d,i[d]-1),i[d]--,e[d][i[d]]=null,"Red"===r){if(f>u&&(f=u,c=d),t>(n=n>f?f:n))break}else if(f<u&&(f=u,c=d),(t=f>t?f:t)>n)break;return 8===a?c:f}},{key:"AIplay",value:function(e,r){var t=this.state.boardValue.slice();if(!x(t,e,r)){for(var n=this.state.redIsNext?"Red":"Yellow",a=new Array(7).fill(7),i=0;i<7;i++)for(var s=0;s<6;s++)if(null===t[i][s]){a[i]=s;break}var l=this.miniMax(t,n,-1/0,1/0,8,a,e,r);t[l][a[l]]=n;var u=x(t,l,a[l])?n:null;this.setState({boardValue:t,redIsNext:!this.state.redIsNext,winner:u})}}},{key:"handleClick",value:function(e){var r=this;if(null===this.state.winner){for(var t=this.state.boardValue.slice(),n=this.state.redIsNext?"Red":"Yellow",a=null,i=0;i<=5;i++)if(null===t[e][i]){a=i,t[e][i]=n;break}if(null!==a){var s=x(t,e,a)?n:null;this.state.vsComp?this.setState({boardValue:t,redIsNext:!this.state.redIsNext,winner:s},(function(){return r.AIplay(e,a)})):this.setState({boardValue:t,redIsNext:!this.state.redIsNext,winner:s})}}}},{key:"changeMode",value:function(){this.setState({vsComp:!this.state.vsComp})}},{key:"renderCol",value:function(e){var r=this;return Object(c.jsx)(v,{onClick:function(){return r.handleClick(e)},value:this.state.boardValue[e]})}},{key:"render",value:function(){var e=this,r=this.state.vsComp?this.state.redIsNext?"COMPUTER":"USER":this.state.redIsNext?"YELLOW":"RED",t=this.state.redIsNext?"RED":"YELLOW",n=O(this.state.boardValue.slice()),a=this.state.vsComp?this.state.winner?r+" WINS ":n?"DRAW":"CAN YOU BEAT THE COMPUTER":this.state.winner?r+"  WINS ":n?"DRAW":t+"'S TURN",i=this.state.vsComp?"AI":"MULTIPLAYER";return Object(c.jsxs)("div",{className:"game",children:[Object(c.jsx)("div",{className:"status",children:a}),Object(c.jsxs)("div",{className:"game-board",children:[this.renderCol(0),this.renderCol(1),this.renderCol(2),this.renderCol(3),this.renderCol(4),this.renderCol(5),this.renderCol(6)]}),Object(c.jsxs)("div",{className:"btn",children:[Object(c.jsx)("button",{className:"reset",onClick:function(){return e.handleReset()},children:"RESET"}),Object(c.jsx)("button",{className:"mode",onClick:function(){return e.changeMode()},children:i})]})]})}}]),t}(u.a.Component);function b(e,r,t,n){var a=0,i=0;return"Red"===e&&a++,"Red"===r&&a++,"Red"===t&&a++,"Red"===n&&a++,"Yellow"===e&&i++,"Yellow"===r&&i++,"Yellow"===t&&i++,"Yellow"===n&&i++,4===i&&0===a?5e3:3===i&&0===a?50:2===i&&0===a?4:0===i&&4===a?-5e3:0===i&&3===a?-50:0===i&&2===a?-4:0}function j(e,r,t,n){return e===r&&r===t&&t===n&&null!==e}function O(e){for(var r=0;r<7;r++)if(null===e[r][5])return!1;return!0}function x(e,r,t){if(t<=2){for(var n=0;n<=t;n++)if(j(e[r][n],e[r][n+1],e[r][n+2],e[r][n+3]))return!0}else if(t>2&&t<=5)for(var a=6;a>=t;a--)if(j(e[r][a],e[r][a-1],e[r][a-2],e[r][a-3]))return!0;if(r<=3){for(var i=0;i<=r;i++)if(j(e[i][t],e[i+1][t],e[i+2][t],e[i+3][t]))return!0}else if(r>3&&r<=6)for(var s=6;s>=r;s--)if(j(e[s][t],e[s-1][t],e[s-2][t],e[s-3][t]))return!0;if(t<=3&&r<=3)if(t===r){for(var l=0;l<=t;l++)if(j(e[l][l],e[l+1][l+1],e[l+2][l+2],e[l+3][l+3]))return!0}else if(t<r){for(var u=0,o=r-t;u<=t;u++,o++)if(j(e[o][u],e[o+1][u+1],e[o+2][u+2],e[o+3][u+3]))return!0}else if(r<t)for(var f=0,c=t-r;f<=r;c++,f++)if(j(e[f][c],e[f+1][c+1],e[f+2][c+2],e[f+3][c+3]))return!0;if(t>=2&&r>2)if(t===r){for(var d=5;d>=t;d--)if(j(e[d][d],e[d-1][d-1],e[d-2][d-2],e[d-3][d-3]))return!0}else if(t<r){for(var v=6,h=6-r+t;v>=r;v--,h--)if(j(e[v][h],e[v-1][h-1],e[v-2][h-2],e[v-3][h-3]))return!0}else if(t>r)for(var b=5,O=5-t+r;b>=t;b--,O--)if(j(e[O][b],e[O-1][b-1],e[O-2][b-2],e[O-3][b-3]))return!0;if(t<=3&&r>=3)if(t===6-r){for(var x=6,C=0;x>=r;x--,C++)if(j(e[x][C],e[x-1][C+1],e[x-2][C+2],e[x-3][C+3]))return!0}else if(t<6-r){for(var m=t+r,p=0;m>=r;m--,p++)if(j(e[m][p],e[m-1][p+1],e[m-2][p+2],e[m-3][p+3]))return!0}else for(var N=6,k=t+r-6;N>=r;N--,k++)if(j(e[N][k],e[N-1][k+1],e[N-2][k+2],e[N-3][k+3]))return!0;if(t>=2&&r<4)if(r===5-t){for(var R=0,w=5;R<=r;R++,w--)if(j(e[R][w],e[R+1][w-1],e[R+2][w-2],e[R+3][w-3]))return!0}else if(r>5-t){for(var y=r,I=5;y<=r;y++,I--)if(j(e[y][I],e[y+1][I-1],e[y+2][I-2],e[y+3][I-3]))return!0}else for(var S=0,E=t+r;S<=r;S++,E--)if(j(e[S][E],e[S+1][E-1],e[S+2][E-2],e[S+3][E-3]))return!0;return null}var C=function(e){Object(i.a)(t,e);var r=Object(s.a)(t);function t(){return Object(n.a)(this,t),r.apply(this,arguments)}return Object(a.a)(t,[{key:"render",value:function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"Connect4"}),Object(c.jsx)(h,{})]})}}]),t}(u.a.Component);f.a.render(Object(c.jsx)(C,{}),document.getElementById("root"))}},[[8,1,2]]]);
//# sourceMappingURL=main.d80a98cf.chunk.js.map