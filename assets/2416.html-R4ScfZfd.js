import{_ as p,r as l,o as i,c as u,a as t,d as n,b as s,w as e,f as r,e as d}from"./app-ynO5B_DP.js";const h={},k={id:"_2416-字符串的前缀分数和",tabindex:"-1"},_=t("a",{class:"header-anchor",href:"#_2416-字符串的前缀分数和","aria-hidden":"true"},"#",-1),f={href:"https://leetcode.com/problems/sum-of-prefix-scores-of-strings",target:"_blank",rel:"noopener noreferrer"},b=t("code",null,"字典树",-1),m=t("code",null,"数组",-1),g=t("code",null,"字符串",-1),q=t("code",null,"计数",-1),w={href:"https://leetcode.com/problems/sum-of-prefix-scores-of-strings",target:"_blank",rel:"noopener noreferrer"},v=t("code",null,"LeetCode",-1),x=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given an array <code>words</code> of size <code>n</code> consisting of <strong>non-empty</strong> strings.</p><p>We define the <strong>score</strong> of a string <code>word</code> as the <strong>number</strong> of strings <code>words[i]</code> such that <code>word</code> is a <strong>prefix</strong> of <code>words[i]</code>.</p><ul><li>For example, if <code>words = [&quot;a&quot;, &quot;ab&quot;, &quot;abc&quot;, &quot;cab&quot;]</code>, then the score of <code>&quot;ab&quot;</code> is <code>2</code>, since <code>&quot;ab&quot;</code> is a prefix of both <code>&quot;ab&quot;</code> and <code>&quot;abc&quot;</code>.</li></ul><p>Return <em>an array</em><code>answer</code> <em>of size</em><code>n</code> <em>where</em><code>answer[i]</code> _is the <strong>sum</strong> of scores of every <strong>non-empty</strong> prefix of _<code>words[i]</code>.</p><p><strong>Note</strong> that a string is considered as a prefix of itself.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: words = [&quot;abc&quot;,&quot;ab&quot;,&quot;bc&quot;,&quot;b&quot;]</p><p>Output: [5,4,3,2]</p><p>Explanation: The answer for each string is the following:</p><ul><li>&quot;abc&quot; has 3 prefixes: &quot;a&quot;, &quot;ab&quot;, and &quot;abc&quot;.</li><li>There are 2 strings with the prefix &quot;a&quot;, 2 strings with the prefix &quot;ab&quot;, and 1 string with the prefix &quot;abc&quot;.</li></ul><p>The total is answer[0] = 2 + 2 + 1 = 5.</p><ul><li>&quot;ab&quot; has 2 prefixes: &quot;a&quot; and &quot;ab&quot;.</li><li>There are 2 strings with the prefix &quot;a&quot;, and 2 strings with the prefix &quot;ab&quot;.</li></ul><p>The total is answer[1] = 2 + 2 = 4.</p><ul><li>&quot;bc&quot; has 2 prefixes: &quot;b&quot; and &quot;bc&quot;.</li><li>There are 2 strings with the prefix &quot;b&quot;, and 1 string with the prefix &quot;bc&quot;.</li></ul><p>The total is answer[2] = 2 + 1 = 3.</p><ul><li>&quot;b&quot; has 1 prefix: &quot;b&quot;.</li><li>There are 2 strings with the prefix &quot;b&quot;.</li></ul><p>The total is answer[3] = 2.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: words = [&quot;abcd&quot;]</p><p>Output: [4]</p><p>Explanation:</p><p>&quot;abcd&quot; has 4 prefixes: &quot;a&quot;, &quot;ab&quot;, &quot;abc&quot;, and &quot;abcd&quot;.</p><p>Each prefix has a score of one, so the total is answer[0] = 1 + 1 + 1 + 1 = 4.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= words.length &lt;= 1000</code></li><li><code>1 &lt;= words[i].length &lt;= 1000</code></li><li><code>words[i]</code> consists of lowercase English letters.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个长度为 <code>n</code> 的数组 <code>words</code> ，该数组由 <strong>非空</strong> 字符串组成。</p><p>定义字符串 <code>word</code> 的 <strong>分数</strong> 等于以 <code>word</code> 作为 <strong>前缀</strong> 的 <code>words[i]</code> 的数目。</p><ul><li>例如，如果 <code>words = [&quot;a&quot;, &quot;ab&quot;, &quot;abc&quot;, &quot;cab&quot;]</code> ，那么 <code>&quot;ab&quot;</code> 的分数是 <code>2</code> ，因为 <code>&quot;ab&quot;</code> 是 <code>&quot;ab&quot;</code> 和 <code>&quot;abc&quot;</code> 的一个前缀。</li></ul><p>返回一个长度为 <code>n</code> 的数组 <code>answer</code> ，其中 <code>answer[i]</code> 是 <code>words[i]</code> 的每个非空前缀的分数 <strong>总和</strong> 。</p><p><strong>注意</strong>：字符串视作它自身的一个前缀。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>可以用字典树存储所有字符串，由于每个节点都是其子树节点的前缀，题干中的分数就是在字符串插入字典树的过程中，经过该节点的字符串个数，即以该节点为前缀的字符串的个数。</p><p>插入后，再次遍历每个字符串，在字典树上查找，累加路径上的分数之和就是答案。</p><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">words</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">sumPrefixScores</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">words</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> map <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> word <span class="token keyword">of</span> words<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> obj <span class="token operator">=</span> map<span class="token punctuation">;</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> char <span class="token keyword">of</span> word<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>obj<span class="token punctuation">[</span>char<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				obj<span class="token punctuation">[</span>char<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
				obj<span class="token punctuation">[</span>char<span class="token punctuation">]</span><span class="token punctuation">.</span>count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			obj<span class="token punctuation">[</span>char<span class="token punctuation">]</span><span class="token punctuation">.</span>count<span class="token operator">++</span><span class="token punctuation">;</span>
			obj <span class="token operator">=</span> obj<span class="token punctuation">[</span>char<span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> word <span class="token keyword">of</span> words<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
			obj <span class="token operator">=</span> map<span class="token punctuation">;</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> char <span class="token keyword">of</span> word<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			sum <span class="token operator">+=</span> obj<span class="token punctuation">[</span>char<span class="token punctuation">]</span><span class="token punctuation">.</span>count<span class="token punctuation">;</span>
			obj <span class="token operator">=</span> obj<span class="token punctuation">[</span>char<span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>sum<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,24),y=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"left"}},"难度")])],-1),j=t("td",{style:{"text-align":"center"}},"211",-1),T={style:{"text-align":"left"}},E={href:"https://leetcode.com/problems/design-add-and-search-words-data-structure",target:"_blank",rel:"noopener noreferrer"},N={style:{"text-align":"center"}},C={href:"/problem/0211",target:"_blank",rel:"noopener noreferrer"},L={style:{"text-align":"left"}},V=t("code",null,"深度优先搜索",-1),I=t("code",null,"设计",-1),B=t("code",null,"字典树",-1),M=t("code",null,"1+",-1),R={style:{"text-align":"left"}},z=t("td",{style:{"text-align":"center"}},"421",-1),O={style:{"text-align":"left"}},S={href:"https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array",target:"_blank",rel:"noopener noreferrer"},F=t("td",{style:{"text-align":"center"}},null,-1),H={style:{"text-align":"left"}},P=t("code",null,"位运算",-1),W=t("code",null,"字典树",-1),Y=t("code",null,"数组",-1),A=t("code",null,"1+",-1),D={style:{"text-align":"left"}},G=t("td",{style:{"text-align":"center"}},"677",-1),J={style:{"text-align":"left"}},K={href:"https://leetcode.com/problems/map-sum-pairs",target:"_blank",rel:"noopener noreferrer"},Q=t("td",{style:{"text-align":"center"}},null,-1),U={style:{"text-align":"left"}},X=t("code",null,"设计",-1),Z=t("code",null,"字典树",-1),$=t("code",null,"哈希表",-1),tt=t("code",null,"1+",-1),nt={style:{"text-align":"left"}};function st(et,at){const o=l("ExternalLinkIcon"),c=l("font"),a=l("RouterLink");return i(),u("div",null,[t("h1",k,[_,n(),t("a",f,[n("2416. 字符串的前缀分数和"),s(o)])]),t("p",null,[n("🔴 "),s(c,{color:"#ff334b"},{default:e(()=>[n("Hard")]),_:1}),n("  🔖  "),s(a,{to:"/outline/tag/trie.html"},{default:e(()=>[b]),_:1}),n(),s(a,{to:"/outline/tag/array.html"},{default:e(()=>[m]),_:1}),n(),s(a,{to:"/outline/tag/string.html"},{default:e(()=>[g]),_:1}),n(),s(a,{to:"/outline/tag/counting.html"},{default:e(()=>[q]),_:1}),n("  🔗 "),t("a",w,[v,s(o)])]),x,r(" prettier-ignore "),t("table",null,[y,t("tbody",null,[t("tr",null,[j,t("td",T,[t("a",E,[n("添加与搜索单词 - 数据结构设计"),s(o)])]),t("td",N,[t("a",C,[n("[✓]"),s(o)])]),t("td",L,[s(a,{to:"/outline/tag/depth-first-search.html"},{default:e(()=>[V]),_:1}),n(),s(a,{to:"/outline/tag/design.html"},{default:e(()=>[I]),_:1}),n(),s(a,{to:"/outline/tag/trie.html"},{default:e(()=>[B]),_:1}),n(),M]),t("td",R,[s(c,{color:"#ffb800"},{default:e(()=>[n("Medium")]),_:1})])]),t("tr",null,[z,t("td",O,[t("a",S,[n("数组中两个数的最大异或值"),s(o)])]),F,t("td",H,[s(a,{to:"/outline/tag/bit-manipulation.html"},{default:e(()=>[P]),_:1}),n(),s(a,{to:"/outline/tag/trie.html"},{default:e(()=>[W]),_:1}),n(),s(a,{to:"/outline/tag/array.html"},{default:e(()=>[Y]),_:1}),n(),A]),t("td",D,[s(c,{color:"#ffb800"},{default:e(()=>[n("Medium")]),_:1})])]),t("tr",null,[G,t("td",J,[t("a",K,[n("键值映射"),s(o)])]),Q,t("td",U,[s(a,{to:"/outline/tag/design.html"},{default:e(()=>[X]),_:1}),n(),s(a,{to:"/outline/tag/trie.html"},{default:e(()=>[Z]),_:1}),n(),s(a,{to:"/outline/tag/hash-table.html"},{default:e(()=>[$]),_:1}),n(),tt]),t("td",nt,[s(c,{color:"#ffb800"},{default:e(()=>[n("Medium")]),_:1})])])])])])}const ct=p(h,[["render",st],["__file","2416.html.vue"]]);export{ct as default};
