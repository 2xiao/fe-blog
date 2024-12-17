import{_ as d,r as i,o as t,c as o,a as e,b as n,d as a,w as r,e as c}from"./app-g2EQZ7P9.js";const u={},v=e("h1",{id:"_2889-数据重塑-透视",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_2889-数据重塑-透视","aria-hidden":"true"},"#"),n(" 2889. 数据重塑：透视")],-1),p={href:"https://leetcode.cn/problems/reshape-data-pivot",target:"_blank",rel:"noopener noreferrer"},m=e("code",null,"力扣",-1),b={href:"https://leetcode.com/problems/reshape-data-pivot",target:"_blank",rel:"noopener noreferrer"},h=e("code",null,"LeetCode",-1),g=c(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><blockquote><p>DataFrame weather</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-------------+--------+
| Column Name | Type   |
+-------------+--------+
| city        | object |
| month       | object |
| temperature | int    |
+-------------+--------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p>Write a solution to <strong>pivot</strong> the data so that each row represents temperatures for a specific month, and each city is a separate column.</p><p>The result format is in the following example.</p><blockquote><p><strong>Example 1:</strong></p><p><strong>Input:</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+--------------+----------+-------------+
| city         | month    | temperature |
+--------------+----------+-------------+
| Jacksonville | January  | 13          |
| Jacksonville | February | 23          |
| Jacksonville | March    | 38          |
| Jacksonville | April    | 5           |
| Jacksonville | May      | 34          |
| ElPaso       | January  | 20          |
| ElPaso       | February | 6           |
| ElPaso       | March    | 26          |
| ElPaso       | April    | 2           |
| ElPaso       | May      | 43          |
+--------------+----------+-------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Output:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+----------+--------+--------------+
| month    | ElPaso | Jacksonville |
+----------+--------+--------------+
| April    | 2      | 5            |
| February | 6      | 23           |
| January  | 20     | 13           |
| March    | 26     | 38           |
| May      | 43     | 34           |
+----------+--------+--------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Explanation: The table is pivoted, each column represents a city, and each row represents a specific month.</p></blockquote><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><blockquote><p>DataFrame weather</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-------------+--------+
| Column Name | Type   |
+-------------+--------+
| city        | object |
| month       | object |
| temperature | int    |
+-------------+--------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p>编写一个解决方案，以便将数据 <strong>旋转</strong> ，使得每一行代表特定月份的温度，而每个城市都是一个单独的列。</p><p>输出结果格式如下示例所示。</p><p><strong>示例 1:</strong></p><blockquote><p><strong>输入：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+--------------+----------+-------------+
| city         | month    | temperature |
+--------------+----------+-------------+
| Jacksonville | January  | 13          |
| Jacksonville | February | 23          |
| Jacksonville | March    | 38          |
| Jacksonville | April    | 5           |
| Jacksonville | May      | 34          |
| ElPaso       | January  | 20          |
| ElPaso       | February | 6           |
| ElPaso       | March    | 26          |
| ElPaso       | April    | 2           |
| ElPaso       | May      | 43          |
+--------------+----------+-------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+----------+--------+--------------+
| month    | ElPaso | Jacksonville |
+----------+--------+--------------+
| April    | 2      | 5            |
| February | 6      | 23           |
| January  | 20     | 13           |
| March    | 26     | 38           |
| May      | 43     | 34           |
+----------+--------+--------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>解释：</strong> 表格被旋转，每一列代表一个城市，每一行代表特定的月份。</p></blockquote><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ul><li>在 Pandas 中，可以使用 <code>pivot_table()</code> 方法对数据进行透视，重新组织 DataFrame。</li><li>透视表通过指定行（<code>index</code>）、列（<code>columns</code>）、值（<code>values</code>）和聚合函数（<code>aggfunc</code>）来对数据进行分组和聚合。</li></ul><ol><li><strong>设置行索引 (<code>index</code>)</strong>： <ul><li>使用 <code>&#39;month&#39;</code> 列作为透视表的行索引，每一行表示一个月份。</li></ul></li><li><strong>设置列索引 (<code>columns</code>)</strong>： <ul><li>使用 <code>&#39;city&#39;</code> 列作为透视表的列索引，每一列表示一个城市。</li></ul></li><li><strong>设置值 (<code>values</code>)</strong>： <ul><li>使用 <code>&#39;temperature&#39;</code> 列作为需要聚合的值。</li></ul></li><li><strong>指定聚合函数 (<code>aggfunc</code>)</strong>： <ul><li>使用 <code>max</code> 聚合函数，表示计算每个月每个城市的最高温度。</li></ul></li></ol><ul><li>返回的是一个透视后的 DataFrame，其中行表示月份，列表示城市，值为每个城市在对应月份的最高温度。</li></ul><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是 DataFrame 的行数。<code>pivot_table()</code> 需要遍历数据以分组并计算聚合值。</li><li><strong>空间复杂度</strong>：<code>O(m * c)</code>，其中 <code>m</code> 是唯一的 <code>month</code> 数量，<code>c</code> 是唯一的 <code>city</code> 数量，需要为生成的透视表分配内存。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> pandas <span class="token keyword">as</span> pd

<span class="token keyword">def</span> <span class="token function">pivotTable</span><span class="token punctuation">(</span>weather<span class="token punctuation">:</span> pd<span class="token punctuation">.</span>DataFrame<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> pd<span class="token punctuation">.</span>DataFrame<span class="token punctuation">:</span>
  <span class="token keyword">return</span> weather<span class="token punctuation">.</span>pivot_table<span class="token punctuation">(</span>index<span class="token operator">=</span><span class="token string">&#39;month&#39;</span><span class="token punctuation">,</span> columns<span class="token operator">=</span><span class="token string">&#39;city&#39;</span><span class="token punctuation">,</span> values<span class="token operator">=</span><span class="token string">&#39;temperature&#39;</span><span class="token punctuation">,</span> aggfunc<span class="token operator">=</span><span class="token string">&#39;max&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,19);function k(x,y){const l=i("font"),s=i("ExternalLinkIcon");return t(),o("div",null,[v,e("p",null,[n("🟢 "),a(l,{color:"#15bd66"},{default:r(()=>[n("Easy")]),_:1}),n("  🔗 "),e("a",p,[m,a(s)]),n(),e("a",b,[h,a(s)])]),g])}const f=d(u,[["render",k],["__file","2889.html.vue"]]);export{f as default};
