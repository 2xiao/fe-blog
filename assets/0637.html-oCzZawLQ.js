import{_ as c,r as l,o as i,c as r,a as n,b as t,d as e,w as s,f as u,e as d}from"./app-KDJRKGep.js";const k={},h=n("h1",{id:"_637-二叉树的层平均值",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_637-二叉树的层平均值","aria-hidden":"true"},"#"),t(" 637. 二叉树的层平均值")],-1),_=n("code",null,"树",-1),m=n("code",null,"深度优先搜索",-1),f=n("code",null,"广度优先搜索",-1),v=n("code",null,"二叉树",-1),b={href:"https://leetcode.cn/problems/average-of-levels-in-binary-tree",target:"_blank",rel:"noopener noreferrer"},g=n("code",null,"力扣",-1),y={href:"https://leetcode.com/problems/average-of-levels-in-binary-tree",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"LeetCode",-1),w=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given the <code>root</code> of a binary tree, return <em>the average value of the nodes on each level in the form of an array</em>. Answers within <code>10-5</code> of the actual answer will be accepted.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/03/09/avg1-tree.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: root = [3,9,20,null,null,15,7]</p><p>Output: [3.00000,14.50000,11.00000]</p><p>Explanation: The average value of nodes on level 0 is 3, on level 1 is 14.5, and on level 2 is 11.</p><p>Hence return [3, 14.5, 11].</p></blockquote><p><strong>Example 2:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/03/09/avg2-tree.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: root = [3,9,20,15,7]</p><p>Output: [3.00000,14.50000,11.00000]</p></blockquote><p><strong>Constraints:</strong></p><ul><li>The number of nodes in the tree is in the range <code>[1, 10^4]</code>.</li><li><code>-2^31 &lt;= Node.val &lt;= 2^31 - 1</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>按层序从上到下遍历一颗树，计算每一层的平均值。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>使用一个队列进行层序遍历，每次 <code>for</code> 循环时计算每层元素之和，再除以每层元素的个数 <code>len</code>，即可得到平均数。</p><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span> <span class="token parameter">root</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">averageOfLevels</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>root<span class="token punctuation">)</span> <span class="token keyword">return</span> res<span class="token punctuation">;</span>
	<span class="token keyword">let</span> queue <span class="token operator">=</span> <span class="token punctuation">[</span>root<span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>queue<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> len <span class="token operator">=</span> queue<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
		<span class="token keyword">let</span> temp <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>queue<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>left<span class="token punctuation">)</span> queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>queue<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>queue<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>right<span class="token punctuation">)</span> queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>queue<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
			temp <span class="token operator">+=</span> queue<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>val<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		queue <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>len<span class="token punctuation">)</span><span class="token punctuation">;</span>
		res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>temp <span class="token operator">/</span> len<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,17),q=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),E=n("td",{style:{"text-align":"center"}},"102",-1),N=n("td",{style:{"text-align":"left"}},"二叉树的层序遍历",-1),I={style:{"text-align":"center"}},L={style:{"text-align":"left"}},j=n("code",null,"树",-1),C=n("code",null,"广度优先搜索",-1),V=n("code",null,"二叉树",-1),T=n("td",{style:{"text-align":"center"}},"🟠",-1),B={style:{"text-align":"center"}},O={href:"https://leetcode.cn/problems/binary-tree-level-order-traversal",target:"_blank",rel:"noopener noreferrer"},z={href:"https://leetcode.com/problems/binary-tree-level-order-traversal",target:"_blank",rel:"noopener noreferrer"},R=n("td",{style:{"text-align":"center"}},"107",-1),A=n("td",{style:{"text-align":"left"}},"二叉树的层序遍历 II",-1),G={style:{"text-align":"center"}},H={style:{"text-align":"left"}},S=n("code",null,"树",-1),D=n("code",null,"广度优先搜索",-1),F=n("code",null,"二叉树",-1),J=n("td",{style:{"text-align":"center"}},"🟠",-1),K={style:{"text-align":"center"}},M={href:"https://leetcode.cn/problems/binary-tree-level-order-traversal-ii",target:"_blank",rel:"noopener noreferrer"},P={href:"https://leetcode.com/problems/binary-tree-level-order-traversal-ii",target:"_blank",rel:"noopener noreferrer"};function Q(U,W){const p=l("font"),a=l("RouterLink"),o=l("ExternalLinkIcon");return i(),r("div",null,[h,n("p",null,[t("🟢 "),e(p,{color:"#15bd66"},{default:s(()=>[t("Easy")]),_:1}),t("  🔖  "),e(a,{to:"/tag/tree.html"},{default:s(()=>[_]),_:1}),t(),e(a,{to:"/tag/depth-first-search.html"},{default:s(()=>[m]),_:1}),t(),e(a,{to:"/tag/breadth-first-search.html"},{default:s(()=>[f]),_:1}),t(),e(a,{to:"/tag/binary-tree.html"},{default:s(()=>[v]),_:1}),t("  🔗 "),n("a",b,[g,e(o)]),t(),n("a",y,[x,e(o)])]),w,u(" prettier-ignore "),n("table",null,[q,n("tbody",null,[n("tr",null,[E,N,n("td",I,[e(a,{to:"/problem/0102.html"},{default:s(()=>[t("[✓]")]),_:1})]),n("td",L,[e(a,{to:"/tag/tree.html"},{default:s(()=>[j]),_:1}),t(),e(a,{to:"/tag/breadth-first-search.html"},{default:s(()=>[C]),_:1}),t(),e(a,{to:"/tag/binary-tree.html"},{default:s(()=>[V]),_:1})]),T,n("td",B,[n("a",O,[t("🀄️"),e(o)]),t(),n("a",z,[t("🔗"),e(o)])])]),n("tr",null,[R,A,n("td",G,[e(a,{to:"/problem/0107.html"},{default:s(()=>[t("[✓]")]),_:1})]),n("td",H,[e(a,{to:"/tag/tree.html"},{default:s(()=>[S]),_:1}),t(),e(a,{to:"/tag/breadth-first-search.html"},{default:s(()=>[D]),_:1}),t(),e(a,{to:"/tag/binary-tree.html"},{default:s(()=>[F]),_:1})]),J,n("td",K,[n("a",M,[t("🀄️"),e(o)]),t(),n("a",P,[t("🔗"),e(o)])])])])])])}const Y=c(k,[["render",Q],["__file","0637.html.vue"]]);export{Y as default};
