import{_ as i,r as o,o as d,c as r,a as n,b as s,d as a,w as t,e as c}from"./app-OX-nYmHS.js";const u={},k=n("h1",{id:"_39-数组中出现次数超过一半的数字",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_39-数组中出现次数超过一半的数字","aria-hidden":"true"},"#"),s(" 39. 数组中出现次数超过一半的数字")],-1),h=n("code",null,"数组",-1),_=n("code",null,"哈希表",-1),m=n("code",null,"分治",-1),v=n("code",null,"计数",-1),b=n("code",null,"排序",-1),f={href:"https://leetcode.cn/problems/shu-zu-zhong-chu-xian-ci-shu-chao-guo-yi-ban-de-shu-zi-lcof",target:"_blank",rel:"noopener noreferrer"},g=n("code",null,"力扣",-1),y=c('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>仓库管理员以数组 <code>stock</code> 形式记录商品库存表。<code>stock[i]</code> 表示商品 <code>id</code>，可能存在重复。请返回库存表中数量大于 <code>stock.length / </code>2 的商品 <code>id</code>。</p><p><strong>示例 1:</strong></p><blockquote><p>输入: stock = [6, 1, 3, 1, 1, 1]</p><p>输出: 1</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= stock.length &lt;= 50000</code></li><li>给定数组为非空数组，且存在结果数字</li></ul>',6),w={class:"hint-container warning"},x=n("p",{class:"hint-container-title"},"注意",-1),j=c(`<h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>这道题如果用一个哈希表作为计数器，记录每个元素出现的次数，然后寻找出现次数最多的那个元素，时间和空间复杂度都是 <code>O(N)</code>。</p><p>想要空间复杂度为 <code>O(1)</code> ,可以用栈的思路：遍历数组，如果栈为空，或者当前元素与栈顶元素相同，则入栈；否则将栈顶元素弹出。</p><p>由于数组中的众数出现次数大于 <code>n/2</code> ，所以经过不断地入栈出栈，互相消除，最终栈内留下的肯定是我们要找的众数。证明如下：</p><ul><li>当数组内只有两种元素时，由于众数的数量过半，所以不管顺序如何，经过两两对比，不一样的互相消除，最后栈内留下的都是众数；</li><li>当数组内有两种以上的元素时，除众数以外的其他元素还会互相对比消除，所以用于消耗众数的元素数量更少，所以栈内留下的元素就是众数。</li></ul><p>实际上我们并不需要真的实现一个栈，只需要记录栈顶元素 <code>target</code> （栈内所有元素一定相同，遇到不相同的不会入栈），以及元素的个数 <code>count</code> ，因此只需要两个变量就够了。</p><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">stock</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">inventoryManagement</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">stock</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> target<span class="token punctuation">;</span>
	<span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> item <span class="token keyword">of</span> stock<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>count <span class="token operator">===</span> <span class="token number">0</span> <span class="token operator">||</span> item <span class="token operator">===</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			count<span class="token operator">++</span><span class="token punctuation">;</span>
			target <span class="token operator">=</span> item<span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			count<span class="token operator">--</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> target<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8);function z(L,N){const p=o("font"),e=o("RouterLink"),l=o("ExternalLinkIcon");return d(),r("div",null,[k,n("p",null,[s("🟢 "),a(p,{color:"#15bd66"},{default:t(()=>[s("Easy")]),_:1}),s("  🔖  "),a(e,{to:"/tag/array.html"},{default:t(()=>[h]),_:1}),s(),a(e,{to:"/tag/hash-table.html"},{default:t(()=>[_]),_:1}),s(),a(e,{to:"/tag/divide-and-conquer.html"},{default:t(()=>[m]),_:1}),s(),a(e,{to:"/tag/counting.html"},{default:t(()=>[v]),_:1}),s(),a(e,{to:"/tag/sorting.html"},{default:t(()=>[b]),_:1}),s("  🔗 "),n("a",f,[g,a(l)])]),y,n("div",w,[x,n("p",null,[s("本题与 LeetCode "),a(e,{to:"/problem/0169.html"},{default:t(()=>[s("第 169 题")]),_:1}),s(" 相同。")])]),j])}const V=i(u,[["render",z],["__file","jz_offer_39_1.html.vue"]]);export{V as default};
