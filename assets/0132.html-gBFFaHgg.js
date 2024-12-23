import{_ as c,r as p,o as i,c as r,a as n,b as s,d as t,w as a,f as d,e as u}from"./app-Kkp_66uf.js";const k={},m=n("h1",{id:"_132-分割回文串-ii",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_132-分割回文串-ii","aria-hidden":"true"},"#"),s(" 132. 分割回文串 II")],-1),h=n("code",null,"字符串",-1),g=n("code",null,"动态规划",-1),_={href:"https://leetcode.cn/problems/palindrome-partitioning-ii",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"力扣",-1),f={href:"https://leetcode.com/problems/palindrome-partitioning-ii",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"LeetCode",-1),y=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given a string <code>s</code>, partition <code>s</code> such that every substring of the partition is a palindrome.</p><p>Return <em>the <strong>minimum</strong> cuts needed for a palindrome partitioning of</em> <code>s</code>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: s = &quot;aab&quot;</p><p>Output: 1</p><p>Explanation: The palindrome partitioning [&quot;aa&quot;,&quot;b&quot;] could be produced using 1 cut.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: s = &quot;a&quot;</p><p>Output: 0</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: s = &quot;ab&quot;</p><p>Output: 1</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= s.length &lt;= 2000</code></li><li><code>s</code> consists of lowercase English letters only.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个字符串 <code>s</code>，请你将 <code>s</code> 分割成一些子串，使每个子串都是回文串。</p><p>返回符合要求的 <strong>最少分割次数</strong> 。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> s = &quot;aab&quot;</p><p><strong>输出：</strong> 1</p><p><strong>解释：</strong> 只需一次分割就可将 <em>s</em> 分割成 [&quot;aa&quot;,&quot;b&quot;] 这样两个回文子串。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> s = &quot;a&quot;</p><p><strong>输出：</strong> 0</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> s = &quot;ab&quot;</p><p><strong>输出：</strong> 1</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= s.length &lt;= 2000</code></li><li><code>s</code> 仅由小写英文字母组成</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>状态定义：</strong></p><ul><li>用数组 <code>dp[i]</code> 表示从字符串开头到索引 <code>i-1</code> 的最小切割次数。</li></ul></li><li><p><strong>转移方程：</strong></p><ul><li>如果某一段子串 <code>s[left:right]</code> 是回文，那么我们可以尝试在该回文结束处更新 <code>dp[right]</code>：</li><li><code>dp[right] = min(dp[right], dp[left] + 1)</code></li><li><code>dp[left]</code> 表示在 <code>left-1</code> 位置的最小切割数，加 1 表示将当前回文子串分割出来。</li></ul></li><li><p><strong>中心扩展判断回文：</strong></p><ul><li>使用中心扩展法，同时寻找<strong>奇数长度</strong>和<strong>偶数长度</strong>的回文子串。</li><li>对每个中心位置 <code>i</code>： <ul><li>奇数长度回文：<code>s[i-j] == s[i+j]</code>。</li><li>偶数长度回文：<code>s[i-j+1] == s[i+j]</code>。</li></ul></li></ul></li><li><p><strong>最终答案：</strong></p><ul><li><code>dp[n]</code> 即整个字符串的最小切割次数。</li></ul></li></ol><p>具体算法如下：</p><ol><li>初始化 <code>dp</code> 数组，<code>dp[i]</code> 的初始值为 <code>i - 1</code>，表示最坏情况下的切割数（每个字符都单独成为一个回文子串）。</li><li>遍历每个字符位置 <code>i</code> 作为中心，分别扩展寻找奇数长度和偶数长度的回文子串。</li><li>在扩展过程中，更新 <code>dp</code> 值，记录当前回文子串结束位置的最小切割数。</li><li>返回 <code>dp[n]</code>，即整个字符串的最小切割数。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n^2)</code>，中心扩展法需要遍历 <code>n</code> 个字符，并向两侧扩展判断回文，最坏情况下每个字符需要扩展 <code>O(n)</code> 次。</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，动态规划数组 <code>dp</code> 需要 <code>O(n)</code> 空间。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">s</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">minCut</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> n <span class="token operator">=</span> s<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
	<span class="token comment">// 初始化 dp 数组，dp[i] 表示 s[0:i-1] 的最小切割次数</span>
	<span class="token keyword">let</span> dp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>n <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">_<span class="token punctuation">,</span> i</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">// 遍历每个中心位置 i</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 处理奇数长度回文</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">-</span> j <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> i <span class="token operator">+</span> j <span class="token operator">&lt;</span> n <span class="token operator">&amp;&amp;</span> s<span class="token punctuation">[</span>i <span class="token operator">-</span> j<span class="token punctuation">]</span> <span class="token operator">===</span> s<span class="token punctuation">[</span>i <span class="token operator">+</span> j<span class="token punctuation">]</span><span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			dp<span class="token punctuation">[</span>i <span class="token operator">+</span> j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>dp<span class="token punctuation">[</span>i <span class="token operator">+</span> j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> dp<span class="token punctuation">[</span>i <span class="token operator">-</span> j<span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>

		<span class="token comment">// 处理偶数长度回文</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span>
			<span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
			i <span class="token operator">-</span> j <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> i <span class="token operator">+</span> j <span class="token operator">&lt;</span> n <span class="token operator">&amp;&amp;</span> s<span class="token punctuation">[</span>i <span class="token operator">-</span> j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">===</span> s<span class="token punctuation">[</span>i <span class="token operator">+</span> j<span class="token punctuation">]</span><span class="token punctuation">;</span>
			j<span class="token operator">++</span>
		<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			dp<span class="token punctuation">[</span>i <span class="token operator">+</span> j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>dp<span class="token punctuation">[</span>i <span class="token operator">+</span> j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> dp<span class="token punctuation">[</span>i <span class="token operator">-</span> j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 返回整个字符串的最小切割次数</span>
	<span class="token keyword">return</span> dp<span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,31),x=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),q=n("td",{style:{"text-align":"center"}},"131",-1),j=n("td",{style:{"text-align":"left"}},"分割回文串",-1),w={style:{"text-align":"center"}},E={style:{"text-align":"left"}},I=n("code",null,"字符串",-1),O=n("code",null,"动态规划",-1),C=n("code",null,"回溯",-1),V=n("td",{style:{"text-align":"center"}},"🟠",-1),L={style:{"text-align":"center"}},N={href:"https://leetcode.cn/problems/palindrome-partitioning",target:"_blank",rel:"noopener noreferrer"},B={href:"https://leetcode.com/problems/palindrome-partitioning",target:"_blank",rel:"noopener noreferrer"},R=n("td",{style:{"text-align":"center"}},"1745",-1),M=n("td",{style:{"text-align":"left"}},"分割回文串 IV",-1),T=n("td",{style:{"text-align":"center"}},null,-1),A={style:{"text-align":"left"}},G=n("code",null,"字符串",-1),H=n("code",null,"动态规划",-1),S=n("td",{style:{"text-align":"center"}},"🔴",-1),z={style:{"text-align":"center"}},D={href:"https://leetcode.cn/problems/palindrome-partitioning-iv",target:"_blank",rel:"noopener noreferrer"},F={href:"https://leetcode.com/problems/palindrome-partitioning-iv",target:"_blank",rel:"noopener noreferrer"},J=n("td",{style:{"text-align":"center"}},"2472",-1),K=n("td",{style:{"text-align":"left"}},"不重叠回文子字符串的最大数目",-1),P=n("td",{style:{"text-align":"center"}},null,-1),Q={style:{"text-align":"left"}},U=n("code",null,"贪心",-1),W=n("code",null,"双指针",-1),X=n("code",null,"字符串",-1),Y=n("code",null,"1+",-1),Z=n("td",{style:{"text-align":"center"}},"🔴",-1),$={style:{"text-align":"center"}},nn={href:"https://leetcode.cn/problems/maximum-number-of-non-overlapping-palindrome-substrings",target:"_blank",rel:"noopener noreferrer"},sn={href:"https://leetcode.com/problems/maximum-number-of-non-overlapping-palindrome-substrings",target:"_blank",rel:"noopener noreferrer"},tn=n("td",{style:{"text-align":"center"}},"2518",-1),an=n("td",{style:{"text-align":"left"}},"好分区的数目",-1),en=n("td",{style:{"text-align":"center"}},null,-1),on={style:{"text-align":"left"}},pn=n("code",null,"数组",-1),ln=n("code",null,"动态规划",-1),cn=n("td",{style:{"text-align":"center"}},"🔴",-1),rn={style:{"text-align":"center"}},dn={href:"https://leetcode.cn/problems/number-of-great-partitions",target:"_blank",rel:"noopener noreferrer"},un={href:"https://leetcode.com/problems/number-of-great-partitions",target:"_blank",rel:"noopener noreferrer"};function kn(mn,hn){const l=p("font"),e=p("RouterLink"),o=p("ExternalLinkIcon");return i(),r("div",null,[m,n("p",null,[s("🔴 "),t(l,{color:"#ff334b"},{default:a(()=>[s("Hard")]),_:1}),s("  🔖  "),t(e,{to:"/tag/string.html"},{default:a(()=>[h]),_:1}),s(),t(e,{to:"/tag/dynamic-programming.html"},{default:a(()=>[g]),_:1}),s("  🔗 "),n("a",_,[b,t(o)]),s(),n("a",f,[v,t(o)])]),y,d(" prettier-ignore "),n("table",null,[x,n("tbody",null,[n("tr",null,[q,j,n("td",w,[t(e,{to:"/problem/0131.html"},{default:a(()=>[s("[✓]")]),_:1})]),n("td",E,[t(e,{to:"/tag/string.html"},{default:a(()=>[I]),_:1}),s(),t(e,{to:"/tag/dynamic-programming.html"},{default:a(()=>[O]),_:1}),s(),t(e,{to:"/tag/backtracking.html"},{default:a(()=>[C]),_:1})]),V,n("td",L,[n("a",N,[s("🀄️"),t(o)]),s(),n("a",B,[s("🔗"),t(o)])])]),n("tr",null,[R,M,T,n("td",A,[t(e,{to:"/tag/string.html"},{default:a(()=>[G]),_:1}),s(),t(e,{to:"/tag/dynamic-programming.html"},{default:a(()=>[H]),_:1})]),S,n("td",z,[n("a",D,[s("🀄️"),t(o)]),s(),n("a",F,[s("🔗"),t(o)])])]),n("tr",null,[J,K,P,n("td",Q,[t(e,{to:"/tag/greedy.html"},{default:a(()=>[U]),_:1}),s(),t(e,{to:"/tag/two-pointers.html"},{default:a(()=>[W]),_:1}),s(),t(e,{to:"/tag/string.html"},{default:a(()=>[X]),_:1}),s(),Y]),Z,n("td",$,[n("a",nn,[s("🀄️"),t(o)]),s(),n("a",sn,[s("🔗"),t(o)])])]),n("tr",null,[tn,an,en,n("td",on,[t(e,{to:"/tag/array.html"},{default:a(()=>[pn]),_:1}),s(),t(e,{to:"/tag/dynamic-programming.html"},{default:a(()=>[ln]),_:1})]),cn,n("td",rn,[n("a",dn,[s("🀄️"),t(o)]),s(),n("a",un,[s("🔗"),t(o)])])])])])])}const _n=c(k,[["render",kn],["__file","0132.html.vue"]]);export{_n as default};
