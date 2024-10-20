import{_ as c,r as p,o as i,c as r,a as n,d as s,b as a,w as t,f as u,e as d}from"./app-Fucr7yuT.js";const k={},m={id:"_118-杨辉三角",tabindex:"-1"},h=n("a",{class:"header-anchor",href:"#_118-杨辉三角","aria-hidden":"true"},"#",-1),v={href:"https://leetcode.com/problems/pascals-triangle",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"数组",-1),g=n("code",null,"动态规划",-1),_={href:"https://leetcode.com/problems/pascals-triangle",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"LeetCode",-1),x=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an integer <code>numRows</code>, return the first numRows of <strong>Pascal &#39;s triangle</strong>.</p><p>In <strong>Pascal &#39;s triangle</strong>, each number is the sum of the two numbers directly above it as shown:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>     1
    1 1
   1 2 1
  1 3 3 1
 1 4 6 4 1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Example 1:</strong></p><blockquote><p>Input: numRows = 5</p><p>Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: numRows = 1</p><p>Output: [[1]]</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= numRows &lt;= 30</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个非负整数 *<code>numRows</code>，*生成「杨辉三角」的前 *<code>numRows</code> *行。</p><p>在「杨辉三角」中，每个数是它左上方和右上方的数的和。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>     1
    1 1
   1 2 1
  1 3 3 1
 1 4 6 4 1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 1:</strong></p><blockquote><p><strong>输入:</strong> numRows = 5</p><p><strong>输出:</strong> [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]</p></blockquote><p><strong>示例 2:</strong></p><blockquote><p><strong>输入:</strong> numRows = 1</p><p><strong>输出:</strong> [[1]]</p></blockquote><p><strong>提示:</strong></p><ul><li><code>1 &lt;= numRows &lt;= 30</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><strong>构建基础结构</strong>：初始化一个大小为 <code>n</code> 的数组，来存储每一行的元素。</li><li><strong>逐行生成</strong>：第 <code>i</code> 行的第 <code>j</code> 个元素为上一行的第 <code>j-1</code> 和第 <code>j</code> 个元素之和，除了第一个和最后一个元素是 <code>1</code>。</li><li><strong>返回结果</strong>：构造完所有的行后，将完整的数组返回。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n^2)</code>，其中 <code>n</code> 是行数。因为需要遍历每一行并更新每个元素的值。</li><li><strong>空间复杂度</strong>：<code>O(n^2)</code>，用于存储整个 Pascal 三角形。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">numRows</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">generate</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">numRows</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

	<span class="token comment">// 生成每一行</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> numRows<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 每一行的长度为i+1，并初始化为1</span>
		<span class="token keyword">let</span> row <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token comment">// 更新除第一个和最后一个元素之外的元素</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> i<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			row<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> res<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+</span> res<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>

		<span class="token comment">// 将当前行加入结果</span>
		res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>row<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,27),w=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"left"}},"难度")])],-1),y=n("td",{style:{"text-align":"center"}},"119",-1),R={style:{"text-align":"left"}},j={href:"https://leetcode.com/problems/pascals-triangle-ii",target:"_blank",rel:"noopener noreferrer"},q=n("td",{style:{"text-align":"center"}},null,-1),E={style:{"text-align":"left"}},I=n("code",null,"数组",-1),C=n("code",null,"动态规划",-1),L={style:{"text-align":"left"}};function N(V,O){const o=p("ExternalLinkIcon"),l=p("font"),e=p("RouterLink");return i(),r("div",null,[n("h1",m,[h,s(),n("a",v,[s("118. 杨辉三角"),a(o)])]),n("p",null,[s("🟢 "),a(l,{color:"#15bd66"},{default:t(()=>[s("Easy")]),_:1}),s("  🔖  "),a(e,{to:"/tag/array.html"},{default:t(()=>[b]),_:1}),s(),a(e,{to:"/tag/dynamic-programming.html"},{default:t(()=>[g]),_:1}),s("  🔗 "),n("a",_,[f,a(o)])]),x,u(" prettier-ignore "),n("table",null,[w,n("tbody",null,[n("tr",null,[y,n("td",R,[n("a",j,[s("杨辉三角 II"),a(o)])]),q,n("td",E,[a(e,{to:"/tag/array.html"},{default:t(()=>[I]),_:1}),s(),a(e,{to:"/tag/dynamic-programming.html"},{default:t(()=>[C]),_:1})]),n("td",L,[a(l,{color:"#15bd66"},{default:t(()=>[s("Easy")]),_:1})])])])])])}const P=c(k,[["render",N],["__file","0118.html.vue"]]);export{P as default};
