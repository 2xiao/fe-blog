import{_ as l,r as c,o as p,c as r,a as n,b as s,d as t,w as o,f as u,e as d}from"./app-Kkp_66uf.js";const k={},m=n("h1",{id:"_1472-设计浏览器历史记录",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1472-设计浏览器历史记录","aria-hidden":"true"},"#"),s(" 1472. 设计浏览器历史记录")],-1),h=n("code",null,"栈",-1),b=n("code",null,"设计",-1),v=n("code",null,"数组",-1),q=n("code",null,"链表",-1),g=n("code",null,"数据流",-1),_=n("code",null,"双向链表",-1),f={href:"https://leetcode.cn/problems/design-browser-history",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"力扣",-1),w={href:"https://leetcode.com/problems/design-browser-history",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"LeetCode",-1),H=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You have a <strong>browser</strong> of one tab where you start on the <code>homepage</code> and you can visit another <code>url</code>, get back in the history number of <code>steps</code> or move forward in the history number of <code>steps</code>.</p><p>Implement the <code>BrowserHistory</code> class:</p><ul><li><code>BrowserHistory(string homepage)</code> Initializes the object with the <code>homepage</code> of the browser.</li><li><code>void visit(string url)</code> Visits <code>url</code> from the current page. It clears up all the forward history.</li><li><code>string back(int steps)</code> Move <code>steps</code> back in history. If you can only return <code>x</code> steps in the history and <code>steps &gt; x</code>, you will return only <code>x</code> steps. Return the current <code>url</code> after moving back in history <strong>at most</strong> <code>steps</code>.</li><li><code>string forward(int steps)</code> Move <code>steps</code> forward in history. If you can only forward <code>x</code> steps in the history and <code>steps &gt; x</code>, you will forward only <code>x</code> steps. Return the current <code>url</code> after forwarding in history <strong>at most</strong> <code>steps</code>.</li></ul><p><strong>Example:</strong></p><blockquote><p>Input:</p><p>[&quot;BrowserHistory&quot;,&quot;visit&quot;,&quot;visit&quot;,&quot;visit&quot;,&quot;back&quot;,&quot;back&quot;,&quot;forward&quot;,&quot;visit&quot;,&quot;forward&quot;,&quot;back&quot;,&quot;back&quot;]</p><p>[[&quot;leetcode.com&quot;],[&quot;google.com&quot;],[&quot;facebook.com&quot;],[&quot;youtube.com&quot;],[1],[1],[1],[&quot;linkedin.com&quot;],[2],[2],[7]]</p><p>Output:</p><p>[null,null,null,null,&quot;facebook.com&quot;,&quot;google.com&quot;,&quot;facebook.com&quot;,null,&quot;linkedin.com&quot;,&quot;google.com&quot;,&quot;leetcode.com&quot;]</p><p>Explanation:</p><p>BrowserHistory browserHistory = new BrowserHistory(&quot;leetcode.com&quot;);</p><p>browserHistory.visit(&quot;google.com&quot;) // You are in &quot;leetcode.com&quot;. Visit &quot;google.com&quot;</p><p>browserHistory.visit(&quot;facebook.com&quot;) // You are in &quot;google.com&quot;. Visit &quot;facebook.com&quot;</p><p>browserHistory.visit(&quot;youtube.com&quot;) // You are in &quot;facebook.com&quot;. Visit &quot;youtube.com&quot;</p><p>browserHistory.back(1); // You are in &quot;youtube.com&quot;, move back to &quot;facebook.com&quot; return &quot;facebook.com&quot;</p><p>browserHistory.back(1); // You are in &quot;facebook.com&quot;, move back to &quot;google.com&quot; return &quot;google.com&quot;</p><p>browserHistory.forward(1); // You are in &quot;google.com&quot;, move forward to &quot;facebook.com&quot; return &quot;facebook.com&quot;</p><p>browserHistory.visit(&quot;linkedin.com&quot;) // You are in &quot;facebook.com&quot;. Visit &quot;linkedin.com&quot;</p><p>browserHistory.forward(2); // You are in &quot;linkedin.com&quot;, you cannot move forward any steps.</p><p>browserHistory.back(2); // You are in &quot;linkedin.com&quot;, move back two steps to &quot;facebook.com&quot; then to &quot;google.com&quot;. return &quot;google.com&quot;</p><p>browserHistory.back(7); // You are in &quot;google.com&quot;, you can move back only one step to &quot;leetcode.com&quot;. return &quot;leetcode.com&quot;</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= homepage.length &lt;= 20</code></li><li><code>1 &lt;= url.length &lt;= 20</code></li><li><code>1 &lt;= steps &lt;= 100</code></li><li><code>homepage</code> and <code>url</code> consist of &#39;.&#39; or lower case English letters.</li><li>At most <code>5000</code> calls will be made to <code>visit</code>, <code>back</code>, and <code>forward</code>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>设计一个只支持单个标签页的 <strong>浏览器</strong> ，最开始浏览的网页是 <code>homepage</code> ，可以访问其他的网站 <code>url</code> ，也可以在浏览历史中后退 <code>steps</code> 步或前进 <code>steps</code> 步。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>使用栈来存储浏览器的访问历史，使用 <code>cur_index</code> 变量来存储当前访问的网址在栈中的位置。</p><ul><li>visit： <ul><li>先清空 <code>cur_index</code> 之后的历史记录；</li><li>将 <code>url</code> 放入栈顶；</li><li>将 <code>cur_index</code> 指向栈顶；</li></ul></li><li>back：比较栈中存储的历史记录数 <code>n</code> 和 <code>steps</code> 的大小，最多只能倒退 <code>n</code> 步</li><li>forward: 比较 <code>cur_index</code> 之后的历史记录数 <code>m</code> 和 <code>steps</code> 的大小，最多只能前进 <code>m</code> 步</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">BrowserHistory</span> <span class="token punctuation">{</span>
	<span class="token comment">// @param {string} homepage</span>
	<span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">homepage</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>history <span class="token operator">=</span> <span class="token punctuation">[</span>homepage<span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>cur_index <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// @param {string} url</span>
	<span class="token comment">// @return {void}</span>
	<span class="token function">visit</span><span class="token punctuation">(</span><span class="token parameter">url</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// clear forward history</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>history <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>history<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>cur_index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>history<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>cur_index<span class="token operator">++</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// @param {number} steps</span>
	<span class="token comment">// @return {string}</span>
	<span class="token function">back</span><span class="token punctuation">(</span><span class="token parameter">steps</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>cur_index <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>cur_index <span class="token operator">-</span> steps<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>history<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>cur_index<span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// @param {number} steps</span>
	<span class="token comment">// @return {string}</span>
	<span class="token function">forward</span><span class="token punctuation">(</span><span class="token parameter">steps</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>cur_index <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>history<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>cur_index <span class="token operator">+</span> steps<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>history<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>cur_index<span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token doc-comment comment">/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,16),Y=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),B=n("td",{style:{"text-align":"center"}},"2254",-1),V=n("td",{style:{"text-align":"left"}},"设计视频共享平台 🔒",-1),j=n("td",{style:{"text-align":"center"}},null,-1),I={style:{"text-align":"left"}},E=n("code",null,"栈",-1),C=n("code",null,"设计",-1),L=n("code",null,"哈希表",-1),M=n("code",null,"1+",-1),N=n("td",{style:{"text-align":"center"}},"🔴",-1),R={style:{"text-align":"center"}},z={href:"https://leetcode.cn/problems/design-video-sharing-platform",target:"_blank",rel:"noopener noreferrer"},A={href:"https://leetcode.com/problems/design-video-sharing-platform",target:"_blank",rel:"noopener noreferrer"};function O(S,T){const i=c("font"),e=c("RouterLink"),a=c("ExternalLinkIcon");return p(),r("div",null,[m,n("p",null,[s("🟠 "),t(i,{color:"#ffb800"},{default:o(()=>[s("Medium")]),_:1}),s("  🔖  "),t(e,{to:"/tag/stack.html"},{default:o(()=>[h]),_:1}),s(),t(e,{to:"/tag/design.html"},{default:o(()=>[b]),_:1}),s(),t(e,{to:"/tag/array.html"},{default:o(()=>[v]),_:1}),s(),t(e,{to:"/tag/linked-list.html"},{default:o(()=>[q]),_:1}),s(),t(e,{to:"/tag/data-stream.html"},{default:o(()=>[g]),_:1}),s(),t(e,{to:"/tag/doubly-linked-list.html"},{default:o(()=>[_]),_:1}),s("  🔗 "),n("a",f,[y,t(a)]),s(),n("a",w,[x,t(a)])]),H,u(" prettier-ignore "),n("table",null,[Y,n("tbody",null,[n("tr",null,[B,V,j,n("td",I,[t(e,{to:"/tag/stack.html"},{default:o(()=>[E]),_:1}),s(),t(e,{to:"/tag/design.html"},{default:o(()=>[C]),_:1}),s(),t(e,{to:"/tag/hash-table.html"},{default:o(()=>[L]),_:1}),s(),M]),N,n("td",R,[n("a",z,[s("🀄️"),t(a)]),s(),n("a",A,[s("🔗"),t(a)])])])])])])}const F=l(k,[["render",O],["__file","1472.html.vue"]]);export{F as default};
