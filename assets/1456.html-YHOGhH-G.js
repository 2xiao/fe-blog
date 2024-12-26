import{_ as p,r as c,o as i,c as r,a as n,b as t,d as s,w as e,f as u,e as d}from"./app-3dvbhwow.js";const k={},g=n("h1",{id:"_1456-定长子串中元音的最大数目",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1456-定长子串中元音的最大数目","aria-hidden":"true"},"#"),t(" 1456. 定长子串中元音的最大数目")],-1),h=n("code",null,"字符串",-1),m=n("code",null,"滑动窗口",-1),_={href:"https://leetcode.cn/problems/maximum-number-of-vowels-in-a-substring-of-given-length",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"力扣",-1),f={href:"https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"LeetCode",-1),x=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given a string <code>s</code> and an integer <code>k</code>, return <em>the maximum number of vowel letters in any substring of</em><code>s</code> <em>with length</em><code>k</code>.</p><p><strong>Vowel letters</strong> in English are <code>&#39;a&#39;</code>, <code>&#39;e&#39;</code>, <code>&#39;i&#39;</code>, <code>&#39;o&#39;</code>, and <code>&#39;u&#39;</code>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: s = &quot;abciiidef&quot;, k = 3</p><p>Output: 3</p><p>Explanation: The substring &quot;iii&quot; contains 3 vowel letters.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: s = &quot;aeiou&quot;, k = 2</p><p>Output: 2</p><p>Explanation: Any substring of length 2 contains 2 vowels.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: s = &quot;leetcode&quot;, k = 3</p><p>Output: 2</p><p>Explanation: &quot;lee&quot;, &quot;eet&quot; and &quot;ode&quot; contain 2 vowels.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= s.length &lt;= 10^5</code></li><li><code>s</code> consists of lowercase English letters.</li><li><code>1 &lt;= k &lt;= s.length</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你字符串 <code>s</code> 和整数 <code>k</code> 。</p><p>请返回字符串 <code>s</code> 中长度为 <code>k</code> 的单个子字符串中可能包含的最大元音字母数。</p><p>英文中的 <strong>元音字母</strong> 为（<code>a</code>, <code>e</code>, <code>i</code>, <code>o</code>, <code>u</code>）。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> s = &quot;abciiidef&quot;, k = 3</p><p><strong>输出：</strong> 3</p><p><strong>解释：</strong> 子字符串 &quot;iii&quot; 包含 3 个元音字母。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> s = &quot;aeiou&quot;, k = 2</p><p><strong>输出：</strong> 2</p><p><strong>解释：</strong> 任意长度为 2 的子字符串都包含 2 个元音字母。</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> s = &quot;leetcode&quot;, k = 3</p><p><strong>输出：</strong> 2</p><p><strong>解释：</strong> &quot;lee&quot;、&quot;eet&quot; 和 &quot;ode&quot; 都包含 2 个元音字母。</p></blockquote><p><strong>示例 4：</strong></p><blockquote><p><strong>输入：</strong> s = &quot;rhythms&quot;, k = 4</p><p><strong>输出：</strong> 0</p><p><strong>解释：</strong> 字符串 s 中不含任何元音字母。</p></blockquote><p><strong>示例 5：</strong></p><blockquote><p><strong>输入：</strong> s = &quot;tryhard&quot;, k = 4</p><p><strong>输出：</strong> 1</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= s.length &lt;= 10^5</code></li><li><code>s</code> 由小写英文字母组成</li><li><code>1 &lt;= k &lt;= s.length</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><strong>定义元音判断函数</strong>：使用 <code>isVowel</code> 函数检查字符是否为元音；</li><li><strong>初始化计数</strong>：设置当前元音计数 <code>count</code> 和最大元音计数 <code>max</code>；</li><li><strong>滑动窗口</strong>： <ul><li>使用滑动窗口来维护当前窗口内的元音字母计数；</li><li>窗口大小固定为 <code>k</code>，在遍历字符串时，动态更新窗口内的元音计数 <code>count</code>；</li><li>在每次迭代中，如果当前字符是元音，则增加计数；</li><li>当索引 <code>i</code> 大于等于 <code>k</code> 时，减去窗口左侧的字符（即 <code>s[i - k]</code>）的元音计数，以保持窗口的大小；</li></ul></li><li><strong>更新最大计数</strong>：在当前索引 <code>i</code> 大于 <code>k - 1</code> 时，检查并更新最大元音计数 <code>max</code>。</li><li><strong>返回结果</strong>：最终返回找到的最大元音计数；</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是字符串的长度，只需遍历字符串一次。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，只使用常量空间来存储计数和最大值。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">s</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">k</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">maxVowels</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s<span class="token punctuation">,</span> k</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> <span class="token function-variable function">isVowel</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">char</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token string">&#39;aeiou&#39;</span><span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>char<span class="token punctuation">)</span> <span class="token operator">!==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>

	<span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
		max <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> s<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isVowel</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			count<span class="token operator">++</span><span class="token punctuation">;</span> <span class="token comment">// 增加当前字符的元音计数</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&gt;=</span> k <span class="token operator">&amp;&amp;</span> <span class="token function">isVowel</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span>i <span class="token operator">-</span> k<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			count<span class="token operator">--</span><span class="token punctuation">;</span> <span class="token comment">// 移除窗口左侧字符的元音计数</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&gt;=</span> k <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			max <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>max<span class="token punctuation">,</span> count<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 更新最大元音计数</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> max<span class="token punctuation">;</span> <span class="token comment">// 返回最大元音计数</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,34),q=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),y=n("td",{style:{"text-align":"center"}},"2271",-1),w=n("td",{style:{"text-align":"left"}},"毯子覆盖的最多白色砖块数",-1),E=n("td",{style:{"text-align":"center"}},null,-1),V={style:{"text-align":"left"}},O=n("code",null,"贪心",-1),C=n("code",null,"数组",-1),I=n("code",null,"二分查找",-1),L=n("code",null,"2+",-1),N=n("td",{style:{"text-align":"center"}},"🟠",-1),j={style:{"text-align":"center"}},B={href:"https://leetcode.cn/problems/maximum-white-tiles-covered-by-a-carpet",target:"_blank",rel:"noopener noreferrer"},M={href:"https://leetcode.com/problems/maximum-white-tiles-covered-by-a-carpet",target:"_blank",rel:"noopener noreferrer"},R=n("td",{style:{"text-align":"center"}},"2379",-1),T=n("td",{style:{"text-align":"left"}},"得到 K 个黑块的最少涂色次数",-1),A=n("td",{style:{"text-align":"center"}},null,-1),G={style:{"text-align":"left"}},K=n("code",null,"字符串",-1),S=n("code",null,"滑动窗口",-1),z=n("td",{style:{"text-align":"center"}},"🟢",-1),D={style:{"text-align":"center"}},F={href:"https://leetcode.cn/problems/minimum-recolors-to-get-k-consecutive-black-blocks",target:"_blank",rel:"noopener noreferrer"},H={href:"https://leetcode.com/problems/minimum-recolors-to-get-k-consecutive-black-blocks",target:"_blank",rel:"noopener noreferrer"},J=n("td",{style:{"text-align":"center"}},"2414",-1),P=n("td",{style:{"text-align":"left"}},"最长的字母序连续子字符串的长度",-1),Q=n("td",{style:{"text-align":"center"}},null,-1),U={style:{"text-align":"left"}},W=n("code",null,"字符串",-1),X=n("td",{style:{"text-align":"center"}},"🟠",-1),Y={style:{"text-align":"center"}},Z={href:"https://leetcode.cn/problems/length-of-the-longest-alphabetical-continuous-substring",target:"_blank",rel:"noopener noreferrer"},$={href:"https://leetcode.com/problems/length-of-the-longest-alphabetical-continuous-substring",target:"_blank",rel:"noopener noreferrer"};function nn(tn,sn){const l=c("font"),o=c("RouterLink"),a=c("ExternalLinkIcon");return i(),r("div",null,[g,n("p",null,[t("🟠 "),s(l,{color:"#ffb800"},{default:e(()=>[t("Medium")]),_:1}),t("  🔖  "),s(o,{to:"/tag/string.html"},{default:e(()=>[h]),_:1}),t(),s(o,{to:"/tag/sliding-window.html"},{default:e(()=>[m]),_:1}),t("  🔗 "),n("a",_,[b,s(a)]),t(),n("a",f,[v,s(a)])]),x,u(" prettier-ignore "),n("table",null,[q,n("tbody",null,[n("tr",null,[y,w,E,n("td",V,[s(o,{to:"/tag/greedy.html"},{default:e(()=>[O]),_:1}),t(),s(o,{to:"/tag/array.html"},{default:e(()=>[C]),_:1}),t(),s(o,{to:"/tag/binary-search.html"},{default:e(()=>[I]),_:1}),t(),L]),N,n("td",j,[n("a",B,[t("🀄️"),s(a)]),t(),n("a",M,[t("🔗"),s(a)])])]),n("tr",null,[R,T,A,n("td",G,[s(o,{to:"/tag/string.html"},{default:e(()=>[K]),_:1}),t(),s(o,{to:"/tag/sliding-window.html"},{default:e(()=>[S]),_:1})]),z,n("td",D,[n("a",F,[t("🀄️"),s(a)]),t(),n("a",H,[t("🔗"),s(a)])])]),n("tr",null,[J,P,Q,n("td",U,[s(o,{to:"/tag/string.html"},{default:e(()=>[W]),_:1})]),X,n("td",Y,[n("a",Z,[t("🀄️"),s(a)]),t(),n("a",$,[t("🔗"),s(a)])])])])])])}const on=p(k,[["render",nn],["__file","1456.html.vue"]]);export{on as default};
