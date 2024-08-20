"use client";

export default function Home() {
  return (
    <main>
      Integrantes da dupla: João Victor e Renato
      <MinhaDIV l="320px" a="240px" />
    </main>
  );
}

function MinhaDIV({ l, a }) {
  return (
    <div
      style={{
        width: l,
        height: a,
        backgroundColor: "lightgrey",
        borderRadius: "10px",
      }}
    >
      <h1 class="h">Tem Açucar?</h1>
      <p class="p">
        – Oi, você tem açúcar? <br></br> – Não. <br></br> – Oi, você tem açúcar?{" "}
        <br></br> – Eu já disse que não! <br></br> – Oi, você tem açúcar?{" "}
        <br></br> – Não! E se perguntar mais uma vez, te dou um tiro! <br></br>{" "}
        – Oi, você tem uma arma? <br></br> – Não! <br></br> – E açúcar?{" "}
      </p>
      <img
        src="https://preview.redd.it/quais-filmes-pra-voc%C3%AAs-s%C3%A3o-absolute-cinema-meu-big-3-a%C3%AD-v0-5ffq26ikc9ad1.jpg?width=640&crop=smart&auto=webp&s=2b146552ae966dbe4fd4f726b787c9d1b7f42b44"
        alt=""
        class="imagem"
      />
      <div
        style={{
          display: "flex",
          gap: "20px",
          marginTop: "2%",
        }}
      >
        <a href="https://youtu.be/JHjiIx93JkE?feature=shared" target="_blank">
          <img
            src="https://img.youtube.com/vi/JHjiIx93JkE/0.jpg"
            alt="Video 1"
            style={{ width: "200px", borderRadius: "10px" }}
          />
        </a>
        <a href="https://youtu.be/RpB8LPZWi_U?feature=shared" target="_blank">
          <img
            src="https://img.youtube.com/vi/RpB8LPZWi_U/0.jpg"
            alt="Video 2"
            style={{ width: "200px", borderRadius: "10px" }}
          />
        </a>
        <a href="https://youtu.be/hgCMINtAMBc?feature=shared" target="_blank">
          <img
            src="https://img.youtube.com/vi/hgCMINtAMBc/0.jpg"
            alt="Video 3"
            style={{ width: "200px", borderRadius: "10px" }}
          />
        </a>
      </div>
    </div>
  );
}
