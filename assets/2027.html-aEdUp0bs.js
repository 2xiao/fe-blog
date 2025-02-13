import{_ as l,r as c,o as p,c as i,a as t,b as e,d as n,w as s,f as d,e as u}from"./app-MXSjQbID.js";const h={},g=t("h1",{id:"_2027-转换字符串的最少操作次数",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_2027-转换字符串的最少操作次数","aria-hidden":"true"},"#"),e(" 2027. 转换字符串的最少操作次数")],-1),m=t("code",null,"贪心",-1),_=t("code",null,"字符串",-1),k={href:"https://leetcode.cn/problems/minimum-moves-to-convert-string",target:"_blank",rel:"noopener noreferrer"},v=t("code",null,"力扣",-1),f={href:"https://leetcode.com/problems/minimum-moves-to-convert-string",target:"_blank",rel:"noopener noreferrer"},b=t("code",null,"LeetCode",-1),O=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given a string <code>s</code> consisting of <code>n</code> characters which are either <code>&#39;X&#39;</code> or <code>&#39;O&#39;</code>.</p><p>A <strong>move</strong> is defined as selecting <strong>three</strong> <strong>consecutive characters</strong> of <code>s</code> and converting them to <code>&#39;O&#39;</code>. Note that if a move is applied to the character <code>&#39;O&#39;</code>, it will stay the <strong>same</strong>.</p><p>Return _the <strong>minimum</strong> number of moves required so that all the characters of _<code>s</code> <em>are converted to</em><code>&#39;O&#39;</code>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: s = &quot;XXX&quot;</p><p>Output: 1</p><p>Explanation: <em>XXX</em> -&gt; OOO</p><p>We select all the 3 characters and convert them in one move.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: s = &quot;XXOX&quot;</p><p>Output: 2</p><p>Explanation: <em>XXO</em> X -&gt; O <em>OOX</em> -&gt; OOOO</p><p>We select the first 3 characters in the first move, and convert them to &#39;O&#39;.</p><p>Then we select the last 3 characters and convert them so that the final string contains all &#39;O&#39;s.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: s = &quot;OOOO&quot;</p><p>Output: 0</p><p>Explanation: There are no &#39;X&#39;s in s to convert.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>3 &lt;= s.length &lt;= 1000</code></li><li><code>s[i]</code> is either <code>&#39;X&#39;</code> or <code>&#39;O&#39;</code>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个字符串 <code>s</code> ，由 <code>n</code> 个字符组成，每个字符不是 <code>&#39;X&#39;</code> 就是 <code>&#39;O&#39;</code> 。</p><p>一次<strong>操作</strong> 定义为从 <code>s</code> 中选出 <strong>三个连续字符</strong> 并将选中的每个字符都转换为 <code>&#39;O&#39;</code> 。注意，如果字符已经是 <code>&#39;O&#39;</code> ，只需要保持 <strong>不变</strong> 。</p><p>返回将 <code>s</code> 中所有字符均转换为 <code>&#39;O&#39;</code> 需要执行的 <strong>最少</strong> 操作次数。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> s = &quot;XXX&quot;</p><p><strong>输出：</strong> 1</p><p><strong>解释： <em>XXX</em></strong> -&gt; OOO</p><p>一次操作，选中全部 3 个字符，并将它们转换为 &#39;O&#39; 。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> s = &quot;XXOX&quot;</p><p><strong>输出：</strong> 2</p><p><strong>解释： <em>XXO</em></strong> X -&gt; O <em><strong>OOX</strong></em> -&gt; OOOO</p><p>第一次操作，选择前 3 个字符，并将这些字符转换为 &#39;O&#39; 。</p><p>然后，选中后 3 个字符，并执行转换。最终得到的字符串全由字符 &#39;O&#39; 组成。</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> s = &quot;OOOO&quot;</p><p><strong>输出：</strong> 0</p><p><strong>解释：</strong> s 中不存在需要转换的 &#39;X&#39; 。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>3 &lt;= s.length &lt;= 1000</code></li><li><code>s[i]</code> 为 <code>&#39;X&#39;</code> 或 <code>&#39;O&#39;</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p>初始化变量 <code>moves</code> 表示操作次数为 <code>0</code>。</p></li><li><p>遍历字符串 <code>s</code>：</p><ul><li>遇到 <code>&#39;X&#39;</code> 时，需要一次操作。</li><li>每次操作将当前 <code>&#39;X&#39;</code> 及其后两个字符变成 <code>&#39;O&#39;</code>，因此可以跳过接下来的两个字符（即 <code>i += 2</code>）。</li></ul></li><li><p>遍历结束后，返回所需的操作次数 <code>moves</code>。</p></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><p><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是字符串的长度， 遍历字符串一次。</p></li><li><p><strong>空间复杂度</strong>：<code>O(1)</code>，只使用常量空间。</p></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">s</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">minimumMoves</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> moves <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> s<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token string">&#39;X&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			moves<span class="token operator">++</span><span class="token punctuation">;</span>
			i <span class="token operator">+=</span> <span class="token number">2</span><span class="token punctuation">;</span> <span class="token comment">// 跳过接下来的两个字符</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> moves<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,31),x=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"center"}},"难度"),t("th",{style:{"text-align":"center"}},"力扣")])],-1),X=t("td",{style:{"text-align":"center"}},"2976",-1),y=t("td",{style:{"text-align":"left"}},"转换字符串的最小成本 I",-1),q=t("td",{style:{"text-align":"center"}},null,-1),w={style:{"text-align":"left"}},E=t("code",null,"图",-1),I=t("code",null,"数组",-1),N=t("code",null,"字符串",-1),C=t("code",null,"1+",-1),L=t("td",{style:{"text-align":"center"}},"🟠",-1),V={style:{"text-align":"center"}},j={href:"https://leetcode.cn/problems/minimum-cost-to-convert-string-i",target:"_blank",rel:"noopener noreferrer"},B={href:"https://leetcode.com/problems/minimum-cost-to-convert-string-i",target:"_blank",rel:"noopener noreferrer"},R=t("td",{style:{"text-align":"center"}},"2977",-1),T=t("td",{style:{"text-align":"left"}},"转换字符串的最小成本 II",-1),W=t("td",{style:{"text-align":"center"}},null,-1),A={style:{"text-align":"left"}},M=t("code",null,"图",-1),S=t("code",null,"字典树",-1),Y=t("code",null,"数组",-1),z=t("code",null,"3+",-1),D=t("td",{style:{"text-align":"center"}},"🔴",-1),F={style:{"text-align":"center"}},G={href:"https://leetcode.cn/problems/minimum-cost-to-convert-string-ii",target:"_blank",rel:"noopener noreferrer"},H={href:"https://leetcode.com/problems/minimum-cost-to-convert-string-ii",target:"_blank",rel:"noopener noreferrer"};function J(K,P){const r=c("font"),o=c("RouterLink"),a=c("ExternalLinkIcon");return p(),i("div",null,[g,t("p",null,[e("🟢 "),n(r,{color:"#15bd66"},{default:s(()=>[e("Easy")]),_:1}),e("  🔖  "),n(o,{to:"/tag/greedy.html"},{default:s(()=>[m]),_:1}),e(),n(o,{to:"/tag/string.html"},{default:s(()=>[_]),_:1}),e("  🔗 "),t("a",k,[v,n(a)]),e(),t("a",f,[b,n(a)])]),O,d(" prettier-ignore "),t("table",null,[x,t("tbody",null,[t("tr",null,[X,y,q,t("td",w,[n(o,{to:"/tag/graph.html"},{default:s(()=>[E]),_:1}),e(),n(o,{to:"/tag/array.html"},{default:s(()=>[I]),_:1}),e(),n(o,{to:"/tag/string.html"},{default:s(()=>[N]),_:1}),e(),C]),L,t("td",V,[t("a",j,[e("🀄️"),n(a)]),e(),t("a",B,[e("🔗"),n(a)])])]),t("tr",null,[R,T,W,t("td",A,[n(o,{to:"/tag/graph.html"},{default:s(()=>[M]),_:1}),e(),n(o,{to:"/tag/trie.html"},{default:s(()=>[S]),_:1}),e(),n(o,{to:"/tag/array.html"},{default:s(()=>[Y]),_:1}),e(),z]),D,t("td",F,[t("a",G,[e("🀄️"),n(a)]),e(),t("a",H,[e("🔗"),n(a)])])])])])])}const U=l(h,[["render",J],["__file","2027.html.vue"]]);export{U as default};
