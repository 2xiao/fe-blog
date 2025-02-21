import{_ as r,r as l,o as i,c as p,a as t,b as e,d as n,w as s,f as d,e as u}from"./app-9CeBk-uV.js";const h={},_=t("h1",{id:"_1446-连续字符",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_1446-连续字符","aria-hidden":"true"},"#"),e(" 1446. 连续字符")],-1),g=t("code",null,"字符串",-1),m={href:"https://leetcode.cn/problems/consecutive-characters",target:"_blank",rel:"noopener noreferrer"},k=t("code",null,"力扣",-1),f={href:"https://leetcode.com/problems/consecutive-characters",target:"_blank",rel:"noopener noreferrer"},b=t("code",null,"LeetCode",-1),x=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>The <strong>power</strong> of the string is the maximum length of a non-empty substring that contains only one unique character.</p><p>Given a string <code>s</code>, return <em>the<strong>power</strong> of</em> <code>s</code>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: s = &quot;leetcode&quot;</p><p>Output: 2</p><p>Explanation: The substring &quot;ee&quot; is of length 2 with the character &#39;e&#39; only.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: s = &quot;abbcccddddeeeeedcba&quot;</p><p>Output: 5</p><p>Explanation: The substring &quot;eeeee&quot; is of length 5 with the character &#39;e&#39; only.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= s.length &lt;= 500</code></li><li><code>s</code> consists of only lowercase English letters.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个字符串 <code>s</code> ，字符串的 <strong>「能量」</strong> 定义为：只包含一种字符的最长非空子字符串的长度。</p><p>请你返回字符串 <code>s</code> 的 <strong>能量</strong> 。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> s = &quot;leetcode&quot;</p><p><strong>输出：</strong> 2</p><p><strong>解释：</strong> 子字符串 &quot;ee&quot; 长度为 2 ，只包含字符 &#39;e&#39; 。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> s = &quot;abbcccddddeeeeedcba&quot;</p><p><strong>输出：</strong> 5</p><p><strong>解释：</strong> 子字符串 &quot;eeeee&quot; 长度为 5 ，只包含字符 &#39;e&#39; 。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= s.length &lt;= 500</code></li><li><code>s</code> 只包含小写英文字母。</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>通过一次遍历，记录当前连续字符的长度，并在字符变化时更新最大长度，可以高效解决此问题。</p><ol><li><p><strong>初始化变量</strong>:</p><ul><li><code>power</code>：记录当前连续字符的长度。</li><li><code>prevChar</code>：记录上一个字符，用于判断当前字符是否与上一个字符相同。</li><li><code>maxPower</code>：记录最大连续字符的长度。</li></ul></li><li><p><strong>遍历字符串</strong>:</p><ul><li>如果当前字符和 <code>prevChar</code> 相同，递增 <code>power</code>。</li><li>如果不同，更新 <code>maxPower</code>，重置 <code>power</code> 为 1，并更新 <code>prevChar</code> 为当前字符。</li></ul></li><li><p><strong>遍历结束</strong>:</p><ul><li>遍历完成后，返回 <code>max(maxPower, power)</code>，确保最后一次连续字符长度被正确记录。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>: <code>O(n)</code>，遍历字符串中的每个字符，复杂度为线性。</li><li><strong>空间复杂度</strong>: <code>O(1)</code>，只使用了固定数量的变量，空间复杂度为常数。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">s</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">maxPower</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> power <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
		prevChar <span class="token operator">=</span> s<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> maxPower <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> char <span class="token keyword">of</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>char <span class="token operator">===</span> prevChar<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			power<span class="token operator">++</span><span class="token punctuation">;</span> <span class="token comment">// 连续字符长度增加</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			maxPower <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>maxPower<span class="token punctuation">,</span> power<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 更新最大值</span>
			power <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 重置连续计数</span>
			prevChar <span class="token operator">=</span> char<span class="token punctuation">;</span> <span class="token comment">// 更新当前字符</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>maxPower<span class="token punctuation">,</span> power<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 返回最终最大值</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,26),y=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"center"}},"难度"),t("th",{style:{"text-align":"center"}},"力扣")])],-1),v=t("td",{style:{"text-align":"center"}},"485",-1),w=t("td",{style:{"text-align":"left"}},"最大连续 1 的个数",-1),q={style:{"text-align":"center"}},C={style:{"text-align":"left"}},E=t("code",null,"数组",-1),P=t("td",{style:{"text-align":"center"}},"🟢",-1),L={style:{"text-align":"center"}},N={href:"https://leetcode.cn/problems/max-consecutive-ones",target:"_blank",rel:"noopener noreferrer"},V={href:"https://leetcode.com/problems/max-consecutive-ones",target:"_blank",rel:"noopener noreferrer"},I=t("td",{style:{"text-align":"center"}},"674",-1),O=t("td",{style:{"text-align":"left"}},"最长连续递增序列",-1),T={style:{"text-align":"center"}},j={style:{"text-align":"left"}},B=t("code",null,"数组",-1),M=t("td",{style:{"text-align":"center"}},"🟢",-1),R={style:{"text-align":"center"}},G={href:"https://leetcode.cn/problems/longest-continuous-increasing-subsequence",target:"_blank",rel:"noopener noreferrer"},S={href:"https://leetcode.com/problems/longest-continuous-increasing-subsequence",target:"_blank",rel:"noopener noreferrer"},z=t("td",{style:{"text-align":"center"}},"1759",-1),A=t("td",{style:{"text-align":"left"}},"统计同质子字符串的数目",-1),D=t("td",{style:{"text-align":"center"}},null,-1),F={style:{"text-align":"left"}},H=t("code",null,"数学",-1),J=t("code",null,"字符串",-1),K=t("td",{style:{"text-align":"center"}},"🟠",-1),Q={style:{"text-align":"center"}},U={href:"https://leetcode.cn/problems/count-number-of-homogenous-substrings",target:"_blank",rel:"noopener noreferrer"},W={href:"https://leetcode.com/problems/count-number-of-homogenous-substrings",target:"_blank",rel:"noopener noreferrer"},X=t("td",{style:{"text-align":"center"}},"2213",-1),Y=t("td",{style:{"text-align":"left"}},"由单个字符重复的最长子字符串",-1),Z=t("td",{style:{"text-align":"center"}},null,-1),$={style:{"text-align":"left"}},tt=t("code",null,"线段树",-1),et=t("code",null,"数组",-1),nt=t("code",null,"字符串",-1),st=t("code",null,"1+",-1),ot=t("td",{style:{"text-align":"center"}},"🔴",-1),at={style:{"text-align":"center"}},lt={href:"https://leetcode.cn/problems/longest-substring-of-one-repeating-character",target:"_blank",rel:"noopener noreferrer"},ct={href:"https://leetcode.com/problems/longest-substring-of-one-repeating-character",target:"_blank",rel:"noopener noreferrer"},rt=t("td",{style:{"text-align":"center"}},"2229",-1),it=t("td",{style:{"text-align":"left"}},"检查数组是否连贯 🔒",-1),pt=t("td",{style:{"text-align":"center"}},null,-1),dt={style:{"text-align":"left"}},ut=t("code",null,"数组",-1),ht=t("code",null,"哈希表",-1),_t=t("code",null,"排序",-1),gt=t("td",{style:{"text-align":"center"}},"🟢",-1),mt={style:{"text-align":"center"}},kt={href:"https://leetcode.cn/problems/check-if-an-array-is-consecutive",target:"_blank",rel:"noopener noreferrer"},ft={href:"https://leetcode.com/problems/check-if-an-array-is-consecutive",target:"_blank",rel:"noopener noreferrer"},bt=t("td",{style:{"text-align":"center"}},"3168",-1),xt=t("td",{style:{"text-align":"left"}},"候诊室中的最少椅子数",-1),yt=t("td",{style:{"text-align":"center"}},null,-1),vt={style:{"text-align":"left"}},wt=t("code",null,"字符串",-1),qt=t("code",null,"模拟",-1),Ct=t("td",{style:{"text-align":"center"}},"🟢",-1),Et={style:{"text-align":"center"}},Pt={href:"https://leetcode.cn/problems/minimum-number-of-chairs-in-a-waiting-room",target:"_blank",rel:"noopener noreferrer"},Lt={href:"https://leetcode.com/problems/minimum-number-of-chairs-in-a-waiting-room",target:"_blank",rel:"noopener noreferrer"};function Nt(Vt,It){const c=l("font"),o=l("RouterLink"),a=l("ExternalLinkIcon");return i(),p("div",null,[_,t("p",null,[e("🟢 "),n(c,{color:"#15bd66"},{default:s(()=>[e("Easy")]),_:1}),e("  🔖  "),n(o,{to:"/tag/string.html"},{default:s(()=>[g]),_:1}),e("  🔗 "),t("a",m,[k,n(a)]),e(),t("a",f,[b,n(a)])]),x,d(" prettier-ignore "),t("table",null,[y,t("tbody",null,[t("tr",null,[v,w,t("td",q,[n(o,{to:"/problem/0485.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",C,[n(o,{to:"/tag/array.html"},{default:s(()=>[E]),_:1})]),P,t("td",L,[t("a",N,[e("🀄️"),n(a)]),e(),t("a",V,[e("🔗"),n(a)])])]),t("tr",null,[I,O,t("td",T,[n(o,{to:"/problem/0674.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",j,[n(o,{to:"/tag/array.html"},{default:s(()=>[B]),_:1})]),M,t("td",R,[t("a",G,[e("🀄️"),n(a)]),e(),t("a",S,[e("🔗"),n(a)])])]),t("tr",null,[z,A,D,t("td",F,[n(o,{to:"/tag/math.html"},{default:s(()=>[H]),_:1}),e(),n(o,{to:"/tag/string.html"},{default:s(()=>[J]),_:1})]),K,t("td",Q,[t("a",U,[e("🀄️"),n(a)]),e(),t("a",W,[e("🔗"),n(a)])])]),t("tr",null,[X,Y,Z,t("td",$,[n(o,{to:"/tag/segment-tree.html"},{default:s(()=>[tt]),_:1}),e(),n(o,{to:"/tag/array.html"},{default:s(()=>[et]),_:1}),e(),n(o,{to:"/tag/string.html"},{default:s(()=>[nt]),_:1}),e(),st]),ot,t("td",at,[t("a",lt,[e("🀄️"),n(a)]),e(),t("a",ct,[e("🔗"),n(a)])])]),t("tr",null,[rt,it,pt,t("td",dt,[n(o,{to:"/tag/array.html"},{default:s(()=>[ut]),_:1}),e(),n(o,{to:"/tag/hash-table.html"},{default:s(()=>[ht]),_:1}),e(),n(o,{to:"/tag/sorting.html"},{default:s(()=>[_t]),_:1})]),gt,t("td",mt,[t("a",kt,[e("🀄️"),n(a)]),e(),t("a",ft,[e("🔗"),n(a)])])]),t("tr",null,[bt,xt,yt,t("td",vt,[n(o,{to:"/tag/string.html"},{default:s(()=>[wt]),_:1}),e(),n(o,{to:"/tag/simulation.html"},{default:s(()=>[qt]),_:1})]),Ct,t("td",Et,[t("a",Pt,[e("🀄️"),n(a)]),e(),t("a",Lt,[e("🔗"),n(a)])])])])])])}const Tt=r(h,[["render",Nt],["__file","1446.html.vue"]]);export{Tt as default};
