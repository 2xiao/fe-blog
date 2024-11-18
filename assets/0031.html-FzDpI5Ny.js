import{_ as i,r as l,o as p,c as r,a as n,b as t,d as e,w as s,f as d,e as u}from"./app-9Xw5divW.js";const h={},m=n("h1",{id:"_31-下一个排列",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_31-下一个排列","aria-hidden":"true"},"#"),t(" 31. 下一个排列")],-1),_=n("code",null,"数组",-1),k=n("code",null,"双指针",-1),g={href:"https://leetcode.cn/problems/next-permutation",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"力扣",-1),b={href:"https://leetcode.com/problems/next-permutation",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"LeetCode",-1),v=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>A <strong>permutation</strong> of an array of integers is an arrangement of its members into a sequence or linear order.</p><ul><li>For example, for <code>arr = [1,2,3]</code>, the following are all the permutations of <code>arr</code>: <code>[1,2,3], [1,3,2], [2, 1, 3], [2, 3, 1], [3,1,2], [3,2,1]</code>.</li></ul><p>The <strong>next permutation</strong> of an array of integers is the next lexicographically greater permutation of its integer. More formally, if all the permutations of the array are sorted in one container according to their lexicographical order, then the <strong>next permutation</strong> of that array is the permutation that follows it in the sorted container. If such arrangement is not possible, the array must be rearranged as the lowest possible order (i.e., sorted in ascending order).</p><ul><li>For example, the next permutation of <code>arr = [1,2,3]</code> is <code>[1,3,2]</code>.</li><li>Similarly, the next permutation of <code>arr = [2,3,1]</code> is <code>[3,1,2]</code>.</li><li>While the next permutation of <code>arr = [3,2,1]</code> is <code>[1,2,3]</code> because <code>[3,2,1]</code> does not have a lexicographical larger rearrangement.</li></ul><p>Given an array of integers <code>nums</code>, <em>find the next permutation of</em> <code>nums</code>.</p><p>The replacement must be <strong>[in place](http://en.wikipedia.org/wiki/In- place_algorithm)</strong> and use only constant extra memory.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [1,2,3]</p><p>Output: [1,3,2]</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [3,2,1]</p><p>Output: [1,2,3]</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: nums = [1,1,5]</p><p>Output: [1,5,1]</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 100</code></li><li><code>0 &lt;= nums[i] &lt;= 100</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>整数数组的一个 <strong>排列</strong> 就是将其所有成员以序列或线性顺序排列。</p><ul><li>例如，<code>arr = [1,2,3]</code> ，以下这些都可以视作 <code>arr</code> 的排列：<code>[1,2,3]、[1,3,2]、[3,1,2]、[2,3,1]</code> 。</li></ul><p>整数数组的 <strong>下一个排列</strong> 是指其整数的下一个字典序更大的排列。更正式地，如果数组的所有排列根据其字典顺序从小到大排列在一个容器中，那么数组的 <strong>下一个排列</strong> 就是在这个有序容器中排在它后面的那个排列。如果不存在下一个更大的排列，那么这个数组必须重排为字典序最小的排列（即，其元素按升序排列）。</p><ul><li>例如，<code>arr = [1,2,3]</code> 的下一个排列是 <code>[1,3,2]</code> 。</li><li>类似地，<code>arr = [2,3,1]</code> 的下一个排列是 <code>[3,1,2]</code> 。</li><li>而 <code>arr = [3,2,1]</code> 的下一个排列是 <code>[1,2,3]</code> ，因为 <code>[3,2,1]</code> 不存在一个字典序更大的排列。</li></ul><p>给你一个整数数组 <code>nums</code> ，找出 <code>nums</code> 的下一个排列。</p><p>必须 <strong>原地</strong> 修改，只允许使用额外常数空间。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><strong>从后往前找到第一个下降点</strong>： <ul><li>从右向左扫描数组，找到第一个<strong>破坏升序</strong>的元素，也就是说，找到第一个位置 <code>i</code>，使得 <code>nums[i] &lt; nums[i + 1]</code>。这个位置 <code>i</code> 及其之前的元素是无法变得更大的，而我们可以通过调整 <code>i</code> 之后的元素来得到下一个更大的排列。</li></ul></li><li><strong>在 i 之后找到比 nums[i] 大的最小元素</strong>： <ul><li>继续从右向左扫描，找到第一个比 <code>nums[i]</code> 大的元素 <code>nums[j]</code>。交换 <code>nums[i]</code> 和 <code>nums[j]</code>，这样可以确保得到比当前排列大的下一个排列。</li></ul></li><li><strong>将 i 之后的元素翻转</strong>： <ul><li>由于 <code>i</code> 之后的部分是降序排列的（因为我们从后向前扫描），我们需要将这部分反转，变成升序排列，以获得字典序中下一个更大的排列。</li></ul></li><li><strong>特殊情况</strong>： <ul><li>如果整个数组是降序排列的，比如 <code>[3, 2, 1]</code>，那么我们已经处于字典序的最大排列，此时直接将整个数组反转为升序排列即可。</li></ul></li></ol><p>以数组 <code>[1, 2, 3, 4]</code> 为例：</p><ol><li><p>从后往前找到第一个下降点：</p><ul><li>从右向左看，<code>3 &lt; 4</code>，因此 <code>i = 2</code>（<code>nums[2] = 3</code>）。</li></ul></li><li><p>找到比 <code>3</code> 大的最小数：</p><ul><li>从右向左看，<code>4</code> 是比 <code>3</code> 大的最小数，所以 <code>j = 3</code>（<code>nums[3] = 4</code>）。</li><li>交换 <code>nums[i]</code> 和 <code>nums[j]</code>，即 <code>nums[2]</code> 和 <code>nums[3]</code> 交换，数组变为：<code>[1, 2, 4, 3]</code></li></ul></li><li><p>反转 <code>i</code> 之后的部分：</p><ul><li>现在 <code>i = 2</code>，<code>i</code> 之后的部分是 <code>[3]</code>。由于反转单个元素没有任何变化，所以反转后仍然是 <code>[3]</code>。</li></ul></li></ol><p>经过这三个步骤后，数组 <code>[1, 2, 3, 4]</code> 的下一个排列是： <code>[1, 2, 4, 3]</code></p><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析：</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是数组的长度。我们从右向左扫描数组，最多扫描两次（一次找到下降点，一次找到交换点），然后再翻转一部分数组，所以整体复杂度是线性时间。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，因为只需要常数个额外的变量进行原地交换和反转操作，没有使用额外的数组。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">nextPermutation</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> i <span class="token operator">=</span> nums<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">;</span>

	<span class="token comment">// 从右向左找到第一个下降点</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&gt;=</span> nums<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		i<span class="token operator">--</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 说明找到了第一个下降点</span>
		<span class="token keyword">let</span> j <span class="token operator">=</span> nums<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
		<span class="token comment">// 找到第一个比 nums[i] 大的数</span>
		<span class="token keyword">while</span> <span class="token punctuation">(</span>j <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">&lt;=</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			j<span class="token operator">--</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token comment">// 交换 i 和 j 位置上的数</span>
		<span class="token punctuation">[</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">,</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 翻转 i 之后的部分，使其变为升序</span>
	<span class="token keyword">let</span> left <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> right <span class="token operator">=</span> nums<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token punctuation">[</span>nums<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">,</span> nums<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>nums<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">,</span> nums<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
		left<span class="token operator">++</span><span class="token punctuation">;</span>
		right<span class="token operator">--</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,32),y=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),w=n("td",{style:{"text-align":"center"}},"46",-1),j=n("td",{style:{"text-align":"left"}},"全排列",-1),I={style:{"text-align":"center"}},q={style:{"text-align":"left"}},E=n("code",null,"数组",-1),C=n("code",null,"回溯",-1),L=n("td",{style:{"text-align":"center"}},"🟠",-1),N={style:{"text-align":"center"}},O={href:"https://leetcode.cn/problems/permutations",target:"_blank",rel:"noopener noreferrer"},V={href:"https://leetcode.com/problems/permutations",target:"_blank",rel:"noopener noreferrer"},B=n("td",{style:{"text-align":"center"}},"47",-1),T=n("td",{style:{"text-align":"left"}},"全排列 II",-1),F={style:{"text-align":"center"}},M={style:{"text-align":"left"}},R=n("code",null,"数组",-1),S=n("code",null,"回溯",-1),A=n("td",{style:{"text-align":"center"}},"🟠",-1),G={style:{"text-align":"center"}},P={href:"https://leetcode.cn/problems/permutations-ii",target:"_blank",rel:"noopener noreferrer"},W={href:"https://leetcode.com/problems/permutations-ii",target:"_blank",rel:"noopener noreferrer"},z=n("td",{style:{"text-align":"center"}},"60",-1),D=n("td",{style:{"text-align":"left"}},"排列序列",-1),H=n("td",{style:{"text-align":"center"}},null,-1),J={style:{"text-align":"left"}},K=n("code",null,"递归",-1),Q=n("code",null,"数学",-1),U=n("td",{style:{"text-align":"center"}},"🔴",-1),X={style:{"text-align":"center"}},Y={href:"https://leetcode.cn/problems/permutation-sequence",target:"_blank",rel:"noopener noreferrer"},Z={href:"https://leetcode.com/problems/permutation-sequence",target:"_blank",rel:"noopener noreferrer"},$=n("td",{style:{"text-align":"center"}},"267",-1),nn=n("td",{style:{"text-align":"left"}},"回文排列 II 🔒",-1),tn=n("td",{style:{"text-align":"center"}},null,-1),en={style:{"text-align":"left"}},sn=n("code",null,"哈希表",-1),an=n("code",null,"字符串",-1),on=n("code",null,"回溯",-1),ln=n("td",{style:{"text-align":"center"}},"🟠",-1),cn={style:{"text-align":"center"}},pn={href:"https://leetcode.cn/problems/palindrome-permutation-ii",target:"_blank",rel:"noopener noreferrer"},rn={href:"https://leetcode.com/problems/palindrome-permutation-ii",target:"_blank",rel:"noopener noreferrer"},dn=n("td",{style:{"text-align":"center"}},"1850",-1),un=n("td",{style:{"text-align":"left"}},"邻位交换的最小次数",-1),hn=n("td",{style:{"text-align":"center"}},null,-1),mn={style:{"text-align":"left"}},_n=n("code",null,"贪心",-1),kn=n("code",null,"双指针",-1),gn=n("code",null,"字符串",-1),fn=n("td",{style:{"text-align":"center"}},"🟠",-1),bn={style:{"text-align":"center"}},xn={href:"https://leetcode.cn/problems/minimum-adjacent-swaps-to-reach-the-kth-smallest-number",target:"_blank",rel:"noopener noreferrer"},vn={href:"https://leetcode.com/problems/minimum-adjacent-swaps-to-reach-the-kth-smallest-number",target:"_blank",rel:"noopener noreferrer"};function yn(wn,jn){const c=l("font"),a=l("RouterLink"),o=l("ExternalLinkIcon");return p(),r("div",null,[m,n("p",null,[t("🟠 "),e(c,{color:"#ffb800"},{default:s(()=>[t("Medium")]),_:1}),t("  🔖  "),e(a,{to:"/tag/array.html"},{default:s(()=>[_]),_:1}),t(),e(a,{to:"/tag/two-pointers.html"},{default:s(()=>[k]),_:1}),t("  🔗 "),n("a",g,[f,e(o)]),t(),n("a",b,[x,e(o)])]),v,d(" prettier-ignore "),n("table",null,[y,n("tbody",null,[n("tr",null,[w,j,n("td",I,[e(a,{to:"/problem/0046.html"},{default:s(()=>[t("[✓]")]),_:1})]),n("td",q,[e(a,{to:"/tag/array.html"},{default:s(()=>[E]),_:1}),t(),e(a,{to:"/tag/backtracking.html"},{default:s(()=>[C]),_:1})]),L,n("td",N,[n("a",O,[t("🀄️"),e(o)]),t(),n("a",V,[t("🔗"),e(o)])])]),n("tr",null,[B,T,n("td",F,[e(a,{to:"/problem/0047.html"},{default:s(()=>[t("[✓]")]),_:1})]),n("td",M,[e(a,{to:"/tag/array.html"},{default:s(()=>[R]),_:1}),t(),e(a,{to:"/tag/backtracking.html"},{default:s(()=>[S]),_:1})]),A,n("td",G,[n("a",P,[t("🀄️"),e(o)]),t(),n("a",W,[t("🔗"),e(o)])])]),n("tr",null,[z,D,H,n("td",J,[e(a,{to:"/tag/recursion.html"},{default:s(()=>[K]),_:1}),t(),e(a,{to:"/tag/math.html"},{default:s(()=>[Q]),_:1})]),U,n("td",X,[n("a",Y,[t("🀄️"),e(o)]),t(),n("a",Z,[t("🔗"),e(o)])])]),n("tr",null,[$,nn,tn,n("td",en,[e(a,{to:"/tag/hash-table.html"},{default:s(()=>[sn]),_:1}),t(),e(a,{to:"/tag/string.html"},{default:s(()=>[an]),_:1}),t(),e(a,{to:"/tag/backtracking.html"},{default:s(()=>[on]),_:1})]),ln,n("td",cn,[n("a",pn,[t("🀄️"),e(o)]),t(),n("a",rn,[t("🔗"),e(o)])])]),n("tr",null,[dn,un,hn,n("td",mn,[e(a,{to:"/tag/greedy.html"},{default:s(()=>[_n]),_:1}),t(),e(a,{to:"/tag/two-pointers.html"},{default:s(()=>[kn]),_:1}),t(),e(a,{to:"/tag/string.html"},{default:s(()=>[gn]),_:1})]),fn,n("td",bn,[n("a",xn,[t("🀄️"),e(o)]),t(),n("a",vn,[t("🔗"),e(o)])])])])])])}const qn=i(h,[["render",yn],["__file","0031.html.vue"]]);export{qn as default};
