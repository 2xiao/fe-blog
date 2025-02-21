import{_ as l,r as e,o as r,c as i,a as n,b as s,d as a,w as t,e as u}from"./app-9CeBk-uV.js";const d={},k=n("h1",{id:"_1304-和为零的-n-个不同整数",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1304-和为零的-n-个不同整数","aria-hidden":"true"},"#"),s(" 1304. 和为零的 N 个不同整数")],-1),h=n("code",null,"数组",-1),m=n("code",null,"数学",-1),g={href:"https://leetcode.cn/problems/find-n-unique-integers-sum-up-to-zero",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"力扣",-1),v={href:"https://leetcode.com/problems/find-n-unique-integers-sum-up-to-zero",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"LeetCode",-1),f=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an integer <code>n</code>, return <strong>any</strong> array containing <code>n</code> <strong>unique</strong> integers such that they add up to <code>0</code>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: n = 5</p><p>Output: [-7,-1,1,3,4]</p><p>Explanation: These arrays also are accepted [-5,-1,1,2,3] , [-3,-1,2,-2,4].</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: n = 3</p><p>Output: [-1,0,1]</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: n = 1</p><p>Output: [0]</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= n &lt;= 1000</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个整数 <code>n</code>，请你返回 **任意 **一个由 <code>n</code> 个 **各不相同 **的整数组成的数组，并且这 <code>n</code> 个数相加和为 <code>0</code> 。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> n = 5</p><p><strong>输出：</strong>[-7,-1,1,3,4]</p><p><strong>解释：</strong> 这些数组也是正确的 [-5,-1,1,2,3]，[-3,-1,2,-2,4]。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> n = 3</p><p><strong>输出：</strong>[-1,0,1]</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> n = 1</p><p><strong>输出：</strong>[0]</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= n &lt;= 1000</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>正负配对：</strong></p><ul><li>每对正负数相加之和为 <code>0</code>，例如 <code>[1, -1]</code>。</li><li>如果 <code>n</code> 是偶数，只需构造 <code>n/2</code> 对正负数即可。</li><li>如果 <code>n</code> 是奇数，可以在上述基础上添加一个 <code>0</code>。</li></ul></li><li><p><strong>构造数组：</strong></p><ul><li>初始化结果数组 <code>res</code>。</li><li>遍历从 <code>1</code> 到 <code>n/2</code> 的整数： <ul><li>将正数 <code>i</code> 和负数 <code>-i</code> 分别添加到结果数组中。</li></ul></li><li>如果 <code>n</code> 是奇数，在最后加上 <code>0</code>。</li></ul></li><li><p>返回构造好的数组。</p></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，需要遍历 <code>n/2</code> 次以生成数组。</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，用于存储结果数组。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">n</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">sumZero</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>n <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
		res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token operator">-</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,26);function x(q,y){const c=e("font"),o=e("RouterLink"),p=e("ExternalLinkIcon");return r(),i("div",null,[k,n("p",null,[s("🟢 "),a(c,{color:"#15bd66"},{default:t(()=>[s("Easy")]),_:1}),s("  🔖  "),a(o,{to:"/tag/array.html"},{default:t(()=>[h]),_:1}),s(),a(o,{to:"/tag/math.html"},{default:t(()=>[m]),_:1}),s("  🔗 "),n("a",g,[b,a(p)]),s(),n("a",v,[_,a(p)])]),f])}const E=l(d,[["render",x],["__file","1304.html.vue"]]);export{E as default};
