import { useEffect, useMemo, useState } from "react";
import CounterCard from "./components/CounterCard";
import LogPanel from "./components/LogPanel";

type LogItem = {
  id: string;
  at: string;
  message: string;
};

function nowTime() {
  const d = new Date();
  return d.toLocaleTimeString();
}

function uid() {
  // достаточно для демо
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

export default function App() {
  // ✅ состояние (data)
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Алиса");
  const [logs, setLogs] = useState<LogItem[]>([]);

  // ✅ “действие” для логов (чтобы всегда было видно: событие -> действие)
  const addLog = (message: string) => {
    const item: LogItem = { id: uid(), at: nowTime(), message };
    setLogs((prev) => [item, ...prev].slice(0, 30));
  };

  // ✅ actions (функции-действия)
  const actions = useMemo(() => {
    return {
      increment() {
        addLog("CLICK: +1");
        setCount((c) => c + 1);
      },
      decrement() {
        addLog("CLICK: -1");
        setCount((c) => c - 1);
      },
      reset() {
        addLog("CLICK: reset");
        setCount(0);
      },
      setUserName(next: string) {
        addLog(`INPUT: name -> "${next}"`);
        setName(next);
      },
      fakeAsyncAddFive() {
        addLog("CLICK: async +5 (start)");
        setTimeout(() => {
          addLog("ASYNC: +5 (finish)");
          setCount((c) => c + 5);
        }, 600);
      },
      clearLogs() {
        setLogs([]);
      },
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name]); 
  // Примечание: name тут не обязателен, но оставляю как пример зависимости.
  // В реале можно сделать actions без useMemo — для обучения это не критично.

  // ✅ показать “жизнь” состояния: как только count изменился — эффект сработал
  useEffect(() => {
    // это прям видно в консоли
    console.log("[effect] count changed:", count);
  }, [count]);

  return (
    <div style={{ padding: 16, fontFamily: "system-ui, -apple-system, Inter, Arial" }}>
      <h1 style={{ margin: 0 }}>Demo: события → actions → state → UI</h1>
      <p style={{ marginTop: 8, opacity: 0.8 }}>
        Открой DevTools → Console, понажимай кнопки и посмотри, как всё “переигрывается”.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginTop: 16 }}>
        <div>
          <CounterCard
            count={count}
            name={name}
            onNameChange={actions.setUserName}
            onInc={actions.increment}
            onDec={actions.decrement}
            onReset={actions.reset}
            onAsyncAddFive={actions.fakeAsyncAddFive}
          />
        </div>

        <div>
          <LogPanel logs={logs} onClear={actions.clearLogs} />
        </div>
      </div>
    </div>
  );
}
