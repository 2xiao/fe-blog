import{_ as c,r as l,o as r,c as d,a as t,b as e,d as n,w as s,f as p,e as u}from"./app-BBnmDgJV.js";const h={},m=t("h1",{id:"_2064-分配给商店的最多商品的最小值",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_2064-分配给商店的最多商品的最小值","aria-hidden":"true"},"#"),e(" 2064. 分配给商店的最多商品的最小值")],-1),_=t("code",null,"数组",-1),g=t("code",null,"二分查找",-1),k={href:"https://leetcode.cn/problems/minimized-maximum-of-products-distributed-to-any-store",target:"_blank",rel:"noopener noreferrer"},b=t("code",null,"力扣",-1),f={href:"https://leetcode.com/problems/minimized-maximum-of-products-distributed-to-any-store",target:"_blank",rel:"noopener noreferrer"},y=t("code",null,"LeetCode",-1),x=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given an integer <code>n</code> indicating there are <code>n</code> specialty retail stores. There are <code>m</code> product types of varying amounts, which are given as a <strong>0-indexed</strong> integer array <code>quantities</code>, where <code>quantities[i]</code> represents the number of products of the <code>ith</code> product type.</p><p>You need to distribute <strong>all products</strong> to the retail stores following these rules:</p><ul><li>A store can only be given <strong>at most one product type</strong> but can be given <strong>any</strong> amount of it.</li><li>After distribution, each store will have been given some number of products (possibly <code>0</code>). Let <code>x</code> represent the maximum number of products given to any store. You want <code>x</code> to be as small as possible, i.e., you want to <strong>minimize</strong> the <strong>maximum</strong> number of products that are given to any store.</li></ul><p>Return <em>the minimum possible</em> <code>x</code>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: n = 6, quantities = [11,6]</p><p>Output: 3</p><p>Explanation: One optimal way is:</p><ul><li>The 11 products of type 0 are distributed to the first four stores in these amounts: 2, 3, 3, 3</li><li>The 6 products of type 1 are distributed to the other two stores in these amounts: 3, 3</li></ul><p>The maximum number of products given to any store is max(2, 3, 3, 3, 3, 3) = 3.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: n = 7, quantities = [15,10,10]</p><p>Output: 5</p><p>Explanation: One optimal way is:</p><ul><li>The 15 products of type 0 are distributed to the first three stores in these amounts: 5, 5, 5</li><li>The 10 products of type 1 are distributed to the next two stores in these amounts: 5, 5</li><li>The 10 products of type 2 are distributed to the last two stores in these amounts: 5, 5</li></ul><p>The maximum number of products given to any store is max(5, 5, 5, 5, 5, 5, 5) = 5.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: n = 1, quantities = [100000]</p><p>Output: 100000</p><p>Explanation: The only optimal way is:</p><ul><li>The 100000 products of type 0 are distributed to the only store.</li></ul><p>The maximum number of products given to any store is max(100000) = 100000.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>m == quantities.length</code></li><li><code>1 &lt;= m &lt;= n &lt;= 10^5</code></li><li><code>1 &lt;= quantities[i] &lt;= 10^5</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个整数 <code>n</code> ，表示有 <code>n</code> 间零售商店。总共有 <code>m</code> 种产品，每种产品的数目用一个下标从 <strong>0</strong> 开始的整数数组 <code>quantities</code> 表示，其中 <code>quantities[i]</code> 表示第 <code>i</code> 种商品的数目。</p><p>你需要将 <strong>所有商品</strong> 分配到零售商店，并遵守这些规则：</p><ul><li>一间商店 <strong>至多</strong> 只能有 <strong>一种商品</strong> ，但一间商店拥有的商品数目可以为 <strong>任意</strong> 件。</li><li>分配后，每间商店都会被分配一定数目的商品（可能为 <code>0</code> 件）。用 <code>x</code> 表示所有商店中分配商品数目的最大值，你希望 <code>x</code> 越小越好。也就是说，你想 <strong>最小化</strong> 分配给任意商店商品数目的 <strong>最大值</strong> 。</li></ul><p>请你返回最小的可能的 <code>x</code> 。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> n = 6, quantities = [11,6]</p><p><strong>输出：</strong> 3</p><p><strong>解释：</strong> 一种最优方案为：</p><ul><li>11 件种类为 0 的商品被分配到前 4 间商店，分配数目分别为：2，3，3，3 。</li><li>6 件种类为 1 的商品被分配到另外 2 间商店，分配数目分别为：3，3 。</li></ul><p>分配给所有商店的最大商品数目为 max(2, 3, 3, 3, 3, 3) = 3 。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> n = 7, quantities = [15,10,10]</p><p><strong>输出：</strong> 5</p><p><strong>解释：</strong> 一种最优方案为：</p><ul><li>15 件种类为 0 的商品被分配到前 3 间商店，分配数目为：5，5，5 。</li><li>10 件种类为 1 的商品被分配到接下来 2 间商店，数目为：5，5 。</li><li>10 件种类为 2 的商品被分配到最后 2 间商店，数目为：5，5 。</li></ul><p>分配给所有商店的最大商品数目为 max(5, 5, 5, 5, 5, 5, 5) = 5 。</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> n = 1, quantities = [100000]</p><p><strong>输出：</strong> 100000</p><p><strong>解释：</strong> 唯一一种最优方案为：</p><ul><li>所有 100000 件商品 0 都分配到唯一的商店中。</li></ul><p>分配给所有商店的最大商品数目为 max(100000) = 100000 。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>m == quantities.length</code></li><li><code>1 &lt;= m &lt;= n &lt;= 10^5</code></li><li><code>1 &lt;= quantities[i] &lt;= 10^5</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>这个问题实际上是一个 <strong>二分查找</strong> 问题。</p><p>我们要找到最小的 <code>num</code>，使得所有产品都能分配到商店中，并且每个商店分配的产品数量不超过 <code>num</code>。</p><ol><li><p>对于产品 <code>i</code>，要分配 <code>quantities[i]</code> 个数目的产品，需要的最小商店数量是 <code>ceil(quantities[i] / num)</code>。</p></li><li><p>可以通过二分查找来找到最小的合适的 <code>num</code>，二分查找的范围是：<code>low = 1</code>（每个商店至少需要 1 个产品），<code>high = max(quantities)</code>（每个商店最多能接受最大值的产品）。</p></li><li><p>通过计算所有产品所需的总商店数量来判断是否满足 <code>n</code> 个商店的限制。</p><ul><li>如果所需商店数量大于 <code>n</code>，则说明 <code>num</code> 太小，需要增大它。</li><li>如果所需商店数量小于或等于 <code>n</code>，则说明当前的 <code>num</code> 是有效的，尝试更小的 <code>num</code>。</li></ul></li><li><p>不断缩小二分查找的范围，直到 <code>low == high</code>，即最小化的最大产品数量。</p></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><p><strong>时间复杂度</strong>：<code>O(n * log(Max(quantities))))</code>，二分查找的范围是 <code>[1, max(quantities)]</code>，所以二分查找的时间复杂度为 <code>O(log(Max(quantities)))</code>，每次二分查找都需要遍历一次 <code>quantities</code>，其中 <code>n</code> 是数组 <code>quantities</code> 的长度，所以总的时间复杂度为 <code>O(n * log(Max(quantities)))</code></p></li><li><p><strong>空间复杂度</strong>：<code>O(1)</code>，只用了常数空间来存储一些辅助变量。</p></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">quantities</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">n</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">minimizedMaximum</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">quantities<span class="token punctuation">,</span> n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> low <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span>
		high <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token operator">...</span>quantities<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">// 二分查找最小的最大产品数量</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>low <span class="token operator">&lt;</span> high<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> mid <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span>low <span class="token operator">+</span> high<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token comment">// 计算分配产品所需的商店数</span>
		<span class="token keyword">let</span> storeCount <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> quantity <span class="token keyword">of</span> quantities<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			storeCount <span class="token operator">+=</span> Math<span class="token punctuation">.</span><span class="token function">ceil</span><span class="token punctuation">(</span>quantity <span class="token operator">/</span> mid<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 每个商店最多接受 mid 个产品</span>
		<span class="token punctuation">}</span>

		<span class="token keyword">if</span> <span class="token punctuation">(</span>storeCount <span class="token operator">&gt;</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			low <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 如果商店数超过 m，说明 mid 太小</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			high <span class="token operator">=</span> mid<span class="token punctuation">;</span> <span class="token comment">// 如果商店数不超过 m，尝试更小的 mid</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> low<span class="token punctuation">;</span> <span class="token comment">// low 和 high 会最终相等，表示最小化的最大产品数量</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,35),v=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"center"}},"难度"),t("th",{style:{"text-align":"center"}},"力扣")])],-1),w=t("td",{style:{"text-align":"center"}},"875",-1),q=t("td",{style:{"text-align":"left"}},"爱吃香蕉的珂珂",-1),T=t("td",{style:{"text-align":"center"}},null,-1),E={style:{"text-align":"left"}},O=t("code",null,"数组",-1),C=t("code",null,"二分查找",-1),M=t("td",{style:{"text-align":"center"}},"🟠",-1),L={style:{"text-align":"center"}},I={href:"https://leetcode.cn/problems/koko-eating-bananas",target:"_blank",rel:"noopener noreferrer"},N={href:"https://leetcode.com/problems/koko-eating-bananas",target:"_blank",rel:"noopener noreferrer"},V=t("td",{style:{"text-align":"center"}},"1011",-1),z=t("td",{style:{"text-align":"left"}},"在 D 天内送达包裹的能力",-1),j=t("td",{style:{"text-align":"center"}},null,-1),B={style:{"text-align":"left"}},R=t("code",null,"数组",-1),Y=t("code",null,"二分查找",-1),A=t("td",{style:{"text-align":"center"}},"🟠",-1),D={style:{"text-align":"center"}},S={href:"https://leetcode.cn/problems/capacity-to-ship-packages-within-d-days",target:"_blank",rel:"noopener noreferrer"},F={href:"https://leetcode.com/problems/capacity-to-ship-packages-within-d-days",target:"_blank",rel:"noopener noreferrer"},G=t("td",{style:{"text-align":"center"}},"1283",-1),H=t("td",{style:{"text-align":"left"}},"使结果不超过阈值的最小除数",-1),J=t("td",{style:{"text-align":"center"}},null,-1),K={style:{"text-align":"left"}},P=t("code",null,"数组",-1),Q=t("code",null,"二分查找",-1),U=t("td",{style:{"text-align":"center"}},"🟠",-1),W={style:{"text-align":"center"}},X={href:"https://leetcode.cn/problems/find-the-smallest-divisor-given-a-threshold",target:"_blank",rel:"noopener noreferrer"},Z={href:"https://leetcode.com/problems/find-the-smallest-divisor-given-a-threshold",target:"_blank",rel:"noopener noreferrer"},$=t("td",{style:{"text-align":"center"}},"1552",-1),tt=t("td",{style:{"text-align":"left"}},"两球之间的磁力",-1),et=t("td",{style:{"text-align":"center"}},null,-1),nt={style:{"text-align":"left"}},st=t("code",null,"数组",-1),ot=t("code",null,"二分查找",-1),at=t("code",null,"排序",-1),lt=t("td",{style:{"text-align":"center"}},"🟠",-1),it={style:{"text-align":"center"}},ct={href:"https://leetcode.cn/problems/magnetic-force-between-two-balls",target:"_blank",rel:"noopener noreferrer"},rt={href:"https://leetcode.com/problems/magnetic-force-between-two-balls",target:"_blank",rel:"noopener noreferrer"},dt=t("td",{style:{"text-align":"center"}},"1760",-1),pt=t("td",{style:{"text-align":"left"}},"袋子里最少数目的球",-1),ut=t("td",{style:{"text-align":"center"}},null,-1),ht={style:{"text-align":"left"}},mt=t("code",null,"数组",-1),_t=t("code",null,"二分查找",-1),gt=t("td",{style:{"text-align":"center"}},"🟠",-1),kt={style:{"text-align":"center"}},bt={href:"https://leetcode.cn/problems/minimum-limit-of-balls-in-a-bag",target:"_blank",rel:"noopener noreferrer"},ft={href:"https://leetcode.com/problems/minimum-limit-of-balls-in-a-bag",target:"_blank",rel:"noopener noreferrer"},yt=t("td",{style:{"text-align":"center"}},"2187",-1),xt=t("td",{style:{"text-align":"left"}},"完成旅途的最少时间",-1),vt=t("td",{style:{"text-align":"center"}},null,-1),wt={style:{"text-align":"left"}},qt=t("code",null,"数组",-1),Tt=t("code",null,"二分查找",-1),Et=t("td",{style:{"text-align":"center"}},"🟠",-1),Ot={style:{"text-align":"center"}},Ct={href:"https://leetcode.cn/problems/minimum-time-to-complete-trips",target:"_blank",rel:"noopener noreferrer"},Mt={href:"https://leetcode.com/problems/minimum-time-to-complete-trips",target:"_blank",rel:"noopener noreferrer"},Lt=t("td",{style:{"text-align":"center"}},"2226",-1),It=t("td",{style:{"text-align":"left"}},"每个小孩最多能分到多少糖果",-1),Nt=t("td",{style:{"text-align":"center"}},null,-1),Vt={style:{"text-align":"left"}},zt=t("code",null,"数组",-1),jt=t("code",null,"二分查找",-1),Bt=t("td",{style:{"text-align":"center"}},"🟠",-1),Rt={style:{"text-align":"center"}},Yt={href:"https://leetcode.cn/problems/maximum-candies-allocated-to-k-children",target:"_blank",rel:"noopener noreferrer"},At={href:"https://leetcode.com/problems/maximum-candies-allocated-to-k-children",target:"_blank",rel:"noopener noreferrer"},Dt=t("td",{style:{"text-align":"center"}},"2398",-1),St=t("td",{style:{"text-align":"left"}},"预算内的最多机器人数目",-1),Ft=t("td",{style:{"text-align":"center"}},null,-1),Gt={style:{"text-align":"left"}},Ht=t("code",null,"队列",-1),Jt=t("code",null,"数组",-1),Kt=t("code",null,"二分查找",-1),Pt=t("code",null,"4+",-1),Qt=t("td",{style:{"text-align":"center"}},"🔴",-1),Ut={style:{"text-align":"center"}},Wt={href:"https://leetcode.cn/problems/maximum-number-of-robots-within-budget",target:"_blank",rel:"noopener noreferrer"},Xt={href:"https://leetcode.com/problems/maximum-number-of-robots-within-budget",target:"_blank",rel:"noopener noreferrer"};function Zt($t,te){const i=l("font"),o=l("RouterLink"),a=l("ExternalLinkIcon");return r(),d("div",null,[m,t("p",null,[e("🟠 "),n(i,{color:"#ffb800"},{default:s(()=>[e("Medium")]),_:1}),e("  🔖  "),n(o,{to:"/tag/array.html"},{default:s(()=>[_]),_:1}),e(),n(o,{to:"/tag/binary-search.html"},{default:s(()=>[g]),_:1}),e("  🔗 "),t("a",k,[b,n(a)]),e(),t("a",f,[y,n(a)])]),x,p(" prettier-ignore "),t("table",null,[v,t("tbody",null,[t("tr",null,[w,q,T,t("td",E,[n(o,{to:"/tag/array.html"},{default:s(()=>[O]),_:1}),e(),n(o,{to:"/tag/binary-search.html"},{default:s(()=>[C]),_:1})]),M,t("td",L,[t("a",I,[e("🀄️"),n(a)]),e(),t("a",N,[e("🔗"),n(a)])])]),t("tr",null,[V,z,j,t("td",B,[n(o,{to:"/tag/array.html"},{default:s(()=>[R]),_:1}),e(),n(o,{to:"/tag/binary-search.html"},{default:s(()=>[Y]),_:1})]),A,t("td",D,[t("a",S,[e("🀄️"),n(a)]),e(),t("a",F,[e("🔗"),n(a)])])]),t("tr",null,[G,H,J,t("td",K,[n(o,{to:"/tag/array.html"},{default:s(()=>[P]),_:1}),e(),n(o,{to:"/tag/binary-search.html"},{default:s(()=>[Q]),_:1})]),U,t("td",W,[t("a",X,[e("🀄️"),n(a)]),e(),t("a",Z,[e("🔗"),n(a)])])]),t("tr",null,[$,tt,et,t("td",nt,[n(o,{to:"/tag/array.html"},{default:s(()=>[st]),_:1}),e(),n(o,{to:"/tag/binary-search.html"},{default:s(()=>[ot]),_:1}),e(),n(o,{to:"/tag/sorting.html"},{default:s(()=>[at]),_:1})]),lt,t("td",it,[t("a",ct,[e("🀄️"),n(a)]),e(),t("a",rt,[e("🔗"),n(a)])])]),t("tr",null,[dt,pt,ut,t("td",ht,[n(o,{to:"/tag/array.html"},{default:s(()=>[mt]),_:1}),e(),n(o,{to:"/tag/binary-search.html"},{default:s(()=>[_t]),_:1})]),gt,t("td",kt,[t("a",bt,[e("🀄️"),n(a)]),e(),t("a",ft,[e("🔗"),n(a)])])]),t("tr",null,[yt,xt,vt,t("td",wt,[n(o,{to:"/tag/array.html"},{default:s(()=>[qt]),_:1}),e(),n(o,{to:"/tag/binary-search.html"},{default:s(()=>[Tt]),_:1})]),Et,t("td",Ot,[t("a",Ct,[e("🀄️"),n(a)]),e(),t("a",Mt,[e("🔗"),n(a)])])]),t("tr",null,[Lt,It,Nt,t("td",Vt,[n(o,{to:"/tag/array.html"},{default:s(()=>[zt]),_:1}),e(),n(o,{to:"/tag/binary-search.html"},{default:s(()=>[jt]),_:1})]),Bt,t("td",Rt,[t("a",Yt,[e("🀄️"),n(a)]),e(),t("a",At,[e("🔗"),n(a)])])]),t("tr",null,[Dt,St,Ft,t("td",Gt,[n(o,{to:"/tag/queue.html"},{default:s(()=>[Ht]),_:1}),e(),n(o,{to:"/tag/array.html"},{default:s(()=>[Jt]),_:1}),e(),n(o,{to:"/tag/binary-search.html"},{default:s(()=>[Kt]),_:1}),e(),Pt]),Qt,t("td",Ut,[t("a",Wt,[e("🀄️"),n(a)]),e(),t("a",Xt,[e("🔗"),n(a)])])])])])])}const ne=c(h,[["render",Zt],["__file","2064.html.vue"]]);export{ne as default};
