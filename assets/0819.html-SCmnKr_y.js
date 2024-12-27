import{_ as l,r as o,o as r,c as i,a as n,b as a,d as s,w as t,e as u}from"./app-fqckLmln.js";const d={},k=n("h1",{id:"_819-最常见的单词",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_819-最常见的单词","aria-hidden":"true"},"#"),a(" 819. 最常见的单词")],-1),h=n("code",null,"数组",-1),g=n("code",null,"哈希表",-1),m=n("code",null,"字符串",-1),b=n("code",null,"计数",-1),v={href:"https://leetcode.cn/problems/most-common-word",target:"_blank",rel:"noopener noreferrer"},w=n("code",null,"力扣",-1),q={href:"https://leetcode.com/problems/most-common-word",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"LeetCode",-1),_=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given a string <code>paragraph</code> and a string array of the banned words <code>banned</code>, return <em>the most frequent word that is not banned</em>. It is <strong>guaranteed</strong> there is <strong>at least one word</strong> that is not banned, and that the answer is <strong>unique</strong>.</p><p>The words in <code>paragraph</code> are <strong>case-insensitive</strong> and the answer should be returned in <strong>lowercase</strong>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: paragraph = &quot;Bob hit a ball, the hit BALL flew far after it was hit.&quot;, banned = [&quot;hit&quot;]</p><p>Output: &quot;ball&quot;</p><p>Explanation:</p><p>&quot;hit&quot; occurs 3 times, but it is a banned word.</p><p>&quot;ball&quot; occurs twice (and no other word does), so it is the most frequent non-banned word in the paragraph.</p><p>Note that words in the paragraph are not case sensitive,</p><p>that punctuation is ignored (even if adjacent to words, such as &quot;ball,&quot;),</p><p>and that &quot;hit&quot; isn&#39;t the answer even though it occurs more because it is banned.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: paragraph = &quot;a.&quot;, banned = []</p><p>Output: &quot;a&quot;</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= paragraph.length &lt;= 1000</code></li><li>paragraph consists of English letters, space <code>&#39; &#39;</code>, or one of the symbols: <code>&quot;!?&#39;,;.&quot;</code>.</li><li><code>0 &lt;= banned.length &lt;= 100</code></li><li><code>1 &lt;= banned[i].length &lt;= 10</code></li><li><code>banned[i]</code> consists of only lowercase English letters.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个字符串 <code>paragraph</code> 和一个表示禁用词的字符串数组 <code>banned</code> ，返回出现频率最高的非禁用词。题目数据 <strong>保证</strong> 至少存在一个非禁用词，且答案<strong>唯一</strong> 。</p><p><code>paragraph</code> 中的单词 <strong>不区分大小写</strong> ，答案应以 <strong>小写</strong> 形式返回。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> paragraph = &quot;Bob hit a ball, the hit BALL flew far after it was hit.&quot;, banned = [&quot;hit&quot;]</p><p><strong>输出：</strong> &quot;ball&quot;</p><p><strong>解释：</strong></p><p>&quot;hit&quot; 出现了 3 次，但它是禁用词。</p><p>&quot;ball&quot; 出现了两次（没有其他单词出现这么多次），因此它是段落中出现频率最高的非禁用词。</p><p>请注意，段落中的单词不区分大小写，</p><p>标点符号会被忽略（即使它们紧挨着单词，如 &quot;ball,&quot;），</p><p>并且尽管 &quot;hit&quot; 出现的次数更多，但它不能作为答案，因为它是禁用词。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> paragraph = &quot;a.&quot;, banned = []</p><p><strong>输出：</strong> &quot;a&quot;</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= paragraph.length &lt;= 1000</code></li><li><code>paragraph</code> 由英文字母、空格 <code>&#39; &#39;</code>、和以下符号组成：<code>&quot;!?&#39;,;.&quot;</code></li><li><code>0 &lt;= banned.length &lt;= 100</code></li><li><code>1 &lt;= banned[i].length &lt;= 10</code></li><li><code>banned[i]</code> 仅由小写英文字母组成</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>预处理输入</strong>：</p><ul><li>首先将字符串 <code>paragraph</code> 中的所有标点符号替换为空格，以便提取出所有单词。</li><li>将 <code>paragraph</code> 中的所有字符转换为小写。</li><li>使用空格将处理后的 <code>paragraph</code> 分割成单词列表。</li></ul></li><li><p><strong>建立单词计数</strong>：</p><ul><li>将禁用词存入一个集合（<code>bannedSet</code>）中以加速查询。</li><li>遍历单词列表，跳过出现在 <code>banned</code> 数组中的单词。</li><li>使用一个哈希表（<code>wordCount</code>）记录每个单词出现的次数。</li><li>同时更新目前最高的频率，和频率最高的非禁用词。</li></ul></li><li><p><strong>返回结果</strong>：返回频率最高的单词作为结果。</p></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><p><strong>时间复杂度</strong>：<code>O(n + m + k)</code>，通常可以近似为 <code>O(n)</code>。</p><ul><li>预处理替换标点符号的时间复杂度为 <code>O(n)</code>，其中 <code>n</code> 是字符串的长度。</li><li>分割单词的时间复杂度为 <code>O(n)</code>。</li><li>统计频率遍历单词列表的时间复杂度为 <code>O(m)</code>，其中 <code>m</code> 是单词数量。</li><li>寻找最高频率遍历哈希表的时间复杂度为 <code>O(k)</code>，其中 <code>k</code> 是唯一单词的数量。</li></ul></li><li><p><strong>空间复杂度</strong>：<code>O(k + b)</code>，其中 <code>k</code> 是唯一单词数量，<code>b</code> 是禁用词数量，使用的额外空间包括存储单词频率的哈希表和禁用词集合。</p></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">paragraph</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">banned</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">mostCommonWord</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">paragraph<span class="token punctuation">,</span> banned</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 预处理：过滤掉标点符号并转换为小写</span>
	<span class="token keyword">const</span> cleanParagraph <span class="token operator">=</span> paragraph<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">[!?&#39;,;.\\&quot;]</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> words <span class="token operator">=</span> cleanParagraph<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\s+</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">// 将禁用词存入 Set 以加速查询</span>
	<span class="token keyword">const</span> bannedSet <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span>banned<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">// 统计单词频率</span>
	<span class="token keyword">let</span> wordCount <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> maxCount <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
		res <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> word <span class="token keyword">of</span> words<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>word <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>bannedSet<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>word<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">const</span> count <span class="token operator">=</span> <span class="token punctuation">(</span>wordCount<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>word<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
			wordCount<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>word<span class="token punctuation">,</span> count<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token comment">// 更新出现次数最多的单词</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>count <span class="token operator">&gt;</span> maxCount<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				maxCount <span class="token operator">=</span> count<span class="token punctuation">;</span>
				res <span class="token operator">=</span> word<span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,24);function x(y,C){const c=o("font"),e=o("RouterLink"),p=o("ExternalLinkIcon");return r(),i("div",null,[k,n("p",null,[a("🟢 "),s(c,{color:"#15bd66"},{default:t(()=>[a("Easy")]),_:1}),a("  🔖  "),s(e,{to:"/tag/array.html"},{default:t(()=>[h]),_:1}),a(),s(e,{to:"/tag/hash-table.html"},{default:t(()=>[g]),_:1}),a(),s(e,{to:"/tag/string.html"},{default:t(()=>[m]),_:1}),a(),s(e,{to:"/tag/counting.html"},{default:t(()=>[b]),_:1}),a("  🔗 "),n("a",v,[w,s(p)]),a(),n("a",q,[f,s(p)])]),_])}const E=l(d,[["render",x],["__file","0819.html.vue"]]);export{E as default};
