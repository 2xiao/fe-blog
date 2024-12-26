import{_ as r,r as e,o as l,c as d,a as n,b as s,d as a,w as o,e as i}from"./app-3dvbhwow.js";const u={},k=n("h1",{id:"_1550-存在连续三个奇数的数组",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1550-存在连续三个奇数的数组","aria-hidden":"true"},"#"),s(" 1550. 存在连续三个奇数的数组")],-1),m=n("code",null,"数组",-1),h={href:"https://leetcode.cn/problems/three-consecutive-odds",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"力扣",-1),b={href:"https://leetcode.com/problems/three-consecutive-odds",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"LeetCode",-1),g=i(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an integer array <code>arr</code>, return <code>true</code> if there are three consecutive odd numbers in the array. Otherwise, return <code>false</code>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: arr = [2,6,4,1]</p><p>Output: false</p><p>Explanation: There are no three consecutive odds.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: arr = [1,2,34,3,4,5,7,23,12]</p><p>Output: true</p><p>Explanation: [5,7,23] are three consecutive odds.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= arr.length &lt;= 1000</code></li><li><code>1 &lt;= arr[i] &lt;= 1000</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个整数数组 <code>arr</code>，请你判断数组中是否存在连续三个元素都是奇数的情况：如果存在，请返回 <code>true</code> ；否则，返回 <code>false</code> 。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> arr = [2,6,4,1]</p><p><strong>输出：</strong> false</p><p><strong>解释：</strong> 不存在连续三个元素都是奇数的情况。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> arr = [1,2,34,3,4,5,7,23,12]</p><p><strong>输出：</strong> true</p><p><strong>解释：</strong> 存在连续三个元素都是奇数的情况，即 [5,7,23] 。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= arr.length &lt;= 1000</code></li><li><code>1 &lt;= arr[i] &lt;= 1000</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p>使用一个计数器 <code>odd</code> 记录连续奇数的个数，初始化为 <code>0</code>。</p></li><li><p>遍历数组中的每个数字：</p><ul><li>如果当前数字是奇数，增加计数器 <code>odd</code> 的值，若 <code>odd</code> 的值达到 <code>3</code> 时，立即返回 <code>true</code>。</li><li>如果当前数字是偶数，重置计数器 <code>odd</code> 为 <code>0</code>。</li></ul></li><li><p>遍历完成后，如果没有找到满足条件的连续奇数，则返回 <code>false</code>。</p></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，遍历数组一次。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，使用了常数空间变量。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">arr</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">threeConsecutiveOdds</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> odd <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> num <span class="token keyword">of</span> arr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 判断是否为奇数</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>num <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			odd<span class="token operator">++</span><span class="token punctuation">;</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>odd <span class="token operator">===</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token comment">// 如果连续奇数达到3个，返回true</span>
				<span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			odd <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// 遇到偶数，重置计数器</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token comment">// 遍历结束后未找到</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,22);function f(x,y){const c=e("font"),p=e("RouterLink"),t=e("ExternalLinkIcon");return l(),d("div",null,[k,n("p",null,[s("🟢 "),a(c,{color:"#15bd66"},{default:o(()=>[s("Easy")]),_:1}),s("  🔖  "),a(p,{to:"/tag/array.html"},{default:o(()=>[m]),_:1}),s("  🔗 "),n("a",h,[v,a(t)]),s(),n("a",b,[_,a(t)])]),g])}const q=r(u,[["render",f],["__file","1550.html.vue"]]);export{q as default};
