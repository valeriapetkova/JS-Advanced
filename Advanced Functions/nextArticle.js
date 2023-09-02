function nextArticle(articles) {
    return () => {
        if (articles.length > 0) {
            let content = document.getElementById('content');
            let article = document.createElement('article');
            let currText = articles.shift();
            article.textContent = currText;
            content.appendChild(article);
        }
    }
}