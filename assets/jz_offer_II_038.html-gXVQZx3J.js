import{_ as i,r as o,o as u,c as r,a as n,b as s,d as a,w as t,e as p}from"./app-3dvbhwow.js";const d={},k=n("h1",{id:"_38-每日温度",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_38-每日温度","aria-hidden":"true"},"#"),s(" 38. 每日温度")],-1),m=n("code",null,"栈",-1),h=n("code",null,"数组",-1),v=n("code",null,"单调栈",-1),_={href:"https://leetcode.cn/problems/iIQa4I",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"力扣",-1),g=p('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>请根据每日 <code>气温</code> 列表 <code>temperatures</code> ，重新生成一个列表，要求其对应位置的输出为：要想观测到更高的气温，至少需要等待的天数。如果气温在这之后都不会升高，请在该位置用 <code>0</code> 来代替。</p><p><strong>示例 1:</strong></p><blockquote><p><strong>输入:</strong> temperatures = [73,74,75,71,69,72,76,73]</p><p><strong>输出:</strong> [1,1,4,2,1,1,0,0]</p></blockquote><p><strong>示例 2:</strong></p><blockquote><p><strong>输入:</strong> temperatures = [30,40,50,60]</p><p><strong>输出:</strong> [1,1,1,0]</p></blockquote><p><strong>示例 3:</strong></p><blockquote><p><strong>输入:</strong> temperatures = [30,60,90]</p><p><strong>输出:</strong>[1,1,0]</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= temperatures.length &lt;= 10^5</code></li><li><code>30 &lt;= temperatures[i] &lt;= 100</code></li></ul>',10),f={class:"hint-container warning"},w=n("p",{class:"hint-container-title"},"注意",-1),y=p(`<h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>栈（stack）是一种非常适合解决这一类“下一大于”问题的数据结构。通过栈，可以有效地跟踪当前未找到更高温度的天数。</p><ol><li><p><strong>遍历温度数组</strong>：</p><ul><li>使用一个 <code>for</code> 循环遍历 <code>temperatures</code> 数组。对于每个温度： <ul><li>使用一个 <code>while</code> 循环检查栈顶的索引所对应的温度是否小于当前温度。</li></ul></li><li>如果小于，说明找到了一个更高的温度：从栈中弹出索引，并记录当前温度的索引（作为更高温度的索引）到 <code>map</code> 中。</li><li>将当前的索引压入栈中，表示当前温度尚未找到更高的温度。</li></ul></li><li><p><strong>构建结果数组</strong>：</p><ul><li>遍历 <code>temperatures</code> 数组，利用 <code>map</code> 中存储的索引计算每一天距离下一个更高温度的天数： <ul><li>如果当前索引在 <code>map</code> 中存在，则用 <code>map.get(i) - i</code> 计算天数（下一个更高温度的索引减去当前索引）。</li><li>如果不存在，则说明没有找到更高温度，返回 0。</li></ul></li></ul></li><li><p><strong>返回结果</strong>：</p><ul><li>最后，返回更新后的 <code>temperatures</code> 数组，表示每一天距离下一个更高温度的天数。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><p><strong>时间复杂度</strong>： <code>O(n)</code>，其中 n 是 <code>temperatures</code> 数组的长度。</p><ul><li>需要遍历一次 <code>temperatures</code> 数组。</li><li>在每个温度的处理过程中，栈的每个索引在整个过程中最多被入栈和出栈各一次。因此，入栈和出栈操作的总次数也为 <code>O(n)</code>。</li><li>因此，整个算法的时间复杂度为 <code>O(n)</code>。</li></ul></li><li><p><strong>空间复杂度</strong>： <code>O(n)</code></p><ul><li>使用了一个栈来存储索引。在最坏情况下（例如，温度是递增的），栈可能会存储所有的索引，空间复杂度为 <code>O(n)</code>。</li><li>还使用了一个 <code>Map</code> 来存储每个索引对应的下一个更高温度的索引，最坏情况下也需要存储 <code>n</code> 个元素，空间复杂度同样是 <code>O(n)</code>。</li></ul></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">temperatures</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">dailyTemperatures</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">temperatures</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> stack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> temperatures<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">while</span> <span class="token punctuation">(</span>
			stack<span class="token punctuation">.</span>length <span class="token operator">&amp;&amp;</span>
			temperatures<span class="token punctuation">[</span>stack<span class="token punctuation">[</span>stack<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">&lt;</span> temperatures<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
		<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> temperatures<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		temperatures<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> map<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token operator">?</span> map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token operator">-</span> i <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> temperatures<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7);function x(I,q){const c=o("font"),e=o("RouterLink"),l=o("ExternalLinkIcon");return u(),r("div",null,[k,n("p",null,[s("🟠 "),a(c,{color:"#ffb800"},{default:t(()=>[s("Medium")]),_:1}),s("  🔖  "),a(e,{to:"/tag/stack.html"},{default:t(()=>[m]),_:1}),s(),a(e,{to:"/tag/array.html"},{default:t(()=>[h]),_:1}),s(),a(e,{to:"/tag/monotonic-stack.html"},{default:t(()=>[v]),_:1}),s("  🔗 "),n("a",_,[b,a(l)])]),g,n("div",f,[w,n("p",null,[s("本题与 LeetCode "),a(e,{to:"/problem/0739.html"},{default:t(()=>[s("第 739 题")]),_:1}),s(" 相同。")])]),y])}const j=i(d,[["render",x],["__file","jz_offer_II_038.html.vue"]]);export{j as default};
