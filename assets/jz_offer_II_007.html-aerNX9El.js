import{_ as u,r as e,o as i,c as r,a as n,b as s,d as a,w as t,e as p}from"./app-MXSjQbID.js";const d={},k=n("h1",{id:"_7-数组中和为-0-的三个数",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_7-数组中和为-0-的三个数","aria-hidden":"true"},"#"),s(" 7. 数组中和为 0 的三个数")],-1),m=n("code",null,"数组",-1),v=n("code",null,"双指针",-1),b=n("code",null,"排序",-1),h={href:"https://leetcode.cn/problems/1fGaJU",target:"_blank",rel:"noopener noreferrer"},g=n("code",null,"力扣",-1),_=p('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>给定一个包含 <code>n</code> 个整数的数组 <code>nums</code>，判断 <code>nums</code> 中是否存在三个元素 <code>a</code> ，<code>b</code> ，<code>c</code> <em>，</em> 使得 <code>a + b + c = 0</code> ？请找出所有和为 <code>0</code> 且 **不重复 **的三元组。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> nums = [-1,0,1,2,-1,-4]</p><p><strong>输出：</strong>[[-1,-1,2],[-1,0,1]]</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> nums = []</p><p><strong>输出：</strong>[]</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> nums = [0]</p><p><strong>输出：</strong>[]</p></blockquote><p><strong>提示：</strong></p><ul><li><code>0 &lt;= nums.length &lt;= 3000</code></li><li><code>-10^5 &lt;= nums[i] &lt;= 10^5</code></li></ul>',10),f={class:"hint-container warning"},w=n("p",{class:"hint-container-title"},"注意",-1),j=p(`<h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ul><li><p>这一题比较麻烦的一点在于，最后输出解的时候，要求输出不重复的解。</p></li><li><p>数组中同一个数字可能出现多次，同一个数字也可能使用多次，但是最后输出解的时候，不能重复。例如 <code>[-1, -1, 2]</code> 和 <code>[2, -1, -1]</code>、<code>[-1, 2, -1]</code> 这 3 个解是重复的。</p></li><li><p>这就需要排序和去重，使用对撞指针寻找三数之和为 <code>0</code> 的组合。</p></li><li><p>先对数组进行排序，<code>i</code> 从后往前扫描，这里同样需要注意数组中存在多个重复数字的问题。<code>i</code> 在循环的时候和后一个数进行比较，如果相等，<code>i</code> 继续往前移，直到移到下一个和前一个数字不同的位置。</p></li><li><p><code>j</code>，<code>k</code> 两个指针开始一前一后对撞，<code>j</code> 从数组首位开始，<code>k</code> 为 <code>i</code> 的前一个数字，由于经过排序，所以 <code>j &lt; k</code>。</p></li><li><p>对比三个数的和与 <code>target</code> 的大小，寻找三数之和为 <code>target</code> 的组合，移动指针时注意去重：</p><ul><li>小于 <code>target</code>，<code>j</code> 往后移动；</li><li>大于 <code>target</code>，<code>k</code> 往前移动；</li></ul></li></ul><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><p><strong>时间复杂度</strong>：<code>O(n^2)</code></p><ul><li><strong>排序</strong>：<code>nums.sort()</code> 的时间复杂度是 <code>O(n log n)</code>，其中 <code>n</code> 是数组的长度。</li><li><strong>双指针查找</strong>：对于每个固定的数 <code>nums[i]</code>，双指针查找的复杂度是 <code>O(n)</code>（即遍历剩下的数组）。</li><li><strong>循环遍历</strong>： 外层循环遍历了 <code>n</code> 个元素，每次执行双指针查找的操作，时间复杂度为 <code>O(n^2)</code>。</li></ul></li><li><p><strong>空间复杂度</strong>：<code>O(n)</code>（不考虑输出结果），主要是用于存储结果和排序的空间。</p><ul><li><strong>排序操作</strong>：排序操作占用 <code>O(n)</code> 的空间。</li><li><strong>结果存储</strong>：结果数组 <code>res</code> 最多存储 <code>O(n^2)</code> 个三元组，但由于题目通常要求三元组不重复，实际存储的元素较少。</li></ul></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">threeSum</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	nums <span class="token operator">=</span> nums<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a <span class="token operator">-</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> target <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> nums<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&gt;</span> <span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 排除 i 重复的情况</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">===</span> nums<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">||</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">!=</span> nums<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
			<span class="token keyword">let</span> k <span class="token operator">=</span> i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
			<span class="token keyword">let</span> sum <span class="token operator">=</span> target <span class="token operator">-</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
			<span class="token keyword">while</span> <span class="token punctuation">(</span>j <span class="token operator">&lt;</span> k<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">+</span> nums<span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token operator">===</span> sum<span class="token punctuation">)</span> <span class="token punctuation">{</span>
					res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">[</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">,</span> nums<span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
					<span class="token comment">// 排除 j 重复的情况</span>
					<span class="token keyword">while</span> <span class="token punctuation">(</span>j <span class="token operator">&lt;</span> k <span class="token operator">&amp;&amp;</span> nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">===</span> nums<span class="token punctuation">[</span>j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
						j<span class="token operator">++</span><span class="token punctuation">;</span>
					<span class="token punctuation">}</span>
					<span class="token comment">// 排除 k 重复的情况</span>
					<span class="token keyword">while</span> <span class="token punctuation">(</span>j <span class="token operator">&lt;</span> k <span class="token operator">&amp;&amp;</span> nums<span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token operator">===</span> nums<span class="token punctuation">[</span>k <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
						k<span class="token operator">--</span><span class="token punctuation">;</span>
					<span class="token punctuation">}</span>
					j<span class="token operator">++</span><span class="token punctuation">;</span>
					k<span class="token operator">--</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">+</span> nums<span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token operator">&lt;</span> sum<span class="token punctuation">)</span> <span class="token punctuation">{</span>
					j<span class="token operator">++</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
					k<span class="token operator">--</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function y(x,O){const c=e("font"),o=e("RouterLink"),l=e("ExternalLinkIcon");return i(),r("div",null,[k,n("p",null,[s("🟠 "),a(c,{color:"#ffb800"},{default:t(()=>[s("Medium")]),_:1}),s("  🔖  "),a(o,{to:"/tag/array.html"},{default:t(()=>[m]),_:1}),s(),a(o,{to:"/tag/two-pointers.html"},{default:t(()=>[v]),_:1}),s(),a(o,{to:"/tag/sorting.html"},{default:t(()=>[b]),_:1}),s("  🔗 "),n("a",h,[g,a(l)])]),_,n("div",f,[w,n("p",null,[s("本题与 LeetCode "),a(o,{to:"/problem/0015.html"},{default:t(()=>[s("第 15 题")]),_:1}),s(" 相同。")])]),j])}const I=u(d,[["render",y],["__file","jz_offer_II_007.html.vue"]]);export{I as default};
