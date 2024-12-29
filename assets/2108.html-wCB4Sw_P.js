import{_ as c,r,o as p,c as i,a as n,b as t,d as s,w as a,f as d,e as u}from"./app-r0ql_Osa.js";const k={},h=n("h1",{id:"_2108-找出数组中的第一个回文字符串",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2108-找出数组中的第一个回文字符串","aria-hidden":"true"},"#"),t(" 2108. 找出数组中的第一个回文字符串")],-1),g=n("code",null,"数组",-1),m=n("code",null,"双指针",-1),q=n("code",null,"字符串",-1),_={href:"https://leetcode.cn/problems/find-first-palindromic-string-in-the-array",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"力扣",-1),b={href:"https://leetcode.com/problems/find-first-palindromic-string-in-the-array",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"LeetCode",-1),w=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an array of strings <code>words</code>, return <em>the first <strong>palindromic</strong> string in the array</em>. If there is no such string, return <em>an <strong>empty string</strong></em> <code>&quot;&quot;</code>.</p><p>A string is <strong>palindromic</strong> if it reads the same forward and backward.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: words = [&quot;abc&quot;,&quot;car&quot;,&quot;ada&quot;,&quot;racecar&quot;,&quot;cool&quot;]</p><p>Output: &quot;ada&quot;</p><p>Explanation: The first string that is palindromic is &quot;ada&quot;.</p><p>Note that &quot;racecar&quot; is also palindromic, but it is not the first.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: words = [&quot;notapalindrome&quot;,&quot;racecar&quot;]</p><p>Output: &quot;racecar&quot;</p><p>Explanation: The first and only string that is palindromic is &quot;racecar&quot;.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: words = [&quot;def&quot;,&quot;ghi&quot;]</p><p>Output: &quot;&quot;</p><p>Explanation: There are no palindromic strings, so the empty string is returned.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= words.length &lt;= 100</code></li><li><code>1 &lt;= words[i].length &lt;= 100</code></li><li><code>words[i]</code> consists only of lowercase English letters.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个字符串数组 <code>words</code> ，找出并返回数组中的 <strong>第一个回文字符串</strong> 。如果不存在满足要求的字符串，返回一个 <strong>空字符串</strong> <code>&quot;&quot;</code> 。</p><p><strong>回文字符串</strong> 的定义为：如果一个字符串正着读和反着读一样，那么该字符串就是一个 <strong>回文字符串</strong> 。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> words = [&quot;abc&quot;,&quot;car&quot;,&quot;ada&quot;,&quot;racecar&quot;,&quot;cool&quot;]</p><p><strong>输出：</strong> &quot;ada&quot;</p><p><strong>解释：</strong> 第一个回文字符串是 &quot;ada&quot; 。</p><p>注意，&quot;racecar&quot; 也是回文字符串，但它不是第一个。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> words = [&quot;notapalindrome&quot;,&quot;racecar&quot;]</p><p><strong>输出：</strong> &quot;racecar&quot;</p><p><strong>解释：</strong> 第一个也是唯一一个回文字符串是 &quot;racecar&quot; 。</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> words = [&quot;def&quot;,&quot;ghi&quot;]</p><p><strong>输出：</strong> &quot;&quot;</p><p><strong>解释：</strong> 不存在回文字符串，所以返回一个空字符串。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= words.length &lt;= 100</code></li><li><code>1 &lt;= words[i].length &lt;= 100</code></li><li><code>words[i]</code> 仅由小写英文字母组成</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>定义回文检查函数 <code>isPalindrome</code></strong>:</p><ul><li>回文字符串是指正序和反序相同的字符串。</li><li>使用双指针方法从两端向中间检查： <ul><li>左指针从字符串开头移动 (<code>left</code>)。</li><li>右指针从字符串末尾移动 (<code>right</code>)。</li><li>如果对应位置的字符不相等，则不是回文，返回 <code>false</code>。</li><li>如果指针相遇或交错，说明是回文，返回 <code>true</code>。</li></ul></li></ul></li><li><p><strong>遍历 <code>words</code> 数组</strong>:</p><ul><li>对每个字符串调用 <code>isPalindrome</code> 检查是否是回文。</li><li>如果找到回文字符串，立即返回该字符串。</li></ul></li><li><p><strong>返回结果</strong>:</p><ul><li>如果遍历完成后没有找到回文字符串，返回空字符串 <code>&#39;&#39;</code>。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n * m)</code>，其中 <code>words</code> 的长度为 <code>n</code>，每个字符串的平均长度为 <code>m</code>。 <ul><li>对每个字符串调用 <code>isPalindrome</code>，时间复杂度为 <code>O(m)</code>。</li><li>遍历所有字符串，最坏情况下需要 <code>O(n * m)</code>。</li></ul></li><li><strong>空间复杂度</strong>：<code>O(1)</code>，使用了常数额外空间。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">words</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">firstPalindrome</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">words</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> <span class="token function-variable function">isPalindrome</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">str</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
		<span class="token keyword">let</span> right <span class="token operator">=</span> str<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
		<span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>str<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">!=</span> str<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
			left<span class="token operator">++</span><span class="token punctuation">;</span>
			right<span class="token operator">--</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> word <span class="token keyword">of</span> words<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isPalindrome</span><span class="token punctuation">(</span>word<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> word<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,29),y=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),x=n("td",{style:{"text-align":"center"}},"125",-1),E=n("td",{style:{"text-align":"left"}},"验证回文串",-1),O={style:{"text-align":"center"}},I={style:{"text-align":"left"}},N=n("code",null,"双指针",-1),P=n("code",null,"字符串",-1),C=n("td",{style:{"text-align":"center"}},"🟢",-1),L={style:{"text-align":"center"}},V={href:"https://leetcode.cn/problems/valid-palindrome",target:"_blank",rel:"noopener noreferrer"},T={href:"https://leetcode.com/problems/valid-palindrome",target:"_blank",rel:"noopener noreferrer"};function j(B,R){const l=r("font"),o=r("RouterLink"),e=r("ExternalLinkIcon");return p(),i("div",null,[h,n("p",null,[t("🟢 "),s(l,{color:"#15bd66"},{default:a(()=>[t("Easy")]),_:1}),t("  🔖  "),s(o,{to:"/tag/array.html"},{default:a(()=>[g]),_:1}),t(),s(o,{to:"/tag/two-pointers.html"},{default:a(()=>[m]),_:1}),t(),s(o,{to:"/tag/string.html"},{default:a(()=>[q]),_:1}),t("  🔗 "),n("a",_,[f,s(e)]),t(),n("a",b,[v,s(e)])]),w,d(" prettier-ignore "),n("table",null,[y,n("tbody",null,[n("tr",null,[x,E,n("td",O,[s(o,{to:"/problem/0125.html"},{default:a(()=>[t("[✓]")]),_:1})]),n("td",I,[s(o,{to:"/tag/two-pointers.html"},{default:a(()=>[N]),_:1}),t(),s(o,{to:"/tag/string.html"},{default:a(()=>[P]),_:1})]),C,n("td",L,[n("a",V,[t("🀄️"),s(e)]),t(),n("a",T,[t("🔗"),s(e)])])])])])])}const G=c(k,[["render",j],["__file","2108.html.vue"]]);export{G as default};
