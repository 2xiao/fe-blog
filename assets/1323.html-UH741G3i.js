import{_ as i,r as s,o as r,c as l,a as n,b as e,d as o,w as t,e as d}from"./app-Kkp_66uf.js";const u={},m=n("h1",{id:"_1323-6-和-9-组成的最大数字",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1323-6-和-9-组成的最大数字","aria-hidden":"true"},"#"),e(" 1323. 6 和 9 组成的最大数字")],-1),g=n("code",null,"贪心",-1),h=n("code",null,"数学",-1),k={href:"https://leetcode.cn/problems/maximum-69-number",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"力扣",-1),_={href:"https://leetcode.com/problems/maximum-69-number",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"LeetCode",-1),v=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given a positive integer <code>num</code> consisting only of digits <code>6</code> and <code>9</code>.</p><p>Return <em>the maximum number you can get by changing <strong>at most</strong> one digit (</em> <code>6</code> <em>becomes</em><code>9</code> <em>, and</em><code>9</code> <em>becomes</em><code>6</code> <em>)</em>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: num = 9669</p><p>Output: 9969</p><p>Explanation:</p><p>Changing the first digit results in 6669.</p><p>Changing the second digit results in 9969.</p><p>Changing the third digit results in 9699.</p><p>Changing the fourth digit results in 9666.</p><p>The maximum number is 9969.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: num = 9996</p><p>Output: 9999</p><p>Explanation: Changing the last digit 6 to 9 results in the maximum number.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: num = 9999</p><p>Output: 9999</p><p>Explanation: It is better not to apply any change.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= num &lt;= 10^4</code></li><li><code>num</code> consists of only <code>6</code> and <code>9</code> digits.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个仅由数字 6 和 9 组成的正整数 <code>num</code>。</p><p>你最多只能翻转一位数字，将 6 变成 9，或者把 9 变成 6 。</p><p>请返回你可以得到的最大数字。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> num = 9669</p><p><strong>输出：</strong> 9969</p><p><strong>解释：</strong></p><p>改变第一位数字可以得到 6669 。</p><p>改变第二位数字可以得到 9969 。</p><p>改变第三位数字可以得到 9699 。</p><p>改变第四位数字可以得到 9666 。</p><p>其中最大的数字是 9969 。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> num = 9996</p><p><strong>输出：</strong> 9999</p><p><strong>解释：</strong> 将最后一位从 6 变到 9，其结果 9999 是最大的数。</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> num = 9999</p><p><strong>输出：</strong> 9999</p><p><strong>解释：</strong> 无需改变就已经是最大的数字了。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= num &lt;= 10^4</code></li><li><code>num</code> 每一位上的数字都是 6 或者 9 。</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>对于一个正数，某个位置上是 <code>9</code> 肯定比是 <code>6</code> 要大，因此：</p><ul><li>如果 <code>num</code> 中存在 <code>6</code>，最大的数字是将最高位的 <code>6</code> 替换为 <code>9</code>之后的数字。</li><li>如果 <code>num</code> 中不存在 <code>6</code>，最大的数字就是 <code>num</code> 本身。</li></ul><ol><li>将 <code>num</code> 转换为字符串。</li><li>使用 <code>replace</code> 方法替换第一个 <code>6</code> 为 <code>9</code>。</li><li>将结果转换回数字并返回。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(k)</code>，其中 <code>k</code> 是 <code>num</code> 的位数。需要遍历每一位来找到并替换第一个 <code>6</code>。</li><li><strong>空间复杂度</strong>：<code>O(k)</code>，需要将数字转换为字符串，存储中间结果。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">num</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">maximum69Number</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">num</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token function">Number</span><span class="token punctuation">(</span>num<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">&#39;6&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;9&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,31);function x(y,q){const p=s("font"),a=s("RouterLink"),c=s("ExternalLinkIcon");return r(),l("div",null,[m,n("p",null,[e("🟢 "),o(p,{color:"#15bd66"},{default:t(()=>[e("Easy")]),_:1}),e("  🔖  "),o(a,{to:"/tag/greedy.html"},{default:t(()=>[g]),_:1}),e(),o(a,{to:"/tag/math.html"},{default:t(()=>[h]),_:1}),e("  🔗 "),n("a",k,[b,o(c)]),e(),n("a",_,[f,o(c)])]),v])}const C=i(u,[["render",x],["__file","1323.html.vue"]]);export{C as default};
