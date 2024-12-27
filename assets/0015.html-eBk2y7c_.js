import{_ as c,r as l,o as i,c as r,a as n,b as t,d as s,w as e,f as u,e as d}from"./app-fqckLmln.js";const k={},_=n("h1",{id:"_15-三数之和",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_15-三数之和","aria-hidden":"true"},"#"),t(" 15. 三数之和")],-1),m=n("code",null,"数组",-1),h=n("code",null,"双指针",-1),g=n("code",null,"排序",-1),b={href:"https://leetcode.cn/problems/3sum",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"力扣",-1),v={href:"https://leetcode.com/problems/3sum",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"LeetCode",-1),x=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an integer array nums, return all the triplets <code>[nums[i], nums[j], nums[k]]</code> such that <code>i != j</code>, <code>i != k</code>, and <code>j != k</code>, and <code>nums[i] + nums[j] + nums[k] == 0</code>.</p><p>Notice that the solution set must not contain duplicate triplets.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [-1,0,1,2,-1,-4]</p><p>Output: [[-1,-1,2],[-1,0,1]]</p><p>Explanation:</p><p>nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.</p><p>nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.</p><p>nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.</p><p>The distinct triplets are [-1,0,1] and [-1,-1,2].</p><p>Notice that the order of the output and the order of the triplets does not matter.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [0,1,1]</p><p>Output: []</p><p>Explanation: The only possible triplet does not sum up to 0.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: nums = [0,0,0]</p><p>Output: [[0,0,0]]</p><p>Explanation: The only possible triplet sums up to 0.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>3 &lt;= nums.length &lt;= 3000</code></li><li><code>-10^5 &lt;= nums[i] &lt;= 10^5</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个数组，要求在这个数组中找出 3 个数之和为 0 的所有组合。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ul><li><p>这一题比较麻烦的一点在于，最后输出解的时候，要求输出不重复的解。</p></li><li><p>数组中同一个数字可能出现多次，同一个数字也可能使用多次，但是最后输出解的时候，不能重复。例如 <code>[-1, -1, 2]</code> 和 <code>[2, -1, -1]</code>、<code>[-1, 2, -1]</code> 这 3 个解是重复的。</p></li><li><p>这就需要排序和去重，使用对撞指针寻找三数之和为 <code>0</code> 的组合。</p></li><li><p>先对数组进行排序，<code>i</code> 从后往前扫描，这里同样需要注意数组中存在多个重复数字的问题。<code>i</code> 在循环的时候和后一个数进行比较，如果相等，<code>i</code> 继续往前移，直到移到下一个和前一个数字不同的位置。</p></li><li><p><code>j</code>，<code>k</code> 两个指针开始一前一后对撞，<code>j</code> 从数组首位开始，<code>k</code> 为 <code>i</code> 的前一个数字，由于经过排序，所以 <code>j &lt; k</code>。</p></li><li><p>对比三个数的和与 <code>target</code> 的大小，寻找三数之和为 <code>target</code> 的组合，移动指针时注意去重：</p><ul><li>小于 <code>target</code>，<code>j</code> 往后移动；</li><li>大于 <code>target</code>，<code>k</code> 往前移动；</li></ul></li></ul><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><p><strong>时间复杂度</strong>：<code>O(n^2)</code></p><ul><li><strong>排序</strong>：<code>nums.sort()</code> 的时间复杂度是 <code>O(n log n)</code>，其中 <code>n</code> 是数组的长度。</li><li><strong>双指针查找</strong>：对于每个固定的数 <code>nums[i]</code>，双指针查找的复杂度是 <code>O(n)</code>（即遍历剩下的数组）。</li><li><strong>循环遍历</strong>： 外层循环遍历了 <code>n</code> 个元素，每次执行双指针查找的操作，时间复杂度为 <code>O(n^2)</code>。</li></ul></li><li><p><strong>空间复杂度</strong>：<code>O(n)</code>（不考虑输出结果），主要是用于存储结果和排序的空间。</p><ul><li><strong>排序操作</strong>：排序操作占用 <code>O(n)</code> 的空间。</li><li><strong>结果存储</strong>：结果数组 <code>res</code> 最多存储 <code>O(n^2)</code> 个三元组，但由于题目通常要求三元组不重复，实际存储的元素较少。</li></ul></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">threeSum</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	nums <span class="token operator">=</span> nums<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a <span class="token operator">-</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> target <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> nums<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&gt;</span> <span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 排除 i 重复的情况</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">===</span> nums<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">||</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">!=</span> nums<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
			<span class="token keyword">let</span> k <span class="token operator">=</span> i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
			<span class="token keyword">let</span> sum <span class="token operator">=</span> target <span class="token operator">-</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
			<span class="token keyword">while</span> <span class="token punctuation">(</span>j <span class="token operator">&lt;</span> k<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">+</span> nums<span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token operator">===</span> sum<span class="token punctuation">)</span> <span class="token punctuation">{</span>
					res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">[</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">,</span> nums<span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
					<span class="token comment">// 排除 j 重复的情况</span>
					<span class="token keyword">while</span> <span class="token punctuation">(</span>j <span class="token operator">&lt;</span> k <span class="token operator">&amp;&amp;</span> nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">===</span> nums<span class="token punctuation">[</span>j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
						j<span class="token operator">++</span><span class="token punctuation">;</span>
					<span class="token punctuation">}</span>
					<span class="token comment">// 排除 k 重复的情况</span>
					<span class="token keyword">while</span> <span class="token punctuation">(</span>j <span class="token operator">&lt;</span> k <span class="token operator">&amp;&amp;</span> nums<span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token operator">===</span> nums<span class="token punctuation">[</span>k <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
						k<span class="token operator">--</span><span class="token punctuation">;</span>
					<span class="token punctuation">}</span>
					j<span class="token operator">++</span><span class="token punctuation">;</span>
					k<span class="token operator">--</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">+</span> nums<span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token operator">&lt;</span> sum<span class="token punctuation">)</span> <span class="token punctuation">{</span>
					j<span class="token operator">++</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
					k<span class="token operator">--</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,20),w=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),j=n("td",{style:{"text-align":"center"}},"1",-1),O=n("td",{style:{"text-align":"left"}},"两数之和",-1),E={style:{"text-align":"center"}},I={style:{"text-align":"left"}},N=n("code",null,"数组",-1),q=n("code",null,"哈希表",-1),C=n("td",{style:{"text-align":"center"}},"🟢",-1),L={style:{"text-align":"center"}},V={href:"https://leetcode.cn/problems/two-sum",target:"_blank",rel:"noopener noreferrer"},T={href:"https://leetcode.com/problems/two-sum",target:"_blank",rel:"noopener noreferrer"},B=n("td",{style:{"text-align":"center"}},"16",-1),R=n("td",{style:{"text-align":"left"}},"最接近的三数之和",-1),S={style:{"text-align":"center"}},G={style:{"text-align":"left"}},M=n("code",null,"数组",-1),z=n("code",null,"双指针",-1),A=n("code",null,"排序",-1),D=n("td",{style:{"text-align":"center"}},"🟠",-1),F={style:{"text-align":"center"}},H={href:"https://leetcode.cn/problems/3sum-closest",target:"_blank",rel:"noopener noreferrer"},J={href:"https://leetcode.com/problems/3sum-closest",target:"_blank",rel:"noopener noreferrer"},K=n("td",{style:{"text-align":"center"}},"18",-1),P=n("td",{style:{"text-align":"left"}},"四数之和",-1),Q={style:{"text-align":"center"}},U={style:{"text-align":"left"}},W=n("code",null,"数组",-1),X=n("code",null,"双指针",-1),Y=n("code",null,"排序",-1),Z=n("td",{style:{"text-align":"center"}},"🟠",-1),$={style:{"text-align":"center"}},nn={href:"https://leetcode.cn/problems/4sum",target:"_blank",rel:"noopener noreferrer"},tn={href:"https://leetcode.com/problems/4sum",target:"_blank",rel:"noopener noreferrer"},sn=n("td",{style:{"text-align":"center"}},"259",-1),en=n("td",{style:{"text-align":"left"}},"较小的三数之和 🔒",-1),an={style:{"text-align":"center"}},on={style:{"text-align":"left"}},ln=n("code",null,"数组",-1),pn=n("code",null,"双指针",-1),cn=n("code",null,"二分查找",-1),rn=n("code",null,"1+",-1),un=n("td",{style:{"text-align":"center"}},"🟠",-1),dn={style:{"text-align":"center"}},kn={href:"https://leetcode.cn/problems/3sum-smaller",target:"_blank",rel:"noopener noreferrer"},_n={href:"https://leetcode.com/problems/3sum-smaller",target:"_blank",rel:"noopener noreferrer"},mn=n("td",{style:{"text-align":"center"}},"2367",-1),hn=n("td",{style:{"text-align":"left"}},"等差三元组的数目",-1),gn=n("td",{style:{"text-align":"center"}},null,-1),bn={style:{"text-align":"left"}},fn=n("code",null,"数组",-1),vn=n("code",null,"哈希表",-1),yn=n("code",null,"双指针",-1),xn=n("code",null,"1+",-1),wn=n("td",{style:{"text-align":"center"}},"🟢",-1),jn={style:{"text-align":"center"}},On={href:"https://leetcode.cn/problems/number-of-arithmetic-triplets",target:"_blank",rel:"noopener noreferrer"},En={href:"https://leetcode.com/problems/number-of-arithmetic-triplets",target:"_blank",rel:"noopener noreferrer"},In=n("td",{style:{"text-align":"center"}},"2908",-1),Nn=n("td",{style:{"text-align":"left"}},"元素和最小的山形三元组 I",-1),qn=n("td",{style:{"text-align":"center"}},null,-1),Cn={style:{"text-align":"left"}},Ln=n("code",null,"数组",-1),Vn=n("td",{style:{"text-align":"center"}},"🟢",-1),Tn={style:{"text-align":"center"}},Bn={href:"https://leetcode.cn/problems/minimum-sum-of-mountain-triplets-i",target:"_blank",rel:"noopener noreferrer"},Rn={href:"https://leetcode.com/problems/minimum-sum-of-mountain-triplets-i",target:"_blank",rel:"noopener noreferrer"},Sn=n("td",{style:{"text-align":"center"}},"2909",-1),Gn=n("td",{style:{"text-align":"left"}},"元素和最小的山形三元组 II",-1),Mn=n("td",{style:{"text-align":"center"}},null,-1),zn={style:{"text-align":"left"}},An=n("code",null,"数组",-1),Dn=n("td",{style:{"text-align":"center"}},"🟠",-1),Fn={style:{"text-align":"center"}},Hn={href:"https://leetcode.cn/problems/minimum-sum-of-mountain-triplets-ii",target:"_blank",rel:"noopener noreferrer"},Jn={href:"https://leetcode.com/problems/minimum-sum-of-mountain-triplets-ii",target:"_blank",rel:"noopener noreferrer"};function Kn(Pn,Qn){const p=l("font"),a=l("RouterLink"),o=l("ExternalLinkIcon");return i(),r("div",null,[_,n("p",null,[t("🟠 "),s(p,{color:"#ffb800"},{default:e(()=>[t("Medium")]),_:1}),t("  🔖  "),s(a,{to:"/tag/array.html"},{default:e(()=>[m]),_:1}),t(),s(a,{to:"/tag/two-pointers.html"},{default:e(()=>[h]),_:1}),t(),s(a,{to:"/tag/sorting.html"},{default:e(()=>[g]),_:1}),t("  🔗 "),n("a",b,[f,s(o)]),t(),n("a",v,[y,s(o)])]),x,u(" prettier-ignore "),n("table",null,[w,n("tbody",null,[n("tr",null,[j,O,n("td",E,[s(a,{to:"/problem/0001.html"},{default:e(()=>[t("[✓]")]),_:1})]),n("td",I,[s(a,{to:"/tag/array.html"},{default:e(()=>[N]),_:1}),t(),s(a,{to:"/tag/hash-table.html"},{default:e(()=>[q]),_:1})]),C,n("td",L,[n("a",V,[t("🀄️"),s(o)]),t(),n("a",T,[t("🔗"),s(o)])])]),n("tr",null,[B,R,n("td",S,[s(a,{to:"/problem/0016.html"},{default:e(()=>[t("[✓]")]),_:1})]),n("td",G,[s(a,{to:"/tag/array.html"},{default:e(()=>[M]),_:1}),t(),s(a,{to:"/tag/two-pointers.html"},{default:e(()=>[z]),_:1}),t(),s(a,{to:"/tag/sorting.html"},{default:e(()=>[A]),_:1})]),D,n("td",F,[n("a",H,[t("🀄️"),s(o)]),t(),n("a",J,[t("🔗"),s(o)])])]),n("tr",null,[K,P,n("td",Q,[s(a,{to:"/problem/0018.html"},{default:e(()=>[t("[✓]")]),_:1})]),n("td",U,[s(a,{to:"/tag/array.html"},{default:e(()=>[W]),_:1}),t(),s(a,{to:"/tag/two-pointers.html"},{default:e(()=>[X]),_:1}),t(),s(a,{to:"/tag/sorting.html"},{default:e(()=>[Y]),_:1})]),Z,n("td",$,[n("a",nn,[t("🀄️"),s(o)]),t(),n("a",tn,[t("🔗"),s(o)])])]),n("tr",null,[sn,en,n("td",an,[s(a,{to:"/problem/0259.html"},{default:e(()=>[t("[✓]")]),_:1})]),n("td",on,[s(a,{to:"/tag/array.html"},{default:e(()=>[ln]),_:1}),t(),s(a,{to:"/tag/two-pointers.html"},{default:e(()=>[pn]),_:1}),t(),s(a,{to:"/tag/binary-search.html"},{default:e(()=>[cn]),_:1}),t(),rn]),un,n("td",dn,[n("a",kn,[t("🀄️"),s(o)]),t(),n("a",_n,[t("🔗"),s(o)])])]),n("tr",null,[mn,hn,gn,n("td",bn,[s(a,{to:"/tag/array.html"},{default:e(()=>[fn]),_:1}),t(),s(a,{to:"/tag/hash-table.html"},{default:e(()=>[vn]),_:1}),t(),s(a,{to:"/tag/two-pointers.html"},{default:e(()=>[yn]),_:1}),t(),xn]),wn,n("td",jn,[n("a",On,[t("🀄️"),s(o)]),t(),n("a",En,[t("🔗"),s(o)])])]),n("tr",null,[In,Nn,qn,n("td",Cn,[s(a,{to:"/tag/array.html"},{default:e(()=>[Ln]),_:1})]),Vn,n("td",Tn,[n("a",Bn,[t("🀄️"),s(o)]),t(),n("a",Rn,[t("🔗"),s(o)])])]),n("tr",null,[Sn,Gn,Mn,n("td",zn,[s(a,{to:"/tag/array.html"},{default:e(()=>[An]),_:1})]),Dn,n("td",Fn,[n("a",Hn,[t("🀄️"),s(o)]),t(),n("a",Jn,[t("🔗"),s(o)])])])])])])}const Wn=c(k,[["render",Kn],["__file","0015.html.vue"]]);export{Wn as default};
