import{_ as c,r as n,o as p,c as r,a as e,b as o,d as t,w as s,e as i}from"./app-r0ql_Osa.js";const d={},q=e("h1",{id:"_1773-统计匹配检索规则的物品数量",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1773-统计匹配检索规则的物品数量","aria-hidden":"true"},"#"),o(" 1773. 统计匹配检索规则的物品数量")],-1),h=e("code",null,"数组",-1),m=e("code",null,"字符串",-1),k={href:"https://leetcode.cn/problems/count-items-matching-a-rule",target:"_blank",rel:"noopener noreferrer"},g=e("code",null,"力扣",-1),v={href:"https://leetcode.com/problems/count-items-matching-a-rule",target:"_blank",rel:"noopener noreferrer"},y=e("code",null,"LeetCode",-1),b=i(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given an array <code>items</code>, where each <code>items[i] = [typei, colori, namei]</code> describes the type, color, and name of the <code>ith</code> item. You are also given a rule represented by two strings, <code>ruleKey</code> and <code>ruleValue</code>.</p><p>The <code>ith</code> item is said to match the rule if <strong>one</strong> of the following is true:</p><ul><li><code>ruleKey == &quot;type&quot;</code> and <code>ruleValue == typei</code>.</li><li><code>ruleKey == &quot;color&quot;</code> and <code>ruleValue == colori</code>.</li><li><code>ruleKey == &quot;name&quot;</code> and <code>ruleValue == namei</code>.</li></ul><p>Return <em>the number of items that match the given rule</em>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: items = [[&quot;phone&quot;,&quot;blue&quot;,&quot;pixel&quot;],[&quot;computer&quot;,&quot;silver&quot;,&quot;lenovo&quot;],[&quot;phone&quot;,&quot;gold&quot;,&quot;iphone&quot;]], ruleKey = &quot;color&quot;, ruleValue = &quot;silver&quot;</p><p>Output: 1</p><p>Explanation: There is only one item matching the given rule, which is [&quot;computer&quot;,&quot;silver&quot;,&quot;lenovo&quot;].</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: items = [[&quot;phone&quot;,&quot;blue&quot;,&quot;pixel&quot;],[&quot;computer&quot;,&quot;silver&quot;,&quot;phone&quot;],[&quot;phone&quot;,&quot;gold&quot;,&quot;iphone&quot;]], ruleKey = &quot;type&quot;, ruleValue = &quot;phone&quot;</p><p>Output: 2</p><p>Explanation: There are only two items matching the given rule, which are [&quot;phone&quot;,&quot;blue&quot;,&quot;pixel&quot;] and [&quot;phone&quot;,&quot;gold&quot;,&quot;iphone&quot;]. Note that the item [&quot;computer&quot;,&quot;silver&quot;,&quot;phone&quot;] does not match.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= items.length &lt;= 10^4</code></li><li><code>1 &lt;= typei.length, colori.length, namei.length, ruleValue.length &lt;= 10</code></li><li><code>ruleKey</code> is equal to either <code>&quot;type&quot;</code>, <code>&quot;color&quot;</code>, or <code>&quot;name&quot;</code>.</li><li>All strings consist only of lowercase letters.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个数组 <code>items</code> ，其中 <code>items[i] = [typei, colori, namei]</code> ，描述第 <code>i</code> 件物品的类型、颜色以及名称。</p><p>另给你一条由两个字符串 <code>ruleKey</code> 和 <code>ruleValue</code> 表示的检索规则。</p><p>如果第 <code>i</code> 件物品能满足下述条件之一，则认为该物品与给定的检索规则 <strong>匹配</strong> ：</p><ul><li><code>ruleKey == &quot;type&quot;</code> 且 <code>ruleValue == typei</code> 。</li><li><code>ruleKey == &quot;color&quot;</code> 且 <code>ruleValue == colori</code> 。</li><li><code>ruleKey == &quot;name&quot;</code> 且 <code>ruleValue == namei</code> 。</li></ul><p>统计并返回 <strong>匹配检索规则的物品数量</strong> 。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> items = [[&quot;phone&quot;,&quot;blue&quot;,&quot;pixel&quot;],[&quot;computer&quot;,&quot;silver&quot;,&quot;lenovo&quot;],[&quot;phone&quot;,&quot;gold&quot;,&quot;iphone&quot;]], ruleKey = &quot;color&quot;, ruleValue = &quot;silver&quot;</p><p><strong>输出：</strong> 1</p><p><strong>解释：</strong> 只有一件物品匹配检索规则，这件物品是 [&quot;computer&quot;,&quot;silver&quot;,&quot;lenovo&quot;] 。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> items = [[&quot;phone&quot;,&quot;blue&quot;,&quot;pixel&quot;],[&quot;computer&quot;,&quot;silver&quot;,&quot;phone&quot;],[&quot;phone&quot;,&quot;gold&quot;,&quot;iphone&quot;]], ruleKey = &quot;type&quot;, ruleValue = &quot;phone&quot;</p><p><strong>输出：</strong> 2</p><p><strong>解释：</strong> 只有两件物品匹配检索规则，这两件物品分别是 [&quot;phone&quot;,&quot;blue&quot;,&quot;pixel&quot;] 和 [&quot;phone&quot;,&quot;gold&quot;,&quot;iphone&quot;] 。注意，[&quot;computer&quot;,&quot;silver&quot;,&quot;phone&quot;] 未匹配检索规则。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= items.length &lt;= 10^4</code></li><li><code>1 &lt;= typei.length, colori.length, namei.length, ruleValue.length &lt;= 10</code></li><li><code>ruleKey</code> 等于 <code>&quot;type&quot;</code>、<code>&quot;color&quot;</code> 或 <code>&quot;name&quot;</code></li><li>所有字符串仅由小写字母组成</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>映射规则键到索引</strong>：</p><ul><li>题目中指定的 <code>ruleKey</code> 表示数组中每个元素的属性（<code>type</code>、<code>color</code> 或 <code>name</code>）。</li><li>使用一个 <code>keyMap</code> 映射表将这些键映射到对应的索引，方便访问 <code>items</code> 的具体列。</li></ul></li><li><p><strong>筛选匹配的元素</strong>：</p><ul><li>利用 <code>filter</code> 遍历 <code>items</code>，对于每个元素，检查对应索引处的值是否与 <code>ruleValue</code> 相等。</li><li>如果相等，则保留该元素。</li></ul></li><li><p><strong>统计数量</strong>：</p><ul><li>筛选后，<code>filter</code> 返回的数组长度即为符合条件的元素数量。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是 <code>items</code> 的长度，遍历 <code>items</code> 一次。</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，使用了 <code>filter</code> 生成一个中间数组，最坏情况下所有元素都符合条件，占用 <code>O(n)</code> 的空间。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">items</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">ruleKey</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">ruleValue</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">countMatches</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">items<span class="token punctuation">,</span> ruleKey<span class="token punctuation">,</span> ruleValue</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> keyMap <span class="token operator">=</span> <span class="token punctuation">{</span>
		<span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
		<span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
		<span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token number">2</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> items<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">i</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> i<span class="token punctuation">[</span>keyMap<span class="token punctuation">[</span>ruleKey<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">==</span> ruleValue<span class="token punctuation">)</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,29);function _(f,x){const l=n("font"),a=n("RouterLink"),u=n("ExternalLinkIcon");return p(),r("div",null,[q,e("p",null,[o("🟢 "),t(l,{color:"#15bd66"},{default:s(()=>[o("Easy")]),_:1}),o("  🔖  "),t(a,{to:"/tag/array.html"},{default:s(()=>[h]),_:1}),o(),t(a,{to:"/tag/string.html"},{default:s(()=>[m]),_:1}),o("  🔗 "),e("a",k,[g,t(u)]),o(),e("a",v,[y,t(u)])]),b])}const K=c(d,[["render",_],["__file","1773.html.vue"]]);export{K as default};
