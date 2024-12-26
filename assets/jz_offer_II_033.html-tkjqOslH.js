import{_ as u,r as e,o as i,c as r,a as n,b as s,d as a,w as t,e as p}from"./app-3dvbhwow.js";const d={},k=n("h1",{id:"_33-变位词组",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_33-变位词组","aria-hidden":"true"},"#"),s(" 33. 变位词组")],-1),v=n("code",null,"数组",-1),h=n("code",null,"哈希表",-1),m=n("code",null,"字符串",-1),_=n("code",null,"排序",-1),g={href:"https://leetcode.cn/problems/sfvd7V",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"力扣",-1),f=p('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>给定一个字符串数组 <code>strs</code> ，将 <strong>变位词</strong> 组合在一起。 可以按任意顺序返回结果列表。</p><p><strong>注意：</strong> 若两个字符串中每个字符出现的次数都相同，则称它们互为变位词。</p><p><strong>示例 1:</strong></p><blockquote><p><strong>输入:</strong> strs = [&quot;eat&quot;, &quot;tea&quot;, &quot;tan&quot;, &quot;ate&quot;, &quot;nat&quot;, &quot;bat&quot;]</p><p><strong>输出:</strong>[[&quot;bat&quot;],[&quot;nat&quot;,&quot;tan&quot;],[&quot;ate&quot;,&quot;eat&quot;,&quot;tea&quot;]]</p></blockquote><p><strong>示例 2:</strong></p><blockquote><p><strong>输入:</strong> strs = [&quot;&quot;]</p><p><strong>输出:</strong>[[&quot;&quot;]]</p></blockquote><p><strong>示例 3:</strong></p><blockquote><p><strong>输入:</strong> strs = [&quot;a&quot;]</p><p><strong>输出:</strong>[[&quot;a&quot;]]</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= strs.length &lt;= 10^4</code></li><li><code>0 &lt;= strs[i].length &lt;= 100</code></li><li><code>strs[i]</code> 仅包含小写字母</li></ul>',11),q={class:"hint-container warning"},w=n("p",{class:"hint-container-title"},"注意",-1),y=p(`<h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>异位词这类问题的关键在于，如何迅速判断两个字符串是异位词，主要考察数据编码和哈希表的使用。</p><p>可以尝试找到一种编码方法，使得字母异位词的编码相同？找到这种编码方式之后，就可以用一个哈希表存储编码相同的所有异位词，得到最终的答案。</p><p>对字符串排序可以是一种编码方案，如果是异位词，排序后就变成一样的了，但是这样时间复杂度略高，且会修改原始数据。</p><p>更好的编码方案是利用每个字符的字母出现频率作为键（key）进行编码：</p><ol><li><p><strong>编码字符串</strong>：</p><ul><li>编写一个 <code>encode</code> 函数，该函数接收一个字符串并返回一个表示该字符串字符频率的编码形式。</li><li>这里可以使用一个长度为 26 的数组来记录每个字母的出现次数，然后将这个数组转为字符串作为编码。</li></ul></li><li><p><strong>遍历输入数组</strong>：</p><ul><li>使用一个对象 <code>res</code> 来存储结果，键为编码字符串，值为一个数组，存储所有与该编码字符串对应的原始字符串。</li><li>遍历输入的字符串数组，对于每个字符串： <ul><li>调用 <code>encode</code> 函数获取其编码。</li><li>如果该编码字符串尚未在 <code>res</code> 中存在，则初始化一个空数组。</li><li>将当前字符串添加到对应的数组中。</li></ul></li></ul></li><li><p><strong>返回结果</strong>：</p><ul><li>最后，使用 <code>Object.values(res)</code> 将对象 <code>res</code> 中的所有值（即各个变位词组）作为结果返回。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><p><strong>时间复杂度</strong>：<code>O(n * k)</code>，其中 <code>n</code> 是字符串的数量，<code>k</code> 是字符串的平均长度。</p><ul><li>外层循环遍历输入数组 <code>strs</code> 中的每个字符串，总共有 <code>n</code> 个字符串。</li><li>内层循环对每个字符串执行编码操作，需要遍历每个字符串的字符，每个字符串的平均长度为 <code>k</code>。</li><li>因此，时间复杂度为 <code>O(n * k)</code></li></ul></li><li><p><strong>空间复杂度</strong>：<code>O(n)</code></p><ul><li>使用一个对象 <code>res</code> 来存储结果，其中每个键对应一个唯一的编码字符串，值是一个包含该编码字符串所有变位词的数组。在最坏情况下，所有字符串都是不同的变位词，因此可能会存储 <code>n</code> 个键值对。</li><li>另外，在 <code>encode</code> 函数中，使用一个长度为 26 的数组 <code>res</code> 来统计每个字符的出现次数，这个数组的大小是固定的，因而不影响总体的空间复杂度。</li><li>因此，总空间复杂度为 <code>O(n)</code>。</li></ul></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">strs</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">groupAnagrams</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">strs</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> str <span class="token keyword">of</span> strs<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> encodeStr <span class="token operator">=</span> <span class="token function">encode</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>res<span class="token punctuation">[</span>encodeStr<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			res<span class="token punctuation">[</span>encodeStr<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		res<span class="token punctuation">[</span>encodeStr<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> Object<span class="token punctuation">.</span><span class="token function">values</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> <span class="token function-variable function">encode</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">str</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token number">26</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token keyword">of</span> str<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> code <span class="token operator">=</span> i<span class="token punctuation">.</span><span class="token function">charCodeAt</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">.</span><span class="token function">charCodeAt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		res<span class="token punctuation">[</span>code<span class="token punctuation">]</span><span class="token operator">++</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> res<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;_&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10);function x(j,I){const c=e("font"),o=e("RouterLink"),l=e("ExternalLinkIcon");return i(),r("div",null,[k,n("p",null,[s("🟠 "),a(c,{color:"#ffb800"},{default:t(()=>[s("Medium")]),_:1}),s("  🔖  "),a(o,{to:"/tag/array.html"},{default:t(()=>[v]),_:1}),s(),a(o,{to:"/tag/hash-table.html"},{default:t(()=>[h]),_:1}),s(),a(o,{to:"/tag/string.html"},{default:t(()=>[m]),_:1}),s(),a(o,{to:"/tag/sorting.html"},{default:t(()=>[_]),_:1}),s("  🔗 "),n("a",g,[b,a(l)])]),f,n("div",q,[w,n("p",null,[s("本题与 LeetCode "),a(o,{to:"/problem/0049.html"},{default:t(()=>[s("第 49 题")]),_:1}),s(" 相同。")])]),y])}const C=u(d,[["render",x],["__file","jz_offer_II_033.html.vue"]]);export{C as default};
