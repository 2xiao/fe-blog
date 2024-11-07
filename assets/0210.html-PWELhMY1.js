import{_ as p,r as c,o as i,c as r,a as t,b as s,d as n,w as e,f as d,e as u}from"./app-OX-nYmHS.js";const h={},_=t("h1",{id:"_210-课程表-ii",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_210-课程表-ii","aria-hidden":"true"},"#"),s(" 210. 课程表 II")],-1),k=t("code",null,"深度优先搜索",-1),f=t("code",null,"广度优先搜索",-1),m=t("code",null,"图",-1),g=t("code",null,"拓扑排序",-1),b={href:"https://leetcode.cn/problems/course-schedule-ii",target:"_blank",rel:"noopener noreferrer"},y=t("code",null,"力扣",-1),v={href:"https://leetcode.com/problems/course-schedule-ii",target:"_blank",rel:"noopener noreferrer"},x=t("code",null,"LeetCode",-1),w=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>There are a total of <code>numCourses</code> courses you have to take, labeled from <code>0</code> to <code>numCourses - 1</code>. You are given an array <code>prerequisites</code> where <code>prerequisites[i] = [ai, bi]</code> indicates that you <strong>must</strong> take course <code>bi</code> first if you want to take course <code>ai</code>.</p><ul><li>For example, the pair <code>[0, 1]</code>, indicates that to take course <code>0</code> you have to first take course <code>1</code>.</li></ul><p>Return <em>the ordering of courses you should take to finish all courses</em>. If there are many valid answers, return <strong>any</strong> of them. If it is impossible to finish all courses, return <strong>an empty array</strong>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: numCourses = 2, prerequisites = [[1,0]]</p><p>Output: [0,1]</p><p>Explanation: There are a total of 2 courses to take. To take course 1 you should have finished course 0. So the correct course order is [0,1].</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]</p><p>Output: [0,2,1,3]</p><p>Explanation: There are a total of 4 courses to take. To take course 3 you should have finished both courses 1 and 2. Both courses 1 and 2 should be taken after you finished course 0.</p><p>So one correct course order is [0,1,2,3]. Another correct ordering is [0,2,1,3].</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: numCourses = 1, prerequisites = []</p><p>Output: [0]</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= numCourses &lt;= 2000</code></li><li><code>0 &lt;= prerequisites.length &lt;= numCourses * (numCourses - 1)</code></li><li><code>prerequisites[i].length == 2</code></li><li><code>0 &lt;= ai, bi &lt; numCourses</code></li><li><code>ai != bi</code></li><li>All the pairs <code>[ai, bi]</code> are <strong>distinct</strong>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>现在你总共有 <code>numCourses</code> 门课需要选，记为 <code>0</code> 到 <code>numCourses - 1</code>。给你一个数组 <code>prerequisites</code> ，其中 <code>prerequisites[i] = [ai, bi]</code> ，表示在选修课程 <code>ai</code> 前 <strong>必须</strong> 先选修 <code>bi</code> 。</p><p>例如，想要学习课程 <code>0</code> ，你需要先完成课程 <code>1</code> ，我们用一个匹配来表示：<code>[0,1]</code> 。</p><p>返回你为了学完所有课程所安排的学习顺序。可能会有多个正确的顺序，你只要返回 <strong>任意一种</strong> 就可以了。如果不可能完成所有课程，返回 <strong>一个空数组</strong> 。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>什么时候无法修完所有课程？当存在循环依赖的时候。</p><p>其实这种场景在现实生活中也十分常见，比如我们写代码 import 包也是一个例子，必须合理设计代码目录结构，否则会出现循环依赖，编译器会报错，所以编译器实际上也使用了类似算法来判断你的代码是否能够成功编译。</p><p>看到依赖问题，首先想到的就是把问题转化成「有向图」这种数据结构，只要图中存在环，那就说明存在循环依赖。</p><ol><li><strong>构建图</strong>：</li></ol><ul><li>首先可以把课程看成「有向图」中的节点，节点编号分别是 <code>0, 1, ..., numCourses-1</code>，把课程之间的依赖关系看做节点之间的有向边。</li><li>比如说必须修完课程 <code>1</code> 才能去修课程 <code>3</code>，那么就在图中添加一条从节点 <code>1</code> 指向 <code>3</code> 的边。</li><li>如果发现这幅有向图中存在环，那就说明课程之间存在循环依赖，肯定没办法全部上完；反之，如果没有环，那么肯定能上完全部课程。</li></ul><ol start="2"><li><strong>使用 DFS 检测环路</strong>：</li></ol><ul><li>用一个 <code>hasCycle</code> 变量记录是否存在环，<code>onPath</code> 记录一次 DFS 递归经过的节点。</li><li>当重复遍历到 <code>onPath</code> 中的节点时，就说明遇到了环，设置 <code>hasCycle = true</code>。</li><li>用一个 <code>visited</code> 变量记录遍历过的节点，防止走回头路。 <ul><li>假设以节点 <code>2</code> 为起点遍历所有可达的路径，最终发现没有环。</li><li>假设另一个节点 <code>5</code> 有一条指向 <code>2</code> 的边，在以 <code>5</code> 为起点遍历所有可达的路径时，肯定还会走到 <code>2</code>，此时就不需要继续遍历 <code>2</code> 的所有可达路径了，避免了冗余计算</li></ul></li><li>遍历图中的所有节点，通过是否有环即可判断能否修完所有课程。</li></ul><ol start="3"><li><strong>收集学习顺序</strong>：</li></ol><ul><li>用一个 <code>path</code> 变量记录最终的学习路径，在 DFS 的后序位置更新 <code>path</code>，如果没有环路，将当前课程添加到 <code>path</code> 中。</li></ul><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><p><strong>时间复杂度</strong>：<code>O(V + E)</code></p><ul><li>图的构建时间复杂度为 <code>O(V + E)</code>，其中 <code>V</code> 是课程数量，<code>E</code> 是先决条件的数量。</li><li>DFS 遍历每个节点和每条边，因此 DFS 的时间复杂度也是 <code>O(V + E)</code>。</li><li>因此，总的时间复杂度为 <code>O(V + E)</code>。</li></ul></li><li><p><strong>空间复杂度</strong>：<code>O(V + E)</code></p><ul><li>需要使用额外的空间来存储图、访问状态数组和路径数组，空间复杂度为 <code>O(V + E)</code>。</li><li>额外的递归栈空间取决于课程的数量，最坏情况下为 <code>O(V)</code>。</li><li>因此，总的空间复杂度为 <code>O(V + E)</code>。</li></ul></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">numCourses</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">prerequisites</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">findOrder</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">numCourses<span class="token punctuation">,</span> prerequisites</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> graph <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>numCourses<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> <span class="token punctuation">[</span>a<span class="token punctuation">,</span> b<span class="token punctuation">]</span> <span class="token keyword">of</span> prerequisites<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		graph<span class="token punctuation">[</span>a<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">let</span> visited <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>numCourses<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		onPath <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>numCourses<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		path <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
		hasCycle <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

	<span class="token keyword">const</span> <span class="token function-variable function">dfs</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">graph<span class="token punctuation">,</span> i</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>onPath<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			hasCycle <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>hasCycle <span class="token operator">||</span> visited<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		visited<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
		onPath<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>

		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token keyword">of</span> graph<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token function">dfs</span><span class="token punctuation">(</span>graph<span class="token punctuation">,</span> j<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>

		path<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
		onPath<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>

	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> numCourses<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token function">dfs</span><span class="token punctuation">(</span>graph<span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> hasCycle <span class="token operator">?</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">:</span> path<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,31),C=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"left"}},"难度")])],-1),q=t("td",{style:{"text-align":"center"}},"207",-1),E={style:{"text-align":"left"}},V={href:"https://leetcode.com/problems/course-schedule",target:"_blank",rel:"noopener noreferrer"},I={style:{"text-align":"center"}},O={style:{"text-align":"left"}},S=t("code",null,"深度优先搜索",-1),F=t("code",null,"广度优先搜索",-1),M=t("code",null,"图",-1),P=t("code",null,"1+",-1),T={style:{"text-align":"left"}},j=t("td",{style:{"text-align":"center"}},"269",-1),A={style:{"text-align":"left"}},D={href:"https://leetcode.com/problems/alien-dictionary",target:"_blank",rel:"noopener noreferrer"},L=t("td",{style:{"text-align":"center"}},null,-1),N={style:{"text-align":"left"}},B=t("code",null,"深度优先搜索",-1),H=t("code",null,"广度优先搜索",-1),R=t("code",null,"图",-1),Y=t("code",null,"3+",-1),z={style:{"text-align":"left"}},G=t("td",{style:{"text-align":"center"}},"310",-1),J={style:{"text-align":"left"}},K={href:"https://leetcode.com/problems/minimum-height-trees",target:"_blank",rel:"noopener noreferrer"},Q=t("td",{style:{"text-align":"center"}},null,-1),U={style:{"text-align":"left"}},W=t("code",null,"深度优先搜索",-1),X=t("code",null,"广度优先搜索",-1),Z=t("code",null,"图",-1),$=t("code",null,"1+",-1),tt={style:{"text-align":"left"}},nt=t("td",{style:{"text-align":"center"}},"444",-1),st={style:{"text-align":"left"}},et={href:"https://leetcode.com/problems/sequence-reconstruction",target:"_blank",rel:"noopener noreferrer"},at=t("td",{style:{"text-align":"center"}},null,-1),ot={style:{"text-align":"left"}},lt=t("code",null,"图",-1),ct=t("code",null,"拓扑排序",-1),pt=t("code",null,"数组",-1),it={style:{"text-align":"left"}},rt=t("td",{style:{"text-align":"center"}},"630",-1),dt={style:{"text-align":"left"}},ut={href:"https://leetcode.com/problems/course-schedule-iii",target:"_blank",rel:"noopener noreferrer"},ht=t("td",{style:{"text-align":"center"}},null,-1),_t={style:{"text-align":"left"}},kt=t("code",null,"贪心",-1),ft=t("code",null,"数组",-1),mt=t("code",null,"排序",-1),gt=t("code",null,"1+",-1),bt={style:{"text-align":"left"}},yt=t("td",{style:{"text-align":"center"}},"1136",-1),vt={style:{"text-align":"left"}},xt={href:"https://leetcode.com/problems/parallel-courses",target:"_blank",rel:"noopener noreferrer"},wt=t("td",{style:{"text-align":"center"}},null,-1),Ct={style:{"text-align":"left"}},qt=t("code",null,"图",-1),Et=t("code",null,"拓扑排序",-1),Vt={style:{"text-align":"left"}},It=t("td",{style:{"text-align":"center"}},"2115",-1),Ot={style:{"text-align":"left"}},St={href:"https://leetcode.com/problems/find-all-possible-recipes-from-given-supplies",target:"_blank",rel:"noopener noreferrer"},Ft=t("td",{style:{"text-align":"center"}},null,-1),Mt={style:{"text-align":"left"}},Pt=t("code",null,"图",-1),Tt=t("code",null,"拓扑排序",-1),jt=t("code",null,"数组",-1),At=t("code",null,"2+",-1),Dt={style:{"text-align":"left"}},Lt=t("td",{style:{"text-align":"center"}},"2392",-1),Nt={style:{"text-align":"left"}},Bt={href:"https://leetcode.com/problems/build-a-matrix-with-conditions",target:"_blank",rel:"noopener noreferrer"},Ht=t("td",{style:{"text-align":"center"}},null,-1),Rt={style:{"text-align":"left"}},Yt=t("code",null,"图",-1),zt=t("code",null,"拓扑排序",-1),Gt=t("code",null,"数组",-1),Jt=t("code",null,"1+",-1),Kt={style:{"text-align":"left"}},Qt=t("td",{style:{"text-align":"center"}},"2459",-1),Ut={style:{"text-align":"left"}},Wt={href:"https://leetcode.com/problems/sort-array-by-moving-items-to-empty-space",target:"_blank",rel:"noopener noreferrer"},Xt=t("td",{style:{"text-align":"center"}},null,-1),Zt={style:{"text-align":"left"}},$t=t("code",null,"贪心",-1),tn=t("code",null,"数组",-1),nn=t("code",null,"排序",-1),sn={style:{"text-align":"left"}};function en(an,on){const l=c("font"),a=c("RouterLink"),o=c("ExternalLinkIcon");return i(),r("div",null,[_,t("p",null,[s("🟠 "),n(l,{color:"#ffb800"},{default:e(()=>[s("Medium")]),_:1}),s("  🔖  "),n(a,{to:"/tag/depth-first-search.html"},{default:e(()=>[k]),_:1}),s(),n(a,{to:"/tag/breadth-first-search.html"},{default:e(()=>[f]),_:1}),s(),n(a,{to:"/tag/graph.html"},{default:e(()=>[m]),_:1}),s(),n(a,{to:"/tag/topological-sort.html"},{default:e(()=>[g]),_:1}),s("  🔗 "),t("a",b,[y,n(o)]),s(),t("a",v,[x,n(o)])]),w,d(" prettier-ignore "),t("table",null,[C,t("tbody",null,[t("tr",null,[q,t("td",E,[t("a",V,[s("课程表"),n(o)])]),t("td",I,[n(a,{to:"/problem/0207.html"},{default:e(()=>[s("[✓]")]),_:1})]),t("td",O,[n(a,{to:"/tag/depth-first-search.html"},{default:e(()=>[S]),_:1}),s(),n(a,{to:"/tag/breadth-first-search.html"},{default:e(()=>[F]),_:1}),s(),n(a,{to:"/tag/graph.html"},{default:e(()=>[M]),_:1}),s(),P]),t("td",T,[n(l,{color:"#ffb800"},{default:e(()=>[s("Medium")]),_:1})])]),t("tr",null,[j,t("td",A,[t("a",D,[s("火星词典 🔒"),n(o)])]),L,t("td",N,[n(a,{to:"/tag/depth-first-search.html"},{default:e(()=>[B]),_:1}),s(),n(a,{to:"/tag/breadth-first-search.html"},{default:e(()=>[H]),_:1}),s(),n(a,{to:"/tag/graph.html"},{default:e(()=>[R]),_:1}),s(),Y]),t("td",z,[n(l,{color:"#ff334b"},{default:e(()=>[s("Hard")]),_:1})])]),t("tr",null,[G,t("td",J,[t("a",K,[s("最小高度树"),n(o)])]),Q,t("td",U,[n(a,{to:"/tag/depth-first-search.html"},{default:e(()=>[W]),_:1}),s(),n(a,{to:"/tag/breadth-first-search.html"},{default:e(()=>[X]),_:1}),s(),n(a,{to:"/tag/graph.html"},{default:e(()=>[Z]),_:1}),s(),$]),t("td",tt,[n(l,{color:"#ffb800"},{default:e(()=>[s("Medium")]),_:1})])]),t("tr",null,[nt,t("td",st,[t("a",et,[s("序列重建 🔒"),n(o)])]),at,t("td",ot,[n(a,{to:"/tag/graph.html"},{default:e(()=>[lt]),_:1}),s(),n(a,{to:"/tag/topological-sort.html"},{default:e(()=>[ct]),_:1}),s(),n(a,{to:"/tag/array.html"},{default:e(()=>[pt]),_:1})]),t("td",it,[n(l,{color:"#ffb800"},{default:e(()=>[s("Medium")]),_:1})])]),t("tr",null,[rt,t("td",dt,[t("a",ut,[s("课程表 III"),n(o)])]),ht,t("td",_t,[n(a,{to:"/tag/greedy.html"},{default:e(()=>[kt]),_:1}),s(),n(a,{to:"/tag/array.html"},{default:e(()=>[ft]),_:1}),s(),n(a,{to:"/tag/sorting.html"},{default:e(()=>[mt]),_:1}),s(),gt]),t("td",bt,[n(l,{color:"#ff334b"},{default:e(()=>[s("Hard")]),_:1})])]),t("tr",null,[yt,t("td",vt,[t("a",xt,[s("并行课程 🔒"),n(o)])]),wt,t("td",Ct,[n(a,{to:"/tag/graph.html"},{default:e(()=>[qt]),_:1}),s(),n(a,{to:"/tag/topological-sort.html"},{default:e(()=>[Et]),_:1})]),t("td",Vt,[n(l,{color:"#ffb800"},{default:e(()=>[s("Medium")]),_:1})])]),t("tr",null,[It,t("td",Ot,[t("a",St,[s("从给定原材料中找到所有可以做出的菜"),n(o)])]),Ft,t("td",Mt,[n(a,{to:"/tag/graph.html"},{default:e(()=>[Pt]),_:1}),s(),n(a,{to:"/tag/topological-sort.html"},{default:e(()=>[Tt]),_:1}),s(),n(a,{to:"/tag/array.html"},{default:e(()=>[jt]),_:1}),s(),At]),t("td",Dt,[n(l,{color:"#ffb800"},{default:e(()=>[s("Medium")]),_:1})])]),t("tr",null,[Lt,t("td",Nt,[t("a",Bt,[s("给定条件下构造矩阵"),n(o)])]),Ht,t("td",Rt,[n(a,{to:"/tag/graph.html"},{default:e(()=>[Yt]),_:1}),s(),n(a,{to:"/tag/topological-sort.html"},{default:e(()=>[zt]),_:1}),s(),n(a,{to:"/tag/array.html"},{default:e(()=>[Gt]),_:1}),s(),Jt]),t("td",Kt,[n(l,{color:"#ff334b"},{default:e(()=>[s("Hard")]),_:1})])]),t("tr",null,[Qt,t("td",Ut,[t("a",Wt,[s("通过移动项目到空白区域来排序数组 🔒"),n(o)])]),Xt,t("td",Zt,[n(a,{to:"/tag/greedy.html"},{default:e(()=>[$t]),_:1}),s(),n(a,{to:"/tag/array.html"},{default:e(()=>[tn]),_:1}),s(),n(a,{to:"/tag/sorting.html"},{default:e(()=>[nn]),_:1})]),t("td",sn,[n(l,{color:"#ff334b"},{default:e(()=>[s("Hard")]),_:1})])])])])])}const cn=p(h,[["render",en],["__file","0210.html.vue"]]);export{cn as default};
