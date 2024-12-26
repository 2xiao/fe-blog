import{_ as r,r as a,o as i,c as l,a as n,b as s,d as e,w as o,e as d}from"./app-3dvbhwow.js";const u={},k=n("h1",{id:"_868-二进制间距",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_868-二进制间距","aria-hidden":"true"},"#"),s(" 868. 二进制间距")],-1),m=n("code",null,"位运算",-1),h={href:"https://leetcode.cn/problems/binary-gap",target:"_blank",rel:"noopener noreferrer"},g=n("code",null,"力扣",-1),b={href:"https://leetcode.com/problems/binary-gap",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"LeetCode",-1),_=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given a positive integer <code>n</code>, find and return _the<strong>longest distance</strong> between any two <strong>adjacent</strong> _<code>1</code> _&#39; s in the binary representation of _<code>n</code> <em>. If there are no two adjacent</em><code>1</code> _&#39; s, return _<code>0</code> <em>.</em></p><p>Two <code>1</code>&#39;s are <strong>adjacent</strong> if there are only <code>0</code>&#39;s separating them (possibly no <code>0</code>&#39;s). The <strong>distance</strong> between two <code>1</code>&#39;s is the absolute difference between their bit positions. For example, the two <code>1</code>&#39;s in <code>&quot;1001&quot;</code> have a distance of 3.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: n = 22</p><p>Output: 2</p><p>Explanation: 22 in binary is &quot;10110&quot;.</p><p>The first adjacent pair of 1&#39;s is &quot;<em>1</em> 0 <em>1</em> 10&quot; with a distance of 2.</p><p>The second adjacent pair of 1&#39;s is &quot;10 <em>11</em> 0&quot; with a distance of 1.</p><p>The answer is the largest of these two distances, which is 2.</p><p>Note that &quot;<em>1</em> 01 <em>1</em> 0&quot; is not a valid pair since there is a 1 separating the two 1&#39;s underlined.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: n = 8</p><p>Output: 0</p><p>Explanation: 8 in binary is &quot;1000&quot;.</p><p>There are not any adjacent pairs of 1&#39;s in the binary representation of 8, so we return 0.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: n = 5</p><p>Output: 2</p><p>Explanation: 5 in binary is &quot;101&quot;.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= n &lt;= 10^9</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个正整数 <code>n</code>，找到并返回 <code>n</code> 的二进制表示中两个 <strong>相邻</strong> 1 之间的<strong>最长距离</strong> 。如果不存在两个相邻的 1，返回 <code>0</code> 。</p><p>如果只有 <code>0</code> 将两个 <code>1</code> 分隔开（可能不存在 <code>0</code> ），则认为这两个 1 彼此 <strong>相邻</strong> 。两个 <code>1</code> 之间的距离是它们的二进制表示中位置的绝对差。例如，<code>&quot;1001&quot;</code> 中的两个 <code>1</code> 的距离为 3 。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> n = 22</p><p><strong>输出：</strong> 2</p><p><strong>解释：</strong> 22 的二进制是 &quot;10110&quot; 。</p><p>在 22 的二进制表示中，有三个 1，组成两对相邻的 1 。</p><p>第一对相邻的 1 中，两个 1 之间的距离为 2 。</p><p>第二对相邻的 1 中，两个 1 之间的距离为 1 。</p><p>答案取两个距离之中最大的，也就是 2 。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> n = 8</p><p><strong>输出：</strong> 0</p><p><strong>解释：</strong> 8 的二进制是 &quot;1000&quot; 。</p><p>在 8 的二进制表示中没有相邻的两个 1，所以返回 0 。</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> n = 5</p><p><strong>输出：</strong> 2</p><p><strong>解释：</strong> 5 的二进制是 &quot;101&quot; 。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= n &lt;= 10^9</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>逐位遍历</strong>：</p><ul><li>通过位运算来检查 <code>n</code> 的每一位。具体来说，可以用 <code>n &gt;&gt; i</code> 将 <code>n</code> 右移 <code>i</code> 位，然后与 <code>1</code> 做按位与（<code>&amp;</code> 运算），检查该位是否为 <code>1</code>。</li><li>如果当前位是 <code>1</code>，记录当前位置 <code>i</code>，然后计算当前位置与上一个 <code>1</code> 的位置之间的距离。</li><li>如果上一个 <code>1</code> 存在，更新最大间隔 <code>res</code>。</li></ul></li><li><p><strong>记录上一个 <code>1</code> 的位置</strong>：</p><ul><li>使用一个变量 <code>last</code> 来记录上一个 <code>1</code> 出现的位置。</li><li>每次遇到新的 <code>1</code> 时，计算与 <code>last</code> 的差值并更新最大间隔。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(1)</code>，对每一位（最多 32 位）进行一次检查，时间复杂度为 <code>O(32)</code>，即 <code>O(1)</code>。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，只用了常量空间来存储变量。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">n</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">binaryGap</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// 记录最大间距</span>
	<span class="token keyword">let</span> last <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 记录上一个 \`1\` 出现的位置</span>

	<span class="token comment">// 遍历 32 位（假设整数是 32 位整数）</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">32</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 检查第 i 位是否为 1，通过右移 i 位并与 1 做按位与</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">(</span>n <span class="token operator">&gt;&gt;</span> i<span class="token punctuation">)</span> <span class="token operator">&amp;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// 如果 last 已经记录了上一个 1 的位置</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>last <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token comment">// 计算当前 1 与上一个 1 的距离</span>
				res <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span> i <span class="token operator">-</span> last<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			<span class="token comment">// 更新 last 为当前位置 i</span>
			last <span class="token operator">=</span> i<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> res<span class="token punctuation">;</span> <span class="token comment">// 返回最大距离</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,28);function f(q,w){const p=a("font"),c=a("RouterLink"),t=a("ExternalLinkIcon");return i(),l("div",null,[k,n("p",null,[s("🟢 "),e(p,{color:"#15bd66"},{default:o(()=>[s("Easy")]),_:1}),s("  🔖  "),e(c,{to:"/tag/bit-manipulation.html"},{default:o(()=>[m]),_:1}),s("  🔗 "),n("a",h,[g,e(t)]),s(),n("a",b,[v,e(t)])]),_])}const x=r(u,[["render",f],["__file","0868.html.vue"]]);export{x as default};
