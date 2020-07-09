(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{356:function(t,s,a){"use strict";a.r(s);var e=a(1),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"vuepress-的配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-的配置"}},[t._v("#")]),t._v(" Vuepress 的配置")]),t._v(" "),a("p",[t._v("位于docs/.vuepress/config.js")]),t._v(" "),a("h3",{attrs:{id:"base"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#base"}},[t._v("#")]),t._v(" base")]),t._v(" "),a("ul",[a("li",[t._v("类型: "),a("code",[t._v("string")])]),t._v(" "),a("li",[t._v("默认值: "),a("code",[t._v("/")])])]),t._v(" "),a("p",[t._v("部署站点的基础路径，如果你想让你的网站部署到一个子路径下，你将需要设置它。如 GitHub pages，如果你想将你的网站部署到 "),a("code",[t._v("https://foo.github.io/bar/")]),t._v("，那么 "),a("code",[t._v("base")]),t._v(" 应该被设置成 "),a("code",[t._v('"/bar/"')]),t._v("，它的值应当总是以斜杠开始，并以斜杠结束。")]),t._v(" "),a("p",[a("code",[t._v("base")]),t._v(" 将会作为前缀自动地插入到所有以 "),a("code",[t._v("/")]),t._v(" 开始的其他选项的链接中，所以你只需要指定一次。")]),t._v(" "),a("h3",{attrs:{id:"title"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#title"}},[t._v("#")]),t._v(" title")]),t._v(" "),a("ul",[a("li",[t._v("类型: "),a("code",[t._v("string")])]),t._v(" "),a("li",[t._v("默认值: "),a("code",[t._v("undefined")]),t._v("\n网站的标题，它将会被用作所有页面标题的前缀，同时，默认主题下，它将显示在导航栏（navbar）上。")])]),t._v(" "),a("h3",{attrs:{id:"head"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#head"}},[t._v("#")]),t._v(" head")]),t._v(" "),a("ul",[a("li",[t._v("类型: "),a("code",[t._v("Array")])]),t._v(" "),a("li",[t._v("默认值: "),a("code",[t._v("[]")]),t._v("\n额外的需要被注入到当前页面的 HTML "),a("code",[t._v("<head>")]),t._v(" 中的标签，每个标签都可以以 "),a("code",[t._v("[tagName, { attrName: attrValue }, innerHTML?]")]),t._v(" 的格式指定，举个例子，增加一个自定义的 favicon：")])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    head"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'link'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            rel"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'icon'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            href"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/logo.png'")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"port"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#port"}},[t._v("#")]),t._v(" port")]),t._v(" "),a("ul",[a("li",[t._v("类型: "),a("code",[t._v("number")])]),t._v(" "),a("li",[t._v("默认值: "),a("code",[t._v("8080")])])]),t._v(" "),a("p",[t._v("指定 dev server 的端口。")]),t._v(" "),a("h3",{attrs:{id:"dest"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dest"}},[t._v("#")]),t._v(" dest")]),t._v(" "),a("ul",[a("li",[t._v("类型: "),a("code",[t._v("string")])]),t._v(" "),a("li",[t._v("默认值: "),a("code",[t._v(".vuepress/dist")])])]),t._v(" "),a("p",[t._v("指定 "),a("code",[t._v("vuepress build")]),t._v(" 的输出目录。如果传入的是相对路径，则会基于 "),a("code",[t._v("process.cwd()")]),t._v(" 进行解析。")]),t._v(" "),a("p",[t._v("具体更多查阅"),a("a",{attrs:{href:"https://vuepress.vuejs.org/zh/config/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://vuepress.vuejs.org/zh/config/"),a("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=r.exports}}]);