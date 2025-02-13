import{_ as l,r as c,o as i,c as d,a as n,b as s,d as t,w as a,f as u,e as r}from"./app-MXSjQbID.js";const k={},h=n("h1",{id:"_684-冗余连接",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_684-冗余连接","aria-hidden":"true"},"#"),s(" 684. 冗余连接")],-1),g=n("code",null,"深度优先搜索",-1),_=n("code",null,"广度优先搜索",-1),m=n("code",null,"并查集",-1),f=n("code",null,"图",-1),b={href:"https://leetcode.cn/problems/redundant-connection",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"力扣",-1),y={href:"https://leetcode.com/problems/redundant-connection",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"LeetCode",-1),w=r(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>In this problem, a tree is an <strong>undirected graph</strong> that is connected and has no cycles.</p><p>You are given a graph that started as a tree with <code>n</code> nodes labeled from <code>1</code> to <code>n</code>, with one additional edge added. The added edge has two <strong>different</strong> vertices chosen from <code>1</code> to <code>n</code>, and was not an edge that already existed. The graph is represented as an array <code>edges</code> of length <code>n</code> where <code>edges[i] = [ai, bi]</code> indicates that there is an edge between nodes <code>ai</code> and <code>bi</code> in the graph.</p><p>Return <em>an edge that can be removed so that the resulting graph is a tree of</em><code>n</code> <em>nodes</em>. If there are multiple answers, return the answer that occurs last in the input.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/05/02/reduntant1-1-graph.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: edges = [[1,2],[1,3],[2,3]]</p><p>Output: [2,3]</p></blockquote><p><strong>Example 2:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/05/02/reduntant1-2-graph.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: edges = [[1,2],[2,3],[3,4],[1,4],[1,5]]</p><p>Output: [1,4]</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>n == edges.length</code></li><li><code>3 &lt;= n &lt;= 1000</code></li><li><code>edges[i].length == 2</code></li><li><code>1 &lt;= ai &lt; bi &lt;= edges.length</code></li><li><code>ai != bi</code></li><li>There are no repeated edges.</li><li>The given graph is connected.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>树可以看成是一个连通且 <strong>无环</strong>的 <strong>无向</strong> 图。</p><p>给定往一棵 <code>n</code> 个节点 (节点值 <code>1～n</code>) 的树中添加一条边后的图。添加的边的两个顶点包含在 <code>1</code> 到 <code>n</code> 中间，且这条附加的边不属于树中已存在的边。图的信息记录于长度为 <code>n</code> 的二维数组 <code>edges</code> ，<code>edges[i] = [ai, bi]</code> 表示图中在 <code>ai</code> 和 <code>bi</code> 之间存在一条边。</p><p>请找出一条可以删去的边，删除后可使得剩余部分是一个有着 <code>n</code> 个节点的树。如果有多个答案，则返回数组 <code>edges</code> 中最后出现的那个。</p><p><strong>示例 1：</strong></p><figure><img src="https://pic.leetcode-cn.com/1626676174-hOEVUL-image.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>输入:</strong> edges = [[1,2], [1,3], [2,3]]</p><p><strong>输出:</strong> [2,3]</p></blockquote><p><strong>示例 2：</strong></p><figure><img src="https://pic.leetcode-cn.com/1626676179-kGxcmu-image.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>输入:</strong> edges = [[1,2], [2,3], [3,4], [1,4], [1,5]]</p><p><strong>输出:</strong> [1,4]</p></blockquote><p><strong>提示:</strong></p><ul><li><code>n == edges.length</code></li><li><code>3 &lt;= n &lt;= 1000</code></li><li><code>edges[i].length == 2</code></li><li><code>1 &lt;= ai &lt; bi &lt;= edges.length</code></li><li><code>ai != bi</code></li><li><code>edges</code> 中无重复元素</li><li>给定的图是连通的</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>定义数据结构</strong></p><ul><li>使用 <strong>邻接表</strong> (<code>graph</code>) 来表示无向图，使用 <code>Map</code> 存储每个节点及其相邻节点列表。。</li><li>定义辅助函数 <code>dfs(u, target, visited)</code>，用于判断从节点 <code>u</code> 出发是否能到达 <code>target</code>。</li></ul></li><li><p><strong>环检测逻辑</strong></p><ul><li>遍历 <code>edges</code> 数组，对于每一条边 <code>[u, v]</code>： <ul><li>如果 <code>u</code> 和 <code>v</code> 已经连通（即在当前图中存在路径），说明这条边是冗余边，直接返回 <code>[u, v]</code>。</li><li>否则，将这条边加入图中（即更新邻接表）。</li></ul></li></ul></li><li><p><strong>DFS 实现</strong></p><ul><li>递归判断当前节点是否可以通过未访问过的节点到达目标节点： <ul><li>如果到达目标节点，说明这条边形成了环，返回 <code>true</code>。</li><li>否则递归继续搜索邻居节点。</li></ul></li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n^2)</code>，在最坏情况下，需要遍历每条边并进行 DFS 搜索，每次搜索可能遍历所有节点。</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，邻接表和递归栈的空间开销。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">edges</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">findRedundantConnection</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">edges</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> graph <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 图的邻接表</span>

	<span class="token comment">// DFS 判断节点 u 是否能够到达目标节点 target</span>
	<span class="token keyword">const</span> <span class="token function-variable function">dfs</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">u<span class="token punctuation">,</span> target<span class="token punctuation">,</span> visited</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>u <span class="token operator">===</span> target<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span> <span class="token comment">// 找到目标节点</span>
		visited<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>u<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 标记节点已访问</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> neighbor <span class="token keyword">of</span> graph<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>u<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>visited<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>neighbor<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">dfs</span><span class="token punctuation">(</span>neighbor<span class="token punctuation">,</span> target<span class="token punctuation">,</span> visited<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token comment">// 未找到目标节点</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>

	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> <span class="token punctuation">[</span>u<span class="token punctuation">,</span> v<span class="token punctuation">]</span> <span class="token keyword">of</span> edges<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 判断是否形成环</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>graph<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>u<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> graph<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">const</span> visited <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">dfs</span><span class="token punctuation">(</span>u<span class="token punctuation">,</span> v<span class="token punctuation">,</span> visited<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token punctuation">[</span>u<span class="token punctuation">,</span> v<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 找到冗余边</span>
		<span class="token punctuation">}</span>

		<span class="token comment">// 将边加入图中</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>graph<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>u<span class="token punctuation">)</span><span class="token punctuation">)</span> graph<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>u<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>graph<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span><span class="token punctuation">)</span> graph<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>v<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		graph<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>u<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span><span class="token punctuation">;</span>
		graph<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>u<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,31),q=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),I=n("td",{style:{"text-align":"center"}},"685",-1),C=n("td",{style:{"text-align":"left"}},"冗余连接 II",-1),E=n("td",{style:{"text-align":"center"}},null,-1),L={style:{"text-align":"left"}},V=n("code",null,"深度优先搜索",-1),j=n("code",null,"广度优先搜索",-1),N=n("code",null,"并查集",-1),O=n("code",null,"1+",-1),S=n("td",{style:{"text-align":"center"}},"🔴",-1),T={style:{"text-align":"center"}},z={href:"https://leetcode.cn/problems/redundant-connection-ii",target:"_blank",rel:"noopener noreferrer"},R={href:"https://leetcode.com/problems/redundant-connection-ii",target:"_blank",rel:"noopener noreferrer"},B=n("td",{style:{"text-align":"center"}},"721",-1),D=n("td",{style:{"text-align":"left"}},"账户合并",-1),F=n("td",{style:{"text-align":"center"}},null,-1),M={style:{"text-align":"left"}},G=n("code",null,"深度优先搜索",-1),U=n("code",null,"广度优先搜索",-1),Y=n("code",null,"并查集",-1),A=n("code",null,"4+",-1),H=n("td",{style:{"text-align":"center"}},"🟠",-1),J={style:{"text-align":"center"}},K={href:"https://leetcode.cn/problems/accounts-merge",target:"_blank",rel:"noopener noreferrer"},P={href:"https://leetcode.com/problems/accounts-merge",target:"_blank",rel:"noopener noreferrer"},Q=n("td",{style:{"text-align":"center"}},"2127",-1),W=n("td",{style:{"text-align":"left"}},"参加会议的最多员工数",-1),X=n("td",{style:{"text-align":"center"}},null,-1),Z={style:{"text-align":"left"}},$=n("code",null,"深度优先搜索",-1),nn=n("code",null,"图",-1),sn=n("code",null,"拓扑排序",-1),tn=n("td",{style:{"text-align":"center"}},"🔴",-1),an={style:{"text-align":"center"}},en={href:"https://leetcode.cn/problems/maximum-employees-to-be-invited-to-a-meeting",target:"_blank",rel:"noopener noreferrer"},on={href:"https://leetcode.com/problems/maximum-employees-to-be-invited-to-a-meeting",target:"_blank",rel:"noopener noreferrer"},cn=n("td",{style:{"text-align":"center"}},"2608",-1),pn=n("td",{style:{"text-align":"left"}},"图中的最短环",-1),ln=n("td",{style:{"text-align":"center"}},null,-1),dn={style:{"text-align":"left"}},un=n("code",null,"广度优先搜索",-1),rn=n("code",null,"图",-1),kn=n("td",{style:{"text-align":"center"}},"🔴",-1),hn={style:{"text-align":"center"}},gn={href:"https://leetcode.cn/problems/shortest-cycle-in-a-graph",target:"_blank",rel:"noopener noreferrer"},_n={href:"https://leetcode.com/problems/shortest-cycle-in-a-graph",target:"_blank",rel:"noopener noreferrer"};function mn(fn,bn){const p=c("font"),e=c("RouterLink"),o=c("ExternalLinkIcon");return i(),d("div",null,[h,n("p",null,[s("🟠 "),t(p,{color:"#ffb800"},{default:a(()=>[s("Medium")]),_:1}),s("  🔖  "),t(e,{to:"/tag/depth-first-search.html"},{default:a(()=>[g]),_:1}),s(),t(e,{to:"/tag/breadth-first-search.html"},{default:a(()=>[_]),_:1}),s(),t(e,{to:"/tag/union-find.html"},{default:a(()=>[m]),_:1}),s(),t(e,{to:"/tag/graph.html"},{default:a(()=>[f]),_:1}),s("  🔗 "),n("a",b,[v,t(o)]),s(),n("a",y,[x,t(o)])]),w,u(" prettier-ignore "),n("table",null,[q,n("tbody",null,[n("tr",null,[I,C,E,n("td",L,[t(e,{to:"/tag/depth-first-search.html"},{default:a(()=>[V]),_:1}),s(),t(e,{to:"/tag/breadth-first-search.html"},{default:a(()=>[j]),_:1}),s(),t(e,{to:"/tag/union-find.html"},{default:a(()=>[N]),_:1}),s(),O]),S,n("td",T,[n("a",z,[s("🀄️"),t(o)]),s(),n("a",R,[s("🔗"),t(o)])])]),n("tr",null,[B,D,F,n("td",M,[t(e,{to:"/tag/depth-first-search.html"},{default:a(()=>[G]),_:1}),s(),t(e,{to:"/tag/breadth-first-search.html"},{default:a(()=>[U]),_:1}),s(),t(e,{to:"/tag/union-find.html"},{default:a(()=>[Y]),_:1}),s(),A]),H,n("td",J,[n("a",K,[s("🀄️"),t(o)]),s(),n("a",P,[s("🔗"),t(o)])])]),n("tr",null,[Q,W,X,n("td",Z,[t(e,{to:"/tag/depth-first-search.html"},{default:a(()=>[$]),_:1}),s(),t(e,{to:"/tag/graph.html"},{default:a(()=>[nn]),_:1}),s(),t(e,{to:"/tag/topological-sort.html"},{default:a(()=>[sn]),_:1})]),tn,n("td",an,[n("a",en,[s("🀄️"),t(o)]),s(),n("a",on,[s("🔗"),t(o)])])]),n("tr",null,[cn,pn,ln,n("td",dn,[t(e,{to:"/tag/breadth-first-search.html"},{default:a(()=>[un]),_:1}),s(),t(e,{to:"/tag/graph.html"},{default:a(()=>[rn]),_:1})]),kn,n("td",hn,[n("a",gn,[s("🀄️"),t(o)]),s(),n("a",_n,[s("🔗"),t(o)])])])])])])}const yn=l(k,[["render",mn],["__file","0684.html.vue"]]);export{yn as default};
