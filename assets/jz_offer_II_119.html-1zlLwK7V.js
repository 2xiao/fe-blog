import{_ as i,r as o,o as u,c as r,a as n,b as s,d as a,w as t,e as p}from"./app-9Xw5divW.js";const d={},k=n("h1",{id:"_119-最长连续序列",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_119-最长连续序列","aria-hidden":"true"},"#"),s(" 119. 最长连续序列")],-1),h=n("code",null,"并查集",-1),m=n("code",null,"数组",-1),_=n("code",null,"哈希表",-1),v={href:"https://leetcode.cn/problems/WhsWhI",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"力扣",-1),f=p('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>给定一个未排序的整数数组 <code>nums</code> ，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> nums = [100,4,200,1,3,2]</p><p><strong>输出：</strong> 4</p><p><strong>解释：</strong> 最长数字连续序列是 [1, 2, 3, 4]。它的长度为 4。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> nums = [0,3,7,2,5,8,4,6,0,1]</p><p><strong>输出：</strong> 9</p></blockquote><p><strong>提示：</strong></p><ul><li><code>0 &lt;= nums.length &lt;= 10^4</code></li><li><code>-10^9 &lt;= nums[i] &lt;= 10^9</code></li></ul><p><strong>进阶：</strong> 可以设计并实现时间复杂度为 <code>O(n)</code> 的解决方案吗？</p>',9),g={class:"hint-container warning"},w=n("p",{class:"hint-container-title"},"注意",-1),y=p(`<h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ul><li>遍历数组里的每个数 <code>i</code> ，以其为起点，寻找 <code>i+1, i+2, i+3...</code>是否存在，并不断记录以 <code>i</code> 为起点时最长连续序列的长度；</li><li>为了降低遍历数组的时间复杂度，可以将数组中的数存在哈希表中，这样查看一个数是否存在的时间复杂度可以优化到 <code>O(1)</code>；</li><li>为了去掉一些重复的枚举，可以只对 <code>i-1</code> 不存在的数 <code>i</code> 为起点开始枚举；</li></ul><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>: <code>O(n)</code>，其中 <code>n</code> 是数组的长度，遍历了一遍数组。</li><li><strong>空间复杂度</strong>: <code>O(n)</code>，使用了一个哈希表来存储数组中的数。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">longestConsecutive</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> set <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> length <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> item <span class="token keyword">of</span> <span class="token punctuation">[</span><span class="token operator">...</span>set<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>set<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>item <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
			<span class="token keyword">while</span> <span class="token punctuation">(</span>set<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>item <span class="token operator">+</span> i<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				i<span class="token operator">++</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			length <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>length<span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> length<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function x(I,j){const c=o("font"),e=o("RouterLink"),l=o("ExternalLinkIcon");return u(),r("div",null,[k,n("p",null,[s("🟠 "),a(c,{color:"#ffb800"},{default:t(()=>[s("Medium")]),_:1}),s("  🔖  "),a(e,{to:"/tag/union-find.html"},{default:t(()=>[h]),_:1}),s(),a(e,{to:"/tag/array.html"},{default:t(()=>[m]),_:1}),s(),a(e,{to:"/tag/hash-table.html"},{default:t(()=>[_]),_:1}),s("  🔗 "),n("a",v,[b,a(l)])]),f,n("div",g,[w,n("p",null,[s("本题与 LeetCode "),a(e,{to:"/problem/0128.html"},{default:t(()=>[s("第 128 题")]),_:1}),s(" 相同。")])]),y])}const q=i(d,[["render",x],["__file","jz_offer_II_119.html.vue"]]);export{q as default};
