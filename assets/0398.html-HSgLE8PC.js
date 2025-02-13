import{_ as l,r as c,o as i,c as u,a as n,b as s,d as a,w as t,f as r,e as d}from"./app-MXSjQbID.js";const k={},m=n("h1",{id:"_398-随机数索引",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_398-随机数索引","aria-hidden":"true"},"#"),s(" 398. 随机数索引")],-1),h=n("code",null,"水塘抽样",-1),_=n("code",null,"哈希表",-1),g=n("code",null,"数学",-1),b=n("code",null,"随机化",-1),v={href:"https://leetcode.cn/problems/random-pick-index",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"力扣",-1),y={href:"https://leetcode.com/problems/random-pick-index",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"LeetCode",-1),w=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an integer array <code>nums</code> with possible <strong>duplicates</strong> , randomly output the index of a given <code>target</code> number. You can assume that the given target number must exist in the array.</p><p>Implement the <code>Solution</code> class:</p><ul><li><code>Solution(int[] nums)</code> Initializes the object with the array <code>nums</code>.</li><li><code>int pick(int target)</code> Picks a random index <code>i</code> from <code>nums</code> where <code>nums[i] == target</code>. If there are multiple valid i&#39;s, then each index should have an equal probability of returning.</li></ul><p><strong>Example 1:</strong></p><blockquote><p><strong>Input</strong></p><p>[&quot;Solution&quot;, &quot;pick&quot;, &quot;pick&quot;, &quot;pick&quot;]</p><p>[[[1, 2, 3, 3, 3]], [3], [1], [3]]</p><p><strong>Output</strong></p><p>[null, 4, 0, 2]</p><p><strong>Explanation</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>Solution solution <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Solution</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

solution<span class="token punctuation">.</span><span class="token function">pick</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// It should return either index 2, 3, or 4 randomly. Each index should have equal probability of returning.</span>

solution<span class="token punctuation">.</span><span class="token function">pick</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// It should return 0. Since in the array only nums[0] is equal to 1.</span>

solution<span class="token punctuation">.</span><span class="token function">pick</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// It should return either index 2, 3, or 4 randomly. Each index should have equal probability of returning.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 2 * 10^4</code></li><li><code>-2^31 &lt;= nums[i] &lt;= 2^31 - 1</code></li><li><code>target</code> is an integer from <code>nums</code>.</li><li>At most <code>10^4</code> calls will be made to <code>pick</code>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个可能含有 <strong>重复元素</strong> 的整数数组 <code>nums</code> ，请你随机输出给定的目标数字 <code>target</code> 的索引。你可以假设给定的数字一定存在于数组中。</p><p>实现 <code>Solution</code> 类：</p><ul><li><code>Solution(int[] nums)</code> 用数组 <code>nums</code> 初始化对象。</li><li><code>int pick(int target)</code> 从 <code>nums</code> 中选出一个满足 <code>nums[i] == target</code> 的随机索引 <code>i</code> 。如果存在多个有效的索引，则每个索引的返回概率应当相等。</li></ul><p><strong>示例：</strong></p><blockquote><p><strong>输入</strong></p><p>[&quot;Solution&quot;, &quot;pick&quot;, &quot;pick&quot;, &quot;pick&quot;]</p><p>[[[1, 2, 3, 3, 3]], [3], [1], [3]]</p><p><strong>输出</strong></p><p>[null, 4, 0, 2]</p><p><strong>解释</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>Solution solution <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Solution</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

solution<span class="token punctuation">.</span><span class="token function">pick</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 随机返回索引 2, 3 或者 4 之一。每个索引的返回概率应该相等。</span>

solution<span class="token punctuation">.</span><span class="token function">pick</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 返回 0 。因为只有 nums[0] 等于 1 。</span>

solution<span class="token punctuation">.</span><span class="token function">pick</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 随机返回索引 2, 3 或者 4 之一。每个索引的返回概率应该相等。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 2 * 10^4</code></li><li><code>-2^31 &lt;= nums[i] &lt;= 2^31 - 1</code></li><li><code>target</code> 是 <code>nums</code> 中的一个整数</li><li>最多调用 <code>pick</code> 函数 <code>10^4</code> 次</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ul><li><strong>构造函数 (<code>Solution</code>)</strong>： <ul><li>预处理 <code>nums</code> 数组，将每个数字及其所有索引存入<strong>哈希表</strong> <code>Map</code>，键为数字，值为索引数组。</li></ul></li><li><strong>随机索引选择 (<code>pick</code>)</strong>： <ul><li>获取 <code>target</code> 的索引数组 <code>arr</code>，使用 <code>Math.floor(Math.random() * arr.length)</code> 随机选取索引。</li></ul></li></ul><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>： <ul><li>构造函数：<code>O(n)</code></li><li><code>pick()</code> 方法：<code>O(1)</code></li></ul></li><li><strong>空间复杂度</strong>：<code>O(n)</code>，用于存储哈希表中的数字与索引映射。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">Solution</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span>map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>map<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">this</span><span class="token punctuation">.</span>map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">target</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token class-name">Solution</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">pick</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> arr<span class="token punctuation">[</span>Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,23),q=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),S=n("td",{style:{"text-align":"center"}},"382",-1),j=n("td",{style:{"text-align":"left"}},"链表随机节点",-1),I={style:{"text-align":"center"}},E={style:{"text-align":"left"}},M=n("code",null,"水塘抽样",-1),C=n("code",null,"链表",-1),L=n("code",null,"数学",-1),N=n("code",null,"1+",-1),V=n("td",{style:{"text-align":"center"}},"🟠",-1),O={style:{"text-align":"center"}},B={href:"https://leetcode.cn/problems/linked-list-random-node",target:"_blank",rel:"noopener noreferrer"},z={href:"https://leetcode.com/problems/linked-list-random-node",target:"_blank",rel:"noopener noreferrer"},R=n("td",{style:{"text-align":"center"}},"528",-1),A=n("td",{style:{"text-align":"left"}},"按权重随机选择",-1),G={style:{"text-align":"center"}},P={style:{"text-align":"left"}},T=n("code",null,"数组",-1),Y=n("code",null,"数学",-1),D=n("code",null,"二分查找",-1),F=n("code",null,"2+",-1),H=n("td",{style:{"text-align":"center"}},"🟠",-1),J={style:{"text-align":"center"}},K={href:"https://leetcode.cn/problems/random-pick-with-weight",target:"_blank",rel:"noopener noreferrer"},Q={href:"https://leetcode.com/problems/random-pick-with-weight",target:"_blank",rel:"noopener noreferrer"},U=n("td",{style:{"text-align":"center"}},"710",-1),W=n("td",{style:{"text-align":"left"}},"黑名单中的随机数",-1),X=n("td",{style:{"text-align":"center"}},null,-1),Z={style:{"text-align":"left"}},$=n("code",null,"数组",-1),nn=n("code",null,"哈希表",-1),sn=n("code",null,"数学",-1),an=n("code",null,"3+",-1),tn=n("td",{style:{"text-align":"center"}},"🔴",-1),en={style:{"text-align":"center"}},on={href:"https://leetcode.cn/problems/random-pick-with-blacklist",target:"_blank",rel:"noopener noreferrer"},cn={href:"https://leetcode.com/problems/random-pick-with-blacklist",target:"_blank",rel:"noopener noreferrer"};function pn(ln,un){const p=c("font"),e=c("RouterLink"),o=c("ExternalLinkIcon");return i(),u("div",null,[m,n("p",null,[s("🟠 "),a(p,{color:"#ffb800"},{default:t(()=>[s("Medium")]),_:1}),s("  🔖  "),a(e,{to:"/tag/reservoir-sampling.html"},{default:t(()=>[h]),_:1}),s(),a(e,{to:"/tag/hash-table.html"},{default:t(()=>[_]),_:1}),s(),a(e,{to:"/tag/math.html"},{default:t(()=>[g]),_:1}),s(),a(e,{to:"/tag/randomized.html"},{default:t(()=>[b]),_:1}),s("  🔗 "),n("a",v,[f,a(o)]),s(),n("a",y,[x,a(o)])]),w,r(" prettier-ignore "),n("table",null,[q,n("tbody",null,[n("tr",null,[S,j,n("td",I,[a(e,{to:"/problem/0382.html"},{default:t(()=>[s("[✓]")]),_:1})]),n("td",E,[a(e,{to:"/tag/reservoir-sampling.html"},{default:t(()=>[M]),_:1}),s(),a(e,{to:"/tag/linked-list.html"},{default:t(()=>[C]),_:1}),s(),a(e,{to:"/tag/math.html"},{default:t(()=>[L]),_:1}),s(),N]),V,n("td",O,[n("a",B,[s("🀄️"),a(o)]),s(),n("a",z,[s("🔗"),a(o)])])]),n("tr",null,[R,A,n("td",G,[a(e,{to:"/problem/0528.html"},{default:t(()=>[s("[✓]")]),_:1})]),n("td",P,[a(e,{to:"/tag/array.html"},{default:t(()=>[T]),_:1}),s(),a(e,{to:"/tag/math.html"},{default:t(()=>[Y]),_:1}),s(),a(e,{to:"/tag/binary-search.html"},{default:t(()=>[D]),_:1}),s(),F]),H,n("td",J,[n("a",K,[s("🀄️"),a(o)]),s(),n("a",Q,[s("🔗"),a(o)])])]),n("tr",null,[U,W,X,n("td",Z,[a(e,{to:"/tag/array.html"},{default:t(()=>[$]),_:1}),s(),a(e,{to:"/tag/hash-table.html"},{default:t(()=>[nn]),_:1}),s(),a(e,{to:"/tag/math.html"},{default:t(()=>[sn]),_:1}),s(),an]),tn,n("td",en,[n("a",on,[s("🀄️"),a(o)]),s(),n("a",cn,[s("🔗"),a(o)])])])])])])}const dn=l(k,[["render",pn],["__file","0398.html.vue"]]);export{dn as default};
