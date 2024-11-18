import{_ as i,r as l,o as r,c as d,a as n,b as t,d as s,w as e,f as u,e as c}from"./app-9Xw5divW.js";const h={},_=n("h1",{id:"_75-颜色分类",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_75-颜色分类","aria-hidden":"true"},"#"),t(" 75. 颜色分类")],-1),k=n("code",null,"数组",-1),g=n("code",null,"双指针",-1),m=n("code",null,"排序",-1),b={href:"https://leetcode.cn/problems/sort-colors",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"力扣",-1),v={href:"https://leetcode.com/problems/sort-colors",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"LeetCode",-1),x=n("h2",{id:"题目",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#题目","aria-hidden":"true"},"#"),t(" 题目")],-1),w=n("code",null,"nums",-1),E=n("code",null,"n",-1),q={href:"https://en.wikipedia.org/wiki/In-place_algorithm",target:"_blank",rel:"noopener noreferrer"},C=c('<p>We will use the integers <code>0</code>, <code>1</code>, and <code>2</code> to represent the color red, white, and blue, respectively.</p><p>You must solve this problem without using the library&#39;s sort function.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [2,0,2,1,1,0]</p><p>Output: [0,0,1,1,2,2]</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [2,0,1]</p><p>Output: [0,1,2]</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>n == nums.length</code></li><li><code>1 &lt;= n &lt;= 300</code></li><li><code>nums[i]</code> is either <code>0</code>, <code>1</code>, or <code>2</code>.</li></ul><p><strong>Follow up:</strong> Could you come up with a one-pass algorithm using only constant extra space?</p><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2>',10),j=n("code",null,"n",-1),I=n("code",null,"nums",-1),B={href:"https://baike.baidu.com/item/%E5%8E%9F%E5%9C%B0%E7%AE%97%E6%B3%95",target:"_blank",rel:"noopener noreferrer"},L=c(`<p>我们使用整数 <code>0</code>、 <code>1</code> 和 <code>2</code> 分别表示红色、白色和蓝色。</p><p>必须在不使用库内置的 <code>sort</code> 函数的情况下解决这个问题。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> nums = [2,0,2,1,1,0]</p><p><strong>输出：</strong>[0,0,1,1,2,2]</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> nums = [2,0,1]</p><p><strong>输出：</strong>[0,1,2]</p></blockquote><p><strong>提示：</strong></p><ul><li><code>n == nums.length</code></li><li><code>1 &lt;= n &lt;= 300</code></li><li><code>nums[i]</code> 为 <code>0</code>、<code>1</code> 或 <code>2</code></li></ul><p><strong>进阶：</strong></p><ul><li>你能想出一个仅使用常数空间的一趟扫描算法吗？</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>可以通过使用 <strong>荷兰国旗算法</strong> 来解决，这个算法是由 Edsger W. Dijkstra 提出的，核心思想是使用<strong>三指针</strong>来对数组进行分类。</p><ol><li><p><strong>定义三个指针</strong>：</p><ul><li><code>low</code> 指针：用于追踪 0 的位置。</li><li><code>high</code> 指针：用于追踪 2 的位置。</li><li><code>cur</code> 指针：用于遍历数组。</li></ul></li><li><p><strong>处理过程</strong>：</p><ul><li><p>遍历数组，使用 <code>cur</code> 指针。</p></li><li><p>如果 <code>cur</code> 指向的元素是：</p><ul><li><strong>0</strong>：将其与 <code>low</code> 位置的元素交换，然后移动 <code>low</code> 和 <code>cur</code> 指针。</li><li><strong>1</strong>：不做处理，直接移动 <code>cur</code> 指针。</li><li><strong>2</strong>：将其与 <code>high</code> 位置的元素交换，并将 <code>high</code> 指针左移（交换后 <code>cur</code> 指向的元素仍需要处理，因此不能移动 <code>cur</code> 指针）。</li></ul></li><li><p>完成遍历后，数组中的 0 将位于前面，1 位于中间，2 位于最后。</p></li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，数组只遍历了一次，每次迭代中执行常数次的交换或指针移动操作。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，排序是原地进行的，使用了常量额外空间。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">void</span><span class="token punctuation">}</span></span> Do not return anything, modify nums in-place instead.
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">sortColors</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> cur <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
		low <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
		high <span class="token operator">=</span> nums<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>cur <span class="token operator">&lt;=</span> high<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>cur<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token punctuation">[</span>nums<span class="token punctuation">[</span>cur<span class="token punctuation">]</span><span class="token punctuation">,</span> nums<span class="token punctuation">[</span>low<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>nums<span class="token punctuation">[</span>low<span class="token punctuation">]</span><span class="token punctuation">,</span> nums<span class="token punctuation">[</span>cur<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
			cur<span class="token operator">++</span><span class="token punctuation">;</span>
			low<span class="token operator">++</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>cur<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			cur<span class="token operator">++</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			<span class="token punctuation">[</span>nums<span class="token punctuation">[</span>cur<span class="token punctuation">]</span><span class="token punctuation">,</span> nums<span class="token punctuation">[</span>high<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>nums<span class="token punctuation">[</span>high<span class="token punctuation">]</span><span class="token punctuation">,</span> nums<span class="token punctuation">[</span>cur<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
			high<span class="token operator">--</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,18),N=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),V=n("td",{style:{"text-align":"center"}},"148",-1),O=n("td",{style:{"text-align":"left"}},"排序链表",-1),D={style:{"text-align":"center"}},F={style:{"text-align":"left"}},R=n("code",null,"链表",-1),W=n("code",null,"双指针",-1),A=n("code",null,"分治",-1),G=n("code",null,"2+",-1),M=n("td",{style:{"text-align":"center"}},"🟠",-1),S={style:{"text-align":"center"}},T={href:"https://leetcode.cn/problems/sort-list",target:"_blank",rel:"noopener noreferrer"},Y={href:"https://leetcode.com/problems/sort-list",target:"_blank",rel:"noopener noreferrer"},z=n("td",{style:{"text-align":"center"}},"280",-1),H=n("td",{style:{"text-align":"left"}},"摆动排序 🔒",-1),J=n("td",{style:{"text-align":"center"}},null,-1),K={style:{"text-align":"left"}},P=n("code",null,"贪心",-1),Q=n("code",null,"数组",-1),U=n("code",null,"排序",-1),X=n("td",{style:{"text-align":"center"}},"🟠",-1),Z={style:{"text-align":"center"}},$={href:"https://leetcode.cn/problems/wiggle-sort",target:"_blank",rel:"noopener noreferrer"},nn={href:"https://leetcode.com/problems/wiggle-sort",target:"_blank",rel:"noopener noreferrer"},tn=n("td",{style:{"text-align":"center"}},"324",-1),sn=n("td",{style:{"text-align":"left"}},"摆动排序 II",-1),en=n("td",{style:{"text-align":"center"}},null,-1),on={style:{"text-align":"left"}},an=n("code",null,"贪心",-1),ln=n("code",null,"数组",-1),cn=n("code",null,"分治",-1),pn=n("code",null,"2+",-1),rn=n("td",{style:{"text-align":"center"}},"🟠",-1),dn={style:{"text-align":"center"}},un={href:"https://leetcode.cn/problems/wiggle-sort-ii",target:"_blank",rel:"noopener noreferrer"},hn={href:"https://leetcode.com/problems/wiggle-sort-ii",target:"_blank",rel:"noopener noreferrer"};function _n(kn,gn){const p=l("font"),o=l("RouterLink"),a=l("ExternalLinkIcon");return r(),d("div",null,[_,n("p",null,[t("🟠 "),s(p,{color:"#ffb800"},{default:e(()=>[t("Medium")]),_:1}),t("  🔖  "),s(o,{to:"/tag/array.html"},{default:e(()=>[k]),_:1}),t(),s(o,{to:"/tag/two-pointers.html"},{default:e(()=>[g]),_:1}),t(),s(o,{to:"/tag/sorting.html"},{default:e(()=>[m]),_:1}),t("  🔗 "),n("a",b,[f,s(a)]),t(),n("a",v,[y,s(a)])]),x,n("p",null,[t("Given an array "),w,t(" with "),E,t(" objects colored red, white, or blue, sort them **"),n("a",q,[t("in-place"),s(a)]),t(" **so that objects of the same color are adjacent, with the colors in the order red, white, and blue.")]),C,n("p",null,[t("给定一个包含红色、白色和蓝色、共 "),j,t(" 个元素的数组 "),I,t(" ，"),n("strong",null,[n("a",B,[t("原地"),s(a)])]),t(" 对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。")]),L,u(" prettier-ignore "),n("table",null,[N,n("tbody",null,[n("tr",null,[V,O,n("td",D,[s(o,{to:"/problem/0148.html"},{default:e(()=>[t("[✓]")]),_:1})]),n("td",F,[s(o,{to:"/tag/linked-list.html"},{default:e(()=>[R]),_:1}),t(),s(o,{to:"/tag/two-pointers.html"},{default:e(()=>[W]),_:1}),t(),s(o,{to:"/tag/divide-and-conquer.html"},{default:e(()=>[A]),_:1}),t(),G]),M,n("td",S,[n("a",T,[t("🀄️"),s(a)]),t(),n("a",Y,[t("🔗"),s(a)])])]),n("tr",null,[z,H,J,n("td",K,[s(o,{to:"/tag/greedy.html"},{default:e(()=>[P]),_:1}),t(),s(o,{to:"/tag/array.html"},{default:e(()=>[Q]),_:1}),t(),s(o,{to:"/tag/sorting.html"},{default:e(()=>[U]),_:1})]),X,n("td",Z,[n("a",$,[t("🀄️"),s(a)]),t(),n("a",nn,[t("🔗"),s(a)])])]),n("tr",null,[tn,sn,en,n("td",on,[s(o,{to:"/tag/greedy.html"},{default:e(()=>[an]),_:1}),t(),s(o,{to:"/tag/array.html"},{default:e(()=>[ln]),_:1}),t(),s(o,{to:"/tag/divide-and-conquer.html"},{default:e(()=>[cn]),_:1}),t(),pn]),rn,n("td",dn,[n("a",un,[t("🀄️"),s(a)]),t(),n("a",hn,[t("🔗"),s(a)])])])])])])}const bn=i(h,[["render",_n],["__file","0075.html.vue"]]);export{bn as default};
