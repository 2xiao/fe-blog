import{_ as r,r as c,o as p,c as i,a as n,b as t,d as e,w as s,f as d,e as u}from"./app-MXSjQbID.js";const k={},h=n("h1",{id:"_541-反转字符串-ii",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_541-反转字符串-ii","aria-hidden":"true"},"#"),t(" 541. 反转字符串 II")],-1),_=n("code",null,"双指针",-1),g=n("code",null,"字符串",-1),m={href:"https://leetcode.cn/problems/reverse-string-ii",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"力扣",-1),b={href:"https://leetcode.com/problems/reverse-string-ii",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"LeetCode",-1),y=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given a string <code>s</code> and an integer <code>k</code>, reverse the first <code>k</code> characters for every <code>2k</code> characters counting from the start of the string.</p><p>If there are fewer than <code>k</code> characters left, reverse all of them. If there are less than <code>2k</code> but greater than or equal to <code>k</code> characters, then reverse the first <code>k</code> characters and leave the other as original.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: s = &quot;abcdefg&quot;, k = 2</p><p>Output: &quot;bacdfeg&quot;</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: s = &quot;abcd&quot;, k = 2</p><p>Output: &quot;bacd&quot;</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= s.length &lt;= 10^4</code></li><li><code>s</code> consists of only lowercase English letters.</li><li><code>1 &lt;= k &lt;= 10^4</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个字符串 <code>s</code> 和一个整数 <code>k</code>，从字符串开头算起，每计数至 <code>2k</code> 个字符，就反转这 <code>2k</code> 字符中的前 <code>k</code> 个字符。</p><ul><li>如果剩余字符少于 <code>k</code> 个，则将剩余字符全部反转。</li><li>如果剩余字符小于 <code>2k</code> 但大于或等于 <code>k</code> 个，则反转前 <code>k</code> 个字符，其余字符保持原样。</li></ul><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> s = &quot;abcdefg&quot;, k = 2</p><p><strong>输出：</strong> &quot;bacdfeg&quot;</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> s = &quot;abcd&quot;, k = 2</p><p><strong>输出：</strong> &quot;bacd&quot;</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= s.length &lt;= 10^4</code></li><li><code>s</code> 仅由小写英文组成</li><li><code>1 &lt;= k &lt;= 10^4</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li>将字符串转为数组，以便原地修改字符。</li><li>使用 <code>for</code> 循环，步长为 <code>2k</code>，遍历字符串，从 <code>0</code> 开始处理每个子段，翻转前 <code>k</code> 个字符： <ul><li>计算当前子段的翻转范围 <code>[start, min(start + k - 1, s.length - 1)]</code>。</li><li>使用双指针，<code>i</code> 从子段的开头，<code>j</code> 从子段的末尾，逐步交换字符。</li></ul></li><li>将处理后的数组转换回字符串并返回。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code><ul><li>遍历字符串，每次处理最多 <code>2k</code> 个字符，时间复杂度为 <code>O(n)</code>；</li><li>数组转换和拼接的时间复杂度也是 <code>O(n)</code>。</li></ul></li><li><strong>空间复杂度</strong>：<code>O(n)</code>，转换字符串为数组，存储字符数组的开销。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">s</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">k</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">reverseStr</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s<span class="token punctuation">,</span> k</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> arr <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 将字符串转为数组</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> start <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> start <span class="token operator">&lt;</span> s<span class="token punctuation">.</span>length<span class="token punctuation">;</span> start <span class="token operator">+=</span> <span class="token number">2</span> <span class="token operator">*</span> k<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 每次处理 2k 个字符</span>
		<span class="token keyword">let</span> i <span class="token operator">=</span> start<span class="token punctuation">;</span> <span class="token comment">// 翻转区间的起始索引</span>
		<span class="token keyword">let</span> j <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>start <span class="token operator">+</span> k <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> s<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 翻转区间的结束索引（不要越界）</span>
		<span class="token comment">// 翻转区间内的字符</span>
		<span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> j<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">let</span> temp <span class="token operator">=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
			arr<span class="token punctuation">[</span>i<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
			arr<span class="token punctuation">[</span>j<span class="token operator">--</span><span class="token punctuation">]</span> <span class="token operator">=</span> temp<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> arr<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 返回翻转后的字符串</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,25),x=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),q=n("td",{style:{"text-align":"center"}},"344",-1),w=n("td",{style:{"text-align":"left"}},"反转字符串",-1),I={style:{"text-align":"center"}},j={style:{"text-align":"left"}},E=n("code",null,"双指针",-1),O=n("code",null,"字符串",-1),C=n("td",{style:{"text-align":"center"}},"🟢",-1),L={style:{"text-align":"center"}},N={href:"https://leetcode.cn/problems/reverse-string",target:"_blank",rel:"noopener noreferrer"},V={href:"https://leetcode.com/problems/reverse-string",target:"_blank",rel:"noopener noreferrer"},B=n("td",{style:{"text-align":"center"}},"557",-1),R=n("td",{style:{"text-align":"left"}},"反转字符串中的单词 III",-1),S={style:{"text-align":"center"}},G={style:{"text-align":"left"}},M=n("code",null,"双指针",-1),T=n("code",null,"字符串",-1),z=n("td",{style:{"text-align":"center"}},"🟢",-1),A={style:{"text-align":"center"}},D={href:"https://leetcode.cn/problems/reverse-words-in-a-string-iii",target:"_blank",rel:"noopener noreferrer"},F={href:"https://leetcode.com/problems/reverse-words-in-a-string-iii",target:"_blank",rel:"noopener noreferrer"},H=n("td",{style:{"text-align":"center"}},"2810",-1),J=n("td",{style:{"text-align":"left"}},"故障键盘",-1),K=n("td",{style:{"text-align":"center"}},null,-1),P={style:{"text-align":"left"}},Q=n("code",null,"字符串",-1),U=n("code",null,"模拟",-1),W=n("td",{style:{"text-align":"center"}},"🟢",-1),X={style:{"text-align":"center"}},Y={href:"https://leetcode.cn/problems/faulty-keyboard",target:"_blank",rel:"noopener noreferrer"},Z={href:"https://leetcode.com/problems/faulty-keyboard",target:"_blank",rel:"noopener noreferrer"};function $(nn,tn){const l=c("font"),a=c("RouterLink"),o=c("ExternalLinkIcon");return p(),i("div",null,[h,n("p",null,[t("🟢 "),e(l,{color:"#15bd66"},{default:s(()=>[t("Easy")]),_:1}),t("  🔖  "),e(a,{to:"/tag/two-pointers.html"},{default:s(()=>[_]),_:1}),t(),e(a,{to:"/tag/string.html"},{default:s(()=>[g]),_:1}),t("  🔗 "),n("a",m,[f,e(o)]),t(),n("a",b,[v,e(o)])]),y,d(" prettier-ignore "),n("table",null,[x,n("tbody",null,[n("tr",null,[q,w,n("td",I,[e(a,{to:"/problem/0344.html"},{default:s(()=>[t("[✓]")]),_:1})]),n("td",j,[e(a,{to:"/tag/two-pointers.html"},{default:s(()=>[E]),_:1}),t(),e(a,{to:"/tag/string.html"},{default:s(()=>[O]),_:1})]),C,n("td",L,[n("a",N,[t("🀄️"),e(o)]),t(),n("a",V,[t("🔗"),e(o)])])]),n("tr",null,[B,R,n("td",S,[e(a,{to:"/problem/0557.html"},{default:s(()=>[t("[✓]")]),_:1})]),n("td",G,[e(a,{to:"/tag/two-pointers.html"},{default:s(()=>[M]),_:1}),t(),e(a,{to:"/tag/string.html"},{default:s(()=>[T]),_:1})]),z,n("td",A,[n("a",D,[t("🀄️"),e(o)]),t(),n("a",F,[t("🔗"),e(o)])])]),n("tr",null,[H,J,K,n("td",P,[e(a,{to:"/tag/string.html"},{default:s(()=>[Q]),_:1}),t(),e(a,{to:"/tag/simulation.html"},{default:s(()=>[U]),_:1})]),W,n("td",X,[n("a",Y,[t("🀄️"),e(o)]),t(),n("a",Z,[t("🔗"),e(o)])])])])])])}const sn=r(k,[["render",$],["__file","0541.html.vue"]]);export{sn as default};
