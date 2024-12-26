import{_ as i,r as l,o as r,c as p,a as n,b as e,d as t,w as s,f as d,e as u}from"./app-3dvbhwow.js";const h={},_=n("h1",{id:"_297-二叉树的序列化与反序列化",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_297-二叉树的序列化与反序列化","aria-hidden":"true"},"#"),e(" 297. 二叉树的序列化与反序列化")],-1),k=n("code",null,"树",-1),f=n("code",null,"深度优先搜索",-1),m=n("code",null,"广度优先搜索",-1),g=n("code",null,"设计",-1),b=n("code",null,"字符串",-1),v=n("code",null,"二叉树",-1),y={href:"https://leetcode.cn/problems/serialize-and-deserialize-binary-tree",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"力扣",-1),w={href:"https://leetcode.com/problems/serialize-and-deserialize-binary-tree",target:"_blank",rel:"noopener noreferrer"},z=n("code",null,"LeetCode",-1),N=n("h2",{id:"题目",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#题目","aria-hidden":"true"},"#"),e(" 题目")],-1),T=n("p",null,"Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.",-1),O=n("p",null,"Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure.",-1),C=n("strong",null,"Clarification:",-1),j={href:"https://leetcode.com/faq/#binary-tree",target:"_blank",rel:"noopener noreferrer"},q=u(`<p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/09/15/serdeser.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: root = [1,2,3,null,null,4,5]</p><p>Output: [1,2,3,null,null,4,5]</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: root = []</p><p>Output: []</p></blockquote><p><strong>Constraints:</strong></p><ul><li>The number of nodes in the tree is in the range <code>[0, 10^4]</code>.</li><li><code>-1000 &lt;= Node.val &lt;= 1000</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>设计一个算法，来序列化和反序列化二叉树。并不限制如何进行序列化和反序列化，但是你需要保证二叉树可以序列化为字符串，并且这个字符串可以被反序列化成原有的二叉树。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li>序列化其实就是二叉树的遍历，顺手把遍历的结果转化成字符串的形式；</li><li>反序列化就是二叉树的还原，把序列化字符串还原成二叉树；</li><li>以前序遍历为例，前序遍历的特点是根节点在开头，然后是左子树的前序遍历结果，然后是右子树的前序遍历结果；</li><li>序列化时，不存在的结点用 <code>null</code> 填充，左右子树之间用 <code>&#39;,&#39;</code> 分割；</li><li>反序列化过程中，首先将序列化字符串按逗号进行切分，得到一个节点值的列表。然后，通过递归地从这个列表中取值，构建二叉树。反序列化的过程中，每次取第一个值即为当前节点的值，然后递归构建左子树和右子树。</li></ol><h3 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h3><ol><li><p><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是二叉树的节点数量。</p><ul><li><strong><code>serialize</code> 函数</strong>：对每个节点递归调用一次，因此每个节点被访问一次。</li><li><strong><code>deserialize</code> 函数</strong>：通过递归从数组构建二叉树，类似于前序遍历。每个节点会被递归处理一次。</li></ul></li><li><p><strong>空间复杂度</strong>：<code>O(n)</code></p><ul><li><p><strong><code>serialize</code> 函数</strong>：<code>O(n)</code></p><ul><li>递归的调用栈深度同样取决于树的高度，最坏情况下二叉树的高度为 <code>n</code>（链状树），最坏情况下为 <code>O(n)</code>。</li><li>最终生成的字符串的长度大致为 <code>n</code>（每个节点值加上分隔符）。</li></ul></li><li><p><strong><code>deserialize</code> 函数</strong>：<code>O(n)</code></p><ul><li>递归的调用栈深度同样取决于树的高度，最坏情况下为 <code>O(n)</code>。</li><li>存储拆分后的 <code>nodes</code> 数组占用的空间为 <code>O(n)</code>。</li></ul></li></ul></li></ol><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * Encodes a tree to a single string.
 *
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span> <span class="token parameter">root</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">serialize</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>root<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token string">&#39;null&#39;</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token function">serialize</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> right <span class="token operator">=</span> <span class="token function">serialize</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> root<span class="token punctuation">.</span>val <span class="token operator">+</span> <span class="token string">&#39;,&#39;</span> <span class="token operator">+</span> left <span class="token operator">+</span> <span class="token string">&#39;,&#39;</span> <span class="token operator">+</span> right<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * Decodes your encoded data to tree.
 *
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">data</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">deserialize</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> <span class="token function-variable function">buildTree</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">nodes</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> val <span class="token operator">=</span> nodes<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>val <span class="token operator">==</span> <span class="token string">&#39;null&#39;</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
		<span class="token keyword">let</span> root <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TreeNode</span><span class="token punctuation">(</span><span class="token function">Number</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		root<span class="token punctuation">.</span>left <span class="token operator">=</span> <span class="token function">buildTree</span><span class="token punctuation">(</span>nodes<span class="token punctuation">)</span><span class="token punctuation">;</span>
		root<span class="token punctuation">.</span>right <span class="token operator">=</span> <span class="token function">buildTree</span><span class="token punctuation">(</span>nodes<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">return</span> root<span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>

	<span class="token keyword">const</span> nodes <span class="token operator">=</span> data<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;,&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token function">buildTree</span><span class="token punctuation">(</span>nodes<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,16),E=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),L=n("td",{style:{"text-align":"center"}},"271",-1),V=n("td",{style:{"text-align":"left"}},"字符串的编码与解码 🔒",-1),I=n("td",{style:{"text-align":"center"}},null,-1),B={style:{"text-align":"left"}},D=n("code",null,"设计",-1),R=n("code",null,"数组",-1),S=n("code",null,"字符串",-1),Y=n("td",{style:{"text-align":"center"}},"🟠",-1),H={style:{"text-align":"center"}},A={href:"https://leetcode.cn/problems/encode-and-decode-strings",target:"_blank",rel:"noopener noreferrer"},F={href:"https://leetcode.com/problems/encode-and-decode-strings",target:"_blank",rel:"noopener noreferrer"},G=n("td",{style:{"text-align":"center"}},"428",-1),J=n("td",{style:{"text-align":"left"}},"序列化和反序列化 N 叉树 🔒",-1),K=n("td",{style:{"text-align":"center"}},null,-1),M={style:{"text-align":"left"}},P=n("code",null,"树",-1),Q=n("code",null,"深度优先搜索",-1),U=n("code",null,"广度优先搜索",-1),W=n("code",null,"1+",-1),X=n("td",{style:{"text-align":"center"}},"🔴",-1),Z={style:{"text-align":"center"}},$={href:"https://leetcode.cn/problems/serialize-and-deserialize-n-ary-tree",target:"_blank",rel:"noopener noreferrer"},nn={href:"https://leetcode.com/problems/serialize-and-deserialize-n-ary-tree",target:"_blank",rel:"noopener noreferrer"},en=n("td",{style:{"text-align":"center"}},"449",-1),tn=n("td",{style:{"text-align":"left"}},"序列化和反序列化二叉搜索树",-1),sn=n("td",{style:{"text-align":"center"}},null,-1),an={style:{"text-align":"left"}},on=n("code",null,"树",-1),ln=n("code",null,"深度优先搜索",-1),cn=n("code",null,"广度优先搜索",-1),rn=n("code",null,"4+",-1),pn=n("td",{style:{"text-align":"center"}},"🟠",-1),dn={style:{"text-align":"center"}},un={href:"https://leetcode.cn/problems/serialize-and-deserialize-bst",target:"_blank",rel:"noopener noreferrer"},hn={href:"https://leetcode.com/problems/serialize-and-deserialize-bst",target:"_blank",rel:"noopener noreferrer"},_n=n("td",{style:{"text-align":"center"}},"652",-1),kn=n("td",{style:{"text-align":"left"}},"寻找重复的子树",-1),fn=n("td",{style:{"text-align":"center"}},null,-1),mn={style:{"text-align":"left"}},gn=n("code",null,"树",-1),bn=n("code",null,"深度优先搜索",-1),vn=n("code",null,"哈希表",-1),yn=n("code",null,"1+",-1),xn=n("td",{style:{"text-align":"center"}},"🟠",-1),wn={style:{"text-align":"center"}},zn={href:"https://leetcode.cn/problems/find-duplicate-subtrees",target:"_blank",rel:"noopener noreferrer"},Nn={href:"https://leetcode.com/problems/find-duplicate-subtrees",target:"_blank",rel:"noopener noreferrer"};function Tn(On,Cn){const c=l("font"),a=l("RouterLink"),o=l("ExternalLinkIcon");return r(),p("div",null,[_,n("p",null,[e("🔴 "),t(c,{color:"#ff334b"},{default:s(()=>[e("Hard")]),_:1}),e("  🔖  "),t(a,{to:"/tag/tree.html"},{default:s(()=>[k]),_:1}),e(),t(a,{to:"/tag/depth-first-search.html"},{default:s(()=>[f]),_:1}),e(),t(a,{to:"/tag/breadth-first-search.html"},{default:s(()=>[m]),_:1}),e(),t(a,{to:"/tag/design.html"},{default:s(()=>[g]),_:1}),e(),t(a,{to:"/tag/string.html"},{default:s(()=>[b]),_:1}),e(),t(a,{to:"/tag/binary-tree.html"},{default:s(()=>[v]),_:1}),e("  🔗 "),n("a",y,[x,t(o)]),e(),n("a",w,[z,t(o)])]),N,T,O,n("p",null,[C,e(" The input/output format is the same as "),n("a",j,[e("how LeetCode serializes a binary tree"),t(o)]),e(". You do not necessarily need to follow this format, so please be creative and come up with different approaches yourself.")]),q,d(" prettier-ignore "),n("table",null,[E,n("tbody",null,[n("tr",null,[L,V,I,n("td",B,[t(a,{to:"/tag/design.html"},{default:s(()=>[D]),_:1}),e(),t(a,{to:"/tag/array.html"},{default:s(()=>[R]),_:1}),e(),t(a,{to:"/tag/string.html"},{default:s(()=>[S]),_:1})]),Y,n("td",H,[n("a",A,[e("🀄️"),t(o)]),e(),n("a",F,[e("🔗"),t(o)])])]),n("tr",null,[G,J,K,n("td",M,[t(a,{to:"/tag/tree.html"},{default:s(()=>[P]),_:1}),e(),t(a,{to:"/tag/depth-first-search.html"},{default:s(()=>[Q]),_:1}),e(),t(a,{to:"/tag/breadth-first-search.html"},{default:s(()=>[U]),_:1}),e(),W]),X,n("td",Z,[n("a",$,[e("🀄️"),t(o)]),e(),n("a",nn,[e("🔗"),t(o)])])]),n("tr",null,[en,tn,sn,n("td",an,[t(a,{to:"/tag/tree.html"},{default:s(()=>[on]),_:1}),e(),t(a,{to:"/tag/depth-first-search.html"},{default:s(()=>[ln]),_:1}),e(),t(a,{to:"/tag/breadth-first-search.html"},{default:s(()=>[cn]),_:1}),e(),rn]),pn,n("td",dn,[n("a",un,[e("🀄️"),t(o)]),e(),n("a",hn,[e("🔗"),t(o)])])]),n("tr",null,[_n,kn,fn,n("td",mn,[t(a,{to:"/tag/tree.html"},{default:s(()=>[gn]),_:1}),e(),t(a,{to:"/tag/depth-first-search.html"},{default:s(()=>[bn]),_:1}),e(),t(a,{to:"/tag/hash-table.html"},{default:s(()=>[vn]),_:1}),e(),yn]),xn,n("td",wn,[n("a",zn,[e("🀄️"),t(o)]),e(),n("a",Nn,[e("🔗"),t(o)])])])])])])}const qn=i(h,[["render",Tn],["__file","0297.html.vue"]]);export{qn as default};
