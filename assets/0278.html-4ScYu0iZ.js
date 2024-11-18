import{_ as r,r as l,o as p,c as i,a as n,b as e,d as t,w as s,f as d,e as u}from"./app-9Xw5divW.js";const h={},k=n("h1",{id:"_278-第一个错误的版本",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_278-第一个错误的版本","aria-hidden":"true"},"#"),e(" 278. 第一个错误的版本")],-1),_=n("code",null,"二分查找",-1),m=n("code",null,"交互",-1),f={href:"https://leetcode.cn/problems/first-bad-version",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"力扣",-1),v={href:"https://leetcode.com/problems/first-bad-version",target:"_blank",rel:"noopener noreferrer"},g=n("code",null,"LeetCode",-1),y=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.</p><p>Suppose you have <code>n</code> versions <code>[1, 2, ..., n]</code> and you want to find out the first bad one, which causes all the following ones to be bad.</p><p>You are given an API <code>bool isBadVersion(version)</code> which returns whether <code>version</code> is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: n = 5, bad = 4</p><p>Output: 4</p><p>Explanation:</p><p>call isBadVersion(3) -&gt; false</p><p>call isBadVersion(5) -&gt; true</p><p>call isBadVersion(4) -&gt; true</p><p>Then 4 is the first bad version.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: n = 1, bad = 1</p><p>Output: 1</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= bad &lt;= n &lt;= 2^31 - 1</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>你是产品经理，目前正在带领一个团队开发新的产品。不幸的是，你的产品的最新版本没有通过质量检测。由于每个版本都是基于之前的版本开发的，所以错误的版本之后的所有版本都是错的。</p><p>假设你有 <code>n</code> 个版本 <code>[1, 2, ..., n]</code>，你想找出导致之后所有版本出错的第一个错误的版本。</p><p>你可以通过调用 <code>bool isBadVersion(version)</code> 接口来判断版本号 <code>version</code> 是否在单元测试中出错。实现一个函数来查找第一个错误的版本。你应该尽量减少对调用 API 的次数。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>使用二分查找。</p><p>将左右边界分别初始化为 <code>1</code> 和 <code>n</code>，其中 <code>n</code> 是给定的版本数量。设定左右边界之后，每次都依据左右边界找到其中间的版本，检查其是否为正确版本。如果该版本为正确版本，那么第一个错误的版本必然位于该版本的右侧，缩紧左边界；否则第一个错误的版本必然位于该版本及该版本的左侧，缩紧右边界。</p><p>这样每判断一次都可以缩紧一次边界，而每次缩紧时两边界距离将变为原来的一半，因此至多只需要缩紧 <code>O(log ⁡n)</code> 次。</p><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">function</span><span class="token punctuation">}</span></span> isBadVersion()
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">function</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">solution</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">isBadVersion</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token doc-comment comment">/**
	 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>integer<span class="token punctuation">}</span></span> <span class="token parameter">n</span> Total versions
	 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>integer<span class="token punctuation">}</span></span> The first bad version
	 */</span>
	<span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
		<span class="token keyword">let</span> right <span class="token operator">=</span> n<span class="token punctuation">;</span>
		<span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;=</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">const</span> mid <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span>left <span class="token operator">+</span> right<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isBadVersion</span><span class="token punctuation">(</span>mid<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				right <span class="token operator">=</span> mid <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
				left <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">return</span> left<span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,21),x=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),w=n("td",{style:{"text-align":"center"}},"34",-1),V=n("td",{style:{"text-align":"left"}},"在排序数组中查找元素的第一个和最后一个位置",-1),B={style:{"text-align":"center"}},I={style:{"text-align":"left"}},E=n("code",null,"数组",-1),q=n("code",null,"二分查找",-1),C=n("td",{style:{"text-align":"center"}},"🟠",-1),L={style:{"text-align":"center"}},N={href:"https://leetcode.cn/problems/find-first-and-last-position-of-element-in-sorted-array",target:"_blank",rel:"noopener noreferrer"},T={href:"https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array",target:"_blank",rel:"noopener noreferrer"},j=n("td",{style:{"text-align":"center"}},"35",-1),A=n("td",{style:{"text-align":"left"}},"搜索插入位置",-1),O={style:{"text-align":"center"}},P={style:{"text-align":"left"}},S=n("code",null,"数组",-1),Y=n("code",null,"二分查找",-1),R=n("td",{style:{"text-align":"center"}},"🟢",-1),z={style:{"text-align":"center"}},M={href:"https://leetcode.cn/problems/search-insert-position",target:"_blank",rel:"noopener noreferrer"},U={href:"https://leetcode.com/problems/search-insert-position",target:"_blank",rel:"noopener noreferrer"},D=n("td",{style:{"text-align":"center"}},"374",-1),F=n("td",{style:{"text-align":"left"}},"猜数字大小",-1),G={style:{"text-align":"center"}},H={style:{"text-align":"left"}},J=n("code",null,"二分查找",-1),K=n("code",null,"交互",-1),Q=n("td",{style:{"text-align":"center"}},"🟢",-1),W={style:{"text-align":"center"}},X={href:"https://leetcode.cn/problems/guess-number-higher-or-lower",target:"_blank",rel:"noopener noreferrer"},Z={href:"https://leetcode.com/problems/guess-number-higher-or-lower",target:"_blank",rel:"noopener noreferrer"};function $(nn,en){const c=l("font"),a=l("RouterLink"),o=l("ExternalLinkIcon");return p(),i("div",null,[k,n("p",null,[e("🟢 "),t(c,{color:"#15bd66"},{default:s(()=>[e("Easy")]),_:1}),e("  🔖  "),t(a,{to:"/tag/binary-search.html"},{default:s(()=>[_]),_:1}),e(),t(a,{to:"/tag/interactive.html"},{default:s(()=>[m]),_:1}),e("  🔗 "),n("a",f,[b,t(o)]),e(),n("a",v,[g,t(o)])]),y,d(" prettier-ignore "),n("table",null,[x,n("tbody",null,[n("tr",null,[w,V,n("td",B,[t(a,{to:"/problem/0034.html"},{default:s(()=>[e("[✓]")]),_:1})]),n("td",I,[t(a,{to:"/tag/array.html"},{default:s(()=>[E]),_:1}),e(),t(a,{to:"/tag/binary-search.html"},{default:s(()=>[q]),_:1})]),C,n("td",L,[n("a",N,[e("🀄️"),t(o)]),e(),n("a",T,[e("🔗"),t(o)])])]),n("tr",null,[j,A,n("td",O,[t(a,{to:"/problem/0035.html"},{default:s(()=>[e("[✓]")]),_:1})]),n("td",P,[t(a,{to:"/tag/array.html"},{default:s(()=>[S]),_:1}),e(),t(a,{to:"/tag/binary-search.html"},{default:s(()=>[Y]),_:1})]),R,n("td",z,[n("a",M,[e("🀄️"),t(o)]),e(),n("a",U,[e("🔗"),t(o)])])]),n("tr",null,[D,F,n("td",G,[t(a,{to:"/problem/0374.html"},{default:s(()=>[e("[✓]")]),_:1})]),n("td",H,[t(a,{to:"/tag/binary-search.html"},{default:s(()=>[J]),_:1}),e(),t(a,{to:"/tag/interactive.html"},{default:s(()=>[K]),_:1})]),Q,n("td",W,[n("a",X,[e("🀄️"),t(o)]),e(),n("a",Z,[e("🔗"),t(o)])])])])])])}const sn=r(h,[["render",$],["__file","0278.html.vue"]]);export{sn as default};
