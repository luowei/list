//加载文章列表
function loadPageList() {
    (async () => {
        const response = await fetch('https://api.github.com/repos/luowei/list/contents/docs');
        const data = await response.json();
        let htmlString = '<ul class="posts">';

        let items = data.reverse()
        for (let file of items) {
//                var title = file.content.match(/title:[^"]*"([^"]*)"/gm)[1];
//                htmlString += `<li><a href="${path}">${title}</a></li>`;
            var path = file.path.replace(/\.[^/.]+$/g, "");
            var name = file.name.replace(/\.[^/.]+$/g, "");
            htmlString += `<li><a href="${path}">${name}</a></li>`;
        }
        htmlString += '</ul>';
        document.getElementById('list').innerHTML = htmlString;
//            document.getElementsByTagName('body')[0].innerHTML = htmlString;
    })()
}