import{_ as l,r as t,o as i,c as r,a as n,b as s,d as a,w as e,e as u}from"./app-KDJRKGep.js";const d={},k=n("h1",{id:"_400-第-n-位数字",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_400-第-n-位数字","aria-hidden":"true"},"#"),s(" 400. 第 N 位数字")],-1),m=n("code",null,"数学",-1),h=n("code",null,"二分查找",-1),v={href:"https://leetcode.cn/problems/nth-digit",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"力扣",-1),g={href:"https://leetcode.com/problems/nth-digit",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"LeetCode",-1),f=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an integer <code>n</code>, return the <code>nth</code> digit of the infinite integer sequence <code>[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ...]</code>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: n = 3</p><p>Output: 3</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: n = 11</p><p>Output: 0</p><p>Explanation: The 11th digit of the sequence 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ... is a 0, which is part of the number 10.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= n &lt;= 2^31 - 1</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个整数 <code>n</code> ，请你在无限的整数序列 <code>[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ...]</code> 中找出并返回第 <code>n</code> 位上的数字。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> n = 3</p><p><strong>输出：</strong> 3</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> n = 11</p><p><strong>输出：</strong> 0</p><p><strong>解释：</strong> 第 11 位数字在序列 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ... 里是 <strong>0</strong> ，它是 10 的一部分。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= n &lt;= 2^31 - 1</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>确定数字的位数</strong>：</p><ul><li>计算在每个数字位数范围（1 ~ 9: 1 位、10 ~ 99: 2 位、100 ~ 999: 3 位等）中包含的数字总数，直到找到 <code>n</code> 位所在的范围。</li><li>对于 <code>k</code> 位数字，范围内的数字总个数为 <code>9 * 10^(k-1)</code>，且它们的总位数为 <code>k * 9 * 10^(k-1)</code>。</li></ul></li><li><p><strong>找到目标数字</strong>：</p><ul><li>确定 <code>n</code> 所在的具体数字范围后，计算出是哪个数字以及在这个数字中的具体位置。</li><li>通过计算偏移量确定要返回的数字。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(log_10 n)</code>，通过不断增加位数，最多会进行对数级别的计算。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，只使用了常数级别的额外空间，存储了少量变量。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">n</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">findNthDigit</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> digit <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 当前位数</span>
	<span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">9</span><span class="token punctuation">;</span> <span class="token comment">// 当前位数的数字总数</span>
	<span class="token keyword">let</span> start <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 当前位数的起始数字</span>

	<span class="token comment">// 找到 n 所在的位数范围</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>n <span class="token operator">&gt;</span> count <span class="token operator">*</span> digit<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		n <span class="token operator">-=</span> count <span class="token operator">*</span> digit<span class="token punctuation">;</span>
		digit<span class="token operator">++</span><span class="token punctuation">;</span>
		count <span class="token operator">*=</span> <span class="token number">10</span><span class="token punctuation">;</span>
		start <span class="token operator">*=</span> <span class="token number">10</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 找到 n 所在的具体数字</span>
	<span class="token keyword">const</span> num <span class="token operator">=</span> start <span class="token operator">+</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">/</span> digit<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> index <span class="token operator">=</span> <span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">%</span> digit<span class="token punctuation">;</span>

	<span class="token comment">// 转换数字为字符串以获取具体的第 n 位数字</span>
	<span class="token keyword">return</span> <span class="token function">Number</span><span class="token punctuation">(</span><span class="token function">String</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,22);function x(w,y){const c=t("font"),o=t("RouterLink"),p=t("ExternalLinkIcon");return i(),r("div",null,[k,n("p",null,[s("🟠 "),a(c,{color:"#ffb800"},{default:e(()=>[s("Medium")]),_:1}),s("  🔖  "),a(o,{to:"/tag/math.html"},{default:e(()=>[m]),_:1}),s(),a(o,{to:"/tag/binary-search.html"},{default:e(()=>[h]),_:1}),s("  🔗 "),n("a",v,[b,a(p)]),s(),n("a",g,[_,a(p)])]),f])}const N=l(d,[["render",x],["__file","0400.html.vue"]]);export{N as default};
