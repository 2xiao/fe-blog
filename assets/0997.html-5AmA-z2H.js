import{_ as p,r as c,o as i,c as r,a as n,b as e,d as s,w as t,f as d,e as u}from"./app-9CeBk-uV.js";const k={},h=n("h1",{id:"_997-找到小镇的法官",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_997-找到小镇的法官","aria-hidden":"true"},"#"),e(" 997. 找到小镇的法官")],-1),g=n("code",null,"图",-1),b=n("code",null,"数组",-1),m=n("code",null,"哈希表",-1),_={href:"https://leetcode.cn/problems/find-the-town-judge",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"力扣",-1),f={href:"https://leetcode.com/problems/find-the-town-judge",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"LeetCode",-1),x=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>In a town, there are <code>n</code> people labeled from <code>1</code> to <code>n</code>. There is a rumor that one of these people is secretly the town judge.</p><p>If the town judge exists, then:</p><ol><li>The town judge trusts nobody.</li><li>Everybody (except for the town judge) trusts the town judge.</li><li>There is exactly one person that satisfies properties <strong>1</strong> and <strong>2</strong>.</li></ol><p>You are given an array <code>trust</code> where <code>trust[i] = [ai, bi]</code> representing that the person labeled <code>ai</code> trusts the person labeled <code>bi</code>. If a trust relationship does not exist in <code>trust</code> array, then such a trust relationship does not exist.</p><p>Return <em>the label of the town judge if the town judge exists and can be identified, or return</em><code>-1</code> <em>otherwise</em>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: n = 2, trust = [[1,2]]</p><p>Output: 2</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: n = 3, trust = [[1,3],[2,3]]</p><p>Output: 3</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: n = 3, trust = [[1,3],[2,3],[3,1]]</p><p>Output: -1</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= n &lt;= 1000</code></li><li><code>0 &lt;= trust.length &lt;= 10^4</code></li><li><code>trust[i].length == 2</code></li><li>All the pairs of <code>trust</code> are <strong>unique</strong>.</li><li><code>ai != bi</code></li><li><code>1 &lt;= ai, bi &lt;= n</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>小镇里有 <code>n</code> 个人，按从 <code>1</code> 到 <code>n</code> 的顺序编号。传言称，这些人中有一个暗地里是小镇法官。</p><p>如果小镇法官真的存在，那么：</p><ol><li>小镇法官不会信任任何人。</li><li>每个人（除了小镇法官）都信任这位小镇法官。</li><li>只有一个人同时满足属性 <strong>1</strong> 和属性 <strong>2</strong> 。</li></ol><p>给你一个数组 <code>trust</code> ，其中 <code>trust[i] = [ai, bi]</code> 表示编号为 <code>ai</code> 的人信任编号为 <code>bi</code> 的人。</p><p>如果小镇法官存在并且可以确定他的身份，请返回该法官的编号；否则，返回 <code>-1</code> 。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> n = 2, trust = [[1,2]]</p><p><strong>输出：</strong> 2</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> n = 3, trust = [[1,3],[2,3]]</p><p><strong>输出：</strong> 3</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> n = 3, trust = [[1,3],[2,3],[3,1]]</p><p><strong>输出：</strong> -1</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= n &lt;= 1000</code></li><li><code>0 &lt;= trust.length &lt;= 10^4</code></li><li><code>trust[i].length == 2</code></li><li><code>trust</code> 中的所有<code>trust[i] = [ai, bi]</code> <strong>互不相同</strong></li><li><code>ai != bi</code></li><li><code>1 &lt;= ai, bi &lt;= n</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>初始化数据结构：</strong></p><ul><li>创建一个 <code>judge</code> 数组，长度为 <code>n + 1</code>，用来记录每个节点（对应每个人）被信任的次数。<code>judge[i]</code> 表示第 <code>i</code> 个人被信任的次数。</li><li>使用一个 <code>believer</code> 集合来记录所有信任了其他人的人。即，信任关系中的每个 <code>a</code> 都加入到 <code>believer</code> 中。</li></ul></li><li><p><strong>处理信任关系：</strong></p><ul><li>遍历 <code>trust</code> 数组，针对每个信任关系 <code>[a, b]</code>： <ul><li>将 <code>judge[b]</code> 加 1，表示 <code>b</code> 被信任了一次。</li><li>将 <code>a</code> 加入到 <code>believer</code> 集合中，表示 <code>a</code> 信任了别人。</li></ul></li></ul></li><li><p><strong>寻找法官：</strong></p><ul><li>法官是一个特殊的个体，他被 <code>n - 1</code> 个人信任，并且他自己不信任任何人。因此，遍历 <code>judge</code> 数组，找到被信任次数等于 <code>n - 1</code> 且不在 <code>believer</code> 集合中的人。</li></ul></li><li><p><strong>返回结果：</strong></p><ul><li>如果找到符合条件的人，返回其编号（即法官编号）；如果没有找到符合条件的人，则返回 <code>-1</code>。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(t + n)</code><ul><li>遍历 <code>trust</code> 数组的时间复杂度是 <code>O(T)</code>，其中 <code>t</code> 是 <code>trust</code> 数组的长度。</li><li>遍历 <code>judge</code> 数组的时间复杂度是 <code>O(n)</code>，其中 <code>n</code> 是人数。</li></ul></li><li><strong>空间复杂度</strong>：<code>O(n)</code><ul><li><code>judge</code> 数组的大小为 <code>n + 1</code>，占用 <code>O(n)</code> 的空间。</li><li><code>believer</code> 集合最多包含 <code>n</code> 个人，占用 <code>O(n)</code> 的空间。</li></ul></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">n</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">trust</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">findJudge</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">n<span class="token punctuation">,</span> trust</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> judge <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>n <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		believer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">// 处理信任关系</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> <span class="token punctuation">[</span>a<span class="token punctuation">,</span> b<span class="token punctuation">]</span> <span class="token keyword">of</span> trust<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		judge<span class="token punctuation">[</span>b<span class="token punctuation">]</span><span class="token operator">++</span><span class="token punctuation">;</span>
		believer<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 寻找法官</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>judge<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> n <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>believer<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> i<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,35),w=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),j=n("td",{style:{"text-align":"center"}},"277",-1),q=n("td",{style:{"text-align":"left"}},"搜寻名人 🔒",-1),O=n("td",{style:{"text-align":"center"}},null,-1),E={style:{"text-align":"left"}},I=n("code",null,"图",-1),C=n("code",null,"双指针",-1),L=n("code",null,"交互",-1),N=n("td",{style:{"text-align":"center"}},"🟠",-1),T={style:{"text-align":"center"}},V={href:"https://leetcode.cn/problems/find-the-celebrity",target:"_blank",rel:"noopener noreferrer"},B={href:"https://leetcode.com/problems/find-the-celebrity",target:"_blank",rel:"noopener noreferrer"};function R(A,S){const l=c("font"),a=c("RouterLink"),o=c("ExternalLinkIcon");return i(),r("div",null,[h,n("p",null,[e("🟢 "),s(l,{color:"#15bd66"},{default:t(()=>[e("Easy")]),_:1}),e("  🔖  "),s(a,{to:"/tag/graph.html"},{default:t(()=>[g]),_:1}),e(),s(a,{to:"/tag/array.html"},{default:t(()=>[b]),_:1}),e(),s(a,{to:"/tag/hash-table.html"},{default:t(()=>[m]),_:1}),e("  🔗 "),n("a",_,[v,s(o)]),e(),n("a",f,[y,s(o)])]),x,d(" prettier-ignore "),n("table",null,[w,n("tbody",null,[n("tr",null,[j,q,O,n("td",E,[s(a,{to:"/tag/graph.html"},{default:t(()=>[I]),_:1}),e(),s(a,{to:"/tag/two-pointers.html"},{default:t(()=>[C]),_:1}),e(),s(a,{to:"/tag/interactive.html"},{default:t(()=>[L]),_:1})]),N,n("td",T,[n("a",V,[e("🀄️"),s(o)]),e(),n("a",B,[e("🔗"),s(o)])])])])])])}const Y=p(k,[["render",R],["__file","0997.html.vue"]]);export{Y as default};
