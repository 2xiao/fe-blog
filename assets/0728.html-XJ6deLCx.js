import{_ as p,r as l,o as i,c as r,a as n,b as t,d as s,w as e,f as d,e as u}from"./app-totCBmv-.js";const k={},g=n("h1",{id:"_728-自除数",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_728-自除数","aria-hidden":"true"},"#"),t(" 728. 自除数")],-1),h=n("code",null,"数学",-1),m={href:"https://leetcode.cn/problems/self-dividing-numbers",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"力扣",-1),b={href:"https://leetcode.com/problems/self-dividing-numbers",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"LeetCode",-1),v=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>A <strong>self-dividing number</strong> is a number that is divisible by every digit it contains.</p><ul><li>For example, <code>128</code> is <strong>a self-dividing number</strong> because <code>128 % 1 == 0</code>, <code>128 % 2 == 0</code>, and <code>128 % 8 == 0</code>.</li></ul><p>A <strong>self-dividing number</strong> is not allowed to contain the digit zero.</p><p>Given two integers <code>left</code> and <code>right</code>, return <em>a list of all the<strong>self- dividing numbers</strong> in the range</em> <code>[left, right]</code> (both <strong>inclusive</strong>).</p><p><strong>Example 1:</strong></p><blockquote><p>Input: left = 1, right = 22</p><p>Output: [1,2,3,4,5,6,7,8,9,11,12,15,22]</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: left = 47, right = 85</p><p>Output: [48,55,66,77]</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= left &lt;= right &lt;= 10^4</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p><strong>自除数</strong> 是指可以被它包含的每一位数整除的数。</p><ul><li>例如，<code>128</code> 是一个 <strong>自除数</strong> ，因为 <code>128 % 1 == 0</code>，<code>128 % 2 == 0</code>，<code>128 % 8 == 0</code>。</li></ul><p><strong>自除数</strong> 不允许包含 0 。</p><p>给定两个整数 <code>left</code> 和 <code>right</code> ，返回一个列表， <em>列表的元素是范围 <code>[left, right]</code>（包括两个端点）内所有的 <strong>自除数</strong></em> 。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> left = 1, right = 22</p><p><strong>输出：</strong>[1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]</p></blockquote><p><strong>示例 2:</strong></p><blockquote><p><strong>输入：</strong> left = 47, right = 85</p><p><strong>输出：</strong>[48,55,66,77]</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= left &lt;= right &lt;= 10^4</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>题目要求在 <code>[left, right]</code> 范围内找到所有 <strong>自除数</strong>。可以通过逐一枚举该范围内的数字，并使用辅助函数检查每个数字是否符合条件。</p><ol><li><p><strong>辅助函数 <code>isSelfDividing</code></strong>：</p><ul><li>输入一个数字 <code>num</code>，判断它是否为 <strong>自除数</strong>。</li><li>对于每一位数字 <code>digit</code>： <ul><li>如果 <code>digit == 0</code> 或者 <code>num % digit != 0</code>，返回 <code>false</code>。</li><li>如果数字满足条件，继续检查下一位，直到所有位都检查完。</li></ul></li><li>如果检查完所有位后未发现任何不符合条件的情况，则返回 <code>true</code>。</li></ul></li><li><p><strong>遍历范围 <code>[left, right]</code></strong>：</p><ul><li>对于每个数字 <code>num</code>，调用辅助函数 <code>isSelfDividing</code> 进行检查。</li><li>如果是 <strong>自除数</strong>，将其加入结果列表。</li></ul></li><li><p><strong>返回结果</strong>：</p><ul><li>返回包含所有 <strong>自除数</strong> 的列表。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><p><strong>时间复杂度</strong>：<code>O(n * log_10(m))</code>，其中 <code>n</code> 是范围内的数字个数，<code>m</code> 是最大值 <code>right</code>。</p><ul><li><strong>外层遍历</strong>：范围 <code>[left, right]</code> 的数字，共 <code>n = right - left + 1</code> 个。</li><li><strong>内部检查</strong>：对于每个数字 <code>num</code>，检查其位数，最多有 <code>log_10(num)</code> 次操作。</li></ul></li><li><p><strong>空间复杂度</strong>：<code>O(1)</code>，仅使用了常量空间。</p></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">left</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">right</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">selfDividingNumbers</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">left<span class="token punctuation">,</span> right</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 辅助函数：判断一个数字是否是自除数</span>
	<span class="token keyword">const</span> <span class="token function-variable function">isSelfDividing</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">num</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> temp <span class="token operator">=</span> num<span class="token punctuation">;</span>
		<span class="token keyword">while</span> <span class="token punctuation">(</span>temp <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">const</span> digit <span class="token operator">=</span> temp <span class="token operator">%</span> <span class="token number">10</span><span class="token punctuation">;</span> <span class="token comment">// 提取当前最低位数字</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>digit <span class="token operator">===</span> <span class="token number">0</span> <span class="token operator">||</span> num <span class="token operator">%</span> digit <span class="token operator">!==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token comment">// 包含0或者不能整除</span>
				<span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			temp <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>temp <span class="token operator">/</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 去掉最低位</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>

	<span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> num <span class="token operator">=</span> left<span class="token punctuation">;</span> num <span class="token operator">&lt;=</span> right<span class="token punctuation">;</span> num<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isSelfDividing</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 满足条件加入结果</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,30),y=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),x=n("td",{style:{"text-align":"center"}},"507",-1),w=n("td",{style:{"text-align":"left"}},"完美数",-1),q={style:{"text-align":"center"}},E={style:{"text-align":"left"}},N=n("code",null,"数学",-1),C=n("td",{style:{"text-align":"center"}},"🟢",-1),D={style:{"text-align":"center"}},L={href:"https://leetcode.cn/problems/perfect-number",target:"_blank",rel:"noopener noreferrer"},S={href:"https://leetcode.com/problems/perfect-number",target:"_blank",rel:"noopener noreferrer"},V=n("td",{style:{"text-align":"center"}},"2283",-1),I=n("td",{style:{"text-align":"left"}},"判断一个数的数字计数是否等于数位的值",-1),O={style:{"text-align":"center"}},j={style:{"text-align":"left"}},B=n("code",null,"哈希表",-1),A=n("code",null,"字符串",-1),R=n("code",null,"计数",-1),z=n("td",{style:{"text-align":"center"}},"🟢",-1),F={style:{"text-align":"center"}},G={href:"https://leetcode.cn/problems/check-if-number-has-equal-digit-count-and-digit-value",target:"_blank",rel:"noopener noreferrer"},M={href:"https://leetcode.com/problems/check-if-number-has-equal-digit-count-and-digit-value",target:"_blank",rel:"noopener noreferrer"},T=n("td",{style:{"text-align":"center"}},"2520",-1),H=n("td",{style:{"text-align":"left"}},"统计能整除数字的位数",-1),J=n("td",{style:{"text-align":"center"}},null,-1),K={style:{"text-align":"left"}},P=n("code",null,"数学",-1),Q=n("td",{style:{"text-align":"center"}},"🟢",-1),U={style:{"text-align":"center"}},W={href:"https://leetcode.cn/problems/count-the-digits-that-divide-a-number",target:"_blank",rel:"noopener noreferrer"},X={href:"https://leetcode.com/problems/count-the-digits-that-divide-a-number",target:"_blank",rel:"noopener noreferrer"};function Y(Z,$){const c=l("font"),a=l("RouterLink"),o=l("ExternalLinkIcon");return i(),r("div",null,[g,n("p",null,[t("🟢 "),s(c,{color:"#15bd66"},{default:e(()=>[t("Easy")]),_:1}),t("  🔖  "),s(a,{to:"/tag/math.html"},{default:e(()=>[h]),_:1}),t("  🔗 "),n("a",m,[_,s(o)]),t(),n("a",b,[f,s(o)])]),v,d(" prettier-ignore "),n("table",null,[y,n("tbody",null,[n("tr",null,[x,w,n("td",q,[s(a,{to:"/problem/0507.html"},{default:e(()=>[t("[✓]")]),_:1})]),n("td",E,[s(a,{to:"/tag/math.html"},{default:e(()=>[N]),_:1})]),C,n("td",D,[n("a",L,[t("🀄️"),s(o)]),t(),n("a",S,[t("🔗"),s(o)])])]),n("tr",null,[V,I,n("td",O,[s(a,{to:"/problem/2283.html"},{default:e(()=>[t("[✓]")]),_:1})]),n("td",j,[s(a,{to:"/tag/hash-table.html"},{default:e(()=>[B]),_:1}),t(),s(a,{to:"/tag/string.html"},{default:e(()=>[A]),_:1}),t(),s(a,{to:"/tag/counting.html"},{default:e(()=>[R]),_:1})]),z,n("td",F,[n("a",G,[t("🀄️"),s(o)]),t(),n("a",M,[t("🔗"),s(o)])])]),n("tr",null,[T,H,J,n("td",K,[s(a,{to:"/tag/math.html"},{default:e(()=>[P]),_:1})]),Q,n("td",U,[n("a",W,[t("🀄️"),s(o)]),t(),n("a",X,[t("🔗"),s(o)])])])])])])}const tn=p(k,[["render",Y],["__file","0728.html.vue"]]);export{tn as default};
