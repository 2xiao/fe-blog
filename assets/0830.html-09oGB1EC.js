import{_ as l,r as p,o as r,c as u,a as n,b as s,d as t,w as e,f as i,e as d}from"./app-totCBmv-.js";const k={},g=n("h1",{id:"_830-较大分组的位置",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_830-较大分组的位置","aria-hidden":"true"},"#"),s(" 830. 较大分组的位置")],-1),h=n("code",null,"字符串",-1),b={href:"https://leetcode.cn/problems/positions-of-large-groups",target:"_blank",rel:"noopener noreferrer"},m=n("code",null,"力扣",-1),q={href:"https://leetcode.com/problems/positions-of-large-groups",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"LeetCode",-1),v=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>In a string <code>s</code> of lowercase letters, these letters form consecutive groups of the same character.</p><p>For example, a string like <code>s = &quot;abbxxxxzyy&quot;</code> has the groups <code>&quot;a&quot;</code>, <code>&quot;bb&quot;</code>, <code>&quot;xxxx&quot;</code>, <code>&quot;z&quot;</code>, and <code>&quot;yy&quot;</code>.</p><p>A group is identified by an interval <code>[start, end]</code>, where <code>start</code> and <code>end</code> denote the start and end indices (inclusive) of the group. In the above example, <code>&quot;xxxx&quot;</code> has the interval <code>[3,6]</code>.</p><p>A group is considered <strong>large</strong> if it has 3 or more characters.</p><p>Return <em>the intervals of every <strong>large</strong> group sorted in <strong>increasing order by start index</strong></em>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: s = &quot;abbxxxxzzy&quot;</p><p>Output: [[3,6]]</p><p>Explanation: &quot;xxxx&quot; is the only large group with start index 3 and end index 6.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: s = &quot;abc&quot;</p><p>Output: []</p><p>Explanation: We have groups &quot;a&quot;, &quot;b&quot;, and &quot;c&quot;, none of which are large groups.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: s = &quot;abcdddeeeeaabbbcd&quot;</p><p>Output: [[3,5],[6,9],[12,14]]</p><p>Explanation: The large groups are &quot;ddd&quot;, &quot;eeee&quot;, and &quot;bbb&quot;.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= s.length &lt;= 1000</code></li><li><code>s</code> contains lowercase English letters only.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>在一个由小写字母构成的字符串 <code>s</code> 中，包含由一些连续的相同字符所构成的分组。</p><p>例如，在字符串 <code>s = &quot;abbxxxxzyy&quot;</code> 中，就含有 <code>&quot;a&quot;</code>, <code>&quot;bb&quot;</code>, <code>&quot;xxxx&quot;</code>, <code>&quot;z&quot;</code> 和 <code>&quot;yy&quot;</code> 这样的一些分组。</p><p>分组可以用区间 <code>[start, end]</code> 表示，其中 <code>start</code> 和 <code>end</code> 分别表示该分组的起始和终止位置的下标。上例中的 <code>&quot;xxxx&quot;</code> 分组用区间表示为 <code>[3,6]</code> 。</p><p>我们称所有包含大于或等于三个连续字符的分组为 <strong>较大分组</strong> 。</p><p>找到每一个 <strong>较大分组</strong> 的区间，<strong>按起始位置下标递增顺序排序后</strong> ，返回结果。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> s = &quot;abbxxxxzzy&quot;</p><p><strong>输出：</strong>[[3,6]]</p><p><strong>解释：</strong> &quot;xxxx&quot; 是一个起始于 3 且终止于 6 的较大分组。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> s = &quot;abc&quot;</p><p><strong>输出：</strong>[]</p><p><strong>解释：</strong> &quot;a&quot;,&quot;b&quot; 和 &quot;c&quot; 均不是符合要求的较大分组。</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> s = &quot;abcdddeeeeaabbbcd&quot;</p><p><strong>输出：</strong>[[3,5],[6,9],[12,14]]</p><p><strong>解释：</strong> 较大分组为 &quot;ddd&quot;, &quot;eeee&quot; 和 &quot;bbb&quot;</p></blockquote><p><strong>示例 4：</strong></p><blockquote><p><strong>输入：</strong> s = &quot;aba&quot;</p><p><strong>输出：</strong>[]</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= s.length &lt;= 1000</code></li><li><code>s</code> 仅含小写英文字母</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>可以通过一次遍历字符串，记录连续字符的起点和终点，当字符发生变化时判断这段连续字符的长度是否大于等于 3，从而找到大组。</p><ol><li><p><strong>初始化变量</strong>：</p><ul><li><code>start</code> 表示当前连续字符的起始位置。</li><li>遍历字符串时，用 <code>end</code> 表示当前字符的位置。</li><li>使用结果数组 <code>res</code> 存储所有大组的起始和结束位置。</li></ul></li><li><p><strong>遍历字符串</strong>：</p><ul><li>如果当前字符 <code>s[end]</code> 与前一个字符 <code>s[start]</code> 不同： <ul><li>检查从 <code>start</code> 到 <code>end - 1</code> 的字符数量是否大于等于 3： <ul><li>如果是，将 <code>[start, end - 1]</code> 添加到结果数组。</li></ul></li><li>将 <code>start</code> 更新为 <code>end</code>，即新一段连续字符的起始位置。</li></ul></li></ul></li><li><p><strong>处理最后一组字符</strong>：</p><ul><li>如果字符串结尾的最后一组字符长度大于等于 3，将其位置添加到结果数组。</li></ul></li><li><p><strong>返回结果</strong>：</p><ul><li>返回存储大组位置的数组 <code>res</code>。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是字符串的长度，遍历字符串一次。</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，结果数组 <code>res</code> 存储所有大组的位置，最坏情况下，所有字符形成一个大组。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">s</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">largeGroupPositions</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> n <span class="token operator">=</span> s<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> start <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

	<span class="token comment">// 遍历字符串</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> end <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> end <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> end<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 当字符变化时，处理当前段</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>s<span class="token punctuation">[</span>end<span class="token punctuation">]</span> <span class="token operator">!==</span> s<span class="token punctuation">[</span>start<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>end <span class="token operator">-</span> start <span class="token operator">&gt;</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">[</span>start<span class="token punctuation">,</span> end <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			start <span class="token operator">=</span> end<span class="token punctuation">;</span> <span class="token comment">// 更新起始位置</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 处理最后一组字符</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">-</span> start <span class="token operator">&gt;</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">[</span>start<span class="token punctuation">,</span> n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,38),_=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),f=n("td",{style:{"text-align":"center"}},"2138",-1),y=n("td",{style:{"text-align":"left"}},"将字符串拆分为若干长度为 k 的组",-1),w={style:{"text-align":"center"}},E={style:{"text-align":"left"}},z=n("code",null,"字符串",-1),I=n("code",null,"模拟",-1),C=n("td",{style:{"text-align":"center"}},"🟢",-1),L={style:{"text-align":"center"}},N={href:"https://leetcode.cn/problems/divide-a-string-into-groups-of-size-k",target:"_blank",rel:"noopener noreferrer"},O={href:"https://leetcode.com/problems/divide-a-string-into-groups-of-size-k",target:"_blank",rel:"noopener noreferrer"};function V(j,B){const c=p("font"),a=p("RouterLink"),o=p("ExternalLinkIcon");return r(),u("div",null,[g,n("p",null,[s("🟢 "),t(c,{color:"#15bd66"},{default:e(()=>[s("Easy")]),_:1}),s("  🔖  "),t(a,{to:"/tag/string.html"},{default:e(()=>[h]),_:1}),s("  🔗 "),n("a",b,[m,t(o)]),s(),n("a",q,[x,t(o)])]),v,i(" prettier-ignore "),n("table",null,[_,n("tbody",null,[n("tr",null,[f,y,n("td",w,[t(a,{to:"/problem/2138.html"},{default:e(()=>[s("[✓]")]),_:1})]),n("td",E,[t(a,{to:"/tag/string.html"},{default:e(()=>[z]),_:1}),s(),t(a,{to:"/tag/simulation.html"},{default:e(()=>[I]),_:1})]),C,n("td",L,[n("a",N,[s("🀄️"),t(o)]),s(),n("a",O,[s("🔗"),t(o)])])])])])])}const A=l(k,[["render",V],["__file","0830.html.vue"]]);export{A as default};
