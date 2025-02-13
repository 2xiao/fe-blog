import{_ as p,r as c,o as i,c as d,a as n,b as e,d as t,w as s,f as r,e as u}from"./app-MXSjQbID.js";const m={},k=n("h1",{id:"_2160-拆分数位后四位数字的最小和",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2160-拆分数位后四位数字的最小和","aria-hidden":"true"},"#"),e(" 2160. 拆分数位后四位数字的最小和")],-1),g=n("code",null,"贪心",-1),h=n("code",null,"数学",-1),_=n("code",null,"排序",-1),b={href:"https://leetcode.cn/problems/minimum-sum-of-four-digit-number-after-splitting-digits",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"力扣",-1),v={href:"https://leetcode.com/problems/minimum-sum-of-four-digit-number-after-splitting-digits",target:"_blank",rel:"noopener noreferrer"},w=n("code",null,"LeetCode",-1),y=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given a <strong>positive</strong> integer <code>num</code> consisting of exactly four digits. Split <code>num</code> into two new integers <code>new1</code> and <code>new2</code> by using the <strong>digits</strong> found in <code>num</code>. <strong>Leading zeros</strong> are allowed in <code>new1</code> and <code>new2</code>, and <strong>all</strong> the digits found in <code>num</code> must be used.</p><ul><li>For example, given <code>num = 2932</code>, you have the following digits: two <code>2</code>&#39;s, one <code>9</code> and one <code>3</code>. Some of the possible pairs <code>[new1, new2]</code> are <code>[22, 93]</code>, <code>[23, 92]</code>, <code>[223, 9]</code> and <code>[2, 329]</code>.</li></ul><p>Return _the<strong>minimum</strong> possible sum of _<code>new1</code> <em>and</em><code>new2</code>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: num = 2932</p><p>Output: 52</p><p>Explanation: Some possible pairs [new1, new2] are [29, 23], [223, 9], etc.</p><p>The minimum sum can be obtained by the pair [29, 23]: 29 + 23 = 52.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: num = 4009</p><p>Output: 13</p><p>Explanation: Some possible pairs [new1, new2] are [0, 49], [490, 0], etc.</p><p>The minimum sum can be obtained by the pair [4, 9]: 4 + 9 = 13.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1000 &lt;= num &lt;= 9999</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个四位 <strong>正</strong> 整数 <code>num</code> 。请你使用 <code>num</code> 中的 <strong>数位</strong> ，将 <code>num</code> 拆成两个新的整数 <code>new1</code> 和 <code>new2</code> 。<code>new1</code> 和 <code>new2</code> 中可以有 <strong>前导 0</strong> ，且 <code>num</code> 中 <strong>所有</strong> 数位都必须使用。</p><ul><li>比方说，给你 <code>num = 2932</code> ，你拥有的数位包括：两个 <code>2</code> ，一个 <code>9</code> 和一个 <code>3</code> 。一些可能的 <code>[new1, new2]</code> 数对为 <code>[22, 93]</code>，<code>[23, 92]</code>，<code>[223, 9]</code> 和 <code>[2, 329]</code> 。</li></ul><p>请你返回可以得到的 <code>new1</code> 和 <code>new2</code> 的 <strong>最小</strong> 和。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> num = 2932</p><p><strong>输出：</strong> 52</p><p><strong>解释：</strong> 可行的 [new1, new2] 数对为 [29, 23] ，[223, 9] 等等。</p><p>最小和为数对 [29, 23] 的和：29 + 23 = 52 。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> num = 4009</p><p><strong>输出：</strong> 13</p><p><strong>解释：</strong> 可行的 [new1, new2] 数对为 [0, 49] ，[490, 0] 等等。</p><p>最小和为数对 [4, 9] 的和：4 + 9 = 13 。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1000 &lt;= num &lt;= 9999</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>拆分数字</strong>：</p><ul><li>首先将 <code>num</code> 进行拆分，提取出每一位数字并存入一个数组中。</li></ul></li><li><p><strong>排序</strong>：</p><ul><li>对数组中的数字进行升序排序。这是因为为了得到最小的和，我们希望将较小的数字分别分配到两个新数中。</li></ul></li><li><p><strong>交替分配数字</strong>：</p><ul><li>从排序后的数组中，交替地将数字分配给两个新数。这是为了平衡两个新数，使它们尽可能小。</li></ul></li><li><p><strong>计算和</strong>：</p><ul><li>最后将两个新数相加，返回其和。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><p><strong>时间复杂度</strong>：<code>O(1)</code></p><ul><li>提取数字的每一位：<code>O(log(num))</code>，其中 <code>num</code> 是输入的四位数（即最多为 4 位）。</li><li>排序：<code>O(d log d)</code>，其中 <code>d</code> 是数字的位数（最多为 4，所以 <code>d</code> 的值最大为 4，排序时间常数）。</li><li>最终计算和：<code>O(d)</code>，这部分操作是常数时间。</li><li>总的时间复杂度为 <code>O(1)</code>，因为所有操作的复杂度都与 <code>num</code> 的位数直接相关，而位数是常数。</li></ul></li><li><p><strong>空间复杂度</strong>：<code>O(1)</code>，空间主要用于存储数字数组 <code>digits</code>，其大小为 4（数字最多为 4 位）。</p></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">num</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">minimumSum</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">num</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> digits <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token comment">// 提取数字的每一位</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>num<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		digits<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>num <span class="token operator">%</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		num <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>num <span class="token operator">/</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token comment">// 对数字进行升序排序</span>
	digits<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a <span class="token operator">-</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">let</span> new1 <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
		new2 <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token comment">// 交替地将数字分配给 new1 和 new2</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> digits<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			new1 <span class="token operator">=</span> new1 <span class="token operator">*</span> <span class="token number">10</span> <span class="token operator">+</span> digits<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			new2 <span class="token operator">=</span> new2 <span class="token operator">*</span> <span class="token number">10</span> <span class="token operator">+</span> digits<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token comment">// 返回两个数字的和</span>
	<span class="token keyword">return</span> new1 <span class="token operator">+</span> new2<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,27),x=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),q=n("td",{style:{"text-align":"center"}},"258",-1),E=n("td",{style:{"text-align":"left"}},"各位相加",-1),O={style:{"text-align":"center"}},L={style:{"text-align":"left"}},S=n("code",null,"数学",-1),C=n("code",null,"数论",-1),N=n("code",null,"模拟",-1),V=n("td",{style:{"text-align":"center"}},"🟢",-1),I={style:{"text-align":"center"}},j={href:"https://leetcode.cn/problems/add-digits",target:"_blank",rel:"noopener noreferrer"},B={href:"https://leetcode.com/problems/add-digits",target:"_blank",rel:"noopener noreferrer"},R=n("td",{style:{"text-align":"center"}},"2535",-1),T=n("td",{style:{"text-align":"left"}},"数组元素和与数字和的绝对差",-1),z=n("td",{style:{"text-align":"center"}},null,-1),F={style:{"text-align":"left"}},M=n("code",null,"数组",-1),Y=n("code",null,"数学",-1),A=n("td",{style:{"text-align":"center"}},"🟢",-1),D={style:{"text-align":"center"}},G={href:"https://leetcode.cn/problems/difference-between-element-sum-and-digit-sum-of-an-array",target:"_blank",rel:"noopener noreferrer"},H={href:"https://leetcode.com/problems/difference-between-element-sum-and-digit-sum-of-an-array",target:"_blank",rel:"noopener noreferrer"},J=n("td",{style:{"text-align":"center"}},"2544",-1),K=n("td",{style:{"text-align":"left"}},"交替数字和",-1),P=n("td",{style:{"text-align":"center"}},null,-1),Q={style:{"text-align":"left"}},U=n("code",null,"数学",-1),W=n("td",{style:{"text-align":"center"}},"🟢",-1),X={style:{"text-align":"center"}},Z={href:"https://leetcode.cn/problems/alternating-digit-sum",target:"_blank",rel:"noopener noreferrer"},$={href:"https://leetcode.com/problems/alternating-digit-sum",target:"_blank",rel:"noopener noreferrer"};function nn(en,tn){const l=c("font"),a=c("RouterLink"),o=c("ExternalLinkIcon");return i(),d("div",null,[k,n("p",null,[e("🟢 "),t(l,{color:"#15bd66"},{default:s(()=>[e("Easy")]),_:1}),e("  🔖  "),t(a,{to:"/tag/greedy.html"},{default:s(()=>[g]),_:1}),e(),t(a,{to:"/tag/math.html"},{default:s(()=>[h]),_:1}),e(),t(a,{to:"/tag/sorting.html"},{default:s(()=>[_]),_:1}),e("  🔗 "),n("a",b,[f,t(o)]),e(),n("a",v,[w,t(o)])]),y,r(" prettier-ignore "),n("table",null,[x,n("tbody",null,[n("tr",null,[q,E,n("td",O,[t(a,{to:"/problem/0258.html"},{default:s(()=>[e("[✓]")]),_:1})]),n("td",L,[t(a,{to:"/tag/math.html"},{default:s(()=>[S]),_:1}),e(),t(a,{to:"/tag/number-theory.html"},{default:s(()=>[C]),_:1}),e(),t(a,{to:"/tag/simulation.html"},{default:s(()=>[N]),_:1})]),V,n("td",I,[n("a",j,[e("🀄️"),t(o)]),e(),n("a",B,[e("🔗"),t(o)])])]),n("tr",null,[R,T,z,n("td",F,[t(a,{to:"/tag/array.html"},{default:s(()=>[M]),_:1}),e(),t(a,{to:"/tag/math.html"},{default:s(()=>[Y]),_:1})]),A,n("td",D,[n("a",G,[e("🀄️"),t(o)]),e(),n("a",H,[e("🔗"),t(o)])])]),n("tr",null,[J,K,P,n("td",Q,[t(a,{to:"/tag/math.html"},{default:s(()=>[U]),_:1})]),W,n("td",X,[n("a",Z,[e("🀄️"),t(o)]),e(),n("a",$,[e("🔗"),t(o)])])])])])])}const an=p(m,[["render",nn],["__file","2160.html.vue"]]);export{an as default};
