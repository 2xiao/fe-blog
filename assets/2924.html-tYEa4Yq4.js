import{_ as i,r as s,o as p,c as l,a as e,b as n,d as a,w as t,e as r}from"./app-vJr_7gbR.js";const u={},g=e("h1",{id:"_2924-找到冠军-ii",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_2924-找到冠军-ii","aria-hidden":"true"},"#"),n(" 2924. 找到冠军 II")],-1),m=e("code",null,"图",-1),k={href:"https://leetcode.cn/problems/find-champion-ii",target:"_blank",rel:"noopener noreferrer"},h=e("code",null,"力扣",-1),b={href:"https://leetcode.com/problems/find-champion-ii",target:"_blank",rel:"noopener noreferrer"},v=e("code",null,"LeetCode",-1),f=r(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>There are <code>n</code> teams numbered from <code>0</code> to <code>n - 1</code> in a tournament; each team is also a node in a <strong>DAG</strong>.</p><p>You are given the integer <code>n</code> and a <strong>0-indexed</strong> 2D integer array <code>edges</code> of length <code>m</code> representing the <strong>DAG</strong> , where <code>edges[i] = [ui, vi]</code> indicates that there is a directed edge from team <code>ui</code> to team <code>vi</code> in the graph.</p><p>A directed edge from <code>a</code> to <code>b</code> in the graph means that team <code>a</code> is <strong>stronger</strong> than team <code>b</code> and team <code>b</code> is <strong>weaker</strong> than team <code>a</code>.</p><p>Team <code>a</code> will be the <strong>champion</strong> of the tournament if there is no team <code>b</code> that is <strong>stronger</strong> than team <code>a</code>.</p><p>Return the team that will be the<strong>champion</strong> of the tournament if there is a <strong>unique</strong> champion, otherwise, return <code>-1</code>.</p><p><strong>Notes</strong></p><ul><li>A <strong>cycle</strong> is a series of nodes <code>a1, a2, ..., an, an+1</code> such that node <code>a1</code> is the same node as node <code>an+1</code>, the nodes <code>a1, a2, ..., an</code> are distinct, and there is a directed edge from the node <code>ai</code> to node <code>ai+1</code> for every <code>i</code> in the range <code>[1, n]</code>.</li><li>A <strong>DAG</strong> is a directed graph that does not have any <strong>cycle</strong>.</li></ul><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2023/10/19/graph-3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: n = 3, edges = [[0,1],[1,2]]</p><p>Output: 0</p><p>Explanation: Team 1 is weaker than team 0. Team 2 is weaker than team 1. So the champion is team 0.</p></blockquote><p><strong>Example 2:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2023/10/19/graph-4.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: n = 4, edges = [[0,2],[1,3],[1,2]]</p><p>Output: -1</p><p>Explanation: Team 2 is weaker than team 0 and team 1. Team 3 is weaker than team 1. But team 1 and team 0 are not weaker than any other teams. So the answer is -1.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= n &lt;= 100</code></li><li><code>m == edges.length</code></li><li><code>0 &lt;= m &lt;= n * (n - 1) / 2</code></li><li><code>edges[i].length == 2</code></li><li><code>0 &lt;= edge[i][j] &lt;= n - 1</code></li><li><code>edges[i][0] != edges[i][1]</code></li><li>The input is generated such that if team <code>a</code> is stronger than team <code>b</code>, team <code>b</code> is not stronger than team <code>a</code>.</li><li>The input is generated such that if team <code>a</code> is stronger than team <code>b</code> and team <code>b</code> is stronger than team <code>c</code>, then team <code>a</code> is stronger than team <code>c</code>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>一场比赛中共有 <code>n</code> 支队伍，按从 <code>0</code> 到 <code>n - 1</code> 编号。每支队伍也是 <strong>有向无环图（DAG）</strong> 上的一个节点。</p><p>给你一个整数 <code>n</code> 和一个下标从 <strong>0</strong> 开始、长度为 <code>m</code> 的二维整数数组 <code>edges</code> 表示这个有向无环图，其中 <code>edges[i] = [ui, vi]</code> 表示图中存在一条从 <code>ui</code> 队到 <code>vi</code> 队的有向边。</p><p>从 <code>a</code> 队到 <code>b</code> 队的有向边意味着 <code>a</code> 队比 <code>b</code> 队 <strong>强</strong> ，也就是 <code>b</code> 队比 <code>a</code> 队 <strong>弱</strong> 。</p><p>在这场比赛中，如果不存在某支强于 <code>a</code> 队的队伍，则认为 <code>a</code> 队将会是 <strong>冠军</strong> 。</p><p>如果这场比赛存在 <strong>唯一</strong> 一个冠军，则返回将会成为冠军的队伍。否则，返回 <code>-1</code>。</p><p><strong>注意</strong></p><ul><li><strong>环</strong> 是形如 <code>a1, a2, ..., an, an+1</code> 的一个序列，且满足：节点 <code>a1</code> 与节点 <code>an+1</code> 是同一个节点；节点 <code>a1, a2, ..., an</code> 互不相同；对于范围 <code>[1, n]</code> 中的每个 <code>i</code> ，均存在一条从节点 <code>ai</code> 到节点 <code>ai+1</code> 的有向边。</li><li><strong>有向无环图</strong> 是不存在任何环的有向图。</li></ul><p><strong>示例 1：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2023/10/19/graph-3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>输入：</strong> n = 3, edges = [[0,1],[1,2]]</p><p><strong>输出：</strong> 0</p><p><strong>解释：</strong> 1 队比 0 队弱。2 队比 1 队弱。所以冠军是 0 队。</p></blockquote><p><strong>示例 2：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2023/10/19/graph-4.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>输入：</strong> n = 4, edges = [[0,2],[1,3],[1,2]]</p><p><strong>输出：</strong> -1</p><p><strong>解释：</strong> 2 队比 0 队和 1 队弱。3 队比 1 队弱。但是 1 队和 0 队之间不存在强弱对比。所以答案是 -1 。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= n &lt;= 100</code></li><li><code>m == edges.length</code></li><li><code>0 &lt;= m &lt;= n * (n - 1) / 2</code></li><li><code>edges[i].length == 2</code></li><li><code>0 &lt;= edge[i][j] &lt;= n - 1</code></li><li><code>edges[i][0] != edges[i][1]</code></li><li>生成的输入满足：如果 <code>a</code> 队比 <code>b</code> 队强，就不存在 <code>b</code> 队比 <code>a</code> 队强</li><li>生成的输入满足：如果 <code>a</code> 队比 <code>b</code> 队强，<code>b</code> 队比 <code>c</code> 队强，那么 <code>a</code> 队比 <code>c</code> 队强</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ul><li>使用一个集合 <code>visited</code> 存储所有被击败的节点。</li><li>遍历所有边，把每条边上被击败的节点加入 <code>visited</code> 集合中，如边 <code>(a, b)</code>，将 <code>b</code> 加入 <code>visited</code>，表示 <code>b</code> 被 <code>a</code> 击败。</li><li>遍历完 <code>edges</code> 后，如果 <code>visited</code> 集合的大小等于 <code>n - 1</code>，则说明有一个节点没有被击败，这个节点是可能的冠军。</li><li>遍历 <code>0</code> 到 <code>n-1</code> 的每个节点，如果这个节点不在 <code>visited</code> 中，说明它是唯一没有被击败的节点，因此返回它作为冠军。</li><li>此外，如果 <code>visited</code> 集合的大小不等于 <code>n - 1</code>，说明有循环存在或者冠军不唯一，此时返回 <code>-1</code>。</li></ul><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度：</strong> <code>O(m + n)</code>，其中 <code>m</code> 是 <code>edges</code> 数组的长度（即比赛数量），<code>n</code> 是节点数量。遍历 <code>edges</code> 和遍历节点的时间复杂度分别是 <code>O(m)</code> 和 <code>O(n)</code>，因此总复杂度为 <code>O(m + n)</code>。</li><li><strong>空间复杂度：</strong> <code>O(n)</code>，使用了一个 <code>Set</code> 来存储被击败的节点，最多需要存储 <code>n</code> 个节点。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">n</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">edges</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">findChampion</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">n<span class="token punctuation">,</span> edges</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> visited <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">// 记录所有被击败的节点</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> edge <span class="token keyword">of</span> edges<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		visited<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>edge<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 如果被击败的节点数不是 n-1，则说明冠军不存在</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>visited<span class="token punctuation">.</span>size <span class="token operator">!==</span> n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 查找没有被击败的节点，返回该节点</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>visited<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> i<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,38);function _(w,y){const c=s("font"),d=s("RouterLink"),o=s("ExternalLinkIcon");return p(),l("div",null,[g,e("p",null,[n("🟠 "),a(c,{color:"#ffb800"},{default:t(()=>[n("Medium")]),_:1}),n("  🔖  "),a(d,{to:"/tag/graph.html"},{default:t(()=>[m]),_:1}),n("  🔗 "),e("a",k,[h,a(o)]),n(),e("a",b,[v,a(o)])]),f])}const q=i(u,[["render",_],["__file","2924.html.vue"]]);export{q as default};
