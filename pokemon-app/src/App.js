import { useEffect, useState } from 'react';
import './App.css';
import { getAllPokemon } from './utils/pokemon/pokemon.js';

function App() {
  const initialURL = "https://pokeapi.co/api/v2/pokemon/";
  const [loading, setLoading] = useState(true); //初期値はtrue

  useEffect(() => {
    const fetchPokemonData = async () => {
      //全てのポケモンデータを取得
      let res = await getAllPokemon(initialURL);
      console.log(res);
      setLoading(false); //取得ができてローディングが完了したのでstateを変更
    }
    fetchPokemonData();
  }, []);

  return (
    <div className="App">
      {loading ? (
        <h1>ロード中・・・</h1>
      ) : (
        <>
          <h1>ポケモンデータを取得しました</h1>
        </>
      )}
    </div>
  );
}

export default App;
