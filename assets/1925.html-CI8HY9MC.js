import{_ as p,r as c,o as r,c as i,a as n,b as s,d as a,w as e,f as d,e as u}from"./app-XFeYdzZv.js";const k={},h=n("h1",{id:"_1925-统计平方和三元组的数目",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1925-统计平方和三元组的数目","aria-hidden":"true"},"#"),s(" 1925. 统计平方和三元组的数目")],-1),b=n("code",null,"数学",-1),m=n("code",null,"枚举",-1),g={href:"https://leetcode.cn/problems/count-square-sum-triples",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"力扣",-1),v={href:"https://leetcode.com/problems/count-square-sum-triples",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"LeetCode",-1),y=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>A <strong>square triple</strong> <code>(a,b,c)</code> is a triple where <code>a</code>, <code>b</code>, and <code>c</code> are <strong>integers</strong> and <code>a^2 + b^2 = c^2</code>.</p><p>Given an integer <code>n</code>, return <em>the number of <strong>square triples</strong> such that</em> <code>1 &lt;= a, b, c &lt;= n</code>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: n = 5</p><p>Output: 2</p><p><strong>Explanation</strong> : The square triples are (3,4,5) and (4,3,5).</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: n = 10</p><p>Output: 4</p><p><strong>Explanation</strong> : The square triples are (3,4,5), (4,3,5), (6,8,10), and (8,6,10).</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= n &lt;= 250</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>一个 <strong>平方和三元组</strong> <code>(a,b,c)</code> 指的是满足 <code>a^2 + b^2 = c^2</code> 的 <strong>整数</strong> 三元组 <code>a</code>，<code>b</code> 和 <code>c</code> 。</p><p>给你一个整数 <code>n</code> ，请你返回满足 <code>1 &lt;= a, b, c &lt;= n</code> 的 <strong>平方和三元组</strong> 的数目。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> n = 5</p><p><strong>输出：</strong> 2</p><p><strong>解释：</strong> 平方和三元组为 (3,4,5) 和 (4,3,5) 。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> n = 10</p><p><strong>输出：</strong> 4</p><p><strong>解释：</strong> 平方和三元组为 (3,4,5)，(4,3,5)，(6,8,10) 和 (8,6,10) 。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= n &lt;= 250</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>利用平方数表</strong>：</p><ul><li>提前计算并存储从 <code>1</code> 到 <code>n</code> 的所有平方值，将其存储到一个集合中 <code>squares</code>。</li><li>这样可以快速检查某个值是否是一个平方数，而无需重复计算。</li></ul></li><li><p><strong>枚举 <code>a</code> 和 <code>b</code></strong>：</p><ul><li><code>a</code> 和 <code>b</code> 的顺序不影响结果，因此只需枚举 <code>b &gt; a</code>，避免重复。</li><li>遍历所有可能的 <code>a</code> 和 <code>b</code> 组合，计算 <code>c^2 = a^2 + b^2</code>。</li></ul></li><li><p><strong>验证 <code>c</code></strong>：</p><ul><li>检查 <code>c^2</code> 是否在平方数表中。</li><li>如果存在，则说明有两个合法的三元组 <code>(a, b, c), (b, a, c)</code>，计数器加 2。</li></ul></li><li><p><strong>返回结果</strong>：</p><ul><li>累计所有符合条件的三元组数量并返回。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n^2)</code><ul><li>构建平方值集合：<code>O(n)</code>。</li><li>枚举 <code>a, b</code> 的组合：<code>O(n^2)</code>。</li><li>总复杂度降为 <code>O(n^2)</code>。</li></ul></li><li><strong>空间复杂度</strong>：<code>O(n)</code>，需要存储平方值集合 <code>squares</code>。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">n</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">countTriples</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

	<span class="token comment">// 预处理平方值</span>
	<span class="token keyword">let</span> squares <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		squares<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>i <span class="token operator">*</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 枚举 a 和 b，确保 b &gt;= a 避免重复</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> a <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> a<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> b <span class="token operator">=</span> a<span class="token punctuation">;</span> b <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> b<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">let</span> cSquared <span class="token operator">=</span> a <span class="token operator">*</span> a <span class="token operator">+</span> b <span class="token operator">*</span> b<span class="token punctuation">;</span>
			<span class="token comment">// 检查是否存在 c，使得 c^2 == a^2 + b^2</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>squares<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>cSquared<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				count <span class="token operator">+=</span> <span class="token number">2</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> count<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,25),x=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),q=n("td",{style:{"text-align":"center"}},"2475",-1),w=n("td",{style:{"text-align":"left"}},"数组中不等三元组的数目",-1),E=n("td",{style:{"text-align":"center"}},null,-1),O={style:{"text-align":"left"}},C=n("code",null,"数组",-1),L=n("code",null,"哈希表",-1),N=n("code",null,"排序",-1),V=n("td",{style:{"text-align":"center"}},"🟢",-1),I={style:{"text-align":"center"}},S={href:"https://leetcode.cn/problems/number-of-unequal-triplets-in-array",target:"_blank",rel:"noopener noreferrer"},T={href:"https://leetcode.com/problems/number-of-unequal-triplets-in-array",target:"_blank",rel:"noopener noreferrer"};function j(B,R){const l=c("font"),t=c("RouterLink"),o=c("ExternalLinkIcon");return r(),i("div",null,[h,n("p",null,[s("🟢 "),a(l,{color:"#15bd66"},{default:e(()=>[s("Easy")]),_:1}),s("  🔖  "),a(t,{to:"/tag/math.html"},{default:e(()=>[b]),_:1}),s(),a(t,{to:"/tag/enumeration.html"},{default:e(()=>[m]),_:1}),s("  🔗 "),n("a",g,[_,a(o)]),s(),n("a",v,[f,a(o)])]),y,d(" prettier-ignore "),n("table",null,[x,n("tbody",null,[n("tr",null,[q,w,E,n("td",O,[a(t,{to:"/tag/array.html"},{default:e(()=>[C]),_:1}),s(),a(t,{to:"/tag/hash-table.html"},{default:e(()=>[L]),_:1}),s(),a(t,{to:"/tag/sorting.html"},{default:e(()=>[N]),_:1})]),V,n("td",I,[n("a",S,[s("🀄️"),a(o)]),s(),n("a",T,[s("🔗"),a(o)])])])])])])}const G=p(k,[["render",j],["__file","1925.html.vue"]]);export{G as default};
