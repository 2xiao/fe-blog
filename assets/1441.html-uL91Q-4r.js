import{_ as l,r as p,o as i,c as r,a as t,b as n,d as e,w as s,f as u,e as d}from"./app-9Xw5divW.js";const h={},k=t("h1",{id:"_1441-用栈操作构建数组",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_1441-用栈操作构建数组","aria-hidden":"true"},"#"),n(" 1441. 用栈操作构建数组")],-1),m=t("code",null,"栈",-1),g=t("code",null,"数组",-1),f=t("code",null,"模拟",-1),_={href:"https://leetcode.cn/problems/build-an-array-with-stack-operations",target:"_blank",rel:"noopener noreferrer"},b=t("code",null,"力扣",-1),v={href:"https://leetcode.com/problems/build-an-array-with-stack-operations",target:"_blank",rel:"noopener noreferrer"},y=t("code",null,"LeetCode",-1),x=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given an integer array <code>target</code> and an integer <code>n</code>.</p><p>You have an empty stack with the two following operations:</p><ul><li><strong><code>&quot;Push&quot;</code></strong>: pushes an integer to the top of the stack.</li><li><strong><code>&quot;Pop&quot;</code></strong>: removes the integer on the top of the stack.</li></ul><p>You also have a stream of the integers in the range <code>[1, n]</code>.</p><p>Use the two stack operations to make the numbers in the stack (from the bottom to the top) equal to <code>target</code>. You should follow the following rules:</p><ul><li>If the stream of the integers is not empty, pick the next integer from the stream and push it to the top of the stack.</li><li>If the stack is not empty, pop the integer at the top of the stack.</li><li>If, at any moment, the elements in the stack (from the bottom to the top) are equal to <code>target</code>, do not read new integers from the stream and do not do more operations on the stack.</li></ul><p>Return <em>the stack operations needed to build</em><code>target</code> following the mentioned rules. If there are multiple valid answers, return <strong>any of them</strong>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: target = [1,3], n = 3</p><p>Output: [&quot;Push&quot;,&quot;Push&quot;,&quot;Pop&quot;,&quot;Push&quot;]</p><p>Explanation: Initially the stack s is empty. The last element is the top of the stack.</p><p>Read 1 from the stream and push it to the stack. s = [1].</p><p>Read 2 from the stream and push it to the stack. s = [1,2].</p><p>Pop the integer on the top of the stack. s = [1].</p><p>Read 3 from the stream and push it to the stack. s = [1,3].</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: target = [1,2,3], n = 3</p><p>Output: [&quot;Push&quot;,&quot;Push&quot;,&quot;Push&quot;]</p><p>Explanation: Initially the stack s is empty. The last element is the top of the stack.</p><p>Read 1 from the stream and push it to the stack. s = [1].</p><p>Read 2 from the stream and push it to the stack. s = [1,2].</p><p>Read 3 from the stream and push it to the stack. s = [1,2,3].</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: target = [1,2], n = 4</p><p>Output: [&quot;Push&quot;,&quot;Push&quot;]</p><p>Explanation: Initially the stack s is empty. The last element is the top of the stack.</p><p>Read 1 from the stream and push it to the stack. s = [1].</p><p>Read 2 from the stream and push it to the stack. s = [1,2].</p><p>Since the stack (from the bottom to the top) is equal to target, we stop the stack operations.</p><p>The answers that read integer 3 from the stream are not accepted.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= target.length &lt;= 100</code></li><li><code>1 &lt;= n &lt;= 100</code></li><li><code>1 &lt;= target[i] &lt;= n</code></li><li><code>target</code> is strictly increasing.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个数组 <code>target</code> 和一个整数 <code>n</code>。每次迭代，需要从 <code>list = { 1 , 2 , 3 ..., n }</code> 中依次读取一个数字。</p><p>请使用下述操作来构建目标数组 <code>target</code> ：</p><ul><li><code>&quot;Push&quot;</code>：从 <code>list</code> 中读取一个新元素， 并将其推入数组中。</li><li><code>&quot;Pop&quot;</code>：删除数组中的最后一个元素。</li><li>如果目标数组构建完成，就停止读取更多元素。</li><li>题目数据保证目标数组严格递增，并且只包含 <code>1</code> 到 <code>n</code> 之间的数字。</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>操作的对象是 <code>1</code> 到 <code>n</code> 按顺序排列的数字，因为 <code>target</code> 中数字是严格递增的，因此只要遍历 <code>1 ~ n</code> ，每次操作一个数字时，与 <code>target</code> 的第 <code>idx</code> 个元素对比：</p><ul><li>如果它与 <code>target[idx]</code> 相等，则只需要将它 <code>Push</code> 入栈即可，<code>idx++</code>；</li><li>如果它与 <code>target[idx]</code> 中，可以先将其 <code>Push</code> 入栈，紧接着 <code>Pop</code> 出栈；</li><li>当 <code>idx</code> 与 <code>target</code> 的长度相等时，说明目标数组已经构建完成，调出循环；</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">target</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">n</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">buildArray</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> idx <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>target<span class="token punctuation">[</span>idx<span class="token punctuation">]</span> <span class="token operator">!=</span> i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&#39;Push&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&#39;Pop&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>target<span class="token punctuation">[</span>idx<span class="token punctuation">]</span> <span class="token operator">===</span> i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&#39;Push&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			idx<span class="token operator">++</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>idx <span class="token operator">===</span> target<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token keyword">break</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,26),q=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"center"}},"难度"),t("th",{style:{"text-align":"center"}},"力扣")])],-1),w=t("td",{style:{"text-align":"center"}},"2869",-1),P=t("td",{style:{"text-align":"left"}},"收集元素的最少操作次数",-1),I=t("td",{style:{"text-align":"center"}},null,-1),R={style:{"text-align":"left"}},E=t("code",null,"位运算",-1),C=t("code",null,"数组",-1),L=t("code",null,"哈希表",-1),N=t("td",{style:{"text-align":"center"}},"🟢",-1),T={style:{"text-align":"center"}},V={href:"https://leetcode.cn/problems/minimum-operations-to-collect-elements",target:"_blank",rel:"noopener noreferrer"},Y={href:"https://leetcode.com/problems/minimum-operations-to-collect-elements",target:"_blank",rel:"noopener noreferrer"};function j(B,O){const c=p("font"),a=p("RouterLink"),o=p("ExternalLinkIcon");return i(),r("div",null,[k,t("p",null,[n("🟠 "),e(c,{color:"#ffb800"},{default:s(()=>[n("Medium")]),_:1}),n("  🔖  "),e(a,{to:"/tag/stack.html"},{default:s(()=>[m]),_:1}),n(),e(a,{to:"/tag/array.html"},{default:s(()=>[g]),_:1}),n(),e(a,{to:"/tag/simulation.html"},{default:s(()=>[f]),_:1}),n("  🔗 "),t("a",_,[b,e(o)]),n(),t("a",v,[y,e(o)])]),x,u(" prettier-ignore "),t("table",null,[q,t("tbody",null,[t("tr",null,[w,P,I,t("td",R,[e(a,{to:"/tag/bit-manipulation.html"},{default:s(()=>[E]),_:1}),n(),e(a,{to:"/tag/array.html"},{default:s(()=>[C]),_:1}),n(),e(a,{to:"/tag/hash-table.html"},{default:s(()=>[L]),_:1})]),N,t("td",T,[t("a",V,[n("🀄️"),e(o)]),n(),t("a",Y,[n("🔗"),e(o)])])])])])])}const A=l(h,[["render",j],["__file","1441.html.vue"]]);export{A as default};
