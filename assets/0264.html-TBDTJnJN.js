import{_ as p,r as c,o as i,c as d,a as n,d as e,b as t,w as s,f as r,e as u}from"./app-ynO5B_DP.js";const _={},h={id:"_264-丑数-ii",tabindex:"-1"},m=n("a",{class:"header-anchor",href:"#_264-丑数-ii","aria-hidden":"true"},"#",-1),k={href:"https://leetcode.com/problems/ugly-number-ii",target:"_blank",rel:"noopener noreferrer"},g=n("code",null,"哈希表",-1),f=n("code",null,"数学",-1),b=n("code",null,"动态规划",-1),v=n("code",null,"堆（优先队列）",-1),y={href:"https://leetcode.com/problems/ugly-number-ii",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"LeetCode",-1),w=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>An <strong>ugly number</strong> is a positive integer whose prime factors are limited to <code>2</code>, <code>3</code>, and <code>5</code>.</p><p>Given an integer <code>n</code>, return <em>the</em> <code>nth</code> <em><strong>ugly number</strong></em>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: n = 10</p><p>Output: 12</p><p>Explanation: [1, 2, 3, 4, 5, 6, 8, 9, 10, 12] is the sequence of the first 10 ugly numbers.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: n = 1</p><p>Output: 1</p><p>Explanation: 1 has no prime factors, therefore all of its prime factors are limited to 2, 3, and 5.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= n &lt;= 1690</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个整数 <code>n</code> ，请你找出并返回第 <code>n</code> 个 <strong>丑数</strong> 。</p><p>说明：丑数是只包含质因数 <code>2</code>、<code>3</code> 和/或 <code>5</code> 的正整数；<code>1</code> 是丑数。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>这道题很精妙，你看着它好像是道数学题，实际上它却是一个合并多个有序链表的问题，同时用到了筛选素数的思路。</p><p>类似 <strong>如何高效寻找素数</strong> 的思路：如果一个数 x 是丑数，那么 <code>x * 2</code>, <code>x * 3</code>, <code>x * 5</code> 都一定是丑数。</p><p>我们把所有丑数想象成一个从小到大排序的链表，就是这个样子：</p><p><code>1 -&gt; 2 -&gt; 3 -&gt; 4 -&gt; 5 -&gt; 6 -&gt; 8 -&gt; ...</code></p><p>然后，我们可以把丑数分为三类：<code>2</code> 的倍数、<code>3</code> 的倍数、<code>5</code> 的倍数（按照题目的意思，<code>1</code> 算作特殊的丑数，放在开头），这三类丑数就好像三条有序链表，如下：</p><ul><li>能被 <code>2</code> 整除的丑数：</li></ul><p><code>1 -&gt; 1*2 -&gt; 2*2 -&gt; 3*2 -&gt; 4*2 -&gt; 5*2 -&gt; 6*2 -&gt; 8*2 -&gt;...</code></p><ul><li>能被 <code>3</code> 整除的丑数：</li></ul><p><code>1 -&gt; 1*3 -&gt; 2*3 -&gt; 3*3 -&gt; 4*3 -&gt; 5*3 -&gt; 6*3 -&gt; 8*3 -&gt;...</code></p><ul><li>能被 <code>5</code> 整除的丑数：</li></ul><p><code>1 -&gt; 1*5 -&gt; 2*5 -&gt; 3*5 -&gt; 4*5 -&gt; 5*5 -&gt; 6*5 -&gt; 8*5 -&gt;...</code></p><p>我们其实就是想把这三条「有序链表」合并在一起并去重，合并的结果就是丑数的序列，然后求合并后的这条有序链表中第 <code>n</code> 个元素是什么。</p><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">n</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">nthUglyNumber</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> index2 <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
		index3 <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
		index5 <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> val2 <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span>
		val3 <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span>
		val5 <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> ugly <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> index <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>index <span class="token operator">&lt;</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> min <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>val2<span class="token punctuation">,</span> val3<span class="token punctuation">,</span> val5<span class="token punctuation">)</span><span class="token punctuation">;</span>
		ugly<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">=</span> min<span class="token punctuation">;</span>
		index<span class="token operator">++</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>min <span class="token operator">==</span> val2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			val2 <span class="token operator">=</span> <span class="token number">2</span> <span class="token operator">*</span> ugly<span class="token punctuation">[</span>index2<span class="token punctuation">]</span><span class="token punctuation">;</span>
			index2<span class="token operator">++</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>min <span class="token operator">==</span> val3<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			val3 <span class="token operator">=</span> <span class="token number">3</span> <span class="token operator">*</span> ugly<span class="token punctuation">[</span>index3<span class="token punctuation">]</span><span class="token punctuation">;</span>
			index3<span class="token operator">++</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>min <span class="token operator">==</span> val5<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			val5 <span class="token operator">=</span> <span class="token number">5</span> <span class="token operator">*</span> ugly<span class="token punctuation">[</span>index5<span class="token punctuation">]</span><span class="token punctuation">;</span>
			index5<span class="token operator">++</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> ugly<span class="token punctuation">[</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,28),q=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"left"}},"难度")])],-1),I=n("td",{style:{"text-align":"center"}},"23",-1),E={style:{"text-align":"left"}},M={href:"https://leetcode.com/problems/merge-k-sorted-lists",target:"_blank",rel:"noopener noreferrer"},N={style:{"text-align":"center"}},C={href:"/problem/0023",target:"_blank",rel:"noopener noreferrer"},L={style:{"text-align":"left"}},V=n("code",null,"链表",-1),j=n("code",null,"分治",-1),B=n("code",null,"堆（优先队列）",-1),A=n("code",null,"1+",-1),O={style:{"text-align":"left"}},R=n("td",{style:{"text-align":"center"}},"204",-1),G={style:{"text-align":"left"}},H={href:"https://leetcode.com/problems/count-primes",target:"_blank",rel:"noopener noreferrer"},K=n("td",{style:{"text-align":"center"}},null,-1),S={style:{"text-align":"left"}},T=n("code",null,"数组",-1),U=n("code",null,"数学",-1),z=n("code",null,"枚举",-1),D=n("code",null,"1+",-1),F={style:{"text-align":"left"}},J=n("td",{style:{"text-align":"center"}},"263",-1),P={style:{"text-align":"left"}},Q={href:"https://leetcode.com/problems/ugly-number",target:"_blank",rel:"noopener noreferrer"},W=n("td",{style:{"text-align":"center"}},null,-1),X={style:{"text-align":"left"}},Y=n("code",null,"数学",-1),Z={style:{"text-align":"left"}},$=n("td",{style:{"text-align":"center"}},"279",-1),nn={style:{"text-align":"left"}},tn={href:"https://leetcode.com/problems/perfect-squares",target:"_blank",rel:"noopener noreferrer"},en={style:{"text-align":"center"}},sn={href:"/problem/0279",target:"_blank",rel:"noopener noreferrer"},an={style:{"text-align":"left"}},on=n("code",null,"广度优先搜索",-1),ln=n("code",null,"数学",-1),cn=n("code",null,"动态规划",-1),pn={style:{"text-align":"left"}},dn=n("td",{style:{"text-align":"center"}},"313",-1),rn={style:{"text-align":"left"}},un={href:"https://leetcode.com/problems/super-ugly-number",target:"_blank",rel:"noopener noreferrer"},_n=n("td",{style:{"text-align":"center"}},null,-1),hn={style:{"text-align":"left"}},mn=n("code",null,"数组",-1),kn=n("code",null,"数学",-1),gn=n("code",null,"动态规划",-1),fn={style:{"text-align":"left"}},bn=n("td",{style:{"text-align":"center"}},"1201",-1),vn={style:{"text-align":"left"}},yn={href:"https://leetcode.com/problems/ugly-number-iii",target:"_blank",rel:"noopener noreferrer"},xn=n("td",{style:{"text-align":"center"}},null,-1),wn={style:{"text-align":"left"}},qn=n("code",null,"数学",-1),In=n("code",null,"二分查找",-1),En=n("code",null,"组合数学",-1),Mn=n("code",null,"1+",-1),Nn={style:{"text-align":"left"}};function Cn(Ln,Vn){const o=c("ExternalLinkIcon"),l=c("font"),a=c("RouterLink");return i(),d("div",null,[n("h1",h,[m,e(),n("a",k,[e("264. 丑数 II"),t(o)])]),n("p",null,[e("🟠 "),t(l,{color:"#ffb800"},{default:s(()=>[e("Medium")]),_:1}),e("  🔖  "),t(a,{to:"/outline/tag/hash-table.html"},{default:s(()=>[g]),_:1}),e(),t(a,{to:"/outline/tag/math.html"},{default:s(()=>[f]),_:1}),e(),t(a,{to:"/outline/tag/dynamic-programming.html"},{default:s(()=>[b]),_:1}),e(),t(a,{to:"/outline/tag/heap-priority-queue.html"},{default:s(()=>[v]),_:1}),e("  🔗 "),n("a",y,[x,t(o)])]),w,r(" prettier-ignore "),n("table",null,[q,n("tbody",null,[n("tr",null,[I,n("td",E,[n("a",M,[e("合并 K 个升序链表"),t(o)])]),n("td",N,[n("a",C,[e("[✓]"),t(o)])]),n("td",L,[t(a,{to:"/outline/tag/linked-list.html"},{default:s(()=>[V]),_:1}),e(),t(a,{to:"/outline/tag/divide-and-conquer.html"},{default:s(()=>[j]),_:1}),e(),t(a,{to:"/outline/tag/heap-priority-queue.html"},{default:s(()=>[B]),_:1}),e(),A]),n("td",O,[t(l,{color:"#ff334b"},{default:s(()=>[e("Hard")]),_:1})])]),n("tr",null,[R,n("td",G,[n("a",H,[e("计数质数"),t(o)])]),K,n("td",S,[t(a,{to:"/outline/tag/array.html"},{default:s(()=>[T]),_:1}),e(),t(a,{to:"/outline/tag/math.html"},{default:s(()=>[U]),_:1}),e(),t(a,{to:"/outline/tag/enumeration.html"},{default:s(()=>[z]),_:1}),e(),D]),n("td",F,[t(l,{color:"#ffb800"},{default:s(()=>[e("Medium")]),_:1})])]),n("tr",null,[J,n("td",P,[n("a",Q,[e("丑数"),t(o)])]),W,n("td",X,[t(a,{to:"/outline/tag/math.html"},{default:s(()=>[Y]),_:1})]),n("td",Z,[t(l,{color:"#15bd66"},{default:s(()=>[e("Easy")]),_:1})])]),n("tr",null,[$,n("td",nn,[n("a",tn,[e("完全平方数"),t(o)])]),n("td",en,[n("a",sn,[e("[✓]"),t(o)])]),n("td",an,[t(a,{to:"/outline/tag/breadth-first-search.html"},{default:s(()=>[on]),_:1}),e(),t(a,{to:"/outline/tag/math.html"},{default:s(()=>[ln]),_:1}),e(),t(a,{to:"/outline/tag/dynamic-programming.html"},{default:s(()=>[cn]),_:1})]),n("td",pn,[t(l,{color:"#ffb800"},{default:s(()=>[e("Medium")]),_:1})])]),n("tr",null,[dn,n("td",rn,[n("a",un,[e("超级丑数"),t(o)])]),_n,n("td",hn,[t(a,{to:"/outline/tag/array.html"},{default:s(()=>[mn]),_:1}),e(),t(a,{to:"/outline/tag/math.html"},{default:s(()=>[kn]),_:1}),e(),t(a,{to:"/outline/tag/dynamic-programming.html"},{default:s(()=>[gn]),_:1})]),n("td",fn,[t(l,{color:"#ffb800"},{default:s(()=>[e("Medium")]),_:1})])]),n("tr",null,[bn,n("td",vn,[n("a",yn,[e("丑数 III"),t(o)])]),xn,n("td",wn,[t(a,{to:"/outline/tag/math.html"},{default:s(()=>[qn]),_:1}),e(),t(a,{to:"/outline/tag/binary-search.html"},{default:s(()=>[In]),_:1}),e(),t(a,{to:"/outline/tag/combinatorics.html"},{default:s(()=>[En]),_:1}),e(),Mn]),n("td",Nn,[t(l,{color:"#ffb800"},{default:s(()=>[e("Medium")]),_:1})])])])])])}const Bn=p(_,[["render",Cn],["__file","0264.html.vue"]]);export{Bn as default};
