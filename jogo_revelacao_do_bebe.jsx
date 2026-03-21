import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function BabyRevealGame() {
  const [level, setLevel] = useState(0);
  const [role, setRole] = useState("");

  const nextLevel = () => setLevel((prev) => prev + 1);

  const ImgBtn = ({ emoji, onClick }) => (
    <button
      onClick={onClick}
      className="text-3xl p-4 rounded-xl bg-white shadow hover:scale-110 transition"
    >
      {emoji}
    </button>
  );

  // -------- LEVEL 0 (ESCOLHA QUEM É) --------
  const Level0 = () => {
    const roles = [
      "Primo(a)",
      "Tio(a)",
      "Avô(ó)",
      "Irmão(ã)",
      "Amigo(a)"
    ];

    return (
      <div className="space-y-4">
        <p>Quem é você na família?</p>
        <div className="grid grid-cols-2 gap-2">
          {roles.map((r) => (
            <Button
              key={r}
              onClick={() => {
                setRole(r);
                nextLevel();
              }}
            >
              {r}
            </Button>
          ))}
        </div>
      </div>
    );
  };

  // -------- LEVEL 1 --------
  const Level1 = () => {
    const items = ["👶", "👶", "👶", "👶", "🍼"];
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

  // -------- LEVEL 2 --------
  const Level2 = () => {
    const options = ["🍫", "🍕", "🍔", "🍰", "🍗"];
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

  // -------- LEVEL 3 --------
  const Level3 = () => {
    const sequence = ["⭐", "🌙", "⭐"];
    const [input, setInput] = useState([]);

    return (
      <div className="space-y-4">
        <p>Repita a sequência</p>
        <p className="text-2xl">{sequence.join(" ")}</p>
        <div className="flex gap-2 justify-center">
          {["⭐", "🌙"].map((s) => (
            <ImgBtn key={s} emoji={s} onClick={() => setInput([...input, s])} />
          ))}
        </div>

        {input.length === sequence.length && (
          <div>
            {JSON.stringify(input) === JSON.stringify(sequence) ? (
              <Button onClick={nextLevel}>Avançar</Button>
            ) : (
              <p>Errado 😅</p>
            )}
          </div>
        )}
      </div>
    );
  };

  // -------- LEVEL 4 --------
  const Level4 = () => {
    const options = ["🌅", "🌇", "🌙", "🌃", "⏰"];
    return (
      <div className="space-y-4">
        <p>Qual período é mais tranquilo?</p>
        <div className="grid grid-cols-5 gap-2">
          {options.map((o, i) => (
            <ImgBtn key={i} emoji={o} onClick={() => o === "🌙" && nextLevel()} />
          ))}
        </div>
      </div>
    );
  };

  // -------- LEVEL 5 --------
  const Level5 = () => {
    const options = ["🚗", "📱", "🍼", "💻", "🔑"];
    return (
      <div className="space-y-4">
        <p>Escolha o item correto</p>
        <div className="grid grid-cols-5 gap-2">
          {options.map((o, i) => (
            <ImgBtn key={i} emoji={o} onClick={() => o === "🍼" && nextLevel()} />
          ))}
        </div>
      </div>
    );
  };

  // -------- LEVEL 6 --------
  const Level6 = () => {
    const options = ["👔", "🍼", "👞", "⌚", "🕶️"];
    return (
      <div className="space-y-4">
        <p>Qual é comum no enxoval?</p>
        <div className="grid grid-cols-5 gap-2">
          {options.map((o, i) => (
            <ImgBtn key={i} emoji={o} onClick={() => o === "🍼" && nextLevel()} />
          ))}
        </div>
      </div>
    );
  };

  // -------- LEVEL 7 --------
  const Level7 = () => {
    const options = ["🐶", "🐱", "👶", "🐭", "🐹"];
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

  // -------- LEVEL 8 --------
  const Level8 = () => {
    const options = ["🛏️", "🧸", "🍼", "🪑", "📺"];
    return (
      <div className="space-y-4">
        <p>O que ajuda no sono?</p>
        <div className="grid grid-cols-5 gap-2">
          {options.map((o, i) => (
            <ImgBtn key={i} emoji={o} onClick={() => o === "🍼" && nextLevel()} />
          ))}
        </div>
      </div>
    );
  };

  // -------- LEVEL 9 --------
  const Level9 = () => {
    const options = ["🎮", "🍼", "🖱️", "⌨️", "🎧"];
    return (
      <div className="space-y-4">
        <p>Qual é essencial?</p>
        <div className="grid grid-cols-5 gap-2">
          {options.map((o, i) => (
            <ImgBtn key={i} emoji={o} onClick={() => o === "🍼" && nextLevel()} />
          ))}
        </div>
      </div>
    );
  };

  // -------- FINAL --------
  const Level10 = () => (
    <div className="text-3xl font-bold text-blue-600">
      🎉 Parabéns! Você vai ser {role} de MENINO 💙👶
    </div>
  );

  const levels = [
    Level0,
    Level1,
    Level2,
    Level3,
    Level4,
    Level5,
    Level6,
    Level7,
    Level8,
    Level9,
    Level10
  ];

  const Current = levels[level];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-pink-100 p-4">
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
