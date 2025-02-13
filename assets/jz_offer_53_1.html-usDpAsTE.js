import{_ as i,r as o,o as r,c as u,a as n,b as s,d as a,w as t,e as p}from"./app-MXSjQbID.js";const d={},k=n("h1",{id:"_53-在排序数组中查找数字-i",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_53-在排序数组中查找数字-i","aria-hidden":"true"},"#"),s(" 53. 在排序数组中查找数字 I")],-1),m=n("code",null,"数组",-1),v=n("code",null,"二分查找",-1),b={href:"https://leetcode.cn/problems/zai-pai-xu-shu-zu-zhong-cha-zhao-shu-zi-lcof",target:"_blank",rel:"noopener noreferrer"},h=n("code",null,"力扣",-1),f=p('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>某班级考试成绩按非严格递增顺序记录于整数数组 scores，请返回目标成绩 target 的出现次数。</p><p><strong>示例 1：</strong></p><blockquote><p>输入: scores = [2, 2, 3, 4, 4, 4, 5, 6, 6, 8], target = 4</p><p>输出: 3</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p>输入: scores = [1, 2, 3, 5, 7, 9], target = 6</p><p>输出: 0</p></blockquote><p><strong>提示：</strong></p><ul><li><code>0 &lt;= scores.length &lt;= 10^5</code></li><li><code>-10^9 &lt;= scores[i] &lt;= 10^9</code></li><li><code>scores</code> 是一个非递减数组</li><li><code>-10^9 &lt;= target &lt;= 10^9</code></li></ul>',8),_={class:"hint-container warning"},g=n("p",{class:"hint-container-title"},"注意",-1),y=p(`<h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>这道题可以使用二分查找来解决。由于题目中给出的数组 <code>scores</code> 是非递减的，我们可以使用二分查找来找到目标成绩 <code>target</code> 在数组中的起始位置和结束位置，然后计算出现次数。具体步骤如下：</p><ol><li>初始化两个指针 <code>left</code> 和 <code>right</code> 分别指向数组的起始位置和结束位置。</li><li>使用二分查找找到目标成绩 <code>target</code> 在数组中的起始位置，更新指针 <code>left</code>。</li><li>使用二分查找找到目标成绩 <code>target</code> 在数组中的结束位置，更新指针 <code>right</code>。</li><li>计算目标成绩 <code>target</code> 在数组中的出现次数，即 <code>right - left + 1</code>。</li><li>返回计算得到的出现次数。</li></ol><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">scores</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">target</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">countTarget</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">scores<span class="token punctuation">,</span> target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> <span class="token function-variable function">binarySearch</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">arr<span class="token punctuation">,</span> isLeft</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
		<span class="token keyword">let</span> right <span class="token operator">=</span> arr<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
		<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
		<span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;=</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">let</span> mid <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span>right <span class="token operator">-</span> left<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">+</span> left<span class="token punctuation">;</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">==</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				res <span class="token operator">=</span> mid<span class="token punctuation">;</span>
				<span class="token keyword">if</span> <span class="token punctuation">(</span>isLeft<span class="token punctuation">)</span> <span class="token punctuation">{</span>
					right <span class="token operator">=</span> mid <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 继续往左边找</span>
				<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
					left <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 继续往右边找</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">&gt;</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				right <span class="token operator">=</span> mid <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
				left <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">return</span> res<span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>

	<span class="token keyword">const</span> leftIndex <span class="token operator">=</span> <span class="token function">binarySearch</span><span class="token punctuation">(</span>scores<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> rightIndex <span class="token operator">=</span> <span class="token function">binarySearch</span><span class="token punctuation">(</span>scores<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">// 目标成绩不存在</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>leftIndex <span class="token operator">==</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token operator">||</span> rightIndex <span class="token operator">==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> rightIndex <span class="token operator">-</span> leftIndex <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5);function w(x,I){const c=o("font"),e=o("RouterLink"),l=o("ExternalLinkIcon");return r(),u("div",null,[k,n("p",null,[s("🟢 "),a(c,{color:"#15bd66"},{default:t(()=>[s("Easy")]),_:1}),s("  🔖  "),a(e,{to:"/tag/array.html"},{default:t(()=>[m]),_:1}),s(),a(e,{to:"/tag/binary-search.html"},{default:t(()=>[v]),_:1}),s("  🔗 "),n("a",b,[h,a(l)])]),f,n("div",_,[g,n("p",null,[s("本题与 LeetCode "),a(e,{to:"/problem/0034.html"},{default:t(()=>[s("第 34 题")]),_:1}),s(" 相同。")])]),y])}const L=i(d,[["render",w],["__file","jz_offer_53_1.html.vue"]]);export{L as default};
