import{_ as l,r as e,o as i,c as d,a as n,b as s,d as a,w as o,e as r}from"./app-Kkp_66uf.js";const u={},k=n("h1",{id:"_56-数组中数字出现的次数",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_56-数组中数字出现的次数","aria-hidden":"true"},"#"),s(" 56. 数组中数字出现的次数")],-1),m=n("code",null,"位运算",-1),v=n("code",null,"数组",-1),b={href:"https://leetcode.cn/problems/shu-zu-zhong-shu-zi-chu-xian-de-ci-shu-lcof",target:"_blank",rel:"noopener noreferrer"},h=n("code",null,"力扣",-1),f=r(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>整数数组 <code>sockets</code> 记录了一个袜子礼盒的颜色分布情况，其中 <code>sockets[i]</code> 表示该袜子的颜色编号。礼盒中除了一款撞色搭配的袜子，每种颜色的袜子均有两只。请设计一个程序，在时间复杂度 <code>O(n)</code>，空间复杂度 <code>O(1)</code> 内找到这双撞色搭配袜子的两个颜色编号。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> sockets = [4, 5, 2, 4, 6, 6]</p><p><strong>输出：</strong>[2,5] 或 [5,2]</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> sockets = [1, 2, 4, 1, 4, 3, 12, 3]</p><p><strong>输出：</strong>[2,12] 或 [12,2]</p></blockquote><p><strong>提示：</strong></p><ul><li><code>2 &lt;= sockets.length &lt;= 10000</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>由于除了一对撞色的袜子外，其他每种颜色的袜子都有两只，所以可以使用异或运算的特性来解决这个问题。</p><ol><li><p><strong>异或所有袜子颜色</strong>：因为相同的颜色会互相抵消（<code>x ^ x = 0</code>），最终的结果将是两个不同颜色的袜子的异或结果。</p><ul><li>例如：<code>1 ^ 2 ^ 3 ^ 3 ^ 4 ^ 4</code> == <code>1 ^ 2</code> == <code>3</code></li></ul></li><li><p><strong>找到异或结果中的一个位</strong>：从异或结果中找到一个为 <code>1</code> 的位 <code>diffBit</code>，这个位可以帮助我们将袜子分为两组，分别含有这两个不同的颜色。</p><ul><li><p>为了方便，就选择计算最低位的 <code>1</code> 的位置，计算方法为：<code>or &amp; -or</code>。</p></li><li><p><code>-or</code> 是 <code>or</code> 的二进制补码，在计算机中，补码是通过对一个数取反（即每个位取反）并加 <code>1</code> 来得到的；</p></li><li><p>假设 <code>or</code> 的二进制表示是 <code>00101000</code>，那么 <code>-or</code> 的二进制表示是 <code>11011000</code>（取反后加 <code>1</code>），结果是 <code>00001000</code>，这表示最低位的 <code>1</code> 在原始 <code>or</code> 的第三位。</p></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>00101000
11011000
---------
00001000
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>分组并再次异或</strong>：再次遍历数组，根据 <code>diffBit</code> 位是否为 <code>1</code>，将数组分为两组，分别异或每组的颜色，最终会得到两个不同颜色的袜子。</p></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>: <code>O(n)</code>，遍历一次数组。</li><li><strong>空间复杂度</strong>: <code>O(1)</code>，只使用了常量空间。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">sockets</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">sockCollocation</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">sockets</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> or <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

	<span class="token comment">// 1. 计算所有袜子颜色的异或值</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> num <span class="token keyword">of</span> sockets<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		or <span class="token operator">^=</span> num<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 2. 计算异或结果中最低位的 1</span>
	<span class="token keyword">const</span> diffBit <span class="token operator">=</span> or <span class="token operator">&amp;</span> <span class="token operator">-</span>or<span class="token punctuation">;</span>

	<span class="token keyword">let</span> color1 <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
		color2 <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> num <span class="token keyword">of</span> sockets<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 3. 根据 diffBit 是否为 1 分组，并异或</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>num <span class="token operator">&amp;</span> diffBit<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			color1 <span class="token operator">^=</span> num<span class="token punctuation">;</span> <span class="token comment">// 第一组</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			color2 <span class="token operator">^=</span> num<span class="token punctuation">;</span> <span class="token comment">// 第二组</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token punctuation">[</span>color1<span class="token punctuation">,</span> color2<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15);function _(g,x){const c=e("font"),t=e("RouterLink"),p=e("ExternalLinkIcon");return i(),d("div",null,[k,n("p",null,[s("🟠 "),a(c,{color:"#ffb800"},{default:o(()=>[s("Medium")]),_:1}),s("  🔖  "),a(t,{to:"/tag/bit-manipulation.html"},{default:o(()=>[m]),_:1}),s(),a(t,{to:"/tag/array.html"},{default:o(()=>[v]),_:1}),s("  🔗 "),n("a",b,[h,a(p)])]),f])}const y=l(u,[["render",_],["__file","jz_offer_56_1.html.vue"]]);export{y as default};
