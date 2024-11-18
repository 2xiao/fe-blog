import{_ as l,r as o,o as i,c as r,a as n,b as s,d as a,w as t,e as u}from"./app-9Xw5divW.js";const d={},k=n("h1",{id:"_57-ii-和为s的连续正数序列",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_57-ii-和为s的连续正数序列","aria-hidden":"true"},"#"),s(" 57-II. 和为s的连续正数序列")],-1),g=n("code",null,"数学",-1),m=n("code",null,"双指针",-1),v=n("code",null,"枚举",-1),h={href:"https://leetcode.cn/problems/he-wei-sde-lian-xu-zheng-shu-xu-lie-lcof",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"力扣",-1),f=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>待传输文件被切分成多个部分，按照原排列顺序，每部分文件编号均为一个 <strong>正整数</strong> （至少含有两个文件）。传输要求为：连续文件编号总和为接收方指定数字 <code>target</code> 的所有文件。请返回所有符合该要求的文件传输组合列表。</p><p><strong>注意</strong> ，返回时需遵循以下规则：</p><ul><li>每种组合按照文件编号 <strong>升序</strong> 排列；</li><li>不同组合按照第一个文件编号 <strong>升序</strong> 排列。</li></ul><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> target = 12</p><p><strong>输出：</strong>[[3, 4, 5]]</p><p><strong>解释：</strong> 在上述示例中，存在一个连续正整数序列的和为 12，为 [3, 4, 5]。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> target = 18</p><p><strong>输出：</strong>[[3,4,5,6],[5,6,7]]</p><p><strong>解释：</strong> 在上述示例中，存在两个连续正整数序列的和分别为 18，分别为 [3, 4, 5, 6] 和 [5, 6, 7]。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= target &lt;= 10^5</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>要找到所有连续正整数的组合，使得它们的总和等于指定的 <code>target</code>，可以使用双指针的方法来高效地找到这些组合。</p><ol><li><p><strong>初始化变量</strong>: 创建一个空数组 <code>res</code> 用于存储符合条件的组合。</p></li><li><p><strong>双指针法</strong>: 使用两个指针 <code>left</code> 和 <code>right</code>，<code>left</code> 表示当前组合的起始数字，<code>right</code> 表示当前组合的结束数字。初始时，<code>left</code> 从 <code>1</code> 开始，<code>right</code> 从 <code>2</code> 开始。</p></li><li><p><strong>计算和</strong>: 在循环中，通过公式计算从 <code>left</code> 到 <code>right</code> 的连续正整数的和。如果当前和等于目标 <code>target</code>，则将这个组合添加到结果数组 <code>res</code> 中。</p></li><li><p><strong>调整指针</strong>:</p><ul><li>如果当前和小于 <code>target</code>，则增加 <code>right</code> 指针以扩大范围。</li><li>如果当前和大于 <code>target</code>，则增加 <code>left</code> 指针以缩小范围。</li></ul></li><li><p><strong>返回结果</strong>: 当 <code>left</code> 达到 <code>target</code> 时，停止循环，并返回存储的所有组合。</p></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，在最坏情况下，<code>left</code> 会遍历到 <code>target</code>，而内部的 <code>for</code> 循环会从 <code>left</code> 遍历一次到 <code>right</code>。</li><li><strong>空间复杂度</strong>：<code>O(k)</code>，其中 <code>k</code> 是记录有效组合的数组的大小。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">target</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">fileCombination</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> right <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span> left <span class="token operator">&lt;</span> right<span class="token punctuation">;</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 计算从 left 到 right 的连续正整数的和</span>
		<span class="token keyword">const</span> sum <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>left <span class="token operator">+</span> right<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token punctuation">(</span>right <span class="token operator">-</span> left <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span>

		<span class="token comment">// 如果当前和等于 target，将这个组合添加到结果</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>sum <span class="token operator">==</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
			<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> left<span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> right<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>
			left<span class="token operator">++</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>sum <span class="token operator">&lt;</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// 当前和小于 target，扩大窗口</span>
			right<span class="token operator">++</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			<span class="token comment">// 当前和大于 target，缩小窗口</span>
			left<span class="token operator">++</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17);function _(w,y){const p=o("font"),e=o("RouterLink"),c=o("ExternalLinkIcon");return i(),r("div",null,[k,n("p",null,[s("🟢 "),a(p,{color:"#15bd66"},{default:t(()=>[s("Easy")]),_:1}),s("  🔖  "),a(e,{to:"/tag/math.html"},{default:t(()=>[g]),_:1}),s(),a(e,{to:"/tag/two-pointers.html"},{default:t(()=>[m]),_:1}),s(),a(e,{to:"/tag/enumeration.html"},{default:t(()=>[v]),_:1}),s("  🔗 "),n("a",h,[b,a(c)])]),f])}const j=l(d,[["render",_],["__file","jz_offer_57_2.html.vue"]]);export{j as default};
