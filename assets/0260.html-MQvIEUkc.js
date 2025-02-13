import{_ as c,r as l,o as i,c as r,a as n,b as t,d as s,w as e,f as u,e as d}from"./app-MXSjQbID.js";const h={},m=n("h1",{id:"_260-只出现一次的数字-iii",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_260-只出现一次的数字-iii","aria-hidden":"true"},"#"),t(" 260. 只出现一次的数字 III")],-1),k=n("code",null,"位运算",-1),_=n("code",null,"数组",-1),g={href:"https://leetcode.cn/problems/single-number-iii",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"力扣",-1),f={href:"https://leetcode.com/problems/single-number-iii",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"LeetCode",-1),x=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an integer array <code>nums</code>, in which exactly two elements appear only once and all the other elements appear exactly twice. Find the two elements that appear only once. You can return the answer in <strong>any order</strong>.</p><p>You must write an algorithm that runs in linear runtime complexity and uses only constant extra space.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [1,2,1,3,2,5]</p><p>Output: [3,5]</p><p>Explanation: [5, 3] is also a valid answer.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [-1,0]</p><p>Output: [-1,0]</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: nums = [0,1]</p><p>Output: [1,0]</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>2 &lt;= nums.length &lt;= 3 * 10^4</code></li><li><code>-2^31 &lt;= nums[i] &lt;= 2^31 - 1</code></li><li>Each integer in <code>nums</code> will appear twice, only two integers will appear once.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个整数数组 <code>nums</code>，其中恰好有两个元素只出现一次，其余所有元素均出现两次。 找出只出现一次的那两个元素。你可以按 <strong>任意顺序</strong> 返回答案。</p><p>你必须设计并实现线性时间复杂度的算法且仅使用常量额外空间来解决此问题。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> nums = [1,2,1,3,2,5]</p><p><strong>输出：</strong>[3,5]</p><p><strong>解释：</strong>[5, 3] 也是有效的答案。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> nums = [-1,0]</p><p><strong>输出：</strong>[-1,0]</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> nums = [0,1]</p><p><strong>输出：</strong>[1,0]</p></blockquote><p><strong>提示：</strong></p><ul><li><code>2 &lt;= nums.length &lt;= 3 * 10^4</code></li><li><code>-2^31 &lt;= nums[i] &lt;= 2^31 - 1</code></li><li>除两个只出现一次的整数外，<code>nums</code> 中的其他数字都出现两次</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>异或的性质</strong></p><ul><li><code>a ^ a = 0</code>，即相同数字异或为 0。</li><li><code>a ^ 0 = a</code>，即数字与 0 异或等于它本身。</li><li>异或操作满足交换律和结合律。</li></ul></li><li><p><strong>异或结果的意义</strong></p><ul><li>如果将所有数字进行异或，得到的结果是这两个不同数字的异或值，设为 <code>xor</code>。</li><li>这个 <code>xor</code> 中每一位为 1 表示在两个不同数字的这一位上值不同。</li></ul></li><li><p><strong>分组</strong></p><ul><li>根据 <code>xor</code> 中某一位为 1 的位置（称为分组标志位），可以将数组中的数字分为两组： <ul><li>一组在该位为 1。</li><li>另一组在该位为 0。</li></ul></li><li>这样，两个只出现一次的数字会被分到不同组，而其他出现两次的数字由于相同，仍然会在各自组内抵消为 0。</li><li>对每组数字分别异或，得到结果。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，遍历数组两次，一次遍历数组计算异或，一次遍历数组分组并计算两个数字。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，使用了常数额外空间。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">singleNumber</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 异或所有数字，得到两个不同数字的异或结果</span>
	<span class="token keyword">const</span> xor <span class="token operator">=</span> nums<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a <span class="token operator">^</span> b<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">// 找到 xor 中第一个为 1 的位</span>
	<span class="token keyword">let</span> pos <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">(</span>xor <span class="token operator">&gt;&gt;</span> pos<span class="token punctuation">)</span> <span class="token operator">&amp;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">!==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		pos <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 根据该位将数字分为两组</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> num <span class="token keyword">of</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">(</span>num <span class="token operator">&gt;&gt;</span> pos<span class="token punctuation">)</span> <span class="token operator">&amp;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// 该位为 1 的分到第一组</span>
			res<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">^=</span> num<span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			<span class="token comment">// 该位为 0 的分到第二组</span>
			res<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">^=</span> num<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 返回结果</span>
	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,29),y=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),w=n("td",{style:{"text-align":"center"}},"136",-1),q=n("td",{style:{"text-align":"left"}},"只出现一次的数字",-1),I={style:{"text-align":"center"}},E={style:{"text-align":"left"}},N=n("code",null,"位运算",-1),O=n("code",null,"数组",-1),C=n("td",{style:{"text-align":"center"}},"🟢",-1),L={style:{"text-align":"center"}},V={href:"https://leetcode.cn/problems/single-number",target:"_blank",rel:"noopener noreferrer"},j={href:"https://leetcode.com/problems/single-number",target:"_blank",rel:"noopener noreferrer"},B=n("td",{style:{"text-align":"center"}},"137",-1),R=n("td",{style:{"text-align":"left"}},"只出现一次的数字 II",-1),Y={style:{"text-align":"center"}},F={style:{"text-align":"left"}},G=n("code",null,"位运算",-1),M=n("code",null,"数组",-1),S=n("td",{style:{"text-align":"center"}},"🟠",-1),T={style:{"text-align":"center"}},X={href:"https://leetcode.cn/problems/single-number-ii",target:"_blank",rel:"noopener noreferrer"},z={href:"https://leetcode.com/problems/single-number-ii",target:"_blank",rel:"noopener noreferrer"},A=n("td",{style:{"text-align":"center"}},"2433",-1),D=n("td",{style:{"text-align":"left"}},"找出前缀异或的原始数组",-1),H=n("td",{style:{"text-align":"center"}},null,-1),J={style:{"text-align":"left"}},K=n("code",null,"位运算",-1),P=n("code",null,"数组",-1),Q=n("td",{style:{"text-align":"center"}},"🟠",-1),U={style:{"text-align":"center"}},W={href:"https://leetcode.cn/problems/find-the-original-array-of-prefix-xor",target:"_blank",rel:"noopener noreferrer"},Z={href:"https://leetcode.com/problems/find-the-original-array-of-prefix-xor",target:"_blank",rel:"noopener noreferrer"},$=n("td",{style:{"text-align":"center"}},"3158",-1),nn=n("td",{style:{"text-align":"left"}},"求出出现两次数字的 XOR 值",-1),tn=n("td",{style:{"text-align":"center"}},null,-1),sn={style:{"text-align":"left"}},en=n("code",null,"位运算",-1),an=n("code",null,"数组",-1),on=n("code",null,"哈希表",-1),ln=n("td",{style:{"text-align":"center"}},"🟢",-1),pn={style:{"text-align":"center"}},cn={href:"https://leetcode.cn/problems/find-the-xor-of-numbers-which-appear-twice",target:"_blank",rel:"noopener noreferrer"},rn={href:"https://leetcode.com/problems/find-the-xor-of-numbers-which-appear-twice",target:"_blank",rel:"noopener noreferrer"};function un(dn,hn){const p=l("font"),a=l("RouterLink"),o=l("ExternalLinkIcon");return i(),r("div",null,[m,n("p",null,[t("🟠 "),s(p,{color:"#ffb800"},{default:e(()=>[t("Medium")]),_:1}),t("  🔖  "),s(a,{to:"/tag/bit-manipulation.html"},{default:e(()=>[k]),_:1}),t(),s(a,{to:"/tag/array.html"},{default:e(()=>[_]),_:1}),t("  🔗 "),n("a",g,[b,s(o)]),t(),n("a",f,[v,s(o)])]),x,u(" prettier-ignore "),n("table",null,[y,n("tbody",null,[n("tr",null,[w,q,n("td",I,[s(a,{to:"/problem/0136.html"},{default:e(()=>[t("[✓]")]),_:1})]),n("td",E,[s(a,{to:"/tag/bit-manipulation.html"},{default:e(()=>[N]),_:1}),t(),s(a,{to:"/tag/array.html"},{default:e(()=>[O]),_:1})]),C,n("td",L,[n("a",V,[t("🀄️"),s(o)]),t(),n("a",j,[t("🔗"),s(o)])])]),n("tr",null,[B,R,n("td",Y,[s(a,{to:"/problem/0137.html"},{default:e(()=>[t("[✓]")]),_:1})]),n("td",F,[s(a,{to:"/tag/bit-manipulation.html"},{default:e(()=>[G]),_:1}),t(),s(a,{to:"/tag/array.html"},{default:e(()=>[M]),_:1})]),S,n("td",T,[n("a",X,[t("🀄️"),s(o)]),t(),n("a",z,[t("🔗"),s(o)])])]),n("tr",null,[A,D,H,n("td",J,[s(a,{to:"/tag/bit-manipulation.html"},{default:e(()=>[K]),_:1}),t(),s(a,{to:"/tag/array.html"},{default:e(()=>[P]),_:1})]),Q,n("td",U,[n("a",W,[t("🀄️"),s(o)]),t(),n("a",Z,[t("🔗"),s(o)])])]),n("tr",null,[$,nn,tn,n("td",sn,[s(a,{to:"/tag/bit-manipulation.html"},{default:e(()=>[en]),_:1}),t(),s(a,{to:"/tag/array.html"},{default:e(()=>[an]),_:1}),t(),s(a,{to:"/tag/hash-table.html"},{default:e(()=>[on]),_:1})]),ln,n("td",pn,[n("a",cn,[t("🀄️"),s(o)]),t(),n("a",rn,[t("🔗"),s(o)])])])])])])}const kn=c(h,[["render",un],["__file","0260.html.vue"]]);export{kn as default};
