import{_ as l,r as t,o as i,c as d,a as n,b as s,d as a,w as e,e as r}from"./app-MXSjQbID.js";const u={},k=n("h1",{id:"_1496-判断路径是否相交",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1496-判断路径是否相交","aria-hidden":"true"},"#"),s(" 1496. 判断路径是否相交")],-1),h=n("code",null,"哈希表",-1),m=n("code",null,"字符串",-1),v={href:"https://leetcode.cn/problems/path-crossing",target:"_blank",rel:"noopener noreferrer"},g=n("code",null,"力扣",-1),b={href:"https://leetcode.com/problems/path-crossing",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"LeetCode",-1),_=r(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given a string <code>path</code>, where <code>path[i] = &#39;N&#39;</code>, <code>&#39;S&#39;</code>, <code>&#39;E&#39;</code> or <code>&#39;W&#39;</code>, each representing moving one unit north, south, east, or west, respectively. You start at the origin <code>(0, 0)</code> on a 2D plane and walk on the path specified by <code>path</code>.</p><p>Return <code>true</code> <em>if the path crosses itself at any point, that is, if at any time you are on a location you have previously visited</em>. Return <code>false</code> otherwise.</p><p><strong>Example 1:</strong></p><p>![](https://assets.leetcode.com/uploads/2020/06/10/screen- shot-2020-06-10-at-123929-pm.png)</p><blockquote><p>Input: path = &quot;NES&quot;</p><p>Output: false</p><p>Explanation: Notice that the path doesn&#39;t cross any point more than once.</p></blockquote><p><strong>Example 2:</strong></p><p>![](https://assets.leetcode.com/uploads/2020/06/10/screen- shot-2020-06-10-at-123843-pm.png)</p><blockquote><p>Input: path = &quot;NESWW&quot;</p><p>Output: true</p><p>Explanation: Notice that the path visits the origin twice.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= path.length &lt;= 10^4</code></li><li><code>path[i]</code> is either <code>&#39;N&#39;</code>, <code>&#39;S&#39;</code>, <code>&#39;E&#39;</code>, or <code>&#39;W&#39;</code>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个字符串 <code>path</code>，其中 <code>path[i]</code> 的值可以是 <code>&#39;N&#39;</code>、<code>&#39;S&#39;</code>、<code>&#39;E&#39;</code> 或者 <code>&#39;W&#39;</code>，分别表示向北、向南、向东、向西移动一个单位。</p><p>你从二维平面上的原点 <code>(0, 0)</code> 处开始出发，按 <code>path</code> 所指示的路径行走。</p><p>如果路径在任何位置上与自身相交，也就是走到之前已经走过的位置，请返回 <code>true</code> ；否则，返回 <code>false</code> 。</p><p><strong>示例 1：</strong></p><p>![](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2020/06/28/screen- shot-2020-06-10-at-123929-pm.png)</p><blockquote><p><strong>输入：</strong> path = &quot;NES&quot;</p><p><strong>输出：</strong> false</p><p><strong>解释：</strong> 该路径没有在任何位置相交。</p></blockquote><p><strong>示例 2：</strong></p><p>![](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2020/06/28/screen- shot-2020-06-10-at-123843-pm.png)</p><blockquote><p><strong>输入：</strong> path = &quot;NESWW&quot;</p><p><strong>输出：</strong> true</p><p><strong>解释：</strong> 该路径经过原点两次。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= path.length &lt;= 10^4</code></li><li><code>path[i]</code> 为 <code>&#39;N&#39;</code>、<code>&#39;S&#39;</code>、<code>&#39;E&#39;</code> 或 <code>&#39;W&#39;</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>可以通过记录已经访问过的坐标来判断是否会与之前的路径相交。</p><ol><li>使用 <code>(x, y)</code> 坐标表示当前位置，初始化为 <code>(0, 0)</code>。</li><li>用一个 <code>Set</code> 保存已经访问过的坐标。初始状态加入 <code>0,0</code>。</li><li>遍历路径字符串 <code>path</code>，根据字符 <code>N/S/E/W</code> 更新 <code>(x, y)</code> 的值： <ul><li><code>N</code>: <code>y++</code></li><li><code>S</code>: <code>y--</code></li><li><code>E</code>: <code>x++</code></li><li><code>W</code>: <code>x--</code></li></ul></li><li>将当前坐标序列化为字符串，例如 <code>&quot;x,y&quot;</code>。 <ul><li>如果 <code>Set</code> 中已经存在该坐标，说明路径相交，返回 <code>true</code>。</li><li>否则将该坐标加入 <code>Set</code>。</li></ul></li><li>遍历完成后，若没有发现重复坐标，返回 <code>false</code>。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>: <code>O(n)</code>，遍历路径字符串一次。</li><li><strong>空间复杂度</strong>: <code>O(n)</code>，最多需要记录路径中所有坐标。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">path</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">isPathCrossing</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">path</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
		y <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> visited <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	visited<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&#39;0,0&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> move <span class="token keyword">of</span> path<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>move <span class="token operator">==</span> <span class="token string">&#39;N&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			y<span class="token operator">++</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>move <span class="token operator">==</span> <span class="token string">&#39;S&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			y<span class="token operator">--</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>move <span class="token operator">==</span> <span class="token string">&#39;E&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			x<span class="token operator">++</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>move <span class="token operator">==</span> <span class="token string">&#39;W&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			x<span class="token operator">--</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">const</span> location <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>x<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">,</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>y<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>visited<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>location<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
		visited<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>location<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,30);function y(w,x){const c=t("font"),o=t("RouterLink"),p=t("ExternalLinkIcon");return i(),d("div",null,[k,n("p",null,[s("🟢 "),a(c,{color:"#15bd66"},{default:e(()=>[s("Easy")]),_:1}),s("  🔖  "),a(o,{to:"/tag/hash-table.html"},{default:e(()=>[h]),_:1}),s(),a(o,{to:"/tag/string.html"},{default:e(()=>[m]),_:1}),s("  🔗 "),n("a",v,[g,a(p)]),s(),n("a",b,[f,a(p)])]),_])}const q=l(u,[["render",y],["__file","1496.html.vue"]]);export{q as default};
