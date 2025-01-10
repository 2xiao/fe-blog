import{_ as r,r as c,o as i,c as p,a as n,b as e,d as o,w as s,f as d,e as u}from"./app-XFeYdzZv.js";const g={},h=n("h1",{id:"_2103-环和杆",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2103-环和杆","aria-hidden":"true"},"#"),e(" 2103. 环和杆")],-1),k=n("code",null,"哈希表",-1),b=n("code",null,"字符串",-1),m={href:"https://leetcode.cn/problems/rings-and-rods",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"力扣",-1),_={href:"https://leetcode.com/problems/rings-and-rods",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"LeetCode",-1),x=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>There are <code>n</code> rings and each ring is either red, green, or blue. The rings are distributed <strong>across ten rods</strong> labeled from <code>0</code> to <code>9</code>.</p><p>You are given a string <code>rings</code> of length <code>2n</code> that describes the <code>n</code> rings that are placed onto the rods. Every two characters in <code>rings</code> forms a <strong>color-position pair</strong> that is used to describe each ring where:</p><ul><li>The <strong>first</strong> character of the <code>ith</code> pair denotes the <code>ith</code> ring&#39;s <strong>color</strong> (<code>&#39;R&#39;</code>, <code>&#39;G&#39;</code>, <code>&#39;B&#39;</code>).</li><li>The <strong>second</strong> character of the <code>ith</code> pair denotes the <strong>rod</strong> that the <code>ith</code> ring is placed on (<code>&#39;0&#39;</code> to <code>&#39;9&#39;</code>).</li></ul><p>For example, <code>&quot;R3G2B1&quot;</code> describes <code>n == 3</code> rings: a red ring placed onto the rod labeled 3, a green ring placed onto the rod labeled 2, and a blue ring placed onto the rod labeled 1.</p><p>Return <em>the number of rods that have <strong>all three colors</strong> of rings on them.</em></p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/11/23/ex1final.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: rings = &quot;B0B6G0R6R0R6G9&quot;</p><p>Output: 1</p><p>Explanation:</p><ul><li>The rod labeled 0 holds 3 rings with all colors: red, green, and blue.</li><li>The rod labeled 6 holds 3 rings, but it only has red and blue.</li><li>The rod labeled 9 holds only a green ring.</li></ul><p>Thus, the number of rods with all three colors is 1.</p></blockquote><p><strong>Example 2:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/11/23/ex2final.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: rings = &quot;B0R0G0R9R0B0G0&quot;</p><p>Output: 1</p><p>Explanation:</p><ul><li>The rod labeled 0 holds 6 rings with all colors: red, green, and blue.</li><li>The rod labeled 9 holds only a red ring.</li></ul><p>Thus, the number of rods with all three colors is 1.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: rings = &quot;G4&quot;</p><p>Output: 0</p><p>Explanation:</p><p>Only one ring is given. Thus, no rods have all three colors.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>rings.length == 2 * n</code></li><li><code>1 &lt;= n &lt;= 100</code></li><li><code>rings[i]</code> where <code>i</code> is <strong>even</strong> is either <code>&#39;R&#39;</code>, <code>&#39;G&#39;</code>, or <code>&#39;B&#39;</code> (<strong>0-indexed</strong>).</li><li><code>rings[i]</code> where <code>i</code> is <strong>odd</strong> is a digit from <code>&#39;0&#39;</code> to <code>&#39;9&#39;</code> (<strong>0-indexed</strong>).</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>总计有 <code>n</code> 个环，环的颜色可以是红、绿、蓝中的一种。这些环分别穿在 10 根编号为 <code>0</code> 到 <code>9</code> 的杆上。</p><p>给你一个长度为 <code>2n</code> 的字符串 <code>rings</code> ，表示这 <code>n</code> 个环在杆上的分布。<code>rings</code> 中每两个字符形成一个 <strong>颜色位置对</strong> ，用于描述每个环：</p><ul><li>第 <code>i</code> 对中的 <strong>第一个</strong> 字符表示第 <code>i</code> 个环的 <strong>颜色</strong> （<code>&#39;R&#39;</code>、<code>&#39;G&#39;</code>、<code>&#39;B&#39;</code>）。</li><li>第 <code>i</code> 对中的 <strong>第二个</strong> 字符表示第 <code>i</code> 个环的 <strong>位置</strong> ，也就是位于哪根杆上（<code>&#39;0&#39;</code> 到 <code>&#39;9&#39;</code>）。</li></ul><p>例如，<code>&quot;R3G2B1&quot;</code> 表示：共有 <code>n == 3</code> 个环，红色的环在编号为 3 的杆上，绿色的环在编号为 2 的杆上，蓝色的环在编号为 1 的杆上。</p><p>找出所有集齐 <strong>全部三种颜色</strong> 环的杆，并返回这种杆的数量。</p><p><strong>示例 1：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/11/23/ex1final.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>输入：</strong> rings = &quot;B0B6G0R6R0R6G9&quot;</p><p><strong>输出：</strong> 1</p><p><strong>解释：</strong></p><ul><li>编号 0 的杆上有 3 个环，集齐全部颜色：红、绿、蓝。</li><li>编号 6 的杆上有 3 个环，但只有红、蓝两种颜色。</li><li>编号 9 的杆上只有 1 个绿色环。</li></ul><p>因此，集齐全部三种颜色环的杆的数目为 1 。</p></blockquote><p><strong>示例 2：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/11/23/ex2final.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>输入：</strong> rings = &quot;B0R0G0R9R0B0G0&quot;</p><p><strong>输出：</strong> 1</p><p><strong>解释：</strong></p><ul><li>编号 0 的杆上有 6 个环，集齐全部颜色：红、绿、蓝。</li><li>编号 9 的杆上只有 1 个红色环。</li></ul><p>因此，集齐全部三种颜色环的杆的数目为 1 。</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> rings = &quot;G4&quot;</p><p><strong>输出：</strong> 0</p><p><strong>解释：</strong></p><p>只给了一个环，因此，不存在集齐全部三种颜色环的杆。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>rings.length == 2 * n</code></li><li><code>1 &lt;= n &lt;= 100</code></li><li>如 <code>i</code> 是 <strong>偶数</strong> ，则 <code>rings[i]</code> 的值可以取 <code>&#39;R&#39;</code>、<code>&#39;G&#39;</code> 或 <code>&#39;B&#39;</code>（下标从 <strong>0</strong> 开始计数）</li><li>如 <code>i</code> 是 <strong>奇数</strong> ，则 <code>rings[i]</code> 的值可以取 <code>&#39;0&#39;</code> 到 <code>&#39;9&#39;</code> 中的一个数字（下标从 <strong>0</strong> 开始计数）</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>使用位运算表示颜色</strong>:</p><ul><li>每种颜色用一个二进制位表示： <ul><li>红色 (R): <code>1</code> (二进制 <code>001</code>)</li><li>绿色 (G): <code>2</code> (二进制 <code>010</code>)</li><li>蓝色 (B): <code>4</code> (二进制 <code>100</code>)</li></ul></li><li>如果一个柱子上同时拥有这三种颜色，其状态的二进制表示为 <code>111</code>，对应十进制值 <code>7</code>。</li></ul></li><li><p><strong>初始化柱子状态</strong>:</p><ul><li>使用长度为 10 的数组 <code>count</code>，初始值为 <code>0</code>，表示每个柱子上没有任何颜色的环。</li></ul></li><li><p><strong>遍历输入字符串</strong>:</p><ul><li><code>rings</code> 中，每两个字符表示一个环的颜色和柱子编号。</li><li>遍历字符串，将颜色用位运算累加到对应柱子的状态中： <ul><li><code>count[pillar] |= colorValue</code> 将颜色信息叠加到柱子的状态。</li></ul></li></ul></li><li><p><strong>统计满足条件的柱子</strong>:</p><ul><li>遍历 <code>count</code> 数组，统计状态为 <code>7</code> 的柱子数量，即包含三种颜色的柱子。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code><ul><li>遍历 <code>rings</code> 一次，时间复杂度为 <code>O(n)</code>，其中 <code>n</code> 是字符串的长度。</li><li>遍历 <code>count</code> 数组进行统计，时间复杂度为 <code>O(1)</code>（数组长度固定为 10）。</li><li>总时间复杂度为 <code>O(n)</code>。</li></ul></li><li><strong>空间复杂度</strong>：<code>O(1)</code>，使用了一个固定大小为 10 的数组 <code>count</code>。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">rings</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">countPoints</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">rings</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> colorMap <span class="token operator">=</span> <span class="token punctuation">{</span>
		<span class="token constant">R</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
		<span class="token constant">G</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
		<span class="token constant">B</span><span class="token operator">:</span> <span class="token number">4</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> rings<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i <span class="token operator">+=</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		count<span class="token punctuation">[</span><span class="token function">Number</span><span class="token punctuation">(</span>rings<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token operator">|=</span> colorMap<span class="token punctuation">[</span>rings<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> count<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">i</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> i <span class="token operator">==</span> <span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,39),y=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),q=n("td",{style:{"text-align":"center"}},"1941",-1),R=n("td",{style:{"text-align":"left"}},"检查是否所有字符出现次数相同",-1),w={style:{"text-align":"center"}},B={style:{"text-align":"left"}},G=n("code",null,"哈希表",-1),T=n("code",null,"字符串",-1),E=n("code",null,"计数",-1),O=n("td",{style:{"text-align":"center"}},"🟢",-1),N={style:{"text-align":"center"}},V={href:"https://leetcode.cn/problems/check-if-all-characters-have-equal-number-of-occurrences",target:"_blank",rel:"noopener noreferrer"},C={href:"https://leetcode.com/problems/check-if-all-characters-have-equal-number-of-occurrences",target:"_blank",rel:"noopener noreferrer"};function I(L,z){const l=c("font"),t=c("RouterLink"),a=c("ExternalLinkIcon");return i(),p("div",null,[h,n("p",null,[e("🟢 "),o(l,{color:"#15bd66"},{default:s(()=>[e("Easy")]),_:1}),e("  🔖  "),o(t,{to:"/tag/hash-table.html"},{default:s(()=>[k]),_:1}),e(),o(t,{to:"/tag/string.html"},{default:s(()=>[b]),_:1}),e("  🔗 "),n("a",m,[f,o(a)]),e(),n("a",_,[v,o(a)])]),x,d(" prettier-ignore "),n("table",null,[y,n("tbody",null,[n("tr",null,[q,R,n("td",w,[o(t,{to:"/problem/1941.html"},{default:s(()=>[e("[✓]")]),_:1})]),n("td",B,[o(t,{to:"/tag/hash-table.html"},{default:s(()=>[G]),_:1}),e(),o(t,{to:"/tag/string.html"},{default:s(()=>[T]),_:1}),e(),o(t,{to:"/tag/counting.html"},{default:s(()=>[E]),_:1})]),O,n("td",N,[n("a",V,[e("🀄️"),o(a)]),e(),n("a",C,[e("🔗"),o(a)])])])])])])}const M=r(g,[["render",I],["__file","2103.html.vue"]]);export{M as default};
