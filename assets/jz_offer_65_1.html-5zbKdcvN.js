import{_ as p,r as e,o as i,c as d,a,b as n,d as s,w as t,e as r}from"./app-9Xw5divW.js";const u={},k=a("h1",{id:"_65-不用加减乘除做加法",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#_65-不用加减乘除做加法","aria-hidden":"true"},"#"),n(" 65. 不用加减乘除做加法")],-1),m=a("code",null,"位运算",-1),h=a("code",null,"数学",-1),v={href:"https://leetcode.cn/problems/bu-yong-jia-jian-cheng-chu-zuo-jia-fa-lcof",target:"_blank",rel:"noopener noreferrer"},_=a("code",null,"力扣",-1),b=r(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>计算机安全专家正在开发一款高度安全的加密通信软件，需要在进行数据传输时对数据进行加密和解密操作。假定 <code>dataA</code> 和 <code>dataB</code> 分别为随机抽样的两次通信的数据量：</p><ul><li>正数为发送量</li><li>负数为接受量</li><li>0 为数据遗失</li></ul><p>请不使用四则运算符的情况下实现一个函数计算两次通信的数据量之和（三种情况均需被统计），以确保在数据传输过程中的高安全性和保密性。</p><p><strong>示例 1:</strong></p><blockquote><p><strong>输入：</strong> dataA = 5, dataB = -1</p><p><strong>输出：</strong> 4</p></blockquote><p><strong>提示：</strong></p><ul><li><code>dataA</code> 和 <code>dataB</code> 均可能是负数或 0</li><li>结果不会溢出 32 位整数</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>可以通过位运算来实现两个数的相加，而不使用四则运算符：</p><ol><li>使用位与运算 <code>&amp;</code> 来计算进位。</li><li>使用异或运算 <code>^</code> 来计算不带进位的和。</li><li>将进位左移，准备与原来的和相加。</li><li>重复上述过程，直到没有进位（<code>dataB</code> 为 0）。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(1)</code>（常数时间复杂度），虽然在极端情况下，进位可能会导致多次迭代，但位运算操作是常数时间的，因此整体时间复杂度仍然可以视为 <code>O(1)</code>。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，只使用了固定数量的变量（<code>carry</code>, <code>dataA</code>, <code>dataB</code>），没有使用额外的数据结构来存储数据，因此空间复杂度是常数级别的。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">dataA</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">dataB</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">encryptionCalculate</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">dataA<span class="token punctuation">,</span> dataB</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>dataB <span class="token operator">!==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 计算进位</span>
        <span class="token keyword">let</span> carry <span class="token operator">=</span> dataA <span class="token operator">&amp;</span> dataB<span class="token punctuation">;</span>
        <span class="token comment">// 计算不带进位的和</span>
        dataA <span class="token operator">=</span> dataA <span class="token operator">^</span> dataB<span class="token punctuation">;</span>
        <span class="token comment">// 将进位左移</span>
        dataB <span class="token operator">=</span> carry <span class="token operator">&lt;&lt;</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
	<span class="token keyword">return</span> dataA<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15);function f(g,y){const c=e("font"),o=e("RouterLink"),l=e("ExternalLinkIcon");return i(),d("div",null,[k,a("p",null,[n("🟢 "),s(c,{color:"#15bd66"},{default:t(()=>[n("Easy")]),_:1}),n("  🔖  "),s(o,{to:"/tag/bit-manipulation.html"},{default:t(()=>[m]),_:1}),n(),s(o,{to:"/tag/math.html"},{default:t(()=>[h]),_:1}),n("  🔗 "),a("a",v,[_,s(l)])]),b])}const x=p(u,[["render",f],["__file","jz_offer_65_1.html.vue"]]);export{x as default};
