import{_ as r,r as l,o as d,c as p,a as e,b as n,d as t,w as s,f as i,e as u}from"./app-9CeBk-uV.js";const h={},m=e("h1",{id:"_371-两整数之和",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_371-两整数之和","aria-hidden":"true"},"#"),n(" 371. 两整数之和")],-1),b=e("code",null,"位运算",-1),k=e("code",null,"数学",-1),_={href:"https://leetcode.cn/problems/sum-of-two-integers",target:"_blank",rel:"noopener noreferrer"},g=e("code",null,"力扣",-1),f={href:"https://leetcode.com/problems/sum-of-two-integers",target:"_blank",rel:"noopener noreferrer"},v=e("code",null,"LeetCode",-1),x=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given two integers <code>a</code> and <code>b</code>, return <em>the sum of the two integers without using the operators</em> <code>+</code> <em>and</em> <code>-</code>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: a = 1, b = 2</p><p>Output: 3</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: a = 2, b = 3</p><p>Output: 5</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>-1000 &lt;= a, b &lt;= 1000</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你两个整数 <code>a</code> 和 <code>b</code> ，<strong>不使用</strong> 运算符 <code>+</code> 和 <code>-</code> ​​​​​​​，计算并返回两整数之和。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> a = 1, b = 2</p><p><strong>输出：</strong> 3</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> a = 2, b = 3</p><p><strong>输出：</strong> 5</p></blockquote><p><strong>提示：</strong></p><ul><li><code>-1000 &lt;= a, b &lt;= 1000</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>可以利用二进制的性质：</p><ul><li><strong>异或运算 <code>a ^ b</code></strong>：相当于不考虑进位的二进制加法。 <ul><li>例如：<code>5 ^ 3 = 6</code>，对应二进制 <code>0101 ^ 0011 = 0110</code>。</li></ul></li><li><strong>与运算 <code>a &amp; b</code></strong>：用于计算进位，只有两位都为 <code>1</code> 时产生进位。 <ul><li>例如：<code>5 &amp; 3 = 1</code>，对应二进制 <code>0101 &amp; 0011 = 0001</code>。</li></ul></li><li><strong>进位的左移 <code>c &lt;&lt; 1</code></strong>：将进位信息左移一位，模拟加法中的进位。</li></ul><ol><li>初始时 <code>a</code> 和 <code>b</code> 为两个加数。</li><li>当 <code>b == 0</code> 时，说明不再有进位产生，此时 <code>a</code> 即为结果。</li><li>否则，将 <code>c = a &amp; b</code> 计算出进位，将 <code>a = a ^ b</code> 更新为未进位加法的结果。</li><li>将 <code>b = c &lt;&lt; 1</code> 更新为进位信息，继续迭代直至 <code>b == 0</code>。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(1)</code>，最多进行 32 次位操作。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，不使用额外的空间。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">a</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">b</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">getSum</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> c<span class="token punctuation">;</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>b <span class="token operator">!==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		c <span class="token operator">=</span> a <span class="token operator">&amp;</span> b<span class="token punctuation">;</span>
		a <span class="token operator">=</span> a <span class="token operator">^</span> b<span class="token punctuation">;</span>
		b <span class="token operator">=</span> c <span class="token operator">&lt;&lt;</span> <span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> a<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,25),y=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"center"}},"题号"),e("th",{style:{"text-align":"left"}},"标题"),e("th",{style:{"text-align":"center"}},"题解"),e("th",{style:{"text-align":"left"}},"标签"),e("th",{style:{"text-align":"center"}},"难度"),e("th",{style:{"text-align":"center"}},"力扣")])],-1),w=e("td",{style:{"text-align":"center"}},"2",-1),q=e("td",{style:{"text-align":"left"}},"两数相加",-1),C={style:{"text-align":"center"}},E={style:{"text-align":"left"}},L=e("code",null,"递归",-1),N=e("code",null,"链表",-1),V=e("code",null,"数学",-1),I=e("td",{style:{"text-align":"center"}},"🟠",-1),O={style:{"text-align":"center"}},j={href:"https://leetcode.cn/problems/add-two-numbers",target:"_blank",rel:"noopener noreferrer"},B={href:"https://leetcode.com/problems/add-two-numbers",target:"_blank",rel:"noopener noreferrer"};function R(S,G){const c=l("font"),a=l("RouterLink"),o=l("ExternalLinkIcon");return d(),p("div",null,[m,e("p",null,[n("🟠 "),t(c,{color:"#ffb800"},{default:s(()=>[n("Medium")]),_:1}),n("  🔖  "),t(a,{to:"/tag/bit-manipulation.html"},{default:s(()=>[b]),_:1}),n(),t(a,{to:"/tag/math.html"},{default:s(()=>[k]),_:1}),n("  🔗 "),e("a",_,[g,t(o)]),n(),e("a",f,[v,t(o)])]),x,i(" prettier-ignore "),e("table",null,[y,e("tbody",null,[e("tr",null,[w,q,e("td",C,[t(a,{to:"/problem/0002.html"},{default:s(()=>[n("[✓]")]),_:1})]),e("td",E,[t(a,{to:"/tag/recursion.html"},{default:s(()=>[L]),_:1}),n(),t(a,{to:"/tag/linked-list.html"},{default:s(()=>[N]),_:1}),n(),t(a,{to:"/tag/math.html"},{default:s(()=>[V]),_:1})]),I,e("td",O,[e("a",j,[n("🀄️"),t(o)]),n(),e("a",B,[n("🔗"),t(o)])])])])])])}const T=r(h,[["render",R],["__file","0371.html.vue"]]);export{T as default};
