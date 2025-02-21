import{_ as i,r as c,o as r,c as d,a as n,b as s,d as a,w as t,f as u,e as p}from"./app-9CeBk-uV.js";const h={},k=n("h1",{id:"_2260-必须拿起的最小连续卡牌数",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2260-必须拿起的最小连续卡牌数","aria-hidden":"true"},"#"),s(" 2260. 必须拿起的最小连续卡牌数")],-1),m=n("code",null,"数组",-1),_=n("code",null,"哈希表",-1),g=n("code",null,"滑动窗口",-1),v={href:"https://leetcode.cn/problems/minimum-consecutive-cards-to-pick-up",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"力扣",-1),f={href:"https://leetcode.com/problems/minimum-consecutive-cards-to-pick-up",target:"_blank",rel:"noopener noreferrer"},w=n("code",null,"LeetCode",-1),x=p('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given an integer array <code>cards</code> where <code>cards[i]</code> represents the <strong>value</strong> of the <code>ith</code> card. A pair of cards are <strong>matching</strong> if the cards have the <strong>same</strong> value.</p><p>Return <em>the <strong>minimum</strong> number of <strong>consecutive</strong> cards you have to pick up to have a pair of <strong>matching</strong> cards among the picked cards.</em> If it is impossible to have matching cards, return <code>-1</code>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: cards = [3,4,2,3,4,7]</p><p>Output: 4</p><p>Explanation: We can pick up the cards [3,4,2,3] which contain a matching pair of cards with value 3. Note that picking up the cards [4,2,3,4] is also optimal.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: cards = [1,0,5,3]</p><p>Output: -1</p><p>Explanation: There is no way to pick up a set of consecutive cards that contain a pair of matching cards.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= cards.length &lt;= 10^5</code></li><li><code>0 &lt;= cards[i] &lt;= 10^6</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个整数数组 <code>cards</code> ，其中 <code>cards[i]</code> 表示第 <code>i</code> 张卡牌的 <strong>值</strong> 。如果两张卡牌的值相同，则认为这一对卡牌 <strong>匹配</strong> 。</p><p>返回你必须拿起的最小连续卡牌数，以使在拿起的卡牌中有一对匹配的卡牌。如果无法得到一对匹配的卡牌，返回 <code>-1</code> 。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>可以使用滑动窗口来解决这道题。</p><ul><li>用一个 <code>Map</code> 来存储滑动窗口内的数；</li><li>初始化返回值 <code>res</code> 为 <code>cards.length + 1</code>，方便判断最后能否得到一对匹配的卡牌，若有匹配的卡片，<code>res</code> 可能的最大值为 <code>cards.length</code>；</li><li>向右扩大右边界，判断窗口内是否已经包含当前数： <ul><li>若不包含，则将卡牌放入窗口里；</li><li>若已经包含，则找到了一对匹配的卡牌，更新 <code>res</code> 为最小值，同时缩小左窗口，也即更新 <code>Map</code> 中的值为当前位置；</li></ul></li><li>遍历完之后，返回 <code>res</code></li></ul>',15),y=n("code",null,"Map",-1),E=p(`<h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">cards</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">minimumCardPickup</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">cards</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
		n <span class="token operator">=</span> cards<span class="token punctuation">.</span>length<span class="token punctuation">,</span>
		res <span class="token operator">=</span> n <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span>
		window <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> card <span class="token operator">=</span> cards<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>window<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>card<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			res <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span> i <span class="token operator">-</span> window<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>card<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		window<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>card<span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
		i<span class="token operator">++</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> res <span class="token operator">==</span> n <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">?</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token operator">:</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,3),C=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),M=n("td",{style:{"text-align":"center"}},"3",-1),N=n("td",{style:{"text-align":"left"}},"无重复字符的最长子串",-1),I={style:{"text-align":"center"}},L={style:{"text-align":"left"}},V=n("code",null,"哈希表",-1),q=n("code",null,"字符串",-1),j=n("code",null,"滑动窗口",-1),B=n("td",{style:{"text-align":"center"}},"🟠",-1),R={style:{"text-align":"center"}},O={href:"https://leetcode.cn/problems/longest-substring-without-repeating-characters",target:"_blank",rel:"noopener noreferrer"},T={href:"https://leetcode.com/problems/longest-substring-without-repeating-characters",target:"_blank",rel:"noopener noreferrer"};function A(P,S){const l=c("font"),e=c("RouterLink"),o=c("ExternalLinkIcon");return r(),d("div",null,[k,n("p",null,[s("🟠 "),a(l,{color:"#ffb800"},{default:t(()=>[s("Medium")]),_:1}),s("  🔖  "),a(e,{to:"/tag/array.html"},{default:t(()=>[m]),_:1}),s(),a(e,{to:"/tag/hash-table.html"},{default:t(()=>[_]),_:1}),s(),a(e,{to:"/tag/sliding-window.html"},{default:t(()=>[g]),_:1}),s("  🔗 "),n("a",v,[b,a(o)]),s(),n("a",f,[w,a(o)])]),x,n("p",null,[s("这道题与一般滑动窗口题不一样的地方是，缩小左边界是隐式地更新 "),y,s(" 完成的，详细的滑动窗口答题框架讲解，可阅读 "),a(e,{to:"/book/slide_window.html"},{default:t(()=>[s("《3.11 滑动窗口》")]),_:1}),s("。")]),E,u(" prettier-ignore "),n("table",null,[C,n("tbody",null,[n("tr",null,[M,N,n("td",I,[a(e,{to:"/problem/0003.html"},{default:t(()=>[s("[✓]")]),_:1})]),n("td",L,[a(e,{to:"/tag/hash-table.html"},{default:t(()=>[V]),_:1}),s(),a(e,{to:"/tag/string.html"},{default:t(()=>[q]),_:1}),s(),a(e,{to:"/tag/sliding-window.html"},{default:t(()=>[j]),_:1})]),B,n("td",R,[n("a",O,[s("🀄️"),a(o)]),s(),n("a",T,[s("🔗"),a(o)])])])])])])}const Y=i(h,[["render",A],["__file","2260.html.vue"]]);export{Y as default};
