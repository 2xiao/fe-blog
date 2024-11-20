import{_ as r,r as e,o as l,c as d,a as n,b as s,d as a,w as t,e as i}from"./app-BBnmDgJV.js";const u={},k=n("h1",{id:"_3133-数组最后一个元素的最小值",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_3133-数组最后一个元素的最小值","aria-hidden":"true"},"#"),s(" 3133. 数组最后一个元素的最小值")],-1),m=n("code",null,"位运算",-1),g={href:"https://leetcode.cn/problems/minimum-array-end",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"力扣",-1),h={href:"https://leetcode.com/problems/minimum-array-end",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"LeetCode",-1),f=i(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given two integers <code>n</code> and <code>x</code>. You have to construct an array of <strong>positive</strong> integers <code>nums</code> of size <code>n</code> where for every <code>0 &lt;= i &lt; n - 1</code>, <code>nums[i + 1]</code> is <strong>greater than</strong> <code>nums[i]</code>, and the result of the bitwise <code>AND</code> operation between all elements of <code>nums</code> is <code>x</code>.</p><p>Return the <strong>minimum</strong> possible value of <code>nums[n - 1]</code>.</p><p><strong>Example 1:</strong></p><p><strong>Input:</strong> n = 3, x = 4</p><p><strong>Output:</strong> 6</p><p><strong>Explanation:</strong></p><p><code>nums</code> can be <code>[4,5,6]</code> and its last element is 6.</p><p><strong>Example 2:</strong></p><p><strong>Input:</strong> n = 2, x = 7</p><p><strong>Output:</strong> 15</p><p><strong>Explanation:</strong></p><p><code>nums</code> can be <code>[7,15]</code> and its last element is 15.</p><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= n, x &lt;= 10^8</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你两个整数 <code>n</code> 和 <code>x</code> 。你需要构造一个长度为 <code>n</code> 的 <strong>正整数</strong> 数组 <code>nums</code> ，对于所有 <code>0 &lt;= i &lt; n - 1</code> ，满足 <code>nums[i + 1]</code><strong>大于</strong><code>nums[i]</code> ，并且数组 <code>nums</code> 中所有元素的按位 <code>AND</code> 运算结果为 <code>x</code> 。</p><p>返回 <code>nums[n - 1]</code> 可能的<strong>最小</strong> 值。</p><p><strong>示例 1：</strong></p><p><strong>输入：</strong> n = 3, x = 4</p><p><strong>输出：</strong> 6</p><p><strong>解释：</strong></p><p>数组 <code>nums</code> 可以是 <code>[4,5,6]</code> ，最后一个元素为 <code>6</code> 。</p><p><strong>示例 2：</strong></p><p><strong>输入：</strong> n = 2, x = 7</p><p><strong>输出：</strong> 15</p><p><strong>解释：</strong></p><p>数组 <code>nums</code> 可以是 <code>[7,15]</code> ，最后一个元素为 <code>15</code> 。</p><p><strong>提示：</strong></p><ul><li><code>1 &lt;= n, x &lt;= 10^8</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>BigInt 处理大数</strong>：</p><ul><li>为了确保算法能处理极大的输入（如 <code>n = 10^8</code>），需要将 <code>n</code> 和 <code>x</code> 转换为 <code>BigInt</code> 类型，以避免溢出。</li></ul></li><li><p><strong>循环遍历位掩码</strong>：</p><ul><li>使用一个位掩码 <code>mask</code> 从 <code>1n</code>（即二进制最低位）开始，每次左移一位，遍历所有位。</li><li>对于每一位，检查 <code>x</code> 的当前位是否为 <code>0</code>。如果 <code>x</code> 在该位为 <code>0</code>，则可以尝试在 <code>number</code> 中设置这一位，以确保最后生成的数不影响最终 <code>AND</code> 的结果。</li></ul></li><li><p><strong>按条件更新 <code>number</code></strong>：</p><ul><li>对于每一位： <ul><li>检查 <code>x</code> 的当前位，如果它为 <code>0</code>，则考虑是否将该位设为 <code>1</code>，使得生成的数尽可能大。</li><li>为此，使用 <code>(n &amp; 1n) * BigInt(mask)</code>，这在 <code>n</code> 的最低位为 <code>1</code> 时会将 <code>number</code> 的相应位设为 <code>1</code>。</li><li>然后将 <code>n</code> 右移一位，以检查下一位。</li></ul></li><li>这样做的结果是，只在 <code>n</code> 指定的某些位置将 <code>number</code> 设为更高的值。</li></ul></li><li><p><strong>转换并返回结果</strong>：</p><ul><li>将最终得到的 <code>number</code> 转换为 <code>Number</code> 类型并返回。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(log n)</code>，因为每次循环中 <code>n</code> 右移一位。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，仅使用常数额外空间。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">n</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">x</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">minEnd</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">n<span class="token punctuation">,</span> x</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> number <span class="token operator">=</span> <span class="token function">BigInt</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
	n <span class="token operator">=</span> <span class="token function">BigInt</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1n</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> mask <span class="token operator">=</span> <span class="token number">1n</span><span class="token punctuation">;</span> n <span class="token operator">&gt;</span> <span class="token number">0n</span><span class="token punctuation">;</span> mask <span class="token operator">&lt;&lt;=</span> <span class="token number">1n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>mask <span class="token operator">&amp;</span> <span class="token function">BigInt</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			number <span class="token operator">=</span> number <span class="token operator">|</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>n <span class="token operator">&amp;</span> <span class="token number">1n</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token function">BigInt</span><span class="token punctuation">(</span>mask<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			n <span class="token operator">&gt;&gt;=</span> <span class="token number">1n</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token function">Number</span><span class="token punctuation">(</span>number<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,36);function _(x,w){const c=e("font"),p=e("RouterLink"),o=e("ExternalLinkIcon");return l(),d("div",null,[k,n("p",null,[s("🟠 "),a(c,{color:"#ffb800"},{default:t(()=>[s("Medium")]),_:1}),s("  🔖  "),a(p,{to:"/tag/bit-manipulation.html"},{default:t(()=>[m]),_:1}),s("  🔗 "),n("a",g,[b,a(o)]),s(),n("a",h,[v,a(o)])]),f])}const I=r(u,[["render",_],["__file","3133.html.vue"]]);export{I as default};
