import{_ as p,r as l,o as i,c as r,a as n,b as t,d as s,w as e,f as d,e as u}from"./app-BBnmDgJV.js";const k={},h=n("h1",{id:"_1497-检查数组对是否可以被-k-整除",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1497-检查数组对是否可以被-k-整除","aria-hidden":"true"},"#"),t(" 1497. 检查数组对是否可以被 k 整除")],-1),m=n("code",null,"数组",-1),_=n("code",null,"哈希表",-1),b=n("code",null,"计数",-1),f={href:"https://leetcode.cn/problems/check-if-array-pairs-are-divisible-by-k",target:"_blank",rel:"noopener noreferrer"},g=n("code",null,"力扣",-1),v={href:"https://leetcode.com/problems/check-if-array-pairs-are-divisible-by-k",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"LeetCode",-1),x=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an array of integers <code>arr</code> of even length <code>n</code> and an integer <code>k</code>.</p><p>We want to divide the array into exactly <code>n / 2</code> pairs such that the sum of each pair is divisible by <code>k</code>.</p><p>Return <code>true</code> <em>If you can find a way to do that or</em><code>false</code> <em>otherwise</em>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: arr = [1,2,3,4,5,10,6,7,8,9], k = 5</p><p>Output: true</p><p>Explanation: Pairs are (1,9),(2,8),(3,7),(4,6) and (5,10).</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: arr = [1,2,3,4,5,6], k = 7</p><p>Output: true</p><p>Explanation: Pairs are (1,6),(2,5) and(3,4).</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: arr = [1,2,3,4,5,6], k = 10</p><p>Output: false</p><p>Explanation: You can try all possible pairs to see that there is no way to divide arr into 3 pairs each with sum divisible by 10.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>arr.length == n</code></li><li><code>1 &lt;= n &lt;= 10^5</code></li><li><code>n</code> is even.</li><li><code>-10^9 &lt;= arr[i] &lt;= 10^9</code></li><li><code>1 &lt;= k &lt;= 10^5</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个整数数组 <code>arr</code> 和一个整数 <code>k</code> ，其中数组长度是偶数，值为 <code>n</code> 。</p><p>现在需要把数组恰好分成 <code>n / 2</code> 对，以使每对数字的和都能够被 <code>k</code> 整除。</p><p>如果存在这样的分法，请返回 <code>true</code> ；否则，返回 <code>false</code>。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>可以采用哈希表的方式来有效检查是否能够将数组中的元素配对，使得每对元素的和可以被 <code>k</code> 整除：</p><ol><li><p><strong>余数映射</strong>：</p><ul><li>首先，对数组中的每个元素 <code>num</code> 进行处理，将其对 <code>k</code> 取余。确保余数为正数，这样可以避免负数的影响。</li></ul></li><li><p><strong>处理可被整除的元素</strong>：</p><ul><li>如果余数为 <code>0</code>，则该元素可以与另一个同样为 <code>0</code> 的元素配对，因此可以跳过对该元素的进一步处理。</li></ul></li><li><p><strong>寻找互补元素</strong>：</p><ul><li>对于每个余数 <code>num</code>，其互补数为 <code>k - num</code>。这意味着，如果你有一个数 <code>num</code>，那么要找一个数 <code>k - num</code> 进行配对，使得它们的和可以被 <code>k</code> 整除。</li><li>在哈希表中查找这个互补数 <code>another</code>： <ul><li>如果找到并且其计数大于 1，则将其计数减 1，表示找到一对可以配对的元素。</li><li>如果找到但计数为 1，则删除这个互补数。</li><li>如果没有找到，则将当前的余数 <code>num</code> 加入哈希表，记录其出现次数。</li></ul></li></ul></li><li><p><strong>最终判断</strong>：</p><ul><li>遍历完成后，检查哈希表是否为空。如果为空，表示所有元素都能够找到互补的配对，返回 <code>true</code>；如果不为空，表示存在无法配对的元素，返回 <code>false</code>。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是数组的长度，因每个元素仅被处理一次。</li><li><strong>空间复杂度</strong>：<code>O(k)</code>，哈希表的大小取决于可能的余数数量，最多为 <code>k</code>。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">arr</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">k</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">canArrange</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">arr<span class="token punctuation">,</span> k</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> num <span class="token keyword">of</span> arr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 处理 num，将 num 对 k 求余数，并保证余数是正数</span>
		num <span class="token operator">=</span> num <span class="token operator">%</span> k<span class="token punctuation">;</span>
		num <span class="token operator">=</span> num <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">?</span> k <span class="token operator">+</span> num <span class="token operator">:</span> num<span class="token punctuation">;</span>

		<span class="token comment">// num 可以被 k 整除时</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>num <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">continue</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>

		<span class="token comment">// 在 map 中寻找互补元素</span>
		<span class="token comment">// 有就将 another 减一，没有就将 num 加进 map 中</span>
		<span class="token keyword">let</span> another <span class="token operator">=</span> k <span class="token operator">-</span> num<span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>map<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>another<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>another<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>another<span class="token punctuation">,</span> map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>another<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
				map<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span>another<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>num<span class="token punctuation">,</span> <span class="token punctuation">(</span>map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 判断 map 是否为空，非空则代表无法找到互补元素</span>
	<span class="token keyword">return</span> map<span class="token punctuation">.</span>size <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,24),w=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),E=n("td",{style:{"text-align":"center"}},"2183",-1),I=n("td",{style:{"text-align":"left"}},"统计可以被 K 整除的下标对数目",-1),q=n("td",{style:{"text-align":"center"}},null,-1),C={style:{"text-align":"left"}},L=n("code",null,"数组",-1),N=n("code",null,"数学",-1),O=n("code",null,"数论",-1),V=n("td",{style:{"text-align":"center"}},"🔴",-1),j={style:{"text-align":"center"}},B={href:"https://leetcode.cn/problems/count-array-pairs-divisible-by-k",target:"_blank",rel:"noopener noreferrer"},R={href:"https://leetcode.com/problems/count-array-pairs-divisible-by-k",target:"_blank",rel:"noopener noreferrer"},M=n("td",{style:{"text-align":"center"}},"2344",-1),P=n("td",{style:{"text-align":"left"}},"使数组可以被整除的最少删除次数",-1),z=n("td",{style:{"text-align":"center"}},null,-1),A={style:{"text-align":"left"}},G=n("code",null,"数组",-1),K=n("code",null,"数学",-1),S=n("code",null,"数论",-1),T=n("code",null,"2+",-1),W=n("td",{style:{"text-align":"center"}},"🔴",-1),Y={style:{"text-align":"center"}},D={href:"https://leetcode.cn/problems/minimum-deletions-to-make-array-divisible",target:"_blank",rel:"noopener noreferrer"},F={href:"https://leetcode.com/problems/minimum-deletions-to-make-array-divisible",target:"_blank",rel:"noopener noreferrer"},H=n("td",{style:{"text-align":"center"}},"3184",-1),J=n("td",{style:{"text-align":"left"}},"构成整天的下标对数目 I",-1),Q=n("td",{style:{"text-align":"center"}},null,-1),U={style:{"text-align":"left"}},X=n("code",null,"数组",-1),Z=n("code",null,"哈希表",-1),$=n("code",null,"计数",-1),nn=n("td",{style:{"text-align":"center"}},"🟢",-1),tn={style:{"text-align":"center"}},sn={href:"https://leetcode.cn/problems/count-pairs-that-form-a-complete-day-i",target:"_blank",rel:"noopener noreferrer"},en={href:"https://leetcode.com/problems/count-pairs-that-form-a-complete-day-i",target:"_blank",rel:"noopener noreferrer"},an=n("td",{style:{"text-align":"center"}},"3185",-1),on=n("td",{style:{"text-align":"left"}},"构成整天的下标对数目 II",-1),ln=n("td",{style:{"text-align":"center"}},null,-1),cn={style:{"text-align":"left"}},pn=n("code",null,"数组",-1),rn=n("code",null,"哈希表",-1),dn=n("code",null,"计数",-1),un=n("td",{style:{"text-align":"center"}},"🟠",-1),kn={style:{"text-align":"center"}},hn={href:"https://leetcode.cn/problems/count-pairs-that-form-a-complete-day-ii",target:"_blank",rel:"noopener noreferrer"},mn={href:"https://leetcode.com/problems/count-pairs-that-form-a-complete-day-ii",target:"_blank",rel:"noopener noreferrer"};function _n(bn,fn){const c=l("font"),a=l("RouterLink"),o=l("ExternalLinkIcon");return i(),r("div",null,[h,n("p",null,[t("🟠 "),s(c,{color:"#ffb800"},{default:e(()=>[t("Medium")]),_:1}),t("  🔖  "),s(a,{to:"/tag/array.html"},{default:e(()=>[m]),_:1}),t(),s(a,{to:"/tag/hash-table.html"},{default:e(()=>[_]),_:1}),t(),s(a,{to:"/tag/counting.html"},{default:e(()=>[b]),_:1}),t("  🔗 "),n("a",f,[g,s(o)]),t(),n("a",v,[y,s(o)])]),x,d(" prettier-ignore "),n("table",null,[w,n("tbody",null,[n("tr",null,[E,I,q,n("td",C,[s(a,{to:"/tag/array.html"},{default:e(()=>[L]),_:1}),t(),s(a,{to:"/tag/math.html"},{default:e(()=>[N]),_:1}),t(),s(a,{to:"/tag/number-theory.html"},{default:e(()=>[O]),_:1})]),V,n("td",j,[n("a",B,[t("🀄️"),s(o)]),t(),n("a",R,[t("🔗"),s(o)])])]),n("tr",null,[M,P,z,n("td",A,[s(a,{to:"/tag/array.html"},{default:e(()=>[G]),_:1}),t(),s(a,{to:"/tag/math.html"},{default:e(()=>[K]),_:1}),t(),s(a,{to:"/tag/number-theory.html"},{default:e(()=>[S]),_:1}),t(),T]),W,n("td",Y,[n("a",D,[t("🀄️"),s(o)]),t(),n("a",F,[t("🔗"),s(o)])])]),n("tr",null,[H,J,Q,n("td",U,[s(a,{to:"/tag/array.html"},{default:e(()=>[X]),_:1}),t(),s(a,{to:"/tag/hash-table.html"},{default:e(()=>[Z]),_:1}),t(),s(a,{to:"/tag/counting.html"},{default:e(()=>[$]),_:1})]),nn,n("td",tn,[n("a",sn,[t("🀄️"),s(o)]),t(),n("a",en,[t("🔗"),s(o)])])]),n("tr",null,[an,on,ln,n("td",cn,[s(a,{to:"/tag/array.html"},{default:e(()=>[pn]),_:1}),t(),s(a,{to:"/tag/hash-table.html"},{default:e(()=>[rn]),_:1}),t(),s(a,{to:"/tag/counting.html"},{default:e(()=>[dn]),_:1})]),un,n("td",kn,[n("a",hn,[t("🀄️"),s(o)]),t(),n("a",mn,[t("🔗"),s(o)])])])])])])}const vn=p(k,[["render",_n],["__file","1497.html.vue"]]);export{vn as default};
