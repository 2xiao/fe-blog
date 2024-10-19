import{_ as i,r as o,o as r,c as u,a as n,d as a,b as s,w as t,e as c}from"./app-ynO5B_DP.js";const d={},k={id:"剑指-offer-04-二维数组中的查找",tabindex:"-1"},m=n("a",{class:"header-anchor",href:"#剑指-offer-04-二维数组中的查找","aria-hidden":"true"},"#",-1),h={href:"https://leetcode.cn/problems/er-wei-shu-zu-zhong-de-cha-zhao-lcof",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"数组",-1),g=n("code",null,"二分查找",-1),v=n("code",null,"分治",-1),f=n("code",null,"矩阵",-1),b={href:"https://leetcode.cn/problems/er-wei-shu-zu-zhong-de-cha-zhao-lcof",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"LeetCode",-1),w=c('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>编写一个高效的算法来搜索 <code>m x n</code> 矩阵 <code>matrix</code> 中的一个目标值 <code>target</code> 。该矩阵具有以下特性：</p><ul><li>每行的元素从左到右升序排列。</li><li>每列的元素从上到下升序排列。</li></ul><p><strong>示例 1：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/11/24/searchgrid2.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>输入: matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 5</p><p>输出: true</p></blockquote><p><strong>示例 2：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/11/24/searchgrid.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>输入: matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 20</p><p>输出: false</p></blockquote><p><strong>说明</strong>：</p><ul><li><code>m == matrix.length</code></li><li><code>n == matrix[i].length</code></li><li><code>1 &lt;= n, m &lt;= 300</code></li><li><code>-10^9 &lt;= matrix[i][j] &lt;= 10^9</code></li><li>每行的所有元素从左到右升序排列。</li><li>每列的所有元素从上到下升序排列。</li><li><code>-10^9 &lt;= target &lt;= 10^9</code></li></ul>',11),y={class:"hint-container warning"},j=n("p",{class:"hint-container-title"},"注意",-1),z=c(`<h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>这道题说 <code>matrix</code> 从上到下递增，从左到右递增，显然左上角是最小元素，右下角是最大元素。我们如果想高效在 <code>matrix</code> 中搜索一个元素，肯定需要从某个角开始，比如说从左上角开始，然后每次只能向右或向下移动，不要走回头路。</p><p>如果真从左上角开始的话，就会发现无论向右还是向下走，元素大小都会增加，那么到底向右还是向下？不确定，那只好用类似 <strong>动态规划算法</strong> 的思路穷举了。</p><p>但实际上不用这么麻烦，我们不要从左上角开始，而是从右上角开始，规定只能向左或向下移动。</p><p>你注意，如果向左移动，元素在减小，如果向下移动，元素在增大，这样的话我们就可以根据当前位置的元素和 <code>target</code> 的相对大小来判断应该往哪移动，不断接近从而找到 <code>target</code> 的位置。</p><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">matrix</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">target</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">searchMatrix</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">matrix<span class="token punctuation">,</span> target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> h <span class="token operator">=</span> matrix<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
  <span class="token keyword">const</span> w <span class="token operator">=</span> matrix<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span>
  <span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> j <span class="token operator">=</span> w <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> h <span class="token operator">&amp;&amp;</span> j <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>matrix<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">==</span> target<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>matrix<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">&gt;</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      j<span class="token operator">--</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      i<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7);function L(q,C){const p=o("ExternalLinkIcon"),l=o("font"),e=o("RouterLink");return r(),u("div",null,[n("h1",k,[m,a(),n("a",h,[a("剑指 Offer 04. 二维数组中的查找"),s(p)])]),n("p",null,[a("🟠 "),s(l,{color:"#ffb800"},{default:t(()=>[a("Medium")]),_:1}),a("  🔖  "),s(e,{to:"/outline/tag/array.html"},{default:t(()=>[_]),_:1}),a(),s(e,{to:"/outline/tag/binary-search.html"},{default:t(()=>[g]),_:1}),a(),s(e,{to:"/outline/tag/divide-and-conquer.html"},{default:t(()=>[v]),_:1}),a(),s(e,{to:"/outline/tag/matrix.html"},{default:t(()=>[f]),_:1}),a("  🔗 "),n("a",b,[x,s(p)])]),w,n("div",y,[j,n("p",null,[a("本题与 LeetCode "),s(e,{to:"/problem/0240.html"},{default:t(()=>[a("第 240 题")]),_:1}),a(" 相同。")])]),z])}const V=i(d,[["render",L],["__file","jz_offer_04_1.html.vue"]]);export{V as default};
