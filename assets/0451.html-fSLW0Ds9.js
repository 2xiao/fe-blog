import{_ as r,r as l,o as i,c as p,a as t,b as e,d as n,w as s,f as d,e as u}from"./app-9Xw5divW.js";const h={},_=t("h1",{id:"_451-根据字符出现频率排序",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_451-根据字符出现频率排序","aria-hidden":"true"},"#"),e(" 451. 根据字符出现频率排序")],-1),g=t("code",null,"哈希表",-1),k=t("code",null,"字符串",-1),m=t("code",null,"桶排序",-1),f=t("code",null,"计数",-1),b=t("code",null,"排序",-1),y=t("code",null,"堆（优先队列）",-1),x={href:"https://leetcode.cn/problems/sort-characters-by-frequency",target:"_blank",rel:"noopener noreferrer"},v=t("code",null,"力扣",-1),q={href:"https://leetcode.com/problems/sort-characters-by-frequency",target:"_blank",rel:"noopener noreferrer"},w=t("code",null,"LeetCode",-1),E=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given a string <code>s</code>, sort it in <strong>decreasing order</strong> based on the <strong>frequency</strong> of the characters. The <strong>frequency</strong> of a character is the number of times it appears in the string.</p><p>Return <em>the sorted string</em>. If there are multiple answers, return <em>any of them</em>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: s = &quot;tree&quot;</p><p>Output: &quot;eert&quot;</p><p>Explanation: &#39;e&#39; appears twice while &#39;r&#39; and &#39;t&#39; both appear once.</p><p>So &#39;e&#39; must appear before both &#39;r&#39; and &#39;t&#39;. Therefore &quot;eetr&quot; is also a valid answer.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: s = &quot;cccaaa&quot;</p><p>Output: &quot;aaaccc&quot;</p><p>Explanation: Both &#39;c&#39; and &#39;a&#39; appear three times, so both &quot;cccaaa&quot; and &quot;aaaccc&quot; are valid answers.</p><p>Note that &quot;cacaca&quot; is incorrect, as the same characters must be together.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: s = &quot;Aabb&quot;</p><p>Output: &quot;bbAa&quot;</p><p>Explanation: &quot;bbaA&quot; is also a valid answer, but &quot;Aabb&quot; is incorrect.</p><p>Note that &#39;A&#39; and &#39;a&#39; are treated as two different characters.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= s.length &lt;= 5 * 10^5</code></li><li><code>s</code> consists of uppercase and lowercase English letters and digits.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个字符串 <code>s</code> ，根据字符出现的 <strong>频率</strong> 对其进行 <strong>降序排序</strong> 。一个字符出现的 <strong>频率</strong> 是它出现在字符串中的次数。</p><p>返回 <strong>已排序的字符串</strong> 。如果有多个答案，返回其中任何一个。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>可以使用哈希映射来实现：</p><ol><li>使用哈希映射存储字符串中每个元素的频率。</li><li>依据字符出现的频次对字符进行排序。</li><li>遍按照题目要求的格式返回结果。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n log n)</code>，其中 <code>n</code> 是字符串的长度。 <ul><li>这个算法的时间复杂度主要由排序操作决定，因此它的时间复杂度是 <code>O(n log n)</code>，其中 <code>n</code> 是字符串的长度。</li><li>在排序步骤中，我们对字符集进行排序，而字符集的大小是常数级别的（26 个英文字母和一些数字），因此排序的复杂度可以看作是<code> O(1)</code>。</li></ul></li><li><strong>空间复杂度</strong>：<code>O(k)</code>，<code>k</code> 为哈希表中最大存储的字符数。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">s</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">frequencySort</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 使用哈希表统计字符频率</span>
	<span class="token keyword">let</span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token keyword">of</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> map<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token operator">?</span> map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 根据频率对字符进行排序</span>
	<span class="token keyword">const</span> arr <span class="token operator">=</span> Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>map<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span> <span class="token operator">-</span> map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">// 构建结果字符串</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> char <span class="token keyword">of</span> arr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		res <span class="token operator">+=</span> char<span class="token punctuation">.</span><span class="token function">repeat</span><span class="token punctuation">(</span>map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>char<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,22),N=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"center"}},"难度"),t("th",{style:{"text-align":"center"}},"力扣")])],-1),O=t("td",{style:{"text-align":"center"}},"347",-1),A=t("td",{style:{"text-align":"left"}},"前 K 个高频元素",-1),I={style:{"text-align":"center"}},C={style:{"text-align":"left"}},L=t("code",null,"数组",-1),V=t("code",null,"哈希表",-1),B=t("code",null,"分治",-1),j=t("code",null,"5+",-1),R=t("td",{style:{"text-align":"center"}},"🟠",-1),S={style:{"text-align":"center"}},T={href:"https://leetcode.cn/problems/top-k-frequent-elements",target:"_blank",rel:"noopener noreferrer"},M={href:"https://leetcode.com/problems/top-k-frequent-elements",target:"_blank",rel:"noopener noreferrer"},G=t("td",{style:{"text-align":"center"}},"387",-1),K=t("td",{style:{"text-align":"left"}},"字符串中的第一个唯一字符",-1),z=t("td",{style:{"text-align":"center"}},null,-1),D={style:{"text-align":"left"}},F=t("code",null,"队列",-1),H=t("code",null,"哈希表",-1),J=t("code",null,"字符串",-1),P=t("code",null,"1+",-1),Q=t("td",{style:{"text-align":"center"}},"🟢",-1),U={style:{"text-align":"center"}},W={href:"https://leetcode.cn/problems/first-unique-character-in-a-string",target:"_blank",rel:"noopener noreferrer"},X={href:"https://leetcode.com/problems/first-unique-character-in-a-string",target:"_blank",rel:"noopener noreferrer"},Y=t("td",{style:{"text-align":"center"}},"1636",-1),Z=t("td",{style:{"text-align":"left"}},"按照频率将数组升序排序",-1),$=t("td",{style:{"text-align":"center"}},null,-1),tt={style:{"text-align":"left"}},et=t("code",null,"数组",-1),nt=t("code",null,"哈希表",-1),st=t("code",null,"排序",-1),at=t("td",{style:{"text-align":"center"}},"🟢",-1),ot={style:{"text-align":"center"}},lt={href:"https://leetcode.cn/problems/sort-array-by-increasing-frequency",target:"_blank",rel:"noopener noreferrer"},ct={href:"https://leetcode.com/problems/sort-array-by-increasing-frequency",target:"_blank",rel:"noopener noreferrer"},rt=t("td",{style:{"text-align":"center"}},"2278",-1),it=t("td",{style:{"text-align":"left"}},"字母在字符串中的百分比",-1),pt=t("td",{style:{"text-align":"center"}},null,-1),dt={style:{"text-align":"left"}},ut=t("code",null,"字符串",-1),ht=t("td",{style:{"text-align":"center"}},"🟢",-1),_t={style:{"text-align":"center"}},gt={href:"https://leetcode.cn/problems/percentage-of-letter-in-string",target:"_blank",rel:"noopener noreferrer"},kt={href:"https://leetcode.com/problems/percentage-of-letter-in-string",target:"_blank",rel:"noopener noreferrer"},mt=t("td",{style:{"text-align":"center"}},"2341",-1),ft=t("td",{style:{"text-align":"left"}},"数组能形成多少数对",-1),bt=t("td",{style:{"text-align":"center"}},null,-1),yt={style:{"text-align":"left"}},xt=t("code",null,"数组",-1),vt=t("code",null,"哈希表",-1),qt=t("code",null,"计数",-1),wt=t("td",{style:{"text-align":"center"}},"🟢",-1),Et={style:{"text-align":"center"}},Nt={href:"https://leetcode.cn/problems/maximum-number-of-pairs-in-array",target:"_blank",rel:"noopener noreferrer"},Ot={href:"https://leetcode.com/problems/maximum-number-of-pairs-in-array",target:"_blank",rel:"noopener noreferrer"},At=t("td",{style:{"text-align":"center"}},"2374",-1),It=t("td",{style:{"text-align":"left"}},"边积分最高的节点",-1),Ct=t("td",{style:{"text-align":"center"}},null,-1),Lt={style:{"text-align":"left"}},Vt=t("code",null,"图",-1),Bt=t("code",null,"哈希表",-1),jt=t("td",{style:{"text-align":"center"}},"🟠",-1),Rt={style:{"text-align":"center"}},St={href:"https://leetcode.cn/problems/node-with-highest-edge-score",target:"_blank",rel:"noopener noreferrer"},Tt={href:"https://leetcode.com/problems/node-with-highest-edge-score",target:"_blank",rel:"noopener noreferrer"},Mt=t("td",{style:{"text-align":"center"}},"2404",-1),Gt=t("td",{style:{"text-align":"left"}},"出现最频繁的偶数元素",-1),Kt=t("td",{style:{"text-align":"center"}},null,-1),zt={style:{"text-align":"left"}},Dt=t("code",null,"数组",-1),Ft=t("code",null,"哈希表",-1),Ht=t("code",null,"计数",-1),Jt=t("td",{style:{"text-align":"center"}},"🟢",-1),Pt={style:{"text-align":"center"}},Qt={href:"https://leetcode.cn/problems/most-frequent-even-element",target:"_blank",rel:"noopener noreferrer"},Ut={href:"https://leetcode.com/problems/most-frequent-even-element",target:"_blank",rel:"noopener noreferrer"},Wt=t("td",{style:{"text-align":"center"}},"2506",-1),Xt=t("td",{style:{"text-align":"left"}},"统计相似字符串对的数目",-1),Yt=t("td",{style:{"text-align":"center"}},null,-1),Zt={style:{"text-align":"left"}},$t=t("code",null,"位运算",-1),te=t("code",null,"数组",-1),ee=t("code",null,"哈希表",-1),ne=t("code",null,"2+",-1),se=t("td",{style:{"text-align":"center"}},"🟢",-1),ae={style:{"text-align":"center"}},oe={href:"https://leetcode.cn/problems/count-pairs-of-similar-strings",target:"_blank",rel:"noopener noreferrer"},le={href:"https://leetcode.com/problems/count-pairs-of-similar-strings",target:"_blank",rel:"noopener noreferrer"};function ce(re,ie){const c=l("font"),a=l("RouterLink"),o=l("ExternalLinkIcon");return i(),p("div",null,[_,t("p",null,[e("🟠 "),n(c,{color:"#ffb800"},{default:s(()=>[e("Medium")]),_:1}),e("  🔖  "),n(a,{to:"/tag/hash-table.html"},{default:s(()=>[g]),_:1}),e(),n(a,{to:"/tag/string.html"},{default:s(()=>[k]),_:1}),e(),n(a,{to:"/tag/bucket-sort.html"},{default:s(()=>[m]),_:1}),e(),n(a,{to:"/tag/counting.html"},{default:s(()=>[f]),_:1}),e(),n(a,{to:"/tag/sorting.html"},{default:s(()=>[b]),_:1}),e(),n(a,{to:"/tag/heap-priority-queue.html"},{default:s(()=>[y]),_:1}),e("  🔗 "),t("a",x,[v,n(o)]),e(),t("a",q,[w,n(o)])]),E,d(" prettier-ignore "),t("table",null,[N,t("tbody",null,[t("tr",null,[O,A,t("td",I,[n(a,{to:"/problem/0347.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",C,[n(a,{to:"/tag/array.html"},{default:s(()=>[L]),_:1}),e(),n(a,{to:"/tag/hash-table.html"},{default:s(()=>[V]),_:1}),e(),n(a,{to:"/tag/divide-and-conquer.html"},{default:s(()=>[B]),_:1}),e(),j]),R,t("td",S,[t("a",T,[e("🀄️"),n(o)]),e(),t("a",M,[e("🔗"),n(o)])])]),t("tr",null,[G,K,z,t("td",D,[n(a,{to:"/tag/queue.html"},{default:s(()=>[F]),_:1}),e(),n(a,{to:"/tag/hash-table.html"},{default:s(()=>[H]),_:1}),e(),n(a,{to:"/tag/string.html"},{default:s(()=>[J]),_:1}),e(),P]),Q,t("td",U,[t("a",W,[e("🀄️"),n(o)]),e(),t("a",X,[e("🔗"),n(o)])])]),t("tr",null,[Y,Z,$,t("td",tt,[n(a,{to:"/tag/array.html"},{default:s(()=>[et]),_:1}),e(),n(a,{to:"/tag/hash-table.html"},{default:s(()=>[nt]),_:1}),e(),n(a,{to:"/tag/sorting.html"},{default:s(()=>[st]),_:1})]),at,t("td",ot,[t("a",lt,[e("🀄️"),n(o)]),e(),t("a",ct,[e("🔗"),n(o)])])]),t("tr",null,[rt,it,pt,t("td",dt,[n(a,{to:"/tag/string.html"},{default:s(()=>[ut]),_:1})]),ht,t("td",_t,[t("a",gt,[e("🀄️"),n(o)]),e(),t("a",kt,[e("🔗"),n(o)])])]),t("tr",null,[mt,ft,bt,t("td",yt,[n(a,{to:"/tag/array.html"},{default:s(()=>[xt]),_:1}),e(),n(a,{to:"/tag/hash-table.html"},{default:s(()=>[vt]),_:1}),e(),n(a,{to:"/tag/counting.html"},{default:s(()=>[qt]),_:1})]),wt,t("td",Et,[t("a",Nt,[e("🀄️"),n(o)]),e(),t("a",Ot,[e("🔗"),n(o)])])]),t("tr",null,[At,It,Ct,t("td",Lt,[n(a,{to:"/tag/graph.html"},{default:s(()=>[Vt]),_:1}),e(),n(a,{to:"/tag/hash-table.html"},{default:s(()=>[Bt]),_:1})]),jt,t("td",Rt,[t("a",St,[e("🀄️"),n(o)]),e(),t("a",Tt,[e("🔗"),n(o)])])]),t("tr",null,[Mt,Gt,Kt,t("td",zt,[n(a,{to:"/tag/array.html"},{default:s(()=>[Dt]),_:1}),e(),n(a,{to:"/tag/hash-table.html"},{default:s(()=>[Ft]),_:1}),e(),n(a,{to:"/tag/counting.html"},{default:s(()=>[Ht]),_:1})]),Jt,t("td",Pt,[t("a",Qt,[e("🀄️"),n(o)]),e(),t("a",Ut,[e("🔗"),n(o)])])]),t("tr",null,[Wt,Xt,Yt,t("td",Zt,[n(a,{to:"/tag/bit-manipulation.html"},{default:s(()=>[$t]),_:1}),e(),n(a,{to:"/tag/array.html"},{default:s(()=>[te]),_:1}),e(),n(a,{to:"/tag/hash-table.html"},{default:s(()=>[ee]),_:1}),e(),ne]),se,t("td",ae,[t("a",oe,[e("🀄️"),n(o)]),e(),t("a",le,[e("🔗"),n(o)])])])])])])}const de=r(h,[["render",ce],["__file","0451.html.vue"]]);export{de as default};
