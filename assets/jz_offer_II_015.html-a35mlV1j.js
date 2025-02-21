import{_ as i,r as o,o as u,c as d,a as s,b as n,d as a,w as t,e as p}from"./app-9CeBk-uV.js";const r={},k=s("h1",{id:"_15-字符串中的所有变位词",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_15-字符串中的所有变位词","aria-hidden":"true"},"#"),n(" 15. 字符串中的所有变位词")],-1),v=s("code",null,"哈希表",-1),m=s("code",null,"字符串",-1),b=s("code",null,"滑动窗口",-1),h={href:"https://leetcode.cn/problems/VabMRr",target:"_blank",rel:"noopener noreferrer"},g=s("code",null,"力扣",-1),_=p('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>给定两个字符串 <code>s</code> 和<code>p</code>，找到 <code>s</code> 中所有 <code>p</code> 的 <strong>变位词</strong> 的子串，返回这些子串的起始索引。不考虑答案输出的顺序。</p><p><strong>变位词</strong> 指字母相同，但排列不同的字符串。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入:</strong> s = &quot;cbaebabacd&quot;, p = &quot;abc&quot;</p><p><strong>输出:</strong>[0,6]</p><p><strong>解释:</strong></p><p>起始索引等于 0 的子串是 &quot;cba&quot;, 它是 &quot;abc&quot; 的变位词。</p><p>起始索引等于 6 的子串是 &quot;bac&quot;, 它是 &quot;abc&quot; 的变位词。</p></blockquote><p>** 示例 2：**</p><blockquote><p><strong>输入:</strong> s = &quot;abab&quot;, p = &quot;ab&quot;</p><p><strong>输出:</strong>[0,1,2]</p><p><strong>解释:</strong></p><p>起始索引等于 0 的子串是 &quot;ab&quot;, 它是 &quot;ab&quot; 的变位词。</p><p>起始索引等于 1 的子串是 &quot;ba&quot;, 它是 &quot;ab&quot; 的变位词。</p><p>起始索引等于 2 的子串是 &quot;ab&quot;, 它是 &quot;ab&quot; 的变位词。</p></blockquote><p><strong>提示:</strong></p><ul><li><code>1 &lt;= s.length, p.length &lt;= 3 * 10^4</code></li><li><code>s</code> 和 <code>p</code> 仅包含小写字母</li></ul>',9),f={class:"hint-container warning"},w=s("p",{class:"hint-container-title"},"注意",-1),q=p('<h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>使用滑动窗口算法，思路如下：</p><ol><li>使用双指针中的左右指针，初始化 <code>left = right = 0</code>，把索引左闭右开区间 <code>[left, right)</code> 称为一个「窗口」；</li><li>不断地增加 <code>right</code> 指针扩大窗口 <code>[left, right)</code>，直到窗口中的字符串符合要求（包含了 <code>s1.length</code> 个字符）；</li><li>停止增加 <code>right</code>，转而不断增加 <code>left</code> 指针缩小窗口 <code>[left, right)</code>，直到窗口中的字符串不再符合要求（不包含 <code>s1.length</code> 个字符了）；同时，每次增加 <code>left</code>，都要更新一轮结果；</li><li>重复第 2 和第 3 步，直到 <code>right</code> 到达字符串 <code>s2</code> 的尽头；</li></ol>',3),y=p(`<h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>： <code>O(n + m)</code>，其中 <code>n</code> 是 <code>s2</code> 的长度，<code>m</code> 是 <code>s1</code> 的长度。 <ul><li>初始化 <code>need</code> 字典需要遍历字符串 <code>s1</code>，时间复杂度是 <code>O(m)</code>；</li><li>滑动窗口遍历 <code>s</code>，外层的 <code>while</code> 循环遍历字符串 <code>s</code>，最多遍历 <code>n</code> 次；</li><li>内层 <code>if</code> 语句也只是在窗口达到 <code>p.length</code> 时触发，窗口的大小固定为 <code>p.length</code>，每次移动左指针时也是常数时间操作。</li></ul></li><li><strong>空间复杂度</strong>： <code>O(n)</code><ul><li>结果数组 <code>res</code> 最多存储 <code>O(n)</code> 个结果（每个可能的起始索引），在最坏情况下，<code>res</code> 数组可能会存储所有可能的起始索引，导致空间复杂度为 <code>O(n)</code>。</li><li><code>need</code> 和 <code>window</code> 字典的大小最多是英文字母的数量（26 个字母），所以它们的空间复杂度是 <code>O(1)</code>，其他变量的存储是常数空间。</li></ul></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">s</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">p</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">findAnagrams</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s<span class="token punctuation">,</span> p</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> window <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
		need <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token keyword">of</span> p<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		need<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span>need<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
		right <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
		valid <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
		<span class="token comment">// 记录结果</span>
		res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

	<span class="token keyword">while</span> <span class="token punctuation">(</span>right <span class="token operator">&lt;</span> s<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> c <span class="token operator">=</span> s<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">;</span>
		right<span class="token operator">++</span><span class="token punctuation">;</span>

		<span class="token comment">// 进行窗口内数据的一系列更新</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>need<span class="token punctuation">[</span>c<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			window<span class="token punctuation">[</span>c<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span>window<span class="token punctuation">[</span>c<span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>window<span class="token punctuation">[</span>c<span class="token punctuation">]</span> <span class="token operator">==</span> need<span class="token punctuation">[</span>c<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				valid<span class="token operator">++</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>

		<span class="token comment">// 判断左侧窗口是否要收缩</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>right <span class="token operator">-</span> left <span class="token operator">==</span> p<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// 当窗口符合条件时，把起始索引加入 res</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>valid <span class="token operator">==</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>need<span class="token punctuation">)</span><span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>

			<span class="token keyword">let</span> d <span class="token operator">=</span> s<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">;</span>
			left<span class="token operator">++</span><span class="token punctuation">;</span>

			<span class="token comment">// 进行窗口内数据的一系列更新</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>need<span class="token punctuation">[</span>d<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token keyword">if</span> <span class="token punctuation">(</span>window<span class="token punctuation">[</span>d<span class="token punctuation">]</span> <span class="token operator">==</span> need<span class="token punctuation">[</span>d<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
					valid<span class="token operator">--</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span>
				window<span class="token punctuation">[</span>d<span class="token punctuation">]</span><span class="token operator">--</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function x(O,j){const c=o("font"),e=o("RouterLink"),l=o("ExternalLinkIcon");return u(),d("div",null,[k,s("p",null,[n("🟠 "),a(c,{color:"#ffb800"},{default:t(()=>[n("Medium")]),_:1}),n("  🔖  "),a(e,{to:"/tag/hash-table.html"},{default:t(()=>[v]),_:1}),n(),a(e,{to:"/tag/string.html"},{default:t(()=>[m]),_:1}),n(),a(e,{to:"/tag/sliding-window.html"},{default:t(()=>[b]),_:1}),n("  🔗 "),s("a",h,[g,a(l)])]),_,s("div",f,[w,s("p",null,[n("本题与 LeetCode "),a(e,{to:"/problem/0438.html"},{default:t(()=>[n("第 438 题")]),_:1}),n(" 相同。")])]),q,s("p",null,[n("详细的滑动窗口答题框架讲解，可阅读 "),a(e,{to:"/book/slide_window.html"},{default:t(()=>[n("《3.11 滑动窗口》")]),_:1}),n("。")]),y])}const L=i(r,[["render",x],["__file","jz_offer_II_015.html.vue"]]);export{L as default};
