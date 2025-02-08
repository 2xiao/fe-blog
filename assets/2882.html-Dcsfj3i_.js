import{_ as d,r as s,o as c,c as o,a as e,b as n,d as a,w as t,e as r}from"./app-totCBmv-.js";const m={},u=e("h1",{id:"_2882-删去重复的行",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_2882-删去重复的行","aria-hidden":"true"},"#"),n(" 2882. 删去重复的行")],-1),p={href:"https://leetcode.cn/problems/drop-duplicate-rows",target:"_blank",rel:"noopener noreferrer"},v=e("code",null,"力扣",-1),b={href:"https://leetcode.com/problems/drop-duplicate-rows",target:"_blank",rel:"noopener noreferrer"},h=e("code",null,"LeetCode",-1),x=r(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><blockquote><p>DataFrame <code>customers</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-------------+--------+
| Column Name | Type   |
+-------------+--------+
| customer_id | int    |
| name        | object |
| email       | object |
+-------------+--------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p>There are some duplicate rows in the DataFrame based on the <code>email</code> column.</p><p>Write a solution to remove these duplicate rows and keep only the <strong>first</strong> occurrence.</p><p>The result format is in the following example.</p><blockquote><p><strong>Example 1:</strong></p><p><strong>Input:</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-------------+---------+---------------------+
| customer_id | name    | email               |
+-------------+---------+---------------------+
| 1           | Ella    | emily@example.com   |
| 2           | David   | michael@example.com |
| 3           | Zachary | sarah@example.com   |
| 4           | Alice   | john@example.com    |
| 5           | Finn    | john@example.com    |
| 6           | Violet  | alice@example.com   |
+-------------+---------+---------------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Output:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-------------+---------+---------------------+
| customer_id | name    | email               |
+-------------+---------+---------------------+
| 1           | Ella    | emily@example.com   |
| 2           | David   | michael@example.com |
| 3           | Zachary | sarah@example.com   |
| 4           | Alice   | john@example.com    |
| 6           | Violet  | alice@example.com   |
+-------------+---------+---------------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Explanation:</p><p>Alic (customer_id = 4) and Finn (customer_id = 5) both use john@example.com, so only the first occurrence of this email is retained.</p></blockquote><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><blockquote><p>DataFrame <code>customers</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-------------+--------+
| Column Name | Type   |
+-------------+--------+
| customer_id | int    |
| name        | object |
| email       | object |
+-------------+--------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p>在 DataFrame 中基于 <code>email</code> 列存在一些重复行。</p><p>编写一个解决方案，删除这些重复行，仅保留第一次出现的行。</p><p>返回结果格式如下例所示。</p><p><strong>示例 1:</strong></p><blockquote><p><strong>输入：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-------------+---------+---------------------+
| customer_id | name    | email               |
+-------------+---------+---------------------+
| 1           | Ella    | emily@example.com   |
| 2           | David   | michael@example.com |
| 3           | Zachary | sarah@example.com   |
| 4           | Alice   | john@example.com    |
| 5           | Finn    | john@example.com    |
| 6           | Violet  | alice@example.com   |
+-------------+---------+---------------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-------------+---------+---------------------+
| customer_id | name    | email               |
+-------------+---------+---------------------+
| 1           | Ella    | emily@example.com   |
| 2           | David   | michael@example.com |
| 3           | Zachary | sarah@example.com   |
| 4           | Alice   | john@example.com    |
| 6           | Violet  | alice@example.com   |
+-------------+---------+---------------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>解释：</strong></p><p>Alice (customer_id = 4) 和 Finn (customer_id = 5) 都使用 john@example.com，因此只保留该邮箱地址的第一次出现。</p></blockquote><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>去重操作</strong>：</p><ul><li>Pandas 提供了 <code>drop_duplicates</code> 方法，支持根据指定列去重。</li><li>调用 <code>customers.drop_duplicates(subset=&#39;email&#39;)</code>，表示以 <code>email</code> 列为基准，自动检测并去掉 <code>email</code> 列中的重复记录，保留每组重复值的第一条记录。</li></ul></li><li><p><strong>返回新 DataFrame</strong>：</p><ul><li><code>drop_duplicates</code> 不修改原 DataFrame，而是返回去重后的新 DataFrame。</li><li>如果希望对原 DataFrame 就地修改，需显式传递 <code>inplace=True</code> 参数。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是行数，去重操作需要对 <code>email</code> 列进行遍历和哈希检查。</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，去重操作需要一个临时哈希。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> pandas <span class="token keyword">as</span> pd

<span class="token keyword">def</span> <span class="token function">dropDuplicateEmails</span><span class="token punctuation">(</span>customers<span class="token punctuation">:</span> pd<span class="token punctuation">.</span>DataFrame<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> pd<span class="token punctuation">.</span>DataFrame<span class="token punctuation">:</span>
  <span class="token keyword">return</span> customers<span class="token punctuation">.</span>drop_duplicates<span class="token punctuation">(</span><span class="token string">&#39;email&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,19);function g(_,k){const l=s("font"),i=s("ExternalLinkIcon");return c(),o("div",null,[u,e("p",null,[n("🟢 "),a(l,{color:"#15bd66"},{default:t(()=>[n("Easy")]),_:1}),n("  🔗 "),e("a",p,[v,a(i)]),n(),e("a",b,[h,a(i)])]),x])}const y=d(m,[["render",g],["__file","2882.html.vue"]]);export{y as default};
