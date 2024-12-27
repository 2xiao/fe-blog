import{_ as r,r as p,o as u,c as i,a as n,b as s,d as t,w as a,f as d,e as l}from"./app-fqckLmln.js";const k={},m=n("h1",{id:"_18-四数之和",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_18-四数之和","aria-hidden":"true"},"#"),s(" 18. 四数之和")],-1),h=n("code",null,"数组",-1),_=n("code",null,"双指针",-1),b=n("code",null,"排序",-1),g={href:"https://leetcode.cn/problems/4sum",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"力扣",-1),v={href:"https://leetcode.com/problems/4sum",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"LeetCode",-1),x=l('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an array <code>nums</code> of <code>n</code> integers, return <em>an array of all the <strong>unique</strong> quadruplets</em> <code>[nums[a], nums[b], nums[c], nums[d]]</code> such that:</p><ul><li><code>0 &lt;= a, b, c, d &lt; n</code></li><li><code>a</code>, <code>b</code>, <code>c</code>, and <code>d</code> are <strong>distinct</strong>.</li><li><code>nums[a] + nums[b] + nums[c] + nums[d] == target</code></li></ul><p>You may return the answer in <strong>any order</strong>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [1,0,-1,0,-2,2], target = 0</p><p>Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [2,2,2,2,2], target = 8</p><p>Output: [[2,2,2,2]]</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 200</code></li><li><code>-10^9 &lt;= nums[i] &lt;= 10^9</code></li><li><code>-10^9 &lt;= target &lt;= 10^9</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个数组，要求在这个数组中找出 4 个数之和为 0 的所有组合。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>这一题比较麻烦的一点在于，最后输出解的时候，要求输出不重复的解。数组中同一个数字可能出现多次，同一个数字也可能使用多次，但是最后输出解的时候，不能重复。例如 [-1，1，2, -2] 和 [2, -1, -2, 1]、[-2, 2, -1, 1] 这 3 个解是重复的。</p>',14),w=l(`<h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">target</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">fourSum</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	nums <span class="token operator">=</span> nums<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a <span class="token operator">-</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> len <span class="token operator">=</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len <span class="token operator">-</span> <span class="token number">3</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> len <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">let</span> left <span class="token operator">=</span> j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
			<span class="token keyword">let</span> right <span class="token operator">=</span> len <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
			<span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token keyword">let</span> sum <span class="token operator">=</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+</span> nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">+</span> nums<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">+</span> nums<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">;</span>
				<span class="token keyword">if</span> <span class="token punctuation">(</span>sum <span class="token operator">===</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
					res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">[</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">,</span> nums<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">,</span> nums<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
					<span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;</span> right <span class="token operator">&amp;&amp;</span> nums<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">===</span> nums<span class="token punctuation">[</span>left <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> left<span class="token operator">++</span><span class="token punctuation">;</span>
					<span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;</span> right <span class="token operator">&amp;&amp;</span> nums<span class="token punctuation">[</span>right<span class="token punctuation">]</span> <span class="token operator">===</span> nums<span class="token punctuation">[</span>right <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> right<span class="token operator">--</span><span class="token punctuation">;</span>
					left<span class="token operator">++</span><span class="token punctuation">;</span>
					right<span class="token operator">--</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>sum <span class="token operator">&gt;</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
					right<span class="token operator">--</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
					left<span class="token operator">++</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
			<span class="token keyword">while</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">===</span> nums<span class="token punctuation">[</span>j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> j<span class="token operator">++</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">while</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> nums<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> i<span class="token operator">++</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,3),j=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),q=n("td",{style:{"text-align":"center"}},"1",-1),I=n("td",{style:{"text-align":"left"}},"两数之和",-1),C={style:{"text-align":"center"}},E={style:{"text-align":"left"}},L=n("code",null,"数组",-1),N=n("code",null,"哈希表",-1),V=n("td",{style:{"text-align":"center"}},"🟢",-1),B={style:{"text-align":"center"}},O={href:"https://leetcode.cn/problems/two-sum",target:"_blank",rel:"noopener noreferrer"},R={href:"https://leetcode.com/problems/two-sum",target:"_blank",rel:"noopener noreferrer"},S=n("td",{style:{"text-align":"center"}},"15",-1),G=n("td",{style:{"text-align":"left"}},"三数之和",-1),M={style:{"text-align":"center"}},T={style:{"text-align":"left"}},Y=n("code",null,"数组",-1),z=n("code",null,"双指针",-1),A=n("code",null,"排序",-1),D=n("td",{style:{"text-align":"center"}},"🟠",-1),F={style:{"text-align":"center"}},H={href:"https://leetcode.cn/problems/3sum",target:"_blank",rel:"noopener noreferrer"},J={href:"https://leetcode.com/problems/3sum",target:"_blank",rel:"noopener noreferrer"},K=n("td",{style:{"text-align":"center"}},"454",-1),P=n("td",{style:{"text-align":"left"}},"四数相加 II",-1),Q=n("td",{style:{"text-align":"center"}},null,-1),U={style:{"text-align":"left"}},W=n("code",null,"数组",-1),X=n("code",null,"哈希表",-1),Z=n("td",{style:{"text-align":"center"}},"🟠",-1),$={style:{"text-align":"center"}},nn={href:"https://leetcode.cn/problems/4sum-ii",target:"_blank",rel:"noopener noreferrer"},sn={href:"https://leetcode.com/problems/4sum-ii",target:"_blank",rel:"noopener noreferrer"},tn=n("td",{style:{"text-align":"center"}},"1995",-1),an=n("td",{style:{"text-align":"left"}},"统计特殊四元组",-1),en={style:{"text-align":"center"}},on={style:{"text-align":"left"}},pn=n("code",null,"数组",-1),ln=n("code",null,"哈希表",-1),cn=n("code",null,"枚举",-1),rn=n("td",{style:{"text-align":"center"}},"🟢",-1),un={style:{"text-align":"center"}},dn={href:"https://leetcode.cn/problems/count-special-quadruplets",target:"_blank",rel:"noopener noreferrer"},kn={href:"https://leetcode.com/problems/count-special-quadruplets",target:"_blank",rel:"noopener noreferrer"};function mn(hn,_n){const c=p("font"),e=p("RouterLink"),o=p("ExternalLinkIcon");return u(),i("div",null,[m,n("p",null,[s("🟠 "),t(c,{color:"#ffb800"},{default:a(()=>[s("Medium")]),_:1}),s("  🔖  "),t(e,{to:"/tag/array.html"},{default:a(()=>[h]),_:1}),s(),t(e,{to:"/tag/two-pointers.html"},{default:a(()=>[_]),_:1}),s(),t(e,{to:"/tag/sorting.html"},{default:a(()=>[b]),_:1}),s("  🔗 "),n("a",g,[f,t(o)]),s(),n("a",v,[y,t(o)])]),x,n("p",null,[s("和 "),t(e,{to:"/problem/0015.html"},{default:a(()=>[s("第 15 题")]),_:1}),s(" 的解法一致，这一题是第 15 题的升级版，思路都是完全一致的，需要去重和排序。")]),w,d(" prettier-ignore "),n("table",null,[j,n("tbody",null,[n("tr",null,[q,I,n("td",C,[t(e,{to:"/problem/0001.html"},{default:a(()=>[s("[✓]")]),_:1})]),n("td",E,[t(e,{to:"/tag/array.html"},{default:a(()=>[L]),_:1}),s(),t(e,{to:"/tag/hash-table.html"},{default:a(()=>[N]),_:1})]),V,n("td",B,[n("a",O,[s("🀄️"),t(o)]),s(),n("a",R,[s("🔗"),t(o)])])]),n("tr",null,[S,G,n("td",M,[t(e,{to:"/problem/0015.html"},{default:a(()=>[s("[✓]")]),_:1})]),n("td",T,[t(e,{to:"/tag/array.html"},{default:a(()=>[Y]),_:1}),s(),t(e,{to:"/tag/two-pointers.html"},{default:a(()=>[z]),_:1}),s(),t(e,{to:"/tag/sorting.html"},{default:a(()=>[A]),_:1})]),D,n("td",F,[n("a",H,[s("🀄️"),t(o)]),s(),n("a",J,[s("🔗"),t(o)])])]),n("tr",null,[K,P,Q,n("td",U,[t(e,{to:"/tag/array.html"},{default:a(()=>[W]),_:1}),s(),t(e,{to:"/tag/hash-table.html"},{default:a(()=>[X]),_:1})]),Z,n("td",$,[n("a",nn,[s("🀄️"),t(o)]),s(),n("a",sn,[s("🔗"),t(o)])])]),n("tr",null,[tn,an,n("td",en,[t(e,{to:"/problem/1995.html"},{default:a(()=>[s("[✓]")]),_:1})]),n("td",on,[t(e,{to:"/tag/array.html"},{default:a(()=>[pn]),_:1}),s(),t(e,{to:"/tag/hash-table.html"},{default:a(()=>[ln]),_:1}),s(),t(e,{to:"/tag/enumeration.html"},{default:a(()=>[cn]),_:1})]),rn,n("td",un,[n("a",dn,[s("🀄️"),t(o)]),s(),n("a",kn,[s("🔗"),t(o)])])])])])])}const gn=r(k,[["render",mn],["__file","0018.html.vue"]]);export{gn as default};
