import{_ as p,r as c,o as i,c as d,a as n,b as s,d as t,w as a,f as u,e as r}from"./app-KDJRKGep.js";const k={},h=n("h1",{id:"_859-亲密字符串",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_859-亲密字符串","aria-hidden":"true"},"#"),s(" 859. 亲密字符串")],-1),g=n("code",null,"哈希表",-1),m=n("code",null,"字符串",-1),_={href:"https://leetcode.cn/problems/buddy-strings",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"力扣",-1),f={href:"https://leetcode.com/problems/buddy-strings",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"LeetCode",-1),q=r(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given two strings <code>s</code> and <code>goal</code>, return <code>true</code> <em>if you can swap two letters in</em><code>s</code> <em>so the result is equal to</em><code>goal</code> <em>, otherwise, return</em><code>false</code> <em>.</em></p><p>Swapping letters is defined as taking two indices <code>i</code> and <code>j</code> (0-indexed) such that <code>i != j</code> and swapping the characters at <code>s[i]</code> and <code>s[j]</code>.</p><ul><li>For example, swapping at indices <code>0</code> and <code>2</code> in <code>&quot;abcd&quot;</code> results in <code>&quot;cbad&quot;</code>.</li></ul><p><strong>Example 1:</strong></p><blockquote><p>Input: s = &quot;ab&quot;, goal = &quot;ba&quot;</p><p>Output: true</p><p>Explanation: You can swap s[0] = &#39;a&#39; and s[1] = &#39;b&#39; to get &quot;ba&quot;, which is equal to goal.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: s = &quot;ab&quot;, goal = &quot;ab&quot;</p><p>Output: false</p><p>Explanation: The only letters you can swap are s[0] = &#39;a&#39; and s[1] = &#39;b&#39;, which results in &quot;ba&quot; != goal.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: s = &quot;aa&quot;, goal = &quot;aa&quot;</p><p>Output: true</p><p>Explanation: You can swap s[0] = &#39;a&#39; and s[1] = &#39;a&#39; to get &quot;aa&quot;, which is equal to goal.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= s.length, goal.length &lt;= 2 * 10^4</code></li><li><code>s</code> and <code>goal</code> consist of lowercase letters.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你两个字符串 <code>s</code> 和 <code>goal</code> ，只要我们可以通过交换 <code>s</code> 中的两个字母得到与 <code>goal</code> 相等的结果，就返回 <code>true</code> ；否则返回 <code>false</code> 。</p><p>交换字母的定义是：取两个下标 <code>i</code> 和 <code>j</code> （下标从 <code>0</code> 开始）且满足 <code>i != j</code> ，接着交换 <code>s[i]</code> 和 <code>s[j]</code> 处的字符。</p><ul><li>例如，在 <code>&quot;abcd&quot;</code> 中交换下标 <code>0</code> 和下标 <code>2</code> 的元素可以生成 <code>&quot;cbad&quot;</code> 。</li></ul><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> s = &quot;ab&quot;, goal = &quot;ba&quot;</p><p><strong>输出：</strong> true</p><p><strong>解释：</strong> 你可以交换 s[0] = &#39;a&#39; 和 s[1] = &#39;b&#39; 生成 &quot;ba&quot;，此时 s 和 goal 相等。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> s = &quot;ab&quot;, goal = &quot;ab&quot;</p><p><strong>输出：</strong> false</p><p><strong>解释：</strong> 你只能交换 s[0] = &#39;a&#39; 和 s[1] = &#39;b&#39; 生成 &quot;ba&quot;，此时 s 和 goal 不相等。</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> s = &quot;aa&quot;, goal = &quot;aa&quot;</p><p><strong>输出：</strong> true</p><p><strong>解释：</strong> 你可以交换 s[0] = &#39;a&#39; 和 s[1] = &#39;a&#39; 生成 &quot;aa&quot;，此时 s 和 goal 相等。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= s.length, goal.length &lt;= 2 * 10^4</code></li><li><code>s</code> 和 <code>goal</code> 由小写英文字母组成</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><h3 id="解题思路-1" tabindex="-1"><a class="header-anchor" href="#解题思路-1" aria-hidden="true">#</a> 解题思路</h3><p>题目要求判断字符串 <code>s</code> 是否可以通过<strong>一次交换两个字母</strong>变成字符串 <code>goal</code>，可以分为以下几种情况进行分析：</p><ol><li><p><strong>两个字符串长度不同</strong></p><p>如果 <code>s.length !== goal.length</code>，那么不可能通过交换得到相等的字符串，直接返回 <code>false</code>。</p></li><li><p><strong>两个字符串完全相等</strong></p><ul><li>如果 <code>s === goal</code>，通过 <code>Set</code> 检查是否存在重复字符，若有则返回 <code>true</code>，否则返回 <code>false</code>。</li><li>原因是，当两个字符串完全相同时，只有在存在重复字符的情况下，我们可以交换这两个重复字符，使字符串不变。</li><li>例如：<code>s = &quot;aabb&quot;</code>, <code>goal = &quot;aabb&quot;</code>，交换两个 <code>a</code> 或两个 <code>b</code>。</li><li>如果字符串没有重复字符，例如 <code>s = &quot;abc&quot;</code>, <code>goal = &quot;abc&quot;</code>，则无法通过一次交换使字符串不变。</li></ul></li><li><p><strong>两个字符串不同</strong></p><ul><li>如果 <code>s !== goal</code>，则需要满足以下条件： <ol><li>两个字符串中<strong>恰好有两个位置的字符不同</strong>。</li><li>这两个位置的字符交换后，<code>s</code> 能够变成 <code>goal</code>。</li></ol></li><li>遍历两个字符串，找出所有不同位置的下标。</li><li>如果不同位置的数量不等于 2，返回 <code>false</code>。</li><li>检查这两个位置的字符是否能够通过交换使两个字符串相等，即 <code>s[i] === goal[j]</code> 且 <code>s[j] === goal[i]</code>。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，遍历字符串的长度，进行比较和重复字符检查。</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，如果 <code>s === goal</code> 时，用到了一个 <code>Set</code> 来存储字符，空间复杂度为<code>O(n)</code>。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">s</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">goal</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">buddyStrings</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s<span class="token punctuation">,</span> goal</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 1. 长度不同直接返回 false</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>s<span class="token punctuation">.</span>length <span class="token operator">!==</span> goal<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

	<span class="token comment">// 2. 当两个字符串相等时，检查是否有重复字符</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>s <span class="token operator">===</span> goal<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> seen <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> char <span class="token keyword">of</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>seen<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>char<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span> <span class="token comment">// 存在重复字符</span>
			seen<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>char<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token comment">// 没有重复字符</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 3. 找出不同的字符位置</span>
	<span class="token keyword">let</span> diff <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> s<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">!==</span> goal<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			diff<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 4. 判断是否恰好有两个不同位置，且能通过交换使 s 和 goal 相等</span>
	<span class="token keyword">return</span> <span class="token punctuation">(</span>
		diff<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">2</span> <span class="token operator">&amp;&amp;</span>
		s<span class="token punctuation">[</span>diff<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">===</span> goal<span class="token punctuation">[</span>diff<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span>
		s<span class="token punctuation">[</span>diff<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">===</span> goal<span class="token punctuation">[</span>diff<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
	<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,33),y=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),x=n("td",{style:{"text-align":"center"}},"1657",-1),w=n("td",{style:{"text-align":"left"}},"确定两个字符串是否接近",-1),j={style:{"text-align":"center"}},E={style:{"text-align":"left"}},O=n("code",null,"哈希表",-1),S=n("code",null,"字符串",-1),C=n("code",null,"计数",-1),I=n("code",null,"1+",-1),L=n("td",{style:{"text-align":"center"}},"🟠",-1),N={style:{"text-align":"center"}},V={href:"https://leetcode.cn/problems/determine-if-two-strings-are-close",target:"_blank",rel:"noopener noreferrer"},B={href:"https://leetcode.com/problems/determine-if-two-strings-are-close",target:"_blank",rel:"noopener noreferrer"},R=n("td",{style:{"text-align":"center"}},"1790",-1),T=n("td",{style:{"text-align":"left"}},"仅执行一次字符串交换能否使两个字符串相等",-1),Y={style:{"text-align":"center"}},F={style:{"text-align":"left"}},G=n("code",null,"哈希表",-1),z=n("code",null,"字符串",-1),A=n("code",null,"计数",-1),D=n("td",{style:{"text-align":"center"}},"🟢",-1),H={style:{"text-align":"center"}},J={href:"https://leetcode.cn/problems/check-if-one-string-swap-can-make-strings-equal",target:"_blank",rel:"noopener noreferrer"},K={href:"https://leetcode.com/problems/check-if-one-string-swap-can-make-strings-equal",target:"_blank",rel:"noopener noreferrer"},M=n("td",{style:{"text-align":"center"}},"2531",-1),P=n("td",{style:{"text-align":"left"}},"使字符串中不同字符的数目相等",-1),Q=n("td",{style:{"text-align":"center"}},null,-1),U={style:{"text-align":"left"}},W=n("code",null,"哈希表",-1),X=n("code",null,"字符串",-1),Z=n("code",null,"计数",-1),$=n("td",{style:{"text-align":"center"}},"🟠",-1),nn={style:{"text-align":"center"}},sn={href:"https://leetcode.cn/problems/make-number-of-distinct-characters-equal",target:"_blank",rel:"noopener noreferrer"},tn={href:"https://leetcode.com/problems/make-number-of-distinct-characters-equal",target:"_blank",rel:"noopener noreferrer"};function an(en,on){const l=c("font"),e=c("RouterLink"),o=c("ExternalLinkIcon");return i(),d("div",null,[h,n("p",null,[s("🟢 "),t(l,{color:"#15bd66"},{default:a(()=>[s("Easy")]),_:1}),s("  🔖  "),t(e,{to:"/tag/hash-table.html"},{default:a(()=>[g]),_:1}),s(),t(e,{to:"/tag/string.html"},{default:a(()=>[m]),_:1}),s("  🔗 "),n("a",_,[b,t(o)]),s(),n("a",f,[v,t(o)])]),q,u(" prettier-ignore "),n("table",null,[y,n("tbody",null,[n("tr",null,[x,w,n("td",j,[t(e,{to:"/problem/1657.html"},{default:a(()=>[s("[✓]")]),_:1})]),n("td",E,[t(e,{to:"/tag/hash-table.html"},{default:a(()=>[O]),_:1}),s(),t(e,{to:"/tag/string.html"},{default:a(()=>[S]),_:1}),s(),t(e,{to:"/tag/counting.html"},{default:a(()=>[C]),_:1}),s(),I]),L,n("td",N,[n("a",V,[s("🀄️"),t(o)]),s(),n("a",B,[s("🔗"),t(o)])])]),n("tr",null,[R,T,n("td",Y,[t(e,{to:"/problem/1790.html"},{default:a(()=>[s("[✓]")]),_:1})]),n("td",F,[t(e,{to:"/tag/hash-table.html"},{default:a(()=>[G]),_:1}),s(),t(e,{to:"/tag/string.html"},{default:a(()=>[z]),_:1}),s(),t(e,{to:"/tag/counting.html"},{default:a(()=>[A]),_:1})]),D,n("td",H,[n("a",J,[s("🀄️"),t(o)]),s(),n("a",K,[s("🔗"),t(o)])])]),n("tr",null,[M,P,Q,n("td",U,[t(e,{to:"/tag/hash-table.html"},{default:a(()=>[W]),_:1}),s(),t(e,{to:"/tag/string.html"},{default:a(()=>[X]),_:1}),s(),t(e,{to:"/tag/counting.html"},{default:a(()=>[Z]),_:1})]),$,n("td",nn,[n("a",sn,[s("🀄️"),t(o)]),s(),n("a",tn,[s("🔗"),t(o)])])])])])])}const ln=p(k,[["render",an],["__file","0859.html.vue"]]);export{ln as default};
