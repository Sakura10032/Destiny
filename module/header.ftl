<#include "/common/macro/common_macro.ftl">
<#macro header title,keywords,description>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1">
    <meta name="renderer" content="webkit">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">

    <@globalHeader />

    <title>${title!}</title>
    <meta name="keywords" content="${keywords!}" />
    <meta name="description" content="${description!}" />
    <#if settings.general.theme_style??>
        <#if settings.style.background_image??>
            <style type="text/css">
                body:before {
                    background-image: url(${settings.style.background_image}) !important;
                }
            </style>
        <#else>
        <#if settings.style.background_filter??>
            <style type="text/css">
                body:before {
                    filter: blur(${settings.style.background_filter}) !important;
                }
            </style>
        </#if>
    </#if>
    <!-- 引入主题css -->
    <#if settings.general.theme_style=1>
        <link rel="stylesheet" href="${static!}/source/css/dist/style-one.min.css">
        <link rel="stylesheet" href="${static!}/source/css/dist/post-one.min.css">
        <link rel="stylesheet" href="${static!}/source/css/dist/media-one.min.css">
        <!-- 引入文章内容样式css -->
        <link rel="stylesheet" href="${static!}/source/css/dist/article-content-one.min.css'); ?>">
    <#else>
        <link rel="stylesheet" href="${static!}/source/css/dist/style-two.min.css">
        <link rel="stylesheet" href="${static!}/source/css/dist/post-two.min.css">
        <link rel="stylesheet" href="${static!}/source/css/dist/media-two.min.css">
        <!-- 引入文章内容样式css -->
        <link rel="stylesheet" href="${static!}/assets/css/dist/article-content-two.min.css">
    </#if>
</head>
<body class="<#if is_index??>bg-grey</#if>" gtools_scp_screen_capture_injected="true">
<!--[if lt IE 8]>
<div class="browsehappy" role="dialog">
    当前网页 <strong>不支持</strong> 你正在使用的浏览器. 为了正常的访问, 请 <a href="http://browsehappy.com/" target="_blank">升级你的浏览器</a>。
</div>
<![endif]-->