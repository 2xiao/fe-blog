import{_ as d,r as c,o as l,c as i,a as e,b as n,d as t,w as s,f as p,e as u}from"./app-9CeBk-uV.js";const h={},k=e("h1",{id:"_1720-解码异或后的数组",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1720-解码异或后的数组","aria-hidden":"true"},"#"),n(" 1720. 解码异或后的数组")],-1),g=e("code",null,"位运算",-1),m=e("code",null,"数组",-1),_={href:"https://leetcode.cn/problems/decode-xored-array",target:"_blank",rel:"noopener noreferrer"},f=e("code",null,"力扣",-1),b={href:"https://leetcode.com/problems/decode-xored-array",target:"_blank",rel:"noopener noreferrer"},v=e("code",null,"LeetCode",-1),x=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>There is a <strong>hidden</strong> integer array <code>arr</code> that consists of <code>n</code> non-negative integers.</p><p>It was encoded into another integer array <code>encoded</code> of length <code>n - 1</code>, such that <code>encoded[i] = arr[i] XOR arr[i + 1]</code>. For example, if <code>arr = [1,0,2,1]</code>, then <code>encoded = [1,2,3]</code>.</p><p>You are given the <code>encoded</code> array. You are also given an integer <code>first</code>, that is the first element of <code>arr</code>, i.e. <code>arr[0]</code>.</p><p>Return <em>the original array</em> <code>arr</code>. It can be proved that the answer exists and is unique.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: encoded = [1,2,3], first = 1</p><p>Output: [1,0,2,1]</p><p>Explanation: If arr = [1,0,2,1], then first = 1 and encoded = [1 XOR 0, 0 XOR 2, 2 XOR 1] = [1,2,3]</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: encoded = [6,2,7,3], first = 4</p><p>Output: [4,2,0,7,4]</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>2 &lt;= n &lt;= 10^4</code></li><li><code>encoded.length == n - 1</code></li><li><code>0 &lt;= encoded[i] &lt;= 10^5</code></li><li><code>0 &lt;= first &lt;= 10^5</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p><strong>未知</strong> 整数数组 <code>arr</code> 由 <code>n</code> 个非负整数组成。</p><p>经编码后变为长度为 <code>n - 1</code> 的另一个整数数组 <code>encoded</code> ，其中 <code>encoded[i] = arr[i] XOR arr[i + 1]</code> 。例如，<code>arr = [1,0,2,1]</code> 经编码后得到 <code>encoded = [1,2,3]</code> 。</p><p>给你编码后的数组 <code>encoded</code> 和原数组 <code>arr</code> 的第一个元素 <code>first</code>（<code>arr[0]</code>）。</p><p>请解码返回原数组 <code>arr</code> 。可以证明答案存在并且是唯一的。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> encoded = [1,2,3], first = 1</p><p><strong>输出：</strong>[1,0,2,1]</p><p><strong>解释：</strong> 若 arr = [1,0,2,1] ，那么 first = 1 且 encoded = [1 XOR 0, 0 XOR 2, 2 XOR 1] = [1,2,3]</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> encoded = [6,2,7,3], first = 4</p><p><strong>输出：</strong>[4,2,0,7,4]</p></blockquote><p><strong>提示：</strong></p><ul><li><code>2 &lt;= n &lt;= 10^4</code></li><li><code>encoded.length == n - 1</code></li><li><code>0 &lt;= encoded[i] &lt;= 10^5</code></li><li><code>0 &lt;= first &lt;= 10^5</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>异或运算的性质：</p><ol><li><strong>自反性</strong>： <ul><li><code>a ^ a = 0</code></li><li><code>a ^ 0 = a</code></li></ul></li><li><strong>交换性和结合性</strong>： <ul><li><code>a ^ b = b ^ a</code></li><li><code>(a ^ b) ^ c = a ^ (b ^ c)</code></li></ul></li><li><strong>还原关系</strong>： <ul><li>如果 <code>c = a ^ b</code>，则 <code>a = c ^ b</code>，且 <code>b = c ^ a</code>。</li></ul></li></ol><p>根据性质 3，可以解码出原始数组。</p><p>已知：<code>encoded[i] = res[i] ^ res[i+1]</code></p><p>因此： <code>res[i+1] = encoded[i] ^ res[i]</code>。</p><ol><li>初始时，将 <code>first</code> 放入 <code>res</code>。</li><li>遍历 <code>encoded</code>，逐步根据 <code>res[i+1] = encoded[i] ^ res[i]</code> 解码。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，需要遍历一次 <code>encoded</code>。</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，结果数组 <code>res</code> 占用线性空间。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">encoded</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">first</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">decode</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">encoded<span class="token punctuation">,</span> first</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token punctuation">[</span>first<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 初始化结果数组，包含第一个元素</span>
	<span class="token keyword">let</span> prev <span class="token operator">=</span> first<span class="token punctuation">;</span> <span class="token comment">// 记录当前的前一个元素</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> num <span class="token keyword">of</span> encoded<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 解码：res[i+1] = encoded[i] ^ res[i]</span>
		prev <span class="token operator">=</span> prev <span class="token operator">^</span> num<span class="token punctuation">;</span>
		res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>prev<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,34),y=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"center"}},"题号"),e("th",{style:{"text-align":"left"}},"标题"),e("th",{style:{"text-align":"center"}},"题解"),e("th",{style:{"text-align":"left"}},"标签"),e("th",{style:{"text-align":"center"}},"难度"),e("th",{style:{"text-align":"center"}},"力扣")])],-1),w=e("td",{style:{"text-align":"center"}},"2433",-1),O=e("td",{style:{"text-align":"left"}},"找出前缀异或的原始数组",-1),R=e("td",{style:{"text-align":"center"}},null,-1),q={style:{"text-align":"left"}},X=e("code",null,"位运算",-1),E=e("code",null,"数组",-1),I=e("td",{style:{"text-align":"center"}},"🟠",-1),C={style:{"text-align":"center"}},L={href:"https://leetcode.cn/problems/find-the-original-array-of-prefix-xor",target:"_blank",rel:"noopener noreferrer"},N={href:"https://leetcode.com/problems/find-the-original-array-of-prefix-xor",target:"_blank",rel:"noopener noreferrer"};function V(j,B){const r=c("font"),o=c("RouterLink"),a=c("ExternalLinkIcon");return l(),i("div",null,[k,e("p",null,[n("🟢 "),t(r,{color:"#15bd66"},{default:s(()=>[n("Easy")]),_:1}),n("  🔖  "),t(o,{to:"/tag/bit-manipulation.html"},{default:s(()=>[g]),_:1}),n(),t(o,{to:"/tag/array.html"},{default:s(()=>[m]),_:1}),n("  🔗 "),e("a",_,[f,t(a)]),n(),e("a",b,[v,t(a)])]),x,p(" prettier-ignore "),e("table",null,[y,e("tbody",null,[e("tr",null,[w,O,R,e("td",q,[t(o,{to:"/tag/bit-manipulation.html"},{default:s(()=>[X]),_:1}),n(),t(o,{to:"/tag/array.html"},{default:s(()=>[E]),_:1})]),I,e("td",C,[e("a",L,[n("🀄️"),t(a)]),n(),e("a",N,[n("🔗"),t(a)])])])])])])}const Y=d(h,[["render",V],["__file","1720.html.vue"]]);export{Y as default};
