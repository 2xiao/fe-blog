import{_ as p,r as s,o as u,c as d,a as o,b as t,d as n,w as a,e as l}from"./app-MXSjQbID.js";const i={},g=o("h1",{id:"_1880-检查某单词是否等于两单词之和",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#_1880-检查某单词是否等于两单词之和","aria-hidden":"true"},"#"),t(" 1880. 检查某单词是否等于两单词之和")],-1),q=o("code",null,"字符串",-1),k={href:"https://leetcode.cn/problems/check-if-word-equals-summation-of-two-words",target:"_blank",rel:"noopener noreferrer"},m=o("code",null,"力扣",-1),h={href:"https://leetcode.com/problems/check-if-word-equals-summation-of-two-words",target:"_blank",rel:"noopener noreferrer"},f=o("code",null,"LeetCode",-1),b=l(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>The <strong>letter value</strong> of a letter is its position in the alphabet <strong>starting from 0</strong> (i.e. <code>&#39;a&#39; -&gt; 0</code>, <code>&#39;b&#39; -&gt; 1</code>, <code>&#39;c&#39; -&gt; 2</code>, etc.).</p><p>The <strong>numerical value</strong> of some string of lowercase English letters <code>s</code> is the <strong>concatenation</strong> of the <strong>letter values</strong> of each letter in <code>s</code>, which is then <strong>converted</strong> into an integer.</p><ul><li>For example, if <code>s = &quot;acb&quot;</code>, we concatenate each letter&#39;s letter value, resulting in <code>&quot;021&quot;</code>. After converting it, we get <code>21</code>.</li></ul><p>You are given three strings <code>firstWord</code>, <code>secondWord</code>, and <code>targetWord</code>, each consisting of lowercase English letters <code>&#39;a&#39;</code> through <code>&#39;j&#39;</code> <strong>inclusive</strong>.</p><p>Return <code>true</code> _if the <strong>summation</strong> of the <strong>numerical values</strong> of _<code>firstWord</code><em>and</em><code>secondWord</code> _equals the <strong>numerical value</strong> of _<code>targetWord</code> <em>, or</em><code>false</code> <em>otherwise.</em></p><p><strong>Example 1:</strong></p><blockquote><p>Input: firstWord = &quot;acb&quot;, secondWord = &quot;cba&quot;, targetWord = &quot;cdb&quot;</p><p>Output: true</p><p>Explanation:</p><p>The numerical value of firstWord is &quot;acb&quot; -&gt; &quot;021&quot; -&gt; 21.</p><p>The numerical value of secondWord is &quot;cba&quot; -&gt; &quot;210&quot; -&gt; 210.</p><p>The numerical value of targetWord is &quot;cdb&quot; -&gt; &quot;231&quot; -&gt; 231.</p><p>We return true because 21 + 210 == 231.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: firstWord = &quot;aaa&quot;, secondWord = &quot;a&quot;, targetWord = &quot;aab&quot;</p><p>Output: false</p><p>Explanation:</p><p>The numerical value of firstWord is &quot;aaa&quot; -&gt; &quot;000&quot; -&gt; 0.</p><p>The numerical value of secondWord is &quot;a&quot; -&gt; &quot;0&quot; -&gt; 0.</p><p>The numerical value of targetWord is &quot;aab&quot; -&gt; &quot;001&quot; -&gt; 1.</p><p>We return false because 0 + 0 != 1.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: firstWord = &quot;aaa&quot;, secondWord = &quot;a&quot;, targetWord = &quot;aaaa&quot;</p><p>Output: true</p><p>Explanation:</p><p>The numerical value of firstWord is &quot;aaa&quot; -&gt; &quot;000&quot; -&gt; 0.</p><p>The numerical value of secondWord is &quot;a&quot; -&gt; &quot;0&quot; -&gt; 0.</p><p>The numerical value of targetWord is &quot;aaaa&quot; -&gt; &quot;0000&quot; -&gt; 0.</p><p>We return true because 0 + 0 == 0.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= firstWord.length, \`\`secondWord.length, \`\`targetWord.length &lt;= 8</code></li><li><code>firstWord</code>, <code>secondWord</code>, and <code>targetWord</code> consist of lowercase English letters from <code>&#39;a&#39;</code> to <code>&#39;j&#39;</code> <strong>inclusive</strong>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>字母的 <strong>字母值</strong> 取决于字母在字母表中的位置，<strong>从 0 开始</strong> 计数。即，<code>&#39;a&#39; -&gt; 0</code>、<code>&#39;b&#39; -&gt; 1</code>、<code>&#39;c&#39; -&gt; 2</code>，以此类推。</p><p>对某个由小写字母组成的字符串 <code>s</code> 而言，其 <strong>数值</strong> 就等于将 <code>s</code> 中每个字母的 <strong>字母值</strong> 按顺序 <strong>连接</strong> 并 <strong>转换</strong> 成对应整数。</p><ul><li>例如，<code>s = &quot;acb&quot;</code> ，依次连接每个字母的字母值可以得到 <code>&quot;021&quot;</code> ，转换为整数得到 <code>21</code> 。</li></ul><p>给你三个字符串 <code>firstWord</code>、<code>secondWord</code> 和 <code>targetWord</code> ，每个字符串都由从 <code>&#39;a&#39;</code> 到 <code>&#39;j&#39;</code> （<strong>含</strong><code>&#39;a&#39;</code> 和 <code>&#39;j&#39;</code>）的小写英文字母组成。</p><p>如果 <code>firstWord</code> 和 <code>secondWord</code> 的 <strong>数值之和</strong> 等于 <code>targetWord</code> 的数值，返回 <code>true</code> ；否则，返回 <code>false</code> 。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> firstWord = &quot;acb&quot;, secondWord = &quot;cba&quot;, targetWord = &quot;cdb&quot;</p><p><strong>输出：</strong> true</p><p><strong>解释：</strong></p><p>firstWord 的数值为 &quot;acb&quot; -&gt; &quot;021&quot; -&gt; 21</p><p>secondWord 的数值为 &quot;cba&quot; -&gt; &quot;210&quot; -&gt; 210</p><p>targetWord 的数值为 &quot;cdb&quot; -&gt; &quot;231&quot; -&gt; 231</p><p>由于 21 + 210 == 231 ，返回 true</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> firstWord = &quot;aaa&quot;, secondWord = &quot;a&quot;, targetWord = &quot;aab&quot;</p><p><strong>输出：</strong> false</p><p><strong>解释：</strong></p><p>firstWord 的数值为 &quot;aaa&quot; -&gt; &quot;000&quot; -&gt; 0</p><p>secondWord 的数值为 &quot;a&quot; -&gt; &quot;0&quot; -&gt; 0</p><p>targetWord 的数值为 &quot;aab&quot; -&gt; &quot;001&quot; -&gt; 1</p><p>由于 0 + 0 != 1 ，返回 false</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> firstWord = &quot;aaa&quot;, secondWord = &quot;a&quot;, targetWord = &quot;aaaa&quot;</p><p><strong>输出：</strong> true</p><p><strong>解释：</strong></p><p>firstWord 的数值为 &quot;aaa&quot; -&gt; &quot;000&quot; -&gt; 0</p><p>secondWord 的数值为 &quot;a&quot; -&gt; &quot;0&quot; -&gt; 0</p><p>targetWord 的数值为 &quot;aaaa&quot; -&gt; &quot;0000&quot; -&gt; 0</p><p>由于 0 + 0 == 0 ，返回 true</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= firstWord.length, \`\`secondWord.length, \`\`targetWord.length &lt;= 8</code></li><li><code>firstWord</code>、<code>secondWord</code> 和 <code>targetWord</code> 仅由从 <code>&#39;a&#39;</code> 到 <code>&#39;j&#39;</code> （<strong>含</strong><code>&#39;a&#39;</code> 和 <code>&#39;j&#39;</code> ）的小写英文字母组成。</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>字母与数字的映射</strong>：</p><ul><li>每个字母都对应一个数字，<code>&#39;a&#39; -&gt; 0</code>、<code>&#39;b&#39; -&gt; 1</code>、<code>&#39;c&#39; -&gt; 2</code>，以此类推，我们可以通过 <code>charCodeAt</code> 方法将字符转换为对应的数字：<code>char.charCodeAt() - 97</code>。</li></ul></li><li><p><strong>将字符串转换为数字</strong>：</p><ul><li>对于每个字符串，逐个字符转换为数字。</li><li>每遍历一个字符，就将当前数字乘以 10，并加上当前字符对应的数字，模拟数字的拼接。</li></ul></li><li><p><strong>求和与比较</strong>：</p><ul><li>将转换后的两个字符串对应的数字加在一起，判断和是否等于第三个字符串对应的数字。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是字符串的最大长度，只需要遍历每个字符串一次来进行转换。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，只使用了常数空间来存储数字。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">firstWord</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">secondWord</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">targetWord</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">isSumEqual</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">firstWord<span class="token punctuation">,</span> secondWord<span class="token punctuation">,</span> targetWord</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 将字符串转换为数字的辅助函数</span>
	<span class="token keyword">const</span> <span class="token function-variable function">wordToNum</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">str</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> num <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> char <span class="token keyword">of</span> str<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			num <span class="token operator">=</span> num <span class="token operator">*</span> <span class="token number">10</span> <span class="token operator">+</span> char<span class="token punctuation">.</span><span class="token function">charCodeAt</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">97</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">return</span> num<span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>

	<span class="token comment">// 比较两个字符串转换后的和是否等于目标字符串的数字</span>
	<span class="token keyword">return</span> <span class="token function">wordToNum</span><span class="token punctuation">(</span>firstWord<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">wordToNum</span><span class="token punctuation">(</span>secondWord<span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token function">wordToNum</span><span class="token punctuation">(</span>targetWord<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,34);function W(v,_){const r=s("font"),c=s("RouterLink"),e=s("ExternalLinkIcon");return u(),d("div",null,[g,o("p",null,[t("🟢 "),n(r,{color:"#15bd66"},{default:a(()=>[t("Easy")]),_:1}),t("  🔖  "),n(c,{to:"/tag/string.html"},{default:a(()=>[q]),_:1}),t("  🔗 "),o("a",k,[m,n(e)]),t(),o("a",h,[f,n(e)])]),b])}const x=p(i,[["render",W],["__file","1880.html.vue"]]);export{x as default};
