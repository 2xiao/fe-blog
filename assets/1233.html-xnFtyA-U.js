import{_ as r,r as e,o as d,c as k,a as n,b as t,d as o,w as s,e as b}from"./app-MXSjQbID.js";const m={},q=n("h1",{id:"_1233-删除子文件夹",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1233-删除子文件夹","aria-hidden":"true"},"#"),t(" 1233. 删除子文件夹")],-1),f=n("code",null,"深度优先搜索",-1),h=n("code",null,"字典树",-1),g=n("code",null,"数组",-1),v=n("code",null,"字符串",-1),_={href:"https://leetcode.cn/problems/remove-sub-folders-from-the-filesystem",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"力扣",-1),w={href:"https://leetcode.com/problems/remove-sub-folders-from-the-filesystem",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"LeetCode",-1),j=b('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given a list of folders <code>folder</code>, return <em>the folders after removing all<strong>sub- folders</strong> in those folders</em>. You may return the answer in <strong>any order</strong>.</p><p>If a <code>folder[i]</code> is located within another <code>folder[j]</code>, it is called a <strong>sub- folder</strong> of it. A sub-folder of <code>folder[j]</code> must start with <code>folder[j]</code>, followed by a <code>&quot;/&quot;</code>. For example, <code>&quot;/a/b&quot;</code> is a sub-folder of <code>&quot;/a&quot;</code>, but <code>&quot;/b&quot;</code> is not a sub-folder of <code>&quot;/a/b/c&quot;</code>.</p><p>The format of a path is one or more concatenated strings of the form: <code>&#39;/&#39;</code> followed by one or more lowercase English letters.</p><ul><li>For example, <code>&quot;/leetcode&quot;</code> and <code>&quot;/leetcode/problems&quot;</code> are valid paths while an empty string and <code>&quot;/&quot;</code> are not.</li></ul><p><strong>Example 1:</strong></p><blockquote><p>Input: folder = [&quot;/a&quot;,&quot;/a/b&quot;,&quot;/c/d&quot;,&quot;/c/d/e&quot;,&quot;/c/f&quot;]</p><p>Output: [&quot;/a&quot;,&quot;/c/d&quot;,&quot;/c/f&quot;]</p><p>Explanation: Folders &quot;/a/b&quot; is a subfolder of &quot;/a&quot; and &quot;/c/d/e&quot; is inside of folder &quot;/c/d&quot; in our filesystem.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: folder = [&quot;/a&quot;,&quot;/a/b/c&quot;,&quot;/a/b/d&quot;]</p><p>Output: [&quot;/a&quot;]</p><p>Explanation: Folders &quot;/a/b/c&quot; and &quot;/a/b/d&quot; will be removed because they are subfolders of &quot;/a&quot;.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: folder = [&quot;/a/b/c&quot;,&quot;/a/b/ca&quot;,&quot;/a/b/d&quot;]</p><p>Output: [&quot;/a/b/c&quot;,&quot;/a/b/ca&quot;,&quot;/a/b/d&quot;]</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= folder.length &lt;= 4 * 10^4</code></li><li><code>2 &lt;= folder[i].length &lt;= 100</code></li><li><code>folder[i]</code> contains only lowercase letters and <code>&#39;/&#39;</code>.</li><li><code>folder[i]</code> always starts with the character <code>&#39;/&#39;</code>.</li><li>Each folder name is <strong>unique</strong>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>你是一位系统管理员，手里有一份文件夹列表 <code>folder</code>，你的任务是要删除该列表中的所有 <strong>子文件夹</strong> ，并以 <strong>任意顺序</strong> 返回剩下的文件夹。</p><p>如果文件夹 <code>folder[i]</code> 位于另一个文件夹 <code>folder[j]</code> 下，那么 <code>folder[i]</code> 就是 <code>folder[j]</code> 的 <strong>子文件夹</strong> 。<code>folder[j]</code> 的子文件夹必须以 <code>folder[j]</code> 开头，后跟一个 <code>&quot;/&quot;</code>。例如，<code>&quot;/a/b&quot;</code> 是 <code>&quot;/a&quot;</code> 的一个子文件夹，但 <code>&quot;/b&quot;</code> 不是 <code>&quot;/a/b/c&quot;</code> 的一个子文件夹。</p><p>文件夹的「路径」是由一个或多个按以下格式串联形成的字符串：&#39;/&#39; 后跟一个或者多个小写英文字母。</p><ul><li>例如，<code>&quot;/leetcode&quot;</code> 和 <code>&quot;/leetcode/problems&quot;</code> 都是有效的路径，而空字符串和 <code>&quot;/&quot;</code> 不是。</li></ul><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> folder = [&quot;/a&quot;,&quot;/a/b&quot;,&quot;/c/d&quot;,&quot;/c/d/e&quot;,&quot;/c/f&quot;]</p><p><strong>输出：</strong>[&quot;/a&quot;,&quot;/c/d&quot;,&quot;/c/f&quot;]</p><p><strong>解释：</strong> &quot;/a/b&quot; 是 &quot;/a&quot; 的子文件夹，而 &quot;/c/d/e&quot; 是 &quot;/c/d&quot; 的子文件夹。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> folder = [&quot;/a&quot;,&quot;/a/b/c&quot;,&quot;/a/b/d&quot;]</p><p><strong>输出：</strong>[&quot;/a&quot;]</p><p><strong>解释：</strong> 文件夹 &quot;/a/b/c&quot; 和 &quot;/a/b/d&quot; 都会被删除，因为它们都是 &quot;/a&quot; 的子文件夹。</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入:</strong> folder = [&quot;/a/b/c&quot;,&quot;/a/b/ca&quot;,&quot;/a/b/d&quot;]</p><p><strong>输出:</strong> [&quot;/a/b/c&quot;,&quot;/a/b/ca&quot;,&quot;/a/b/d&quot;]</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= folder.length &lt;= 4 * 10^4</code></li><li><code>2 &lt;= folder[i].length &lt;= 100</code></li><li><code>folder[i]</code> 只包含小写字母和 <code>&#39;/&#39;</code></li><li><code>folder[i]</code> 总是以字符 <code>&#39;/&#39;</code> 起始</li><li><code>folder</code> 每个元素都是 <strong>唯一</strong> 的</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><h3 id="思路一-前缀树" tabindex="-1"><a class="header-anchor" href="#思路一-前缀树" aria-hidden="true">#</a> 思路一：前缀树</h3><p>可以利用「前缀树（Trie）」的数据结构来高效地识别和去除子文件夹，通过前缀树来构建文件夹结构，然后根据构建的树来输出没有子文件夹的路径。</p><ol><li><strong>构建前缀树</strong>：遍历文件夹列表 <code>folder</code>，将每个路径插入前缀树。若发现一个路径的父节点已经被标记为叶子节点，则跳过该路径，因为它是一个子文件夹。</li><li><strong>标记叶子节点</strong>：在插入每个文件夹路径时，如果某路径成为叶子节点，表示它是当前的最上级父文件夹，可以清除这个路径的其他子文件夹路径。</li><li><strong>遍历前缀树，提取文件夹路径</strong>：深度优先遍历前缀树，通过前缀树中的叶子节点获取所有没有子文件夹的父文件夹路径。</li></ol><p>这种方法的优点是直接在构建过程中判断和过滤子文件夹，避免了排序操作；缺点是构造前缀树结构稍显复杂，但它在文件夹路径较长或排序操作成本较高时具有更优的性能。</p><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n * m)</code>，其中 <code>n</code> 是文件夹数量，<code>m</code> 是每个文件夹路径的平均长度。</li><li><strong>空间复杂度</strong>：<code>O(n * m)</code>，构建前缀树需要 <code>O(n * m)</code> 的空间。</li></ul><h3 id="思路二-排序" tabindex="-1"><a class="header-anchor" href="#思路二-排序" aria-hidden="true">#</a> 思路二：排序</h3><ol><li><p>首先对 <code>folder</code> 数组进行字典顺序排序（也就是通常的字符串排序），这样可以确保如果某个文件夹是其他文件夹的子文件夹，那么父文件夹必然会在子文件夹之前。</p></li><li><p>遍历排序后的文件夹列表，筛选出父文件夹：</p><ul><li>初始化一个结果数组 <code>res</code>，一个 <code>lastPath</code> 参数用于记录上一个路径。</li><li>开始逐个检查每个路径 <code>path</code> 是否为 <code>lastPath</code> 的子文件夹，判断方法是：<code>path.startsWith(lastPath + &#39;/&#39;)</code>。</li><li>如果 <code>path</code> 不是 <code>lastPath</code> 的子文件夹，则将其添加到 <code>res</code> 中，并更新 <code>lastPath</code> 为 <code>path</code>。</li></ul></li><li><p>经过上述筛选，<code>res</code> 中的每个文件夹路径都不是其他路径的子文件夹，直接返回 <code>res</code> 作为最终结果。</p></li></ol><h4 id="复杂度分析-1" tabindex="-1"><a class="header-anchor" href="#复杂度分析-1" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n log n)</code>，其中 <code>n</code> 是文件夹的数量，主要开销在对 <code>folder</code> 数组进行排序。</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，用于存储结果数组，最坏情况下（当所有文件夹都是独立的，没有子文件夹），<code>res</code> 的长度与输入数组相同。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>',38),E=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[t(`/**
 * `),n("span",{class:"token keyword"},"@param"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("string"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),t(),n("span",{class:"token parameter"},"folder"),t(`
 * `),n("span",{class:"token keyword"},"@return"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("string"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),t(`
 */`)]),t(`
`),n("span",{class:"token keyword"},"var"),t(),n("span",{class:"token function-variable function"},"removeSubfolders"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"folder"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
	`),n("span",{class:"token keyword"},"let"),t(" tire "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token comment"},"// 将文件夹路径插入前缀树"),t(`
	`),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" str "),n("span",{class:"token keyword"},"of"),t(" folder"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
		`),n("span",{class:"token keyword"},"let"),t(" cur "),n("span",{class:"token operator"},"="),t(" tire"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" char "),n("span",{class:"token keyword"},"of"),t(" str"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"split"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'/'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
			`),n("span",{class:"token comment"},"// 如果已经是叶子节点，当前路径为子文件夹，直接 break"),t(`
			`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("cur"),n("span",{class:"token punctuation"},"."),t("isEnd "),n("span",{class:"token operator"},"=="),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
				`),n("span",{class:"token keyword"},"break"),n("span",{class:"token punctuation"},";"),t(`
			`),n("span",{class:"token punctuation"},"}"),t(`
			`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),t("cur"),n("span",{class:"token punctuation"},"["),t("char"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
				cur`),n("span",{class:"token punctuation"},"["),t("char"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
			`),n("span",{class:"token punctuation"},"}"),t(`
			cur `),n("span",{class:"token operator"},"="),t(" cur"),n("span",{class:"token punctuation"},"["),t("char"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token punctuation"},"}"),t(`
		`),n("span",{class:"token comment"},"// 当前路径为叶子节点，清空其他子文件夹路径"),t(`
		Object`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"keys"),n("span",{class:"token punctuation"},"("),t("cur"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"forEach"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"key"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token keyword"},"delete"),t(" cur"),n("span",{class:"token punctuation"},"["),t("key"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token comment"},"// 标记为叶子节点"),t(`
		cur`),n("span",{class:"token punctuation"},"."),t("isEnd "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token punctuation"},"}"),t(`
	`),n("span",{class:"token keyword"},"let"),t(" res "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token comment"},"// 遍历前缀树，收集叶子节点路径"),t(`
	`),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"backtrack"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("root"),n("span",{class:"token punctuation"},","),t(" track")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
		`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("root"),n("span",{class:"token punctuation"},"."),t("isEnd "),n("span",{class:"token operator"},"=="),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
			res`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),t("track"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"join"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'/'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
			`),n("span",{class:"token keyword"},"return"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token punctuation"},"}"),t(`
		`),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" key "),n("span",{class:"token keyword"},"of"),t(" Object"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"keys"),n("span",{class:"token punctuation"},"("),t("root"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
			track`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),t("key"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
			`),n("span",{class:"token function"},"backtrack"),n("span",{class:"token punctuation"},"("),t("root"),n("span",{class:"token punctuation"},"["),t("key"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(" track"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
			track`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"pop"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token punctuation"},"}"),t(`
	`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token function"},"backtrack"),n("span",{class:"token punctuation"},"("),t("tire"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"return"),t(" res"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),O=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[t(`/**
 * `),n("span",{class:"token keyword"},"@param"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("string"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),t(),n("span",{class:"token parameter"},"folder"),t(`
 * `),n("span",{class:"token keyword"},"@return"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("string"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),t(`
 */`)]),t(`
