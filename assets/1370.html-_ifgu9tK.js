import{_ as l,r as e,o as r,c as i,a as n,b as s,d as a,w as t,e as u}from"./app-3dvbhwow.js";const d={},k=n("h1",{id:"_1370-上升下降字符串",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1370-上升下降字符串","aria-hidden":"true"},"#"),s(" 1370. 上升下降字符串")],-1),h=n("code",null,"哈希表",-1),g=n("code",null,"字符串",-1),b=n("code",null,"计数",-1),m={href:"https://leetcode.cn/problems/increasing-decreasing-string",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"力扣",-1),f={href:"https://leetcode.com/problems/increasing-decreasing-string",target:"_blank",rel:"noopener noreferrer"},q=n("code",null,"LeetCode",-1),_=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given a string <code>s</code>. Reorder the string using the following algorithm:</p><ol><li>Remove the <strong>smallest</strong> character from <code>s</code> and <strong>append</strong> it to the result.</li><li>Remove the <strong>smallest</strong> character from <code>s</code> that is greater than the last appended character, and <strong>append</strong> it to the result.</li><li>Repeat step 2 until no more characters can be removed.</li><li>Remove the <strong>largest</strong> character from <code>s</code> and <strong>append</strong> it to the result.</li><li>Remove the <strong>largest</strong> character from <code>s</code> that is smaller than the last appended character, and <strong>append</strong> it to the result.</li><li>Repeat step 5 until no more characters can be removed.</li><li>Repeat steps 1 through 6 until all characters from <code>s</code> have been removed.</li></ol><p>If the smallest or largest character appears more than once, you may choose any occurrence to append to the result.</p><p>Return the resulting string after reordering <code>s</code> using this algorithm.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: s = &quot;aaaabbbbcccc&quot;</p><p>Output: &quot;abccbaabccba&quot;</p><p>Explanation: After steps 1, 2 and 3 of the first iteration, result = &quot;abc&quot;</p><p>After steps 4, 5 and 6 of the first iteration, result = &quot;abccba&quot;</p><p>First iteration is done. Now s = &quot;aabbcc&quot; and we go back to step 1</p><p>After steps 1, 2 and 3 of the second iteration, result = &quot;abccbaabc&quot;</p><p>After steps 4, 5 and 6 of the second iteration, result = &quot;abccbaabccba&quot;</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: s = &quot;rat&quot;</p><p>Output: &quot;art&quot;</p><p>Explanation: The word &quot;rat&quot; becomes &quot;art&quot; after re-ordering it with the mentioned algorithm.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= s.length &lt;= 500</code></li><li><code>s</code> consists of only lowercase English letters.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个字符串 <code>s</code> ，请你根据下面的算法重新构造字符串：</p><ol><li>从 <code>s</code> 中选出 <strong>最小</strong> 的字符，将它 <strong>接在</strong> 结果字符串的后面。</li><li>从 <code>s</code> 剩余字符中选出比上一个添加字符更大的 <strong>最小</strong> 字符，将它 <strong>接在</strong> 结果字符串后面。</li><li>重复步骤 2 ，直到你没法从 <code>s</code> 中选择字符。</li><li>从 <code>s</code> 中选出 <strong>最大</strong> 的字符，将它 <strong>接在</strong> 结果字符串的后面。</li><li>从 <code>s</code> 剩余字符中选出比上一个添加字符更小的 <strong>最大</strong> 字符，将它 <strong>接在</strong> 结果字符串后面。</li><li>重复步骤 5 ，直到你没法从 <code>s</code> 中选择字符。</li><li>重复步骤 1 到 6 ，直到 <code>s</code> 中所有字符都已经被选过。</li></ol><p>在任何一步中，如果最小或者最大字符不止一个 ，你可以选择其中任意一个，并将其添加到结果字符串。</p><p>请你返回将 <code>s</code> 中字符重新排序后的 <strong>结果字符串</strong> 。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> s = &quot;aaaabbbbcccc&quot;</p><p><strong>输出：</strong> &quot;abccbaabccba&quot;</p><p><strong>解释：</strong> 第一轮的步骤 1，2，3 后，结果字符串为 result = &quot;abc&quot;</p><p>第一轮的步骤 4，5，6 后，结果字符串为 result = &quot;abccba&quot;</p><p>第一轮结束，现在 s = &quot;aabbcc&quot; ，我们再次回到步骤 1</p><p>第二轮的步骤 1，2，3 后，结果字符串为 result = &quot;abccbaabc&quot;</p><p>第二轮的步骤 4，5，6 后，结果字符串为 result = &quot;abccbaabccba&quot;</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> s = &quot;rat&quot;</p><p><strong>输出：</strong> &quot;art&quot;</p><p><strong>解释：</strong> 单词 &quot;rat&quot; 在上述算法重排序以后变成 &quot;art&quot;</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= s.length &lt;= 500</code></li><li><code>s</code> 只包含小写英文字母。</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>统计每个字符的出现次数：</strong></p><ul><li>使用一个长度为 26 的数组 <code>count</code>，表示字符 <code>&#39;a&#39;</code> 到 <code>&#39;z&#39;</code> 的出现次数。</li><li>遍历字符串 <code>s</code>，通过字符的 ASCII 值计算其索引位置： <code>count[char.charCodeAt() - &#39;a&#39;.charCodeAt()]++</code></li></ul></li><li><p><strong>按照规则构建结果字符串：</strong></p><ul><li>使用一个结果字符串 <code>res</code>。</li><li>在 <code>res</code> 的长度小于 <code>s</code> 的长度时，不断执行以下两个步骤： <ul><li>从左到右（字典序递增）扫描 <code>count</code> 数组，将字符添加到结果字符串中并减少对应的计数。</li><li>从右到左（字典序递减）扫描 <code>count</code> 数组，将字符添加到结果字符串中并减少对应的计数。</li></ul></li></ul></li><li><p><strong>返回结果字符串：</strong></p><ul><li>重复上述操作，直到所有字符用完，最终返回 <code>res</code>。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 为字符串的长度。 <ul><li>统计字符次数，遍历字符串 <code>s</code>，复杂度为 <code>O(n)</code>。</li><li>构造结果字符串，每次遍历 <code>count</code> 数组需要 <code>O(26)</code>，总共构造字符串的长度为 <code>n</code>，复杂度为 <code>O(26 * n)</code>，即 <code>O(n)</code>。</li></ul></li><li><strong>空间复杂度</strong>：<code>O(n)</code><ul><li><code>count</code> 数组大小固定为 26，空间复杂度为 <code>O(1)</code>。</li><li>结果字符串的空间复杂度为 <code>O(n)</code>。</li></ul></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">sortString</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token number">26</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 初始化字符计数数组</span>
	<span class="token comment">// 统计每个字符的出现次数</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> char <span class="token keyword">of</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		count<span class="token punctuation">[</span>char<span class="token punctuation">.</span><span class="token function">charCodeAt</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">.</span><span class="token function">charCodeAt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token operator">++</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span> <span class="token comment">// 结果字符串</span>

	<span class="token keyword">while</span> <span class="token punctuation">(</span>res<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> s<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 当结果字符串未完成时，继续操作</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">26</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// 从左到右（字典序递增）</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>count<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				res <span class="token operator">+=</span> String<span class="token punctuation">.</span><span class="token function">fromCharCode</span><span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">.</span><span class="token function">charCodeAt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				count<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">--</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">25</span><span class="token punctuation">;</span> i <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// 从右到左（字典序递减）</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>count<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				res <span class="token operator">+=</span> String<span class="token punctuation">.</span><span class="token function">fromCharCode</span><span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">.</span><span class="token function">charCodeAt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				count<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">--</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> res<span class="token punctuation">;</span> <span class="token comment">// 返回结果字符串</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,28);function w(y,x){const p=e("font"),o=e("RouterLink"),c=e("ExternalLinkIcon");return r(),i("div",null,[k,n("p",null,[s("🟢 "),a(p,{color:"#15bd66"},{default:t(()=>[s("Easy")]),_:1}),s("  🔖  "),a(o,{to:"/tag/hash-table.html"},{default:t(()=>[h]),_:1}),s(),a(o,{to:"/tag/string.html"},{default:t(()=>[g]),_:1}),s(),a(o,{to:"/tag/counting.html"},{default:t(()=>[b]),_:1}),s("  🔗 "),n("a",m,[v,a(c)]),s(),n("a",f,[q,a(c)])]),_])}const A=l(d,[["render",w],["__file","1370.html.vue"]]);export{A as default};
