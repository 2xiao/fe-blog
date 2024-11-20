import{_ as i,r as l,o as r,c as p,a as t,b as e,d as n,w as s,f as d,e as u}from"./app-BBnmDgJV.js";const h={},_=t("h1",{id:"_128-最长连续序列",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_128-最长连续序列","aria-hidden":"true"},"#"),e(" 128. 最长连续序列")],-1),m=t("code",null,"并查集",-1),k=t("code",null,"数组",-1),g=t("code",null,"哈希表",-1),f={href:"https://leetcode.cn/problems/longest-consecutive-sequence",target:"_blank",rel:"noopener noreferrer"},b=t("code",null,"力扣",-1),v={href:"https://leetcode.com/problems/longest-consecutive-sequence",target:"_blank",rel:"noopener noreferrer"},x=t("code",null,"LeetCode",-1),y=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an unsorted array of integers <code>nums</code>, return <em>the length of the longest consecutive elements sequence.</em></p><p>You must write an algorithm that runs in <code>O(n)</code> time.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [100,4,200,1,3,2]</p><p>Output: 4</p><p>Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [0,3,7,2,5,8,4,6,0,1]</p><p>Output: 9</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>0 &lt;= nums.length &lt;= 10^5</code></li><li><code>-10^9 &lt;= nums[i] &lt;= 10^9</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个未排序的整数数组，找出最长连续序列的长度。要求算法的时间复杂度为 <code>O(n)</code>。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ul><li>遍历数组里的每个数 <code>i</code> ，以其为起点，寻找 <code>i+1, i+2, i+3...</code>是否存在，并不断记录以 <code>i</code> 为起点时最长连续序列的长度；</li><li>为了降低遍历数组的时间复杂度，可以将数组中的数存在哈希表中，这样查看一个数是否存在的时间复杂度可以优化到 <code>O(1)</code>；</li><li>为了去掉一些重复的枚举，可以只对 <code>i-1</code> 不存在的数 <code>i</code> 为起点开始枚举；</li></ul><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>: <code>O(n)</code>，其中 <code>n</code> 是数组的长度，遍历了一遍数组。</li><li><strong>空间复杂度</strong>: <code>O(n)</code>，使用了一个哈希表来存储数组中的数。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">longestConsecutive</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> set <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> length <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> item <span class="token keyword">of</span> <span class="token punctuation">[</span><span class="token operator">...</span>set<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>set<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>item <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
			<span class="token keyword">while</span> <span class="token punctuation">(</span>set<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>item <span class="token operator">+</span> i<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				i<span class="token operator">++</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			length <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>length<span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> length<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,18),w=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"center"}},"难度"),t("th",{style:{"text-align":"center"}},"力扣")])],-1),q=t("td",{style:{"text-align":"center"}},"298",-1),O=t("td",{style:{"text-align":"left"}},"二叉树最长连续序列 🔒",-1),C=t("td",{style:{"text-align":"center"}},null,-1),E={style:{"text-align":"left"}},L=t("code",null,"树",-1),N=t("code",null,"深度优先搜索",-1),V=t("code",null,"二叉树",-1),I=t("td",{style:{"text-align":"center"}},"🟠",-1),j={style:{"text-align":"center"}},B={href:"https://leetcode.cn/problems/binary-tree-longest-consecutive-sequence",target:"_blank",rel:"noopener noreferrer"},T={href:"https://leetcode.com/problems/binary-tree-longest-consecutive-sequence",target:"_blank",rel:"noopener noreferrer"},M=t("td",{style:{"text-align":"center"}},"2177",-1),R=t("td",{style:{"text-align":"left"}},"找到和为给定整数的三个连续整数",-1),S=t("td",{style:{"text-align":"center"}},null,-1),G={style:{"text-align":"left"}},Y=t("code",null,"数学",-1),z=t("code",null,"模拟",-1),A=t("td",{style:{"text-align":"center"}},"🟠",-1),D={style:{"text-align":"center"}},F={href:"https://leetcode.cn/problems/find-three-consecutive-integers-that-sum-to-a-given-number",target:"_blank",rel:"noopener noreferrer"},H={href:"https://leetcode.com/problems/find-three-consecutive-integers-that-sum-to-a-given-number",target:"_blank",rel:"noopener noreferrer"},J=t("td",{style:{"text-align":"center"}},"2274",-1),K=t("td",{style:{"text-align":"left"}},"不含特殊楼层的最大连续楼层数",-1),P=t("td",{style:{"text-align":"center"}},null,-1),Q={style:{"text-align":"left"}},U=t("code",null,"数组",-1),W=t("code",null,"排序",-1),X=t("td",{style:{"text-align":"center"}},"🟠",-1),Z={style:{"text-align":"center"}},$={href:"https://leetcode.cn/problems/maximum-consecutive-floors-without-special-floors",target:"_blank",rel:"noopener noreferrer"},tt={href:"https://leetcode.com/problems/maximum-consecutive-floors-without-special-floors",target:"_blank",rel:"noopener noreferrer"},et=t("td",{style:{"text-align":"center"}},"2414",-1),nt=t("td",{style:{"text-align":"left"}},"最长的字母序连续子字符串的长度",-1),st=t("td",{style:{"text-align":"center"}},null,-1),at={style:{"text-align":"left"}},ot=t("code",null,"字符串",-1),lt=t("td",{style:{"text-align":"center"}},"🟠",-1),ct={style:{"text-align":"center"}},it={href:"https://leetcode.cn/problems/length-of-the-longest-alphabetical-continuous-substring",target:"_blank",rel:"noopener noreferrer"},rt={href:"https://leetcode.com/problems/length-of-the-longest-alphabetical-continuous-substring",target:"_blank",rel:"noopener noreferrer"},pt=t("td",{style:{"text-align":"center"}},"3020",-1),dt=t("td",{style:{"text-align":"left"}},"子集中元素的最大数量",-1),ut=t("td",{style:{"text-align":"center"}},null,-1),ht={style:{"text-align":"left"}},_t=t("code",null,"数组",-1),mt=t("code",null,"哈希表",-1),kt=t("code",null,"枚举",-1),gt=t("td",{style:{"text-align":"center"}},"🟠",-1),ft={style:{"text-align":"center"}},bt={href:"https://leetcode.cn/problems/find-the-maximum-number-of-elements-in-subset",target:"_blank",rel:"noopener noreferrer"},vt={href:"https://leetcode.com/problems/find-the-maximum-number-of-elements-in-subset",target:"_blank",rel:"noopener noreferrer"};function xt(yt,wt){const c=l("font"),a=l("RouterLink"),o=l("ExternalLinkIcon");return r(),p("div",null,[_,t("p",null,[e("🟠 "),n(c,{color:"#ffb800"},{default:s(()=>[e("Medium")]),_:1}),e("  🔖  "),n(a,{to:"/tag/union-find.html"},{default:s(()=>[m]),_:1}),e(),n(a,{to:"/tag/array.html"},{default:s(()=>[k]),_:1}),e(),n(a,{to:"/tag/hash-table.html"},{default:s(()=>[g]),_:1}),e("  🔗 "),t("a",f,[b,n(o)]),e(),t("a",v,[x,n(o)])]),y,d(" prettier-ignore "),t("table",null,[w,t("tbody",null,[t("tr",null,[q,O,C,t("td",E,[n(a,{to:"/tag/tree.html"},{default:s(()=>[L]),_:1}),e(),n(a,{to:"/tag/depth-first-search.html"},{default:s(()=>[N]),_:1}),e(),n(a,{to:"/tag/binary-tree.html"},{default:s(()=>[V]),_:1})]),I,t("td",j,[t("a",B,[e("🀄️"),n(o)]),e(),t("a",T,[e("🔗"),n(o)])])]),t("tr",null,[M,R,S,t("td",G,[n(a,{to:"/tag/math.html"},{default:s(()=>[Y]),_:1}),e(),n(a,{to:"/tag/simulation.html"},{default:s(()=>[z]),_:1})]),A,t("td",D,[t("a",F,[e("🀄️"),n(o)]),e(),t("a",H,[e("🔗"),n(o)])])]),t("tr",null,[J,K,P,t("td",Q,[n(a,{to:"/tag/array.html"},{default:s(()=>[U]),_:1}),e(),n(a,{to:"/tag/sorting.html"},{default:s(()=>[W]),_:1})]),X,t("td",Z,[t("a",$,[e("🀄️"),n(o)]),e(),t("a",tt,[e("🔗"),n(o)])])]),t("tr",null,[et,nt,st,t("td",at,[n(a,{to:"/tag/string.html"},{default:s(()=>[ot]),_:1})]),lt,t("td",ct,[t("a",it,[e("🀄️"),n(o)]),e(),t("a",rt,[e("🔗"),n(o)])])]),t("tr",null,[pt,dt,ut,t("td",ht,[n(a,{to:"/tag/array.html"},{default:s(()=>[_t]),_:1}),e(),n(a,{to:"/tag/hash-table.html"},{default:s(()=>[mt]),_:1}),e(),n(a,{to:"/tag/enumeration.html"},{default:s(()=>[kt]),_:1})]),gt,t("td",ft,[t("a",bt,[e("🀄️"),n(o)]),e(),t("a",vt,[e("🔗"),n(o)])])])])])])}const Ot=i(h,[["render",xt],["__file","0128.html.vue"]]);export{Ot as default};
