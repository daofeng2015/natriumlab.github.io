(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{218:function(s,t,a){"use strict";a.r(t);var n=a(28),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"消息组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#消息组件"}},[s._v("#")]),s._v(" 消息组件")]),s._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#嗯-什么是消息组件-message-components"}},[s._v("嗯...什么是消息组件(Message Components)?")])]),a("li",[a("a",{attrs:{href:"#为什么会这样"}},[s._v("为什么会这样?")]),a("ul",[a("li",[a("a",{attrs:{href:"#嗯-所以为什么不是-mirai码"}},[s._v('嗯...所以为什么不是 "Mirai码" ?')])])])]),a("li",[a("a",{attrs:{href:"#我可以从哪里找到消息组件"}},[s._v("我可以从哪里找到消息组件?")])]),a("li",[a("a",{attrs:{href:"#基本的使用方式"}},[s._v("基本的使用方式")])]),a("li",[a("a",{attrs:{href:"#图片的发送方式"}},[s._v("图片的发送方式")])]),a("li",[a("a",{attrs:{href:"#qq-表情的发送方式"}},[s._v("QQ 表情的发送方式")])])])]),a("p"),s._v(" "),a("h2",{attrs:{id:"嗯-什么是消息组件-message-components"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#嗯-什么是消息组件-message-components"}},[s._v("#")]),s._v(" 嗯...什么是消息组件(Message Components)?")]),s._v(" "),a("p",[s._v("回到一开始的 "),a("code",[s._v("Hello, world")]),s._v(" 实例中去, 我们会发现, 当我们发送消息时, 需要使用这样一个格式:")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" mirai "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" Plain\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("await")]),s._v(" session"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sendGroupMessage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    group"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Plain"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("text"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Hello, world!"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("注意第三行, 我们使用一个字符串 "),a("code",[s._v('"Hello, world!"')]),s._v(" 作为具名实参 "),a("code",[s._v("text")]),s._v(" 传入到了 "),a("code",[s._v("Plain")]),s._v(" 中,\n并实例化了一个 "),a("code",[s._v("List[Plain]")]),s._v(" 对象."),a("br"),s._v("\n而当我们发出任意私聊消息时, 机器人会发出 "),a("code",[s._v('"Hello, world!"')]),s._v(" 的消息."),a("br"),s._v("\n如果我们将其改为这样:")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Plain"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("text"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Hello, "')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" Plain"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("text"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"world"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" Plain"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("text"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"!"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("若此时, 我们也如之前一样发出任意私聊消息时:")]),s._v(" "),a("panel-view",{attrs:{title:"聊天记录"}},[a("chat-message",{attrs:{nickname:"Alice",color:"#cc0066"}},[s._v("随便打个招呼吧.")]),s._v(" "),a("chat-message",{attrs:{nickname:"Bot",avatar:s.$withBase("/mirai-head.png")}},[s._v("Hello, world!")])],1),s._v(" "),a("p",[s._v("我们会发现, 这和之前是一样的返回.")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),a("p",[s._v("我们会尽量使用浅显易懂的方法, 来解释一些读者可能会抛出的问题."),a("br"),s._v("\n若你对我们的方法表示困惑, 欢迎提出 Issue 或是发起 Pull Request."),a("br"),s._v("\n我们始终欢迎任何形式的贡献.")])]),s._v(" "),a("h2",{attrs:{id:"为什么会这样"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么会这样"}},[s._v("#")]),s._v(" 为什么会这样?")]),s._v(" "),a("p",[s._v("我们将类似 "),a("code",[s._v("Plain")]),s._v(" 这样可以构成一条消息的一部分的模型, 称为 "),a("code",[s._v("消息组件(Message Components)")]),s._v(".")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),a("p",[s._v("你目前所接触的仅仅是冰山一角, 你还可以通过 查看代码 或是 实地演练 的方式对你刚才接触到的东西进行更为深层次的了解."),a("br"),s._v("\n没有不好用的工具, 只有不会用的工匠.")])]),s._v(" "),a("p",[s._v("你发出的消息在 "),a("code",[s._v("mirai")]),s._v(" 内部会被解析为一个或多个部分,\n并且每个部分都有其特殊的用途, 像是 "),a("code",[s._v("@Alice")]),s._v(", "),a("code",[s._v("@全体成员")]),s._v(", 或是\n"),a("code",[s._v("[这里是一张图片,不是什么色图,只是一张图]")]),s._v(", 这样, "),a("code",[s._v("mirai")]),s._v(" 接收到消息, 并将消息序列化为这样的格式.")]),s._v(" "),a("h3",{attrs:{id:"嗯-所以为什么不是-mirai码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#嗯-所以为什么不是-mirai码"}},[s._v("#")]),s._v(' 嗯...所以为什么不是 "Mirai码" ?')]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),a("p",[s._v("如果你之前曾使用过类似 "),a("a",{attrs:{href:"https://cqp.me",target:"_blank",rel:"noopener noreferrer"}},[s._v("酷Q"),a("OutboundLink")],1),s._v(" 这样的无头客户端实现,\n你可能会更加熟悉于类似 "),a("code",[s._v("CQ码")]),s._v(" 的格式."),a("br"),s._v("\n我们将解释这个问题, 并说明我们的用意.")])]),s._v(" "),a("p",[s._v("我们"),a("strong",[s._v("不会")]),s._v("创造什么 "),a("code",[s._v("Mirai码")]),s._v(", 过去没有, 现在没有, 将来也"),a("strong",[s._v("不会")]),s._v("有."),a("br"),s._v("\n出于方便和可用性考虑, 我们并不会去专门设计自己的表现特殊数据的方式,\n相反, 我们使用类似 "),a("a",{attrs:{href:"https://json-schema.org/",target:"_blank",rel:"noopener noreferrer"}},[a("code",[s._v("JSON Schema")]),a("OutboundLink")],1),s._v(" 的方式表现数据.")]),s._v(" "),a("p",[s._v("而这种方式对应用的表达性是有很大提高的:")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 你觉得那种方式更加友好?")]),s._v("\nstring "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"[At::target=123456789] [Image::\\{UIUIUIUIUIUI-UIUI-UIUI-UIUI\\}.jpg]"')]),s._v("\n\nobjective "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    At"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("target"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("123456789")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    Image"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("imageId"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("UUID"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"UIUIUIUIUIUI-UIUI-UIUI-UIUI"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),a("p",[s._v("其实我们还是创造了一种将消息组件转化为文本信息的API,\n但是这种转换是"),a("strong",[s._v("单向")]),s._v("的.")]),s._v(" "),a("p",[s._v("你可以使用 "),a("code",[s._v("MessageChain.toString")]),s._v(" 方法将消息链用文本形式表示,\n同时我们也在各个组件内定义了 "),a("code",[s._v("toString")]),s._v(" 方法, 用于一些判断.")])]),s._v(" "),a("h2",{attrs:{id:"我可以从哪里找到消息组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#我可以从哪里找到消息组件"}},[s._v("#")]),s._v(" 我可以从哪里找到消息组件?")]),s._v(" "),a("p",[s._v("若你只使用 "),a("code",[s._v("python-mirai")]),s._v(", 那么你可以在 "),a("code",[s._v("mirai.event.message.components")]),s._v(" 处找到所有消息组件的定义.")]),s._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[s._v("DETAILS")]),s._v(" "),a("p",[s._v("我们支持的可发出的消息组件:")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("At")]),s._v("("),a("code",[s._v("mirai.event.message.components.At")]),s._v("): At某人\n"),a("ul",[a("li",[a("code",[s._v("target: int")]),s._v(" "),a("ul",[a("li",[s._v("你要 at 的人")])])])])]),s._v(" "),a("li",[a("code",[s._v("AtAll")]),s._v("("),a("code",[s._v("mirai.event.message.components.AtAll")]),s._v("): At全体成员, 若你的机器人无相关权限, 抛出 "),a("code",[s._v("ValueError")]),s._v(".")]),s._v(" "),a("li",[a("code",[s._v("Plain")]),s._v("("),a("code",[s._v("mirai.event.event.message.components.AtAll")]),s._v("): 文本消息.\n"),a("ul",[a("li",[a("code",[s._v("text: str")]),s._v(" "),a("ul",[a("li",[s._v("将被发出的文本, 支持所有使用 "),a("code",[s._v("Unicode")]),s._v(" 的字符串.")])])])])]),s._v(" "),a("li",[a("code",[s._v("Image")]),s._v("("),a("code",[s._v("mirai.event.message.components.Image")]),s._v("): 图片, 有着特殊的使用方式, 将在之后重点讲到.")]),s._v(" "),a("li",[a("code",[s._v("Face")]),s._v("("),a("code",[s._v("mirai.event.message.components.Face")]),s._v("): QQ表情, 有着特殊的使用方式, 将在之后重点讲到.\n"),a("ul",[a("li",[a("code",[s._v("faceId: int")]),s._v(" "),a("ul",[a("li",[s._v("表情的 ID, 会在之后讲到如何传值.")])])])])])])]),s._v(" "),a("h2",{attrs:{id:"基本的使用方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本的使用方式"}},[s._v("#")]),s._v(" 基本的使用方式")]),s._v(" "),a("p",[s._v("只需要实例化即可, 在最新的提交中已经重写了 "),a("code",[s._v("__init__")]),s._v(" 方法, 这意味着你会得到更好的开发体验:")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" mirai "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" At"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" AtAll"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" Plain\n\nAt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("target"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("123456789")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nAtAll"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 需要有特定权限.")]),s._v("\nPlain"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("text"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"?"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("在发送消息时, 我们推荐使用列表的形式组合消息组件:")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" mirai "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" At"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" Plain\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("await")]),s._v(" app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sendGroupMessage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    sender"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("group"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n        At"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("target"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("sender"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        Plain"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("text"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"!"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("h2",{attrs:{id:"图片的发送方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#图片的发送方式"}},[s._v("#")]),s._v(" 图片的发送方式")]),s._v(" "),a("p",[s._v("我们强烈建议你使用 "),a("code",[s._v("Image.fromFileSystem")]),s._v(" 工厂方法来上传本地图片:")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" mirai "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" Image"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" Plain\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    Image"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("fromFileSystem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./image.png"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    Plain"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("text"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"这张图片发给你了!"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("此外, 你可以直接使用 "),a("code",[s._v("MessageChain")]),s._v(" 对象的\n"),a("code",[s._v("getFirstComponent")]),s._v(" 方法获取消息中的第一张图片, 也可以使用\n"),a("code",[s._v("getAllofComponent")]),s._v(" 方法获取消息中的所有图片:")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" typing "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" List\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" mirai "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" MessageChain"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" Image\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("async")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("event_gm")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("msg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" MessageChain"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 获取消息中的第一张图片")]),s._v("\n    a_image"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Image "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" msg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("getFirstComponent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Image"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 获取消息中所有图片")]),s._v("\n    all_images"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" List"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Image"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" \\\n        msg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("getAllofComponent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Image"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("p",[s._v("你可以直接发送其中的 "),a("code",[s._v("Image")]),s._v(" 对象, 大多数情况都会如预期中运转.")]),s._v(" "),a("h2",{attrs:{id:"qq-表情的发送方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#qq-表情的发送方式"}},[s._v("#")]),s._v(" QQ 表情的发送方式")]),s._v(" "),a("p",[s._v("我们内置了一个 "),a("code",[s._v("QQFaces")]),s._v("("),a("code",[s._v("mirai.face.QQFaces")]),s._v(") 的字典, 你可以直接从中获取 "),a("code",[s._v("faceId")]),s._v(":")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" mirai"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("face "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" QQFaces\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" mirai "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" Face\nFace"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("faceId"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("QQFaces"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'nanguo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# 实例化了一个会被发送为 "难过" 的表情.')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])])],1)}),[],!1,null,null,null);t.default=e.exports}}]);