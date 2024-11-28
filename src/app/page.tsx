import TransactionDecoder from '../components/TransactionDecoder';

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-8">
          AdminVault Transaction Decoder
        </h1>
        <TransactionDecoder />
      </div>
    </main>
  );
}