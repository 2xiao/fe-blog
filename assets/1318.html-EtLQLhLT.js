import{_ as l,r as c,o as i,c as d,a as n,b as s,d as e,w as t,f as r,e as u}from"./app-KDJRKGep.js";const b={},k=n("h1",{id:"_1318-或运算的最小翻转次数",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1318-或运算的最小翻转次数","aria-hidden":"true"},"#"),s(" 1318. 或运算的最小翻转次数")],-1),m=n("code",null,"位运算",-1),g={href:"https://leetcode.cn/problems/minimum-flips-to-make-a-or-b-equal-to-c",target:"_blank",rel:"noopener noreferrer"},h=n("code",null,"力扣",-1),v={href:"https://leetcode.com/problems/minimum-flips-to-make-a-or-b-equal-to-c",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"LeetCode",-1),f=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given 3 positives numbers <code>a</code>, <code>b</code> and <code>c</code>. Return the minimum flips required in some bits of <code>a</code> and <code>b</code> to make ( <code>a</code> OR <code>b</code> == <code>c</code> ). (bitwise OR operation).<br> Flip operation consists of change <strong>any</strong> single bit 1 to 0 or change the bit 0 to 1 in their binary representation.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/01/06/sample_3_1676.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>Input:</strong> a = 2, b = 6, c = 5</p><p>Output: 3</p><p>Explanation: After flips a = 1 , b = 4 , c = 5 such that (a OR b == c)</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p><strong>Input:</strong> a = 4, b = 2, c = 7</p><p>Output: 1</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p><strong>Input:</strong> a = 1, b = 2, c = 3</p><p>Output: 0</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= a &lt;= 10^9</code></li><li><code>1 &lt;= b &lt;= 10^9</code></li><li><code>1 &lt;= c &lt;= 10^9</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你三个正整数 <code>a</code>、<code>b</code> 和 <code>c</code>。</p><p>你可以对 <code>a</code> 和 <code>b</code> 的二进制表示进行位翻转操作，返回能够使按位或运算 <code>a</code> OR <code>b</code> == <code>c</code> 成立的最小翻转次数。</p><p>「位翻转操作」是指将一个数的二进制表示任何单个位上的 1 变成 0 或者 0 变成 1 。</p><p><strong>示例 1：</strong></p><p>![](https://assets.leetcode-cn.com/aliyun-lc- upload/uploads/2020/01/11/sample_3_1676.png)</p><blockquote><p><strong>输入：</strong> a = 2, b = 6, c = 5</p><p><strong>输出：</strong> 3</p><p><strong>解释：</strong> 翻转后 a = 1 , b = 4 , c = 5 使得 a OR b == c</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> a = 4, b = 2, c = 7</p><p><strong>输出：</strong> 1</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> a = 1, b = 2, c = 3</p><p><strong>输出：</strong> 0</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= a &lt;= 10^9</code></li><li><code>1 &lt;= b &lt;= 10^9</code></li><li><code>1 &lt;= c &lt;= 10^9</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p><strong>逐位比较</strong>：对 <code>a</code>、<code>b</code> 和 <code>c</code> 的二进制表示，从最低位到最高位逐位比较，判断需要翻转的次数。</p><p><strong>按位规则</strong>：</p><ul><li>如果 <code>c</code> 的当前位是 <code>1</code>，则 <code>a, b</code> 必须至少有一位是 <code>1</code>： <ul><li>如果当前位的 <code>a</code> 和 <code>b</code> 都是 <code>0</code>，需要翻转其中一个为 <code>1</code>，翻转次数为 1。</li></ul></li><li>如果 <code>c</code> 的当前位是 <code>0</code>，则 <code>a, b</code> 必须都是 <code>0</code>： <ul><li>如果当前位的 <code>a</code> 是 <code>1</code> 或 <code>b</code> 是 <code>1</code>，翻转次数为 <code>a</code> 和 <code>b</code> 中的 <code>1</code> 位数之和。</li></ul></li></ul><ol><li>初始化变量 <code>flips</code> 用于记录翻转次数。</li><li>使用循环，逐位取出 <code>a</code>、<code>b</code>、<code>c</code> 的当前位，直到所有位都处理完。</li><li>根据 <code>c</code> 的当前位是 <code>0</code> 或 <code>1</code>，判断翻转的需求： <ul><li>若 <code>c</code> 位为 <code>1</code>，检查 <code>a_i</code> 和 <code>b_i</code> 是否需要调整；</li><li>若 <code>c</code> 位为 <code>0</code>，统计 <code>a_i</code> 和 <code>b_i</code> 中的 <code>1</code>，累加到翻转次数。</li></ul></li><li>将 <code>a</code>、<code>b</code> 和 <code>c</code> 右移一位，继续处理下一位。</li><li>返回总翻转次数。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(log(max(a, b, c)))</code>，循环最多运行 <code>O(log(max(a, b, c)))</code> 次，因为每次循环右移一位。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，使用了常数额外空间用于存储变量。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">a</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">b</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">c</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">minFlips</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> flips <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>a <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">||</span> b <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">||</span> c <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 提取当前最低位</span>
		<span class="token keyword">const</span> bitA <span class="token operator">=</span> a <span class="token operator">&amp;</span> <span class="token number">1</span><span class="token punctuation">;</span>
		<span class="token keyword">const</span> bitB <span class="token operator">=</span> b <span class="token operator">&amp;</span> <span class="token number">1</span><span class="token punctuation">;</span>
		<span class="token keyword">const</span> bitC <span class="token operator">=</span> c <span class="token operator">&amp;</span> <span class="token number">1</span><span class="token punctuation">;</span>

		<span class="token keyword">if</span> <span class="token punctuation">(</span>bitC <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// 如果 c 的当前位是 0，则 a 和 b 的当前位都必须是 0</span>
			flips <span class="token operator">+=</span> bitA <span class="token operator">+</span> bitB<span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			<span class="token comment">// 如果 c 的当前位是 1，则至少有一个 a 或 b 的当前位为 1</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>bitA <span class="token operator">===</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> bitB <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				flips <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>

		<span class="token comment">// 右移一位，处理下一位</span>
		a <span class="token operator">&gt;&gt;=</span> <span class="token number">1</span><span class="token punctuation">;</span>
		b <span class="token operator">&gt;&gt;=</span> <span class="token number">1</span><span class="token punctuation">;</span>
		c <span class="token operator">&gt;&gt;=</span> <span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> flips<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,34),x=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),y=n("td",{style:{"text-align":"center"}},"2220",-1),w=n("td",{style:{"text-align":"left"}},"转换数字的最少位翻转次数",-1),q={style:{"text-align":"center"}},O={style:{"text-align":"left"}},R=n("code",null,"位运算",-1),C=n("td",{style:{"text-align":"center"}},"🟢",-1),E={style:{"text-align":"center"}},B={href:"https://leetcode.cn/problems/minimum-bit-flips-to-convert-number",target:"_blank",rel:"noopener noreferrer"},I={href:"https://leetcode.com/problems/minimum-bit-flips-to-convert-number",target:"_blank",rel:"noopener noreferrer"};function L(N,V){const p=c("font"),o=c("RouterLink"),a=c("ExternalLinkIcon");return i(),d("div",null,[k,n("p",null,[s("🟠 "),e(p,{color:"#ffb800"},{default:t(()=>[s("Medium")]),_:1}),s("  🔖  "),e(o,{to:"/tag/bit-manipulation.html"},{default:t(()=>[m]),_:1}),s("  🔗 "),n("a",g,[h,e(a)]),s(),n("a",v,[_,e(a)])]),f,r(" prettier-ignore "),n("table",null,[x,n("tbody",null,[n("tr",null,[y,w,n("td",q,[e(o,{to:"/problem/2220.html"},{default:t(()=>[s("[✓]")]),_:1})]),n("td",O,[e(o,{to:"/tag/bit-manipulation.html"},{default:t(()=>[R]),_:1})]),C,n("td",E,[n("a",B,[s("🀄️"),e(a)]),s(),n("a",I,[s("🔗"),e(a)])])])])])])}const j=l(b,[["render",L],["__file","1318.html.vue"]]);export{j as default};
