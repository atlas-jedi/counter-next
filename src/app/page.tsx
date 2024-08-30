import { counter, getCount } from './counter';

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">
          Contador: <span id="count">{getCount()}</span>
        </h1>
        <form action={counter} className="space-x-4">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
            name="action"
            value="increment"
          >
            Incrementar
          </button>
          <button
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
            name="action"
            value="decrement"
          >
            Decrementar
          </button>
        </form>
        <p className="mt-10">Este contador funciona totalmente no servidor.</p>
        <p>Funciona mesmo desabilitando o Javascript.</p>
      </div>
    </div>
  );
}
