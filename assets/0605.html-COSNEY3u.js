import{_ as p,r as l,o as r,c as d,a as e,b as n,d as t,w as s,f as i,e as u}from"./app-KDJRKGep.js";const k={},h=e("h1",{id:"_605-种花问题",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_605-种花问题","aria-hidden":"true"},"#"),n(" 605. 种花问题")],-1),m=e("code",null,"贪心",-1),b=e("code",null,"数组",-1),_={href:"https://leetcode.cn/problems/can-place-flowers",target:"_blank",rel:"noopener noreferrer"},f=e("code",null,"力扣",-1),g={href:"https://leetcode.com/problems/can-place-flowers",target:"_blank",rel:"noopener noreferrer"},v=e("code",null,"LeetCode",-1),w=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in <strong>adjacent</strong> plots.</p><p>Given an integer array <code>flowerbed</code> containing <code>0</code>&#39;s and <code>1</code>&#39;s, where <code>0</code> means empty and <code>1</code> means not empty, and an integer <code>n</code>, return <code>true</code> <em>if</em> <code>n</code> <em>new flowers can be planted in the</em> <code>flowerbed</code> <em>without violating the no-adjacent- flowers rule and</em> <code>false</code> <em>otherwise</em>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: flowerbed = [1,0,0,0,1], n = 1</p><p>Output: true</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: flowerbed = [1,0,0,0,1], n = 2</p><p>Output: false</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= flowerbed.length &lt;= 2 * 10^4</code></li><li><code>flowerbed[i]</code> is <code>0</code> or <code>1</code>.</li><li>There are no two adjacent flowers in <code>flowerbed</code>.</li><li><code>0 &lt;= n &lt;= flowerbed.length</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>假设有一个很长的花坛，一部分地块种植了花，另一部分却没有。可是，花不能种植在相邻的地块上，它们会争夺水源，两者都会死去。</p><p>给你一个整数数组 <code>flowerbed</code> 表示花坛，由若干 <code>0</code> 和 <code>1</code> 组成，其中 <code>0</code> 表示没种植花，<code>1</code> 表示种植了花。另有一个数 <code>n</code> ，能否在不打破种植规则的情况下种入 <code>n</code> 朵花？能则返回 <code>true</code> ，不能则返回 <code>false</code> 。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> flowerbed = [1,0,0,0,1], n = 1</p><p><strong>输出：</strong> true</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> flowerbed = [1,0,0,0,1], n = 2</p><p><strong>输出：</strong> false</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= flowerbed.length &lt;= 2 * 10^4</code></li><li><code>flowerbed[i]</code> 为 <code>0</code> 或 <code>1</code></li><li><code>flowerbed</code> 中不存在相邻的两朵花</li><li><code>0 &lt;= n &lt;= flowerbed.length</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>遍历花坛</strong>：</p><ul><li>使用一个循环遍历整个 <code>flowerbed</code> 数组，寻找可以种花的位置。可以种花的位置是指当前位置为 <code>0</code>，且左右相邻的位置也为 <code>0</code>（或在边界位置）。</li></ul></li><li><p><strong>判断种花条件</strong>：</p><ul><li>对于每个位置 <code>i</code>，判断以下条件： <ul><li><code>flowerbed[i] === 0</code>（当前位置为空）</li><li><code>i === 0 || flowerbed[i - 1] === 0</code>（左边没有花或在边界）</li><li><code>i === flowerbed.length - 1 || flowerbed[i + 1] === 0</code>（右边没有花或在边界）</li></ul></li><li>如果以上条件成立，则可以在当前位置种花。</li></ul></li><li><p><strong>更新花数</strong>：</p><ul><li>每次成功种花后，将 <code>count</code> 加一，并将当前位置标记为 <code>1</code>（种花）。</li></ul></li><li><p><strong>判断是否满足条件</strong>：</p><ul><li>在遍历结束后，检查 <code>count</code> 是否大于或等于 <code>n</code>；</li><li>如果是，返回 <code>true</code>；否则返回 <code>false</code>。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(m)</code>，其中 <code>m</code> 是 <code>flowerbed</code> 数组的长度，只需遍历一次花坛。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，只使用常量空间来存储状态。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">flowerbed</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">n</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">canPlaceFlowers</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">flowerbed<span class="token punctuation">,</span> n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

	flowerbed<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span> i</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token comment">// 检查当前位置是否可以种花</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>
			flowerbed<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span>
			<span class="token punctuation">(</span>i <span class="token operator">===</span> <span class="token number">0</span> <span class="token operator">||</span> flowerbed<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span>
			<span class="token punctuation">(</span>i <span class="token operator">===</span> flowerbed<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">||</span> flowerbed<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span>
		<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			flowerbed<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 种花</span>
			count<span class="token operator">++</span><span class="token punctuation">;</span> <span class="token comment">// 记录种花数量</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">// 检查是否能种下 n 朵花</span>
	<span class="token keyword">return</span> count <span class="token operator">&gt;=</span> n<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,25),x=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"center"}},"题号"),e("th",{style:{"text-align":"left"}},"标题"),e("th",{style:{"text-align":"center"}},"题解"),e("th",{style:{"text-align":"left"}},"标签"),e("th",{style:{"text-align":"center"}},"难度"),e("th",{style:{"text-align":"center"}},"力扣")])],-1),y=e("td",{style:{"text-align":"center"}},"495",-1),q=e("td",{style:{"text-align":"left"}},"提莫攻击",-1),E={style:{"text-align":"center"}},j={style:{"text-align":"left"}},C=e("code",null,"数组",-1),L=e("code",null,"模拟",-1),N=e("td",{style:{"text-align":"center"}},"🟢",-1),V={style:{"text-align":"center"}},I={href:"https://leetcode.cn/problems/teemo-attacking",target:"_blank",rel:"noopener noreferrer"},O={href:"https://leetcode.com/problems/teemo-attacking",target:"_blank",rel:"noopener noreferrer"},B=e("td",{style:{"text-align":"center"}},"735",-1),R=e("td",{style:{"text-align":"left"}},"小行星碰撞",-1),T={style:{"text-align":"center"}},F={style:{"text-align":"left"}},G=e("code",null,"栈",-1),H=e("code",null,"数组",-1),P=e("code",null,"模拟",-1),S=e("td",{style:{"text-align":"center"}},"🟠",-1),Y={style:{"text-align":"center"}},z={href:"https://leetcode.cn/problems/asteroid-collision",target:"_blank",rel:"noopener noreferrer"},A={href:"https://leetcode.com/problems/asteroid-collision",target:"_blank",rel:"noopener noreferrer"};function D(J,K){const c=l("font"),a=l("RouterLink"),o=l("ExternalLinkIcon");return r(),d("div",null,[h,e("p",null,[n("🟢 "),t(c,{color:"#15bd66"},{default:s(()=>[n("Easy")]),_:1}),n("  🔖  "),t(a,{to:"/tag/greedy.html"},{default:s(()=>[m]),_:1}),n(),t(a,{to:"/tag/array.html"},{default:s(()=>[b]),_:1}),n("  🔗 "),e("a",_,[f,t(o)]),n(),e("a",g,[v,t(o)])]),w,i(" prettier-ignore "),e("table",null,[x,e("tbody",null,[e("tr",null,[y,q,e("td",E,[t(a,{to:"/problem/0495.html"},{default:s(()=>[n("[✓]")]),_:1})]),e("td",j,[t(a,{to:"/tag/array.html"},{default:s(()=>[C]),_:1}),n(),t(a,{to:"/tag/simulation.html"},{default:s(()=>[L]),_:1})]),N,e("td",V,[e("a",I,[n("🀄️"),t(o)]),n(),e("a",O,[n("🔗"),t(o)])])]),e("tr",null,[B,R,e("td",T,[t(a,{to:"/problem/0735.html"},{default:s(()=>[n("[✓]")]),_:1})]),e("td",F,[t(a,{to:"/tag/stack.html"},{default:s(()=>[G]),_:1}),n(),t(a,{to:"/tag/array.html"},{default:s(()=>[H]),_:1}),n(),t(a,{to:"/tag/simulation.html"},{default:s(()=>[P]),_:1})]),S,e("td",Y,[e("a",z,[n("🀄️"),t(o)]),n(),e("a",A,[n("🔗"),t(o)])])])])])])}const Q=p(k,[["render",D],["__file","0605.html.vue"]]);export{Q as default};
