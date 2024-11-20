import{_ as l,r as p,o as i,c as r,a as n,b as s,d as e,w as t,f as u,e as d}from"./app-BBnmDgJV.js";const k={},m=n("h1",{id:"_2070-每一个查询的最大美丽值",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2070-每一个查询的最大美丽值","aria-hidden":"true"},"#"),s(" 2070. 每一个查询的最大美丽值")],-1),h=n("code",null,"数组",-1),g=n("code",null,"二分查找",-1),_=n("code",null,"排序",-1),b={href:"https://leetcode.cn/problems/most-beautiful-item-for-each-query",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"力扣",-1),f={href:"https://leetcode.com/problems/most-beautiful-item-for-each-query",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"LeetCode",-1),x=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given a 2D integer array <code>items</code> where <code>items[i] = [pricei, beautyi]</code> denotes the <strong>price</strong> and <strong>beauty</strong> of an item respectively.</p><p>You are also given a <strong>0-indexed</strong> integer array <code>queries</code>. For each <code>queries[j]</code>, you want to determine the <strong>maximum beauty</strong> of an item whose <strong>price</strong> is <strong>less than or equal</strong> to <code>queries[j]</code>. If no such item exists, then the answer to this query is <code>0</code>.</p><p>Return <em>an array</em><code>answer</code> <em>of the same length as</em><code>queries</code><em>where</em><code>answer[j]</code><em>is the answer to the</em><code>jth</code> <em>query</em>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: items = [[1,2],[3,2],[2,4],[5,6],[3,5]], queries = [1,2,3,4,5,6]</p><p>Output: [2,4,5,5,6,6]</p><p>Explanation:</p><ul><li><p>For queries[0]=1, [1,2] is the only item which has price &lt;= 1. Hence, the answer for this query is 2.</p></li><li><p>For queries[1]=2, the items which can be considered are [1,2] and [2,4].</p><p>The maximum beauty among them is 4.</p></li><li><p>For queries[2]=3 and queries[3]=4, the items which can be considered are [1,2], [3,2], [2,4], and [3,5].</p><p>The maximum beauty among them is 5.</p></li><li><p>For queries[4]=5 and queries[5]=6, all items can be considered.</p><p>Hence, the answer for them is the maximum beauty of all items, i.e., 6.</p></li></ul></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: items = [[1,2],[1,2],[1,3],[1,4]], queries = [1]</p><p>Output: [4]</p><p>Explanation:</p><p>The price of every item is equal to 1, so we choose the item with the maximum beauty 4.</p><p>Note that multiple items can have the same price and/or beauty.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: items = [[10,1000]], queries = [5]</p><p>Output: [0]</p><p>Explanation:</p><p>No item has a price less than or equal to 5, so no item can be chosen.</p><p>Hence, the answer to the query is 0.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= items.length, queries.length &lt;= 10^5</code></li><li><code>items[i].length == 2</code></li><li><code>1 &lt;= pricei, beautyi, queries[j] &lt;= 10^9</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个二维整数数组 <code>items</code> ，其中 <code>items[i] = [pricei, beautyi]</code> 分别表示每一个物品的 <strong>价格</strong> 和 <strong>美丽值</strong> 。</p><p>同时给你一个下标从 <strong>0</strong> 开始的整数数组 <code>queries</code> 。对于每个查询 <code>queries[j]</code> ，你想求出价格小于等于 <code>queries[j]</code> 的物品中，<strong>最大的美丽值</strong> 是多少。如果不存在符合条件的物品，那么查询的结果为 <code>0</code> 。</p><p>请你返回一个长度与 <code>queries</code> 相同的数组 <code>answer</code>，其中 <code>answer[j]</code>是第 <code>j</code> 个查询的答案。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> items = [[1,2],[3,2],[2,4],[5,6],[3,5]], queries = [1,2,3,4,5,6]</p><p><strong>输出：</strong>[2,4,5,5,6,6]</p><p><strong>解释：</strong></p><ul><li><p>queries[0]=1 ，[1,2] 是唯一价格 &lt;= 1 的物品。所以这个查询的答案为 2 。</p></li><li><p>queries[1]=2 ，符合条件的物品有 [1,2] 和 [2,4] 。</p><p>它们中的最大美丽值为 4 。</p></li><li><p>queries[2]=3 和 queries[3]=4 ，符合条件的物品都为 [1,2] ，[3,2] ，[2,4] 和 [3,5] 。</p><p>它们中的最大美丽值为 5 。</p></li><li><p>queries[4]=5 和 queries[5]=6 ，所有物品都符合条件。</p><p>所以，答案为所有物品中的最大美丽值，为 6 。</p></li></ul></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> items = [[1,2],[1,2],[1,3],[1,4]], queries = [1]</p><p><strong>输出：</strong>[4]</p><p><strong>解释：</strong></p><p>每个物品的价格均为 1 ，所以我们选择最大美丽值 4 。</p><p>注意，多个物品可能有相同的价格和美丽值。</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> items = [[10,1000]], queries = [5]</p><p><strong>输出：</strong>[0]</p><p><strong>解释：</strong></p><p>没有物品的价格小于等于 5 ，所以没有物品可以选择。</p><p>因此，查询的结果为 0 。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= items.length, queries.length &lt;= 10^5</code></li><li><code>items[i].length == 2</code></li><li><code>1 &lt;= pricei, beautyi, queries[j] &lt;= 10^9</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><strong>排序并预处理 <code>items</code></strong>: <ul><li>首先将 <code>items</code> 按 <code>price</code> 从小到大排序。如果 <code>price</code> 相同，按 <code>beauty</code> 从大到小排序，这样可以保证同一 <code>price</code> 只记录最大 <code>beauty</code> 的物品。</li></ul></li><li><strong>构建最大美丽值前缀数组</strong>: <ul><li>创建一个数组 <code>maxBeautyArr</code>，用来记录从 <code>items[0]</code> 开始到当前价格的最大美丽值。这样我们可以高效地获取所有价格小于等于某一价格的最大美丽值。</li><li>遍历排序后的 <code>items</code>，将最大美丽值不断更新存储在这个数组中。</li></ul></li><li><strong>对 <code>queries</code> 进行二分查找</strong>: <ul><li>将 <code>queries</code> 和其下标组合成元组并按 <code>queries</code> 升序排序。然后对每个查询 <code>query</code>，使用二分查找在 <code>maxBeautyArr</code> 中找到不超过 <code>query</code> 的最大价格的索引。</li><li>根据找到的索引直接获得对应的最大美丽值。</li></ul></li><li><strong>还原结果</strong>: <ul><li>将按顺序得到的答案放回原始 <code>queries</code> 的顺序中。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><p><strong>时间复杂度</strong>：<code>O((m + n) log m)</code>。</p><ul><li>排序 <code>items</code> 需要 <code>O(m log m)</code> 时间复杂度，其中 <code>m</code> 是 <code>items</code> 的长度。</li><li>预处理 <code>maxBeautyArr</code> 数组的时间复杂度为 <code>O(m)</code>。</li><li><code>queries</code> 排序时间复杂度为 <code>O(n log n)</code>，其中 <code>n</code> 是 <code>queries</code> 的长度。</li><li>对每个查询使用二分查找，遍历 <code>queries</code> 所需总时间复杂度为 <code>O(n log m)</code>。</li><li>所以总体时间复杂度为 <code>O((m + n) log m)</code>。</li></ul></li><li><p><strong>空间复杂度</strong>：<code>O(m + n)</code>，排序所需的空间复杂度为 <code>O(m + n)</code>。</p></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">items</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">queries</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">maximumBeauty</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">items<span class="token punctuation">,</span> queries</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 对 items 排序</span>
	items<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>a<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">==</span> b<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">?</span> a<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">-</span> b<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">:</span> a<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">-</span> b<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">// 找到每个 price 对应的最大 beauty</span>
	<span class="token keyword">let</span> maxBeauty <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
		maxBeautyArr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> <span class="token punctuation">[</span>price<span class="token punctuation">,</span> beauty<span class="token punctuation">]</span> <span class="token keyword">of</span> items<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		maxBeauty <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>maxBeauty<span class="token punctuation">,</span> beauty<span class="token punctuation">)</span><span class="token punctuation">;</span>
		maxBeautyArr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">[</span>price<span class="token punctuation">,</span> maxBeauty<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 对 queries 进行排序</span>
	<span class="token keyword">const</span> sortedQueries <span class="token operator">=</span> queries
		<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">q<span class="token punctuation">,</span> i</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>q<span class="token punctuation">,</span> i<span class="token punctuation">]</span><span class="token punctuation">)</span>
		<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">-</span> b<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>queries<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> <span class="token punctuation">[</span>query<span class="token punctuation">,</span> idx<span class="token punctuation">]</span> <span class="token keyword">of</span> sortedQueries<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 移动 i 到小于等于 query 的最大 price</span>
		<span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> maxBeautyArr<span class="token punctuation">.</span>length <span class="token operator">&amp;&amp;</span> maxBeautyArr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">&lt;=</span> query<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			i<span class="token operator">++</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token comment">// 如果 i 为 0， 说明没有小于等于 query 的 price，返回 0</span>
		res<span class="token punctuation">[</span>idx<span class="token punctuation">]</span> <span class="token operator">=</span> i <span class="token operator">==</span> <span class="token number">0</span> <span class="token operator">?</span> <span class="token number">0</span> <span class="token operator">:</span> maxBeautyArr<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,31),q=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),w=n("td",{style:{"text-align":"center"}},"1847",-1),B=n("td",{style:{"text-align":"left"}},"最近的房间",-1),j=n("td",{style:{"text-align":"center"}},null,-1),O={style:{"text-align":"left"}},A=n("code",null,"数组",-1),E=n("code",null,"二分查找",-1),N=n("code",null,"有序集合",-1),I=n("code",null,"1+",-1),C=n("td",{style:{"text-align":"center"}},"🔴",-1),F={style:{"text-align":"center"}},L={href:"https://leetcode.cn/problems/closest-room",target:"_blank",rel:"noopener noreferrer"},V={href:"https://leetcode.com/problems/closest-room",target:"_blank",rel:"noopener noreferrer"},T=n("td",{style:{"text-align":"center"}},"2640",-1),H=n("td",{style:{"text-align":"left"}},"一个数组所有前缀的分数",-1),R=n("td",{style:{"text-align":"center"}},null,-1),M={style:{"text-align":"left"}},Q=n("code",null,"数组",-1),Y=n("code",null,"前缀和",-1),D=n("td",{style:{"text-align":"center"}},"🟠",-1),S={style:{"text-align":"center"}},z={href:"https://leetcode.cn/problems/find-the-score-of-all-prefixes-of-an-array",target:"_blank",rel:"noopener noreferrer"},G={href:"https://leetcode.com/problems/find-the-score-of-all-prefixes-of-an-array",target:"_blank",rel:"noopener noreferrer"},J=n("td",{style:{"text-align":"center"}},"2736",-1),K=n("td",{style:{"text-align":"left"}},"最大和查询",-1),P=n("td",{style:{"text-align":"center"}},null,-1),U={style:{"text-align":"left"}},W=n("code",null,"栈",-1),X=n("code",null,"树状数组",-1),Z=n("code",null,"线段树",-1),$=n("code",null,"4+",-1),nn=n("td",{style:{"text-align":"center"}},"🔴",-1),sn={style:{"text-align":"center"}},en={href:"https://leetcode.cn/problems/maximum-sum-queries",target:"_blank",rel:"noopener noreferrer"},tn={href:"https://leetcode.com/problems/maximum-sum-queries",target:"_blank",rel:"noopener noreferrer"};function an(on,pn){const c=p("font"),a=p("RouterLink"),o=p("ExternalLinkIcon");return i(),r("div",null,[m,n("p",null,[s("🟠 "),e(c,{color:"#ffb800"},{default:t(()=>[s("Medium")]),_:1}),s("  🔖  "),e(a,{to:"/tag/array.html"},{default:t(()=>[h]),_:1}),s(),e(a,{to:"/tag/binary-search.html"},{default:t(()=>[g]),_:1}),s(),e(a,{to:"/tag/sorting.html"},{default:t(()=>[_]),_:1}),s("  🔗 "),n("a",b,[y,e(o)]),s(),n("a",f,[v,e(o)])]),x,u(" prettier-ignore "),n("table",null,[q,n("tbody",null,[n("tr",null,[w,B,j,n("td",O,[e(a,{to:"/tag/array.html"},{default:t(()=>[A]),_:1}),s(),e(a,{to:"/tag/binary-search.html"},{default:t(()=>[E]),_:1}),s(),e(a,{to:"/tag/ordered-set.html"},{default:t(()=>[N]),_:1}),s(),I]),C,n("td",F,[n("a",L,[s("🀄️"),e(o)]),s(),n("a",V,[s("🔗"),e(o)])])]),n("tr",null,[T,H,R,n("td",M,[e(a,{to:"/tag/array.html"},{default:t(()=>[Q]),_:1}),s(),e(a,{to:"/tag/prefix-sum.html"},{default:t(()=>[Y]),_:1})]),D,n("td",S,[n("a",z,[s("🀄️"),e(o)]),s(),n("a",G,[s("🔗"),e(o)])])]),n("tr",null,[J,K,P,n("td",U,[e(a,{to:"/tag/stack.html"},{default:t(()=>[W]),_:1}),s(),e(a,{to:"/tag/binary-indexed-tree.html"},{default:t(()=>[X]),_:1}),s(),e(a,{to:"/tag/segment-tree.html"},{default:t(()=>[Z]),_:1}),s(),$]),nn,n("td",sn,[n("a",en,[s("🀄️"),e(o)]),s(),n("a",tn,[s("🔗"),e(o)])])])])])])}const ln=l(k,[["render",an],["__file","2070.html.vue"]]);export{ln as default};
