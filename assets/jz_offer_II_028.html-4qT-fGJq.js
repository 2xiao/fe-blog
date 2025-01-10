import{_ as i,r as o,o as u,c as d,a as n,b as s,d as a,w as t,e as p}from"./app-XFeYdzZv.js";const r={},k=n("h1",{id:"_28-展平多级双向链表",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_28-展平多级双向链表","aria-hidden":"true"},"#"),s(" 28. 展平多级双向链表")],-1),v=n("code",null,"深度优先搜索",-1),h=n("code",null,"链表",-1),m=n("code",null,"双向链表",-1),b={href:"https://leetcode.cn/problems/Qv1Da2",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"力扣",-1),g=p('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>多级双向链表中，除了指向下一个节点和前一个节点指针之外，它还有一个子链表指针，可能指向单独的双向链表。这些子列表也可能会有一个或多个自己的子项，依此类推，生成多级数据结构，如下面的示例所示。</p><p>给定位于列表第一级的头节点，请扁平化列表，即将这样的多级双向链表展平成普通的双向链表，使所有结点出现在单级双链表中。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> head = [1,2,3,4,5,6,null,null,null,7,8,9,10,null,null,11,12]</p><p><strong>输出：</strong>[1,2,3,7,8,11,12,9,10,4,5,6]</p><p><strong>解释：</strong></p><p>输入的多级列表如下图所示：</p><figure><img src="https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/10/12/multilevellinkedlist.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>扁平化后的链表如下图：</p><figure><img src="https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/10/12/multilevellinkedlistflattened.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> head = [1,2,null,3]</p><p><strong>输出：</strong>[1,3,2]</p><p><strong>解释：</strong> 输入的多级列表如下图所示：</p><p>1---2---NULL</p><p>|</p><p>3---NULL</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> head = []</p><p><strong>输出：</strong>[]</p></blockquote><p><strong>如何表示测试用例中的多级链表？</strong></p><p>以 <strong>示例 1</strong> 为例：</p><blockquote><p>1---2---3---4---5---6--NULL</p><blockquote><p>|</p></blockquote><blockquote><p>7---8---9---10--NULL</p></blockquote><blockquote><p>|</p></blockquote><blockquote><p>11--12--NULL</p></blockquote></blockquote><p>序列化其中的每一级之后：</p><blockquote><p>[1,2,3,4,5,6,null]</p><p>[7,8,9,10,null]</p><p>[11,12,null]</p></blockquote><p>为了将每一级都序列化到一起，我们需要每一级中添加值为 null 的元素，以表示没有节点连接到上一级的上级节点。</p><blockquote><p>[1,2,3,4,5,6,null]</p><p>[null,null,7,8,9,10,null]</p><p>[null,11,12,null]</p></blockquote><p>合并所有序列化结果，并去除末尾的 null 。</p><blockquote><p>[1,2,3,4,5,6,null,null,null,7,8,9,10,null,null,11,12]</p></blockquote><p><strong>提示：</strong></p><ul><li>节点数目不超过 <code>1000</code></li><li><code>1 &lt;= Node.val &lt;= 10^5</code></li></ul>',20),_={class:"hint-container warning"},x=n("p",{class:"hint-container-title"},"注意",-1),y=p(`<h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li>使用递归遍历多级链表，如果某个节点有子链表，则对子链表进行递归处理。</li><li>在递归处理过程中，将当前节点的 <code>next</code> 指针指向递归处理后的子链表，同时将子链表的 <code>prev</code> 指针指向当前节点。</li><li>最后，将当前节点的 <code>child</code> 指针置为 <code>null</code>。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是链表的节点总数。这个算法递归地处理了多级链表中的每个节点，每个节点都只处理一次。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Node<span class="token punctuation">}</span></span> <span class="token parameter">head</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>Node<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">flatten</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">head</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>head<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> next <span class="token operator">=</span> head<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
	<span class="token keyword">const</span> child <span class="token operator">=</span> head<span class="token punctuation">.</span>child<span class="token punctuation">;</span>

	<span class="token comment">// 处理当前节点的子链表</span>
	<span class="token keyword">const</span> flattenChild <span class="token operator">=</span> <span class="token function">flatten</span><span class="token punctuation">(</span>child<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">// 连接当前节点和递归处理后的子链表</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>flattenChild<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		head<span class="token punctuation">.</span>next <span class="token operator">=</span> flattenChild<span class="token punctuation">;</span>
		flattenChild<span class="token punctuation">.</span>prev <span class="token operator">=</span> head<span class="token punctuation">;</span>
		head<span class="token punctuation">.</span>child <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token comment">// 递归处理后续节点</span>
	<span class="token keyword">const</span> flattenNext <span class="token operator">=</span> <span class="token function">flatten</span><span class="token punctuation">(</span>next<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">// 连接递归处理后的子链表和后续节点</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>flattenNext<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> last <span class="token operator">=</span> <span class="token function">findLast</span><span class="token punctuation">(</span>flattenChild<span class="token punctuation">)</span> <span class="token operator">||</span> head<span class="token punctuation">;</span>
		last<span class="token punctuation">.</span>next <span class="token operator">=</span> flattenNext<span class="token punctuation">;</span>
		flattenNext<span class="token punctuation">.</span>prev <span class="token operator">=</span> last<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> head<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 辅助函数：找到链表的最后一个节点</span>
<span class="token keyword">var</span> <span class="token function-variable function">findLast</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">head</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>head <span class="token operator">&amp;&amp;</span> head<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		head <span class="token operator">=</span> head<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> head<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function w(q,L){const l=o("font"),e=o("RouterLink"),c=o("ExternalLinkIcon");return u(),d("div",null,[k,n("p",null,[s("🟠 "),a(l,{color:"#ffb800"},{default:t(()=>[s("Medium")]),_:1}),s("  🔖  "),a(e,{to:"/tag/depth-first-search.html"},{default:t(()=>[v]),_:1}),s(),a(e,{to:"/tag/linked-list.html"},{default:t(()=>[h]),_:1}),s(),a(e,{to:"/tag/doubly-linked-list.html"},{default:t(()=>[m]),_:1}),s("  🔗 "),n("a",b,[f,a(c)])]),g,n("div",_,[x,n("p",null,[s("本题与 LeetCode "),a(e,{to:"/problem/0430.html"},{default:t(()=>[s("第 430 题")]),_:1}),s(" 相同。")])]),y])}const C=i(r,[["render",w],["__file","jz_offer_II_028.html.vue"]]);export{C as default};
