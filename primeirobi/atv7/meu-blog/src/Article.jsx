const Article = (props) => {
  return (
    <article style={{ flex: 2 }}>
      <h2>{props.titulo}</h2>
      <time>{props.data}</time>
      <p><strong>Por: {props.autor}</strong></p>
      {props.conteudo.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
      <figure>
        <img src={props.imagem} alt="Stray Kids" style={{ width: '100%' }} />
        <figcaption>fonte: Google.</figcaption>
      </figure>
    </article>
  );
};

export default Article;