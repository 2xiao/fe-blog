import{_ as r,r as t,o as l,c as i,a as e,b as n,d as a,w as s,e as d}from"./app-XFeYdzZv.js";const u={},k=e("h1",{id:"_2303-计算应缴税款总额",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_2303-计算应缴税款总额","aria-hidden":"true"},"#"),n(" 2303. 计算应缴税款总额")],-1),h=e("code",null,"数组",-1),m=e("code",null,"模拟",-1),b={href:"https://leetcode.cn/problems/calculate-amount-paid-in-taxes",target:"_blank",rel:"noopener noreferrer"},g=e("code",null,"力扣",-1),v={href:"https://leetcode.com/problems/calculate-amount-paid-in-taxes",target:"_blank",rel:"noopener noreferrer"},x=e("code",null,"LeetCode",-1),_=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given a <strong>0-indexed</strong> 2D integer array <code>brackets</code> where <code>brackets[i] = [upperi, percenti]</code> means that the <code>ith</code> tax bracket has an upper bound of <code>upperi</code> and is taxed at a rate of <code>percenti</code>. The brackets are <strong>sorted</strong> by upper bound (i.e. <code>upperi-1 &lt; upperi</code> for <code>0 &lt; i &lt; brackets.length</code>).</p><p>Tax is calculated as follows:</p><ul><li>The first <code>upper0</code> dollars earned are taxed at a rate of <code>percent0</code>.</li><li>The next <code>upper1 - upper0</code> dollars earned are taxed at a rate of <code>percent1</code>.</li><li>The next <code>upper2 - upper1</code> dollars earned are taxed at a rate of <code>percent2</code>.</li><li>And so on.</li></ul><p>You are given an integer <code>income</code> representing the amount of money you earned. Return <em>the amount of money that you have to pay in taxes.</em> Answers within <code>10-5</code> of the actual answer will be accepted.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: brackets = [[3,50],[7,10],[12,25]], income = 10</p><p>Output: 2.65000</p><p>Explanation:</p><p>Based on your income, you have 3 dollars in the 1st tax bracket, 4 dollars in the 2nd tax bracket, and 3 dollars in the 3rd tax bracket.</p><p>The tax rate for the three tax brackets is 50%, 10%, and 25%, respectively.</p><p>In total, you pay $3 _ 50% + $4 _ 10% + $3 * 25% = $2.65 in taxes.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: brackets = [[1,0],[4,25],[5,50]], income = 2</p><p>Output: 0.25000</p><p>Explanation:</p><p>Based on your income, you have 1 dollar in the 1st tax bracket and 1 dollar in the 2nd tax bracket.</p><p>The tax rate for the two tax brackets is 0% and 25%, respectively.</p><p>In total, you pay $1 _ 0% + $1 _ 25% = $0.25 in taxes.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: brackets = [[2,50]], income = 0</p><p>Output: 0.00000</p><p>Explanation:</p><p>You have no income to tax, so you have to pay a total of $0 in taxes.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= brackets.length &lt;= 100</code></li><li><code>1 &lt;= upperi &lt;= 1000</code></li><li><code>0 &lt;= percenti &lt;= 100</code></li><li><code>0 &lt;= income &lt;= 1000</code></li><li><code>upperi</code> is sorted in ascending order.</li><li>All the values of <code>upperi</code> are <strong>unique</strong>.</li><li>The upper bound of the last tax bracket is greater than or equal to <code>income</code>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个下标从 <strong>0</strong> 开始的二维整数数组 <code>brackets</code> ，其中 <code>brackets[i] = [upperi, percenti]</code> ，表示第 <code>i</code> 个税级的上限是 <code>upperi</code> ，征收的税率为 <code>percenti</code> 。税级按上限 <strong>从低到高排序</strong> （在满足 <code>0 &lt; i &lt; brackets.length</code> 的前提下，<code>upperi-1 &lt; upperi</code>）。</p><p>税款计算方式如下：</p><ul><li>不超过 <code>upper0</code> 的收入按税率 <code>percent0</code> 缴纳</li><li>接着 <code>upper1 - upper0</code> 的部分按税率 <code>percent1</code> 缴纳</li><li>然后 <code>upper2 - upper1</code> 的部分按税率 <code>percent2</code> 缴纳</li><li>以此类推</li></ul><p>给你一个整数 <code>income</code> 表示你的总收入。返回你需要缴纳的税款总额。与标准答案误差不超 <code>10-5</code> 的结果将被视作正确答案。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> brackets = [[3,50],[7,10],[12,25]], income = 10</p><p><strong>输出：</strong> 2.65000</p><p><strong>解释：</strong></p><p>前 $3 的税率为 50% 。需要支付税款 $3 * 50% = $1.50 。</p><p>接下来 $7 - $3 = $4 的税率为 10% 。需要支付税款 $4 * 10% = $0.40 。</p><p>最后 $10 - $7 = $3 的税率为 25% 。需要支付税款 $3 * 25% = $0.75 。</p><p>需要支付的税款总计 $1.50 + $0.40 + $0.75 = $2.65 。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> brackets = [[1,0],[4,25],[5,50]], income = 2</p><p><strong>输出：</strong> 0.25000</p><p><strong>解释：</strong></p><p>前 $1 的税率为 0% 。需要支付税款 $1 * 0% = $0 。</p><p>剩下 $1 的税率为 25% 。需要支付税款 $1 * 25% = $0.25 。</p><p>需要支付的税款总计 $0 + $0.25 = $0.25 。</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> brackets = [[2,50]], income = 0</p><p><strong>输出：</strong> 0.00000</p><p><strong>解释：</strong></p><p>没有收入，无需纳税，需要支付的税款总计 $0 。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= brackets.length &lt;= 100</code></li><li><code>1 &lt;= upperi &lt;= 1000</code></li><li><code>0 &lt;= percenti &lt;= 100</code></li><li><code>0 &lt;= income &lt;= 1000</code></li><li><code>upperi</code> 按递增顺序排列</li><li><code>upperi</code> 中的所有值 <strong>互不相同</strong></li><li>最后一个税级的上限大于等于 <code>income</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>初始化变量</strong>：</p><ul><li><code>taxes</code>：记录总税额，初始值为 0。</li><li><code>prev</code>：记录上一段税率的上限，用于计算当前段的收入区间，初始值为 0。</li></ul></li><li><p><strong>遍历税率区间</strong>：</p><ul><li>每个区间由两个值组成：<code>upper</code>（当前段的上限）和 <code>percent</code>（当前段的税率）。</li><li>如果当前收入 <code>income</code> 大于上一段的上限 <code>prev</code>： <ul><li>计算当前段的应税收入为 <code>Math.min(income, upper) - prev</code>。</li><li>计算该段的税额为 <code>(应税收入) * percent</code> 并累加到 <code>taxes</code>。</li><li>更新 <code>prev</code> 为 <code>upper</code>。</li></ul></li></ul></li><li><p><strong>结束条件</strong>：</p><ul><li>如果当前收入 <code>income</code> 小于或等于 <code>prev</code>，则退出循环。</li></ul></li><li><p><strong>返回结果</strong>：</p><ul><li>总税额 <code>taxes</code> 是以百分比为单位计算的，因此需要除以 100，返回 <code>taxes / 100</code>。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是税率区间的数量，需要遍历一次 <code>brackets</code> 数组。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，只使用了常数额外空间。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">brackets</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">income</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">calculateTax</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">brackets<span class="token punctuation">,</span> income</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> taxes <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
		prev <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> <span class="token punctuation">[</span>upper<span class="token punctuation">,</span> percent<span class="token punctuation">]</span> <span class="token keyword">of</span> brackets<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>income <span class="token operator">&gt;</span> prev<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			taxes <span class="token operator">+=</span> <span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>income<span class="token punctuation">,</span> upper<span class="token punctuation">)</span> <span class="token operator">-</span> prev<span class="token punctuation">)</span> <span class="token operator">*</span> percent<span class="token punctuation">;</span>
			prev <span class="token operator">=</span> upper<span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			<span class="token keyword">break</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> taxes <span class="token operator">/</span> <span class="token number">100</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,32);function f($,y){const c=t("font"),o=t("RouterLink"),p=t("ExternalLinkIcon");return l(),i("div",null,[k,e("p",null,[n("🟢 "),a(c,{color:"#15bd66"},{default:s(()=>[n("Easy")]),_:1}),n("  🔖  "),a(o,{to:"/tag/array.html"},{default:s(()=>[h]),_:1}),n(),a(o,{to:"/tag/simulation.html"},{default:s(()=>[m]),_:1}),n("  🔗 "),e("a",b,[g,a(p)]),n(),e("a",v,[x,a(p)])]),_])}const q=r(u,[["render",f],["__file","2303.html.vue"]]);export{q as default};
