import{_ as p,r as c,o as i,c as r,a as n,b as t,d as s,w as e,f as d,e as u}from"./app-r0ql_Osa.js";const k={},h=n("h1",{id:"_211-添加与搜索单词-数据结构设计",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_211-添加与搜索单词-数据结构设计","aria-hidden":"true"},"#"),t(" 211. 添加与搜索单词 - 数据结构设计")],-1),_=n("code",null,"深度优先搜索",-1),m=n("code",null,"设计",-1),f=n("code",null,"字典树",-1),v=n("code",null,"字符串",-1),b={href:"https://leetcode.cn/problems/design-add-and-search-words-data-structure",target:"_blank",rel:"noopener noreferrer"},g=n("code",null,"力扣",-1),y={href:"https://leetcode.com/problems/design-add-and-search-words-data-structure",target:"_blank",rel:"noopener noreferrer"},w=n("code",null,"LeetCode",-1),x=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Design a data structure that supports adding new words and finding if a string matches any previously added string.</p><p>Implement the <code>WordDictionary</code> class:</p><ul><li><code>WordDictionary()</code> Initializes the object.</li><li><code>void addWord(word)</code> Adds <code>word</code> to the data structure, it can be matched later.</li><li><code>bool search(word)</code> Returns <code>true</code> if there is any string in the data structure that matches <code>word</code> or <code>false</code> otherwise. <code>word</code> may contain dots <code>&#39;.&#39;</code> where dots can be matched with any letter.</li></ul><p><strong>Example:</strong></p><blockquote><p><strong>Input</strong></p><p>[&quot;WordDictionary&quot;,&quot;addWord&quot;,&quot;addWord&quot;,&quot;addWord&quot;,&quot;search&quot;,&quot;search&quot;,&quot;search&quot;,&quot;search&quot;]</p><p>[[],[&quot;bad&quot;],[&quot;dad&quot;],[&quot;mad&quot;],[&quot;pad&quot;],[&quot;bad&quot;],[&quot;.ad&quot;],[&quot;b..&quot;]]</p><p><strong>Output</strong></p><p>[null,null,null,null,false,true,true,true]</p><p><strong>Explanation</strong></p><p>WordDictionary wordDictionary = new WordDictionary();</p><p>wordDictionary.addWord(&quot;bad&quot;);</p><p>wordDictionary.addWord(&quot;dad&quot;);</p><p>wordDictionary.addWord(&quot;mad&quot;);</p><p>wordDictionary.search(&quot;pad&quot;); // return False</p><p>wordDictionary.search(&quot;bad&quot;); // return True</p><p>wordDictionary.search(&quot;.ad&quot;); // return True</p><p>wordDictionary.search(&quot;b..&quot;); // return True</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= word.length &lt;= 25</code></li><li><code>word</code> in <code>addWord</code> consists of lowercase English letters.</li><li><code>word</code> in <code>search</code> consist of <code>&#39;.&#39;</code> or lowercase English letters.</li><li>There will be at most <code>2</code> dots in <code>word</code> for <code>search</code> queries.</li><li>At most <code>10^4</code> calls will be made to <code>addWord</code> and <code>search</code>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>请你设计一个数据结构，支持 <strong>添加新单词</strong> 和 <strong>查找字符串是否与任何先前添加的字符串匹配</strong> 。</p><p>实现词典类 <code>WordDictionary</code> ：</p><ul><li><code>WordDictionary()</code> 初始化词典对象</li><li><code>void addWord(word)</code> 将 <code>word</code> 添加到数据结构中，之后可以对它进行匹配</li><li><code>bool search(word)</code> 如果数据结构中存在字符串与 <code>word</code> 匹配，则返回 <code>true</code> ；否则，返回 <code>false</code> 。word 中可能包含一些 &#39;.&#39; ，每个 . 都可以表示任何一个字母。</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>关键点是，搜索可以包含正则表达式中的 <code>.</code>，代表任意一个字符。因此，通常的字符串匹配方式无法直接适用，应该用 <strong>字典树（Trie）</strong> 来设计。</p><ol><li><strong>字典树 (Trie)</strong>：这是一个经典的数据结构，适合用于存储和检索字符串。字典树的每个节点代表一个字符，并且具有一个标记，用来判断是否到达一个完整的单词。</li><li><strong>递归搜索</strong>：在搜索时，如果遇到普通字符，沿着 Trie 进行普通的搜索；如果遇到 <code>.</code>，则需要递归地搜索当前节点的所有子节点，直到找到匹配的字符或最终没有匹配。</li></ol><ul><li><strong><code>addWord</code></strong>：<code>O(m)</code>，其中 <code>m</code> 是插入单词的长度。</li><li><strong><code>search</code></strong>：最坏情况下 <code>O(n)</code>，<code>n</code> 是字典树中所有节点的总数，因为 <code>.</code> 可能会触发对所有路径的遍历。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">WordDictionary</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span>root <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">// 初始化字典树的根节点</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 添加单词到字典树</span>
<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">word</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">void</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token class-name">WordDictionary</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">addWord</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">word</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> node <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>root<span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> char <span class="token keyword">of</span> word<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 如果当前字符不存在，则创建一个新节点</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>node<span class="token punctuation">[</span>char<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			node<span class="token punctuation">[</span>char<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		node <span class="token operator">=</span> node<span class="token punctuation">[</span>char<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 移动到下一个节点</span>
	<span class="token punctuation">}</span>
	node<span class="token punctuation">.</span>isEnd <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span> <span class="token comment">// 单词结束标记</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 搜索单词，支持 . 通配符</span>
<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">word</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
<span class="token class-name">WordDictionary</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">search</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">word</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 定义一个递归搜索函数</span>
	<span class="token keyword">const</span> <span class="token function-variable function">dfs</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">node<span class="token punctuation">,</span> i</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token comment">// 如果到达了单词末尾，检查是否是一个完整的单词</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">==</span> word<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> node<span class="token punctuation">.</span>isEnd <span class="token operator">==</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">const</span> char <span class="token operator">=</span> word<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token comment">// 如果遇到 .，递归地搜索所有子节点</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>char <span class="token operator">===</span> <span class="token string">&#39;.&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> key <span class="token keyword">in</span> node<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token keyword">if</span> <span class="token punctuation">(</span>key <span class="token operator">!==</span> <span class="token string">&#39;isEnd&#39;</span> <span class="token operator">&amp;&amp;</span> <span class="token function">dfs</span><span class="token punctuation">(</span>node<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">,</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
					<span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
			<span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			<span class="token comment">// 如果是普通字符，沿着字典树继续搜索</span>
			<span class="token comment">// 如果路径不存在，返回 false</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>node<span class="token punctuation">[</span>char<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			<span class="token comment">// 否则，继续搜索下一个字符</span>
			<span class="token keyword">return</span> <span class="token function">dfs</span><span class="token punctuation">(</span>node<span class="token punctuation">[</span>char<span class="token punctuation">]</span><span class="token punctuation">,</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>

	<span class="token comment">// 从根节点开始搜索</span>
	<span class="token keyword">return</span> <span class="token function">dfs</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>root<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,19),q=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),W=n("td",{style:{"text-align":"center"}},"208",-1),D=n("td",{style:{"text-align":"left"}},"实现 Trie (前缀树)",-1),E={style:{"text-align":"center"}},T={style:{"text-align":"left"}},j=n("code",null,"设计",-1),I=n("code",null,"字典树",-1),C=n("code",null,"哈希表",-1),L=n("code",null,"1+",-1),N=n("td",{style:{"text-align":"center"}},"🟠",-1),V={style:{"text-align":"center"}},B={href:"https://leetcode.cn/problems/implement-trie-prefix-tree",target:"_blank",rel:"noopener noreferrer"},O={href:"https://leetcode.com/problems/implement-trie-prefix-tree",target:"_blank",rel:"noopener noreferrer"},R=n("td",{style:{"text-align":"center"}},"745",-1),A=n("td",{style:{"text-align":"left"}},"前缀和后缀搜索",-1),z=n("td",{style:{"text-align":"center"}},null,-1),F={style:{"text-align":"left"}},M=n("code",null,"设计",-1),S=n("code",null,"字典树",-1),Y=n("code",null,"数组",-1),G=n("code",null,"2+",-1),H=n("td",{style:{"text-align":"center"}},"🔴",-1),J={style:{"text-align":"center"}},K={href:"https://leetcode.cn/problems/prefix-and-suffix-search",target:"_blank",rel:"noopener noreferrer"},P={href:"https://leetcode.com/problems/prefix-and-suffix-search",target:"_blank",rel:"noopener noreferrer"},Q=n("td",{style:{"text-align":"center"}},"2301",-1),U=n("td",{style:{"text-align":"left"}},"替换字符后匹配",-1),X=n("td",{style:{"text-align":"center"}},null,-1),Z={style:{"text-align":"left"}},$=n("code",null,"数组",-1),nn=n("code",null,"哈希表",-1),tn=n("code",null,"字符串",-1),sn=n("code",null,"1+",-1),en=n("td",{style:{"text-align":"center"}},"🔴",-1),an={style:{"text-align":"center"}},on={href:"https://leetcode.cn/problems/match-substring-after-replacement",target:"_blank",rel:"noopener noreferrer"},cn={href:"https://leetcode.com/problems/match-substring-after-replacement",target:"_blank",rel:"noopener noreferrer"},ln=n("td",{style:{"text-align":"center"}},"2416",-1),pn=n("td",{style:{"text-align":"left"}},"字符串的前缀分数和",-1),rn={style:{"text-align":"center"}},dn={style:{"text-align":"left"}},un=n("code",null,"字典树",-1),kn=n("code",null,"数组",-1),hn=n("code",null,"字符串",-1),_n=n("code",null,"1+",-1),mn=n("td",{style:{"text-align":"center"}},"🔴",-1),fn={style:{"text-align":"center"}},vn={href:"https://leetcode.cn/problems/sum-of-prefix-scores-of-strings",target:"_blank",rel:"noopener noreferrer"},bn={href:"https://leetcode.com/problems/sum-of-prefix-scores-of-strings",target:"_blank",rel:"noopener noreferrer"},gn=n("td",{style:{"text-align":"center"}},"3042",-1),yn=n("td",{style:{"text-align":"left"}},"统计前后缀下标对 I",-1),wn=n("td",{style:{"text-align":"center"}},null,-1),xn={style:{"text-align":"left"}},qn=n("code",null,"字典树",-1),Wn=n("code",null,"数组",-1),Dn=n("code",null,"字符串",-1),En=n("code",null,"3+",-1),Tn=n("td",{style:{"text-align":"center"}},"🟢",-1),jn={style:{"text-align":"center"}},In={href:"https://leetcode.cn/problems/count-prefix-and-suffix-pairs-i",target:"_blank",rel:"noopener noreferrer"},Cn={href:"https://leetcode.com/problems/count-prefix-and-suffix-pairs-i",target:"_blank",rel:"noopener noreferrer"},Ln=n("td",{style:{"text-align":"center"}},"3045",-1),Nn=n("td",{style:{"text-align":"left"}},"统计前后缀下标对 II",-1),Vn=n("td",{style:{"text-align":"center"}},null,-1),Bn={style:{"text-align":"left"}},On=n("code",null,"字典树",-1),Rn=n("code",null,"数组",-1),An=n("code",null,"字符串",-1),zn=n("code",null,"3+",-1),Fn=n("td",{style:{"text-align":"center"}},"🔴",-1),Mn={style:{"text-align":"center"}},Sn={href:"https://leetcode.cn/problems/count-prefix-and-suffix-pairs-ii",target:"_blank",rel:"noopener noreferrer"},Yn={href:"https://leetcode.com/problems/count-prefix-and-suffix-pairs-ii",target:"_blank",rel:"noopener noreferrer"};function Gn(Hn,Jn){const l=c("font"),a=c("RouterLink"),o=c("ExternalLinkIcon");return i(),r("div",null,[h,n("p",null,[t("🟠 "),s(l,{color:"#ffb800"},{default:e(()=>[t("Medium")]),_:1}),t("  🔖  "),s(a,{to:"/tag/depth-first-search.html"},{default:e(()=>[_]),_:1}),t(),s(a,{to:"/tag/design.html"},{default:e(()=>[m]),_:1}),t(),s(a,{to:"/tag/trie.html"},{default:e(()=>[f]),_:1}),t(),s(a,{to:"/tag/string.html"},{default:e(()=>[v]),_:1}),t("  🔗 "),n("a",b,[g,s(o)]),t(),n("a",y,[w,s(o)])]),x,d(" prettier-ignore "),n("table",null,[q,n("tbody",null,[n("tr",null,[W,D,n("td",E,[s(a,{to:"/problem/0208.html"},{default:e(()=>[t("[✓]")]),_:1})]),n("td",T,[s(a,{to:"/tag/design.html"},{default:e(()=>[j]),_:1}),t(),s(a,{to:"/tag/trie.html"},{default:e(()=>[I]),_:1}),t(),s(a,{to:"/tag/hash-table.html"},{default:e(()=>[C]),_:1}),t(),L]),N,n("td",V,[n("a",B,[t("🀄️"),s(o)]),t(),n("a",O,[t("🔗"),s(o)])])]),n("tr",null,[R,A,z,n("td",F,[s(a,{to:"/tag/design.html"},{default:e(()=>[M]),_:1}),t(),s(a,{to:"/tag/trie.html"},{default:e(()=>[S]),_:1}),t(),s(a,{to:"/tag/array.html"},{default:e(()=>[Y]),_:1}),t(),G]),H,n("td",J,[n("a",K,[t("🀄️"),s(o)]),t(),n("a",P,[t("🔗"),s(o)])])]),n("tr",null,[Q,U,X,n("td",Z,[s(a,{to:"/tag/array.html"},{default:e(()=>[$]),_:1}),t(),s(a,{to:"/tag/hash-table.html"},{default:e(()=>[nn]),_:1}),t(),s(a,{to:"/tag/string.html"},{default:e(()=>[tn]),_:1}),t(),sn]),en,n("td",an,[n("a",on,[t("🀄️"),s(o)]),t(),n("a",cn,[t("🔗"),s(o)])])]),n("tr",null,[ln,pn,n("td",rn,[s(a,{to:"/problem/2416.html"},{default:e(()=>[t("[✓]")]),_:1})]),n("td",dn,[s(a,{to:"/tag/trie.html"},{default:e(()=>[un]),_:1}),t(),s(a,{to:"/tag/array.html"},{default:e(()=>[kn]),_:1}),t(),s(a,{to:"/tag/string.html"},{default:e(()=>[hn]),_:1}),t(),_n]),mn,n("td",fn,[n("a",vn,[t("🀄️"),s(o)]),t(),n("a",bn,[t("🔗"),s(o)])])]),n("tr",null,[gn,yn,wn,n("td",xn,[s(a,{to:"/tag/trie.html"},{default:e(()=>[qn]),_:1}),t(),s(a,{to:"/tag/array.html"},{default:e(()=>[Wn]),_:1}),t(),s(a,{to:"/tag/string.html"},{default:e(()=>[Dn]),_:1}),t(),En]),Tn,n("td",jn,[n("a",In,[t("🀄️"),s(o)]),t(),n("a",Cn,[t("🔗"),s(o)])])]),n("tr",null,[Ln,Nn,Vn,n("td",Bn,[s(a,{to:"/tag/trie.html"},{default:e(()=>[On]),_:1}),t(),s(a,{to:"/tag/array.html"},{default:e(()=>[Rn]),_:1}),t(),s(a,{to:"/tag/string.html"},{default:e(()=>[An]),_:1}),t(),zn]),Fn,n("td",Mn,[n("a",Sn,[t("🀄️"),s(o)]),t(),n("a",Yn,[t("🔗"),s(o)])])])])])])}const Pn=p(k,[["render",Gn],["__file","0211.html.vue"]]);export{Pn as default};
