import{_ as t,r as d,o as c,c as r,a as e,b as n,d as i,w as l,e as u}from"./app-UFGGnKWA.js";const v={},p=e("h1",{id:"_1378-使用唯一标识码替换员工-id",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1378-使用唯一标识码替换员工-id","aria-hidden":"true"},"#"),n(" 1378. 使用唯一标识码替换员工 ID")],-1),m=e("code",null,"数据库",-1),b={href:"https://leetcode.cn/problems/replace-employee-id-with-the-unique-identifier",target:"_blank",rel:"noopener noreferrer"},h=e("code",null,"力扣",-1),g={href:"https://leetcode.com/problems/replace-employee-id-with-the-unique-identifier",target:"_blank",rel:"noopener noreferrer"},x=e("code",null,"LeetCode",-1),_=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Table: <code>Employees</code></p><blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+---------------+---------+
| Column Name   | Type    |
+---------------+---------+
| id            | int     |
| name          | varchar |
+---------------+---------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>id is the primary key (column with unique values) for this table.</p><p>Each row of this table contains the id and the name of an employee in a company.</p></blockquote><p>Table: <code>EmployeeUNI</code></p><blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+---------------+---------+
| Column Name   | Type    |
+---------------+---------+
| id            | int     |
| unique_id     | int     |
+---------------+---------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(id, unique_id) is the primary key (combination of columns with unique values) for this table.</p><p>Each row of this table contains the id and the corresponding unique id of an employee in the company.</p></blockquote><p>Write a solution to show the <strong>unique ID</strong> of each user, If a user does not have a unique ID replace just show <code>null</code>.</p><p>Return the result table in <strong>any</strong> order.</p><p>The result format is in the following example.</p><p><strong>Example 1:</strong></p><blockquote><p>Input:</p><p>Employees table:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+----+----------+
| id | name     |
+----+----------+
| 1  | Alice    |
| 7  | Bob      |
| 11 | Meir     |
| 90 | Winston  |
| 3  | Jonathan |
+----+----------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>EmployeeUNI table:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+----+-----------+
| id | unique_id |
+----+-----------+
| 3  | 1         |
| 11 | 2         |
| 90 | 3         |
+----+-----------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Output:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------+----------+
| unique_id | name |
+-----------+----------+
| null | Alice |
| null | Bob |
| 2 | Meir |
| 3 | Winston |
| 1 | Jonathan |
+-----------+----------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Explanation:</p><p>Alice and Bob do not have a unique ID, We will show null instead.</p><p>The unique ID of Meir is 2.</p><p>The unique ID of Winston is 3.</p><p>The unique ID of Jonathan is 1.</p></blockquote><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p><code>Employees</code> 表：</p><blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+---------------+---------+
| Column Name   | Type    |
+---------------+---------+
| id            | int     |
| name          | varchar |
+---------------+---------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 SQL 中，id 是这张表的主键。</p><p>这张表的每一行分别代表了某公司其中一位员工的名字和 ID 。</p></blockquote><p><code>EmployeeUNI</code> 表：</p><blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+---------------+---------+
| Column Name   | Type    |
+---------------+---------+
| id            | int     |
| unique_id     | int     |
+---------------+---------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 SQL 中，(id, unique_id) 是这张表的主键。</p><p>这张表的每一行包含了该公司某位员工的 ID 和他的唯一标识码（unique ID）。</p></blockquote><p>展示每位用户的<strong>唯一标识码（unique ID ）</strong> ；如果某位员工没有唯一标识码，使用 null 填充即可。</p><p>你可以以<strong>任意</strong> 顺序返回结果表。</p><p>返回结果的格式如下例所示。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong></p><p>Employees 表:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+----+----------+
| id | name     |
+----+----------+
| 1  | Alice    |
| 7  | Bob      |
| 11 | Meir     |
| 90 | Winston  |
| 3  | Jonathan |
+----+----------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>EmployeeUNI 表:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+----+-----------+
| id | unique_id |
+----+-----------+
| 3  | 1         |
| 11 | 2         |
| 90 | 3         |
+----+-----------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------+----------+
| unique_id | name |
+-----------+----------+
| null | Alice |
| null | Bob |
| 2 | Meir |
| 3 | Winston |
| 1 | Jonathan |
+-----------+----------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>解释：</strong></p><p>Alice and Bob 没有唯一标识码, 因此我们使用 null 替代。</p><p>Meir 的唯一标识码是 2 。</p><p>Winston 的唯一标识码是 3 。</p><p>Jonathan 唯一标识码是 1 。</p></blockquote><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>返回字段</strong>：<br> 使用 <code>SELECT</code> 指定要返回的字段：</p><ul><li><code>eu.unique_id</code> 用于标识员工的唯一编号。</li><li><code>e.name</code> 员工名称。</li></ul></li><li><p><strong>表来源与连接</strong>：</p><ul><li>数据来源于两个表：<code>Employees</code> 表和 <code>EmployeeUNI</code> 表。</li><li>使用 <code>LEFT JOIN</code> 将两张表连接，确保 <code>Employees</code> 表中的所有记录都会包含在结果中，即使在 <code>EmployeeUNI</code> 表中没有对应的 <code>unique_id</code>。</li><li>连接条件为 <code>e.id = eu.id</code>，即通过两表的 <code>id</code> 字段关联。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n + m)</code>，其中 <code>n</code> 是 <code>Employees</code> 表的记录数，<code>m</code> 是 <code>EmployeeUNI</code> 表的记录数。连接操作需要遍历两张表的记录以完成匹配。</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，返回结果的空间消耗与 <code>Employees</code> 表的记录数成正比，因为 <code>LEFT JOIN</code> 确保所有员工记录都在结果中。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> eu<span class="token punctuation">.</span>unique_id<span class="token punctuation">,</span> e<span class="token punctuation">.</span>name
<span class="token keyword">FROM</span> Employees e
<span class="token keyword">LEFT</span> <span class="token keyword">JOIN</span> EmployeeUNI eu
<span class="token keyword">ON</span> e<span class="token punctuation">.</span>id <span class="token operator">=</span> eu<span class="token punctuation">.</span>id
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,26);function q(k,y){const a=d("font"),o=d("RouterLink"),s=d("ExternalLinkIcon");return c(),r("div",null,[p,e("p",null,[n("🟢 "),i(a,{color:"#15bd66"},{default:l(()=>[n("Easy")]),_:1}),n("  🔖  "),i(o,{to:"/tag/database.html"},{default:l(()=>[m]),_:1}),n("  🔗 "),e("a",b,[h,i(s)]),n(),e("a",g,[x,i(s)])]),_])}const E=t(v,[["render",q],["__file","1378.html.vue"]]);export{E as default};
