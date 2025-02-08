import{_ as c,r as e,o as l,c as r,a as n,b as s,d as t,w as o,e as i}from"./app-totCBmv-.js";const d={},q=n("h1",{id:"_1268-搜索推荐系统",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1268-搜索推荐系统","aria-hidden":"true"},"#"),s(" 1268. 搜索推荐系统")],-1),k=n("code",null,"字典树",-1),m=n("code",null,"数组",-1),h=n("code",null,"字符串",-1),g=n("code",null,"二分查找",-1),v=n("code",null,"排序",-1),b=n("code",null,"堆（优先队列）",-1),f={href:"https://leetcode.cn/problems/search-suggestions-system",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"力扣",-1),y={href:"https://leetcode.com/problems/search-suggestions-system",target:"_blank",rel:"noopener noreferrer"},w=n("code",null,"LeetCode",-1),x=i(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given an array of strings <code>products</code> and a string <code>searchWord</code>.</p><p>Design a system that suggests at most three product names from <code>products</code> after each character of <code>searchWord</code> is typed. Suggested products should have common prefix with <code>searchWord</code>. If there are more than three products with a common prefix return the three lexicographically minimums products.</p><p>Return <em>a list of lists of the suggested products after each character of</em><code>searchWord</code> <em>is typed</em>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: products = [&quot;mobile&quot;,&quot;mouse&quot;,&quot;moneypot&quot;,&quot;monitor&quot;,&quot;mousepad&quot;], searchWord = &quot;mouse&quot;</p><p>Output: [[&quot;mobile&quot;,&quot;moneypot&quot;,&quot;monitor&quot;],[&quot;mobile&quot;,&quot;moneypot&quot;,&quot;monitor&quot;],[&quot;mouse&quot;,&quot;mousepad&quot;],[&quot;mouse&quot;,&quot;mousepad&quot;],[&quot;mouse&quot;,&quot;mousepad&quot;]]</p><p>Explanation: products sorted lexicographically = [&quot;mobile&quot;,&quot;moneypot&quot;,&quot;monitor&quot;,&quot;mouse&quot;,&quot;mousepad&quot;].</p><p>After typing m and mo all products match and we show user [&quot;mobile&quot;,&quot;moneypot&quot;,&quot;monitor&quot;].</p><p>After typing mou, mous and mouse the system suggests [&quot;mouse&quot;,&quot;mousepad&quot;].</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: products = [&quot;havana&quot;], searchWord = &quot;havana&quot;</p><p>Output: [[&quot;havana&quot;],[&quot;havana&quot;],[&quot;havana&quot;],[&quot;havana&quot;],[&quot;havana&quot;],[&quot;havana&quot;]]</p><p>Explanation: The only word &quot;havana&quot; will be always suggested while typing the search word.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= products.length &lt;= 1000</code></li><li><code>1 &lt;= products[i].length &lt;= 3000</code></li><li><code>1 &lt;= sum(products[i].length) &lt;= 2 * 10^4</code></li><li>All the strings of <code>products</code> are <strong>unique</strong>.</li><li><code>products[i]</code> consists of lowercase English letters.</li><li><code>1 &lt;= searchWord.length &lt;= 1000</code></li><li><code>searchWord</code> consists of lowercase English letters.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个产品数组 <code>products</code> 和一个字符串 <code>searchWord</code> ，<code>products</code> 数组中每个产品都是一个字符串。</p><p>请你设计一个推荐系统，在依次输入单词 <code>searchWord</code> 的每一个字母后，推荐 <code>products</code> 数组中前缀与 <code>searchWord</code> 相同的最多三个产品。如果前缀相同的可推荐产品超过三个，请按字典序返回最小的三个。</p><p>请你以二维列表的形式，返回在输入 <code>searchWord</code> 每个字母后相应的推荐产品的列表。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> products = [&quot;mobile&quot;,&quot;mouse&quot;,&quot;moneypot&quot;,&quot;monitor&quot;,&quot;mousepad&quot;], searchWord = &quot;mouse&quot;</p><p><strong>输出：</strong>[</p><p>[&quot;mobile&quot;,&quot;moneypot&quot;,&quot;monitor&quot;],</p><p>[&quot;mobile&quot;,&quot;moneypot&quot;,&quot;monitor&quot;],</p><p>[&quot;mouse&quot;,&quot;mousepad&quot;],</p><p>[&quot;mouse&quot;,&quot;mousepad&quot;],</p><p>[&quot;mouse&quot;,&quot;mousepad&quot;]</p><p>]</p><p><strong>解释：</strong> 按字典序排序后的产品列表是 [&quot;mobile&quot;,&quot;moneypot&quot;,&quot;monitor&quot;,&quot;mouse&quot;,&quot;mousepad&quot;]</p><p>输入 m 和 mo，由于所有产品的前缀都相同，所以系统返回字典序最小的三个产品 [&quot;mobile&quot;,&quot;moneypot&quot;,&quot;monitor&quot;]</p><p>输入 mou， mous 和 mouse 后系统都返回 [&quot;mouse&quot;,&quot;mousepad&quot;]</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> products = [&quot;havana&quot;], searchWord = &quot;havana&quot;</p><p><strong>输出：</strong>[[&quot;havana&quot;],[&quot;havana&quot;],[&quot;havana&quot;],[&quot;havana&quot;],[&quot;havana&quot;],[&quot;havana&quot;]]</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> products = [&quot;bags&quot;,&quot;baggage&quot;,&quot;banner&quot;,&quot;box&quot;,&quot;cloths&quot;], searchWord = &quot;bags&quot;</p><p><strong>输出：</strong>[[&quot;baggage&quot;,&quot;bags&quot;,&quot;banner&quot;],[&quot;baggage&quot;,&quot;bags&quot;,&quot;banner&quot;],[&quot;baggage&quot;,&quot;bags&quot;],[&quot;bags&quot;]]</p></blockquote><p><strong>示例 4：</strong></p><blockquote><p><strong>输入：</strong> products = [&quot;havana&quot;], searchWord = &quot;tatiana&quot;</p><p><strong>输出：</strong>[[],[],[],[],[],[],[]]</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= products.length &lt;= 1000</code></li><li><code>1 &lt;= Σ products[i].length &lt;= 2 * 10^4</code></li><li><code>products[i]</code> 中所有的字符都是小写英文字母。</li><li><code>1 &lt;= searchWord.length &lt;= 1000</code></li><li><code>searchWord</code> 中所有字符都是小写英文字母。</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p>对所有产品进行字典序排序。</p></li><li><p><strong>构建字典树</strong>：</p><ul><li>插入每个产品到字典树中。</li><li>同时在每个节点维护一个最多 3 个的候选列表。</li></ul></li><li><p><strong>搜索前缀</strong>：</p><ul><li>遍历 <code>searchWord</code> 的每个字符，在字典树中查找对应节点。</li><li>返回节点中的候选列表。</li></ul></li><li><p><strong>返回结果</strong>：</p><ul><li>将每个前缀对应的候选列表加入结果。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n * L + m)</code>，其中 <code>L</code> 是平均字符串长度， <code>n</code> 是 <code>products</code> 的长度，<code>m</code> 是搜索字符串的长度。 <ul><li>构建字典树：每个字符串插入 <code>O(L)</code>，复杂度为 <code>O(n * L)</code>。</li><li>搜索：遍历 <code>searchWord</code> 的每个字符 <code>O(m)</code>，每次查找候选列表 <code>O(3)</code>，复杂度为 <code>O(m)</code>。</li><li>总复杂度：<code>O(n * L + m)</code>。</li></ul></li><li><strong>空间复杂度</strong>：<code>O(n * L)</code>，字典树占用的空间。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">products</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">searchWord</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">suggestedProducts</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">products<span class="token punctuation">,</span> searchWord</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 对 products 进行字典序排序</span>
	products<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">// 构建字典树</span>
	<span class="token keyword">let</span> dict <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> word <span class="token keyword">of</span> products<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> cur <span class="token operator">=</span> dict<span class="token punctuation">;</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> char <span class="token keyword">of</span> word<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>cur<span class="token punctuation">[</span>char<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				cur<span class="token punctuation">[</span>char<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">suggest</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			cur <span class="token operator">=</span> cur<span class="token punctuation">[</span>char<span class="token punctuation">]</span><span class="token punctuation">;</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>cur<span class="token punctuation">.</span>suggest<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				cur<span class="token punctuation">.</span>suggest<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>word<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
		cur<span class="token punctuation">.</span>isEnd <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 搜索前缀</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
		cur <span class="token operator">=</span> dict<span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> char <span class="token keyword">of</span> searchWord<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>cur<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			cur <span class="token operator">=</span> cur<span class="token punctuation">[</span>char<span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>cur <span class="token operator">?</span> cur<span class="token punctuation">.</span>suggest <span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,30);function W(L,E){const p=e("font"),a=e("RouterLink"),u=e("ExternalLinkIcon");return l(),r("div",null,[q,n("p",null,[s("🟠 "),t(p,{color:"#ffb800"},{default:o(()=>[s("Medium")]),_:1}),s("  🔖  "),t(a,{to:"/tag/trie.html"},{default:o(()=>[k]),_:1}),s(),t(a,{to:"/tag/array.html"},{default:o(()=>[m]),_:1}),s(),t(a,{to:"/tag/string.html"},{default:o(()=>[h]),_:1}),s(),t(a,{to:"/tag/binary-search.html"},{default:o(()=>[g]),_:1}),s(),t(a,{to:"/tag/sorting.html"},{default:o(()=>[v]),_:1}),s(),t(a,{to:"/tag/heap-priority-queue.html"},{default:o(()=>[b]),_:1}),s("  🔗 "),n("a",f,[_,t(u)]),s(),n("a",y,[w,t(u)])]),x])}const I=c(d,[["render",W],["__file","1268.html.vue"]]);export{I as default};
