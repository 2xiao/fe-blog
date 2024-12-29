import{_ as r,r as o,o as i,c as d,a as n,b as s,d as a,w as t,e as c}from"./app-r0ql_Osa.js";const u={},k=n("h1",{id:"_68-查找插入位置",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_68-查找插入位置","aria-hidden":"true"},"#"),s(" 68. 查找插入位置")],-1),m=n("code",null,"数组",-1),g=n("code",null,"二分查找",-1),h={href:"https://leetcode.cn/problems/N6YdxV",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"力扣",-1),v=c('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>给定一个排序的整数数组 <code>nums</code> 和一个整数目标值<code> target</code> ，请在数组中找到 <code>target </code>，并返回其下标。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。</p><p>请必须使用时间复杂度为 <code>O(log n)</code> 的算法。</p><p><strong>示例 1:</strong></p><blockquote><p><strong>输入:</strong> nums = [1,3,5,6], target = 5</p><p><strong>输出:</strong> 2</p></blockquote><p><strong>示例 2:</strong></p><blockquote><p><strong>输入:</strong> nums = [1,3,5,6], target = 2</p><p><strong>输出:</strong> 1</p></blockquote><p><strong>示例 3:</strong></p><blockquote><p><strong>输入:</strong> nums = [1,3,5,6], target = 7</p><p><strong>输出:</strong> 4</p></blockquote><p><strong>示例 4:</strong></p><blockquote><p><strong>输入:</strong> nums = [1,3,5,6], target = 0</p><p><strong>输出:</strong> 0</p></blockquote><p><strong>示例 5:</strong></p><blockquote><p><strong>输入:</strong> nums = [1], target = 0</p><p><strong>输出:</strong> 0</p></blockquote><p><strong>提示:</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 10^4</code></li><li><code>-10^4 &lt;= nums[i] &lt;= 10^4</code></li><li><code>nums</code> 为<strong>无重复元素</strong> 的<strong>升序</strong> 排列数组</li><li><code>-10^4 &lt;= target &lt;= 10^4</code></li></ul>',15),_={class:"hint-container warning"},f=n("p",{class:"hint-container-title"},"注意",-1),w=c(`<h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>可以使用 <strong>二分查找法</strong> 来解决这个问题，二分查找的思路是每次将数组分成两半，逐步缩小查找范围 <code>[left, right]</code>，如果找到与 <code>target</code> 相等的数就返回 <code>mid</code> ，否则返回 <code>left</code>。</p><ol><li>初始化两个指针 <code>left</code> 和 <code>right</code>，分别指向数组的左右两端。</li><li>计算中间位置 <code>mid</code>，比较 <code>nums[mid]</code> 和 <code>target</code>： <ul><li>如果 <code>nums[mid] == target</code>，返回 <code>mid</code>，即 <code>target</code> 的索引位置。</li><li>如果 <code>nums[mid] &lt; target</code>，说明 <code>target</code> 应该在右半部分，移动 <code>left</code> 指针到 <code>mid + 1</code>。</li><li>如果 <code>nums[mid] &gt; target</code>，说明 <code>target</code> 应该在左半部分，移动 <code>right</code> 指针到 <code>mid - 1</code>。</li></ul></li><li>如果遍历完数组仍未找到 <code>target</code>，则返回 <code>left</code>，此时 <code>left</code> 就是 <code>target</code> 应该插入的位置。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(log n)</code>，每次查找都会将数组的查找范围缩小一半。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，只使用了常数级别的额外空间</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">target</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">searchInsert</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> right <span class="token operator">=</span> nums<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;=</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> mid <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span>right <span class="token operator">+</span> left<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">==</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> mid<span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">&lt;</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			left <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">&gt;</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			right <span class="token operator">=</span> mid <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> left<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7);function y(x,q){const p=o("font"),e=o("RouterLink"),l=o("ExternalLinkIcon");return i(),d("div",null,[k,n("p",null,[s("🟢 "),a(p,{color:"#15bd66"},{default:t(()=>[s("Easy")]),_:1}),s("  🔖  "),a(e,{to:"/tag/array.html"},{default:t(()=>[m]),_:1}),s(),a(e,{to:"/tag/binary-search.html"},{default:t(()=>[g]),_:1}),s("  🔗 "),n("a",h,[b,a(l)])]),v,n("div",_,[f,n("p",null,[s("本题与 LeetCode "),a(e,{to:"/problem/0035.html"},{default:t(()=>[s("第 35 题")]),_:1}),s(" 相同。")])]),w])}const j=r(u,[["render",y],["__file","jz_offer_II_068.html.vue"]]);export{j as default};
