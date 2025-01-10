import{_ as p,r as l,o as i,c as r,a as t,b as n,d as e,w as s,f as d,e as u}from"./app-XFeYdzZv.js";const h={},_=t("h1",{id:"_210-课程表-ii",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_210-课程表-ii","aria-hidden":"true"},"#"),n(" 210. 课程表 II")],-1),k=t("code",null,"深度优先搜索",-1),m=t("code",null,"广度优先搜索",-1),g=t("code",null,"图",-1),f=t("code",null,"拓扑排序",-1),b={href:"https://leetcode.cn/problems/course-schedule-ii",target:"_blank",rel:"noopener noreferrer"},y=t("code",null,"力扣",-1),v={href:"https://leetcode.com/problems/course-schedule-ii",target:"_blank",rel:"noopener noreferrer"},x=t("code",null,"LeetCode",-1),w=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>There are a total of <code>numCourses</code> courses you have to take, labeled from <code>0</code> to <code>numCourses - 1</code>. You are given an array <code>prerequisites</code> where <code>prerequisites[i] = [ai, bi]</code> indicates that you <strong>must</strong> take course <code>bi</code> first if you want to take course <code>ai</code>.</p><ul><li>For example, the pair <code>[0, 1]</code>, indicates that to take course <code>0</code> you have to first take course <code>1</code>.</li></ul><p>Return <em>the ordering of courses you should take to finish all courses</em>. If there are many valid answers, return <strong>any</strong> of them. If it is impossible to finish all courses, return <strong>an empty array</strong>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: numCourses = 2, prerequisites = [[1,0]]</p><p>Output: [0,1]</p><p>Explanation: There are a total of 2 courses to take. To take course 1 you should have finished course 0. So the correct course order is [0,1].</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]</p><p>Output: [0,2,1,3]</p><p>Explanation: There are a total of 4 courses to take. To take course 3 you should have finished both courses 1 and 2. Both courses 1 and 2 should be taken after you finished course 0.</p><p>So one correct course order is [0,1,2,3]. Another correct ordering is [0,2,1,3].</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: numCourses = 1, prerequisites = []</p><p>Output: [0]</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= numCourses &lt;= 2000</code></li><li><code>0 &lt;= prerequisites.length &lt;= numCourses * (numCourses - 1)</code></li><li><code>prerequisites[i].length == 2</code></li><li><code>0 &lt;= ai, bi &lt; numCourses</code></li><li><code>ai != bi</code></li><li>All the pairs <code>[ai, bi]</code> are <strong>distinct</strong>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>现在你总共有 <code>numCourses</code> 门课需要选，记为 <code>0</code> 到 <code>numCourses - 1</code>。给你一个数组 <code>prerequisites</code> ，其中 <code>prerequisites[i] = [ai, bi]</code> ，表示在选修课程 <code>ai</code> 前 <strong>必须</strong> 先选修 <code>bi</code> 。</p><p>例如，想要学习课程 <code>0</code> ，你需要先完成课程 <code>1</code> ，我们用一个匹配来表示：<code>[0,1]</code> 。</p><p>返回你为了学完所有课程所安排的学习顺序。可能会有多个正确的顺序，你只要返回 <strong>任意一种</strong> 就可以了。如果不可能完成所有课程，返回 <strong>一个空数组</strong> 。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>什么时候无法修完所有课程？当存在循环依赖的时候。</p><p>其实这种场景在现实生活中也十分常见，比如我们写代码 import 包也是一个例子，必须合理设计代码目录结构，否则会出现循环依赖，编译器会报错，所以编译器实际上也使用了类似算法来判断你的代码是否能够成功编译。</p><p>看到依赖问题，首先想到的就是把问题转化成「有向图」这种数据结构，只要图中存在环，那就说明存在循环依赖。</p><ol><li><strong>构建图</strong>：</li></ol><ul><li>首先可以把课程看成「有向图」中的节点，节点编号分别是 <code>0, 1, ..., numCourses-1</code>，把课程之间的依赖关系看做节点之间的有向边。</li><li>比如说必须修完课程 <code>1</code> 才能去修课程 <code>3</code>，那么就在图中添加一条从节点 <code>1</code> 指向 <code>3</code> 的边。</li><li>如果发现这幅有向图中存在环，那就说明课程之间存在循环依赖，肯定没办法全部上完；反之，如果没有环，那么肯定能上完全部课程。</li></ul><ol start="2"><li><strong>使用 DFS 检测环路</strong>：</li></ol><ul><li>用一个 <code>hasCycle</code> 变量记录是否存在环，<code>onPath</code> 记录一次 DFS 递归经过的节点。</li><li>当重复遍历到 <code>onPath</code> 中的节点时，就说明遇到了环，设置 <code>hasCycle = true</code>。</li><li>用一个 <code>visited</code> 变量记录遍历过的节点，防止走回头路。 <ul><li>假设以节点 <code>2</code> 为起点遍历所有可达的路径，最终发现没有环。</li><li>假设另一个节点 <code>5</code> 有一条指向 <code>2</code> 的边，在以 <code>5</code> 为起点遍历所有可达的路径时，肯定还会走到 <code>2</code>，此时就不需要继续遍历 <code>2</code> 的所有可达路径了，避免了冗余计算</li></ul></li><li>遍历图中的所有节点，通过是否有环即可判断能否修完所有课程。</li></ul><ol start="3"><li><strong>收集学习顺序</strong>：</li></ol><ul><li>用一个 <code>path</code> 变量记录最终的学习路径，在 DFS 的后序位置更新 <code>path</code>，如果没有环路，将当前课程添加到 <code>path</code> 中。</li></ul><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><p><strong>时间复杂度</strong>：<code>O(V + E)</code></p><ul><li>图的构建时间复杂度为 <code>O(V + E)</code>，其中 <code>V</code> 是课程数量，<code>E</code> 是先决条件的数量。</li><li>DFS 遍历每个节点和每条边，因此 DFS 的时间复杂度也是 <code>O(V + E)</code>。</li><li>因此，总的时间复杂度为 <code>O(V + E)</code>。</li></ul></li><li><p><strong>空间复杂度</strong>：<code>O(V + E)</code></p><ul><li>需要使用额外的空间来存储图、访问状态数组和路径数组，空间复杂度为 <code>O(V + E)</code>。</li><li>额外的递归栈空间取决于课程的数量，最坏情况下为 <code>O(V)</code>。</li><li>因此，总的空间复杂度为 <code>O(V + E)</code>。</li></ul></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,31),C=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"center"}},"难度"),t("th",{style:{"text-align":"center"}},"力扣")])],-1),q=t("td",{style:{"text-align":"center"}},"207",-1),E=t("td",{style:{"text-align":"left"}},"课程表",-1),V={style:{"text-align":"center"}},I={style:{"text-align":"left"}},O=t("code",null,"深度优先搜索",-1),S=t("code",null,"广度优先搜索",-1),F=t("code",null,"图",-1),P=t("code",null,"1+",-1),T=t("td",{style:{"text-align":"center"}},"🟠",-1),j={style:{"text-align":"center"}},A={href:"https://leetcode.cn/problems/course-schedule",target:"_blank",rel:"noopener noreferrer"},D={href:"https://leetcode.com/problems/course-schedule",target:"_blank",rel:"noopener noreferrer"},L=t("td",{style:{"text-align":"center"}},"269",-1),N=t("td",{style:{"text-align":"left"}},"火星词典 🔒",-1),B=t("td",{style:{"text-align":"center"}},null,-1),R={style:{"text-align":"left"}},M=t("code",null,"深度优先搜索",-1),Y=t("code",null,"广度优先搜索",-1),z=t("code",null,"图",-1),G=t("code",null,"3+",-1),H=t("td",{style:{"text-align":"center"}},"🔴",-1),J={style:{"text-align":"center"}},K={href:"https://leetcode.cn/problems/alien-dictionary",target:"_blank",rel:"noopener noreferrer"},Q={href:"https://leetcode.com/problems/alien-dictionary",target:"_blank",rel:"noopener noreferrer"},U=t("td",{style:{"text-align":"center"}},"310",-1),W=t("td",{style:{"text-align":"left"}},"最小高度树",-1),X=t("td",{style:{"text-align":"center"}},null,-1),Z={style:{"text-align":"left"}},$=t("code",null,"深度优先搜索",-1),tt=t("code",null,"广度优先搜索",-1),nt=t("code",null,"图",-1),et=t("code",null,"1+",-1),st=t("td",{style:{"text-align":"center"}},"🟠",-1),at={style:{"text-align":"center"}},ot={href:"https://leetcode.cn/problems/minimum-height-trees",target:"_blank",rel:"noopener noreferrer"},lt={href:"https://leetcode.com/problems/minimum-height-trees",target:"_blank",rel:"noopener noreferrer"},ct=t("td",{style:{"text-align":"center"}},"444",-1),pt=t("td",{style:{"text-align":"left"}},"序列重建 🔒",-1),it=t("td",{style:{"text-align":"center"}},null,-1),rt={style:{"text-align":"left"}},dt=t("code",null,"图",-1),ut=t("code",null,"拓扑排序",-1),ht=t("code",null,"数组",-1),_t=t("td",{style:{"text-align":"center"}},"🟠",-1),kt={style:{"text-align":"center"}},mt={href:"https://leetcode.cn/problems/sequence-reconstruction",target:"_blank",rel:"noopener noreferrer"},gt={href:"https://leetcode.com/problems/sequence-reconstruction",target:"_blank",rel:"noopener noreferrer"},ft=t("td",{style:{"text-align":"center"}},"630",-1),bt=t("td",{style:{"text-align":"left"}},"课程表 III",-1),yt=t("td",{style:{"text-align":"center"}},null,-1),vt={style:{"text-align":"left"}},xt=t("code",null,"贪心",-1),wt=t("code",null,"数组",-1),Ct=t("code",null,"排序",-1),qt=t("code",null,"1+",-1),Et=t("td",{style:{"text-align":"center"}},"🔴",-1),Vt={style:{"text-align":"center"}},It={href:"https://leetcode.cn/problems/course-schedule-iii",target:"_blank",rel:"noopener noreferrer"},Ot={href:"https://leetcode.com/problems/course-schedule-iii",target:"_blank",rel:"noopener noreferrer"},St=t("td",{style:{"text-align":"center"}},"1136",-1),Ft=t("td",{style:{"text-align":"left"}},"并行课程 🔒",-1),Pt=t("td",{style:{"text-align":"center"}},null,-1),Tt={style:{"text-align":"left"}},jt=t("code",null,"图",-1),At=t("code",null,"拓扑排序",-1),Dt=t("td",{style:{"text-align":"center"}},"🟠",-1),Lt={style:{"text-align":"center"}},Nt={href:"https://leetcode.cn/problems/parallel-courses",target:"_blank",rel:"noopener noreferrer"},Bt={href:"https://leetcode.com/problems/parallel-courses",target:"_blank",rel:"noopener noreferrer"},Rt=t("td",{style:{"text-align":"center"}},"2115",-1),Mt=t("td",{style:{"text-align":"left"}},"从给定原材料中找到所有可以做出的菜",-1),Yt=t("td",{style:{"text-align":"center"}},null,-1),zt={style:{"text-align":"left"}},Gt=t("code",null,"图",-1),Ht=t("code",null,"拓扑排序",-1),Jt=t("code",null,"数组",-1),Kt=t("code",null,"2+",-1),Qt=t("td",{style:{"text-align":"center"}},"🟠",-1),Ut={style:{"text-align":"center"}},Wt={href:"https://leetcode.cn/problems/find-all-possible-recipes-from-given-supplies",target:"_blank",rel:"noopener noreferrer"},Xt={href:"https://leetcode.com/problems/find-all-possible-recipes-from-given-supplies",target:"_blank",rel:"noopener noreferrer"},Zt=t("td",{style:{"text-align":"center"}},"2392",-1),$t=t("td",{style:{"text-align":"left"}},"给定条件下构造矩阵",-1),tn=t("td",{style:{"text-align":"center"}},null,-1),nn={style:{"text-align":"left"}},en=t("code",null,"图",-1),sn=t("code",null,"拓扑排序",-1),an=t("code",null,"数组",-1),on=t("code",null,"1+",-1),ln=t("td",{style:{"text-align":"center"}},"🔴",-1),cn={style:{"text-align":"center"}},pn={href:"https://leetcode.cn/problems/build-a-matrix-with-conditions",target:"_blank",rel:"noopener noreferrer"},rn={href:"https://leetcode.com/problems/build-a-matrix-with-conditions",target:"_blank",rel:"noopener noreferrer"},dn=t("td",{style:{"text-align":"center"}},"2459",-1),un=t("td",{style:{"text-align":"left"}},"通过移动项目到空白区域来排序数组 🔒",-1),hn=t("td",{style:{"text-align":"center"}},null,-1),_n={style:{"text-align":"left"}},kn=t("code",null,"贪心",-1),mn=t("code",null,"数组",-1),gn=t("code",null,"排序",-1),fn=t("td",{style:{"text-align":"center"}},"🔴",-1),bn={style:{"text-align":"center"}},yn={href:"https://leetcode.cn/problems/sort-array-by-moving-items-to-empty-space",target:"_blank",rel:"noopener noreferrer"},vn={href:"https://leetcode.com/problems/sort-array-by-moving-items-to-empty-space",target:"_blank",rel:"noopener noreferrer"};function xn(wn,Cn){const c=l("font"),a=l("RouterLink"),o=l("ExternalLinkIcon");return i(),r("div",null,[_,t("p",null,[n("🟠 "),e(c,{color:"#ffb800"},{default:s(()=>[n("Medium")]),_:1}),n("  🔖  "),e(a,{to:"/tag/depth-first-search.html"},{default:s(()=>[k]),_:1}),n(),e(a,{to:"/tag/breadth-first-search.html"},{default:s(()=>[m]),_:1}),n(),e(a,{to:"/tag/graph.html"},{default:s(()=>[g]),_:1}),n(),e(a,{to:"/tag/topological-sort.html"},{default:s(()=>[f]),_:1}),n("  🔗 "),t("a",b,[y,e(o)]),n(),t("a",v,[x,e(o)])]),w,d(" prettier-ignore "),t("table",null,[C,t("tbody",null,[t("tr",null,[q,E,t("td",V,[e(a,{to:"/problem/0207.html"},{default:s(()=>[n("[✓]")]),_:1})]),t("td",I,[e(a,{to:"/tag/depth-first-search.html"},{default:s(()=>[O]),_:1}),n(),e(a,{to:"/tag/breadth-first-search.html"},{default:s(()=>[S]),_:1}),n(),e(a,{to:"/tag/graph.html"},{default:s(()=>[F]),_:1}),n(),P]),T,t("td",j,[t("a",A,[n("🀄️"),e(o)]),n(),t("a",D,[n("🔗"),e(o)])])]),t("tr",null,[L,N,B,t("td",R,[e(a,{to:"/tag/depth-first-search.html"},{default:s(()=>[M]),_:1}),n(),e(a,{to:"/tag/breadth-first-search.html"},{default:s(()=>[Y]),_:1}),n(),e(a,{to:"/tag/graph.html"},{default:s(()=>[z]),_:1}),n(),G]),H,t("td",J,[t("a",K,[n("🀄️"),e(o)]),n(),t("a",Q,[n("🔗"),e(o)])])]),t("tr",null,[U,W,X,t("td",Z,[e(a,{to:"/tag/depth-first-search.html"},{default:s(()=>[$]),_:1}),n(),e(a,{to:"/tag/breadth-first-search.html"},{default:s(()=>[tt]),_:1}),n(),e(a,{to:"/tag/graph.html"},{default:s(()=>[nt]),_:1}),n(),et]),st,t("td",at,[t("a",ot,[n("🀄️"),e(o)]),n(),t("a",lt,[n("🔗"),e(o)])])]),t("tr",null,[ct,pt,it,t("td",rt,[e(a,{to:"/tag/graph.html"},{default:s(()=>[dt]),_:1}),n(),e(a,{to:"/tag/topological-sort.html"},{default:s(()=>[ut]),_:1}),n(),e(a,{to:"/tag/array.html"},{default:s(()=>[ht]),_:1})]),_t,t("td",kt,[t("a",mt,[n("🀄️"),e(o)]),n(),t("a",gt,[n("🔗"),e(o)])])]),t("tr",null,[ft,bt,yt,t("td",vt,[e(a,{to:"/tag/greedy.html"},{default:s(()=>[xt]),_:1}),n(),e(a,{to:"/tag/array.html"},{default:s(()=>[wt]),_:1}),n(),e(a,{to:"/tag/sorting.html"},{default:s(()=>[Ct]),_:1}),n(),qt]),Et,t("td",Vt,[t("a",It,[n("🀄️"),e(o)]),n(),t("a",Ot,[n("🔗"),e(o)])])]),t("tr",null,[St,Ft,Pt,t("td",Tt,[e(a,{to:"/tag/graph.html"},{default:s(()=>[jt]),_:1}),n(),e(a,{to:"/tag/topological-sort.html"},{default:s(()=>[At]),_:1})]),Dt,t("td",Lt,[t("a",Nt,[n("🀄️"),e(o)]),n(),t("a",Bt,[n("🔗"),e(o)])])]),t("tr",null,[Rt,Mt,Yt,t("td",zt,[e(a,{to:"/tag/graph.html"},{default:s(()=>[Gt]),_:1}),n(),e(a,{to:"/tag/topological-sort.html"},{default:s(()=>[Ht]),_:1}),n(),e(a,{to:"/tag/array.html"},{default:s(()=>[Jt]),_:1}),n(),Kt]),Qt,t("td",Ut,[t("a",Wt,[n("🀄️"),e(o)]),n(),t("a",Xt,[n("🔗"),e(o)])])]),t("tr",null,[Zt,$t,tn,t("td",nn,[e(a,{to:"/tag/graph.html"},{default:s(()=>[en]),_:1}),n(),e(a,{to:"/tag/topological-sort.html"},{default:s(()=>[sn]),_:1}),n(),e(a,{to:"/tag/array.html"},{default:s(()=>[an]),_:1}),n(),on]),ln,t("td",cn,[t("a",pn,[n("🀄️"),e(o)]),n(),t("a",rn,[n("🔗"),e(o)])])]),t("tr",null,[dn,un,hn,t("td",_n,[e(a,{to:"/tag/greedy.html"},{default:s(()=>[kn]),_:1}),n(),e(a,{to:"/tag/array.html"},{default:s(()=>[mn]),_:1}),n(),e(a,{to:"/tag/sorting.html"},{default:s(()=>[gn]),_:1})]),fn,t("td",bn,[t("a",yn,[n("🀄️"),e(o)]),n(),t("a",vn,[n("🔗"),e(o)])])])])])])}const En=p(h,[["render",xn],["__file","0210.html.vue"]]);export{En as default};
