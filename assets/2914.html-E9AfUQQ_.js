import{_ as i,r as e,o as r,c as l,a as n,b as s,d as t,w as a,e as u}from"./app-BBnmDgJV.js";const d={},g=n("h1",{id:"_2914-使二进制字符串变美丽的最少修改次数",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2914-使二进制字符串变美丽的最少修改次数","aria-hidden":"true"},"#"),s(" 2914. 使二进制字符串变美丽的最少修改次数")],-1),h=n("code",null,"字符串",-1),k={href:"https://leetcode.cn/problems/minimum-number-of-changes-to-make-binary-string-beautiful",target:"_blank",rel:"noopener noreferrer"},m=n("code",null,"力扣",-1),b={href:"https://leetcode.com/problems/minimum-number-of-changes-to-make-binary-string-beautiful",target:"_blank",rel:"noopener noreferrer"},q=n("code",null,"LeetCode",-1),v=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given a <strong>0-indexed</strong> binary string <code>s</code> having an even length.</p><p>A string is <strong>beautiful</strong> if it&#39;s possible to partition it into one or more substrings such that:</p><ul><li>Each substring has an <strong>even length</strong>.</li><li>Each substring contains <strong>only</strong> <code>1</code>&#39;s or <strong>only</strong> <code>0</code>&#39;s.</li></ul><p>You can change any character in <code>s</code> to <code>0</code> or <code>1</code>.</p><p>Return _the<strong>minimum</strong> number of changes required to make the string _<code>s</code><em>beautiful</em>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: s = &quot;1001&quot;</p><p>Output: 2</p><p>Explanation: We change s[1] to 1 and s[3] to 0 to get string &quot;1100&quot;.</p><p>It can be seen that the string &quot;1100&quot; is beautiful because we can partition it into &quot;11|00&quot;.</p><p>It can be proven that 2 is the minimum number of changes needed to make the string beautiful.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: s = &quot;10&quot;</p><p>Output: 1</p><p>Explanation: We change s[1] to 1 to get string &quot;11&quot;.</p><p>It can be seen that the string &quot;11&quot; is beautiful because we can partition it into &quot;11&quot;.</p><p>It can be proven that 1 is the minimum number of changes needed to make the string beautiful.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: s = &quot;0000&quot;</p><p>Output: 0</p><p>Explanation: We don&#39;t need to make any changes as the string &quot;0000&quot; is beautiful already.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>2 &lt;= s.length &lt;= 10^5</code></li><li><code>s</code> has an even length.</li><li><code>s[i]</code> is either <code>&#39;0&#39;</code> or <code>&#39;1&#39;</code>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个长度为偶数下标从 <strong>0</strong> 开始的二进制字符串 <code>s</code> 。</p><p>如果可以将一个字符串分割成一个或者更多满足以下条件的子字符串，那么我们称这个字符串是 <strong>美丽的</strong> ：</p><ul><li>每个子字符串的长度都是 <strong>偶数</strong> 。</li><li>每个子字符串都 <strong>只</strong> 包含 <code>1</code> 或 <strong>只</strong> 包含 <code>0</code> 。</li></ul><p>你可以将 <code>s</code> 中任一字符改成 <code>0</code> 或者 <code>1</code> 。</p><p>请你返回让字符串 <code>s</code> 美丽的** 最少** 字符修改次数。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> s = &quot;1001&quot;</p><p><strong>输出：</strong> 2</p><p><strong>解释：</strong> 我们将 s[1] 改为 1 ，且将 s[3] 改为 0 ，得到字符串 &quot;1100&quot; 。</p><p>字符串 &quot;1100&quot; 是美丽的，因为我们可以将它分割成 &quot;11|00&quot; 。</p><p>将字符串变美丽最少需要 2 次修改。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> s = &quot;10&quot;</p><p><strong>输出：</strong> 1</p><p><strong>解释：</strong> 我们将 s[1] 改为 1 ，得到字符串 &quot;11&quot; 。</p><p>字符串 &quot;11&quot; 是美丽的，因为它已经是美丽的。</p><p>将字符串变美丽最少需要 1 次修改。</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> s = &quot;0000&quot;</p><p><strong>输出：</strong> 0</p><p><strong>解释：</strong> 不需要进行任何修改，字符串 &quot;0000&quot; 已经是美丽字符串。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>2 &lt;= s.length &lt;= 10^5</code></li><li><code>s</code> 的长度为偶数。</li><li><code>s[i]</code> 要么是 <code>&#39;0&#39;</code> ，要么是 <code>&#39;1&#39;</code> 。</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>遍历二进制字符串：</strong></p><ul><li>遍历给定的二进制字符串 <code>s</code>，并对每一对相邻字符进行检查。</li><li>由于“美丽的”字符串要求每一对相邻字符相同，因此我们可以从索引 <code>0</code> 开始，每次检查当前字符和下一个字符（即检查 <code>s[i]</code> 和 <code>s[i + 1]</code>）是否相同。</li></ul></li><li><p><strong>判断相邻字符是否不同：</strong></p><ul><li>如果相邻的字符 <code>s[i]</code> 和 <code>s[i + 1]</code> 不同，说明需要进行一次修改，改变其中一个字符使其与另一个字符相同，增加修改次数 <code>res</code>。</li></ul></li><li><p><strong>跳过两个字符：</strong></p><ul><li>每次检查两个字符（即每隔一个字符进行检查），因为我们是在处理相邻的字符对，因此可以通过 <code>i += 2</code> 来跳过已检查的字符对。</li></ul></li><li><p><strong>返回结果：</strong></p><ul><li>最后返回修改次数 <code>res</code>，即最少的修改次数。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是字符串 <code>s</code> 的长度，需要遍历一遍字符串。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，只使用了常数空间来存储修改次数。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">s</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">minChanges</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> s<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i <span class="token operator">+=</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">!==</span> s<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			res<span class="token operator">++</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,34);function f(_,x){const p=e("font"),c=e("RouterLink"),o=e("ExternalLinkIcon");return r(),l("div",null,[g,n("p",null,[s("🟠 "),t(p,{color:"#ffb800"},{default:a(()=>[s("Medium")]),_:1}),s("  🔖  "),t(c,{to:"/tag/string.html"},{default:a(()=>[h]),_:1}),s("  🔗 "),n("a",k,[m,t(o)]),s(),n("a",b,[q,t(o)])]),v])}const w=i(d,[["render",f],["__file","2914.html.vue"]]);export{w as default};
