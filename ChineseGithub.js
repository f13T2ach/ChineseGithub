// ==UserScript==
// @name         硬翻译 Github
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  林立于世界丛林的编程社区
// @author       F13T2ach
// @match        https://*.github.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=bing.com
// @grant        none
// ==/UserScript==

//欠使用者的一个解释
//因为有些单词会和别的不相干的对象混淆，所以某些容易理解的单词我这里不做翻译
//非常抱歉麻烦你手动翻译。



(function () {
    'use strict';

    // Your code here...
    //加速器：https://zhuanlan.zhihu.com/p/428454772
    Main();
    window.onload = function () {
        Main();
    };

    // 需要观察的节点
    const targetNode = document.querySelector('title')
    // 配置器的配置：需要监听的变动
    const config = { characterData: true, subtree: true, childList: true }
    // 变动时回调
    const callback = function(mutations) {
        Main();
    }
    // 创建一个MutationObserver实例
    const observer = new MutationObserver(callback)
    // 监听目标节点
    observer.observe(targetNode, config)
    //observer.disconnect()



    //refresh button
    //var oHead = document.getElementsByClassName('show-on-focus').item(0);
    //var oScript= document.createElement("a");
    //oScript.className = "btn btn-primary mr-2"
    //oScript.text="刷新翻译"
    //oHead.append(oScript)


    //Replace elements
    //NOTE:正则表达式是必须的
    function r(target,hopes)
    {
        document.body.innerHTML = document.body.innerHTML.replace(target,hopes);
    }


    function Main()
    {

        var path = window.location.pathname;
        if(path=="/")
        {
            console.info("[CG]Index");
            TransIndexPg();
        }
        else if(document.body.outerHTML.includes("Issues")&&document.body.outerHTML.includes("Pull requests")&&document.body.outerHTML.includes("Code")&&!document.body.outerHTML.includes("History")&&!document.body.outerHTML.includes("Raw")&&!document.body.outerHTML.includes("Blame")&&!path.includes("/issues")&&!document.body.outerHTML.includes("Filters")&&!path.includes("/search")){
            //后面的非条件是用来分辨是不是文件或者文件夹的页面，不然就会出现把代码或者文件夹名称一起翻译的尴尬情况
            console.info("[CG]Repository")
            TransRespIndxPg();
        }
        else if((path.includes("/issues")||path.includes("/pulls"))&&document.body.outerHTML.includes("Filters"))
        {
            TransIssueAndPullsPg()
        }
        else if(path.includes("/issues/"))//check url
        {
            TransIssuesDetail();
        }
        else if(path.includes("/actions"))
        {
            TransAction();
        }
        else if(path.includes("/projects"))
        {
            TransPjPg();
        }
        else if(path.includes("/wiki"))
        {
            TransWiki();
        }
    }

    function TransIndexPg()
    {
        //Up Lable
        //r(/Search or jump to…/g, '搜索或者跳转至...'); disable  beacuse too lag
        //Left
        r(/Recent Repositories/g, '最近的仓库');
        r(/Recent activity/g, '近期的活动');
        //Center Up
        r(/When you take actions across GitHub, we’ll provide links to that activity here./g, '当您在 GitHub 执行操作时，我们将在此处提供指向该活动的链接。');//From bing
        r(/Learn Git and GitHub without any code!/g, '以无代码的形式学习使用Git和Github');
        r(/Using the Hello World guide, you’ll create a repository, start a branch, write comments, and open a pull request./g,'通过使用 Hello World 指南，你将学会创建一个仓库，启动一个分支，写提交注释以及启用 Pull Request');
        r(/Read the guide/g,'尝试');
        r(/Start a project/g,'创建一个项目');
        //Rss Lable
        //Column 1
        r(/Following/g,'以下');
        r(/For you/g,'为你推荐');
        r(/Dismiss this/g,'我不要');
        r(/Continue/g,'尝试');
        r(/Introduce yourself/g,'介绍你自己');
        r(/The easiest way to introduce yourself on GitHub is by creating a README in a repository about you! You can start here:/g,'介绍你自己的最简单的方式就是在你的仓库里创建一个README并填入自我介绍，就像是这样：');
        r(/Discover interesting projects and people to populate your personal news feed./g,'探索有趣的项目和人来充盈你的私人推荐');//Feed means RSS
        //Column 2
        r(/Welcome to the new feed!/g,'欢迎来到新的推荐列表！');
        r(/Send feedback/g,'发送使用反馈');
        r(/ We’re updating the cards and ranking all the time, so check back regularly. At first,/g,'我们一直在更新这个栏目，请定期查看。注意，');
        r(/you might need to follow some people or star some repositories to get started/g,'您可能需要关注某些人或为某些存储库 Star 一下才能开始使用');
        r(/Recommended for you/g,'为你推荐');
    }

    function TransRespIndxPg()
    {
        //top
        r(/Search or jump to…/g, '搜索或者跳转至...');
        r(/Public/g,'公共的');
        r(/Pull requests/g,'Pull');
        r(/Actions/g,'Action');
        r(/Projects/g,'项目');
        //r(/Wiki/g,'文档');
        r(/Security/g,'安全');
        r(/Insights/g,'报表');
        r(/Settings/g,'设置');
        r(/Discussions/g,'交流')
        //center
        r(/Go to file/g,'查找');
        r(/Add file/g,'创建');
        r(/commits/g,'次提交');
        r(/No releases published/g,'该项目没有发布编译后的软件');
        r(/Create a new release/g,'我要发布一个');
        r(/No packages published/g,'该项目没有发布过包');
        r(/Publish your first package/g,'发布你的第一个包');
        r(/Create a new package/g,'我要发布一个');
        //necessary
        r(/Dismiss/g,'忽略')

    }

    function TransIssueAndPullsPg()
    {
        TransRespIndxPg();
        //top
        //new one's help
        r(/Label issues and pull requests for new contributors/g,'提交和处理问题并解决');
        r(/Now, GitHub will help potential first-time contributors/g,'现在，GitHub将帮助潜在的首次撰稿人');
        r(/discover issues/g,'探索');
        r(/labeled with/g,'被标记为');
        r(/good first issue/g,'好的开端的问题')
        //filter lable;
        r(/Filter/g,'筛选');r(/Filters/g,'筛选');//Translate same mean
        r(/Open issues and pull requests/g,'只显示有效的Issue和Pull请求')
        r(/Your issues/g,'只显示你创建的Issues');
        r(/Your pull requests/g,'只显示你的Pull请求');
        r(/Everything assigned to you/g,'只显示由你负责的');
        r(/Everything mentioning you/g,'只显示提到你的');
        r(/View advanced search syntax/g,'看更牛逼的搜索语法')
        r(/Clear current search query, filters, and sorts/g,'清除当前搜索记录和偏好');
        r(/New issue/g,'新建');
        //none of issues
        r(/Welcome to issues!/g,'欢迎使用Issues!');
        r(/Issues are used to track todos, bugs, feature requests, and more. As issues are created, they’ll appear here in a searchable and filterable list./g,'Issues是用于报告Bug，公布软件开发进度，反馈用户想要的特性等等。Issues被创建时，他会出现在筛选器和搜索面板中。');
        r(/To get started, you should/g,'要开始，你得先');
        r(/create an issue/g,'创建一个Issues');
        r(/There aren’t any open issues./g,'空');
        r(/ProTip!/g,'提示：')

        //special things in pull page
        r(/Welcome to pull requests!/g,'欢迎使用Pull Requests');
        r(/There aren’t any open pull requests./g,'没有Pull记录');
        r(/Pull help you collaborate on code with other people. As pull requests are created, they’ll appear here in a searchable and filterable list./g,'Pull能帮助你与他人协作。创建Pull Requst后，它会显示在这个列表中。');
        r(/You could search/g,'你可以在');
        r(/all of GitHub/g,'整个Github上搜索');
        r(/or try an/g,'或者使用');
        r(/advanced search/g,'高级搜索');
        r(/New pull request/g,'新建');
    }

    function TransIssuesDetail()
    {
        console.log("[CG]Issues detail")
        TransRespIndxPg();
        r(/opened this issue on/g,'在右边所示的事件提交了这个Issues');
        r(/New issue/g,'新建');
        //right
        r(/Assignees/g,'负责者');
        r(/No one assigned/g,'没有特定的负责者');
        r(/Labels/g,'类别');
        r(/None yet/g,'暂无');
        r(/Milestone/g,'标记');
        r(/No milestone/g,'未被分类');
        r(/Notifications/g,'关注问题');
        r(/Subscribe/g,'关注');
        r(/You’re not receiving notifications from this thread./g,'你暂未收到此问题发出的通知');
        r(/Development/g,'开发');
        r(/No branches or pull requests/g,'没有与此有关的分支和Pull');
        r(/Customize/g,'定制');
        r(/Notification settings/g,'通知设置');
        //reply
        r(/Leave a comment/g,'你的回复。');
        r(/Attach files by dragging & dropping, selecting or pasting them./g,'你可以拖放，选择和粘贴附件');
        r(/Comment/g,'回复');
        r(/Remember, contributions to this repository should follow/g,'请注意，回复必须遵守下方超链接所示的两项条例、文件或规定。\n由于技术所限，这个页面的翻译会波及贡献者提交的回复的文本内容，你可以在油猴面板暂时关闭该插件来阅读受到翻译失误的文本内容。');
    }

    function TransAction()
    {
        TransActionFirstUse();
        //no actions.
        r(/Get started with GitHub Actions/g,'让我们开始');
        r(/Build, test, and deploy your code. Make code reviews, branch management, and issue triaging work the way you want. Select a workflow to get started./g,'构建，测试和部署代码。使代码审查、分支管理和问题分类以您想要的方式工作。选择一个工作流以开始。')
        r(/Skip this and /g,'跳过这个并且');
        r(/set up a workflow yourself/g,'设置一个你自己的工作流');
        r(/Suggested for this repository/g,'针对这个仓库为你推荐');
        r(/Deployment/g,'部署');
        r(/Configure/g,'配置');
        r(/Continuous integration/g,'集成功能');
        r(/Automation/g,'自动化');
        //action manager
        r(/New workflow/g,'新建')
        r(/All workflows/g,'全部的工作流');
        r(/Showing runs from all workflows/g,'显示所有正在运行的工作流');
        r(/View workflow file/g,'查看工作流的源文件');
        r(/Delete workflow run/g,'从表中移除');
        r(/Workflows/g,'项目的工作流');
        //r(/Are you sure you want to delete this workflow run?/g,'你真的要移除它吗？');
        //r(/ This action cannot be undone./g,'操作不能被撤销。');
        //r(/Yes, permanently delete this workflow run/g,'我明白，删除');
        r(/There are no workflow runs yet./g,'空');
        r(/workflow runs/g,'正在运行的工作流');
    }

    function TransActionFirstUse()
    {
        r(/Automate your workflow from idea to production/g,'你的工作，何必循环往复');
        r(/GitHub Action makes it easy to automate all your software workflows, now with world-class CI/g,'Github Action可以让你的项目的工作流程变得自动化，现在体验世界一流的 CI');
        r(/CD. Build, test, and deploy your code right from GitHub./g,'CD来构建，测试，以及部署你的项目。');
        r(/Linux, macOS, Windows, ARM, and containers/g,'Linux，MacOS，Windows，ARM和各类容器');
        r(/Hosted runners for every major OS make it easy to build and test all your projects. Run directly on a VM or inside a container. Use your own VMs, in the cloud or on-prem, with self-hosted runners./g,'每个主系统的托管运行单元都可以轻松地构建和测试所有项目。你可以直接在 VM 上或在容器内运行，或在云端中或本地使用自己的 VM，并具有自托管运行程序。');
        r(/Save time with matrix workflows that simultaneously test across multiple operating systems and versions of your runtime./g,'使用 Matrix Workflows 技术可以在多个操作系统和运行时版本之间同时测试，从而节省时间。');
        r(/Any language/g,'任何语言');
        r(/GitHub Action supports Node.js, Python, Java, Ruby, PHP, Go, Rust, .NET, and more. Build, test, and deploy applications in your language of choice./g,'Github支持各类编程（或标记）语言（或平台）诸如 Node.js, Python, Java, Ruby, PHP, Go, Rust, .NET 框架, 等等。以用你选择的语言来构建、测试和部署你的项目');
        r(/Live logs/g,'实时日志');
        r(/See your workflow run in realtime with color and emoji. It’s one click to copy a link that highlights a specific line number to share a CI/g,'使用颜色、表情来标记项目的运行流程，只需单击一下即可复制一个突出显示特定行号的链接，以共享CI');
        r(/CD failure/g,'CD故障');
        r(/Automate your software development practices with workflow files embracing the Git flow by codifying it in your repository./g,'通过在存储库中编纂包含 Git 流的工作流文件，自动执行软件开发实践。');
        r(/Multi-container testing/g,'多容器测试');
        //我没学过docker
        r(/Test your web service and its DB in your workflow by simply adding some/g,'只需向工作流文件添加一些 ');
        r(/ to your workflow file./g,' 即可在工作流中测试 Web 服务及其数据库。');
        r(/Learn More/g,'了解更多');
    }

    function TransPjPg()
    {
        r(/Add project/g,'新建');
        r(/Easily access your projects here/g,'在这轻松管理你的项目');
        r(/Add a project for it to appear in this list or go to/g,'新建一个项目或者前往');
        r(/your projects/g,'你的资料页');
        r(/to create a new one./g,'来新建一个新的');
        r(/Go to your profile to create a new project/g,'前往你的资料页创建一个新的');
    }

    function TransWiki()
    {
        r(/Wikis provide a place in your repository to lay out the roadmap of your project, show the current status, and document software better, together./g,'Wiki 在您的存储库中提供了一个用于布置项目的规划，显示当前状态及记录软件成长的地方。</br>警告：本插件只会翻译Wiki页面的句子，这是为了避免由翻译失误导致Wiki文本错乱而为您带来麻烦。')
        r(/Create the first page/g,'新建');
        if(window.location.pathname.includes("/wiki/_new"))
        {
            r(/Create new page/g,'新建');
            r(/Edit message/g,'备注');
            r(/Initial Home page/g,'初始页');
            r(/Save Pge/g,'保存');
        }
    }

})();


