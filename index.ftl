<#include "header.ftl">
<@layout title="${options.blog_title!}" keywords="${options.seo_keywords!}" description="${options.seo_description!}">
    <h1>公告</h1>
    <p>
        ${settings.index_notice!}
    </p>

    <h1>文章列表</h1>
    <ul>
        <#list posts.content as post>
            <li>
                <a href="${context!}">${post.title}</a>
            </li>
        </#list>
    </ul>
</@layout>
