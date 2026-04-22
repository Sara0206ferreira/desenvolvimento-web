export default function Sidebar({ posts }) {
return (
<aside style={{ flex: 1 }}>
    <h3>Posts Relacionados</h3>
    <ul>
    {posts.map(post => (
        <li key={post.id}><a href="#">{post.titulo}</a></li>
    ))}
    </ul>
</aside>
);
}