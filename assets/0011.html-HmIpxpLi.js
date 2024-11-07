import{_ as i,r as c,o as p,c as r,a as t,b as n,d as e,w as a,f as d,e as u}from"./app-OX-nYmHS.js";const h={},_=t("h1",{id:"_11-盛最多水的容器",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_11-盛最多水的容器","aria-hidden":"true"},"#"),n(" 11. 盛最多水的容器")],-1),k=t("code",null,"贪心",-1),m=t("code",null,"数组",-1),g=t("code",null,"双指针",-1),f={href:"https://leetcode.cn/problems/container-with-most-water",target:"_blank",rel:"noopener noreferrer"},b=t("code",null,"力扣",-1),v={href:"https://leetcode.com/problems/container-with-most-water",target:"_blank",rel:"noopener noreferrer"},x=t("code",null,"LeetCode",-1),y=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given an integer array <code>height</code> of length <code>n</code>. There are <code>n</code> vertical lines drawn such that the two endpoints of the <code>ith</code> line are <code>(i, 0)</code> and <code>(i, height[i])</code>.</p><p>Find two lines that together with the x-axis form a container, such that the container contains the most water.</p><p>Return <em>the maximum amount of water a container can store</em>.</p><p><strong>Notice</strong> that you may not slant the container.</p><p><strong>Example 1:</strong></p><figure><img src="https://s3-lc-upload.s3.amazonaws.com/uploads/2018/07/17/question_11.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: height = [1,8,6,2,5,4,8,3,7]</p><p>Output: 49</p><p>Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: height = [1,1]</p><p>Output: 1</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>n == height.length</code></li><li><code>2 &lt;= n &lt;= 10^5</code></li><li><code>0 &lt;= height[i] &lt;= 10^4</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个长度为 <code>n</code> 的整数数组 <code>height</code> 。有 <code>n</code> 条垂线，第 <code>i</code> 条线的两个端点是 <code>(i, 0)</code> 和 <code>(i, height[i])</code> 。</p><p>找出其中的两条线，使得它们与 <code>x</code> 轴共同构成的容器可以容纳最多的水。</p><p>返回容器可以储存的最大水量。</p><p>说明：你不能倾斜容器。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>这一题可以用对撞指针的思路，首尾分别 2 个指针，每次移动以后都分别判断长宽的乘积是否最大。</p><p>从示例中可以看出，如果确定好左右两端的直线，容纳的水量是由 <code>左右两端直线中较低直线的高度 * 两端直线之间的距离</code> 所决定的。所以我们应该使得 <strong>较低直线的高度尽可能的高</strong>，这样才能使盛水面积尽可能的大。</p><p>可以使用对撞指针求解，移动较低直线所在的指针位置，从而得到不同的高度和面积，最终获取其中最大的面积。具体做法如下：</p><ol><li>使用两个指针 <code>left</code>，<code>right</code>。<code>left</code> 指向数组开始位置，<code>right</code> 指向数组结束位置。</li><li>计算 <code>left</code> 和 <code>right</code> 所构成的面积值，同时维护更新最大面积值。</li><li>判断 <code>left</code> 和 <code>right</code> 的高度值大小。 <ol><li>如果 <code>left</code> 指向的直线高度比较低，则将 <code>left</code> 指针右移。</li><li>如果 <code>right</code> 指向的直线高度比较低，则将 <code>right</code> 指针左移。</li></ol></li><li>如果遇到 <code>left == right</code>，跳出循环，最后返回最大的面积。</li></ol><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">height</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">maxArea</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">height</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> right <span class="token operator">=</span> height<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> _height<span class="token punctuation">,</span> width<span class="token punctuation">;</span>
	<span class="token keyword">let</span> max <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		width <span class="token operator">=</span> right <span class="token operator">-</span> left<span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>height<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">&gt;</span> height<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			_height <span class="token operator">=</span> height<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">;</span>
			right<span class="token operator">--</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			_height <span class="token operator">=</span> height<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">;</span>
			left<span class="token operator">++</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		max <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>max<span class="token punctuation">,</span> _height <span class="token operator">*</span> width<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> max<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,25),w=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"left"}},"难度")])],-1),E=t("td",{style:{"text-align":"center"}},"42",-1),I={style:{"text-align":"left"}},N={href:"https://leetcode.com/problems/trapping-rain-water",target:"_blank",rel:"noopener noreferrer"},V={style:{"text-align":"center"}},q={style:{"text-align":"left"}},C=t("code",null,"栈",-1),L=t("code",null,"数组",-1),j=t("code",null,"双指针",-1),M=t("code",null,"2+",-1),B={style:{"text-align":"left"}},R=t("td",{style:{"text-align":"center"}},"2517",-1),T={style:{"text-align":"left"}},z={href:"https://leetcode.com/problems/maximum-tastiness-of-candy-basket",target:"_blank",rel:"noopener noreferrer"},O=t("td",{style:{"text-align":"center"}},null,-1),A={style:{"text-align":"left"}},F=t("code",null,"贪心",-1),H=t("code",null,"数组",-1),S=t("code",null,"二分查找",-1),Y=t("code",null,"1+",-1),D={style:{"text-align":"left"}},G=t("td",{style:{"text-align":"center"}},"2560",-1),J={style:{"text-align":"left"}},K={href:"https://leetcode.com/problems/house-robber-iv",target:"_blank",rel:"noopener noreferrer"},P=t("td",{style:{"text-align":"center"}},null,-1),Q={style:{"text-align":"left"}},U=t("code",null,"数组",-1),W=t("code",null,"二分查找",-1),X={style:{"text-align":"left"}};function Z($,tt){const l=c("font"),s=c("RouterLink"),o=c("ExternalLinkIcon");return p(),r("div",null,[_,t("p",null,[n("🟠 "),e(l,{color:"#ffb800"},{default:a(()=>[n("Medium")]),_:1}),n("  🔖  "),e(s,{to:"/tag/greedy.html"},{default:a(()=>[k]),_:1}),n(),e(s,{to:"/tag/array.html"},{default:a(()=>[m]),_:1}),n(),e(s,{to:"/tag/two-pointers.html"},{default:a(()=>[g]),_:1}),n("  🔗 "),t("a",f,[b,e(o)]),n(),t("a",v,[x,e(o)])]),y,d(" prettier-ignore "),t("table",null,[w,t("tbody",null,[t("tr",null,[E,t("td",I,[t("a",N,[n("接雨水"),e(o)])]),t("td",V,[e(s,{to:"/problem/0042.html"},{default:a(()=>[n("[✓]")]),_:1})]),t("td",q,[e(s,{to:"/tag/stack.html"},{default:a(()=>[C]),_:1}),n(),e(s,{to:"/tag/array.html"},{default:a(()=>[L]),_:1}),n(),e(s,{to:"/tag/two-pointers.html"},{default:a(()=>[j]),_:1}),n(),M]),t("td",B,[e(l,{color:"#ff334b"},{default:a(()=>[n("Hard")]),_:1})])]),t("tr",null,[R,t("td",T,[t("a",z,[n("礼盒的最大甜蜜度"),e(o)])]),O,t("td",A,[e(s,{to:"/tag/greedy.html"},{default:a(()=>[F]),_:1}),n(),e(s,{to:"/tag/array.html"},{default:a(()=>[H]),_:1}),n(),e(s,{to:"/tag/binary-search.html"},{default:a(()=>[S]),_:1}),n(),Y]),t("td",D,[e(l,{color:"#ffb800"},{default:a(()=>[n("Medium")]),_:1})])]),t("tr",null,[G,t("td",J,[t("a",K,[n("打家劫舍 IV"),e(o)])]),P,t("td",Q,[e(s,{to:"/tag/array.html"},{default:a(()=>[U]),_:1}),n(),e(s,{to:"/tag/binary-search.html"},{default:a(()=>[W]),_:1})]),t("td",X,[e(l,{color:"#ffb800"},{default:a(()=>[n("Medium")]),_:1})])])])])])}const et=i(h,[["render",Z],["__file","0011.html.vue"]]);export{et as default};
