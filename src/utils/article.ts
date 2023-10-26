export async function guestArticles(): Promise<any> {
    const res = await fetch('https://www.api.owenahub.com/api/guest/articles');

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    const { data } = await res.json();
    return data;
}

export async function guestArticle(id: number): Promise<any> {
    const res = await fetch(`https://api.owenahub.com/api/guest/articles/${id}`);
    const data = await res.json();
    return data;
}