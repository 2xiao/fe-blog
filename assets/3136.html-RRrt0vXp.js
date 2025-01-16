import{_ as r,r as o,o as l,c as i,a as n,b as s,d as a,w as t,e as d}from"./app-KDJRKGep.js";const u={},g=n("h1",{id:"_3136-有效单词",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_3136-有效单词","aria-hidden":"true"},"#"),s(" 3136. 有效单词")],-1),k=n("code",null,"字符串",-1),h={href:"https://leetcode.cn/problems/valid-word",target:"_blank",rel:"noopener noreferrer"},m=n("code",null,"力扣",-1),v={href:"https://leetcode.com/problems/valid-word",target:"_blank",rel:"noopener noreferrer"},w=n("code",null,"LeetCode",-1),b=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>A word is considered <strong>valid</strong> if:</p><ul><li>It contains a <strong>minimum</strong> of 3 characters.</li><li>It contains only digits (0-9), and English letters (uppercase and lowercase).</li><li>It includes <strong>at least</strong> one <strong>vowel</strong>.</li><li>It includes <strong>at least</strong> one <strong>consonant</strong>.</li></ul><p>You are given a string <code>word</code>.</p><p>Return <code>true</code> if <code>word</code> is valid, otherwise, return <code>false</code>.</p><p><strong>Notes:</strong></p><ul><li><code>&#39;a&#39;</code>, <code>&#39;e&#39;</code>, <code>&#39;i&#39;</code>, <code>&#39;o&#39;</code>, <code>&#39;u&#39;</code>, and their uppercases are <strong>vowels</strong>.</li><li>A <strong>consonant</strong> is an English letter that is not a vowel.</li></ul><p><strong>Example 1:</strong></p><p><strong>Input:</strong> word = &quot;234Adas&quot;</p><p><strong>Output:</strong> true</p><p><strong>Explanation:</strong></p><p>This word satisfies the conditions.</p><p><strong>Example 2:</strong></p><p><strong>Input:</strong> word = &quot;b3&quot;</p><p><strong>Output:</strong> false</p><p><strong>Explanation:</strong></p><p>The length of this word is fewer than 3, and does not have a vowel.</p><p><strong>Example 3:</strong></p><p><strong>Input:</strong> word = &quot;a3$e&quot;</p><p><strong>Output:</strong> false</p><p><strong>Explanation:</strong></p><p>This word contains a <code>&#39;$&#39;</code> character and does not have a consonant.</p><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= word.length &lt;= 20</code></li><li><code>word</code> consists of English uppercase and lowercase letters, digits, <code>&#39;@&#39;</code>, <code>&#39;#&#39;</code>, and <code>&#39;$&#39;</code>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p><strong>有效单词</strong> 需要满足以下几个条件：</p><ul><li><strong>至少</strong> 包含 3 个字符。</li><li>由数字 0-9 和英文大小写字母组成。（不必包含所有这类字符。）</li><li><strong>至少</strong> 包含一个 <strong>元音字母</strong> 。</li><li><strong>至少</strong> 包含一个 <strong>辅音字母</strong> 。</li></ul><p>给你一个字符串 <code>word</code> 。如果 <code>word</code> 是一个有效单词，则返回 <code>true</code> ，否则返回 <code>false</code> 。</p><p><strong>注意：</strong></p><ul><li><code>&#39;a&#39;</code>、<code>&#39;e&#39;</code>、<code>&#39;i&#39;</code>、<code>&#39;o&#39;</code>、<code>&#39;u&#39;</code> 及其大写形式都属于<strong>元音字母</strong> 。</li><li>英文中的 <strong>辅音字母</strong> 是指那些除元音字母之外的字母。</li></ul><p><strong>示例 1：</strong></p><p><strong>输入：</strong> word = &quot;234Adas&quot;</p><p><strong>输出：</strong> true</p><p><strong>解释：</strong></p><p>这个单词满足所有条件。</p><p><strong>示例 2：</strong></p><p><strong>输入：</strong> word = &quot;b3&quot;</p><p><strong>输出：</strong> false</p><p><strong>解释：</strong></p><p>这个单词的长度少于 3 且没有包含元音字母。</p><p><strong>示例 3：</strong></p><p><strong>输入：</strong> word = &quot;a3$e&quot;</p><p><strong>输出：</strong> false</p><p><strong>解释：</strong></p><p>这个单词包含了 <code>&#39;$&#39;</code> 字符且没有包含辅音字母。</p><p><strong>提示：</strong></p><ul><li><code>1 &lt;= word.length &lt;= 20</code></li><li><code>word</code> 由英文大写和小写字母、数字、<code>&#39;@&#39;</code>、<code>&#39;#&#39;</code> 和 <code>&#39;$&#39;</code> 组成。</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>要判断一个字符串 <code>word</code> 是否是一个有效单词，可以按照以下步骤进行：</p><ol><li><strong>长度检查</strong>：首先检查字符串的长度是否至少为 3 个字符。</li><li><strong>字符组成检查</strong>：使用正则表达式 <code>/[a-zA-Z0-9]/</code> 确保字符串只包含数字和字母（包括大小写）。</li><li><strong>元音和辅音字母检查</strong>：遍历字符串，检查每个字符是否为元音或辅音，并设置标志位。</li><li><strong>返回结果</strong>：最终返回是否同时满足元音和辅音的条件。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是字符串的长度，只需遍历一次字符串。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，使用的额外空间是常量级别，主要是用于存储标志位。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">word</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">isValid</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">word</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 检查长度</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>word<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

	<span class="token keyword">let</span> hasVowels <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
		hasConsonant <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> char <span class="token keyword">of</span> word<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 检查字符是否为有效字符</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">[a-zA-Z0-9]</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>char<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

		<span class="token comment">// 检查元音和辅音</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token string">&#39;aeiouAEIOU&#39;</span><span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>char<span class="token punctuation">)</span> <span class="token operator">!==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			hasVowels <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">[a-zA-Z]</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>char<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			hasConsonant <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token comment">// 返回是否满足所有条件</span>
	<span class="token keyword">return</span> hasVowels <span class="token operator">&amp;&amp;</span> hasConsonant<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,54);function f(_,x){const p=o("font"),c=o("RouterLink"),e=o("ExternalLinkIcon");return l(),i("div",null,[g,n("p",null,[s("🟢 "),a(p,{color:"#15bd66"},{default:t(()=>[s("Easy")]),_:1}),s("  🔖  "),a(c,{to:"/tag/string.html"},{default:t(()=>[k]),_:1}),s("  🔗 "),n("a",h,[m,a(e)]),s(),n("a",v,[w,a(e)])]),b])}const E=r(u,[["render",f],["__file","3136.html.vue"]]);export{E as default};
