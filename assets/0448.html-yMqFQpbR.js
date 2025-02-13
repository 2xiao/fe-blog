import{_ as r,r as l,o as i,c as p,a as t,b as n,d as e,w as s,f as d,e as u}from"./app-MXSjQbID.js";const _={},h=t("h1",{id:"_448-找到所有数组中消失的数字",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_448-找到所有数组中消失的数字","aria-hidden":"true"},"#"),n(" 448. 找到所有数组中消失的数字")],-1),m=t("code",null,"数组",-1),g=t("code",null,"哈希表",-1),k={href:"https://leetcode.cn/problems/find-all-numbers-disappeared-in-an-array",target:"_blank",rel:"noopener noreferrer"},f=t("code",null,"力扣",-1),b={href:"https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array",target:"_blank",rel:"noopener noreferrer"},y=t("code",null,"LeetCode",-1),x=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an array <code>nums</code> of <code>n</code> integers where <code>nums[i]</code> is in the range <code>[1, n]</code>, return <em>an array of all the integers in the range</em> <code>[1, n]</code> <em>that do not appear in</em> <code>nums</code>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [4,3,2,7,8,2,3,1]</p><p>Output: [5,6]</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [1,1]</p><p>Output: [2]</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>n == nums.length</code></li><li><code>1 &lt;= n &lt;= 10^5</code></li><li><code>1 &lt;= nums[i] &lt;= n</code></li></ul><p><strong>Follow up:</strong> Could you do it without extra space and in <code>O(n)</code> runtime? You may assume the returned list does not count as extra space.</p><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个含 <code>n</code> 个整数的数组 <code>nums</code> ，其中 <code>nums[i]</code> 在区间 <code>[1, n]</code> 内。请你找出所有在 <code>[1, n]</code> 范围内但没有出现在 <code>nums</code> 中的数字，并以数组的形式返回结果。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> nums = [4,3,2,7,8,2,3,1]</p><p><strong>输出：</strong>[5,6]</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> nums = [1,1]</p><p><strong>输出：</strong>[2]</p></blockquote><p><strong>提示：</strong></p><ul><li><code>n == nums.length</code></li><li><code>1 &lt;= n &lt;= 10^5</code></li><li><code>1 &lt;= nums[i] &lt;= n</code></li></ul><p><strong>进阶：</strong> 你能在不使用额外空间且时间复杂度为 <strong><code>O(n)</code></strong> 的情况下解决这个问题吗? 你可以假定返回的数组不算在额外空间内。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>为了在 <strong>O(n)</strong> 时间复杂度和 <strong>O(1)</strong> 空间复杂度的条件下解决这个问题，我们可以利用数组的原地修改来标记已经出现过的数字。具体来说，利用数组元素值的<strong>符号</strong>来标记已经出现的数字，从而避免使用额外空间。</p><ol><li>数组 <code>nums</code> 中的每个元素都在 <code>[1, n]</code> 区间内，可以通过将数组元素 <code>nums[i]</code> 的值作为数组的索引来表示该数字是否出现过。</li><li>遍历数组 <code>nums</code>，对于每个元素 <code>num</code>，将对应的索引 <code>num - 1</code> 位置的值变为负数，这样可以标记该位置对应的数字已经出现。</li><li>最后，遍历数组 <code>nums</code>，查找所有值为正数的元素，它们的索引对应的数字就是没有出现过的数字。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>。遍历数组两次，每次遍历的时间复杂度是 O(n)。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>。只使用了常数空间来存储结果数组 <code>result</code>，不需要额外的空间。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">findDisappearedNumbers</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

	<span class="token comment">// 标记出现过的数字</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> num <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>num <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			nums<span class="token punctuation">[</span>num <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token operator">-</span>nums<span class="token punctuation">[</span>num <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 将对应位置标记为负</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 查找未出现的数字</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 将未出现的数字加入结果</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,26),v=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"center"}},"难度"),t("th",{style:{"text-align":"center"}},"力扣")])],-1),w=t("td",{style:{"text-align":"center"}},"41",-1),q=t("td",{style:{"text-align":"left"}},"缺失的第一个正数",-1),O={style:{"text-align":"center"}},I={style:{"text-align":"left"}},C=t("code",null,"数组",-1),E=t("code",null,"哈希表",-1),N=t("td",{style:{"text-align":"center"}},"🔴",-1),L={style:{"text-align":"center"}},V={href:"https://leetcode.cn/problems/first-missing-positive",target:"_blank",rel:"noopener noreferrer"},j={href:"https://leetcode.com/problems/first-missing-positive",target:"_blank",rel:"noopener noreferrer"},B=t("td",{style:{"text-align":"center"}},"442",-1),R=t("td",{style:{"text-align":"left"}},"数组中重复的数据",-1),D={style:{"text-align":"center"}},F={style:{"text-align":"left"}},G=t("code",null,"数组",-1),K=t("code",null,"哈希表",-1),M=t("td",{style:{"text-align":"center"}},"🟠",-1),S={style:{"text-align":"center"}},T={href:"https://leetcode.cn/problems/find-all-duplicates-in-an-array",target:"_blank",rel:"noopener noreferrer"},Y={href:"https://leetcode.com/problems/find-all-duplicates-in-an-array",target:"_blank",rel:"noopener noreferrer"},z=t("td",{style:{"text-align":"center"}},"1980",-1),A=t("td",{style:{"text-align":"left"}},"找出不同的二进制字符串",-1),H=t("td",{style:{"text-align":"center"}},null,-1),J={style:{"text-align":"left"}},P=t("code",null,"数组",-1),Q=t("code",null,"哈希表",-1),U=t("code",null,"字符串",-1),W=t("code",null,"1+",-1),X=t("td",{style:{"text-align":"center"}},"🟠",-1),Z={style:{"text-align":"center"}},$={href:"https://leetcode.cn/problems/find-unique-binary-string",target:"_blank",rel:"noopener noreferrer"},tt={href:"https://leetcode.com/problems/find-unique-binary-string",target:"_blank",rel:"noopener noreferrer"},nt=t("td",{style:{"text-align":"center"}},"2195",-1),et=t("td",{style:{"text-align":"left"}},"向数组中追加 K 个整数",-1),st=t("td",{style:{"text-align":"center"}},null,-1),at={style:{"text-align":"left"}},ot=t("code",null,"贪心",-1),lt=t("code",null,"数组",-1),ct=t("code",null,"数学",-1),rt=t("code",null,"1+",-1),it=t("td",{style:{"text-align":"center"}},"🟠",-1),pt={style:{"text-align":"center"}},dt={href:"https://leetcode.cn/problems/append-k-integers-with-minimal-sum",target:"_blank",rel:"noopener noreferrer"},ut={href:"https://leetcode.com/problems/append-k-integers-with-minimal-sum",target:"_blank",rel:"noopener noreferrer"},_t=t("td",{style:{"text-align":"center"}},"2295",-1),ht=t("td",{style:{"text-align":"left"}},"替换数组中的元素",-1),mt=t("td",{style:{"text-align":"center"}},null,-1),gt={style:{"text-align":"left"}},kt=t("code",null,"数组",-1),ft=t("code",null,"哈希表",-1),bt=t("code",null,"模拟",-1),yt=t("td",{style:{"text-align":"center"}},"🟠",-1),xt={style:{"text-align":"center"}},vt={href:"https://leetcode.cn/problems/replace-elements-in-an-array",target:"_blank",rel:"noopener noreferrer"},wt={href:"https://leetcode.com/problems/replace-elements-in-an-array",target:"_blank",rel:"noopener noreferrer"},qt=t("td",{style:{"text-align":"center"}},"2554",-1),Ot=t("td",{style:{"text-align":"left"}},"从一个范围内选择最多整数 I",-1),It={style:{"text-align":"center"}},Ct={style:{"text-align":"left"}},Et=t("code",null,"贪心",-1),Nt=t("code",null,"数组",-1),Lt=t("code",null,"哈希表",-1),Vt=t("code",null,"2+",-1),jt=t("td",{style:{"text-align":"center"}},"🟠",-1),Bt={style:{"text-align":"center"}},Rt={href:"https://leetcode.cn/problems/maximum-number-of-integers-to-choose-from-a-range-i",target:"_blank",rel:"noopener noreferrer"},Dt={href:"https://leetcode.com/problems/maximum-number-of-integers-to-choose-from-a-range-i",target:"_blank",rel:"noopener noreferrer"},Ft=t("td",{style:{"text-align":"center"}},"2557",-1),Gt=t("td",{style:{"text-align":"left"}},"从一个范围内选择最多整数 II 🔒",-1),Kt=t("td",{style:{"text-align":"center"}},null,-1),Mt={style:{"text-align":"left"}},St=t("code",null,"贪心",-1),Tt=t("code",null,"数组",-1),Yt=t("code",null,"二分查找",-1),zt=t("code",null,"1+",-1),At=t("td",{style:{"text-align":"center"}},"🟠",-1),Ht={style:{"text-align":"center"}},Jt={href:"https://leetcode.cn/problems/maximum-number-of-integers-to-choose-from-a-range-ii",target:"_blank",rel:"noopener noreferrer"},Pt={href:"https://leetcode.com/problems/maximum-number-of-integers-to-choose-from-a-range-ii",target:"_blank",rel:"noopener noreferrer"};function Qt(Ut,Wt){const c=l("font"),a=l("RouterLink"),o=l("ExternalLinkIcon");return i(),p("div",null,[h,t("p",null,[n("🟢 "),e(c,{color:"#15bd66"},{default:s(()=>[n("Easy")]),_:1}),n("  🔖  "),e(a,{to:"/tag/array.html"},{default:s(()=>[m]),_:1}),n(),e(a,{to:"/tag/hash-table.html"},{default:s(()=>[g]),_:1}),n("  🔗 "),t("a",k,[f,e(o)]),n(),t("a",b,[y,e(o)])]),x,d(" prettier-ignore "),t("table",null,[v,t("tbody",null,[t("tr",null,[w,q,t("td",O,[e(a,{to:"/problem/0041.html"},{default:s(()=>[n("[✓]")]),_:1})]),t("td",I,[e(a,{to:"/tag/array.html"},{default:s(()=>[C]),_:1}),n(),e(a,{to:"/tag/hash-table.html"},{default:s(()=>[E]),_:1})]),N,t("td",L,[t("a",V,[n("🀄️"),e(o)]),n(),t("a",j,[n("🔗"),e(o)])])]),t("tr",null,[B,R,t("td",D,[e(a,{to:"/problem/0442.html"},{default:s(()=>[n("[✓]")]),_:1})]),t("td",F,[e(a,{to:"/tag/array.html"},{default:s(()=>[G]),_:1}),n(),e(a,{to:"/tag/hash-table.html"},{default:s(()=>[K]),_:1})]),M,t("td",S,[t("a",T,[n("🀄️"),e(o)]),n(),t("a",Y,[n("🔗"),e(o)])])]),t("tr",null,[z,A,H,t("td",J,[e(a,{to:"/tag/array.html"},{default:s(()=>[P]),_:1}),n(),e(a,{to:"/tag/hash-table.html"},{default:s(()=>[Q]),_:1}),n(),e(a,{to:"/tag/string.html"},{default:s(()=>[U]),_:1}),n(),W]),X,t("td",Z,[t("a",$,[n("🀄️"),e(o)]),n(),t("a",tt,[n("🔗"),e(o)])])]),t("tr",null,[nt,et,st,t("td",at,[e(a,{to:"/tag/greedy.html"},{default:s(()=>[ot]),_:1}),n(),e(a,{to:"/tag/array.html"},{default:s(()=>[lt]),_:1}),n(),e(a,{to:"/tag/math.html"},{default:s(()=>[ct]),_:1}),n(),rt]),it,t("td",pt,[t("a",dt,[n("🀄️"),e(o)]),n(),t("a",ut,[n("🔗"),e(o)])])]),t("tr",null,[_t,ht,mt,t("td",gt,[e(a,{to:"/tag/array.html"},{default:s(()=>[kt]),_:1}),n(),e(a,{to:"/tag/hash-table.html"},{default:s(()=>[ft]),_:1}),n(),e(a,{to:"/tag/simulation.html"},{default:s(()=>[bt]),_:1})]),yt,t("td",xt,[t("a",vt,[n("🀄️"),e(o)]),n(),t("a",wt,[n("🔗"),e(o)])])]),t("tr",null,[qt,Ot,t("td",It,[e(a,{to:"/problem/2554.html"},{default:s(()=>[n("[✓]")]),_:1})]),t("td",Ct,[e(a,{to:"/tag/greedy.html"},{default:s(()=>[Et]),_:1}),n(),e(a,{to:"/tag/array.html"},{default:s(()=>[Nt]),_:1}),n(),e(a,{to:"/tag/hash-table.html"},{default:s(()=>[Lt]),_:1}),n(),Vt]),jt,t("td",Bt,[t("a",Rt,[n("🀄️"),e(o)]),n(),t("a",Dt,[n("🔗"),e(o)])])]),t("tr",null,[Ft,Gt,Kt,t("td",Mt,[e(a,{to:"/tag/greedy.html"},{default:s(()=>[St]),_:1}),n(),e(a,{to:"/tag/array.html"},{default:s(()=>[Tt]),_:1}),n(),e(a,{to:"/tag/binary-search.html"},{default:s(()=>[Yt]),_:1}),n(),zt]),At,t("td",Ht,[t("a",Jt,[n("🀄️"),e(o)]),n(),t("a",Pt,[n("🔗"),e(o)])])])])])])}const Zt=r(_,[["render",Qt],["__file","0448.html.vue"]]);export{Zt as default};
