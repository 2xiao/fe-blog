import{_ as l,r as a,o as r,c as i,a as e,b as s,d as n,w as o,e as d}from"./app-totCBmv-.js";const u={},g=e("h1",{id:"_2109-向字符串添加空格",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_2109-向字符串添加空格","aria-hidden":"true"},"#"),s(" 2109. 向字符串添加空格")],-1),h=e("code",null,"数组",-1),k=e("code",null,"双指针",-1),m=e("code",null,"字符串",-1),f=e("code",null,"模拟",-1),b={href:"https://leetcode.cn/problems/adding-spaces-to-a-string",target:"_blank",rel:"noopener noreferrer"},v=e("code",null,"力扣",-1),q={href:"https://leetcode.com/problems/adding-spaces-to-a-string",target:"_blank",rel:"noopener noreferrer"},_=e("code",null,"LeetCode",-1),y=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given a <strong>0-indexed</strong> string <code>s</code> and a <strong>0-indexed</strong> integer array <code>spaces</code> that describes the indices in the original string where spaces will be added. Each space should be inserted <strong>before</strong> the character at the given index.</p><ul><li>For example, given <code>s = &quot;EnjoyYourCoffee&quot;</code> and <code>spaces = [5, 9]</code>, we place spaces before <code>&#39;Y&#39;</code> and <code>&#39;C&#39;</code>, which are at indices <code>5</code> and <code>9</code> respectively. Thus, we obtain <code>&quot;Enjoy Your Coffee&quot;</code>.</li></ul><p>Return <em>the modified string after the spaces have been added.</em></p><p><strong>Example 1:</strong></p><blockquote><p>Input: s = &quot;LeetcodeHelpsMeLearn&quot;, spaces = [8,13,15]</p><p>Output: &quot;Leetcode Helps Me Learn&quot;</p><p>Explanation:</p><p>The indices 8, 13, and 15 correspond to the underlined characters in &quot;Leetcode <strong>H</strong>elps <strong>M</strong>e <strong>L</strong>earn&quot;.</p><p>We then place spaces before those characters.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: s = &quot;icodeinpython&quot;, spaces = [1,5,7,9]</p><p>Output: &quot;i code in py thon&quot;</p><p>Explanation:</p><p>The indices 1, 5, 7, and 9 correspond to the underlined characters in &quot;i <strong>c</strong>ode <strong>i</strong>n <strong>p</strong>y <strong>t</strong>hon&quot;.</p><p>We then place spaces before those characters.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: s = &quot;spacing&quot;, spaces = [0,1,2,3,4,5,6]</p><p>Output: &quot; s p a c i n g&quot;</p><p>Explanation:</p><p>We are also able to place spaces before the first character of the string.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= s.length &lt;= 3 * 10^5</code></li><li><code>s</code> consists only of lowercase and uppercase English letters.</li><li><code>1 &lt;= spaces.length &lt;= 3 * 10^5</code></li><li><code>0 &lt;= spaces[i] &lt;= s.length - 1</code></li><li>All the values of <code>spaces</code> are <strong>strictly increasing</strong>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个下标从 <strong>0</strong> 开始的字符串 <code>s</code> ，以及一个下标从 <strong>0</strong> 开始的整数数组 <code>spaces</code> 。</p><p>数组 <code>spaces</code> 描述原字符串中需要添加空格的下标。每个空格都应该插入到给定索引处的字符值 <strong>之前</strong> 。</p><ul><li>例如，<code>s = &quot;EnjoyYourCoffee&quot;</code> 且 <code>spaces = [5, 9]</code> ，那么我们需要在 <code>&#39;Y&#39;</code> 和 <code>&#39;C&#39;</code> 之前添加空格，这两个字符分别位于下标 <code>5</code> 和下标 <code>9</code> 。因此，最终得到 <code>&quot;Enjoy Your Coffee&quot;</code> 。</li></ul><p>请你添加空格，并返回修改后的字符串 <em>。</em></p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> s = &quot;LeetcodeHelpsMeLearn&quot;, spaces = [8,13,15]</p><p><strong>输出：</strong> &quot;Leetcode Helps Me Learn&quot;</p><p><strong>解释：</strong></p><p>下标 8、13 和 15 对应 &quot;Leetcode <strong>H</strong>elps <strong>M</strong>e <strong>L</strong>earn&quot; 中加粗斜体字符。</p><p>接着在这些字符前添加空格。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> s = &quot;icodeinpython&quot;, spaces = [1,5,7,9]</p><p><strong>输出：</strong> &quot;i code in py thon&quot;</p><p><strong>解释：</strong></p><p>下标 1、5、7 和 9 对应 &quot;i <strong>c</strong>ode <strong>i</strong>n <strong>p</strong>y <strong>t</strong>hon&quot; 中加粗斜体字符。</p><p>接着在这些字符前添加空格。</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> s = &quot;spacing&quot;, spaces = [0,1,2,3,4,5,6]</p><p><strong>输出：</strong> &quot; s p a c i n g&quot;</p><p><strong>解释：</strong></p><p>字符串的第一个字符前可以添加空格。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= s.length &lt;= 3 * 10^5</code></li><li><code>s</code> 仅由大小写英文字母组成</li><li><code>1 &lt;= spaces.length &lt;= 3 * 10^5</code></li><li><code>0 &lt;= spaces[i] &lt;= s.length - 1</code></li><li><code>spaces</code> 中的所有值 <strong>严格递增</strong></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>初始化变量</strong>：</p><ul><li><code>res</code>：用于存储最终结果的字符串。</li><li><code>left</code>：记录当前片段的起始索引，初始化为 <code>0</code>。</li></ul></li><li><p><strong>遍历 <code>spaces</code> 数组</strong>：</p><ul><li>每个 <code>right</code> 表示需要插入空格的索引位置。</li><li>使用 <code>slice(left, right)</code> 提取从 <code>left</code> 到 <code>right</code> 的字符串片段，将其添加到 <code>res</code> 中，并在末尾加上一个空格。</li><li>更新 <code>left</code> 为 <code>right</code>，准备提取下一片段。</li></ul></li><li><p><strong>处理剩余部分</strong>：</p><ul><li>遍历完成后，<code>left</code> 指向最后一个未处理的片段起始位置。</li><li>使用 <code>slice(left)</code> 提取剩余部分并拼接到结果字符串中。</li></ul></li><li><p><strong>返回结果</strong>：拼接后的字符串即为答案。</p></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code><ul><li>每次 <code>slice</code> 操作的时间复杂度为 <code>O(k)</code>，其中 <code>k</code> 是每次截取的片段长度。</li><li>整体 <code>slice</code> 操作总共处理 <code>n</code> 个字符（字符串长度），时间复杂度为 <code>O(n)</code>。</li><li>遍历 <code>spaces</code> 的复杂度为 <code>O(m)</code>，其中 <code>m</code> 是 <code>spaces</code> 的长度。</li><li>因此总时间复杂度为 <code>O(n)</code>。</li></ul></li><li><strong>空间复杂度</strong>：<code>O(n)</code>，使用一个结果字符串 <code>res</code>。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">s</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">spaces</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">addSpaces</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s<span class="token punctuation">,</span> spaces</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span> <span class="token comment">// 初始化结果字符串</span>
	<span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// 当前片段的起始索引</span>

	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> right <span class="token keyword">of</span> spaces<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 遍历插入空格的位置</span>
		res <span class="token operator">+=</span> s<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>left<span class="token punctuation">,</span> right<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&#39; &#39;</span><span class="token punctuation">;</span> <span class="token comment">// 提取当前片段并加上空格</span>
		left <span class="token operator">=</span> right<span class="token punctuation">;</span> <span class="token comment">// 更新起始索引</span>
	<span class="token punctuation">}</span>

	res <span class="token operator">+=</span> s<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 处理剩余部分</span>
	<span class="token keyword">return</span> res<span class="token punctuation">;</span> <span class="token comment">// 返回结果字符串</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,31);function x(w,L){const p=a("font"),t=a("RouterLink"),c=a("ExternalLinkIcon");return r(),i("div",null,[g,e("p",null,[s("🟠 "),n(p,{color:"#ffb800"},{default:o(()=>[s("Medium")]),_:1}),s("  🔖  "),n(t,{to:"/tag/array.html"},{default:o(()=>[h]),_:1}),s(),n(t,{to:"/tag/two-pointers.html"},{default:o(()=>[k]),_:1}),s(),n(t,{to:"/tag/string.html"},{default:o(()=>[m]),_:1}),s(),n(t,{to:"/tag/simulation.html"},{default:o(()=>[f]),_:1}),s("  🔗 "),e("a",b,[v,n(c)]),s(),e("a",q,[_,n(c)])]),y])}const C=l(u,[["render",x],["__file","2109.html.vue"]]);export{C as default};
