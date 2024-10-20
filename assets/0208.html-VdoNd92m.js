import{_ as i,r as c,o as p,c as r,a as n,d as t,b as s,w as e,f as d,e as u}from"./app-Fucr7yuT.js";const h={},_={id:"_208-实现-trie-前缀树",tabindex:"-1"},k=n("a",{class:"header-anchor",href:"#_208-实现-trie-前缀树","aria-hidden":"true"},"#",-1),m={href:"https://leetcode.com/problems/implement-trie-prefix-tree",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"设计",-1),g=n("code",null,"字典树",-1),v=n("code",null,"哈希表",-1),b=n("code",null,"字符串",-1),y={href:"https://leetcode.com/problems/implement-trie-prefix-tree",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"LeetCode",-1),w=n("h2",{id:"题目",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#题目","aria-hidden":"true"},"#"),t(" 题目")],-1),q={href:"https://en.wikipedia.org/wiki/Trie",target:"_blank",rel:"noopener noreferrer"},T=n("strong",null,"trie",-1),E=n("strong",null,"prefix tree",-1),I=u(`<p>Implement the Trie class:</p><ul><li><code>Trie()</code> Initializes the trie object.</li><li><code>void insert(String word)</code> Inserts the string <code>word</code> into the trie.</li><li><code>boolean search(String word)</code> Returns <code>true</code> if the string <code>word</code> is in the trie (i.e., was inserted before), and <code>false</code> otherwise.</li><li><code>boolean startsWith(String prefix)</code> Returns <code>true</code> if there is a previously inserted string <code>word</code> that has the prefix <code>prefix</code>, and <code>false</code> otherwise.</li></ul><p><strong>Example 1:</strong></p><blockquote><p><strong>Input</strong></p><p>[&quot;Trie&quot;, &quot;insert&quot;, &quot;search&quot;, &quot;search&quot;, &quot;startsWith&quot;, &quot;insert&quot;, &quot;search&quot;]</p><p>[[], [&quot;apple&quot;], [&quot;apple&quot;], [&quot;app&quot;], [&quot;app&quot;], [&quot;app&quot;], [&quot;app&quot;]]</p><p><strong>Output</strong></p><p>[null, null, true, false, true, null, true]</p><p><strong>Explanation</strong></p><p>Trie trie = new Trie();</p><p>trie.insert(&quot;apple&quot;);</p><p>trie.search(&quot;apple&quot;); // return True</p><p>trie.search(&quot;app&quot;);&gt; // return False</p><p>trie.startsWith(&quot;app&quot;); // return True</p><p>trie.insert(&quot;app&quot;);</p><p>trie.search(&quot;app&quot;);&gt; // return True</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= word.length, prefix.length &lt;= 2000</code></li><li><code>word</code> and <code>prefix</code> consist only of lowercase English letters.</li><li>At most <code>3 * 10^4</code> calls <strong>in total</strong> will be made to <code>insert</code>, <code>search</code>, and <code>startsWith</code>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p><strong>Trie</strong>（发音类似 &quot;try&quot;）或者说 <strong>前缀树</strong> 是一种树形数据结构，用于高效地存储和检索字符串数据集中的键。这一数据结构有相当多的应用情景，例如自动补全和拼写检查。</p><p>请你实现 <strong>Trie</strong> 类：</p><ul><li><code>Trie()</code> 初始化前缀树对象。</li><li><code>void insert(String word)</code> 向前缀树中插入字符串 <code>word</code> 。</li><li><code>boolean search(String word)</code> 如果字符串 <code>word</code> 在前缀树中，返回 <code>true</code>（即，在检索之前已经插入）；否则，返回 <code>false</code> 。</li><li><code>boolean startsWith(String prefix)</code> 如果之前已经插入的字符串 <code>word</code> 的前缀之一为 <code>prefix</code> ，返回 <code>true</code> ；否则，返回 <code>false</code> 。</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>Trie 是一种树形数据结构，专门用于存储字符串集。每个节点表示字符串的一个字符，子节点对应该字符后续的字符序列。Trie 的最大优点是可以在 <strong>O(m)</strong> 时间内完成查找或插入操作，其中 <code>m</code> 是要查找或插入的字符串的长度。</p><p>Trie 的结构：</p><ul><li>每个节点可以有多个子节点，每个子节点代表一个字母。</li><li>一个标志位 <code>isEnd</code> 用于表示是否存在一个以当前节点为结尾的完整单词。</li></ul><ol><li><strong>插入单词 (<code>insert</code>)</strong>： <ul><li>从根节点开始，对于单词中的每个字符，依次创建子节点。如果字符的子节点不存在，则创建一个新的子节点。</li><li>最后，标记该节点为单词的结尾（即 <code>isEnd = true</code>）。</li></ul></li><li><strong>查找单词 (<code>search</code>)</strong>： <ul><li>从根节点开始，依次沿着给定单词的字符查找对应的子节点。</li><li>如果找到所有字符且最后一个节点标记为单词的结尾，返回 <code>true</code>；否则，返回 <code>false</code>。</li></ul></li><li><strong>查找前缀 (<code>startsWith</code>)</strong>： <ul><li>和 <code>search</code> 类似，只是不要求节点是单词的结尾，只要能找到所有前缀字符对应的节点，就返回 <code>true</code>。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>： <ul><li><strong>插入</strong>：<code>O(m)</code>，<code>m</code> 是要插入的单词长度。</li><li><strong>查找</strong>：<code>O(m)</code>，<code>m</code> 是要查找的单词长度。</li><li><strong>前缀查找</strong>：<code>O(m)</code>，<code>m</code> 是前缀的长度。</li></ul></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">Trie</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span>root <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">// 初始化根节点</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 插入一个单词到 Trie</span>
<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">word</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">void</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token class-name">Trie</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">insert</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">word</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> node <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>root<span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> char <span class="token keyword">of</span> word<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 如果子节点不存在，则创建新的子节点</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>node<span class="token punctuation">[</span>char<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			node<span class="token punctuation">[</span>char<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token comment">// 继续遍历下一个字符</span>
		node <span class="token operator">=</span> node<span class="token punctuation">[</span>char<span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token comment">// 单词结束标记</span>
	node<span class="token punctuation">.</span>isEnd <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 搜索单词，要求完全匹配</span>
<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">word</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
<span class="token class-name">Trie</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">search</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">word</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> node <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>root<span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> char <span class="token keyword">of</span> word<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 如果找不到字符，返回 false</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>node<span class="token punctuation">[</span>char<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
		node <span class="token operator">=</span> node<span class="token punctuation">[</span>char<span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token comment">// 只有到达的节点是单词结尾时，才返回 true</span>
	<span class="token keyword">return</span> node<span class="token punctuation">.</span>isEnd <span class="token operator">==</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 检查是否存在以某个前缀开头的单词</span>
<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">prefix</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
<span class="token class-name">Trie</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">startsWith</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">prefix</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> node <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>root<span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> char <span class="token keyword">of</span> prefix<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 如果前缀字符不存在，返回 false</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>node<span class="token punctuation">[</span>char<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
		node <span class="token operator">=</span> node<span class="token punctuation">[</span>char<span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token comment">// 只要能匹配到前缀，返回 true</span>
	<span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,20),j=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"left"}},"难度")])],-1),W=n("td",{style:{"text-align":"center"}},"211",-1),S={style:{"text-align":"left"}},C={href:"https://leetcode.com/problems/design-add-and-search-words-data-structure",target:"_blank",rel:"noopener noreferrer"},L={style:{"text-align":"center"}},M={style:{"text-align":"left"}},N=n("code",null,"深度优先搜索",-1),O=n("code",null,"设计",-1),V=n("code",null,"字典树",-1),R=n("code",null,"1+",-1),B={style:{"text-align":"left"}},H=n("td",{style:{"text-align":"center"}},"642",-1),A={style:{"text-align":"left"}},z={href:"https://leetcode.com/problems/design-search-autocomplete-system",target:"_blank",rel:"noopener noreferrer"},F=n("td",{style:{"text-align":"center"}},null,-1),Y={style:{"text-align":"left"}},D=n("code",null,"深度优先搜索",-1),G=n("code",null,"设计",-1),J=n("code",null,"字典树",-1),K=n("code",null,"4+",-1),P={style:{"text-align":"left"}},Q=n("td",{style:{"text-align":"center"}},"648",-1),U={style:{"text-align":"left"}},X={href:"https://leetcode.com/problems/replace-words",target:"_blank",rel:"noopener noreferrer"},Z=n("td",{style:{"text-align":"center"}},null,-1),$={style:{"text-align":"left"}},nn=n("code",null,"字典树",-1),tn=n("code",null,"数组",-1),sn=n("code",null,"哈希表",-1),en=n("code",null,"1+",-1),an={style:{"text-align":"left"}},on=n("td",{style:{"text-align":"center"}},"676",-1),ln={style:{"text-align":"left"}},cn={href:"https://leetcode.com/problems/implement-magic-dictionary",target:"_blank",rel:"noopener noreferrer"},pn=n("td",{style:{"text-align":"center"}},null,-1),rn={style:{"text-align":"left"}},dn=n("code",null,"深度优先搜索",-1),un=n("code",null,"设计",-1),hn=n("code",null,"字典树",-1),_n=n("code",null,"2+",-1),kn={style:{"text-align":"left"}},mn=n("td",{style:{"text-align":"center"}},"1804",-1),fn={style:{"text-align":"left"}},gn={href:"https://leetcode.com/problems/implement-trie-ii-prefix-tree",target:"_blank",rel:"noopener noreferrer"},vn=n("td",{style:{"text-align":"center"}},null,-1),bn={style:{"text-align":"left"}},yn=n("code",null,"设计",-1),xn=n("code",null,"字典树",-1),wn=n("code",null,"哈希表",-1),qn=n("code",null,"1+",-1),Tn={style:{"text-align":"left"}},En=n("td",{style:{"text-align":"center"}},"2227",-1),In={style:{"text-align":"left"}},jn={href:"https://leetcode.com/problems/encrypt-and-decrypt-strings",target:"_blank",rel:"noopener noreferrer"},Wn=n("td",{style:{"text-align":"center"}},null,-1),Sn={style:{"text-align":"left"}},Cn=n("code",null,"设计",-1),Ln=n("code",null,"字典树",-1),Mn=n("code",null,"数组",-1),Nn=n("code",null,"2+",-1),On={style:{"text-align":"left"}},Vn=n("td",{style:{"text-align":"center"}},"3042",-1),Rn={style:{"text-align":"left"}},Bn={href:"https://leetcode.com/problems/count-prefix-and-suffix-pairs-i",target:"_blank",rel:"noopener noreferrer"},Hn=n("td",{style:{"text-align":"center"}},null,-1),An={style:{"text-align":"left"}},zn=n("code",null,"字典树",-1),Fn=n("code",null,"数组",-1),Yn=n("code",null,"字符串",-1),Dn=n("code",null,"3+",-1),Gn={style:{"text-align":"left"}},Jn=n("td",{style:{"text-align":"center"}},"3045",-1),Kn={style:{"text-align":"left"}},Pn={href:"https://leetcode.com/problems/count-prefix-and-suffix-pairs-ii",target:"_blank",rel:"noopener noreferrer"},Qn=n("td",{style:{"text-align":"center"}},null,-1),Un={style:{"text-align":"left"}},Xn=n("code",null,"字典树",-1),Zn=n("code",null,"数组",-1),$n=n("code",null,"字符串",-1),nt=n("code",null,"3+",-1),tt={style:{"text-align":"left"}};function st(et,at){const o=c("ExternalLinkIcon"),l=c("font"),a=c("RouterLink");return p(),r("div",null,[n("h1",_,[k,t(),n("a",m,[t("208. 实现 Trie (前缀树)"),s(o)])]),n("p",null,[t("🟠 "),s(l,{color:"#ffb800"},{default:e(()=>[t("Medium")]),_:1}),t("  🔖  "),s(a,{to:"/tag/design.html"},{default:e(()=>[f]),_:1}),t(),s(a,{to:"/tag/trie.html"},{default:e(()=>[g]),_:1}),t(),s(a,{to:"/tag/hash-table.html"},{default:e(()=>[v]),_:1}),t(),s(a,{to:"/tag/string.html"},{default:e(()=>[b]),_:1}),t("  🔗 "),n("a",y,[x,s(o)])]),w,n("p",null,[t("A "),n("a",q,[T,s(o)]),t(' (pronounced as "try") or '),E,t(" is a tree data structure used to efficiently store and retrieve keys in a dataset of strings. There are various applications of this data structure, such as autocomplete and spellchecker.")]),I,d(" prettier-ignore "),n("table",null,[j,n("tbody",null,[n("tr",null,[W,n("td",S,[n("a",C,[t("添加与搜索单词 - 数据结构设计"),s(o)])]),n("td",L,[s(a,{to:"/problem/0211.html"},{default:e(()=>[t("[✓]")]),_:1})]),n("td",M,[s(a,{to:"/tag/depth-first-search.html"},{default:e(()=>[N]),_:1}),t(),s(a,{to:"/tag/design.html"},{default:e(()=>[O]),_:1}),t(),s(a,{to:"/tag/trie.html"},{default:e(()=>[V]),_:1}),t(),R]),n("td",B,[s(l,{color:"#ffb800"},{default:e(()=>[t("Medium")]),_:1})])]),n("tr",null,[H,n("td",A,[n("a",z,[t("设计搜索自动补全系统"),s(o)])]),F,n("td",Y,[s(a,{to:"/tag/depth-first-search.html"},{default:e(()=>[D]),_:1}),t(),s(a,{to:"/tag/design.html"},{default:e(()=>[G]),_:1}),t(),s(a,{to:"/tag/trie.html"},{default:e(()=>[J]),_:1}),t(),K]),n("td",P,[s(l,{color:"#ff334b"},{default:e(()=>[t("Hard")]),_:1})])]),n("tr",null,[Q,n("td",U,[n("a",X,[t("单词替换"),s(o)])]),Z,n("td",$,[s(a,{to:"/tag/trie.html"},{default:e(()=>[nn]),_:1}),t(),s(a,{to:"/tag/array.html"},{default:e(()=>[tn]),_:1}),t(),s(a,{to:"/tag/hash-table.html"},{default:e(()=>[sn]),_:1}),t(),en]),n("td",an,[s(l,{color:"#ffb800"},{default:e(()=>[t("Medium")]),_:1})])]),n("tr",null,[on,n("td",ln,[n("a",cn,[t("实现一个魔法字典"),s(o)])]),pn,n("td",rn,[s(a,{to:"/tag/depth-first-search.html"},{default:e(()=>[dn]),_:1}),t(),s(a,{to:"/tag/design.html"},{default:e(()=>[un]),_:1}),t(),s(a,{to:"/tag/trie.html"},{default:e(()=>[hn]),_:1}),t(),_n]),n("td",kn,[s(l,{color:"#ffb800"},{default:e(()=>[t("Medium")]),_:1})])]),n("tr",null,[mn,n("td",fn,[n("a",gn,[t("实现 Trie （前缀树） II"),s(o)])]),vn,n("td",bn,[s(a,{to:"/tag/design.html"},{default:e(()=>[yn]),_:1}),t(),s(a,{to:"/tag/trie.html"},{default:e(()=>[xn]),_:1}),t(),s(a,{to:"/tag/hash-table.html"},{default:e(()=>[wn]),_:1}),t(),qn]),n("td",Tn,[s(l,{color:"#ffb800"},{default:e(()=>[t("Medium")]),_:1})])]),n("tr",null,[En,n("td",In,[n("a",jn,[t("加密解密字符串"),s(o)])]),Wn,n("td",Sn,[s(a,{to:"/tag/design.html"},{default:e(()=>[Cn]),_:1}),t(),s(a,{to:"/tag/trie.html"},{default:e(()=>[Ln]),_:1}),t(),s(a,{to:"/tag/array.html"},{default:e(()=>[Mn]),_:1}),t(),Nn]),n("td",On,[s(l,{color:"#ff334b"},{default:e(()=>[t("Hard")]),_:1})])]),n("tr",null,[Vn,n("td",Rn,[n("a",Bn,[t("统计前后缀下标对 I"),s(o)])]),Hn,n("td",An,[s(a,{to:"/tag/trie.html"},{default:e(()=>[zn]),_:1}),t(),s(a,{to:"/tag/array.html"},{default:e(()=>[Fn]),_:1}),t(),s(a,{to:"/tag/string.html"},{default:e(()=>[Yn]),_:1}),t(),Dn]),n("td",Gn,[s(l,{color:"#15bd66"},{default:e(()=>[t("Easy")]),_:1})])]),n("tr",null,[Jn,n("td",Kn,[n("a",Pn,[t("统计前后缀下标对 II"),s(o)])]),Qn,n("td",Un,[s(a,{to:"/tag/trie.html"},{default:e(()=>[Xn]),_:1}),t(),s(a,{to:"/tag/array.html"},{default:e(()=>[Zn]),_:1}),t(),s(a,{to:"/tag/string.html"},{default:e(()=>[$n]),_:1}),t(),nt]),n("td",tt,[s(l,{color:"#ff334b"},{default:e(()=>[t("Hard")]),_:1})])])])])])}const lt=i(h,[["render",st],["__file","0208.html.vue"]]);export{lt as default};
