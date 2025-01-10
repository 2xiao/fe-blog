import{_ as r,r as c,o as p,c as d,a as n,b as e,d as s,w as a,f as i,e as u}from"./app-XFeYdzZv.js";const k={},h=n("h1",{id:"_1837-k-进制表示下的各位数字总和",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1837-k-进制表示下的各位数字总和","aria-hidden":"true"},"#"),e(" 1837. K 进制表示下的各位数字总和")],-1),m=n("code",null,"数学",-1),g={href:"https://leetcode.cn/problems/sum-of-digits-in-base-k",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"力扣",-1),b={href:"https://leetcode.com/problems/sum-of-digits-in-base-k",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"LeetCode",-1),v=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an integer <code>n</code> (in base <code>10</code>) and a base <code>k</code>, return _the <strong>sum</strong> of the digits of _<code>n</code> _<strong>after</strong> converting _<code>n</code> <em>from base</em><code>10</code> <em>to base</em><code>k</code>.</p><p>After converting, each digit should be interpreted as a base <code>10</code> number, and the sum should be returned in base <code>10</code>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: n = 34, k = 6</p><p>Output: 9</p><p>Explanation: 34 (base 10) expressed in base 6 is 54. 5 + 4 = 9.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: n = 10, k = 10</p><p>Output: 1</p><p>Explanation: n is already in base 10. 1 + 0 = 1.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= n &lt;= 100</code></li><li><code>2 &lt;= k &lt;= 10</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个整数 <code>n</code>（<code>10</code> 进制）和一个基数 <code>k</code> ，请你将 <code>n</code> 从 <code>10</code> 进制表示转换为 <code>k</code> 进制表示，计算并返回转换后各位数字的 <strong>总和</strong> 。</p><p>转换后，各位数字应当视作是 <code>10</code> 进制数字，且它们的总和也应当按 <code>10</code> 进制表示返回。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> n = 34, k = 6</p><p><strong>输出：</strong> 9</p><p><strong>解释：</strong> 34 (10 进制) 在 6 进制下表示为 54 。5 + 4 = 9 。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> n = 10, k = 10</p><p><strong>输出：</strong> 1</p><p><strong>解释：</strong> n 本身就是 10 进制。 1 + 0 = 1 。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= n &lt;= 100</code></li><li><code>2 &lt;= k &lt;= 10</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>转换为基数 <code>k</code> 的表示</strong>：将数字 <code>n</code> 转换为基数为 <code>k</code> 的表示可以通过反复除以 <code>k</code> 获得每一位。例如，使用取余操作 <code>n % k</code> 获取最低位，然后将 <code>n</code> 除以 <code>k</code> 来得到新的 <code>n</code>，重复此过程直到 <code>n</code> 为 0。</p></li><li><p><strong>累加数位和</strong>：每一次获取到一个数位的值之后，将其加到 <code>sum</code> 上。这样最终得到的 <code>sum</code> 就是转换后各个数位的和。</p></li><li><p><strong>结束条件</strong>：当 <code>n</code> 除到 0 时，所有数位的和就已经计算完成。</p></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(log_k n)</code>，因为每次除以 <code>k</code>，数字的大小逐步减小，循环次数大约是 <code>log_k n</code>。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，除了存储结果的 <code>sum</code>，没有其他额外的空间使用。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">n</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">k</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">sumBase</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">n<span class="token punctuation">,</span> k</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>n <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		sum <span class="token operator">+=</span> n <span class="token operator">%</span> k<span class="token punctuation">;</span> <span class="token comment">// 获取当前最低位数</span>
		n <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>n <span class="token operator">/</span> k<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 去除最低位，继续处理下一位</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> sum<span class="token punctuation">;</span> <span class="token comment">// 返回所有数位的和</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,25),x=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),y=n("td",{style:{"text-align":"center"}},"2843",-1),w=n("td",{style:{"text-align":"left"}},"统计对称整数的数目",-1),q=n("td",{style:{"text-align":"center"}},null,-1),E={style:{"text-align":"left"}},C=n("code",null,"数学",-1),L=n("code",null,"枚举",-1),N=n("td",{style:{"text-align":"center"}},"🟢",-1),V={style:{"text-align":"center"}},B={href:"https://leetcode.cn/problems/count-symmetric-integers",target:"_blank",rel:"noopener noreferrer"},I={href:"https://leetcode.com/problems/count-symmetric-integers",target:"_blank",rel:"noopener noreferrer"};function O(j,R){const l=c("font"),o=c("RouterLink"),t=c("ExternalLinkIcon");return p(),d("div",null,[h,n("p",null,[e("🟢 "),s(l,{color:"#15bd66"},{default:a(()=>[e("Easy")]),_:1}),e("  🔖  "),s(o,{to:"/tag/math.html"},{default:a(()=>[m]),_:1}),e("  🔗 "),n("a",g,[_,s(t)]),e(),n("a",b,[f,s(t)])]),v,i(" prettier-ignore "),n("table",null,[x,n("tbody",null,[n("tr",null,[y,w,q,n("td",E,[s(o,{to:"/tag/math.html"},{default:a(()=>[C]),_:1}),e(),s(o,{to:"/tag/enumeration.html"},{default:a(()=>[L]),_:1})]),N,n("td",V,[n("a",B,[e("🀄️"),s(t)]),e(),n("a",I,[e("🔗"),s(t)])])])])])])}const G=r(k,[["render",O],["__file","1837.html.vue"]]);export{G as default};
