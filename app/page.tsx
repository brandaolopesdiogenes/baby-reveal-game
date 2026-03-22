"use client";

import { useState } from "react";
const Card = ({ children }) => (
  <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-xl">
    {children}
  </div>
);

const CardContent = ({ children }) => <div>{children}</div>;

const Button = ({ children, onClick }) => (
  <button
    onClick={onClick}
    className="w-full p-3 rounded-xl bg-gray-100 hover:bg-gray-200 transition"
  >
    {children}
  </button>
);

export default function BabyRevealGame() {
  const [level, setLevel] = useState(0);
  const [role, setRole] = useState("");

  const nextLevel = () => setLevel((prev) => prev + 1);

  const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);

  const ImgBtn = ({ emoji, onClick }) => (
    <button onClick={onClick} className="text-3xl p-4 rounded-xl bg-white shadow hover:scale-110 transition">
      {emoji}
    </button>
  );

  // -------- LEVEL 0 --------
  const Level0 = () => {
    const roles = ["Primo(a)", "Tio(a)", "Avô(ó)", "Irmão(ã)", "Amigo(a)"];
    return (
      <div className="space-y-4">
        <p>Quem é você na família?</p>
        <div className="grid grid-cols-2 gap-2">
          {roles.map((r) => (
            <Button key={r} onClick={() => { setRole(r); nextLevel(); }}>{r}</Button>
          ))}
        </div>
      </div>
    );
  };

  // -------- PERGUNTAS TEXTUAIS (COM SHUFFLE) --------

  const LevelQ1 = () => {
    const options = shuffle(["1, 1 e 14", "1, 2 e 14", "1, 2 e 15", "3, 7 e 12", "5, 10 e 15"]);
    return (
      <div className="space-y-4">
        <p>Qual idade dos nossos filhos?</p>
        {options.map((o, i) => (
          <Button key={i} onClick={() => o === "1, 1 e 14" && nextLevel()}>{o}</Button>
        ))}
      </div>
    );
  };

  const LevelQ2 = () => {
    const options = shuffle(["José e José", "Carlos e João", "Pedro e Marcos", "Luis e Paulo", "André e Bruno"]);
    return (
      <div className="space-y-4">
        <p>Qual o nome dos avôs?</p>
        {options.map((o, i) => (
          <Button key={i} onClick={() => o === "José e José" && nextLevel()}>{o}</Button>
        ))}
      </div>
    );
  };

  const LevelQ3 = () => {
    const options = shuffle(["Josefa e Geraldina", "Marli e Geraldina", "Ana e Maria", "Clara e Joana", "Beatriz e Paula"]);
    return (
      <div className="space-y-4">
        <p>Qual o nome das avós?</p>
        {options.map((o, i) => (
          <Button key={i} onClick={() => o === "Josefa e Geraldina" && nextLevel()}>{o}</Button>
        ))}
      </div>
    );
  };

  const LevelQ4 = () => {
    const options = shuffle(["Caleb", "Rex", "Thor", "Max", "Bob"]);
    return (
      <div className="space-y-4">
        <p>Qual o nome do cachorro que já tivemos?</p>
        {options.map((o, i) => (
          <Button key={i} onClick={() => o === "Caleb" && nextLevel()}>{o}</Button>
        ))}
      </div>
    );
  };

  const LevelQ5 = () => {
    const options = shuffle(["Comida Salgada", "Chocolate", "Doce", "Pizza", "Sorvete"]);
    return (
      <div className="space-y-4">
        <p>O que a mamãe mais quis comer nessa gravidez?</p>
        {options.map((o, i) => (
          <Button key={i} onClick={() => o === "Comida Salgada" && nextLevel()}>{o}</Button>
        ))}
      </div>
    );
  };

  // -------- JOGOS VISUAIS --------

  const LevelG1 = () => {
    const items = shuffle(["👶", "👶", "👶", "👶", "🍼"]);
    return (
      <div className="space-y-4">
        <p>Encontre o diferente</p>
        <div className="grid grid-cols-5 gap-2">
          {items.map((i, idx) => (
            <ImgBtn key={idx} emoji={i} onClick={() => i === "🍼" && nextLevel()} />
          ))}
        </div>
      </div>
    );
  };

  const LevelG2 = () => {
    const options = shuffle(["🍫", "🍕", "🍔", "🍰", "🍗"]);
    return (
      <div className="space-y-4">
        <p>O que a mamãe mais quis comer?</p>
        <div className="grid grid-cols-5 gap-2">
          {options.map((o, i) => (
            <ImgBtn key={i} emoji={o} onClick={() => o === "🍗" && nextLevel()} />
          ))}
        </div>
      </div>
    );
  };

  const LevelG3 = () => {
    const options = shuffle(["🤰", "🧸", "👟", "⌚", "🕶️"]);
    return (
      <div className="space-y-4">
        <p>Qual representa a gestação?</p>
        <div className="grid grid-cols-5 gap-2">
          {options.map((o, i) => (
            <ImgBtn key={i} emoji={o} onClick={() => o === "🤰" && nextLevel()} />
          ))}
        </div>
      </div>
    );
  };

  const LevelG4 = () => {
    const options = shuffle(["🐶", "🐱", "👶", "🐭", "🐹"]);
    return (
      <div className="space-y-4">
        <p>Encontre o correto</p>
        <div className="grid grid-cols-5 gap-2">
          {options.map((o, i) => (
            <ImgBtn key={i} emoji={o} onClick={() => o === "👶" && nextLevel()} />
          ))}
        </div>
      </div>
    );
  };

  // -------- FINAL --------
  const LevelFinal = () => (
    <div className="flex flex-col items-center gap-4 bg-gradient-to-br from-pink-100 to-pink-300 p-6 rounded-xl">
      <div className="text-5xl animate-bounce">👶🎀</div>
      <div className="text-3xl font-bold text-pink-600">
        🎉 Parabéns! Você vai ser {role} de MENINA 💖👶
      </div>
    </div>
  );

  // -------- ORDEM INTERCALADA --------
  const levels = [
    Level0,
    LevelG1,
    LevelQ1,
    LevelG2,
    LevelQ2,
    LevelG3,
    LevelQ3,
    LevelG4,
    LevelQ4,
    LevelQ5,
    LevelFinal
  ];

  const Current = levels[level];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <Card className="w-full max-w-xl rounded-2xl shadow-xl">
        <CardContent className="p-6 text-center space-y-6">
          <h1 className="text-2xl font-bold">Descubra o segredo 👶</h1>
          <p>Etapa {level + 1}/{levels.length}</p>
          <Current />
        </CardContent>
      </Card>
    </div>
  );
}
