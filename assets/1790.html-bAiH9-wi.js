import{_ as p,r as l,o as r,c as i,a as n,b as t,d as s,w as e,f as u,e as d}from"./app-3dvbhwow.js";const h={},k=n("h1",{id:"_1790-仅执行一次字符串交换能否使两个字符串相等",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1790-仅执行一次字符串交换能否使两个字符串相等","aria-hidden":"true"},"#"),t(" 1790. 仅执行一次字符串交换能否使两个字符串相等")],-1),g=n("code",null,"哈希表",-1),_=n("code",null,"字符串",-1),m=n("code",null,"计数",-1),b={href:"https://leetcode.cn/problems/check-if-one-string-swap-can-make-strings-equal",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"力扣",-1),q={href:"https://leetcode.com/problems/check-if-one-string-swap-can-make-strings-equal",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"LeetCode",-1),y=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given two strings <code>s1</code> and <code>s2</code> of equal length. A <strong>string swap</strong> is an operation where you choose two indices in a string (not necessarily different) and swap the characters at these indices.</p><p>Return <code>true</code> <em>if it is possible to make both strings equal by performing <strong>at most one string swap</strong> on <strong>exactly one</strong> of the strings.</em> Otherwise, return <code>false</code>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: s1 = &quot;bank&quot;, s2 = &quot;kanb&quot;</p><p>Output: true</p><p>Explanation: For example, swap the first character with the last character of s2 to make &quot;bank&quot;.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: s1 = &quot;attack&quot;, s2 = &quot;defend&quot;</p><p>Output: false</p><p>Explanation: It is impossible to make them equal with one string swap.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: s1 = &quot;kelb&quot;, s2 = &quot;kelb&quot;</p><p>Output: true</p><p>Explanation: The two strings are already equal, so no string swap operation is required.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= s1.length, s2.length &lt;= 100</code></li><li><code>s1.length == s2.length</code></li><li><code>s1</code> and <code>s2</code> consist of only lowercase English letters.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你长度相等的两个字符串 <code>s1</code> 和 <code>s2</code> 。一次<strong>字符串交换</strong> 操作的步骤如下：选出某个字符串中的两个下标（不必不同），并交换这两个下标所对应的字符。</p><p>如果对 <strong>其中一个字符串</strong> 执行 <strong>最多一次字符串交换</strong> 就可以使两个字符串相等，返回 <code>true</code> ；否则，返回 <code>false</code> 。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> s1 = &quot;bank&quot;, s2 = &quot;kanb&quot;</p><p><strong>输出：</strong> true</p><p><strong>解释：</strong> 例如，交换 s2 中的第一个和最后一个字符可以得到 &quot;bank&quot;</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> s1 = &quot;attack&quot;, s2 = &quot;defend&quot;</p><p><strong>输出：</strong> false</p><p><strong>解释：</strong> 一次字符串交换无法使两个字符串相等</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> s1 = &quot;kelb&quot;, s2 = &quot;kelb&quot;</p><p><strong>输出：</strong> true</p><p><strong>解释：</strong> 两个字符串已经相等，所以不需要进行字符串交换</p></blockquote><p><strong>示例 4：</strong></p><blockquote><p><strong>输入：</strong> s1 = &quot;abcd&quot;, s2 = &quot;dcba&quot;</p><p><strong>输出：</strong> false</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= s1.length, s2.length &lt;= 100</code></li><li><code>s1.length == s2.length</code></li><li><code>s1</code> 和 <code>s2</code> 仅由小写英文字母组成</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>相等情况判断</strong>：</p><ul><li>首先检查 <code>s1</code> 和 <code>s2</code> 是否相等。如果相等，直接返回 <code>true</code>，因为没有任何交换需要进行。</li></ul></li><li><p><strong>找出不同的字符</strong>：</p><ul><li>遍历两个字符串 <code>s1</code> 和 <code>s2</code>，记录下它们不相等的字符。将这两个字符串不同的位置的字符依次加入 <code>res</code> 数组中。</li></ul></li><li><p><strong>检查交换条件</strong>：</p><ul><li>如果不同的字符的数量是 4（意味着有两个字符的交换），则需要检查： <ul><li><code>res[0] == res[3]</code>：即 <code>s1</code> 中不相等的字符和 <code>s2</code> 中交换的位置的字符是否相等。</li><li><code>res[1] == res[2]</code>：即 <code>s1</code> 中不相等的字符和 <code>s2</code> 中交换的位置的字符是否相等。</li></ul></li><li>如果这两个条件都满足，则返回 <code>true</code>，表示通过一次交换可以使 <code>s1</code> 和 <code>s2</code> 相等。</li></ul></li><li><p><strong>返回结果</strong>：</p><ul><li>如果以上条件不满足，则返回 <code>false</code>。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是字符串的长度，遍历了字符串 <code>s1</code> 和 <code>s2</code> 一次。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，使用了一个 <code>res</code> 数组来存储不同的字符，长度最长为 <code>4</code>。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">s1</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">s2</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">areAlmostEqual</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s1<span class="token punctuation">,</span> s2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>s1 <span class="token operator">==</span> s2<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> s2<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>s1<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">!==</span> s2<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> res<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>s1<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>s2<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> res<span class="token punctuation">.</span>length <span class="token operator">==</span> <span class="token number">4</span> <span class="token operator">&amp;&amp;</span> res<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">==</span> res<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> res<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">==</span> res<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,31),v=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),w=n("td",{style:{"text-align":"center"}},"859",-1),E=n("td",{style:{"text-align":"left"}},"亲密字符串",-1),I={style:{"text-align":"center"}},O={style:{"text-align":"left"}},C=n("code",null,"哈希表",-1),L=n("code",null,"字符串",-1),N=n("td",{style:{"text-align":"center"}},"🟢",-1),V={style:{"text-align":"center"}},j={href:"https://leetcode.cn/problems/buddy-strings",target:"_blank",rel:"noopener noreferrer"},B={href:"https://leetcode.com/problems/buddy-strings",target:"_blank",rel:"noopener noreferrer"},R=n("td",{style:{"text-align":"center"}},"2531",-1),A=n("td",{style:{"text-align":"left"}},"使字符串中不同字符的数目相等",-1),T=n("td",{style:{"text-align":"center"}},null,-1),F={style:{"text-align":"left"}},S=n("code",null,"哈希表",-1),Y=n("code",null,"字符串",-1),z=n("code",null,"计数",-1),D=n("td",{style:{"text-align":"center"}},"🟠",-1),G={style:{"text-align":"center"}},H={href:"https://leetcode.cn/problems/make-number-of-distinct-characters-equal",target:"_blank",rel:"noopener noreferrer"},J={href:"https://leetcode.com/problems/make-number-of-distinct-characters-equal",target:"_blank",rel:"noopener noreferrer"},K=n("td",{style:{"text-align":"center"}},"3265",-1),M=n("td",{style:{"text-align":"left"}},"统计近似相等数对 I",-1),P=n("td",{style:{"text-align":"center"}},null,-1),Q={style:{"text-align":"left"}},U=n("code",null,"数组",-1),W=n("code",null,"哈希表",-1),X=n("code",null,"计数",-1),Z=n("code",null,"2+",-1),$=n("td",{style:{"text-align":"center"}},"🟠",-1),nn={style:{"text-align":"center"}},tn={href:"https://leetcode.cn/problems/count-almost-equal-pairs-i",target:"_blank",rel:"noopener noreferrer"},sn={href:"https://leetcode.com/problems/count-almost-equal-pairs-i",target:"_blank",rel:"noopener noreferrer"};function en(an,on){const c=l("font"),a=l("RouterLink"),o=l("ExternalLinkIcon");return r(),i("div",null,[k,n("p",null,[t("🟢 "),s(c,{color:"#15bd66"},{default:e(()=>[t("Easy")]),_:1}),t("  🔖  "),s(a,{to:"/tag/hash-table.html"},{default:e(()=>[g]),_:1}),t(),s(a,{to:"/tag/string.html"},{default:e(()=>[_]),_:1}),t(),s(a,{to:"/tag/counting.html"},{default:e(()=>[m]),_:1}),t("  🔗 "),n("a",b,[f,s(o)]),t(),n("a",q,[x,s(o)])]),y,u(" prettier-ignore "),n("table",null,[v,n("tbody",null,[n("tr",null,[w,E,n("td",I,[s(a,{to:"/problem/0859.html"},{default:e(()=>[t("[✓]")]),_:1})]),n("td",O,[s(a,{to:"/tag/hash-table.html"},{default:e(()=>[C]),_:1}),t(),s(a,{to:"/tag/string.html"},{default:e(()=>[L]),_:1})]),N,n("td",V,[n("a",j,[t("🀄️"),s(o)]),t(),n("a",B,[t("🔗"),s(o)])])]),n("tr",null,[R,A,T,n("td",F,[s(a,{to:"/tag/hash-table.html"},{default:e(()=>[S]),_:1}),t(),s(a,{to:"/tag/string.html"},{default:e(()=>[Y]),_:1}),t(),s(a,{to:"/tag/counting.html"},{default:e(()=>[z]),_:1})]),D,n("td",G,[n("a",H,[t("🀄️"),s(o)]),t(),n("a",J,[t("🔗"),s(o)])])]),n("tr",null,[K,M,P,n("td",Q,[s(a,{to:"/tag/array.html"},{default:e(()=>[U]),_:1}),t(),s(a,{to:"/tag/hash-table.html"},{default:e(()=>[W]),_:1}),t(),s(a,{to:"/tag/counting.html"},{default:e(()=>[X]),_:1}),t(),Z]),$,n("td",nn,[n("a",tn,[t("🀄️"),s(o)]),t(),n("a",sn,[t("🔗"),s(o)])])])])])])}const cn=p(h,[["render",en],["__file","1790.html.vue"]]);export{cn as default};
