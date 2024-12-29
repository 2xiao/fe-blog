import{_ as l,r as p,o as i,c as u,a as n,b as s,d as t,w as a,f as r,e as d}from"./app-r0ql_Osa.js";const k={},h=n("h1",{id:"_973-最接近原点的-k-个点",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_973-最接近原点的-k-个点","aria-hidden":"true"},"#"),s(" 973. 最接近原点的 K 个点")],-1),_=n("code",null,"几何",-1),m=n("code",null,"数组",-1),g=n("code",null,"数学",-1),b=n("code",null,"分治",-1),f=n("code",null,"快速选择",-1),v=n("code",null,"排序",-1),y=n("code",null,"堆（优先队列）",-1),x={href:"https://leetcode.cn/problems/k-closest-points-to-origin",target:"_blank",rel:"noopener noreferrer"},w=n("code",null,"力扣",-1),q={href:"https://leetcode.com/problems/k-closest-points-to-origin",target:"_blank",rel:"noopener noreferrer"},K=n("code",null,"LeetCode",-1),E=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an array of <code>points</code> where <code>points[i] = [xi, yi]</code> represents a point on the <strong>X-Y</strong> plane and an integer <code>k</code>, return the <code>k</code> closest points to the origin <code>(0, 0)</code>.</p><p>The distance between two points on the <strong>X-Y</strong> plane is the Euclidean distance (i.e., <code>√(x1 - x2)^2 + (y1 - y2)^2</code>).</p><p>You may return the answer in <strong>any order</strong>. The answer is <strong>guaranteed</strong> to be <strong>unique</strong> (except for the order that it is in).</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/03/03/closestplane1.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: points = [[1,3],[-2,2]], k = 1</p><p>Output: [[-2,2]]</p><p>Explanation:</p><p>The distance between (1, 3) and the origin is sqrt(10).</p><p>The distance between (-2, 2) and the origin is sqrt(8).</p><p>Since sqrt(8) &lt; sqrt(10), (-2, 2) is closer to the origin.</p><p>We only want the closest k = 1 points from the origin, so the answer is just [[-2,2]].</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: points = [[3,3],[5,-1],[-2,4]], k = 2</p><p>Output: [[3,3],[-2,4]]</p><p>Explanation: The answer [[-2,4],[3,3]] would also be accepted.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= k &lt;= points.length &lt;= 10^4</code></li><li><code>-10^4 &lt;= xi, yi &lt;= 10^4</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个数组 <code>points</code> ，其中 <code>points[i] = [xi, yi]</code> 表示 <strong>X-Y</strong> 平面上的一个点，并且是一个整数 <code>k</code> ，返回离原点 <code>(0,0)</code> 最近的 <code>k</code> 个点。</p><p>这里，平面上两点之间的距离是 欧几里德距离（ <code>√(x1 - x2)2 + (y1 - y2)2</code> ）。</p><p>你可以按 <strong>任何顺序</strong> 返回答案。除了点坐标的顺序之外，答案 <strong>确保</strong> 是 <strong>唯一</strong> 的。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>这道题是 Top K 问题的变种，求的是最小的 <code>K</code> 个数，可以用大小为 <code>K</code> 的大顶堆来解决。</p><ol><li>遍历题目提供的 <code>points</code>，求出每个点到原点的距离 <code>dist</code>；</li><li>将点和距离 <code>[point, dist]</code> 添加到大顶堆中，拿 <code>dist</code> 与堆顶的元素对比: <ul><li>如果比堆顶元素小，就把堆顶元素删除，并且将这个元素插入到堆中；</li><li>如果比堆顶元素大，则不做处理；</li></ul></li><li>遍历完之后，返回大顶堆中的 <code>K</code> 个点。</li></ol><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">points</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">k</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">kClosest</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">points<span class="token punctuation">,</span> k</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> heap <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> <span class="token function-variable function">add</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">[</span>point<span class="token punctuation">,</span> dist<span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>heap<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> k<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			heap<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">[</span>point<span class="token punctuation">,</span> dist<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token function">heapifyUp</span><span class="token punctuation">(</span>heap<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>heap<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">&gt;</span> dist<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			heap<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>point<span class="token punctuation">,</span> dist<span class="token punctuation">]</span><span class="token punctuation">;</span>
			<span class="token function">heapifyDown</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> <span class="token function-variable function">heapifyUp</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">i</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">while</span> <span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">const</span> parent <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>heap<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">&gt;</span> heap<span class="token punctuation">[</span>parent<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token punctuation">[</span>heap<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> heap<span class="token punctuation">[</span>parent<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>heap<span class="token punctuation">[</span>parent<span class="token punctuation">]</span><span class="token punctuation">,</span> heap<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
				i <span class="token operator">=</span> parent<span class="token punctuation">;</span>
			<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
				<span class="token keyword">break</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> <span class="token function-variable function">heapifyDown</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">i</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> left <span class="token operator">=</span> i <span class="token operator">*</span> <span class="token number">2</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
		<span class="token keyword">const</span> right <span class="token operator">=</span> i <span class="token operator">*</span> <span class="token number">2</span> <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">;</span>
		<span class="token keyword">let</span> max <span class="token operator">=</span> i<span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;</span> heap<span class="token punctuation">.</span>length <span class="token operator">&amp;&amp;</span> heap<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">&gt;</span> heap<span class="token punctuation">[</span>max<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			max <span class="token operator">=</span> left<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>right <span class="token operator">&lt;</span> heap<span class="token punctuation">.</span>length <span class="token operator">&amp;&amp;</span> heap<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">&gt;</span> heap<span class="token punctuation">[</span>max<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			max <span class="token operator">=</span> right<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>max <span class="token operator">!==</span> i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token punctuation">[</span>heap<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> heap<span class="token punctuation">[</span>max<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>heap<span class="token punctuation">[</span>max<span class="token punctuation">]</span><span class="token punctuation">,</span> heap<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
			<span class="token function">heapifyDown</span><span class="token punctuation">(</span>max<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> point <span class="token keyword">of</span> points<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> dist <span class="token operator">=</span> point<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">*</span> point<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">+</span> point<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">*</span> point<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">[</span>point<span class="token punctuation">,</span> dist<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> heap<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> item<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,21),T=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),C=n("td",{style:{"text-align":"center"}},"215",-1),j=n("td",{style:{"text-align":"left"}},"数组中的第K个最大元素",-1),L={style:{"text-align":"center"}},N={style:{"text-align":"left"}},V=n("code",null,"数组",-1),Y=n("code",null,"分治",-1),I=n("code",null,"快速选择",-1),X=n("code",null,"2+",-1),B=n("td",{style:{"text-align":"center"}},"🟠",-1),D={style:{"text-align":"center"}},M={href:"https://leetcode.cn/problems/kth-largest-element-in-an-array",target:"_blank",rel:"noopener noreferrer"},O={href:"https://leetcode.com/problems/kth-largest-element-in-an-array",target:"_blank",rel:"noopener noreferrer"},R=n("td",{style:{"text-align":"center"}},"347",-1),S=n("td",{style:{"text-align":"left"}},"前 K 个高频元素",-1),U={style:{"text-align":"center"}},z={style:{"text-align":"left"}},G=n("code",null,"数组",-1),W=n("code",null,"哈希表",-1),A=n("code",null,"分治",-1),F=n("code",null,"5+",-1),H=n("td",{style:{"text-align":"center"}},"🟠",-1),J={style:{"text-align":"center"}},P={href:"https://leetcode.cn/problems/top-k-frequent-elements",target:"_blank",rel:"noopener noreferrer"},Q={href:"https://leetcode.com/problems/top-k-frequent-elements",target:"_blank",rel:"noopener noreferrer"},Z=n("td",{style:{"text-align":"center"}},"692",-1),$=n("td",{style:{"text-align":"left"}},"前K个高频单词",-1),nn=n("td",{style:{"text-align":"center"}},null,-1),sn={style:{"text-align":"left"}},tn=n("code",null,"字典树",-1),an=n("code",null,"哈希表",-1),en=n("code",null,"字符串",-1),on=n("code",null,"4+",-1),pn=n("td",{style:{"text-align":"center"}},"🟠",-1),cn={style:{"text-align":"center"}},ln={href:"https://leetcode.cn/problems/top-k-frequent-words",target:"_blank",rel:"noopener noreferrer"},un={href:"https://leetcode.com/problems/top-k-frequent-words",target:"_blank",rel:"noopener noreferrer"},rn=n("td",{style:{"text-align":"center"}},"1779",-1),dn=n("td",{style:{"text-align":"left"}},"找到最近的有相同 X 或 Y 坐标的点",-1),kn={style:{"text-align":"center"}},hn={style:{"text-align":"left"}},_n=n("code",null,"数组",-1),mn=n("td",{style:{"text-align":"center"}},"🟢",-1),gn={style:{"text-align":"center"}},bn={href:"https://leetcode.cn/problems/find-nearest-point-that-has-the-same-x-or-y-coordinate",target:"_blank",rel:"noopener noreferrer"},fn={href:"https://leetcode.com/problems/find-nearest-point-that-has-the-same-x-or-y-coordinate",target:"_blank",rel:"noopener noreferrer"},vn=n("td",{style:{"text-align":"center"}},"3111",-1),yn=n("td",{style:{"text-align":"left"}},"覆盖所有点的最少矩形数目",-1),xn=n("td",{style:{"text-align":"center"}},null,-1),wn={style:{"text-align":"left"}},qn=n("code",null,"贪心",-1),Kn=n("code",null,"数组",-1),En=n("code",null,"排序",-1),Tn=n("td",{style:{"text-align":"center"}},"🟠",-1),Cn={style:{"text-align":"center"}},jn={href:"https://leetcode.cn/problems/minimum-rectangles-to-cover-points",target:"_blank",rel:"noopener noreferrer"},Ln={href:"https://leetcode.com/problems/minimum-rectangles-to-cover-points",target:"_blank",rel:"noopener noreferrer"},Nn=n("td",{style:{"text-align":"center"}},"3275",-1),Vn=n("td",{style:{"text-align":"left"}},"第 K 近障碍物查询",-1),Yn=n("td",{style:{"text-align":"center"}},null,-1),In={style:{"text-align":"left"}},Xn=n("code",null,"数组",-1),Bn=n("code",null,"堆（优先队列）",-1),Dn=n("td",{style:{"text-align":"center"}},"🟠",-1),Mn={style:{"text-align":"center"}},On={href:"https://leetcode.cn/problems/k-th-nearest-obstacle-queries",target:"_blank",rel:"noopener noreferrer"},Rn={href:"https://leetcode.com/problems/k-th-nearest-obstacle-queries",target:"_blank",rel:"noopener noreferrer"};function Sn(Un,zn){const c=p("font"),e=p("RouterLink"),o=p("ExternalLinkIcon");return i(),u("div",null,[h,n("p",null,[s("🟠 "),t(c,{color:"#ffb800"},{default:a(()=>[s("Medium")]),_:1}),s("  🔖  "),t(e,{to:"/tag/geometry.html"},{default:a(()=>[_]),_:1}),s(),t(e,{to:"/tag/array.html"},{default:a(()=>[m]),_:1}),s(),t(e,{to:"/tag/math.html"},{default:a(()=>[g]),_:1}),s(),t(e,{to:"/tag/divide-and-conquer.html"},{default:a(()=>[b]),_:1}),s(),t(e,{to:"/tag/quickselect.html"},{default:a(()=>[f]),_:1}),s(),t(e,{to:"/tag/sorting.html"},{default:a(()=>[v]),_:1}),s(),t(e,{to:"/tag/heap-priority-queue.html"},{default:a(()=>[y]),_:1}),s("  🔗 "),n("a",x,[w,t(o)]),s(),n("a",q,[K,t(o)])]),E,r(" prettier-ignore "),n("table",null,[T,n("tbody",null,[n("tr",null,[C,j,n("td",L,[t(e,{to:"/problem/0215.html"},{default:a(()=>[s("[✓]")]),_:1})]),n("td",N,[t(e,{to:"/tag/array.html"},{default:a(()=>[V]),_:1}),s(),t(e,{to:"/tag/divide-and-conquer.html"},{default:a(()=>[Y]),_:1}),s(),t(e,{to:"/tag/quickselect.html"},{default:a(()=>[I]),_:1}),s(),X]),B,n("td",D,[n("a",M,[s("🀄️"),t(o)]),s(),n("a",O,[s("🔗"),t(o)])])]),n("tr",null,[R,S,n("td",U,[t(e,{to:"/problem/0347.html"},{default:a(()=>[s("[✓]")]),_:1})]),n("td",z,[t(e,{to:"/tag/array.html"},{default:a(()=>[G]),_:1}),s(),t(e,{to:"/tag/hash-table.html"},{default:a(()=>[W]),_:1}),s(),t(e,{to:"/tag/divide-and-conquer.html"},{default:a(()=>[A]),_:1}),s(),F]),H,n("td",J,[n("a",P,[s("🀄️"),t(o)]),s(),n("a",Q,[s("🔗"),t(o)])])]),n("tr",null,[Z,$,nn,n("td",sn,[t(e,{to:"/tag/trie.html"},{default:a(()=>[tn]),_:1}),s(),t(e,{to:"/tag/hash-table.html"},{default:a(()=>[an]),_:1}),s(),t(e,{to:"/tag/string.html"},{default:a(()=>[en]),_:1}),s(),on]),pn,n("td",cn,[n("a",ln,[s("🀄️"),t(o)]),s(),n("a",un,[s("🔗"),t(o)])])]),n("tr",null,[rn,dn,n("td",kn,[t(e,{to:"/problem/1779.html"},{default:a(()=>[s("[✓]")]),_:1})]),n("td",hn,[t(e,{to:"/tag/array.html"},{default:a(()=>[_n]),_:1})]),mn,n("td",gn,[n("a",bn,[s("🀄️"),t(o)]),s(),n("a",fn,[s("🔗"),t(o)])])]),n("tr",null,[vn,yn,xn,n("td",wn,[t(e,{to:"/tag/greedy.html"},{default:a(()=>[qn]),_:1}),s(),t(e,{to:"/tag/array.html"},{default:a(()=>[Kn]),_:1}),s(),t(e,{to:"/tag/sorting.html"},{default:a(()=>[En]),_:1})]),Tn,n("td",Cn,[n("a",jn,[s("🀄️"),t(o)]),s(),n("a",Ln,[s("🔗"),t(o)])])]),n("tr",null,[Nn,Vn,Yn,n("td",In,[t(e,{to:"/tag/array.html"},{default:a(()=>[Xn]),_:1}),s(),t(e,{to:"/tag/heap-priority-queue.html"},{default:a(()=>[Bn]),_:1})]),Dn,n("td",Mn,[n("a",On,[s("🀄️"),t(o)]),s(),n("a",Rn,[s("🔗"),t(o)])])])])])])}const Wn=l(k,[["render",Sn],["__file","0973.html.vue"]]);export{Wn as default};
