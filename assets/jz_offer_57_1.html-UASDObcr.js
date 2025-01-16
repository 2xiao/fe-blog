import{_ as l,r as o,o as i,c as r,a as n,b as s,d as a,w as t,e as u}from"./app-KDJRKGep.js";const d={},k=n("h1",{id:"_57-和为s的两个数字",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_57-和为s的两个数字","aria-hidden":"true"},"#"),s(" 57. 和为s的两个数字")],-1),h=n("code",null,"数组",-1),m=n("code",null,"双指针",-1),_=n("code",null,"二分查找",-1),v={href:"https://leetcode.cn/problems/he-wei-sde-liang-ge-shu-zi-lcof",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"力扣",-1),g=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>购物车内的商品价格按照升序记录于数组 <code>price</code>。请在购物车中找到两个商品的价格总和刚好是 <code>target</code>。若存在多种情况，返回任一结果即可。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> price = [3, 9, 12, 15], target = 18</p><p><strong>输出：</strong>[3,15] 或者 [15,3]</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> price = [8, 21, 27, 34, 52, 66], target = 61</p><p><strong>输出：</strong>[27,34] 或者 [34,27]</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= price.length &lt;= 10^5</code></li><li><code>1 &lt;= price[i] &lt;= 10^6</code></li><li><code>1 &lt;= target &lt;= 2*10^6</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>使用哈希表，顺序扫描数组，对每一个元素，在 <code>set</code> 中找能组合给定值的另一半数字：</p><ul><li>如果找到了，直接返回 2 个数字即可；</li><li>如果找不到，就把这个数字存入 <code>set</code> 中，等待扫到“另一半”数字的时候，再取用；</li></ul><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是数组的长度。</li><li><strong>空间复杂度</strong>：<code>O(k)</code>，其中 <code>k</code> 是 <code>set</code> 中存放的数字数量，最坏情况下，需要扫描到最后一个数字才能找到结果，此时 <code>k</code> 会趋近 <code>n</code>。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">price</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">target</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">twoSum</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">price<span class="token punctuation">,</span> target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> set <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> num <span class="token keyword">of</span> price<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> another <span class="token operator">=</span> target <span class="token operator">-</span> num<span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>set<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>another<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> <span class="token punctuation">[</span>num<span class="token punctuation">,</span> another<span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			set<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15);function f(w,y){const c=o("font"),e=o("RouterLink"),p=o("ExternalLinkIcon");return i(),r("div",null,[k,n("p",null,[s("🟢 "),a(c,{color:"#15bd66"},{default:t(()=>[s("Easy")]),_:1}),s("  🔖  "),a(e,{to:"/tag/array.html"},{default:t(()=>[h]),_:1}),s(),a(e,{to:"/tag/two-pointers.html"},{default:t(()=>[m]),_:1}),s(),a(e,{to:"/tag/binary-search.html"},{default:t(()=>[_]),_:1}),s("  🔗 "),n("a",v,[b,a(p)])]),g])}const j=l(d,[["render",f],["__file","jz_offer_57_1.html.vue"]]);export{j as default};
