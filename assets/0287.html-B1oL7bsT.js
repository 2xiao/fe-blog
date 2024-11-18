import{_ as r,r as l,o as i,c as p,a as t,b as n,d as e,w as s,f as d,e as u}from"./app-9Xw5divW.js";const h={},_=t("h1",{id:"_287-寻找重复数",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_287-寻找重复数","aria-hidden":"true"},"#"),n(" 287. 寻找重复数")],-1),m=t("code",null,"位运算",-1),g=t("code",null,"数组",-1),k=t("code",null,"双指针",-1),b=t("code",null,"二分查找",-1),f={href:"https://leetcode.cn/problems/find-the-duplicate-number",target:"_blank",rel:"noopener noreferrer"},y=t("code",null,"力扣",-1),v={href:"https://leetcode.com/problems/find-the-duplicate-number",target:"_blank",rel:"noopener noreferrer"},x=t("code",null,"LeetCode",-1),w=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an array of integers <code>nums</code> containing <code>n + 1</code> integers where each integer is in the range <code>[1, n]</code> inclusive.</p><p>There is only <strong>one repeated number</strong> in <code>nums</code>, return <em>this repeated number</em>.</p><p>You must solve the problem <strong>without</strong> modifying the array <code>nums</code> and using only constant extra space.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [1,3,4,2,2]</p><p>Output: 2</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [3,1,3,4,2]</p><p>Output: 3</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: nums = [3,3,3,3,3]</p><p>Output: 3</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= n &lt;= 10^5</code></li><li><code>nums.length == n + 1</code></li><li><code>1 &lt;= nums[i] &lt;= n</code></li><li>All the integers in <code>nums</code> appear only <strong>once</strong> except for <strong>precisely one integer</strong> which appears <strong>two or more</strong> times.</li></ul><p><strong>Follow up:</strong></p><ul><li>How can we prove that at least one duplicate number must exist in <code>nums</code>?</li><li>Can you solve the problem in linear runtime complexity?</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个包含 <code>n + 1</code> 个整数的数组 <code>nums</code> ，其数字都在 <code>[1, n]</code> 范围内（包括 <code>1</code> 和 <code>n</code>），可知至少存在一个重复的整数。</p><p>假设 <code>nums</code> 只有 <strong>一个重复的整数</strong> ，返回 <strong>这个重复的数</strong> 。</p><p>你设计的解决方案必须 <strong>不修改</strong> 数组 <code>nums</code> 且只用常量级 <code>O(1)</code> 的额外空间。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> nums = [1,3,4,2,2]</p><p><strong>输出：</strong> 2</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> nums = [3,1,3,4,2]</p><p><strong>输出：</strong> 3</p></blockquote><p><strong>示例 3 :</strong></p><blockquote><p><strong>输入：</strong> nums = [3,3,3,3,3]</p><p><strong>输出：</strong> 3</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= n &lt;= 10^5</code></li><li><code>nums.length == n + 1</code></li><li><code>1 &lt;= nums[i] &lt;= n</code></li><li><code>nums</code> 中 <strong>只有一个整数</strong> 出现 <strong>两次或多次</strong> ，其余整数均只出现 <strong>一次</strong></li></ul><p><strong>进阶：</strong></p><ul><li>如何证明 <code>nums</code> 中至少存在一个重复的数字?</li><li>你可以设计一个线性级时间复杂度 <code>O(n)</code> 的解决方案吗？</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>这道题可以使用 <strong>Floyd&#39;s Tortoise and Hare(龟兔赛跑)</strong> 算法，即通过快慢指针找环。</p><ol><li><p><strong>理解问题</strong>：</p><ul><li>数组中有 <code>n + 1</code> 个数字，范围是 <code>1</code> 到 <code>n</code>，根据鸽巢原理，至少有一个数字会重复。</li></ul></li><li><p><strong>使用快慢指针</strong>：</p><ul><li>将数组视为一个链表，数组的值作为指针指向下一个索引。</li><li>使用两个指针：快指针（每次移动两步）和慢指针（每次移动一步）。因为存在重复数字，所以这两个指针最终会在某个节点相遇。</li></ul></li><li><p><strong>找出环的起点</strong>：</p><ul><li>首先，使用快慢指针找到相遇点。接着，将其中一个指针移到起点，两个指针同时移动，每次移动一步，直到它们再次相遇。相遇的节点即为重复数字。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>: <code>O(n)</code>，在最坏情况下，快慢指针的移动次数不会超过 <code>n</code> 次。</li><li><strong>空间复杂度</strong>: <code>O(1)</code>，只使用了常量的空间，不需要额外的数据结构。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">findDuplicate</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> slow <span class="token operator">=</span> nums<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
		fast <span class="token operator">=</span> nums<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

	<span class="token comment">// 找到环的交点</span>
	<span class="token keyword">do</span> <span class="token punctuation">{</span>
		slow <span class="token operator">=</span> nums<span class="token punctuation">[</span>slow<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 走一步</span>
		fast <span class="token operator">=</span> nums<span class="token punctuation">[</span>nums<span class="token punctuation">[</span>fast<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 走两步</span>
	<span class="token punctuation">}</span> <span class="token keyword">while</span> <span class="token punctuation">(</span>slow <span class="token operator">!==</span> fast<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">// 找出循环的起始点（即重复的数字）</span>
	fast <span class="token operator">=</span> nums<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>slow <span class="token operator">!==</span> fast<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		slow <span class="token operator">=</span> nums<span class="token punctuation">[</span>slow<span class="token punctuation">]</span><span class="token punctuation">;</span>
		fast <span class="token operator">=</span> nums<span class="token punctuation">[</span>fast<span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> slow<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,36),q=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"center"}},"难度"),t("th",{style:{"text-align":"center"}},"力扣")])],-1),I=t("td",{style:{"text-align":"center"}},"41",-1),O=t("td",{style:{"text-align":"left"}},"缺失的第一个正数",-1),C={style:{"text-align":"center"}},E={style:{"text-align":"left"}},L=t("code",null,"数组",-1),N=t("code",null,"哈希表",-1),V=t("td",{style:{"text-align":"center"}},"🔴",-1),j={style:{"text-align":"center"}},B={href:"https://leetcode.cn/problems/first-missing-positive",target:"_blank",rel:"noopener noreferrer"},T={href:"https://leetcode.com/problems/first-missing-positive",target:"_blank",rel:"noopener noreferrer"},F=t("td",{style:{"text-align":"center"}},"136",-1),H=t("td",{style:{"text-align":"left"}},"只出现一次的数字",-1),R={style:{"text-align":"center"}},A={style:{"text-align":"left"}},D=t("code",null,"位运算",-1),G=t("code",null,"数组",-1),M=t("td",{style:{"text-align":"center"}},"🟢",-1),S={style:{"text-align":"center"}},Y={href:"https://leetcode.cn/problems/single-number",target:"_blank",rel:"noopener noreferrer"},z={href:"https://leetcode.com/problems/single-number",target:"_blank",rel:"noopener noreferrer"},J=t("td",{style:{"text-align":"center"}},"142",-1),K=t("td",{style:{"text-align":"left"}},"环形链表 II",-1),P={style:{"text-align":"center"}},Q={style:{"text-align":"left"}},U=t("code",null,"哈希表",-1),W=t("code",null,"链表",-1),X=t("code",null,"双指针",-1),Z=t("td",{style:{"text-align":"center"}},"🟠",-1),$={style:{"text-align":"center"}},tt={href:"https://leetcode.cn/problems/linked-list-cycle-ii",target:"_blank",rel:"noopener noreferrer"},nt={href:"https://leetcode.com/problems/linked-list-cycle-ii",target:"_blank",rel:"noopener noreferrer"},et=t("td",{style:{"text-align":"center"}},"268",-1),st=t("td",{style:{"text-align":"left"}},"丢失的数字",-1),ot={style:{"text-align":"center"}},at={style:{"text-align":"left"}},lt=t("code",null,"位运算",-1),ct=t("code",null,"数组",-1),rt=t("code",null,"哈希表",-1),it=t("code",null,"3+",-1),pt=t("td",{style:{"text-align":"center"}},"🟢",-1),dt={style:{"text-align":"center"}},ut={href:"https://leetcode.cn/problems/missing-number",target:"_blank",rel:"noopener noreferrer"},ht={href:"https://leetcode.com/problems/missing-number",target:"_blank",rel:"noopener noreferrer"},_t=t("td",{style:{"text-align":"center"}},"645",-1),mt=t("td",{style:{"text-align":"left"}},"错误的集合",-1),gt=t("td",{style:{"text-align":"center"}},null,-1),kt={style:{"text-align":"left"}},bt=t("code",null,"位运算",-1),ft=t("code",null,"数组",-1),yt=t("code",null,"哈希表",-1),vt=t("code",null,"1+",-1),xt=t("td",{style:{"text-align":"center"}},"🟢",-1),wt={style:{"text-align":"center"}},qt={href:"https://leetcode.cn/problems/set-mismatch",target:"_blank",rel:"noopener noreferrer"},It={href:"https://leetcode.com/problems/set-mismatch",target:"_blank",rel:"noopener noreferrer"};function Ot(Ct,Et){const c=l("font"),o=l("RouterLink"),a=l("ExternalLinkIcon");return i(),p("div",null,[_,t("p",null,[n("🟠 "),e(c,{color:"#ffb800"},{default:s(()=>[n("Medium")]),_:1}),n("  🔖  "),e(o,{to:"/tag/bit-manipulation.html"},{default:s(()=>[m]),_:1}),n(),e(o,{to:"/tag/array.html"},{default:s(()=>[g]),_:1}),n(),e(o,{to:"/tag/two-pointers.html"},{default:s(()=>[k]),_:1}),n(),e(o,{to:"/tag/binary-search.html"},{default:s(()=>[b]),_:1}),n("  🔗 "),t("a",f,[y,e(a)]),n(),t("a",v,[x,e(a)])]),w,d(" prettier-ignore "),t("table",null,[q,t("tbody",null,[t("tr",null,[I,O,t("td",C,[e(o,{to:"/problem/0041.html"},{default:s(()=>[n("[✓]")]),_:1})]),t("td",E,[e(o,{to:"/tag/array.html"},{default:s(()=>[L]),_:1}),n(),e(o,{to:"/tag/hash-table.html"},{default:s(()=>[N]),_:1})]),V,t("td",j,[t("a",B,[n("🀄️"),e(a)]),n(),t("a",T,[n("🔗"),e(a)])])]),t("tr",null,[F,H,t("td",R,[e(o,{to:"/problem/0136.html"},{default:s(()=>[n("[✓]")]),_:1})]),t("td",A,[e(o,{to:"/tag/bit-manipulation.html"},{default:s(()=>[D]),_:1}),n(),e(o,{to:"/tag/array.html"},{default:s(()=>[G]),_:1})]),M,t("td",S,[t("a",Y,[n("🀄️"),e(a)]),n(),t("a",z,[n("🔗"),e(a)])])]),t("tr",null,[J,K,t("td",P,[e(o,{to:"/problem/0142.html"},{default:s(()=>[n("[✓]")]),_:1})]),t("td",Q,[e(o,{to:"/tag/hash-table.html"},{default:s(()=>[U]),_:1}),n(),e(o,{to:"/tag/linked-list.html"},{default:s(()=>[W]),_:1}),n(),e(o,{to:"/tag/two-pointers.html"},{default:s(()=>[X]),_:1})]),Z,t("td",$,[t("a",tt,[n("🀄️"),e(a)]),n(),t("a",nt,[n("🔗"),e(a)])])]),t("tr",null,[et,st,t("td",ot,[e(o,{to:"/problem/0268.html"},{default:s(()=>[n("[✓]")]),_:1})]),t("td",at,[e(o,{to:"/tag/bit-manipulation.html"},{default:s(()=>[lt]),_:1}),n(),e(o,{to:"/tag/array.html"},{default:s(()=>[ct]),_:1}),n(),e(o,{to:"/tag/hash-table.html"},{default:s(()=>[rt]),_:1}),n(),it]),pt,t("td",dt,[t("a",ut,[n("🀄️"),e(a)]),n(),t("a",ht,[n("🔗"),e(a)])])]),t("tr",null,[_t,mt,gt,t("td",kt,[e(o,{to:"/tag/bit-manipulation.html"},{default:s(()=>[bt]),_:1}),n(),e(o,{to:"/tag/array.html"},{default:s(()=>[ft]),_:1}),n(),e(o,{to:"/tag/hash-table.html"},{default:s(()=>[yt]),_:1}),n(),vt]),xt,t("td",wt,[t("a",qt,[n("🀄️"),e(a)]),n(),t("a",It,[n("🔗"),e(a)])])])])])])}const Nt=r(h,[["render",Ot],["__file","0287.html.vue"]]);export{Nt as default};
