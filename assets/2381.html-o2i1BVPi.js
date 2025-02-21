import{_ as i,r as l,o as p,c as r,a as t,b as n,d as s,w as e,f as d,e as u}from"./app-9CeBk-uV.js";const h={},k=t("h1",{id:"_2381-字母移位-ii",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_2381-字母移位-ii","aria-hidden":"true"},"#"),n(" 2381. 字母移位 II")],-1),_=t("code",null,"数组",-1),f=t("code",null,"字符串",-1),g=t("code",null,"前缀和",-1),m={href:"https://leetcode.cn/problems/shifting-letters-ii",target:"_blank",rel:"noopener noreferrer"},b=t("code",null,"力扣",-1),y={href:"https://leetcode.com/problems/shifting-letters-ii",target:"_blank",rel:"noopener noreferrer"},x=t("code",null,"LeetCode",-1),v=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given a string <code>s</code> of lowercase English letters and a 2D integer array <code>shifts</code> where <code>shifts[i] = [starti, endi, directioni]</code>. For every <code>i</code>, <strong>shift</strong> the characters in <code>s</code> from the index <code>starti</code> to the index <code>endi</code> (<strong>inclusive</strong>) forward if <code>directioni = 1</code>, or shift the characters backward if <code>directioni = 0</code>.</p><p>Shifting a character <strong>forward</strong> means replacing it with the <strong>next</strong> letter in the alphabet (wrapping around so that <code>&#39;z&#39;</code> becomes <code>&#39;a&#39;</code>). Similarly, shifting a character <strong>backward</strong> means replacing it with the <strong>previous</strong> letter in the alphabet (wrapping around so that <code>&#39;a&#39;</code> becomes <code>&#39;z&#39;</code>).</p><p>Return <em>the final string after all such shifts to</em><code>s</code> <em>are applied</em>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: s = &quot;abc&quot;, shifts = [[0,1,0],[1,2,1],[0,2,1]]</p><p>Output: &quot;ace&quot;</p><p>Explanation: Firstly, shift the characters from index 0 to index 1 backward. Now s = &quot;zac&quot;.</p><p>Secondly, shift the characters from index 1 to index 2 forward. Now s = &quot;zbd&quot;.</p><p>Finally, shift the characters from index 0 to index 2 forward. Now s = &quot;ace&quot;.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: s = &quot;dztz&quot;, shifts = [[0,0,0],[1,1,1]]</p><p>Output: &quot;catz&quot;</p><p>Explanation: Firstly, shift the characters from index 0 to index 0 backward. Now s = &quot;cztz&quot;.</p><p>Finally, shift the characters from index 1 to index 1 forward. Now s = &quot;catz&quot;.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= s.length, shifts.length &lt;= 5 * 10^4</code></li><li><code>shifts[i].length == 3</code></li><li><code>0 &lt;= starti &lt;= endi &lt; s.length</code></li><li><code>0 &lt;= directioni &lt;= 1</code></li><li><code>s</code> consists of lowercase English letters.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个小写英文字母组成的字符串 <code>s</code> 和一个二维整数数组 <code>shifts</code> ，其中 <code>shifts[i] = [starti, endi, directioni]</code> 。对于每个 <code>i</code> ，将 <code>s</code> 中从下标 <code>starti</code> 到下标 <code>endi</code> （两者都包含）所有字符都进行移位运算，如果 <code>directioni = 1</code> 将字符向后移位，如果 <code>directioni = 0</code> 将字符向前移位。</p><p>将一个字符 <strong>向后</strong> 移位的意思是将这个字符用字母表中 <strong>下一个</strong> 字母替换（字母表视为环绕的，所以 <code>&#39;z&#39;</code> 变成 <code>&#39;a&#39;</code>）。类似的，将一个字符 <strong>向前</strong> 移位的意思是将这个字符用字母表中 <strong>前一个</strong> 字母替换（字母表是环绕的，所以 <code>&#39;a&#39;</code> 变成 <code>&#39;z&#39;</code> ）。</p><p>请你返回对 <code>s</code> 进行所有移位操作以后得到的最终字符串。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> s = &quot;abc&quot;, shifts = [[0,1,0],[1,2,1],[0,2,1]]</p><p><strong>输出：</strong> &quot;ace&quot;</p><p><strong>解释：</strong> 首先，将下标从 0 到 1 的字母向前移位，得到 s = &quot;zac&quot; 。</p><p>然后，将下标从 1 到 2 的字母向后移位，得到 s = &quot;zbd&quot; 。</p><p>最后，将下标从 0 到 2 的字符向后移位，得到 s = &quot;ace&quot; 。</p></blockquote><p><strong>示例 2:</strong></p><blockquote><p><strong>输入：</strong> s = &quot;dztz&quot;, shifts = [[0,0,0],[1,1,1]]</p><p><strong>输出：</strong> &quot;catz&quot;</p><p><strong>解释：</strong> 首先，将下标从 0 到 0 的字母向前移位，得到 s = &quot;cztz&quot; 。</p><p>最后，将下标从 1 到 1 的字符向后移位，得到 s = &quot;catz&quot; 。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= s.length, shifts.length &lt;= 5 * 10^4</code></li><li><code>shifts[i].length == 3</code></li><li><code>0 &lt;= starti &lt;= endi &lt; s.length</code></li><li><code>0 &lt;= directioni &lt;= 1</code></li><li><code>s</code> 只包含小写英文字母。</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>为了高效处理多次区间操作，我们可以使用 <strong>差分数组</strong> 来记录每个位置的累积偏移量。</p><ol><li><p><strong>构建差分数组</strong>：</p><ul><li>创建一个与字符串 <code>s</code> 长度相同的差分数组 <code>diffArr</code>。</li><li>对于每次位移操作 <code>[start, end, direction]</code>： <ul><li>如果是右移（<code>direction = 1</code>），则： <ul><li><code>diffArr[start] += 1</code></li><li>如果 <code>end + 1</code> 在范围内，则 <code>diffArr[end + 1] -= 1</code></li></ul></li><li>如果是左移（<code>direction = 0</code>），则： <ul><li><code>diffArr[start] -= 1</code></li><li>如果 <code>end + 1</code> 在范围内，则 <code>diffArr[end + 1] += 1</code></li></ul></li></ul></li></ul></li><li><p><strong>计算累积偏移量</strong>：</p><ul><li>使用前缀和将差分数组转化为累积偏移量数组 <code>diff</code>。</li></ul></li><li><p><strong>应用偏移量并生成结果字符串</strong>：</p><ul><li>遍历字符串 <code>s</code>，计算每个字符的最终位置： <ul><li>将累积偏移量加到当前字符的 ASCII 值上，并进行模 <code>26</code> 运算以确保循环在 <code>&#39;a&#39;</code> 到 <code>&#39;z&#39;</code> 范围内。</li></ul></li></ul></li><li><p><strong>返回结果字符串</strong>。</p></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n + m)</code><ul><li>构建差分数组：<code>O(m)</code>，其中 <code>m</code> 是位移操作的个数。</li><li>计算累积偏移量：<code>O(n)</code>，其中 <code>n</code> 是字符串长度。</li><li>应用偏移量：<code>O(n)</code>。</li><li>总复杂度：<code>O(n + m)</code>。</li></ul></li><li><strong>空间复杂度</strong>：<code>O(n)</code>，存储差分数组和结果数组。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">s</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">shifts</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">shiftingLetters</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s<span class="token punctuation">,</span> shifts</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> n <span class="token operator">=</span> s<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
	<span class="token keyword">const</span> diffArr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">// 构建差分数组</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> <span class="token punctuation">[</span>start<span class="token punctuation">,</span> end<span class="token punctuation">,</span> direction<span class="token punctuation">]</span> <span class="token keyword">of</span> shifts<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>direction <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			diffArr<span class="token punctuation">[</span>start<span class="token punctuation">]</span><span class="token operator">++</span><span class="token punctuation">;</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>end <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">&lt;</span> n<span class="token punctuation">)</span> diffArr<span class="token punctuation">[</span>end <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">--</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			diffArr<span class="token punctuation">[</span>start<span class="token punctuation">]</span><span class="token operator">--</span><span class="token punctuation">;</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>end <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">&lt;</span> n<span class="token punctuation">)</span> diffArr<span class="token punctuation">[</span>end <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">++</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 计算累积偏移量并生成结果字符串</span>
	<span class="token keyword">let</span> diff <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		diff <span class="token operator">=</span> <span class="token punctuation">(</span>diff <span class="token operator">+</span> diffArr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">%</span> <span class="token number">26</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>diff <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> diff <span class="token operator">+=</span> <span class="token number">26</span><span class="token punctuation">;</span> <span class="token comment">// 处理负偏移</span>
		res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>String<span class="token punctuation">.</span><span class="token function">fromCharCode</span><span class="token punctuation">(</span><span class="token number">97</span> <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">charCodeAt</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">97</span> <span class="token operator">+</span> diff<span class="token punctuation">)</span> <span class="token operator">%</span> <span class="token number">26</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> res<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,28),q=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"center"}},"难度"),t("th",{style:{"text-align":"center"}},"力扣")])],-1),w=t("td",{style:{"text-align":"center"}},"218",-1),z=t("td",{style:{"text-align":"left"}},"天际线问题",-1),A=t("td",{style:{"text-align":"center"}},null,-1),N={style:{"text-align":"left"}},C=t("code",null,"树状数组",-1),E=t("code",null,"线段树",-1),I=t("code",null,"数组",-1),O=t("code",null,"4+",-1),L=t("td",{style:{"text-align":"center"}},"🔴",-1),S={style:{"text-align":"center"}},F={href:"https://leetcode.cn/problems/the-skyline-problem",target:"_blank",rel:"noopener noreferrer"},V={href:"https://leetcode.com/problems/the-skyline-problem",target:"_blank",rel:"noopener noreferrer"},j=t("td",{style:{"text-align":"center"}},"307",-1),B=t("td",{style:{"text-align":"left"}},"区域和检索 - 数组可修改",-1),R={style:{"text-align":"center"}},D={style:{"text-align":"left"}},M=t("code",null,"设计",-1),T=t("code",null,"树状数组",-1),Y=t("code",null,"线段树",-1),G=t("code",null,"1+",-1),H=t("td",{style:{"text-align":"center"}},"🟠",-1),J={style:{"text-align":"center"}},K={href:"https://leetcode.cn/problems/range-sum-query-mutable",target:"_blank",rel:"noopener noreferrer"},P={href:"https://leetcode.com/problems/range-sum-query-mutable",target:"_blank",rel:"noopener noreferrer"},Q=t("td",{style:{"text-align":"center"}},"370",-1),U=t("td",{style:{"text-align":"left"}},"区间加法 🔒",-1),W=t("td",{style:{"text-align":"center"}},null,-1),X={style:{"text-align":"left"}},Z=t("code",null,"数组",-1),$=t("code",null,"前缀和",-1),tt=t("td",{style:{"text-align":"center"}},"🟠",-1),nt={style:{"text-align":"center"}},st={href:"https://leetcode.cn/problems/range-addition",target:"_blank",rel:"noopener noreferrer"},et={href:"https://leetcode.com/problems/range-addition",target:"_blank",rel:"noopener noreferrer"},at=t("td",{style:{"text-align":"center"}},"848",-1),ot=t("td",{style:{"text-align":"left"}},"字母移位",-1),lt=t("td",{style:{"text-align":"center"}},null,-1),ct={style:{"text-align":"left"}},it=t("code",null,"数组",-1),pt=t("code",null,"字符串",-1),rt=t("code",null,"前缀和",-1),dt=t("td",{style:{"text-align":"center"}},"🟠",-1),ut={style:{"text-align":"center"}},ht={href:"https://leetcode.cn/problems/shifting-letters",target:"_blank",rel:"noopener noreferrer"},kt={href:"https://leetcode.com/problems/shifting-letters",target:"_blank",rel:"noopener noreferrer"},_t=t("td",{style:{"text-align":"center"}},"1854",-1),ft=t("td",{style:{"text-align":"left"}},"人口最多的年份",-1),gt={style:{"text-align":"center"}},mt={style:{"text-align":"left"}},bt=t("code",null,"数组",-1),yt=t("code",null,"计数",-1),xt=t("code",null,"前缀和",-1),vt=t("td",{style:{"text-align":"center"}},"🟢",-1),qt={style:{"text-align":"center"}},wt={href:"https://leetcode.cn/problems/maximum-population-year",target:"_blank",rel:"noopener noreferrer"},zt={href:"https://leetcode.com/problems/maximum-population-year",target:"_blank",rel:"noopener noreferrer"},At=t("td",{style:{"text-align":"center"}},"1943",-1),Nt=t("td",{style:{"text-align":"left"}},"描述绘画结果",-1),Ct=t("td",{style:{"text-align":"center"}},null,-1),Et={style:{"text-align":"left"}},It=t("code",null,"数组",-1),Ot=t("code",null,"哈希表",-1),Lt=t("code",null,"前缀和",-1),St=t("code",null,"1+",-1),Ft=t("td",{style:{"text-align":"center"}},"🟠",-1),Vt={style:{"text-align":"center"}},jt={href:"https://leetcode.cn/problems/describe-the-painting",target:"_blank",rel:"noopener noreferrer"},Bt={href:"https://leetcode.com/problems/describe-the-painting",target:"_blank",rel:"noopener noreferrer"};function Rt(Dt,Mt){const c=l("font"),a=l("RouterLink"),o=l("ExternalLinkIcon");return p(),r("div",null,[k,t("p",null,[n("🟠 "),s(c,{color:"#ffb800"},{default:e(()=>[n("Medium")]),_:1}),n("  🔖  "),s(a,{to:"/tag/array.html"},{default:e(()=>[_]),_:1}),n(),s(a,{to:"/tag/string.html"},{default:e(()=>[f]),_:1}),n(),s(a,{to:"/tag/prefix-sum.html"},{default:e(()=>[g]),_:1}),n("  🔗 "),t("a",m,[b,s(o)]),n(),t("a",y,[x,s(o)])]),v,d(" prettier-ignore "),t("table",null,[q,t("tbody",null,[t("tr",null,[w,z,A,t("td",N,[s(a,{to:"/tag/binary-indexed-tree.html"},{default:e(()=>[C]),_:1}),n(),s(a,{to:"/tag/segment-tree.html"},{default:e(()=>[E]),_:1}),n(),s(a,{to:"/tag/array.html"},{default:e(()=>[I]),_:1}),n(),O]),L,t("td",S,[t("a",F,[n("🀄️"),s(o)]),n(),t("a",V,[n("🔗"),s(o)])])]),t("tr",null,[j,B,t("td",R,[s(a,{to:"/problem/0307.html"},{default:e(()=>[n("[✓]")]),_:1})]),t("td",D,[s(a,{to:"/tag/design.html"},{default:e(()=>[M]),_:1}),n(),s(a,{to:"/tag/binary-indexed-tree.html"},{default:e(()=>[T]),_:1}),n(),s(a,{to:"/tag/segment-tree.html"},{default:e(()=>[Y]),_:1}),n(),G]),H,t("td",J,[t("a",K,[n("🀄️"),s(o)]),n(),t("a",P,[n("🔗"),s(o)])])]),t("tr",null,[Q,U,W,t("td",X,[s(a,{to:"/tag/array.html"},{default:e(()=>[Z]),_:1}),n(),s(a,{to:"/tag/prefix-sum.html"},{default:e(()=>[$]),_:1})]),tt,t("td",nt,[t("a",st,[n("🀄️"),s(o)]),n(),t("a",et,[n("🔗"),s(o)])])]),t("tr",null,[at,ot,lt,t("td",ct,[s(a,{to:"/tag/array.html"},{default:e(()=>[it]),_:1}),n(),s(a,{to:"/tag/string.html"},{default:e(()=>[pt]),_:1}),n(),s(a,{to:"/tag/prefix-sum.html"},{default:e(()=>[rt]),_:1})]),dt,t("td",ut,[t("a",ht,[n("🀄️"),s(o)]),n(),t("a",kt,[n("🔗"),s(o)])])]),t("tr",null,[_t,ft,t("td",gt,[s(a,{to:"/problem/1854.html"},{default:e(()=>[n("[✓]")]),_:1})]),t("td",mt,[s(a,{to:"/tag/array.html"},{default:e(()=>[bt]),_:1}),n(),s(a,{to:"/tag/counting.html"},{default:e(()=>[yt]),_:1}),n(),s(a,{to:"/tag/prefix-sum.html"},{default:e(()=>[xt]),_:1})]),vt,t("td",qt,[t("a",wt,[n("🀄️"),s(o)]),n(),t("a",zt,[n("🔗"),s(o)])])]),t("tr",null,[At,Nt,Ct,t("td",Et,[s(a,{to:"/tag/array.html"},{default:e(()=>[It]),_:1}),n(),s(a,{to:"/tag/hash-table.html"},{default:e(()=>[Ot]),_:1}),n(),s(a,{to:"/tag/prefix-sum.html"},{default:e(()=>[Lt]),_:1}),n(),St]),Ft,t("td",Vt,[t("a",jt,[n("🀄️"),s(o)]),n(),t("a",Bt,[n("🔗"),s(o)])])])])])])}const Yt=i(h,[["render",Rt],["__file","2381.html.vue"]]);export{Yt as default};
