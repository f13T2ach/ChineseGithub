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

(function() {
    'use strict';

    // Your code here...
    //加速器：https://zhuanlan.zhihu.com/p/428454772
    window.onload = function () {
      Main();
    };

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
            TransIndexPg();
        }
        else if(document.body.outerHTML.includes("Issues")&&document.body.outerHTML.includes("Pull requests")&&document.body.outerHTML.includes("Code")&&!document.body.outerHTML.includes("History")&&!document.body.outerHTML.includes("Raw")&&!document.body.outerHTML.includes("Blame")){
            //后面的非条件是用来分辨是不是文件或者文件夹的页面，不然就会出现把代码或者文件夹名称一起翻译的尴尬情况
            TransRespIndxPg();
        }

    }

    function TransIndexPg()
    {
        //Up Lable
        r(/Search or jump to…/g, '搜索或者跳转至...');
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
        r(/Code/g,'源码');
        r(/Issues/g,'反馈');
        r(/Pull requests/g,'Pull管理');
        r(/Actions/g,'Action服务');
        r(/Projects/g,'项目管理');
        r(/Wiki/g,'文档');
        r(/Security/g,'安全');
        r(/Insights/g,'报表');
        r(/Settings/g,'设置');
        //center
        r(/Go to file/g,'查找');
        r(/Add file/g,'创建');
        r(/commits/g,'次提交');
        r(/No releases published/g,'该项目没有发布编译后的软件');
        r(/Create a new release/g,'我要发布一个');
        r(/No packages published/g,'该项目没有发布过包');
        r(/Publish your first package/g,'发布你的第一个包');
        r(/Create a new package/g,'我要发布一个');

    }

    

})();