`),n("span",{class:"token keyword"},"var"),t(),n("span",{class:"token function-variable function"},"removeSubfolders"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"folder"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
	`),n("span",{class:"token comment"},"// 对 folder 数组进行字典顺序排序"),t(`
	folder`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"sort"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"let"),t(" res "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
		lastPath `),n("span",{class:"token operator"},"="),t(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),t("path "),n("span",{class:"token keyword"},"of"),t(" folder"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
		`),n("span",{class:"token comment"},"// 比较 path 是不是 lastPath 的子文件夹"),t(`
		`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),t("lastPath "),n("span",{class:"token operator"},"||"),t(),n("span",{class:"token operator"},"!"),t("path"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"startsWith"),n("span",{class:"token punctuation"},"("),t("lastPath "),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token string"},"'/'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
			res`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),t("path"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
			lastPath `),n("span",{class:"token operator"},"="),t(" path"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token punctuation"},"}"),t(`
	`),n("span",{class:"token punctuation"},"}"),t(`
	`),n("span",{class:"token keyword"},"return"),t(" res"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function P(C,I){const p=e("font"),a=e("RouterLink"),u=e("ExternalLinkIcon"),i=e("CodeTabs");return d(),k("div",null,[q,n("p",null,[t("🟠 "),o(p,{color:"#ffb800"},{default:s(()=>[t("Medium")]),_:1}),t("  🔖  "),o(a,{to:"/tag/depth-first-search.html"},{default:s(()=>[f]),_:1}),t(),o(a,{to:"/tag/trie.html"},{default:s(()=>[h]),_:1}),t(),o(a,{to:"/tag/array.html"},{default:s(()=>[g]),_:1}),t(),o(a,{to:"/tag/string.html"},{default:s(()=>[v]),_:1}),t("  🔗 "),n("a",_,[y,o(u)]),t(),n("a",w,[x,o(u)])]),j,o(i,{id:"281",data:[{id:"前缀树"},{id:"排序"}]},{title0:s(({value:c,isActive:l})=>[t("前缀树")]),title1:s(({value:c,isActive:l})=>[t("排序")]),tab0:s(({value:c,isActive:l})=>[E]),tab1:s(({value:c,isActive:l})=>[O]),_:1})])}const L=r(m,[["render",P],["__file","1233.html.vue"]]);export{L as default};
